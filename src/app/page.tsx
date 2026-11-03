import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { featuredProjects } from "@/content/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Steven Koehl — Engineering Complex Systems. Building Practical Solutions.",
  description:
    "Steven Koehl. 18 years of Air Force technical experience in aerospace maintenance, technical operations, leadership, and process improvement — extended into software engineering, AI integration, and open-source development.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Steven Koehl — Technical Leadership. Engineering Experience. Software That Solves Problems.",
    description:
      "Experienced technical professional transitioning from the U.S. Air Force into engineering, software development, and systems improvement.",
    images: ["/assets/photo-og.jpg"],
  },
};

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
];

const capabilities = [
  {
    group: "Engineering",
    items: ["Aerospace systems", "Avionics", "Electronics diagnostics", "Systems engineering", "Maintenance and reliability", "Technical documentation", "Quality assurance"],
  },
  {
    group: "Software Development",
    items: ["Python", "TypeScript", "JavaScript", "React", "Next.js", "C++", "Application architecture"],
  },
  {
    group: "Infrastructure & Systems",
    items: ["Linux", "Docker", "Networking", "Cloud deployment", "Self-hosted infrastructure", "Systems administration"],
  },
  {
    group: "Leadership & Operations",
    items: ["Technical program management", "Contract oversight", "Resource management", "Process improvement", "Workforce development", "Training and quality management"],
  },
];

export default function HomePage() {
  const selected = featuredProjects.slice(0, 4);

  return (
    <>
      <Nav links={primaryNav} resumeHref="/resume" />

      <main className="flex-1" id="main-content">
        {/* Hero */}
        <section className="px-6 pt-[calc(var(--nav-height)+64px)] pb-20">
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-[1fr_260px] gap-12 items-center">
            <div>
              <ScrollReveal>
                <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                  Engineering Complex Systems. Building Practical Solutions.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-[clamp(40px,7vw,76px)] font-black leading-[0.95] tracking-[-2px] mb-6">
                  Steven Koehl
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="w-12 h-1 bg-[var(--color-accent)] mb-6" />
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-[17px] text-[var(--color-text-muted)] max-w-[560px] leading-relaxed mb-4">
                  I&apos;m an aerospace engineering professional and software developer with 18 years of experience in technical operations, systems management, and engineering leadership. My background combines hands-on technical experience, engineering education, organizational leadership, and independent software development. I specialize in solving complex technical problems, improving operational processes, and building practical solutions.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p className="text-[13px] font-bold uppercase tracking-[2px] text-[var(--color-text-muted)] mb-10">
                  U.S. Air Force Technical Sergeant &middot; M.S. Aeronautical Engineering &middot; Engineering &amp; Technical Leadership (primary) &middot; Software &amp; Emerging Technology (secondary)
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/resume"
                    className="inline-block bg-[var(--color-accent)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:opacity-85 transition-opacity"
                  >
                    Download Resume
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-block border-2 border-[var(--color-text)] text-[var(--color-text)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-colors"
                  >
                    View Projects
                  </Link>
                  <a
                    href="https://github.com/sleuthy-sloth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-[var(--color-border)] text-[var(--color-text-muted)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/steven-koehl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-[var(--color-border)] text-[var(--color-text-muted)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Portrait */}
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[4/5] bg-[var(--color-border)] overflow-hidden max-w-[260px] mx-auto md:mx-0 md:ml-auto">
                <Image
                  src="/assets/photo.webp"
                  alt="Steven Koehl, professional portrait"
                  fill
                  className="object-cover"
                  sizes="260px"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Professional snapshot */}
        <section className="bg-[var(--color-bg-alt)] border-y border-[var(--color-border)]">
          <div className="mx-auto max-w-[1100px] px-6 py-16">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-8">
                Professional Snapshot
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "18+", label: "Years of Service" },
                { value: "$35M", label: "Assets Managed" },
                { value: "$7M", label: "Fleet Costs Recovered" },
                { value: "800+", label: "Students Trained" },
              ].map((m, i) => (
                <ScrollReveal key={m.label} delay={i * 0.08}>
                  <div>
                    <p className="text-[clamp(28px,4vw,40px)] font-black leading-none text-[var(--color-text)]">
                      {m.value}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[var(--color-text-muted)] mt-2">
                      {m.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={0.4}>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-6 italic">
                Figures reflect documented responsibilities; verification notes in docs/CONTENT-QUESTIONS.md.
              </p>
            </ScrollReveal>
          </div>
        </section>


        {/* Selected professional achievements */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Selected Professional Achievements
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-12">
                Measurable outcomes in demanding environments
              </h2>
            </ScrollReveal>

            <div className="space-y-10">
              {[
                {
                  title: "$35M equipment and asset management responsibility",
                  body: "Orchestrated a tri-functional management strategy synchronizing Technical Order distribution, product improvement, and contract oversight for a $35M fleet. Managed a 5,000-item Technical Order library with 98% audit accuracy and oversaw a $2M service contract with 100% Performance Work Statement adherence.",
                },
                {
                  title: "$7M in recovered fleet costs",
                  body: "Served as primary liaison to Air Force Materiel Command for the Joint Deficiency Reporting System. Investigated and submitted 140 Product Quality Deficiency Reports, directly recovering $7M in costs and driving fleet-wide safety modifications across multiple aircraft systems.",
                },
                {
                  title: "800+ students trained at 92% pass rate",
                  body: "Authored and delivered 300 hours of instructional material on complex electronics, micro-miniature soldering, and component-level diagnostics. Trained 800+ students annually, maintaining a 92% pass rate and zero lab safety mishaps.",
                },
                {
                  title: "AI developmental lead for maintenance workflows",
                  body: "Leading Fairchild AFB's exploration of AI tools for aerospace maintenance workflows, focused on improving mission capability rates and reducing downtime on non-mission-capable assets.",
                },
              ].map((a, i) => (
                <ScrollReveal key={a.title} delay={i * 0.06}>
                  <article className="border-l-2 border-[var(--color-accent)] pl-6">
                    <h3 className="text-lg font-bold mb-2">{a.title}</h3>
                    <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                      {a.body}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        {/* Selected projects */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Selected Work
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-12">
                Projects
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selected.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 0.08}>
                  <article className="border border-[var(--color-border)] p-7 flex flex-col h-full">
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--color-accent)] mb-2">
                      {p.category}
                    </p>
                    <h3 className="text-xl font-bold mb-3">{p.name}</h3>
                    <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed mb-5 flex-1">
                      {p.oneLine}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.technologies.slice(0, 4).map((t) => (
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
                      {p.links.find((l) => l.external) && (
                        <a
                          href={p.links.find((l) => l.external)!.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block border-2 border-[var(--color-border)] text-[var(--color-text-muted)] px-5 py-[10px] text-[11px] font-bold uppercase tracking-[2px] hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-colors"
                        >
                          {p.links.find((l) => l.external)!.label}
                        </a>
                      )}
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="mt-10">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[1.5px] text-[var(--color-accent)] hover:opacity-80 transition-opacity"
                >
                  View all projects &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Professional experience overview */}
        <section className="bg-[var(--color-bg-alt)] border-y border-[var(--color-border)] px-6 py-24">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Experience
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-6">
                Experience built in demanding technical environments
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[17px] text-[var(--color-text-muted)] max-w-[720px] leading-relaxed mb-10">
                Eighteen years of Air Force service across aerospace maintenance, circuit-level diagnostics, technical program management, quality and deficiency reporting, technical documentation, contract oversight, and instruction. Translated into the language civilian employers use.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Aerospace avionics maintenance and circuit-level repair",
                "Technical program management and contract oversight",
                "Quality and deficiency reporting (JDRS / AFMC liaison)",
                "Technical documentation management (5,000+ item TO library)",
                "Technical training and curriculum design (800+ students)",
                "Leadership, process improvement, and AI integration initiatives",
              ].map((item, i) => (
                <ScrollReveal key={item} delay={i * 0.05}>
                  <div className="flex gap-3 text-[15px] text-[var(--color-text-muted)]">
                    <span className="text-[var(--color-accent)] font-bold shrink-0">&mdash;</span>
                    <span>{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={0.4}>
              <div className="mt-10">
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[1.5px] text-[var(--color-accent)] hover:opacity-80 transition-opacity"
                >
                  Full experience &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Technical capabilities */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Capabilities
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-12">
                Technical Capabilities
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {capabilities.map((g, i) => (
                <ScrollReveal key={g.group} delay={i * 0.08}>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-4 pb-3 border-b-2 border-[var(--color-accent)]">
                      {g.group}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {g.items.map((item) => (
                        <li key={item} className="text-sm text-[var(--color-text-muted)]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-[var(--color-bg-alt)] border-y border-[var(--color-border)] px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Education
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-4">
                Master of Science in Aeronautical Engineering
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[17px] text-[var(--color-text-muted)]">
                Embry-Riddle Aeronautical University
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* About teaser */}
        <section className="px-6 py-24">
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
                <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-6">
                  An experienced technical professional who builds solutions
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="text-[17px] text-[var(--color-text-muted)] leading-relaxed mb-6 max-w-[640px]">
                  I spent 18 years diagnosing complex systems, managing technical programs, training people, and improving operations. My software projects extend those capabilities into modern software and infrastructure. I am preparing to transition from military service into civilian engineering and software roles.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[1.5px] text-[var(--color-accent)] hover:opacity-80 transition-opacity"
                >
                  More about me &rarr;
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-[var(--color-dark-surface)] text-[var(--color-dark-text)] px-6 py-24">
          <div className="mx-auto max-w-[1100px] text-center">
            <ScrollReveal>
              <h2 className="text-[clamp(28px,4vw,44px)] font-black tracking-[-1px] text-white mb-6">
                Let&apos;s talk about what I can bring to your team
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base max-w-[520px] mx-auto mb-10 leading-relaxed">
                Open to aerospace and defense engineering, technical program management, systems engineering, software development, AI integration, and technical operations roles.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-[var(--color-accent)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:opacity-85 transition-opacity"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/resume"
                  className="inline-block border-2 border-[var(--color-dark-border)] text-[var(--color-dark-text)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:border-[var(--color-dark-text)] hover:text-white transition-colors"
                >
                  Download Resume
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
