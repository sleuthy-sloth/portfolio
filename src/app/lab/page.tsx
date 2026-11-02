import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lab — Steven Koehl",
  description:
    "Homelab and self-hosted infrastructure: Raspberry Pi, Linux, Docker, Caddy, Cloudflare, Tailscale, and self-hosted services.",
};

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const topics = [
  "Raspberry Pi infrastructure",
  "Linux administration",
  "Docker and container management",
  "Caddy reverse proxy",
  "Cloudflare DNS and hosting",
  "Tailscale and private access",
  "Self-hosted services (media, photos, cloud, feeds, books)",
  "Backup and data management",
  "Security and access control",
  "Monitoring and maintenance",
];

export default function LabPage() {
  return (
    <>
      <Nav links={primaryNav} resumeHref="/resume" />

      <main className="flex-1" id="main-content">
        <section className="px-6 pt-[calc(var(--nav-height)+64px)] pb-24">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
                The Lab
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(32px,5vw,52px)] font-black tracking-[-1px] mb-6">
                Homelab and infrastructure
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[17px] text-[var(--color-text-muted)] leading-relaxed mb-10 max-w-[720px]">
                A secondary showcase of practical infrastructure and systems experience: running and maintaining a self-hosted environment. Focus is on architecture and lessons learned, not a public directory of private services.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="text-xs font-bold uppercase tracking-[2px] text-[var(--color-text)] mb-4 pb-2 border-b border-[var(--color-border)]">
                Topics covered
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {topics.map((t, i) => (
                <ScrollReveal key={t} delay={i * 0.04}>
                  <div className="flex gap-3 text-[15px] text-[var(--color-text-muted)]">
                    <span className="text-[var(--color-accent)] font-bold shrink-0">&mdash;</span>
                    <span>{t}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-6">
                <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">
                  Private IP addresses, internal network diagrams with sensitive details, credentials, authentication bypasses, private administrative URLs, personal data, and vulnerability details are intentionally not published here. The public portfolio and home infrastructure remain independent: if home internet or power fails, the professional website stays online via Cloudflare Pages.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="mt-10">
                <Link
                  href="/"
                  className="text-[13px] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                >
                  &larr; Back to Home
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
