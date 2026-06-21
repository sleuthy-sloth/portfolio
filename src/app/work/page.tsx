import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import GitHubActivity from "@/components/GitHubActivity";
import CommandPalette from "@/components/CommandPalette";

const GITHUB_USER = "sleuthy-sloth";

/**
 * Engineering portfolio (/work) — Steven's software development and
 * USAF career, organized into sections: Hero, About, Projects, Skills, Contact.
 *
 * Nav links: Home, About, Projects, Skills, Contact + Writing cross-link.
 */

const SOFTWARE_PROJECTS = [
  {
    title: "NeuralPulse",
    category: "Brain Training",
    description:
      "Open-source brain training web app. Think Elevate or Lumosity, but free and playable in your browser. 13 brain games, daily challenges (Wordle-style), stats dashboard with radar charts and calendar heatmap. Offline-first PWA with optional cloud sync via Supabase.",
    tags: ["Next.js 16", "TypeScript", "Supabase", "Tailwind CSS", "PWA"],
    screenshot: {
      src: "/assets/neuralpulse-screenshot.png",
      alt: "NeuralPulse brain training app screenshot",
    },
    links: [
      {
        href: "/work/neuralpulse",
        label: "Case Study",
        external: false,
      },
      {
        href: "https://github.com/sleuthy-sloth/NeuralPulse",
        label: "Source Code",
        external: true,
      },
    ],
  },
  {
    title: "92 AMXS Tracker",
    category: "Maintenance Operations",
    description:
      "Full-stack maintenance management platform for the 92nd Aircraft Maintenance Squadron. Replaces paper logbooks and spreadsheets with a real-time command center. 16 pages, AI-powered OCR scanning of AF Forms, role-based access control, offline PWA support.",
    tags: ["React 19", "TypeScript", "Firebase", "AI / OCR", "PWA"],
    screenshot: {
      src: "/assets/92amxs-screenshot.png",
      alt: "92 AMXS Tracker dashboard screenshot",
    },
    links: [
      {
        href: "/work/92-amxs-tracker",
        label: "Case Study",
        external: false,
      },
      {
        href: "https://sleuthy-sloth.github.io/92-AMXS-Tracker/",
        label: "Live Demo",
        external: true,
      },
      {
        href: "https://github.com/sleuthy-sloth/92-AMXS-Tracker",
        label: "Source Code",
        external: true,
      },
    ],
  },
];

const MILITARY_ACHIEVEMENTS = [
  {
    title: "AI Developmental Lead Initiative",
    category: "AI & Emerging Technology",
    description:
      "Leading Fairchild AFB's exploration of AI tools for aerospace maintenance workflows. Looking at how AI can improve mission capability rates and reduce downtime on non-mission-capable assets.",
    tags: [
      "Artificial Intelligence",
      "Process Automation",
      "AFREP",
      "Mission Readiness",
    ],
  },
  {
    title: "Fleet-Wide PQDR Safety Program",
    category: "Quality Engineering",
    description:
      "Served as primary liaison to Air Force Materiel Command for the Joint Deficiency Reporting System. Investigated and submitted 140 Product Quality Deficiency Reports, directly recovering $7M in costs and driving fleet-wide safety modifications across multiple aircraft systems.",
    tags: ["JDRS", "AFMC Liaison", "Safety Engineering", "Data Analysis"],
  },
  {
    title: "$35M Maintenance Program Integration",
    category: "Program Management",
    description:
      "Orchestrated a tri-functional management strategy synchronizing Technical Order distribution, Product Improvement, and Contract Oversight for a $35M fleet. Managed a 5,000-item Technical Order library with 98% audit accuracy and oversaw a $2M service contract with 100% PWS adherence.",
    tags: [
      "Technical Orders",
      "COR Oversight",
      "Compliance",
      "Contract Management",
    ],
  },
  {
    title: "Electronics & AFREP Training Curriculum",
    category: "Education & Training",
    description:
      "Authored and delivered 300 hours of instructional material on complex electronics, micro-miniature soldering, and component-level diagnostics for the USAF at Sheppard AFB. Trained 800+ students annually, maintaining a 92% pass rate and zero lab safety mishaps.",
    tags: [
      "Curriculum Design",
      "ISD",
      "Electronics",
      "Micro-Miniature Repair",
    ],
  },
];

const SKILLS = [
  {
    group: "Software Development",
    items: [
      "TypeScript / JavaScript",
      "React 19 / Next.js 16",
      "Tailwind CSS / Vite",
      "Firebase / Supabase",
      "Zustand / IndexedDB",
      "PWA / Workbox",
      "Vitest / Testing Library",
      "Git / GitHub Actions CI/CD",
      "Zod / jsPDF / SheetJS",
    ],
  },
  {
    group: "Avionics & Engineering",
    items: [
      "Aerospace Maintenance",
      "Micro-Miniature Circuit Card Repair",
      "Component-Level Diagnostics",
      "Soldering & Circuit Analysis",
      "Aeronautics",
      "AutoCAD",
    ],
  },
  {
    group: "Tools & Systems",
    items: [
      "ETIMS / Technical Orders",
      "JDRS Deficiency Reporting",
      "Cloud Computing",
      "AI Integration",
      "Microsoft Office Suite",
      "Analytical & Data Tools",
    ],
  },
  {
    group: "Leadership",
    items: [
      "Program Management",
      "Contract Oversight (COR)",
      "Instructional System Design",
      "Team Building & Mentorship",
      "Continuous Improvement",
      "Risk Mitigation",
    ],
  },
];

/** Year for footer — static at build time, good enough for a portfolio. */
const currentYear = new Date().getFullYear();

export default function WorkPage() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work#about", label: "About" },
    { href: "/work#projects", label: "Projects" },
    { href: "/work#skills", label: "Skills" },
    { href: "/work#contact", label: "Contact" },
    { href: "/writing", label: "Writing", crossAccent: "writing" as const },
  ];

  return (
    <>
      <Nav links={navLinks} />
      <CommandPalette />

      <main className="flex-1" id="main-content">
        {/* ── Hero ── */}
        <section
          id="hero"
          className="flex min-h-screen items-center px-6 pt-[calc(var(--nav-height)+48px)] pb-24"
        >
          <div className="mx-auto w-full max-w-[1100px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Software Developer &middot; USAF Technical Sergeant
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(48px,8vw,88px)] font-black leading-none tracking-[-2px] mb-6">
                From Flightlines
                <br />
                To Code.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="w-12 h-1 bg-[var(--color-accent)] mb-6" />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-[17px] text-[var(--color-text-muted)] max-w-[520px] leading-relaxed mb-10">
                M.S. Aeronautical Engineering, Embry-Riddle Aeronautical
                University. 18 years fixing jets and leading airmen. Now building
                open-source software through the DoD SkillBridge program.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-block bg-[var(--color-accent)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:opacity-85 transition-opacity"
                >
                  See My Work
                </a>
                <a
                  href="/assets/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-[var(--color-text)] text-[var(--color-text)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:bg-[var(--color-text)] hover:text-white transition-colors"
                >
                  Download CV
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="bg-[var(--color-bg-alt)]">
          <div className="mx-auto max-w-[1100px] px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-16 items-start">
              {/* Photo */}
              <div className="relative aspect-square bg-[var(--color-border)] rounded overflow-hidden md:w-[220px]">
                <img
                  src="/assets/photo.jpg"
                  alt="Steven Koehl"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bio */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                  About Me
                </p>
                <p className="text-base text-[var(--color-text-muted)] leading-relaxed mb-10">
                  USAF Technical Sergeant and avionics technician with 18 years
                  of experience in circuit-level maintenance, program
                  management, and technical instruction. I've managed $35M in
                  assets, recovered $7M in fleet costs through deficiency
                  reporting, and trained 800+ students with a 92% pass rate.
                  Currently serving as Senior AFREP Technician and AI
                  Developmental Lead at Fairchild AFB, while building
                  open-source software through the DoD SkillBridge program
                  before my June 2028 retirement.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-10">
                  <div className="flex flex-col gap-1">
                    <AnimatedCounter
                      target={18}
                      suffix="+"
                      label="Years Service"
                    />
                  </div>
                  <ScrollReveal>
                    <span className="text-[28px] font-black leading-none">
                      M.S.
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[var(--color-text-muted)] mt-1 block">
                      Aero Engineering
                    </span>
                  </ScrollReveal>
                  <ScrollReveal delay={0.1}>
                    <span className="text-[28px] font-black leading-none">
                      ERAU
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[var(--color-text-muted)] mt-1 block">
                      Embry-Riddle
                    </span>
                  </ScrollReveal>
                </div>

                {/* GitHub: contribution heatmap + live activity */}
                <ScrollReveal delay={0.2}>
                  <div className="mt-8 space-y-6">
                    {/* Contribution heatmap (ghchart.rshah.org) */}
                    <div className="border border-[var(--color-border)] rounded-sm overflow-hidden">
                      <img
                        src={`https://ghchart.rshah.org/${GITHUB_USER}`}
                        alt="GitHub contribution graph"
                        loading="lazy"
                        className="w-full"
                      />
                    </div>
                    {/* Live activity feed (client component, cached) */}
                    <GitHubActivity />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── Projects: Bento Grid ── */}
        <section id="projects">
          <div className="mx-auto max-w-[1100px] px-6 py-24">
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
              Selected Work
            </p>
            <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-12">
              Projects
            </h2>

            {/* Bento grid: 3 columns on desktop, 1 on mobile.
                Featured software projects span 2 columns.
                Military achievements fill the right column. */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* NeuralPulse — featured, spans 2 cols + 2 rows */}
              <ScrollReveal>
                <div className="md:col-span-2 md:row-span-2">
                  <ProjectCard
                    {...SOFTWARE_PROJECTS[0]}
                    variant="featured"
                  />
                </div>
              </ScrollReveal>

              {/* Military 1 — right column */}
              <ScrollReveal delay={0.1}>
                <ProjectCard {...MILITARY_ACHIEVEMENTS[0]} />
              </ScrollReveal>

              {/* Military 2 — right column */}
              <ScrollReveal delay={0.15}>
                <ProjectCard {...MILITARY_ACHIEVEMENTS[1]} />
              </ScrollReveal>

              {/* 92-AMXS — featured, spans 2 cols */}
              <ScrollReveal delay={0.1}>
                <div className="md:col-span-2">
                  <ProjectCard
                    {...SOFTWARE_PROJECTS[1]}
                    variant="featured"
                  />
                </div>
              </ScrollReveal>

              {/* Military 3 — right column */}
              <ScrollReveal delay={0.2}>
                <ProjectCard {...MILITARY_ACHIEVEMENTS[2]} />
              </ScrollReveal>

              {/* Military 4 — right column, spans remaining space */}
              <ScrollReveal delay={0.25}>
                <ProjectCard {...MILITARY_ACHIEVEMENTS[3]} />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="bg-[var(--color-bg-alt)]">
          <div className="mx-auto max-w-[1100px] px-6 py-24">
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
              Technical Skills
            </p>
            <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-12">
              Expertise
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {SKILLS.map((group, i) => (
                <ScrollReveal key={group.group} delay={i * 0.1}>
                  <h3 className="text-xs font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-5 pb-3 border-b-2 border-[var(--color-accent)]">
                    {group.group}
                  </h3>
                  <ul className="flex flex-col gap-[10px]">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-[var(--color-text-muted)] pl-3 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-[var(--color-accent)] before:rounded-full"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="bg-[var(--color-dark-surface)] text-white">
          <div className="mx-auto max-w-[1100px] px-6 py-24 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
              Get In Touch
            </p>
            <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-8">
              Let's Connect
            </h2>
            <p className="text-base text-[var(--color-dark-text)] max-w-[480px] mx-auto mb-10 leading-relaxed">
              Open to software development roles and engineering opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:spkoehl@gmail.com"
                className="inline-block border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:bg-[var(--color-accent)] hover:text-white transition-colors"
              >
                Gmail
              </a>
              <a
                href="mailto:steven.koehl@proton.me"
                className="inline-block border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:bg-[var(--color-accent)] hover:text-white transition-colors"
              >
                Proton Mail
              </a>
              <a
                href="https://www.linkedin.com/in/steven-koehl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[var(--color-dark-border)] text-[var(--color-dark-text)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:border-[var(--color-dark-text)] hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/sleuthy-sloth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[var(--color-dark-border)] text-[var(--color-dark-text)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:border-[var(--color-dark-text)] hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Sub-footer inside contact section */}
          <p className="text-center text-xs text-[var(--color-text-muted)] py-5 px-6 border-t border-[var(--color-dark-border)]">
            &copy; {currentYear} Steven Koehl. All rights reserved.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
