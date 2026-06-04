const SVG_NS = "http://www.w3.org/2000/svg";

// ── BOOT SEQUENCE ─────────────────────────────────────────
(function bootSequence() {
  const lines = [0, 1, 2, 3, 4, 5].map(i => document.getElementById(`bl${i}`));
  const bar = document.getElementById("boot-bar");
  const bootEl = document.getElementById("boot");

  let idx = 0;
  const delays = [0, 180, 360, 500, 620, 720];
  const barSteps = [0, 20, 45, 68, 88, 100];

  function showLine(i) {
    if (!lines[i]) return;
    lines[i].classList.add("show");
    bar.style.width = barSteps[i] + "%";
    if (i < lines.length - 1) {
      setTimeout(() => showLine(i + 1), delays[i + 1] - (delays[i] || 0));
    } else {
      setTimeout(() => {
        bootEl.classList.add("fade");
        setTimeout(() => { bootEl.style.display = "none"; }, 650);
      }, 420);
    }
  }
  setTimeout(() => showLine(0), 200);
})();

// ── RENDERER STATE ─────────────────────────────────────────
let W, H;
let originX, originY;
let scale = 90;
let panX = 0, panY = 0;
let activeNode = null;
let mouseX = 0, mouseY = 0;

let isDraggingCanvas = false;
let dragStartX = 0, dragStartY = 0;
let panStartX = 0, panStartY = 0;
let isDraggingNode = false;
let dragNode = null;
let nodePositions = {};

const svg = document.getElementById("field");

function toScreen(sx, sy) {
  return {
    x: originX + panX + sx * scale,
    y: originY + panY - sy * scale
  };
}
function toSpace(px, py) {
  return {
    sx: (px - originX - panX) / scale,
    sy: -(py - originY - panY) / scale
  };
}

// ── SVG HELPERS ────────────────────────────────────────────
function el(tag, attrs = {}, parent = null) {
  const e = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  if (parent) parent.appendChild(e);
  return e;
}

// ── BUILD SCENE ────────────────────────────────────────────
let gGrid, gEdges, gNodes, gOverlay, gCrosshair;

function buildScene() {
  svg.innerHTML = "";

  const defs = el("defs", {}, svg);
  const marker = el("marker", {
    id: "arrow", markerWidth: "6", markerHeight: "6",
    refX: "5", refY: "3", orient: "auto"
  }, defs);
  el("path", {
    d: "M0,1 L6,3 L0,5",
    fill: "none",
    stroke: "rgba(255,255,255,0.15)",
    "stroke-width": "0.8"
  }, marker);

  gGrid = el("g", { id: "gGrid" }, svg);
  gEdges = el("g", { id: "gEdges" }, svg);
  gNodes = el("g", { id: "gNodes" }, svg);
  gOverlay = el("g", { id: "gOverlay" }, svg);
  gCrosshair = el("g", { id: "gCross" }, svg);

  drawGrid();
  drawEdges();
  drawNodes();
  drawAxisLabels();

  el("line", { class: "crosshair-h", x1: 0, y1: 0, x2: 0, y2: 0, id: "ch" }, gCrosshair);
  el("line", { class: "crosshair-v", x1: 0, y1: 0, x2: 0, y2: 0, id: "cv" }, gCrosshair);
}

function drawGrid() {
  gGrid.innerHTML = "";
  const step = scale;
  const majorFreq = 4;

  const minX = -(originX + panX), maxX = W - (originX + panX);
  const minY = -(originY + panY), maxY = H - (originY + panY);

  const startXi = Math.floor(minX / step) - 1;
  const endXi = Math.ceil(maxX / step) + 1;
  const startYi = Math.floor(minY / step) - 1;
  const endYi = Math.ceil(maxY / step) + 1;

  for (let i = startXi; i <= endXi; i++) {
    const x = originX + panX + i * step;
    const cls = (i % majorFreq === 0) ? "grid-major" : "grid-minor";
    el("line", { class: cls, x1: x, y1: 0, x2: x, y2: H }, gGrid);
  }
  for (let j = startYi; j <= endYi; j++) {
    const y = originY + panY + j * step;
    const cls = (j % majorFreq === 0) ? "grid-major" : "grid-minor";
    el("line", { class: cls, x1: 0, y1: y, x2: W, y2: y }, gGrid);
  }

  const ox = originX + panX, oy = originY + panY;
  el("line", { class: "axis-line", x1: 0, y1: oy, x2: W, y2: oy }, gGrid);
  el("line", { class: "axis-line", x1: ox, y1: 0, x2: ox, y2: H }, gGrid);

  el("line", { class: "origin-mark", x1: ox - 10, y1: oy, x2: ox + 10, y2: oy }, gGrid);
  el("line", { class: "origin-mark", x1: ox, y1: oy - 10, x2: ox, y2: oy + 10 }, gGrid);

  for (let i = startXi; i <= endXi; i++) {
    if (i === 0) continue;
    const x = originX + panX + i * step;
    const t = el("text", { class: "axis-label", x, y: oy + 14, "text-anchor": "middle" }, gGrid);
    t.textContent = i;
  }
  for (let j = startYi; j <= endYi; j++) {
    if (j === 0) continue;
    const y = originY + panY + j * step;
    const t = el("text", { class: "axis-label", x: ox + 6, y: y + 4 }, gGrid);
    t.textContent = -j;
  }
}

function drawEdges() {
  gEdges.innerHTML = "";
  for (const [aId, bId] of EDGES) {
    const aPos = nodePositions[aId] || NODES.find(n => n.id === aId);
    const bPos = nodePositions[bId] || NODES.find(n => n.id === bId);
    if (!aPos || !bPos) continue;
    const pa = toScreen(aPos.sx, aPos.sy);
    const pb = toScreen(bPos.sx, bPos.sy);

    const isHighlighted = (activeNode && (aId === activeNode || bId === activeNode));
    el("line", {
      class: "edge-line",
      x1: pa.x, y1: pa.y,
      x2: pb.x, y2: pb.y,
      stroke: isHighlighted ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.07)",
      "stroke-width": isHighlighted ? "1" : "0.7",
      "stroke-dasharray": isHighlighted ? "4 4" : "2 6",
      "marker-end": isHighlighted ? "url(#arrow)" : "none",
      "data-a": aId, "data-b": bId
    }, gEdges);
  }
}

function getNodeStroke(type, isActive) {
  if (isActive) return "#ffffff";
  const map = {
    identity: "#e0e0e0",
    research: "#aaaaaa",
    experience: "#707070",
    project: "#555555",
    leadership: "#444444",
    connect: "#4a9eff",
  };
  return map[type] || "#555";
}

function drawNodes() {
  gNodes.innerHTML = "";
  for (const node of NODES) {
    const pos = nodePositions[node.id] || node;
    const { x, y } = toScreen(pos.sx, pos.sy);
    const isActive = activeNode === node.id;
    const g = el("g", {
      class: "node-g", "data-id": node.id,
      style: "cursor:pointer"
    }, gNodes);

    const r = node.type === "identity" ? 16 : 7;
    const strokeW = node.type === "identity" ? 2 : 1.5;
    const dasharray = node.type === "leadership" ? "3 3" : node.type === "connect" ? "1 4" : "none";
    const strokeColor = getNodeStroke(node.type, isActive);

    el("circle", {
      class: "node-circle" + (isActive ? " active" : ""),
      cx: x, cy: y, r,
      stroke: strokeColor,
      "stroke-width": strokeW,
      "stroke-dasharray": dasharray,
      "data-id": node.id
    }, g);

    el("circle", {
      class: "node-dot",
      cx: x, cy: y, r: node.type === "identity" ? 3 : 1.8,
      fill: isActive ? "#fff" : strokeColor,
      "data-id": node.id
    }, g);

    if (isActive) {
      el("circle", {
        cx: x, cy: y, r: r + 6,
        fill: "none", stroke: "rgba(255,255,255,0.12)",
        "stroke-width": "1",
        "stroke-dasharray": "2 3",
        "pointer-events": "none"
      }, g);
    }

    el("circle", {
      class: "pulse-ring", cx: x, cy: y,
      r: r + 3, "data-pulse": node.id
    }, g);

    const lx = x + r + 6;
    const ly = y + 4;
    const lbl = el("text", {
      class: "node-label", x: lx, y: ly,
      fill: isActive ? "#ccc" : "#666"
    }, g);
    lbl.textContent = node.shortLabel;

    const coordTxt = el("text", {
      class: "node-label", x: lx, y: ly + 13,
      "font-size": "7.5",
      fill: isActive ? "#4a4a4a" : "#2e2e2e"
    }, g);
    const psx = pos.sx.toFixed(1);
    const psy = pos.sy.toFixed(1);
    coordTxt.textContent = `(${psx}, ${psy})`;

    // Hover tooltip (mouse)
    g.addEventListener("mouseenter", (e) => {
      if (blockMouseTooltip) return;
      const tt = document.getElementById("tooltip");
      tt.textContent = `${node.label} · ${node.type.toUpperCase()} · (${pos.sx.toFixed(2)}, ${pos.sy.toFixed(2)})`;
      tt.style.display = "block";
      tt.style.left = (e.clientX + 14) + "px";
      tt.style.top = (e.clientY - 8) + "px";
    });
    g.addEventListener("mousemove", (e) => {
      const tt = document.getElementById("tooltip");
      tt.style.left = (e.clientX + 14) + "px";
      tt.style.top = (e.clientY - 8) + "px";
    });
    g.addEventListener("mouseleave", () => {
      document.getElementById("tooltip").style.display = "none";
    });

    // Touch tooltip (mobile)
    g.addEventListener("touchstart", (e) => {
      e.stopPropagation();
      const tt = document.getElementById("tooltip");
      const touch = e.touches[0];
      tt.textContent = `${node.label} · ${node.type.toUpperCase()} · (${pos.sx.toFixed(2)}, ${pos.sy.toFixed(2)})`;
      tt.style.display = "block";
      tt.style.left = (touch.clientX + 14) + "px";
      tt.style.top = (touch.clientY - 8) + "px";
    }, { passive: true });

    g.addEventListener("touchend", (e) => {
      document.getElementById("tooltip").style.display = "none";
      if (!wasDragging) openPanel(node.id);
    });

    // Drag
    g.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      isDraggingNode = true;
      dragNode = node.id;
    });
    g.addEventListener("click", (e) => {
      if (!wasDragging) openPanel(node.id);
    });
  }
}

function drawAxisLabels() {
  const ox = originX + panX, oy = originY + panY;
  const labels = [
    { text: "BREADTH →", x: W - 90, y: oy - 8 },
    { text: "SCOPE ↑", x: ox + 8, y: 50 },
    { text: "PAST ↓", x: ox + 8, y: H - 50 },
    { text: "← DEPTH", x: 20, y: oy - 8 },
  ];
  for (const { text, x, y } of labels) {
    const t = el("text", {
      class: "axis-label",
      x, y,
      fill: "#2a2a2a",
      "font-size": "8",
      "letter-spacing": "0.12em"
    }, gGrid);
    t.textContent = text;
  }
}

// ── NODE PANEL ────────────────────────────────────────────
function openPanel(nodeId) {
  const node = NODES.find(n => n.id === nodeId);
  if (!node) return;
  activeNode = nodeId;
  refreshScene();

  const panel = document.getElementById("panel");
  document.getElementById("ph-id").textContent = `NODE::${nodeId}`;
  document.getElementById("ph-type").textContent = node.type.toUpperCase();

  const pos = nodePositions[nodeId] || node;
  const body = document.getElementById("panel-body");
  const p = node.panel;

  let html = `
    <div class="panel-title">${p.title}</div>
    <div class="panel-subtitle">${p.subtitle || ''}</div>
    <div class="panel-coords">
      NODE_CLASS: <span class="c">${node.type.toUpperCase()}</span>
      ${node.link ? (() => {
      const linkText = typeof node.link === 'string' ? 'VISIT PAGE' : node.link.k;
      const linkHref = typeof node.link === 'string' ? node.link : node.link.v;
      return `&nbsp;&nbsp; <a class="panel-link" href="${linkHref}" target="_blank" rel="noopener">${linkText} ↗</a>`;
    })() : ''}
    </div>
    <div class="panel-body-text">${(p.body || '').replace(/\n/g, '<br>')}</div>
  `;

  if (p.kv) {
    html += p.kv.map(([k, v]) =>
      `<div class="panel-kv"><span class="k">${k}</span><span class="v">${v}</span></div>`
    ).join('');
    html += '<br>';
  }

  if (p.list) {
    html += `<ul class="panel-list">${p.list.map(i => `<li>${i}</li>`).join('')}</ul>`;
    html += '<br>';
  }

  if (p.tags) {
    html += `<div class="panel-tags">${p.tags.map(t => `<span class="panel-tag">${t}</span>`).join('')}</div>`;
  }

  if (p.links) {
    html += `<div class="panel-links">${p.links.map(l =>
      `<a class="panel-link-item" href="${l.url}" target="_blank" rel="noopener"><span>${l.label}</span><span class="arrow">↗</span></a>`
    ).join('')}</div>`;
  }

  body.innerHTML = html;
  panel.classList.add("visible");

  const ring = svg.querySelector(`[data-pulse="${nodeId}"]`);
  if (ring) {
    ring.classList.remove("animating");
    void ring.offsetWidth;
    ring.classList.add("animating");
  }
}

document.getElementById("panel-close").addEventListener("click", () => {
  document.getElementById("panel").classList.remove("visible");
  activeNode = null;
  refreshScene();
});

// ── COORDINATE DISPLAY ────────────────────────────────────
function updateCoordDisplay(px, py) {
  const { sx, sy } = toSpace(px, py);
  document.getElementById("cx").textContent = sx.toFixed(3);
  document.getElementById("cy").textContent = sy.toFixed(3);
}

// ── REFRESH ───────────────────────────────────────────────
function refreshScene() {
  drawGrid();
  drawEdges();
  drawNodes();
}

function fullRebuild() {
  W = svg.clientWidth;
  H = svg.clientHeight;
  originX = W * 0.5;
  originY = H * 0.52;
  buildScene();
  document.getElementById("s-nodes").textContent = NODES.length;
  document.getElementById("s-edges").textContent = EDGES.length;
}

// ── INTERACTION ───────────────────────────────────────────
let wasDragging = false;

svg.addEventListener("mousemove", (e) => {
  const rect = svg.getBoundingClientRect();
  const px = e.clientX - rect.left;
  const py = e.clientY - rect.top;
  mouseX = px; mouseY = py;

  updateCoordDisplay(px, py);

  const ch = document.getElementById("ch");
  const cv = document.getElementById("cv");
  if (ch && cv) {
    ch.setAttribute("x1", 0); ch.setAttribute("y1", py);
    ch.setAttribute("x2", W); ch.setAttribute("y2", py);
    cv.setAttribute("x1", px); cv.setAttribute("y1", 0);
    cv.setAttribute("x2", px); cv.setAttribute("y2", H);
  }

  if (isDraggingCanvas) {
    wasDragging = true;
    panX = panStartX + (e.clientX - dragStartX);
    panY = panStartY + (e.clientY - dragStartY);
    refreshScene();
  }

  if (isDraggingNode && dragNode) {
    wasDragging = true;
    const { sx, sy } = toSpace(px, py);
    if (!nodePositions[dragNode]) {
      const orig = NODES.find(n => n.id === dragNode);
      nodePositions[dragNode] = { sx: orig.sx, sy: orig.sy };
    }
    nodePositions[dragNode].sx = Math.round(sx * 10) / 10;
    nodePositions[dragNode].sy = Math.round(sy * 10) / 10;
    refreshScene();
  }
});

svg.addEventListener("mousedown", (e) => {
  if (!isDraggingNode) {
    isDraggingCanvas = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    panStartX = panX;
    panStartY = panY;
    wasDragging = false;
  }
});

window.addEventListener("mouseup", () => {
  isDraggingCanvas = false;
  isDraggingNode = false;
  dragNode = null;
  setTimeout(() => { wasDragging = false; }, 50);
});

svg.addEventListener("wheel", (e) => {
  e.preventDefault();
  const rect = svg.getBoundingClientRect();
  const px = e.clientX - rect.left;
  const py = e.clientY - rect.top;

  const factor = e.deltaY < 0 ? 1.12 : 0.89;
  const oldScale = scale;
  scale = Math.max(40, Math.min(300, scale * factor));

  const spaceX = (px - originX - panX) / oldScale;
  const spaceY = (py - originY - panY) / oldScale;
  panX = px - originX - spaceX * scale;
  panY = py - originY - spaceY * scale;

  document.getElementById("s-zoom").textContent = (scale / 90).toFixed(2) + "×";
  refreshScene();
}, { passive: false });

// Touch support
let lastTouchDist = 0;
let lastTouchMid = { x: 0, y: 0 };
let blockMouseTooltip = false;

document.addEventListener("touchstart", () => {
  blockMouseTooltip = true;
}, { passive: true });
document.addEventListener("touchend", () => {
  setTimeout(() => { blockMouseTooltip = false; }, 400);
}, { passive: true });

svg.addEventListener("touchstart", (e) => {
  // Hide tooltip when starting touch drag
  document.getElementById("tooltip").style.display = "none";

  if (e.touches.length === 1) {
    isDraggingCanvas = true;
    dragStartX = e.touches[0].clientX;
    dragStartY = e.touches[0].clientY;
    panStartX = panX; panStartY = panY;
    wasDragging = false;
  } else if (e.touches.length === 2) {
    isDraggingCanvas = false;
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    lastTouchDist = Math.sqrt(dx * dx + dy * dy);
    lastTouchMid = {
      x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
      y: (e.touches[0].clientY + e.touches[1].clientY) / 2
    };
  }
}, { passive: true });

svg.addEventListener("touchmove", (e) => {
  e.preventDefault();
  // Hide tooltip while dragging
  document.getElementById("tooltip").style.display = "none";

  if (e.touches.length === 1 && isDraggingCanvas) {
    wasDragging = true;
    panX = panStartX + (e.touches[0].clientX - dragStartX);
    panY = panStartY + (e.touches[0].clientY - dragStartY);
    refreshScene();
  } else if (e.touches.length === 2) {
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const factor = dist / lastTouchDist;
    scale = Math.max(40, Math.min(300, scale * factor));
    lastTouchDist = dist;
    document.getElementById("s-zoom").textContent = (scale / 90).toFixed(2) + "×";
    refreshScene();
  }
}, { passive: false });

svg.addEventListener("touchend", () => {
  isDraggingCanvas = false;
  isDraggingNode = false;
  setTimeout(() => { wasDragging = false; }, 50);
});

// Legend filter
let activeFilter = null;
document.querySelectorAll(".leg-row").forEach(row => {
  row.addEventListener("click", () => {
    const f = row.dataset.filter;
    const candidate = NODES.find(n => n.type === f);
    if (candidate) openPanel(candidate.id);
  });
});

// ── INIT ─────────────────────────────────────────────────
window.addEventListener("resize", fullRebuild);
fullRebuild();

setTimeout(() => {
  openPanel("N00");
}, 800);
