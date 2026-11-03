import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/resume" },
  title: "Resume — Steven Koehl",
  description: "Professional resume of Steven Koehl: technical experience, education, skills, and contact information.",
};

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
];

export default function ResumePage() {
  return (
    <>
      <Nav links={primaryNav} resumeHref="/resume" />

      <main className="flex-1" id="main-content">
        <section className="px-6 pt-[calc(var(--nav-height)+64px)] pb-24">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Resume
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(32px,5vw,52px)] font-black tracking-[-1px] mb-6">
                Steven Koehl
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[17px] text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-[720px]">
                Technical Sergeant, U.S. Air Force &middot; M.S. Aeronautical Engineering, Embry-Riddle &middot; Transitioning to civilian employment via DoD SkillBridge.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-3 mb-12">
                <a
                  href="/assets/Steven-Koehl-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[var(--color-accent)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:opacity-85 transition-opacity"
                >
                  Download PDF (Steven-Koehl-Resume.pdf)
                </a>
                <Link
                  href="/experience"
                  className="inline-block border-2 border-[var(--color-border)] text-[var(--color-text-muted)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-colors"
                >
                  Full Experience
                </Link>
              </div>
            </ScrollReveal>

            {/* Web-readable resume summary */}
            <div className="space-y-10">
              <ScrollReveal delay={0.25}>
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-accent)]">
                    Summary
                  </h2>
                  <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                    Experienced technical professional with 18 years of Air Force service spanning aerospace maintenance, circuit-level diagnostics, technical program management, quality and deficiency reporting, technical documentation, contract oversight, instruction, and AI integration. M.S. in Aeronautical Engineering. Building open-source software through DoD SkillBridge ahead of June 2028 retirement.
                  </p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-accent)]">
                    Technical skills
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] text-[var(--color-text-muted)]">
                    <div>
                      <p className="font-bold text-[var(--color-text)] mb-1">Software</p>
                      <p>TypeScript, JavaScript, React, Next.js, Python, web applications, PWAs</p>
                    </div>
                    <div>
                      <p className="font-bold text-[var(--color-text)] mb-1">Infrastructure</p>
                      <p>Linux, Docker, self-hosted infrastructure, networking, reverse proxies, cloud deployment</p>
                    </div>
                    <div>
                      <p className="font-bold text-[var(--color-text)] mb-1">AI &amp; Automation</p>
                      <p>AI integration, workflow automation, OCR, local AI tools, AI-assisted development</p>
                    </div>
                    <div>
                      <p className="font-bold text-[var(--color-text)] mb-1">Engineering &amp; Operations</p>
                      <p>Aerospace maintenance, avionics, electronics diagnostics, technical documentation, quality assurance, program management</p>
                    </div>
                  </div>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.35}>
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-accent)]">
                    Education
                  </h2>
                  <p className="text-[15px] text-[var(--color-text-muted)]">
                    Master of Science in Aeronautical Engineering — Embry-Riddle Aeronautical University
                  </p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-accent)]">
                    Contact
                  </h2>
                  <div className="flex flex-wrap gap-4 text-[14px]">
                    <a href="mailto:contact@stevenkoehl.com" className="text-[var(--color-accent)] hover:underline">
                      contact@stevenkoehl.com
                    </a>
                    <a href="https://www.linkedin.com/in/steven-koehl" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
                      LinkedIn
                    </a>
                    <a href="https://github.com/sleuthy-sloth" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
                      GitHub
                    </a>
                  </div>
                </section>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.45}>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-12 italic">
                The web resume and PDF must stay consistent. The PDF is the authoritative downloadable version. Web content here is a summary; see /experience for detail.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
