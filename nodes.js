const NODES = [
  {
    id: "N00",
    label: "SAINAMAN VIG",
    shortLabel: "S.VIG",
    type: "identity",
    sx: 0, sy: 0,
    panel: {
      title: "Sainaman Vig",
      subtitle: "XelXen · Xelte Xynos",
      body: "Computer Science undergraduate (Schreyer Honors College) pursuing an independent path in computational geometry, systems architecture, and mathematical structures. Active contributor to the open-source ecosystem and researcher in novel mathematical frameworks.",
      kv: [
        ["Institution", "Penn State University"],
        ["Degree", "B.S. Computer Science"],
        ["Graduation", "May 2029"],
        ["GPA", "3.87 / 4.00 · Term 4.00 · Dean's List"],
        ["Honors", "Schreyer Honors Scholar (Fall 2026 – Present)"],
      ],
      tags: ["Computational Geometry", "Systems", "Open Source", "HCI", "ML", "Python", "Rust", "Go", "C", "C++", "Crisp", "JavaScript", "Shell", "SQL"]
    }
  },
  {
    id: "N01",
    label: "SEGMENT SPACE",
    shortLabel: "SEG.SPACE",
    type: "research",
    sx: 1.8, sy: 1.2,
    link: { k: "View Research", v: "https://zenodo.org/records/15355799" },
    panel: {
      title: "Segment Space",
      subtitle: "Independent Mathematical Research",
      body: "A framework exploring vector-like entities that preserve positional context. Where classical displacement vectors collapse spatial relationships into a single magnitude + direction, Segment Space retains the anchor — encoding not just how far, but from where.\n\nThis portfolio is itself a live instance of the framework: each node carries positional state rather than existing as a flat list.",
      tags: ["Mathematics", "Geometry", "Positional Context", "Independent Research", "Framework Design"]
    }
  },
  {
    id: "N02",
    label: "PENN STATE / LA",
    shortLabel: "PSU·MATH141",
    type: "experience",
    sx: -1.6, sy: 0.9,
    panel: {
      title: "Learning Assistant — MATH 141",
      subtitle: "Penn State University · Jan 2026 – May 2026 · under Dr. Dylan Attwell-Duval",
      body: "Facilitated collaborative problem-solving and peer learning in Calculus II. Supported instruction in integration techniques, series convergence, polar coordinates, and parametric curves. Operated at the intersection of mathematical pedagogy and student engagement.",
      kv: [
        ["Role", "MATH 141 (Calculus II) Learning Assistant"],
        ["Term", "Jan 2026 – May 2026"],
      ],
      tags: ["Calculus II", "Teaching", "Pedagogy", "Mathematics"]
    }
  },
  {
    id: "N03",
    label: "VIDEOLYTICAL",
    shortLabel: "VL.INTERN",
    type: "experience",
    sx: -2.2, sy: -0.4,
    panel: {
      title: "Machine Learning Intern",
      subtitle: "Videolytical Systems Pvt. Ltd. · Jan 2024 – Sep 2024",
      body: "Contributed to training dataset construction, computer vision preprocessing pipelines, and data quality optimization workflows. Supported preprocessing, labeling, and quality assurance for large-scale computer vision workflows.",
      kv: [
        ["Term", "Jan 2024 – Sep 2024"],
      ],
      tags: ["Machine Learning", "Computer Vision", "Data Pipelines", "Preprocessing"]
    }
  },
  {
    id: "N04",
    label: "VIG DIGITAL",
    shortLabel: "VDS",
    type: "experience",
    sx: -2.8, sy: -1.2,
    panel: {
      title: "Vig Digital Studio",
      subtitle: "Software Contributor · 2020 – Present",
      body: "Designed and deployed production systems for clients, including AI-powered facial recognition and grouping infrastructure, biometric attendance systems, automation workflows, and database-backed business software. Engineered a biometric attendance system to automate wage calculations.",
      kv: [
        ["Term", "2020 – Present"],
      ],
      list: ["AI facial recognition grouping", "Biometric attendance infrastructure", "Automation workflows", "Database-backed systems"],
      tags: ["AI", "Biometrics", "Automation", "Systems Engineering", "Full Stack"]
    }
  },
  {
    id: "N05",
    label: "PSCIndex",
    shortLabel: "PSCIDX",
    type: "project",
    sx: 2.6, sy: -0.2,
    link: { k: "View Repo", v: "https://github.com/pscindex/pscindex.github.io" },
    panel: {
      title: "PSCIndex",
      subtitle: "Community Indexing Platform",
      body: "Lightweight community indexing platform with advanced filtering, discovery features, and structured metadata. Designed for navigating dense information spaces with precision.",
      tags: ["Indexing", "Community", "Filtering", "Discovery", "Web"]
    }
  },
  {
    id: "N06",
    label: "TG-CHAN",
    shortLabel: "TG·CHAN",
    type: "project",
    sx: 3.2, sy: 0.8,
    link: { k: "View Repo", v: "https://github.com/XelXen/TG-Chan" },
    panel: {
      title: "TG-Chan",
      subtitle: "Anonymous Social Publishing · Python",
      body: "Decentralized anonymous social publishing network using cryptographic validation methods to ensure message integrity without identity linkage. Explores the design space between anonymity and accountability.",
      kv: [
        ["Stack", "Python"],
      ],
      tags: ["Cryptography", "Publishing", "Anonymity", "Social Systems", "Privacy"]
    }
  },
  {
    id: "N07",
    label: "BOOTANIMIX",
    shortLabel: "BOOTMX",
    type: "project",
    sx: 3.6, sy: -0.9,
    link: { k: "View Repo", v: "https://github.com/bootanimix/script" },
    panel: {
      title: "BootAnimix",
      subtitle: "Android Boot Animation Toolkit",
      body: "Automation toolkit for generating and configuring Android boot animations. Abstracts the frame-sequencing and compression pipeline into a reproducible workflow.",
      tags: ["Android", "Automation", "Tooling", "CLI", "Open Source"]
    }
  },
  {
    id: "N08",
    label: "GYROHAND",
    shortLabel: "GYRO·HND",
    type: "project",
    sx: 2.0, sy: -1.6,
    panel: {
      title: "GyroHand Controller",
      subtitle: "Wearable Motion-Control Interface · 2nd Prize, State Science Conclave",
      body: "Wearable gyroscopic motion-control glove built on Arduino with IMU sensor fusion. Maps hand orientation and gesture into control signals for software systems. Awarded 2nd Prize at State Science Conclave.",
      tags: ["Arduino", "Hardware", "HCI", "Gyroscope", "IMU", "Wearable", "Award"]
    }
  },
  {
    id: "N09",
    label: "AVIATION AI",
    shortLabel: "AVI·AI",
    type: "leadership",
    sx: -0.8, sy: 2.0,
    panel: {
      title: "Technical Lead — Aviation AI Club",
      subtitle: "Penn State University · Jan 2026 – May 2026 (Completed)",
      body: "Led technical initiatives focused on applying AI to operational and logistical challenges in aviation. Responsible for project architecture, technical mentorship, and initiative scoping.",
      kv: [
        ["Term", "Jan 2026 – May 2026"],
      ],
      tags: ["Leadership", "Aviation", "AI", "Club", "Mentorship"]
    }
  },
  {
    id: "N10",
    label: "GDG @ PSU",
    shortLabel: "GDG·PSU",
    type: "leadership",
    sx: 0.6, sy: 2.4,
    panel: {
      title: "Technical Lead — GDG @ Penn State",
      subtitle: "Google Developer Group · Penn State · Aug 2025 – Present",
      body: "Promoted from Freshman Representative and Marketing Lead to Technical Lead. Driving technical direction while organizing workshops, hackathons, and developer events and guiding the chapter's technical curriculum and community growth.",
      kv: [
        ["Term", "Aug 2025 – Present"],
      ],
      tags: ["Leadership", "Google", "Developer Community", "Events", "Technical Education"]
    }
  },
  {
    id: "N11",
    label: "OPEN SOURCE",
    shortLabel: "OSS·200+",
    type: "project",
    sx: 4.2, sy: 0.2,
    link: { k: "View Profile", v: "https://github.com/xelxen" },
    panel: {
      title: "Open Source Contributions",
      subtitle: "200+ repositories and projects",
      body: "Active contributor across the Android, Linux, and open-source software ecosystem. Contributions span UX improvements, pipeline fixes, documentation, and core feature development. Member of OrangeFoxRecovery, libre-tube, BootAnimix, and ProjectVelvet orgs.",
      list: ["LibreTube", "BlissOS", "OrangeFox Recovery", "SuperImage", "Project Sakura", "Android + Linux ecosystem"],
      tags: ["Open Source", "Android", "Linux", "Contributions", "Community"]
    }
  },
  {
    id: "N12",
    label: "CONNECT",
    shortLabel: "CONNECT",
    type: "connect",
    sx: 0, sy: -2,
    panel: {
      title: "Connect",
      subtitle: "Reach out — I don\u2019t byte",
      body: "Prefer asynchronous, text-based communication. Email is best for serious inquiries; Telegram and Instagram for quick exchanges. GitHub and LinkedIn are where I live.",
      links: [
        { label: "GitHub", url: "https://github.com/xelxen" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/sainaman-vig-1b94a0373/" },
        { label: "Instagram", url: "https://instagram.com/sainamanvig" },
        { label: "Telegram", url: "https://t.me/xelxen" },
        { label: "Email (PSU)", url: "mailto:sainaman@psu.edu" },
        { label: "Email (Gmail)", url: "mailto:vigsainaman@gmail.com" },
      ]
    }
  },
  {
    id: "N13",
    label: "HLT LAB",
    shortLabel: "HLT·LAB",
    type: "research",
    sx: 0.4, sy: 1.4,
    panel: {
      title: "Undergraduate Researcher — HLT Lab",
      subtitle: "Penn State · under Dr. Shomir Wilson · Jun 2026 – Present",
      body: "Contributed to training database curation for the COLDs project (Jun 2026 – Jul 2026); conducting ongoing research from Aug 2026 onwards.",
      kv: [
        ["Lab", "Human Language Technologies Lab"],
        ["Term", "Jun 2026 – Present"],
      ],
      tags: ["NLP", "COLDs", "Data Curation", "Research"]
    }
  },
  {
    id: "N14",
    label: "CRISP",
    shortLabel: "CRISP",
    type: "project",
    sx: 4.6, sy: -0.7,
    link: { k: "View Repo", v: "https://github.com/XelXen/crisp" },
    panel: {
      title: "Crisp",
      subtitle: "Tiny interpreted language in Go (stdlib only)",
      body: "Expression-oriented language with curly braces, fn functions, and closures plus a REPL. Run with `go run . examples/fib.crisp`, start the REPL with `go run .`, test with `go test ./...`.\n\nSupports numbers, strings, bools, nil; sane precedence; if/else, while with break/continue, return in fn; first-class closures; builtins print, len, type, str, num, clock, input, abs, min, max.",
      kv: [
        ["Stack", "Go (stdlib only)"],
      ],
      tags: ["Language Design", "Interpreters", "Go", "REPL", "Closures"]
    }
  },
  {
    id: "N15",
    label: "ROBOX",
    shortLabel: "ROBOX",
    type: "leadership",
    sx: -1.8, sy: 2.2,
    panel: {
      title: "Core Member — RoboX Club",
      subtitle: "Penn State · Aug 2025 – Dec 2025 (Completed)",
      body: "Collaborated on the design and construction of competitive combat robots for North American competitions.",
      kv: [
        ["Term", "Aug 2025 – Dec 2025"],
      ],
      tags: ["Robotics", "Combat Robots", "Hardware", "Club"]
    }
  },
  {
    id: "N16",
    label: "DEVSPSU",
    shortLabel: "DEV·PSU",
    type: "leadership",
    sx: 1.6, sy: 2.8,
    panel: {
      title: "Core Member — DevsPSU",
      subtitle: "Penn State · Aug 2025 – Dec 2025 (Completed)",
      body: "Contributed to semester-long collaborative CS projects and technical events, supporting development cycles and peer-driven learning.",
      kv: [
        ["Term", "Aug 2025 – Dec 2025"],
      ],
      tags: ["Software", "Collaboration", "Club", "Peer Learning"]
    }
  },
  {
    id: "N17",
    label: "TELEGRAM BOTS",
    shortLabel: "TG·BOTS",
    type: "project",
    sx: 2.8, sy: 1.6,
    link: { k: "View Repo", v: "https://github.com/XelXen/GiveawayBot" },
    panel: {
      title: "Telegram Bot Ecosystem",
      subtitle: "Python · GiveawayBot · RateMe · CommonUsers · BinaryPhoto",
      body: "Highest-star owned repos: BinaryPhoto and GiveawayBot. Utility bots for giveaways, community rating/moderation, common-member analysis across groups/channels, and photo tooling.",
      kv: [
        ["Stack", "Python"],
      ],
      list: ["GiveawayBot", "RateMe", "CommonUsers", "BinaryPhoto"],
      tags: ["Python", "Telegram", "Bots", "Moderation", "Tooling"]
    }
  },
];

const EDGES = [
  ["N00", "N01"],
  ["N00", "N02"],
  ["N00", "N03"],
  ["N00", "N04"],
  ["N00", "N05"],
  ["N00", "N08"],
  ["N00", "N09"],
  ["N00", "N10"],
  ["N00", "N12"],
  ["N00", "N13"],
  ["N00", "N14"],
  ["N00", "N15"],
  ["N00", "N16"],
  ["N00", "N17"],
  ["N01", "N05"],
  ["N01", "N06"],
  ["N01", "N08"],
  ["N01", "N13"],
  ["N01", "N14"],
  ["N03", "N04"],
  ["N05", "N07"],
  ["N06", "N11"],
  ["N06", "N17"],
  ["N07", "N11"],
  ["N09", "N10"],
  ["N09", "N15"],
  ["N10", "N16"],
  ["N14", "N11"],
  ["N02", "N01"],
  ["N08", "N05"],
  ["N13", "N02"],
];
