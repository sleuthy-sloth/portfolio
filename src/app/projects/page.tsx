import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/projects" },
  title: "Projects — Steven Koehl",
  description:
    "Software projects, engineering and operational systems, AI and automation work, and open-source contributions by Steven Koehl.",
};

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
];

export default function ProjectsPage() {
  return (
    <>
      <Nav links={primaryNav} resumeHref="/resume" />

      <main className="flex-1" id="main-content">
        <section className="px-6 pt-[calc(var(--nav-height)+64px)] pb-24">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Projects
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(32px,5vw,52px)] font-black tracking-[-1px] mb-6">
                Portfolio index
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[17px] text-[var(--color-text-muted)] max-w-[720px] leading-relaxed mb-12">
                Software projects, engineering and operational systems, AI and automation work, and open-source contributions. Each project has a case study describing the problem, approach, challenges, and results.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 0.06}>
                  <article className="border border-[var(--color-border)] p-7 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--color-accent)]">
                        {p.category}
                      </p>
                      <span className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--color-text-muted)] border border-[var(--color-border)] px-2 py-0.5">
                        {p.status}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-3">{p.name}</h2>
                    <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed mb-5 flex-1">
                      {p.oneLine}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.technologies.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-[10px] py-[3px] text-[11px] text-[var(--color-text-muted)] rounded-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <Link
                        href={`/projects/${p.slug}`}
                        className="inline-block border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-5 py-[10px] text-[11px] font-bold uppercase tracking-[2px] hover:bg-[var(--color-accent)] hover:text-white transition-colors"
                      >
                        Case Study
                      </Link>
                      {p.links.map((l) =>
                        l.external ? (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border-2 border-[var(--color-border)] text-[var(--color-text-muted)] px-5 py-[10px] text-[11px] font-bold uppercase tracking-[2px] hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-colors"
                          >
                            {l.label}
                          </a>
                        ) : null,
                      )}
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
