import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "92 AMXS Tracker Case Study — Steven Koehl",
  description:
    "Maintenance operations platform for the 92nd Aircraft Maintenance Squadron at Fairchild AFB. Full-stack React, Firebase, AI-powered OCR for AF Forms.",
  openGraph: {
    title: "92 AMXS Tracker — Maintenance Platform Case Study",
    description:
      "A full-stack maintenance management platform replacing paper logbooks and spreadsheets with a real-time digital command center for tracking fleet readiness.",
  },
};

/**
 * 92 AMXS Tracker case study (/work/92-amxs-tracker).
 *
 * Full-stack maintenance management platform for the 92nd Aircraft
 * Maintenance Squadron: replaces paper logbooks with a real-time
 * digital command center.
 */

const navLinks = [
  { href: "/work", label: "Portfolio" },
  { href: "/work#projects", label: "Projects" },
  { href: "/work#skills", label: "Skills" },
  { href: "/work#contact", label: "Contact" },
];

const FEATURES = [
  "16-page single-page application: dashboard, maintenance tracking, personnel, reports, and admin",
  "AI-powered OCR scanning of AF Forms using browser-based computer vision",
  "Role-based access control: technicians, supervisors, and commanders see different views",
  "Real-time maintenance status board replacing the whiteboard in the squadron ops center",
  "Offline PWA support for hangar environments with intermittent connectivity",
  "Automated report generation for weekly status briefings and monthly metrics",
  "Secure Firebase backend with Firestore, Authentication, and Cloud Storage",
];

const TECH_STACK = [
  "React 19",
  "TypeScript",
  "Firebase (Auth, Firestore, Storage)",
  "Tailwind CSS",
  "Tesseract.js (OCR)",
  "PWA / Workbox",
  "Zustand",
  "React Router",
  "Chart.js",
];

export default function AmxsTrackerPage() {
  return (
    <>
      <Nav links={navLinks} />

      <main className="flex-1" id="main-content">
        {/* ── Hero ── */}
        <section className="bg-[var(--color-bg-alt)] pt-[calc(var(--nav-height)+64px)] pb-16 px-6">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                Maintenance Operations / Full-Stack
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(36px,6vw,64px)] font-black leading-none tracking-[-2px] mb-6">
                92 AMXS Tracker
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[17px] text-[var(--color-text-muted)] max-w-[600px] leading-relaxed mb-8">
                A full-stack maintenance management platform built for the 92nd
                Aircraft Maintenance Squadron at Fairchild AFB. Replaces paper
                logbooks and spreadsheets with a real-time digital command
                center for tracking aircraft maintenance, personnel, and
                mission readiness.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              {/* Screenshot */}
              <div className="border border-[var(--color-border)] rounded overflow-hidden shadow-lg">
                <Image
                  src="/assets/92amxs-screenshot.png"
                  alt="92 AMXS Tracker maintenance dashboard"
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
                  Aircraft maintenance squadrons run on paperwork. AFTO Form
                  781s, status boards, TCTO tracking, training records — all
                  of it lives in binders, logbooks, and Excel spreadsheets
                  scattered across different offices. When a commander asks
                  &ldquo;what&rsquo;s the fleet status right now,&rdquo; someone has to walk the
                  flightline and physically check.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  The 92 AMXS Tracker replaces all of that with a single web
                  application. It is a real-time maintenance command center
                  that gives everyone — from technicians on the line to the
                  squadron commander — the same picture of fleet readiness, in
                  the same moment, from any device.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  The app includes AI-powered OCR for scanning paper forms
                  directly into the digital system, role-based dashboards so
                  each user sees only what they need, and full offline support
                  for hangar environments where WiFi is unreliable. It was
                  designed and built in close collaboration with the
                  maintainers who would use it every day.
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
                  href="https://sleuthy-sloth.github.io/92-AMXS-Tracker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-[var(--color-text)] text-[var(--color-text)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:bg-[var(--color-text)] hover:text-white transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/sleuthy-sloth/92-AMXS-Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[var(--color-accent)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:opacity-85 transition-opacity"
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
