# The Space — Technical Documentation

Static portfolio site built as a **2D spatial graph** over an SVG coordinate field, with an alternate **document layout** (Simple View). No build step, framework, or backend: plain HTML, CSS, and client-side JavaScript served as static assets (e.g. GitHub Pages).

**Version:** `0.1.0`

---

## Architecture overview

```
index.html          Shell DOM (chrome, canvas container, panel, simple view)
style.css           Layout, themes, spatial + simple view presentation
nodes.js            Data layer: NODES[], EDGES[] (loaded before script.js)
script.js           Boot, renderer, interaction, panel + simple view logic
favicon.png         Site icon
404.html            Minimal standalone 404 page
```

**Runtime flow**

1. `nodes.js` defines the graph manifest.
2. `script.js` runs a timed boot overlay, then `fullRebuild()` constructs the SVG scene.
3. After ~800 ms, the origin identity node (`N00`) panel opens automatically.
4. User interacts via pan/zoom, node selection, legend shortcuts, or Simple View toggle.

There is no module bundler, state store, or router. Global constants (`NODES`, `EDGES`) and mutable renderer state live in `script.js`.

---

## Coordinate system

The app uses a **mathematical space** `(sx, sy)` mapped to **screen pixels** `(x, y)`.

| Concept | Role |
|--------|------|
| `originX`, `originY` | Screen position of space origin `(0, 0)`; set to ~50% × 52% of viewport on resize |
| `scale` | Pixels per space unit; default `90`, clamped `[40, 300]` |
| `panX`, `panY` | Canvas translation in pixels |
| Y axis | **Inverted** on screen: positive `sy` renders upward |

**Transforms**

```text
toScreen(sx, sy):
  x = originX + panX + sx * scale
  y = originY + panY - sy * scale

toSpace(px, py):
  sx = (px - originX - panX) / scale
  sy = -(py - originY - panY) / scale
```

The header `#coord-display` shows live `toSpace()` values for the cursor. Grid spacing equals `scale` so one space unit aligns with one minor grid cell.

**Semantic axes** (decorative labels in `drawAxisLabels()`): breadth/depth on X, scope/past on Y. These are presentation only; they do not affect layout math.

---

## Data model (`nodes.js`)

### Node object

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique key, e.g. `"N00"` |
| `label` | string | Full label (tooltip, intro name) |
| `shortLabel` | string | Compact label drawn beside the node |
| `type` | string | `identity`, `research`, `experience`, `project`, `leadership`, `connect` |
| `sx`, `sy` | number | Default position in space units |
| `link` | optional | External URL: string **or** `{ k, v }` (label + href) |
| `panel` | object | Content for inspector panel and Simple View |

### Panel object (`panel`)

| Field | Type | Used in |
|-------|------|---------|
| `title` | string | Panel title, card title (Simple View) |
| `subtitle` | string | Subheading |
| `body` | string | Prose; `\n` → `<br>`, `\n\n` → paragraphs in Simple View |
| `kv` | `[key, value][]` | Key–value rows |
| `list` | `string[]` | Bullet list |
| `tags` | `string[]` | Tag chips |
| `links` | `{ label, url }[]` | Multiple outbound links (e.g. connect node) |

### Edges

`EDGES` is an array of `[sourceId, targetId]` pairs. Edges are undirected visually; order does not affect rendering. Highlighting is symmetric when either endpoint is `activeNode`.

### Runtime position overrides

`nodePositions` is a map `id → { sx, sy }`. Populated when a node is dragged; otherwise `NODES[i].sx/sy` is used. Overrides are **session-only** (not persisted).

---

## SVG rendering pipeline

`buildScene()` clears `#field` and recreates layer groups:

| Layer | ID | Contents |
|-------|-----|----------|
| Defs | — | Arrow marker `#arrow` for highlighted edges |
| Grid | `gGrid` | Minor/major grid, axes, tick labels, axis captions |
| Edges | `gEdges` | Lines between node pairs |
| Nodes | `gNodes` | Per-node `<g>`: circles, labels, handlers |
| Overlay | `gOverlay` | Reserved (currently unused) |
| Crosshair | `gCross` | `#ch`, `#cv` lines tracking pointer |

**Refresh strategy**

- `fullRebuild()` — window resize: recomputes `W`, `H`, origin, calls `buildScene()`.
- `refreshScene()` — pan, zoom, drag, selection: redraws grid, edges, nodes only (crosshair updated on `mousemove`).

Grid lines are generated for the visible viewport range using `floor`/`ceil` on pan-adjusted bounds so the field extends infinitely while panning.

### Node visuals (by `type`)

| Type | Radius | Stroke notes |
|------|--------|----------------|
| `identity` | 16px | Larger ring; origin node |
| Others | 7px | Type-specific stroke color via `getNodeStroke()` |
| `leadership` | — | `stroke-dasharray: 3 3` |
| `connect` | — | `stroke-dasharray: 1 4`, accent `#4a9eff` |

Active node: white stroke, pulse ring (`.pulse-ring.animating` + CSS `@keyframes pulse-expand`), dashed outer ring, brighter labels.

### Edge visuals

Default: low-opacity dashed line. When incident to `activeNode`: higher opacity, tighter dash, optional `marker-end: url(#arrow)`.

---

## DOM UI layers

Fixed chrome (z-index ~100–300):

| Element | Role |
|---------|------|
| `#boot` | Full-screen boot sequence; removed from layout after fade |
| `#header` | Brand, mode tagline, coord display / back button |
| `#canvas-wrap` | SVG viewport (`top: 38px`, `bottom: 26px`) |
| `#legend` | Node-class shortcuts; click opens first node of that type |
| `#panel` | Right inspector; toggled with `.visible` |
| `#simple-view` | Alternate layout; shown when `body.simple-mode` |
| `#statusbar` | Node/edge counts, zoom ratio, hints |
| `#tooltip` | Pointer-following node summary |

---

## Interaction model

### Canvas

| Input | Behavior |
|-------|----------|
| Wheel | Zoom toward cursor; updates `#s-zoom` as `(scale / 90).toFixed(2) + "×"` |
| Drag (background) | Pan; sets `wasDragging` to suppress click-open |
| 1-finger touch | Pan |
| 2-finger touch | Pinch zoom (distance ratio) |

Zoom uses cursor-anchored correction: space point under pointer stays fixed while `scale` changes.

### Nodes

| Input | Behavior |
|-------|----------|
| Click | `openPanel(id)` if not dragging |
| Drag | Updates `nodePositions[id]`; coords rounded to 0.1 |
| Hover | `#tooltip` with label, type, coordinates |
| Touch start | Tooltip; touch end opens panel if not dragging |

`mousedown` on a node sets `isDraggingNode` and stops propagation so canvas pan does not start.

### Legend

`.leg-row[data-filter]` click → `NODES.find(n => n.type === filter)` → `openPanel(first match)`.

### Panel

- **Header:** `NODE::{id}`; **SIMPLE VIEW** button only when `type === "identity"`.
- **Body:** Built from `panel` fields; `NODE_CLASS` shown in `.panel-coords`.
- **Close:** Clears `activeNode`, hides panel, `refreshScene()`.

### Simple View mode

Triggered from identity panel → `enterSimpleView()`:

1. `buildSimpleView()` once (guarded by `simpleViewBuilt`).
2. `body.simple-mode` — hides canvas, legend, panel, tooltip, coords; shows `#simple-view`.
3. Header tagline → `"SIMPLE VIEW"`; `#simple-back` → **THE SPACE** (`display: flex !important`).

**Content generation**

- **Intro:** Single `identity` node via `renderSimpleIntro()` (name from `label`, no duplicate card title).
- **Sections:** `SIMPLE_SECTIONS` drives grouped cards by `type`.
- **Cards:** `renderSimpleCard()` mirrors panel fields; links in `.sv-links` with `margin-top: auto` for bottom alignment in flex cards.

`exitSimpleView()` removes `simple-mode` and restores tagline.

**Layout (CSS)**

- `.sv-inner` max-width `1200px`, centered.
- `.sv-cards`: 1 column mobile; `repeat(2, 1fr)` from `720px`.
- `.sv-card:only-child` spans full row on wide screens.
- Cards: `display: flex; flex-direction: column; height: 100%` within grid rows.

---

## Boot sequence

IIFE in `script.js`: staggered `.show` on `#bl0`–`#bl5`, progress bar widths from `barSteps`, then `.fade` on `#boot` and `display: none`. Independent of graph readiness; graph builds immediately via `fullRebuild()`.

---

## Styling (`style.css`)

- **Tokens:** CSS variables on `:root` (`--bg`, `--fg`, `--dim`, `--mid`, fonts).
- **Fonts:** IBM Plex Mono (UI/chrome), IBM Plex Sans (prose in panels/simple view).
- **Spatial:** SVG classes `.grid-minor`, `.grid-major`, `.axis-line`, `.node-circle`, `.edge-line`, legend `.leg-dot.{type}`.
- **Modes:** `body.simple-mode` rules gate visibility; no separate HTML route.

---

## Script load order

```html
<script src="nodes.js"></script>
<script src="script.js"></script>
```

`script.js` assumes `NODES` and `EDGES` exist in global scope.

---

## Deployment

Designed for **static hosting** (GitHub Pages: repo `xelxen.github.io` → root `index.html`). Requirements:

- Serve `.html`, `.js`, `.css`, `favicon.png` with correct MIME types.
- `404.html` used by GitHub Pages for missing paths (standalone, no shared assets).

No environment variables, API keys, or server-side rendering.

---

## Extending the system

### Add a node

1. Append object to `NODES` in `nodes.js` with unique `id`, `type`, `sx`/`sy`, and `panel`.
2. Add edges to `EDGES` as needed.
3. If new `type`: extend `getNodeStroke()`, legend row in `index.html`, optional `SIMPLE_SECTIONS` entry.

### Add a node class to legend

Duplicate `.leg-row` pattern with `data-filter="{type}"` and `.leg-dot.{type}` styles.

### Persist dragged positions

Not implemented. Would require `localStorage` read/write around `nodePositions` and merge in `drawNodes` / `drawEdges`.

### Security note

Panel and Simple View HTML are built via `innerHTML` from trusted static data in `nodes.js`. Do not inject untrusted strings without escaping.

---

## State reference (`script.js`)

| Variable | Purpose |
|----------|---------|
| `W`, `H` | SVG dimensions |
| `scale`, `panX`, `panY` | View transform |
| `activeNode` | Selected node id or `null` |
| `nodePositions` | Drag overrides |
| `isDraggingCanvas`, `isDraggingNode`, `dragNode` | Pointer state |
| `wasDragging` | Suppresses click-after-drag (50 ms timeout) |
| `simpleViewBuilt` | One-time Simple View DOM build |
| `blockMouseTooltip` | Reduces mouse tooltip flicker after touch |

---

## File dependency graph

```text
index.html
├── style.css
├── nodes.js ──┐
└── script.js ◄┘ (reads NODES, EDGES)
```

---

## Known limitations

- No deep linking to nodes or Simple View (no URL hash/router).
- Drag positions lost on reload.
- Legend lists five classes; `connect` exists on graph but not in legend filter list.
- Single-page focus: no accessibility audit or i18n layer documented in code.
- Content edits require manual updates in `nodes.js` (and optionally `index.html` chrome strings).
