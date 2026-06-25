import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now — Steven Koehl | Current Projects & Focus",
  description:
    "What Steven Koehl is doing now: SkillBridge transition, building NeuralPulse and the 92 AMXS Tracker, writing Memoria Aeterna, and learning TypeScript and AI/ML integration.",
  openGraph: {
    title: "Now — Steven Koehl",
    description:
      "Current projects, learning, and professional focus for Steven Koehl, USAF Technical Sergeant transitioning to civilian software development.",
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/now", label: "Now" },
];

export default function NowPage() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Nav links={navLinks} />

      <main className="flex-1" id="main-content">
        <section className="px-6 pt-[calc(var(--nav-height)+64px)] pb-24">
          <div className="mx-auto max-w-[680px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                What I&apos;m Doing Now
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(36px,6vw,56px)] font-black leading-none tracking-[-2px] mb-10">
                Now
              </h1>
            </ScrollReveal>

            <div className="space-y-10 text-[17px] leading-relaxed text-[var(--color-text-muted)]">
              <ScrollReveal delay={0.15}>
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-3 pb-2 border-b border-[var(--color-border)]">
                    SkillBridge Transition
                  </h2>
                  <p>
                    Active in the DoD SkillBridge program at Fairchild AFB,
                    transitioning from 18 years of USAF service to civilian
                    software development. Building open-source projects and
                    preparing for post-retirement roles. Retirement date: June
                    1, 2028.
                  </p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-3 pb-2 border-b border-[var(--color-border)]">
                    Building
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-[var(--color-accent)] shrink-0">&mdash;</span>
                      <span>
                        <strong className="text-[var(--color-text)]">NeuralPulse:</strong>{" "}
                        Open-source brain training PWA. 13 games, daily challenges,
                        stats dashboard. Live on Vercel, adding tests and SEO.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[var(--color-accent)] shrink-0">&mdash;</span>
                      <span>
                        <strong className="text-[var(--color-text)]">92 AMXS Tracker:</strong>{" "}
                        Maintenance operations platform for the 92nd AMXS. Live
                        demo deployed, iterating on feedback from squadron
                        maintainers.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[var(--color-accent)] shrink-0">&mdash;</span>
                      <span>
                        <strong className="text-[var(--color-text)]">Iron Storm:</strong>{" "}
                        Isometric RTS game in Godot 4.6.3. v0.2 in progress.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[var(--color-accent)] shrink-0">&mdash;</span>
                      <span>
                        <strong className="text-[var(--color-text)]">This site:</strong>{" "}
                        Portfolio and writing showcase. Next.js 16, Tailwind v4,
                        auto-deployed on Vercel. Always improving.
                      </span>
                    </li>
                  </ul>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-3 pb-2 border-b border-[var(--color-border)]">
                    Writing
                  </h2>
                  <p>
                    <em className="text-[var(--color-text)]">Memoria Aeterna</em>{" "}
                    is complete at 720 pages across 46 chapters. The manuscript
                    is available to literary agents and publishers upon request.
                    Currently exploring publishing options and drafting short
                    fiction on the side.
                  </p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-3 pb-2 border-b border-[var(--color-border)]">
                    Learning
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-[var(--color-accent)] shrink-0">&mdash;</span>
                      <span>Deepening TypeScript and systems design patterns</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[var(--color-accent)] shrink-0">&mdash;</span>
                      <span>Exploring AI/ML integration in web applications</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[var(--color-accent)] shrink-0">&mdash;</span>
                      <span>Reading Byzantine history for the next novel</span>
                    </li>
                  </ul>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.35}>
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-3 pb-2 border-b border-[var(--color-border)]">
                    Reading
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-[var(--color-accent)] shrink-0">&mdash;</span>
                      <span>
                        <strong className="text-[var(--color-text)]">The Alexiad</strong>{" "}
                        by Anna Komnene — primary source for the next novel
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[var(--color-accent)] shrink-0">&mdash;</span>
                      <span>
                        <strong className="text-[var(--color-text)]">Designing Data-Intensive Applications</strong>{" "}
                        by Martin Kleppmann
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[var(--color-accent)] shrink-0">&mdash;</span>
                      <span>
                        <strong className="text-[var(--color-text)]">Byzantium: The Surprising Life of a Medieval Empire</strong>{" "}
                        by Judith Herrin
                      </span>
                    </li>
                  </ul>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <p className="text-sm italic text-[var(--color-text-muted)] pt-6 border-t border-[var(--color-border)]">
                  This is a{" "}
                  <a
                    href="https://nownownow.com/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-accent)] hover:underline"
                  >
                    /now page
                  </a>
                  , inspired by Derek Sivers. Last updated: {lastUpdated}.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
