import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Steven Koehl",
  description: "Professional contact information for Steven Koehl.",
};

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
];

export default function ContactPage() {
  return (
    <>
      <Nav links={primaryNav} resumeHref="/resume" />

      <main className="flex-1" id="main-content">
        <section className="px-6 pt-[calc(var(--nav-height)+64px)] pb-24">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Contact
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(32px,5vw,52px)] font-black tracking-[-1px] mb-6">
                Let&apos;s talk about what I can bring to your team
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[17px] text-[var(--color-text-muted)] max-w-[640px] leading-relaxed mb-12">
                Open to aerospace and defense engineering, technical program management, systems engineering, software development, AI integration, and technical operations roles.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12">
              <div>
                <ScrollReveal delay={0.2}>
                  <ContactForm />
                </ScrollReveal>
              </div>

              <div>
                <ScrollReveal delay={0.25}>
                  <h2 className="text-xs font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-4 pb-2 border-b border-[var(--color-border)]">
                    Or reach me directly
                  </h2>
                  <div className="space-y-3 text-[14px]">
                    <a
                      href="mailto:spkoehl@gmail.com"
                      className="block text-[var(--color-accent)] hover:underline"
                    >
                      spkoehl@gmail.com
                    </a>
                    <a
                      href="https://www.linkedin.com/in/steven-koehl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[var(--color-accent)] hover:underline"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/sleuthy-sloth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[var(--color-accent)] hover:underline"
                    >
                      GitHub
                    </a>
                    <Link
                      href="/resume"
                      className="block text-[var(--color-accent)] hover:underline"
                    >
                      Resume (PDF)
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
