import Link from "next/link";

/**
 * ForkCard — Large card on the landing page that forks users between the
 * Engineering (/work) and Writing (/writing) sections of the site.
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
      className={`group block rounded-lg border p-12 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
        isWriting
          ? "border-t-4 border-t-[var(--color-gold)] bg-[var(--color-midnight)] text-white/90 border-[var(--color-border)]"
          : "border-t-4 border-t-[var(--color-accent)] bg-[var(--color-bg)] border-[var(--color-border)]"
      }`}
    >
      <p
        className={`text-[11px] font-bold uppercase tracking-[3px] mb-4 ${
          isWriting ? "text-[var(--color-gold)]" : "text-[var(--color-accent)]"
        }`}
      >
        {label}
      </p>
      <h2 className="text-[clamp(28px,4vw,40px)] font-black leading-[1.1] mb-5">
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
            className={`border px-[10px] py-[3px] text-[11px] rounded-sm ${
              isWriting
                ? "bg-white/10 border-white/15 text-white/70"
                : "bg-[var(--color-bg-alt)] border-[var(--color-border)] text-[var(--color-text-muted)]"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <span
        className={`text-sm font-bold ${
          isWriting ? "text-[var(--color-gold)]" : "text-[var(--color-accent)]"
        }`}
      >
        Enter &rarr;
      </span>
    </Link>
  );
}
