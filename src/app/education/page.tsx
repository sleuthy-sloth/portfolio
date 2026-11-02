import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education — Steven Koehl",
  description: "Academic qualifications, relevant coursework, certifications, and professional development of Steven Koehl.",
};

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
];

export default function EducationPage() {
  return (
    <>
      <Nav links={primaryNav} resumeHref="/resume" />

      <main className="flex-1" id="main-content">
        <section className="px-6 pt-[calc(var(--nav-height)+64px)] pb-24">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Education
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(32px,5vw,52px)] font-black tracking-[-1px] mb-10">
                Academic qualifications
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <article className="border-l-2 border-[var(--color-accent)] pl-6 mb-12">
                <h2 className="text-xl font-bold mb-1">Master of Science in Aeronautical Engineering</h2>
                <p className="text-[13px] text-[var(--color-text-muted)] mb-4">
                  Embry-Riddle Aeronautical University
                </p>
                <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                  Graduate study in aeronautical engineering, complementing 18 years of hands-on aerospace maintenance and technical operations experience.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <section className="mb-12">
                <h2 className="text-xs font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-4 pb-2 border-b border-[var(--color-border)]">
                  Professional development
                </h2>
                <ul className="space-y-2 text-[15px] text-[var(--color-text-muted)]">
                  <li>Instructional System Design (ISD) — curriculum authoring and delivery</li>
                  <li>Contracting Officer Representative (COR) oversight training</li>
                  <li>Quality and deficiency reporting (JDRS / AFMC liaison)</li>
                  <li>AI integration and workflow automation initiatives</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-4 pb-2 border-b border-[var(--color-border)]">
                  Certifications
                </h2>
                <p className="text-[15px] text-[var(--color-text-muted)]">
                  Additional certifications to be added after verification. See docs/CONTENT-QUESTIONS.md.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-12">
                <Link
                  href="/resume"
                  className="inline-block bg-[var(--color-accent)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:opacity-85 transition-opacity"
                >
                  View Resume
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
