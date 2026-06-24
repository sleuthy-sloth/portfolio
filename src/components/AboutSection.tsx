"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import GitHubActivity from "@/components/GitHubActivity";

const GITHUB_USER = "sleuthy-sloth";

export default function AboutSection() {
  const [chartFailed, setChartFailed] = useState(false);

  return (
    <section id="about" className="bg-[var(--color-bg-alt)]">
      <div className="mx-auto max-w-[1100px] px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Photo + caption */}
          <ScrollReveal>
            <div className="relative aspect-square bg-[var(--color-border)] rounded overflow-hidden w-full max-w-[280px] mx-auto md:mx-0">
              <Image
                src="/assets/photo.png"
                alt="Steven Koehl"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
            <div className="mt-4 text-center md:text-left">
              <p className="text-[11px] font-bold uppercase tracking-[2px] text-[var(--color-text-muted)]">
                Fairchild AFB, WA
              </p>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
              About Me
            </p>

            <div className="space-y-4 text-base text-[var(--color-text-muted)] leading-relaxed mb-8">
              <p>
                USAF Technical Sergeant and avionics technician with 18 years
                of experience in circuit-level maintenance, program
                management, and technical instruction. I have managed $35M in
                assets, recovered $7M in fleet costs through deficiency
                reporting, and trained 800+ students with a 92% pass rate.
              </p>
              <p>
                Currently serving as Senior AFREP Technician and AI
                Developmental Lead at Fairchild AFB, while building
                open-source software through the DoD SkillBridge program
                before my June 2028 retirement. I hold a Master of Science in
                Aeronautical Engineering from Embry-Riddle Aeronautical
                University.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10">
              <div className="flex flex-col gap-1">
                <AnimatedCounter
                  target={18}
                  suffix="+"
                  label="Years Service"
                />
              </div>
              <ScrollReveal>
                <span className="text-[28px] font-black leading-none">
                  M.S.
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[var(--color-text-muted)] mt-1 block">
                  Aero Engineering
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <span className="text-[28px] font-black leading-none">
                  ERAU
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[var(--color-text-muted)] mt-1 block">
                  Embry-Riddle
                </span>
              </ScrollReveal>
            </div>

            {/* GitHub: contribution heatmap + live activity */}
            <ScrollReveal delay={0.2}>
              <div className="mt-8 space-y-6">
                {!chartFailed ? (
                  <div className="border border-[var(--color-border)] rounded-sm overflow-hidden">
                    <Image
                      src={`https://ghchart.rshah.org/${GITHUB_USER}`}
                      alt="GitHub contribution graph"
                      width={800}
                      height={128}
                      className="w-full h-auto"
                      unoptimized
                      onError={() => setChartFailed(true)}
                    />
                  </div>
                ) : (
                  <div className="border border-[var(--color-border)] rounded-sm p-8 text-center">
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Contribution graph unavailable.{" "}
                      <a
                        href={`https://github.com/${GITHUB_USER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-accent)] hover:underline"
                      >
                        View GitHub profile
                      </a>
                      .
                    </p>
                  </div>
                )}
                <GitHubActivity />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
