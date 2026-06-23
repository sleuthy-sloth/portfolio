import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

/**
 * Writing page (/writing) — Memoria Aeterna book showcase.
 *
 * Sections: book cover + synopsis, author bio, agent/publisher contact.
 * Uses the writing identity (gold accent, midnight blue background, serif font).
 * Nav links include cross-link to Engineering.
 */

export default function WritingPage() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/writing", label: "Synopsis" },
    { href: "/writing/excerpt", label: "Excerpt" },
    { href: "/writing#author", label: "About the Author" },
    { href: "/writing#agent-contact", label: "Contact" },
    { href: "/work", label: "Engineering", crossAccent: "engineering" as const },
  ];

  return (
    <>
      <Nav links={navLinks} />

      <main className="flex-1" id="main-content" data-page="writing">
        {/* ── Book Hero ── */}
        <section
          id="book-hero"
          className="bg-[var(--color-midnight)] text-white/90 pt-[calc(var(--nav-height)+48px)] pb-24 px-6"
        >
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-[320px_1fr] gap-16 items-start">
            {/* Book cover */}
            <ScrollReveal delay={0.1}>
              <div className="md:max-w-[320px] mx-auto w-full">
                <Image
                  src="/assets/memoria-aeterna-cover.png"
                  alt="Memoria Aeterna book cover"
                  width={640}
                  height={960}
                  className="w-full rounded shadow-2xl h-auto"
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority
                />
              </div>
            </ScrollReveal>

            {/* Synopsis */}
            <div>
              <ScrollReveal>
                <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-gold)] mb-5">
                  A Novel by Steven K
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="font-[var(--font-serif)] text-[clamp(40px,6vw,56px)] font-semibold leading-none tracking-[-1px] mb-4">
                  Memoria
                  <br />
                  Aeterna
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="font-[var(--font-serif)] italic text-sm text-white/60 mb-6">
                  Aionia he mneme. Eternal memory.
                  <br />
                  <span className="text-xs opacity-70">Byzantine funeral rite</span>
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="w-12 h-1 bg-[var(--color-gold)] mb-6" />
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <p className="font-[var(--font-serif)] text-[17px] leading-relaxed text-white/85 mb-5">
                  Konstantin has been searching for 391 years.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="font-[var(--font-serif)] text-[17px] leading-relaxed text-white/85 mb-5">
                  He is a Memorious, one of a small number of people who cannot
                  die in the ordinary way. When their bodies fail, they wake in a
                  new one, carrying every memory of every life they have lived.
                  For Konstantin, that means nearly a thousand years of memory,
                  beginning in Constantinople in 1043, where he served in the
                  Great Palace and fell in love with a woman named Theodora.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.35}>
                <p className="font-[var(--font-serif)] text-[17px] leading-relaxed text-white/85 mb-5">
                  Then Theodora died. And was born again. And died again. Each
                  time in a new body, a new name, a new life, with no memory of
                  who she had been. Konstantin, unable to forget, began to
                  search. He tracked her essence across centuries and continents,
                  through the Crusades, the Black Death, the fall of
                  Constantinople, the courts of Venice, the trenches of the
                  Western Front. Each time he found her, he was a stranger. Each
                  time he lost her, the search began again.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <p className="font-[var(--font-serif)] text-[17px] leading-relaxed text-white/85 mb-5">
                  In modern Istanbul, Konstantin finds Ayse Demir, an elderly
                  woman in a hospice bed, surrounded by her family. He knows it
                  is Theodora. He has forty years with her this time, and for the
                  first time in centuries, he considers the possibility that
                  finding her was never the point.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.45}>
                <p className="font-[var(--font-serif)] text-[17px] leading-relaxed text-white/70 italic mb-8">
                  Memoria Aeterna is a novel about memory, love, and what it
                  costs to hold on. It spans 982 years, from the golden domes of
                  Byzantium to the streets of modern Istanbul, asking one
                  question: if you could track the person you love across every
                  lifetime, would you? And what would you have to give up to
                  stop?
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <a
                  href="/writing/excerpt"
                  className="inline-block bg-[var(--color-gold)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:bg-[var(--color-gold-light)] transition-colors"
                >
                  Read the First Chapter
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── About the Author ── */}
        <section id="author" className="bg-[var(--color-bg)]">
          <div className="mx-auto max-w-[1100px] px-6 py-24">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-gold)] mb-5">
                About the Author
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-12">
                Steven K
              </h2>
            </ScrollReveal>
            <div className="max-w-[680px]">
              <ScrollReveal delay={0.15}>
                <p className="font-[var(--font-serif)] text-[17px] leading-relaxed text-[var(--color-text-muted)] mb-5">
                  Steven K is a writer and United States Air Force veteran. He
                  served eighteen years as an avionics technician before
                  beginning a transition to civilian life through the DoD
                  SkillBridge program. He holds a Master of Science in
                  Aeronautical Engineering from Embry-Riddle Aeronautical
                  University.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="font-[var(--font-serif)] text-[17px] leading-relaxed text-[var(--color-text-muted)]">
                  Memoria Aeterna is his first novel. It began as a question
                  about memory: what would it cost a person to carry every moment
                  of a thousand-year life, and could love survive that weight?
                  The novel draws on his years of study in Byzantine and Ottoman
                  history, and on time spent walking the streets of Istanbul,
                  where the layers of empires are still visible in the stones.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Agent / Publisher Contact ── */}
        <section
          id="agent-contact"
          className="bg-[var(--color-midnight)] text-white/90"
        >
          <div className="mx-auto max-w-[1100px] px-6 py-24 text-center">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-gold)] mb-5">
                For Literary Agents &amp; Publishers
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-8">
                Inquiries
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base text-white/70 max-w-[480px] mx-auto mb-10 leading-relaxed">
                Memoria Aeterna is a complete 720-page manuscript, available upon
                request.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:steven.koehl@proton.me"
                  className="inline-block bg-[var(--color-gold)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:bg-[var(--color-gold-light)] transition-colors"
                >
                  Email Steven
                </a>
              </div>
            </ScrollReveal>
          </div>

          <p className="text-center text-xs text-[var(--color-text-muted)] py-5 px-6 border-t border-[var(--color-dark-border)]">
            &copy; {new Date().getFullYear()} Steven K. All rights reserved.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
