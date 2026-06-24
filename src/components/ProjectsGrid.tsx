import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  screenshot?: { src: string; alt: string };
  links?: { href: string; label: string; external?: boolean }[];
}

const SOFTWARE_PROJECTS: Project[] = [
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
      { href: "/work/neuralpulse", label: "Case Study", external: false },
      { href: "https://github.com/sleuthy-sloth/NeuralPulse", label: "Source Code", external: true },
    ],
  },
  {
    title: "OpenNarrator",
    category: "Audiobook Creator",
    description:
      "Open-source audiobook factory. Drop in an ebook, get back a chaptered M4B audiobook. 16 Kokoro TTS voices, web UI + CLI + GitHub Action. No API keys, no cloud services, no vendor lock-in. Installs via Homebrew or pip.",
    tags: ["Python", "Kokoro TTS", "FastAPI", "ffmpeg", "GitHub Action"],
    links: [
      { href: "/work/opennarrator", label: "Case Study", external: false },
      { href: "https://github.com/sleuthy-sloth/opennarrator", label: "Source Code", external: true },
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
      { href: "/work/92-amxs-tracker", label: "Case Study", external: false },
      { href: "https://sleuthy-sloth.github.io/92-AMXS-Tracker/", label: "Live Demo", external: true },
      { href: "https://github.com/sleuthy-sloth/92-AMXS-Tracker", label: "Source Code", external: true },
    ],
  },
];

const MILITARY_ACHIEVEMENTS: Project[] = [
  {
    title: "AI Developmental Lead Initiative",
    category: "AI & Emerging Technology",
    description:
      "Leading Fairchild AFB's exploration of AI tools for aerospace maintenance workflows. Looking at how AI can improve mission capability rates and reduce downtime on non-mission-capable assets.",
    tags: ["Artificial Intelligence", "Process Automation", "AFREP", "Mission Readiness"],
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
    tags: ["Technical Orders", "COR Oversight", "Compliance", "Contract Management"],
  },
  {
    title: "Electronics & AFREP Training Curriculum",
    category: "Education & Training",
    description:
      "Authored and delivered 300 hours of instructional material on complex electronics, micro-miniature soldering, and component-level diagnostics for the USAF at Sheppard AFB. Trained 800+ students annually, maintaining a 92% pass rate and zero lab safety mishaps.",
    tags: ["Curriculum Design", "ISD", "Electronics", "Micro-Miniature Repair"],
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-[1100px] px-6 py-24">
        {/* Software Projects */}
        <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
          Selected Work
        </p>
        <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-12">
          Software Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* NeuralPulse — featured, spans 2 cols + 2 rows */}
          <ScrollReveal>
            <div className="md:col-span-2 md:row-span-2">
              <ProjectCard {...SOFTWARE_PROJECTS[0]} variant="featured" ghRepo="NeuralPulse" />
            </div>
          </ScrollReveal>

          {/* OpenNarrator — featured, spans 2 cols */}
          <ScrollReveal delay={0.1}>
            <div className="md:col-span-2">
              <ProjectCard {...SOFTWARE_PROJECTS[1]} variant="featured" ghRepo="opennarrator" />
            </div>
          </ScrollReveal>

          {/* 92-AMXS — featured, spans 2 cols */}
          <ScrollReveal delay={0.15}>
            <div className="md:col-span-2">
              <ProjectCard {...SOFTWARE_PROJECTS[2]} variant="featured" ghRepo="92-AMXS-Tracker" />
            </div>
          </ScrollReveal>

          {/* Spacer card to fill the right column on desktop */}
          <ScrollReveal delay={0.2}>
            <div className="hidden md:block border border-dashed border-[var(--color-border)] p-7 flex flex-col items-center justify-center text-center min-h-[200px]">
              <p className="text-[11px] font-bold uppercase tracking-[2px] text-[var(--color-text-muted)] mb-2">
                More Soon
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                Iron Storm RTS and other projects in progress.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Military Achievements */}
        <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
          Military Career
        </p>
        <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-12">
          Key Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MILITARY_ACHIEVEMENTS.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
