const NODES = [
  {
    id: "N00",
    label: "SAINAMAN VIG",
    shortLabel: "S.VIG",
    type: "identity",
    sx: 0, sy: 0,
    panel: {
      title: "Sainaman Vig",
      subtitle: "XelXen · Xelte Xynos · Schreyer Honors Scholar",
      body: "Computer Science undergraduate at Penn State's Schreyer Honors College, pursuing an independent path across computational geometry, systems, and language design. Researcher in the HLT Lab, builder of interpreters and kernels, and long-time open-source contributor.\n\nCurrently exploring how absolute position can be preserved in geometric representations, how LLM inference can be made more reliable without retraining, and how low-level systems actually work.",
      kv: [
        ["Institution", "Penn State · Schreyer Honors College"],
        ["Degree", "B.Eng. Computer Science"],
        ["Minors", "Computer Engineering · Mathematics"],
        ["Graduation", "May 2028 · official May 2029"],
        ["GPA", "3.87 / 4.00 · Term 4.00 · Dean's List"],
        ["Location", "State College, PA"],
      ],
      tags: ["Computational Geometry", "Systems", "Language Design", "AI/ML", "Open Source", "Rust", "Go", "Python", "C/C++"]
    }
  },
  {
    id: "N01",
    label: "HLT LAB",
    shortLabel: "HLT·LAB",
    type: "research",
    sx: 0.6, sy: 2.5,
    panel: {
      title: "Undergraduate Researcher — HLT Lab",
      subtitle: "Penn State · College of IST · advisor Dr. Shomir Wilson · May 2026 – Present",
      body: "Conducting independent research, jointly with one peer, on institutional biases in AI systems. Contributed to the COLDs project (May – Jul 2026), curating the training database.",
      kv: [
        ["Lab", "Human Language Technologies Lab"],
        ["Advisor", "Dr. Shomir Wilson"],
        ["Term", "May 2026 – Present"],
        ["Focus", "Institutional bias in AI systems"],
      ],
      tags: ["AI Ethics", "Institutional Bias", "NLP", "Data Curation", "COLDs"]
    }
  },
  {
    id: "N02",
    label: "SEGMENT SPACE",
    shortLabel: "SEG.SPACE",
    type: "research",
    sx: 1.8, sy: 2.9,
    link: { k: "View Preprint", v: "https://zenodo.org/records/15355799" },
    panel: {
      title: "Segment Space",
      subtitle: "Independent Mathematical Research · Preprint, May 2025",
      body: "A mathematical framework that treats line segments as first-class objects represented by n×2 matrices. Unlike classical vectors, which collapse a segment to an origin-anchored displacement, Segment Space keeps absolute positional data.\n\nDefines a complete algebra — addition, scalar multiplication, dot and cross products, interpolation — bridging affine geometry and tensor-like representations, with applications in robotics and computer graphics where absolute position matters.",
      kv: [
        ["Preprint", "Zenodo · May 2025"],
        ["DOI", "10.5281/zenodo.15355799"],
        ["Focus", "Positional geometry · algebra"],
      ],
      list: [
        "Independent studies: cellular automata",
        "Evolutionary AI algorithms",
        "Asymmetric particle simulations",
      ],
      tags: ["Mathematics", "Geometry", "Algebra", "Positional Context", "Robotics"]
    }
  },
  {
    id: "N03",
    label: "VIG STUDIO & COLOR LAB",
    shortLabel: "VIG·STUDIO",
    type: "experience",
    sx: -2.8, sy: 1.4,
    panel: {
      title: "Software Developer — Technical Lead, Internal Tooling",
      subtitle: "Vig Studio & Color Lab · family photography studio · 2020 – Present",
      body: "Lead internal tooling for a high-volume family photography studio. Built an AI-based facial-grouping system that organizes very large event photo batches, and a biometric attendance system that automates wage calculation — saving two working days of manual work every month.\n\nCurrently designing a local photo-processing pipeline (monorepo MVP) with two decoupled, resumable stages: fast WebP compression, and automated culling using perceptual hashing, blur scoring, GPU-accelerated face/eye detection (ONNX), and exposure analysis. A shared SQLite (WAL) job store lets stages run on separate machines or fuse on one.",
      kv: [
        ["Role", "Software Developer — Technical Lead"],
        ["Term", "2020 – Present"],
        ["Studio", "Family photography · high volume"],
        ["Stack", "Python · SQLite · ONNX"],
      ],
      list: [
        "AI facial grouping for event photo batches",
        "Biometric attendance + wage calculation",
        "WebP compression stage",
        "Perceptual-hash culling + blur/exposure scoring",
        "GPU face/eye detection (ONNX)",
      ],
      tags: ["AI", "Computer Vision", "Pipelines", "Automation", "SQLite", "Internal Tooling"]
    }
  },
  {
    id: "N04",
    label: "MATH 141 · LA",
    shortLabel: "MATH 141",
    type: "experience",
    sx: -1.4, sy: 2.0,
    panel: {
      title: "Learning Assistant — MATH 141 (Calculus II)",
      subtitle: "Penn State University · instructor Dr. Dylan Attwell-Duval · Jan 2026 – May 2026",
      body: "Ran Learning Assistant sessions to teach students, guiding problem-solving and reinforcing key calculus concepts. Assisted the instructor during class meetings.",
      kv: [
        ["Course", "MATH 141 · Calculus II"],
        ["Term", "Jan 2026 – May 2026"],
        ["Instructor", "Dr. Dylan Attwell-Duval"],
      ],
      tags: ["Calculus II", "Teaching", "Pedagogy", "Mathematics"]
    }
  },
  {
    id: "N05",
    label: "VIDEOLYTICAL",
    shortLabel: "VL.INTERN",
    type: "experience",
    sx: -3.4, sy: 0.4,
    panel: {
      title: "Machine Learning Intern",
      subtitle: "Videolytical Systems Pvt. Ltd. · Noida, India · Jan 2024 – Sep 2024",
      body: "Managed training datasets and supported preprocessing, labeling, and quality assurance for large-scale computer-vision workflows.",
      kv: [
        ["Term", "Jan 2024 – Sep 2024"],
        ["Location", "Noida, India"],
        ["Focus", "Computer-vision data pipelines"],
      ],
      tags: ["Machine Learning", "Computer Vision", "Data Pipelines", "QA"]
    }
  },
  {
    id: "N06",
    label: "GDG @ PSU",
    shortLabel: "GDG·PSU",
    type: "leadership",
    sx: -2.0, sy: -0.9,
    panel: {
      title: "Technical Lead — GDG @ Penn State",
      subtitle: "Google Developer Group · Aug 2025 – Present",
      body: "Promoted through three roles within the chapter — Freshman Representative → Marketing Lead → Technical Lead. Now drives technical direction and event execution.\n\nLed a hackathon and delivered five lectures on cryptography and AI/ML, among other workshops. Building animated (Manim) slide decks for a beginner neural-network workshop series covering loss landscapes, gradient descent, the chain rule, and backpropagation.",
      kv: [
        ["Term", "Aug 2025 – Present"],
        ["Path", "Freshman Rep → Marketing Lead → Technical Lead"],
        ["Highlights", "Hackathon lead · 5 lectures · Manim series"],
      ],
      tags: ["Leadership", "Google", "Developer Community", "Cryptography", "AI/ML", "Events"]
    }
  },
  {
    id: "N07",
    label: "AVIATION AI",
    shortLabel: "AVIATION",
    type: "leadership",
    sx: -3.2, sy: -1.3,
    panel: {
      title: "Technical Lead — Aviation AI Club",
      subtitle: "Penn State University · Jan 2026 – May 2026",
      body: "Led technical initiatives applying AI to operational and logistical challenges in aviation.",
      kv: [
        ["Term", "Jan 2026 – May 2026"],
        ["Focus", "Applied AI for aviation"],
      ],
      tags: ["Leadership", "Aviation", "AI", "Operations"]
    }
  },
  {
    id: "N08",
    label: "ROBOX",
    shortLabel: "ROBOX",
    type: "leadership",
    sx: -1.4, sy: -2.0,
    panel: {
      title: "Core Technical Member — RoboX Club",
      subtitle: "Competitive combat robotics · Aug 2025 – Dec 2025",
      body: "Collaborated on the design and construction of combat robots for North American competitions.",
      kv: [
        ["Term", "Aug 2025 – Dec 2025"],
        ["Focus", "Competitive combat robotics"],
      ],
      tags: ["Robotics", "Combat Robots", "Hardware", "Club"]
    }
  },
  {
    id: "N09",
    label: "DEVSPSU",
    shortLabel: "DEV·PSU",
    type: "leadership",
    sx: -3.0, sy: -2.5,
    panel: {
      title: "Core Member — DevsPSU",
      subtitle: "Collaborative software development · Aug 2025 – Dec 2025",
      body: "Contributed to semester-long collaborative CS projects and technical events.",
      kv: [
        ["Term", "Aug 2025 – Dec 2025"],
        ["Focus", "Collaborative software projects"],
      ],
      tags: ["Software", "Collaboration", "Club", "Peer Learning"]
    }
  },
  {
    id: "N10",
    label: "BLIPCODE",
    shortLabel: "BLIPCODE",
    type: "project",
    sx: 2.2, sy: 1.9,
    link: { k: "View Repo", v: "https://github.com/XelXen/BlipCode" },
    panel: {
      title: "BlipCode",
      subtitle: "Rust · LLM inference harness · library + CLI",
      body: "Minimal, modular Rust harness that improves existing models at inference time — no weight changes. Async on tokio with an OpenAI-compatible chat-completions endpoint.\n\nStrategies include Self-Consistency (bounded parallel sampling with majority vote) and Self-Refine (critique then revise). Pluggable verifiers cover exact match, JSON fields, custom functions, external test results, and a model-judge adapter. Budget-aware routing escalates only when configured; streaming supports cancellation and preserves partial output. JSON telemetry records latency, time to first token, tokens, and retries, with a benchmarking CLI.",
      kv: [
        ["Stack", "Rust · tokio · async"],
        ["Status", "v0.1 · library + CLI"],
        ["Focus", "Inference-time strategies"],
      ],
      tags: ["Rust", "LLM", "Inference", "Self-Consistency", "Telemetry", "CLI"]
    }
  },
  {
    id: "N11",
    label: "CRISP",
    shortLabel: "CRISP",
    type: "project",
    sx: 3.0, sy: 2.5,
    link: { k: "View Repo", v: "https://github.com/XelXen/crisp" },
    panel: {
      title: "Crisp",
      subtitle: "Go · Tiny interpreted language · standard library only",
      body: "Expression-oriented, curly-brace language with first-class functions and closures. Lexer, parser, and evaluator written from scratch.\n\nIncludes a REPL with multiline blocks and history, line-numbered parse errors, and a test suite. Supports numbers, strings, booleans, and nil; `if`/`else`, `while` with `break`/`continue`, and `return` inside functions.",
      kv: [
        ["Stack", "Go · stdlib only"],
        ["Components", "Lexer · parser · evaluator · REPL"],
        ["Tests", "go test ./..."],
      ],
      tags: ["Language Design", "Interpreters", "Go", "REPL", "Closures"]
    }
  },
  {
    id: "N12",
    label: "BLACKBOLDOS",
    shortLabel: "BLACKBOLD",
    type: "project",
    sx: 3.2, sy: 1.3,
    link: { k: "View Repo", v: "https://github.com/XelXen/BlackBoldOS" },
    panel: {
      title: "BlackBoldOS",
      subtitle: "Rust · Freestanding x86-64 kernel",
      body: "Minimal freestanding kernel that boots through Limine (UEFI) in QEMU. Sets up the GDT and an IDT with fault handlers, prints over COM1 serial, reports the bootloader memory map, and runs a small interactive shell. Includes an automated boot-and-command smoke test.",
      kv: [
        ["Stack", "Rust · x86-64 · Limine"],
        ["Target", "Freestanding · UEFI"],
        ["Verified", "QEMU · serial smoke test"],
      ],
      tags: ["Rust", "Operating Systems", "Kernel", "x86-64", "UEFI"]
    }
  },
  {
    id: "N13",
    label: "PSCIndex",
    shortLabel: "PSCINDEX",
    type: "project",
    sx: 1.4, sy: 0.8,
    link: { k: "View Repo", v: "https://github.com/PSCIndex/pscindex.github.io" },
    panel: {
      title: "PSCIndex",
      subtitle: "Penn State community index · web app",
      body: "Lightweight web app indexing Penn State student communities, with search, filtering, tagging, and sharing.",
      kv: [
        ["Stack", "HTML · web"],
        ["Focus", "Community discovery"],
      ],
      tags: ["Web", "Community", "Search", "Filtering", "Discovery"]
    }
  },
  {
    id: "N14",
    label: "OPEN SOURCE",
    shortLabel: "OPEN SRC",
    type: "project",
    sx: 2.6, sy: 0.4,
    link: { k: "View GitHub", v: "https://github.com/XelXen" },
    panel: {
      title: "Open Source",
      subtitle: "Android · Linux · design + CI/CD",
      body: "Long-running contributions across the Android and Linux open-source ecosystem — from interface and asset design to CI/CD and recovery tooling.",
      list: [
        "LibreTube — asset designer for the open-source YouTube frontend (12.8k+ stars)",
        "SuperImage — CI/CD development",
        "OrangeFox Recovery — former maintainer; custom ROM maintainer (XDA: XelXen)",
        "BlissOS — code contributions to the Android-x86 project",
      ],
      links: [
        { label: "LibreTube", url: "https://github.com/libre-tube/LibreTube" },
        { label: "OrangeFox Recovery", url: "https://github.com/OrangeFoxRecovery" },
        { label: "BlissOS", url: "https://github.com/BlissOS" },
      ],
      tags: ["Open Source", "Android", "Linux", "Design", "CI/CD", "Recovery"]
    }
  },
  {
    id: "N15",
    label: "BOOTANIMIX",
    shortLabel: "BOOTANIMIX",
    type: "project",
    sx: 3.2, sy: -0.3,
    link: { k: "View Repo", v: "https://github.com/BootAnimix/script" },
    panel: {
      title: "BootAnimix",
      subtitle: "Android boot animation toolkit · 25 GitHub stars",
      body: "Toolkit for building and customizing Android boot animations, maintained under the BootAnimix organization.",
      kv: [
        ["Focus", "Android boot animations"],
        ["Traction", "25 GitHub stars"],
      ],
      tags: ["Android", "Tooling", "Automation", "Open Source"]
    }
  },
  {
    id: "N16",
    label: "TELEGRAM TOOLING",
    shortLabel: "TG·TOOLS",
    type: "project",
    sx: 2.0, sy: -0.4,
    panel: {
      title: "Telegram Tooling",
      subtitle: "Python · bots + community utilities",
      body: "A family of Telegram bots and utilities for anonymous publishing, community giveaways, and member analysis.",
      list: [
        "TG-Chan — 4chan-style anonymous board using cryptographic hashing",
        "GiveawayBot — used by 10+ communities with 100,000+ combined users",
        "CommonUsers — finds shared users across groups, channels, and supergroups",
      ],
      links: [
        { label: "TG-Chan", url: "https://github.com/XelXen/TG-Chan" },
        { label: "GiveawayBot", url: "https://github.com/XelXen/GiveawayBot" },
        { label: "CommonUsers", url: "https://github.com/XelXen/CommonUsers" },
      ],
      tags: ["Python", "Telegram", "Bots", "Privacy", "Community"]
    }
  },
  {
    id: "N17",
    label: "GYROHAND",
    shortLabel: "GYROHAND",
    type: "project",
    sx: 1.0, sy: -1.4,
    panel: {
      title: "GyroHand Controller",
      subtitle: "Arduino Nano · wearable motion controller · 2nd Prize, I.B. Science Conclave",
      body: "Modular, glove-based motion controller for precise motion control. Won 2nd Prize at the I.B. Science Conclave (state level).",
      kv: [
        ["Platform", "Arduino Nano"],
        ["Award", "2nd Prize · I.B. Science Conclave"],
      ],
      tags: ["Arduino", "Hardware", "HCI", "Motion Control", "Award"]
    }
  },
  {
    id: "N18",
    label: "RECIGNIZE",
    shortLabel: "RECIGNIZE",
    type: "project",
    sx: 2.0, sy: -2.0,
    link: { k: "View Repo", v: "https://github.com/Recignize/app" },
    panel: {
      title: "Recignize",
      subtitle: "UI/UX Designer · sustainability + AI recipe app",
      body: "Designed the UI/UX for a sustainability-focused app that uses multimodal LLMs and ingredients you already have to suggest recipes.",
      kv: [
        ["Role", "UI/UX Designer"],
        ["Focus", "Multimodal LLMs · sustainability"],
        ["Stack", "TypeScript"],
      ],
      tags: ["UI/UX", "Design", "AI", "Sustainability", "LLM"]
    }
  },
  {
    id: "N19",
    label: "BINARYPHOTO",
    shortLabel: "BINPHOTO",
    type: "project",
    sx: 3.1, sy: -1.5,
    link: { k: "View Repo", v: "https://github.com/XelXen/BinaryPhoto" },
    panel: {
      title: "BinaryPhoto",
      subtitle: "Python · file ↔ image codec · Pillow",
      body: "A simple script that converts arbitrary files into images and back again, using Pillow and tqdm. An educational tool for exploring binary data as pixels.",
      kv: [
        ["Stack", "Python · Pillow · tqdm"],
        ["Focus", "Binary data ↔ image"],
        ["Traction", "12 GitHub stars"],
      ],
      tags: ["Python", "Pillow", "Imaging", "Binary Data", "Tool"]
    }
  },
  {
    id: "N20",
    label: "CONNECT",
    shortLabel: "CONNECT",
    type: "connect",
    sx: 0, sy: -2.9,
    panel: {
      title: "Connect",
      subtitle: "Reach out — I don\u2019t byte",
      body: "Prefer asynchronous, text-based communication. Email is best for serious inquiries; Telegram and Instagram for quick exchanges. GitHub and LinkedIn are where I live.",
      links: [
        { label: "GitHub", url: "https://github.com/XelXen" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/sainaman-vig-1b94a0373/" },
        { label: "Instagram", url: "https://instagram.com/sainamanvig" },
        { label: "Telegram", url: "https://t.me/xelxen" },
        { label: "Email (PSU)", url: "mailto:sainaman@psu.edu" },
        { label: "Email (Gmail)", url: "mailto:vigsainaman@gmail.com" },
      ]
    }
  },
];

const EDGES = [
  // Core spokes — each anchors one semantic cluster.
  ["N00", "N01"],
  ["N00", "N03"],
  ["N00", "N06"],
  ["N00", "N10"],
  ["N00", "N14"],
  ["N00", "N20"],

  // Research ↔ AI systems.
  ["N01", "N02"],
  ["N01", "N10"],

  // Experience chain.
  ["N03", "N04"],
  ["N03", "N05"],

  // Penn State triangle: HLT Lab, MATH 141, GDG @ PSU.
  ["N01", "N04"],
  ["N04", "N06"],
  ["N01", "N06"],

  // Leadership / hardware.
  ["N06", "N07"],
  ["N06", "N08"],
  ["N06", "N09"],
  ["N08", "N17"],

  // Personal systems projects.
  ["N10", "N11"],
  ["N11", "N12"],

  // Open-source / product projects.
  ["N10", "N14"],
  ["N11", "N14"],
  ["N12", "N14"],
  ["N13", "N14"],
  ["N14", "N15"],
  ["N14", "N16"],
  ["N14", "N19"],

  // Design + interaction.
  ["N17", "N18"],
];
