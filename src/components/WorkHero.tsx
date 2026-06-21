import ScrollReveal from "@/components/ScrollReveal";

export default function WorkHero() {
  return (
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
  );
}
