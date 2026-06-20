import Link from "next/link";

/**
 * ProjectCard — Used on the /work page for both featured software projects
 * and military achievements. Supports bento-grid layout via `variant`.
 *
 * - "featured": Large tile with screenshot, spans 2 columns in bento grid
 * - "standard": Compact tile, no screenshot, spans 1 column
 *
 * Hover: accent border glow, screenshot zoom, tags lift, link color shift.
 */

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  screenshot?: { src: string; alt: string };
  links?: { href: string; label: string; external?: boolean }[];
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
      className={`group border border-[var(--color-border)] border-t-[3px] p-7 flex flex-col transition-all duration-300 ${
        isFeatured
          ? "border-t-[var(--color-accent)] md:col-span-2 hover:shadow-[0_0_24px_rgba(230,57,70,0.12)]"
          : "border-t-[var(--color-text)] col-span-1 hover:border-t-[var(--color-accent)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      }`}
    >
      {/* Screenshot — featured only, zooms on card hover */}
      {isFeatured && screenshot && (
        <div className="mx-[-28px] mt-[-28px] mb-5 overflow-hidden border-b border-[var(--color-border)] aspect-[16/10]">
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      )}

      {/* Category — shifts opacity on hover */}
      <p className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--color-accent)] mb-[10px] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        {category}
      </p>

      <h3
        className={`font-bold mb-3 leading-tight transition-colors duration-300 group-hover:text-[var(--color-accent)] ${
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

      {/* Tags — lift and change border on hover */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-[10px] py-[3px] text-[11px] text-[var(--color-text-muted)] rounded-sm transition-all duration-300 group-hover:border-[var(--color-accent)]/20 group-hover:-translate-y-[1px]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links — first link (Case Study) gets accent treatment on hover */}
      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-auto">
          {links.map((link, i) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block border-2 px-5 py-[10px] text-[11px] font-bold uppercase tracking-[2px] transition-all duration-300 ${
                  i === 0 && isFeatured
                    ? "border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
                    : "border-[var(--color-text)] text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-block border-2 px-5 py-[10px] text-[11px] font-bold uppercase tracking-[2px] transition-all duration-300 ${
                  i === 0 && isFeatured
                    ? "border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
                    : "border-[var(--color-text)] text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-white"
                }`}
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
