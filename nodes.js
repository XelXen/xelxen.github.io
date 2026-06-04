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
      body: "Computer Science undergraduate pursuing an independent path in computational geometry, systems architecture, and mathematical structures. Active contributor to the open-source ecosystem and researcher in novel mathematical frameworks.",
      kv: [
        ["Institution", "Penn State University"],
        ["Degree", "B.S. Computer Science"],
        ["Graduation", "May 2029"],
        ["GPA", "3.87 / 4.00 · Dean's List"],
      ],
      tags: ["Computational Geometry", "Systems", "Open Source", "HCI", "ML"]
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
      subtitle: "Penn State University",
      body: "Facilitated collaborative problem-solving and peer learning in Calculus II. Supported instruction in integration techniques, series convergence, polar coordinates, and parametric curves. Operated at the intersection of mathematical pedagogy and student engagement.",
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
      subtitle: "Videolytical Systems Pvt. Ltd.",
      body: "Contributed to training dataset construction, computer vision preprocessing pipelines, and data quality optimization workflows. Worked at the boundary between raw sensor data and model-ready inputs.",
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
      subtitle: "Founder / Lead Engineer",
      body: "Designed and deployed production systems for clients, including AI-powered facial recognition and grouping infrastructure, biometric attendance systems, automation workflows, and database-backed business software.",
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
    link: { k: "View Repo", v: "https://github.com/xelxen/tg-chan" },
    panel: {
      title: "TG-Chan",
      subtitle: "Anonymous Social Publishing",
      body: "Decentralized anonymous social publishing network using cryptographic validation methods to ensure message integrity without identity linkage. Explores the design space between anonymity and accountability.",
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
      subtitle: "Penn State University",
      body: "Leading technical direction for a student organization at the intersection of aviation systems and artificial intelligence. Responsible for project architecture, technical mentorship, and initiative scoping.",
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
      subtitle: "Google Developer Group · Penn State",
      body: "Technical lead for the Google Developer Group at Penn State. Organizing workshops, hackathons, and developer events while guiding the chapter's technical curriculum and community growth.",
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
      body: "Active contributor across the Android, Linux, and open-source software ecosystem. Contributions span UX improvements, pipeline fixes, documentation, and core feature development.",
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
        { label: "Email", url: "mailto:sainaman@psu.edu" },
      ]
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
  ["N01", "N05"],
  ["N01", "N06"],
  ["N01", "N08"],
  ["N03", "N04"],
  ["N05", "N07"],
  ["N06", "N11"],
  ["N07", "N11"],
  ["N09", "N10"],
  ["N02", "N01"],
  ["N08", "N05"],
];
