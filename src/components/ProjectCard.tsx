import Link from "next/link";

/**
 * ProjectCard — Used on the /work page for both software projects and
 * military achievements. Supports optional screenshot image.
 */
interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  /** Optional screenshot — if provided, shows as a 16:10 image above the card */
  screenshot?: { src: string; alt: string };
  /** Optional links (demo, source code, etc.) */
  links?: { href: string; label: string; external?: boolean }[];
}

export default function ProjectCard({
  title,
  category,
  description,
  tags,
  screenshot,
  links,
}: ProjectCardProps) {
  return (
    <article className="border border-[var(--color-border)] border-t-[3px] border-t-[var(--color-accent)] p-7 transition-shadow hover:shadow-md reveal">
      {/* Screenshot */}
      {screenshot && (
        <div className="mx-[-28px] mt-[-28px] mb-5 overflow-hidden border-b border-[var(--color-border)] aspect-[16/10]">
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      )}

      <p className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--color-accent)] mb-[10px]">
        {category}
      </p>
      <h3 className="text-lg font-bold mb-3 leading-tight">{title}</h3>
      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5">
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
        <div className="flex flex-wrap gap-3">
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
