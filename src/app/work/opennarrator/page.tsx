import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenNarrator Case Study — Steven Koehl",
  description:
    "Open-source audiobook creator. Convert ebooks to chaptered M4B using open-source TTS. No API keys, no cloud services, no vendor lock-in.",
  openGraph: {
    title: "OpenNarrator — Audiobook Creator Case Study",
    description:
      "An open-source audiobook factory. Drop in an ebook, get back a chaptered M4B audiobook. 16 Kokoro TTS voices, web UI, CLI, and GitHub Actions CI.",
  },
};

/**
 * OpenNarrator case study (/work/opennarrator).
 *
 * Open-source audiobook creator — convert ebooks to chaptered M4B
 * using open-source TTS engines. Break the ElevenLabs monopoly.
 */

const navLinks = [
  { href: "/work", label: "Portfolio" },
  { href: "/work#projects", label: "Projects" },
  { href: "/work#skills", label: "Skills" },
  { href: "/work#contact", label: "Contact" },
];

const FEATURES = [
  "Convert EPUB, TXT, and DOCX ebooks to chaptered M4B audiobooks",
  "16 Kokoro TTS voices: American/British English, male/female",
  "Web UI at localhost:8080 — drag-and-drop conversion with voice preview and speed slider",
  "CLI mode for scripting and batch processing",
  "--demo flag: test the full pipeline with a built-in passage, no ebook required",
  "Resume support: pick up where you left off if interrupted",
  "No API keys, no cloud services, no vendor lock-in",
  "Homebrew install for macOS, pip for Linux",
  "GitHub Codespaces devcontainer for one-click cloud conversion",
  "GitHub Actions template repo for automated ebook-to-M4B pipelines",
];

const TECH_STACK = [
  "Python 3.11+",
  "Kokoro TTS (82M parameter, Apache 2.0)",
  "FastAPI + uvicorn",
  "Typer CLI",
  "ebooklib / PyMuPDF / python-docx",
  "ffmpeg",
  "soundfile / numpy",
  "pytest (85 tests)",
  "GitHub Actions CI",
  "Homebrew tap",
];

export default function OpenNarratorPage() {
  return (
    <>
      <Nav links={navLinks} />

      <main className="flex-1" id="main-content">
        {/* ── Hero ── */}
        <section className="bg-[var(--color-bg-alt)] pt-[calc(var(--nav-height)+64px)] pb-16 px-6">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Open Source / Audiobooks
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(36px,6vw,64px)] font-black leading-none tracking-[-2px] mb-6">
                OpenNarrator
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[17px] text-[var(--color-text-muted)] max-w-[600px] leading-relaxed mb-8">
                An open-source audiobook factory. Drop in an ebook, get back a
                chaptered M4B audiobook. No API keys, no cloud services, no
                vendor lock-in. Just open-source TTS and ffmpeg running on your
                own machine.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              {/* Terminal-style code block */}
              <div className="border border-[var(--color-border)] rounded overflow-hidden shadow-lg bg-[#0d1117]">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d]">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="text-xs text-[#8b949e] ml-2 font-mono">
                    terminal
                  </span>
                </div>
                <pre className="p-5 text-sm font-mono text-[#e6edf3] leading-relaxed overflow-x-auto">
                  <span className="text-[#8b949e]"># Install (macOS)</span>
                  {"\n"}
                  <span className="text-[#58a6ff]">$</span> brew tap sleuthy-sloth/tap
                  {"\n"}
                  <span className="text-[#58a6ff]">$</span> brew install opennarrator
                  {"\n\n"}
                  <span className="text-[#8b949e]"># Try it (60 seconds)</span>
                  {"\n"}
                  <span className="text-[#58a6ff]">$</span> opennarrator convert --demo
                  {"\n"}
                  <span className="text-[#8b949e]"># Convert your own ebook</span>
                  {"\n"}
                  <span className="text-[#58a6ff]">$</span> opennarrator convert book.epub --voice af_bella
                  {"\n\n"}
                  <span className="text-[#8b949e]"># Or launch the web UI</span>
                  {"\n"}
                  <span className="text-[#58a6ff]">$</span> on{" "}
                  <span className="text-[#8b949e]">→ http://localhost:8080</span>
                </pre>
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
                  Audiobooks are expensive. A single title on Audible costs
                  $15-30, and that&rsquo;s after a subscription. Services like
                  ElevenLabs can generate audiobooks from text, but they charge
                  per-character and hold your data on their servers. I wanted a
                  tool that runs entirely on my own machine, uses open-source
                  models, and produces professional-grade chaptered M4B files
                  that work in Apple Books, Plex, or any audiobook player.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  OpenNarrator is the result. It takes an ebook (EPUB, TXT, or
                  DOCX), extracts the text and chapter structure, feeds each
                  chapter through the Kokoro TTS engine (82M parameters, Apache
                  2.0 licensed), and packages the result into a properly
                  chaptered M4B file. The whole pipeline runs locally using the
                  Kokoro model, which sounds remarkably natural for its size and
                  is completely free.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  The project ships with 16 voices across American and British
                  English, a web UI for voice preview and drag-and-drop
                  conversion, a CLI for scripting and batch processing, and a
                  GitHub Actions template repo that lets you convert ebooks for
                  free on GitHub&rsquo;s cloud runners. Install via Homebrew,
                  pip, or the Codespaces devcontainer. No API keys needed.
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
                      &mdash;
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
                  href="https://github.com/sleuthy-sloth/opennarrator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[var(--color-accent)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:opacity-85 transition-opacity"
                >
                  Source Code
                </a>
                <a
                  href="https://github.com/marketplace/actions/opennarrator-action"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-[var(--color-text)] text-[var(--color-text)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:bg-[var(--color-text)] hover:text-white transition-colors"
                >
                  GitHub Action
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
