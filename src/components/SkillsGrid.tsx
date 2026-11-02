import ScrollReveal from "@/components/ScrollReveal";

const SKILLS = [
  {
    group: "Engineering",
    items: [
      "Aerospace systems",
      "Avionics",
      "Electronics diagnostics",
      "Systems engineering",
      "Maintenance and reliability",
      "Technical documentation",
      "Quality assurance",
    ],
  },
  {
    group: "Software Development",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "C++",
      "Application architecture",
    ],
  },
  {
    group: "Infrastructure & Systems",
    items: [
      "Linux",
      "Docker",
      "Networking",
      "Cloud deployment",
      "Self-hosted infrastructure",
      "Systems administration",
    ],
  },
  {
    group: "Leadership & Operations",
    items: [
      "Technical program management",
      "Contract oversight",
      "Resource management",
      "Process improvement",
      "Workforce development",
      "Training and quality management",
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="bg-[var(--color-bg)]">
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
