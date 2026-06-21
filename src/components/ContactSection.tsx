const currentYear = new Date().getFullYear();

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[var(--color-dark-surface)] text-white">
      <div className="mx-auto max-w-[1100px] px-6 py-24 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
          Get In Touch
        </p>
        <h2 className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] mb-8">
          Let&apos;s Connect
        </h2>
        <p className="text-base text-[var(--color-dark-text)] max-w-[480px] mx-auto mb-10 leading-relaxed">
          Open to software development roles and engineering opportunities.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:spkoehl@gmail.com"
            className="inline-block border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:bg-[var(--color-accent)] hover:text-white transition-colors"
          >
            Gmail
          </a>
          <a
            href="mailto:steven.koehl@proton.me"
            className="inline-block border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:bg-[var(--color-accent)] hover:text-white transition-colors"
          >
            Proton Mail
          </a>
          <a
            href="https://www.linkedin.com/in/steven-koehl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[var(--color-dark-border)] text-[var(--color-dark-text)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:border-[var(--color-dark-text)] hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sleuthy-sloth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[var(--color-dark-border)] text-[var(--color-dark-text)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:border-[var(--color-dark-text)] hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Sub-footer inside contact section */}
      <p className="text-center text-xs text-[var(--color-text-muted)] py-5 px-6 border-t border-[var(--color-dark-border)]">
        &copy; {currentYear} Steven Koehl. All rights reserved.
      </p>
    </section>
  );
}
