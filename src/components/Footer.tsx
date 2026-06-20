/**
 * Footer — Shared across all pages.
 *
 * Shows contact links (Gmail, Proton, LinkedIn, GitHub) and copyright.
 * The year is set client-side via a span that gets hydrated.
 */
export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12 px-6 text-center">
      <div className="flex flex-wrap gap-6 justify-center mb-4">
        <a
          href="mailto:spkoehl@gmail.com"
          className="text-[13px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
        >
          Gmail
        </a>
        <a
          href="mailto:steven.koehl@proton.me"
          className="text-[13px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
        >
          Proton Mail
        </a>
        <a
          href="https://www.linkedin.com/in/steven-koehl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/sleuthy-sloth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
        >
          GitHub
        </a>
      </div>
      <p className="text-xs text-[var(--color-text-muted)]">
        &copy; {new Date().getFullYear()} Steven Koehl. All rights reserved.
      </p>
    </footer>
  );
}
