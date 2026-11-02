import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProject } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} — Case Study`,
    description: project.oneLine,
  };
}

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
];

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return (
      <>
        <Nav links={primaryNav} resumeHref="/resume" />
        <main className="flex-1" id="main-content">
          <section className="px-6 pt-[calc(var(--nav-height)+64px)] pb-24">
            <div className="mx-auto max-w-[900px] text-center">
              <h1 className="text-[clamp(32px,5vw,52px)] font-black tracking-[-1px] mb-6">
                Project not found
              </h1>
              <Link
                href="/projects"
                className="inline-block bg-[var(--color-accent)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px]"
              >
                Back to Projects
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav links={primaryNav} resumeHref="/resume" />

      <main className="flex-1" id="main-content">
        {/* Intro */}
        <section className="bg-[var(--color-bg-alt)] pt-[calc(var(--nav-height)+64px)] pb-16 px-6">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                {project.category}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(36px,6vw,64px)] font-black leading-none tracking-[-2px] mb-4">
                {project.name}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[17px] text-[var(--color-text-muted)] max-w-[720px] leading-relaxed mb-6">
                {project.oneLine}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--color-text-muted)] border border-[var(--color-border)] px-2 py-1">
                  Status: {project.status}
                </span>
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="border border-[var(--color-border)] bg-[var(--color-bg)] px-[10px] py-[3px] text-[11px] text-[var(--color-text-muted)] rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="flex flex-wrap gap-3">
                {project.links.map((l) =>
                  l.external ? (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[var(--color-accent)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:opacity-85 transition-opacity"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="inline-block bg-[var(--color-accent)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:opacity-85 transition-opacity"
                    >
                      {l.label}
                    </Link>
                  ),
                )}
              </div>
            </ScrollReveal>

            {project.screenshot && (
              <ScrollReveal delay={0.3}>
                <div className="mt-10 border border-[var(--color-border)] overflow-hidden">
                  <Image
                    src={project.screenshot.src}
                    alt={project.screenshot.alt}
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                    sizes="(max-width: 900px) 100vw, 900px"
                  />
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>

        {/* Problem */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Problem
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-6">
                What it addresses
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[17px] text-[var(--color-text-muted)] leading-relaxed">
                {project.problem}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Objectives */}
        <section className="bg-[var(--color-bg-alt)] px-6 py-24">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Objectives
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-8">
                What it was intended to accomplish
              </h2>
            </ScrollReveal>
            <ul className="space-y-3">
              {project.objectives.map((o, i) => (
                <ScrollReveal key={o} delay={i * 0.05}>
                  <li className="flex gap-3 text-[17px] text-[var(--color-text-muted)] leading-relaxed">
                    <span className="text-[var(--color-accent)] font-bold shrink-0">&mdash;</span>
                    <span>{o}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        {/* My role */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                My role
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-6">
                What I designed, implemented, tested, and maintained
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[17px] text-[var(--color-text-muted)] leading-relaxed">
                {project.role}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Technical approach */}
        <section className="bg-[var(--color-bg-alt)] px-6 py-24">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Technical approach
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-8">
                Architecture and decisions
              </h2>
            </ScrollReveal>
            <ul className="space-y-3">
              {project.approach.map((a, i) => (
                <ScrollReveal key={a} delay={i * 0.05}>
                  <li className="flex gap-3 text-[17px] text-[var(--color-text-muted)] leading-relaxed">
                    <span className="text-[var(--color-accent)] font-bold shrink-0">&mdash;</span>
                    <span>{a}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Challenges */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Challenges
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-8">
                Meaningful engineering challenges
              </h2>
            </ScrollReveal>
            <div className="space-y-8">
              {project.challenges.map((c, i) => (
                <ScrollReveal key={c.title} delay={i * 0.08}>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{c.title}</h3>
                    <p className="text-[17px] text-[var(--color-text-muted)] leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-[var(--color-bg-alt)] px-6 py-24">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Results
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-8">
                Outcomes
              </h2>
            </ScrollReveal>
            <ul className="space-y-3">
              {project.results.map((r, i) => (
                <ScrollReveal key={r} delay={i * 0.05}>
                  <li className="flex gap-3 text-[17px] text-[var(--color-text-muted)] leading-relaxed">
                    <span className="text-[var(--color-accent)] font-bold shrink-0">&mdash;</span>
                    <span>{r}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Back link */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-[900px] text-center">
            <Link
              href="/projects"
              className="text-[13px] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              &larr; Back to Projects
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
