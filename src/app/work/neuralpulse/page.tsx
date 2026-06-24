import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuralPulse Case Study — Steven Koehl",
  description:
    "Open-source brain training PWA with 13 games, daily challenges, and stats dashboard. Built with Next.js, TypeScript, Supabase, and Zustand.",
  openGraph: {
    title: "NeuralPulse — Brain Training App Case Study",
    description:
      "An open-source brain training web app. 13 games, daily challenges, stats dashboard. Free and playable in your browser.",
  },
};

/**
 * NeuralPulse case study (/work/neuralpulse).
 *
 * Deep-dive into the open-source brain training app:
 * 13 games, daily challenges, stats dashboard, offline-first PWA.
 */

const navLinks = [
  { href: "/work", label: "Portfolio" },
  { href: "/work#projects", label: "Projects" },
  { href: "/work#skills", label: "Skills" },
  { href: "/work#contact", label: "Contact" },
];

const FEATURES = [
  "13 brain games across memory, attention, speed, and problem-solving categories",
  "Daily challenges (Wordle-style): one new puzzle every day for every player",
  "Stats dashboard with radar charts, calendar heatmap, and performance history",
  "Offline-first PWA: works without internet, syncs when back online",
  "Optional cloud sync via Supabase for cross-device progress",
  "Dark mode, responsive design, and keyboard-accessible gameplay",
];

const TECH_STACK = [
  "Next.js 16 (App Router)",
  "TypeScript",
  "Tailwind CSS v4",
  "Supabase (auth + database)",
  "Zustand (state management)",
  "IndexedDB (offline storage)",
  "Recharts (radar charts)",
  "PWA / Workbox",
  "Vitest + Testing Library",
];

export default function NeuralPulsePage() {
  return (
    <>
      <Nav links={navLinks} />

      <main className="flex-1" id="main-content">
        {/* ── Hero ── */}
        <section className="bg-[var(--color-bg-alt)] pt-[calc(var(--nav-height)+64px)] pb-16 px-6">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Brain Training / Open Source
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(36px,6vw,64px)] font-black leading-none tracking-[-2px] mb-6">
                NeuralPulse
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[17px] text-[var(--color-text-muted)] max-w-[600px] leading-relaxed mb-8">
                An open-source brain training web app. Think Elevate or
                Lumosity, but free and playable in your browser. Built to
                sharpen cognitive skills through daily practice, with a stats
                dashboard that shows your progress over time.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              {/* Screenshot */}
              <div className="border border-[var(--color-border)] rounded overflow-hidden shadow-lg">
                <Image
                  src="/assets/neuralpulse-screenshot.png"
                  alt="NeuralPulse brain training app dashboard and game screens"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                  sizes="(max-width: 900px) 100vw, 900px"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Overview ── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Overview
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-8">
                Why I Built It
              </h2>
            </ScrollReveal>

            <div className="space-y-5 text-[17px] leading-relaxed text-[var(--color-text-muted)]">
              <ScrollReveal delay={0.15}>
                <p>
                  Brain training apps like Elevate and Lumosity charge monthly
                  subscriptions for what is fundamentally a collection of
                  well-designed mini-games with progress tracking. I wanted to
                  see if I could build something comparable — and make it
                  completely free and open source.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  NeuralPulse is the result: 13 brain games that target
                  memory, attention, processing speed, and problem-solving.
                  Each game tracks your scores over time, and a unified stats
                  dashboard shows your cognitive profile across all categories
                  using radar charts and calendar heatmaps.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  The app works offline-first as a Progressive Web App. Your
                  scores are stored locally in IndexedDB, and if you choose to
                  create an account, they sync to Supabase for cross-device
                  access. A daily challenge system (Wordle-style) gives every
                  player the same puzzle each day, creating a shared
                  experience.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="bg-[var(--color-bg-alt)] px-6 py-24">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Capabilities
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-10">
                Features
              </h2>
            </ScrollReveal>

            <ul className="space-y-4">
              {FEATURES.map((feature, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <li className="flex gap-4 text-[17px] text-[var(--color-text-muted)] leading-relaxed">
                    <span className="text-[var(--color-accent)] font-bold mt-0.5 shrink-0">
                      —
                    </span>
                    <span>{feature}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Under the Hood
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-10">
                Tech Stack
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex flex-wrap gap-3">
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-4 py-2 text-sm text-[var(--color-text-muted)] rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Links ── */}
        <section className="bg-[var(--color-bg-alt)] px-6 py-24">
          <div className="mx-auto max-w-[900px] text-center">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Try It
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-10">
                Links
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <a
                  href="https://neuralpulse.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[var(--color-accent)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:opacity-85 transition-opacity"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/sleuthy-sloth/NeuralPulse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-[var(--color-text)] text-[var(--color-text)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:bg-[var(--color-text)] hover:text-white transition-colors"
                >
                  Source Code
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link
                href="/work#projects"
                className="text-[13px] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                &larr; Back to Projects
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
