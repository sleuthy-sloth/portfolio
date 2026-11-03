import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About — Steven Koehl",
  description:
    "Professional biography of Steven Koehl: Air Force avionics technician, engineer, and software developer transitioning to civilian employment.",
};

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
];

export default function AboutPage() {
  return (
    <>
      <Nav links={primaryNav} resumeHref="/resume" />

      <main className="flex-1" id="main-content">
        <section className="px-6 pt-[calc(var(--nav-height)+64px)] pb-24">
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12 items-start">
            <ScrollReveal>
              <div className="relative aspect-square bg-[var(--color-border)] overflow-hidden max-w-[260px] mx-auto md:mx-0">
                <Image
                  src="/assets/photo.webp"
                  alt="Steven Koehl"
                  fill
                  className="object-cover"
                  sizes="260px"
                />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                  About
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-[clamp(32px,5vw,52px)] font-black tracking-[-1px] mb-8">
                  Professional biography
                </h1>
              </ScrollReveal>

              <div className="space-y-5 text-[17px] leading-relaxed text-[var(--color-text-muted)] max-w-[720px]">
                <ScrollReveal delay={0.15}>
                  <p>
                    I am Steven Koehl, a United States Air Force Technical Sergeant and avionics technician with 18 years of service. My career has spanned circuit-level maintenance, technical program management, quality and deficiency reporting, technical documentation, contract oversight, and instruction.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p>
                    I hold a Master of Science in Aeronautical Engineering from Embry-Riddle Aeronautical University. I am currently serving as Senior AFREP Technician and AI Developmental Lead at Fairchild AFB, while building open-source software through the DoD SkillBridge program ahead of my June 2028 retirement.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.25}>
                  <p>
                    My strongest selling point is the combination of extensive technical experience, aerospace and avionics knowledge, engineering education, leadership, program management, software development, AI integration, and process improvement. I do not present myself as exclusively a junior software developer; I present myself as an experienced technical professional whose software projects demonstrate that those capabilities extend into modern software and infrastructure.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <p>
                    I am preparing to transition into civilian employment across several potential directions: aerospace and defense engineering, technical program management, systems engineering, software development, AI integration and workflow automation, technical operations and process improvement, and engineering support and technical leadership.
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.35}>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[720px]">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-3 pb-2 border-b border-[var(--color-border)]">
                      Career progression
                    </h3>
                    <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                      <li>Avionics technician (circuit-level maintenance, diagnostics, repair)</li>
                      <li>Technical Order distribution and product improvement</li>
                      <li>Product Quality Deficiency Report liaison (JDRS / AFMC)</li>
                      <li>Contracting Officer Representative (COR) oversight</li>
                      <li>Technical instructor (300 hours curriculum, 800+ students)</li>
                      <li>Senior AFREP Technician and AI Developmental Lead</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-3 pb-2 border-b border-[var(--color-border)]">
                      Approach to engineering
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      I work from the problem outward: understand the actual user need or technical limitation, design a solution that fits the constraints, build it, test it against ground truth, and iterate with the people who will use it. I prefer systems that are measurable, maintainable, and honest about their limits.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/experience"
                    className="inline-block border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-5 py-[10px] text-[11px] font-bold uppercase tracking-[2px] hover:bg-[var(--color-accent)] hover:text-white transition-colors"
                  >
                    Experience
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-block border-2 border-[var(--color-border)] text-[var(--color-text-muted)] px-5 py-[10px] text-[11px] font-bold uppercase tracking-[2px] hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-colors"
                  >
                    Projects
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
