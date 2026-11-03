// Structured resume data — single source of truth for the web resume page.
// The downloadable PDF (public/assets/Steven-Koehl-Resume.pdf) is the
// authoritative full-length version; this file drives the web summary.

export interface ResumeSkillGroup {
  label: string;
  items: string;
}

export interface ResumeContact {
  email: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  summary: string;
  skills: ResumeSkillGroup[];
  education: string;
  contact: ResumeContact;
  pdfPath: string;
  docxPath: string;
}

export const resume: ResumeData = {
  name: "Steven Koehl",
  title: "Technical Sergeant, U.S. Air Force",
  location: "Fairchild AFB, WA",
  summary:
    "Experienced technical professional with 18 years of Air Force service spanning aerospace maintenance, circuit-level diagnostics, technical program management, quality and deficiency reporting, technical documentation, contract oversight, instruction, and AI integration. M.S. in Aeronautical Engineering. Building open-source software through DoD SkillBridge ahead of June 2028 retirement.",
  skills: [
    { label: "Software", items: "TypeScript, JavaScript, React, Next.js, Python, web applications, PWAs" },
    { label: "Infrastructure", items: "Linux, Docker, self-hosted infrastructure, networking, reverse proxies, cloud deployment" },
    { label: "AI & Automation", items: "AI integration, workflow automation, OCR, local AI tools, AI-assisted development" },
    { label: "Engineering & Operations", items: "Aerospace maintenance, avionics, electronics diagnostics, technical documentation, quality assurance, program management" },
  ],
  education: "Master of Science in Aeronautical Engineering — Embry-Riddle Aeronautical University",
  contact: {
    email: "contact@stevenkoehl.com",
    linkedin: "https://www.linkedin.com/in/steven-koehl",
    github: "https://github.com/sleuthy-sloth",
    website: "https://stevenkoehl.com",
  },
  pdfPath: "/assets/Steven-Koehl-Resume.pdf",
  docxPath: "/assets/Steven-Koehl-Resume.docx",
};

export const requiredResumeSections = ["summary", "skills", "education", "contact"] as const;
