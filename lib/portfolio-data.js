export const aboutParagraphs = [
  "I'm a full stack developer with over three years of professional experience shipping production web applications. I enjoy owning features across the whole stack — designing the database schema, building the API, and crafting the interface that people actually use.",
  "Most of my work lives in the JavaScript and TypeScript ecosystem: React and Next.js on the front end, Node.js, Express and NestJS on the back end, and MySQL underneath it all. I care about clean architecture, predictable data flow, and code that the next developer can pick up easily.",
]

export const aboutFacts = [
  { label: "Experience", value: "3+ years" },
  { label: "Focus", value: "Full stack web" },
  { label: "Core stack", value: "React · Node.js" },
  { label: "Databases", value: "MySQL · Prisma" },
]

export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5 & CSS3", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "WebSockets", "JWT Authentication"],
  },
  {
    title: "Databases & ORM",
    icon: "database",
    skills: ["MySQL", "Prisma", "TypeORM", "Schema design", "Query optimization"],
  },
  {
    title: "Tools & Workflow",
    icon: "wrench",
    skills: ["Git & GitHub", "Vercel", "Postman", "npm / pnpm", "Agile / Scrum", "Code review"],
  },
]

// Placeholder roles — replace company names and dates with your real history.
export const experience = [
  {
    role: "Full Stack Developer",
    company: "Company Name",
    period: "2024 — Present",
    location: "Location",
    summary:
      "Lead development of internal and client-facing platforms across the full stack, from database design to deployment.",
    points: [
      "Built a real-time user journey tracking service with Node.js and WebSockets, persisting events through Prisma and MySQL.",
      "Delivered a full-stack lead-management platform with React, Next.js and an Express API, streamlining the sales team's pipeline.",
      "Introduced reusable component patterns and API conventions that reduced duplicated code across projects.",
    ],
    stack: ["Next.js", "Node.js", "WebSockets", "Prisma", "MySQL"],
  },
  {
    role: "Software Developer",
    company: "Company Name",
    period: "2022 — 2024",
    location: "Location",
    summary:
      "Developed and maintained web applications, collaborating closely with designers and backend engineers.",
    points: [
      "Built an employee and department management system with Next.js, NestJS and TypeORM, secured with JWT authentication.",
      "Designed normalized MySQL schemas and REST endpoints consumed by multiple front-end modules.",
      "Improved page performance and accessibility through code splitting, memoization and semantic markup.",
    ],
    stack: ["React", "NestJS", "TypeORM", "MySQL", "JWT"],
  },
]

export const projects = [
  {
    title: "HBTracker",
    category: "Real-time analytics",
    description:
      "A real-time user journey tracking system that captures sessions, page views and interactions as they happen and streams them to a live dashboard.",
    features: [
      "Live event streaming over WebSockets",
      "Session and funnel reconstruction per visitor",
      "Typed data access with Prisma on MySQL",
    ],
    stack: ["Node.js", "WebSockets", "Prisma", "MySQL"],
    icon: "activity",
    links: { live: "", source: "" },
  },
  {
    title: "HB Solutions",
    category: "Lead management platform",
    description:
      "A full-stack platform for capturing, assigning and tracking sales leads through every stage of the pipeline, built for day-to-day use by sales teams.",
    features: [
      "Lead capture, assignment and status tracking",
      "Filterable pipeline views and activity history",
      "Express REST API backed by MySQL",
    ],
    stack: ["React", "Next.js", "Node.js", "Express", "MySQL"],
    icon: "target",
    links: { live: "", source: "" },
  },
  {
    title: "OfficeSphere",
    category: "Workforce management",
    description:
      "An employee and department management application with secure authentication, role-aware access, and clean CRUD workflows for HR teams.",
    features: [
      "JWT-based authentication and protected routes",
      "Employee, department and role management",
      "Modular NestJS services with TypeORM entities",
    ],
    stack: ["Next.js", "NestJS", "TypeORM", "MySQL", "JWT"],
    icon: "building",
    links: { live: "", source: "" },
  },
]

export const achievements = [
  {
    icon: "zap",
    title: "Real-time systems",
    description: "Designed WebSocket-based pipelines that deliver user activity to dashboards with minimal latency.",
  },
  {
    icon: "layers",
    title: "End-to-end ownership",
    description: "Shipped three production applications from schema design through API, UI and deployment.",
  },
  {
    icon: "shield",
    title: "Secure by default",
    description: "Implemented JWT authentication, input validation and role-aware access across back-end services.",
  },
  {
    icon: "gauge",
    title: "Performance minded",
    description: "Optimized queries and front-end rendering to keep interfaces responsive as data grows.",
  },
  {
    icon: "boxes",
    title: "Reusable architecture",
    description: "Built modular component libraries and service layers that speed up new feature work.",
  },
  {
    icon: "users",
    title: "Team collaboration",
    description: "Worked in agile teams with code reviews, clear documentation and close design partnership.",
  },
]

export const stats = [
  { value: "3+", label: "Years experience" },
  { value: "3", label: "Featured products" },
  { value: "10+", label: "Technologies" },
]
