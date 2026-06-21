"use client";

import Link from "next/link";

/**
 * ForkCard — Large card on the landing page that forks users between the
 * Engineering (/work) and Writing (/writing) sections of the site.
 *
 * Hover: accent-colored glow, tags lift, arrow slides right.
 */

interface ForkCardProps {
  href: string;
  identity: "engineering" | "writing";
  label: string;
  title: string;
  description: string;
  tags: string[];
}

export default function ForkCard({
  href,
  identity,
  label,
  title,
  description,
  tags,
}: ForkCardProps) {
  const isWriting = identity === "writing";

  return (
    <Link
      href={href}
      className={`group block rounded-lg border p-12 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 ${
        isWriting
          ? "border-t-4 border-t-[var(--color-gold)] bg-[var(--color-midnight)] text-white/90 border-[var(--color-border)] hover:shadow-[0_8px_32px_rgba(201,162,39,0.15)]"
          : "border-t-4 border-t-[var(--color-accent)] bg-[var(--color-bg)] border-[var(--color-border)] hover:shadow-[0_8px_32px_rgba(230,57,70,0.12)]"
      }`}
    >
      <p
        className={`text-[11px] font-bold uppercase tracking-[3px] mb-4 ${
          isWriting ? "text-[var(--color-gold)]" : "text-[var(--color-accent)]"
        }`}
      >
        {label}
      </p>
      <h2 className="text-[clamp(28px,4vw,40px)] font-black leading-[1.1] mb-5 transition-colors duration-300 group-hover:text-[var(--color-gold)]">
        {title.split("\n").map((line, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {line}
          </span>
        ))}
      </h2>
      <p className="text-[15px] leading-relaxed mb-6 opacity-85">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`border px-[10px] py-[3px] text-[11px] rounded-sm transition-[transform,border-color] duration-300 group-hover:-translate-y-[1px] ${
              isWriting
                ? "bg-white/10 border-white/15 text-white/70 group-hover:border-[var(--color-gold)]/30"
                : "bg-[var(--color-bg-alt)] border-[var(--color-border)] text-[var(--color-text-muted)] group-hover:border-[var(--color-accent)]/20"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <span
        className={`inline-flex items-center gap-1 text-sm font-bold transition-all duration-300 group-hover:gap-2 ${
          isWriting ? "text-[var(--color-gold)]" : "text-[var(--color-accent)]"
        }`}
      >
        Enter
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          &rarr;
        </span>
      </span>
    </Link>
  );
}
