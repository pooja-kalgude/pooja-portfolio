export const aboutParagraphs = [
  "I'm a full stack developer with 3+ years of experience building and modernizing production web applications. I own features end to end, from data modeling and APIs to interfaces and production deployment.",
  "My work spans React, Next.js, Node.js, PHP and MySQL. Recent projects include modernizing a large legacy platform, building eKYC workflows, and delivering real-time user analytics with a focus on performance, validation and production readiness.",
]

export const aboutFacts = [
  { label: "Experience", value: "3+ years" },
  { label: "Focus", value: "Full stack web" },
  { label: "Core stack", value: "React · Next.js" },
  { label: "Databases", value: "MySQL · Prisma" },
]

export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout",
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Sass", "jQuery"],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "Express", "PHP", "REST APIs", "WebSockets", "Axios"],
  },
  {
    title: "Database",
    icon: "database",
    skills: ["MySQL", "Prisma", "Schema design", "Indexing", "Query optimization"],
  },
  {
    title: "Testing, Ops & Tools",
    icon: "wrench",
    skills: ["zod", "Jest", "React Testing Library", "Postman", "Load testing", "Docker", "GitHub / GitLab CI", "Webpack", "Babel", "npm", "dotenv", "PM2 / nodemon", "Cursor", "Claude Code", "GitHub Copilot"],
  },
]

export const experience = [
  {
    role: "Software Developer – Product Unit",
    company: "HiddenBrains Infotech",
    period: "Jan 2023 — Present",
    location: "Pune, India",
    summary: "Own end-to-end delivery of enterprise web platform features across React, Next.js, Node.js, PHP and MySQL, from design through production deployment.",
    points: [
      "Lead full-stack development for fintech and identity-verification products, including a solo-built eKYC platform and a real-time analytics system.",
      "Built and maintain internal admin and operational tools for real-time monitoring and team automation.",
      "Introduced caching, automation and code-level optimizations that reduced manual effort by 40% and improved system throughput.",
    ],
    stack: ["React", "Next.js", "Node.js", "PHP", "MySQL"],
  },
]

export const projects = [
  {
    title: "HBSolutions – Enterprise Web Platform",
    category: "Enterprise web & lead management",
    description: "A business website and lead-management platform. Migrated 200+ legacy PHP pages to React and Next.js, cutting page load time by 25%.",
    features: [
      "Inquiry, contact and case-study workflows processing 500+ leads per month",
      "Reusable UI components reduced duplicated code by 30%",
      "CRM, email, file upload, cloud storage and AI service integrations",
    ],
    stack: ["Node.js", "React", "Next.js", "Express", "MySQL"],
    icon: "target",
    links: { live: "", source: "" },
  },
  {
    title: "eKYC – Digital Know Your Customer Platform",
    category: "Identity verification",
    description: "An end-to-end identity verification platform with secure document upload, OCR, liveness detection and compliance-ready audit trails, supporting 1,000+ verifications per month.",
    features: [
      "Multi-step onboarding with live camera capture",
      "Encrypted file handling and audit logging",
      "OCR and verification APIs cut average turnaround time by 30%",
    ],
    stack: ["Next.js", "React", "PHP", "MySQL", "Jest", "React Testing Library"],
    icon: "shield",
    links: { live: "", source: "" },
  },
  {
    title: "Real-Time Tracking & Analytics System",
    category: "Real-time analytics",
    description: "A real-time analytics pipeline tracking visitor journeys, entry sources, navigation and exit points to help teams understand behavior and identify leads.",
    features: [
      "Browser tracker with Web Workers and exponential backoff; 98% event delivery success and 500+ events/sec in load tests",
      "Schema and index tuning improved insert throughput by 40% and query performance by 60%",
      "Privacy-safe visitor IDs, automated GeoIP updates and database health monitoring",
    ],
    stack: ["Node.js", "WebSockets", "Prisma", "MySQL"],
    icon: "activity",
    links: { live: "", source: "" },
  },
]

export const achievements = [
  { icon: "zap", title: "Real-time systems", description: "Built a resilient analytics tracker with 98% event delivery success, 500+ events/sec and under 200ms latency in load tests." },
  { icon: "layers", title: "End-to-end ownership", description: "Own product delivery across fintech, identity verification and enterprise web platforms." },
  { icon: "shield", title: "Secure verification", description: "Built eKYC workflows with encrypted files, OCR, liveness detection and audit trails." },
  { icon: "gauge", title: "Performance minded", description: "Migrated 200+ legacy pages and improved page load time by 25%; optimized analytics queries by 60%." },
  { icon: "boxes", title: "Reusable architecture", description: "Created reusable components that reduced duplicated code across modules by 30%." },
  { icon: "users", title: "Workflow automation", description: "Automated crawling and business workflows, reducing operational effort by 40%." },
]

export const stats = [
  { value: "3+", label: "Years experience" },
  { value: "3", label: "Featured products" },
  { value: "10+", label: "Technologies" },
]
