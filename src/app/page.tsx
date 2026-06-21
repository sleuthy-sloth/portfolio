import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ForkCard from "@/components/ForkCard";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Landing page (/) — Hero intro + fork cards.
 *
 * Users choose between the Engineering portfolio and the Writing section.
 * No nav links shown on the landing page (just name + theme toggle).
 */
export default function HomePage() {
  return (
    <>
      <Nav />

      <main className="flex-1" id="main-content">
        {/* Hero */}
        <section className="flex min-h-[70vh] items-center justify-center px-6 pt-[calc(var(--nav-height)+48px)] pb-12">
          <div className="max-w-[720px] text-center">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Steven Koehl
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(40px,7vw,72px)] font-black leading-none tracking-[-2px] mb-6">
                Two sides
                <br />
                of one life.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="w-12 h-1 bg-[var(--color-accent)] mx-auto mb-6" />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-[17px] leading-relaxed text-[var(--color-text-muted)] max-w-[600px] mx-auto">
                USAF Technical Sergeant. Software developer. Novelist. 18 years
                fixing jets, now building software through SkillBridge and writing
                a literary historical fiction novel that spans 982 years of
                Byzantine and Ottoman history.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Fork cards */}
        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.1}>
              <ForkCard
                href="/work"
                identity="engineering"
                label="Software & Engineering"
                title="From Flightlines\nTo Code"
                description="Open-source projects, military achievements, and the tech stack I use to build them. NeuralPulse, the 92 AMXS Tracker, and the career that led from avionics benches to keyboards."
                tags={["TypeScript", "React / Next.js", "Firebase / Supabase"]}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ForkCard
                href="/writing"
                identity="writing"
                label="Writing"
                title="Memoria\nAeterna"
                description="A novel about an immortal man searching for the woman he loves across 982 years of Byzantine and Ottoman history. Synopsis, sample chapter, and information for literary contacts."
                tags={["Literary Fiction", "Historical", "First Novel"]}
              />
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
