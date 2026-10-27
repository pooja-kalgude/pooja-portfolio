// Single source of truth for personal details.
// Contact links and resume are intentionally left empty — fill them in and the UI updates automatically.
export const siteConfig = {
  name: "Pooja Kalgude",
  initials: "PK",
  role: "Full Stack Developer",
  location: "Pune, India",
  yearsOfExperience: "3+",
  tagline:
    "Full-stack developer with 3+ years building production products across React, Next.js, Node.js, PHP and MySQL — from eKYC workflows to real-time analytics.",
  availability: "Open to new opportunities",
  siteUrl: "https://your-domain.vercel.app",

  contact: {
    email: "poojakalgude27@gmail.com",
    phone: "+91 9403432749",
    linkedin: "https://www.linkedin.com/in/pooja-kalgude",
    github: "", // e.g. "https://github.com/your-handle"
  },

  // Place your PDF at /public/resume.pdf and set this to "/resume.pdf"
  resumeUrl: "/resume.pdf",
}

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Highlights", href: "#highlights" },
  { label: "Contact", href: "#contact" },
]
