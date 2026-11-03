import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/experience" },
  title: "Experience — Steven Koehl",
  description:
    "Detailed professional experience of Steven Koehl: Air Force career translated into civilian business language.",
};

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
];

const roles = [
  {
    title: "Senior AFREP Technician & AI Developmental Lead",
    org: "United States Air Force — Fairchild AFB",
    period: "Current",
    bullets: [
      "Leading Fairchild AFB's exploration of AI tools for aerospace maintenance workflows, focused on mission capability rates and reducing downtime on non-mission-capable assets.",
      "Serving as Senior Air Force Repair Enhancement Program (AFREP) Technician.",
      "Managing technical programs spanning Technical Order distribution, product improvement, and contract oversight.",
    ],
  },
  {
    title: "Product Quality Deficiency Report (PQDR) Liaison",
    org: "United States Air Force — liaison to Air Force Materiel Command",
    period: "Prior role",
    bullets: [
      "Primary liaison to Air Force Materiel Command for the Joint Deficiency Reporting System.",
      "Investigated and submitted 140 Product Quality Deficiency Reports.",
      "Directly recovered $7M in costs and drove fleet-wide safety modifications across multiple aircraft systems.",
    ],
  },
  {
    title: "Technical Program Manager — $35M Maintenance Program",
    org: "United States Air Force",
    period: "Prior role",
    bullets: [
      "Orchestrated a tri-functional management strategy synchronizing Technical Order distribution, Product Improvement, and Contract Oversight for a $35M fleet.",
      "Managed a 5,000-item Technical Order library with 98% audit accuracy.",
      "Oversaw a $2M service contract with 100% Performance Work Statement adherence.",
    ],
  },
  {
    title: "Technical Instructor — Electronics & AFREP Curriculum",
    org: "United States Air Force — Sheppard AFB",
    period: "Prior role",
    bullets: [
      "Authored and delivered 300 hours of instructional material on complex electronics, micro-miniature soldering, and component-level diagnostics.",
      "Trained 800+ students annually with a 92% pass rate and zero lab safety mishaps.",
      "Curriculum design following Instructional System Design principles.",
    ],
  },
  {
    title: "Avionics Technician (Circuit-Level)",
    org: "United States Air Force",
    period: "2008 — present",
    bullets: [
      "Circuit-level diagnostics and repair on aircraft avionics systems.",
      "Micro-miniature (2M) circuit card repair, soldering, and component analysis.",
      "Aerospace maintenance operations and mission readiness support.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Nav links={primaryNav} resumeHref="/resume" />

      <main className="flex-1" id="main-content">
        <section className="px-6 pt-[calc(var(--nav-height)+64px)] pb-24">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Experience
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(32px,5vw,52px)] font-black tracking-[-1px] mb-6">
                Professional experience
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[17px] text-[var(--color-text-muted)] max-w-[720px] leading-relaxed mb-12">
                Air Force career history translated into civilian business language. Military acronyms are explained; responsibilities are stated as outcomes.
              </p>
            </ScrollReveal>

            <div className="space-y-12">
              {roles.map((r, i) => (
                <ScrollReveal key={r.title} delay={i * 0.05}>
                  <article className="border-l-2 border-[var(--color-accent)] pl-6">
                    <h2 className="text-xl font-bold mb-1">{r.title}</h2>
                    <p className="text-[13px] text-[var(--color-text-muted)] mb-1">{r.org}</p>
                    <p className="text-[11px] font-bold uppercase tracking-[2px] text-[var(--color-text-muted)] mb-4">
                      {r.period}
                    </p>
                    <ul className="space-y-2">
                      {r.bullets.map((b) => (
                        <li
                          key={b}
                          className="text-[15px] text-[var(--color-text-muted)] leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:bg-[var(--color-accent)] before:rounded-full"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
                <p className="text-[13px] text-[var(--color-text-muted)] mb-4">
                  Military terms: AFREP = Air Force Repair Enhancement Program; JDRS = Joint Deficiency Reporting System; AFMC = Air Force Materiel Command; TO = Technical Order; PWS = Performance Work Statement; COR = Contracting Officer Representative.
                </p>
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
