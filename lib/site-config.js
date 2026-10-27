// Single source of truth for personal details.
// Contact links and resume are intentionally left empty — fill them in and the UI updates automatically.
export const siteConfig = {
  name: "Pooja Kalgude",
  initials: "PK",
  role: "Full Stack Developer",
  location: "Pune, India",
  yearsOfExperience: "3+",
  tagline:
    "I build fast, reliable web products end to end — from real-time Node.js services and relational data models to polished React and Next.js interfaces.",
  availability: "Open to new opportunities",
  siteUrl: "https://your-domain.vercel.app",

  contact: {
    email: "", // e.g. "you@example.com"
    linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle"
    github: "", // e.g. "https://github.com/your-handle"
  },

  // Place your PDF at /public/resume.pdf and set this to "/resume.pdf"
  resumeUrl: "",
}

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Highlights", href: "#highlights" },
  { label: "Contact", href: "#contact" },
]
