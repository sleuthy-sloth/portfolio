import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/**
 * Excerpt page (/writing/excerpt) — Chapter 1 of Memoria Aeterna.
 *
 * Reading-optimized typography: Source Serif 4, generous line-height,
 * indented paragraphs. Identical nav to the writing section.
 */

export default function ExcerptPage() {
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

      <main className="flex-1">
        <article className="max-w-[680px] mx-auto px-6 pt-[calc(var(--nav-height)+64px)] pb-24">
          {/* Header */}
          <header className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-gold)] mb-5">
              Memoria Aeterna
            </p>
            <h1 className="font-[var(--font-serif)] text-[32px] font-semibold mb-4">
              Letting the Palace Fall
            </h1>
            <Link
              href="/writing"
              className="text-[13px] text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
            >
              &larr; Back to synopsis
            </Link>
          </header>

          {/* Chapter text */}
          <div className="font-[var(--font-serif)] text-lg leading-relaxed text-[var(--color-text)] prose-excerpt">
            <p>
              The archaeologist's hands are shaking as she describes her dream.
            </p>

            <p>
              "I'm in a palace," she says. "Marble columns, mosaics on the walls
              showing saints with gold halos. I can smell roses, white roses,
              even though it's winter. And there's smoke." She pauses, fingers
              worrying the edge of her notebook. "So much smoke."
            </p>

            <p>
              I lean forward despite myself. White roses in November. Smoke in
              the women's quarters. My chest tightens with hope I've learned not
              to trust. But hope is an addiction, and I've been using for 391
              years.
            </p>

            <p>
              "What else?" I keep my voice gentle, curious. Not desperate. Never
              desperate, even though I can feel my pulse in my throat.
            </p>

            <p>
              Elif looks up at me with dark eyes flecked with amber, and I know
              before she finishes that this isn't Theodora. Those eyes are
              wrong, too round, too open, without that particular tilt at the
              corners I'd recognize in any face, across any span of centuries.
            </p>

            <p>But I ask anyway. I always ask.</p>

            <p>
              "Do you remember a fire? In November 1043, in the women's quarters
              of the Great Palace?"
            </p>

            <p>
              She blinks. Confusion clouds her face, and I watch hope die the
              same death it's died a thousand times before. Quick. Familiar.
              Painful in its predictability.
            </p>

            <p>
              "No," Elif says slowly. "In my dream, I'm walking through gardens.
              Just... walking. The roses are blooming, and I'm happy. Peaceful."
              She sets down her notebook, giving me her full attention. "How did
              you know about the palace? Are you a Byzantine historian too? My
              dissertation advisor didn't mention collaborating with anyone
              from..." She tilts her head. "Where did you say you were from?"
            </p>

            <p>
              "Rome," I say. The truth is more complicated, but Rome is close
              enough to a lie I can sustain without thinking. I flew in
              yesterday morning, a flight too expensive and too urgent for a man
              who claims to be writing a novel about Byzantine daily life, but
              she hasn't pressed me on that. "I'm researching for a book.
              Focused on daily life in the palace rather than politics or war. I
              read about your dreams on a forum your sister posted to. The
              details were remarkably vivid. I thought you might be willing to
              consult."
            </p>

            <p>
              She believes me because people always believe plausible lies more
              readily than impossible truths.
            </p>

            <p>
              We're sitting in a makeshift shelter at the archaeological site
              near the old Hippodrome, where Elif and her team have been
              excavating what they believe are servant quarters from the Middle
              Byzantine period. Probably eleventh century, she told me when I
              first approached an hour ago, though the stratigraphy is
              complicated by later Ottoman construction.
            </p>

            <p>
              I hadn't needed her to tell me the date. I know these stones. I've
              walked these streets when they were crowded with merchants and
              pilgrims and the polyglot chaos of an empire that thought it would
              last forever. I watched them burn during the Fourth Crusade. I
              watched them fall to the Ottomans. I've watched them crumble into
              the tourist attraction they are now, where college students dig
              carefully with brushes and screens while I pretend not to remember
              when this was my home.
            </p>

            <p>
              The February sun is weak today, filtering through plastic tarps
              that protect the dig site. Istanbul sprawls around us, indifferent
              to history. Car horns, call to prayer from a nearby mosque, the
              diesel rumble of buses. The modern city's heartbeat drowning out
              the whispers of the dead.
            </p>

            <p>
              "That's actually not a bad angle," Elif says, warming to the topic
              with the particular energy of a graduate student who has been
              thinking about something for years and rarely finds an audience
              outside her department. "Most novels about Byzantium focus on
              emperors and generals. The daily life angle could be interesting.
              How people actually lived, not just how they died in wars or
              coups."
            </p>

            <p>
              "Exactly." I manage a smile. I flex my right hand under the table.
              I've been doing that since yesterday, testing it, the way you test
              a door that doesn't fit its frame properly. The fingers move
              correctly, but there's a stiffness in the cold that doesn't feel
              entirely mine, as though I'm still learning the knuckles.
            </p>
          </div>

          {/* Footer */}
          <footer className="text-center mt-16 pt-8 border-t border-[var(--color-border)]">
            <p className="text-sm text-[var(--color-text-muted)] italic mb-6">
              End of excerpt. The novel continues for 720 pages across 46
              chapters and five parts.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/writing"
                className="inline-block bg-[var(--color-gold)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:bg-[var(--color-gold-light)] transition-colors"
              >
                Back to Synopsis
              </Link>
              <Link
                href="/writing#agent-contact"
                className="inline-block border-2 border-[var(--color-gold)] text-[var(--color-gold)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:bg-[var(--color-gold)] hover:text-white transition-colors"
              >
                Request the Full Manuscript
              </Link>
            </div>
          </footer>
        </article>
      </main>

      <Footer />
    </>
  );
}
