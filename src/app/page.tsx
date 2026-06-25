import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import WorkHero from "@/components/WorkHero";
import AboutSection from "@/components/AboutSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsGrid from "@/components/SkillsGrid";
import ContactSection from "@/components/ContactSection";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steven Koehl — Software Developer & USAF Technical Sergeant",
  description:
    "Open-source projects, military achievements, and the tech stack Steven Koehl uses to build them. NeuralPulse, the 92 AMXS Tracker, and the career that led from avionics benches to keyboards.",
  openGraph: {
    title: "Steven Koehl — Engineering Portfolio",
    description:
      "From flightlines to code: software engineering projects by Steven Koehl, USAF Technical Sergeant.",
  },
};

/**
 * Root landing page (/) — Engineering portfolio focused on software,
 * military achievements, and technical skills. Writing is demoted to
 * a subtle footnote at the bottom.
 */
export default function HomePage() {
  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <>
      <Nav links={navLinks} />
      <CommandPalette />

      <main className="flex-1" id="main-content">
        <WorkHero />
        <AboutSection />
        <ProjectsGrid />
        <SkillsGrid />
        <ContactSection />

        {/* Also: I write fiction — subtle demoted mention */}
        <section className="bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
          <div className="mx-auto max-w-[1100px] px-6 py-16 text-center">
            <ScrollReveal>
              <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-[var(--color-text-muted)] mb-4">
                Also
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base text-[var(--color-text-muted)] max-w-[500px] mx-auto leading-relaxed mb-6">
                I write fiction. Memoria Aeterna is a literary historical novel
                about an immortal man searching for the woman he loves across
                982 years of Byzantine and Ottoman history.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Link
                href="/writing"
                className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[1.5px] text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors"
              >
                Read about the novel
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
