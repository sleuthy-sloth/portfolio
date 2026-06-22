import ScrollReveal from "@/components/ScrollReveal";

const SKILLS = [
  {
    group: "Frontend & Frameworks",
    items: [
      "TypeScript / JavaScript",
      "React 19 / Next.js 16",
      "Tailwind CSS / Vite",
      "Zustand / IndexedDB",
      "PWA / Workbox",
    ],
  },
  {
    group: "Backend & Data",
    items: [
      "Firebase / Supabase",
      "Cloud Computing",
      "AI Integration",
      "Zod / jsPDF / SheetJS",
      "REST / GraphQL",
    ],
  },
  {
    group: "Avionics & Engineering",
    items: [
      "Aerospace Maintenance",
      "Micro-Miniature Circuit Card Repair",
      "Component-Level Diagnostics",
      "Soldering & Circuit Analysis",
      "AutoCAD",
    ],
  },
  {
    group: "Leadership & Process",
    items: [
      "Program Management",
      "Contract Oversight (COR)",
      "Instructional System Design",
      "Team Building & Mentorship",
      "Continuous Improvement",
    ],
  },
];

export default function SkillsGrid() {
  return (
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
  );
}
