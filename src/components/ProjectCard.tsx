import Link from "next/link";

/**
 * ProjectCard — Used on the /work page for both featured software projects
 * and military achievements. Supports bento-grid layout via `variant`.
 *
 * - "featured": Large tile with screenshot, spans 2 columns in bento grid
 * - "standard": Compact tile, no screenshot, spans 1 column
 */

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  /** Optional screenshot — shown on featured cards as a 16:10 image */
  screenshot?: { src: string; alt: string };
  /** Optional links (demo, source code, etc.) */
  links?: { href: string; label: string; external?: boolean }[];
  /** Bento grid variant: "featured" (large) or "standard" (compact) */
  variant?: "featured" | "standard";
}

export default function ProjectCard({
  title,
  category,
  description,
  tags,
  screenshot,
  links,
  variant = "standard",
}: ProjectCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`border border-[var(--color-border)] border-t-[3px] p-7 transition-shadow hover:shadow-md flex flex-col ${
        isFeatured
          ? "border-t-[var(--color-accent)] md:col-span-2"
          : "border-t-[var(--color-text)] col-span-1"
      }`}
    >
      {/* Screenshot — featured cards only */}
      {isFeatured && screenshot && (
        <div className="mx-[-28px] mt-[-28px] mb-5 overflow-hidden border-b border-[var(--color-border)] aspect-[16/10]">
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      )}

      <p className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--color-accent)] mb-[10px]">
        {category}
      </p>
      <h3
        className={`font-bold mb-3 leading-tight ${
          isFeatured ? "text-xl" : "text-lg"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-[var(--color-text-muted)] leading-relaxed mb-5 flex-1 ${
          isFeatured ? "text-[15px]" : "text-sm"
        }`}
      >
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-[10px] py-[3px] text-[11px] text-[var(--color-text-muted)] rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-auto">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[var(--color-text)] text-[var(--color-text)] px-5 py-[10px] text-[11px] font-bold uppercase tracking-[2px] hover:bg-[var(--color-text)] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="inline-block border-2 border-[var(--color-text)] text-[var(--color-text)] px-5 py-[10px] text-[11px] font-bold uppercase tracking-[2px] hover:bg-[var(--color-text)] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      )}
    </article>
  );
}
