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
          className="inline-block text-[13px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors py-2 min-h-[44px] min-w-[44px]"
        >
          Gmail
        </a>
        <a
          href="mailto:steven.koehl@proton.me"
          className="inline-block text-[13px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors py-2 min-h-[44px] min-w-[44px]"
        >
          Proton Mail
        </a>
        <a
          href="https://www.linkedin.com/in/steven-koehl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[13px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors py-2 min-h-[44px] min-w-[44px]"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/sleuthy-sloth"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[13px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors py-2 min-h-[44px] min-w-[44px]"
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
