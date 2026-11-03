"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

/**
 * Nav — Fixed top navigation bar, shared across all pages.
 *
 * Shows different links depending on which "side" of the site we're on:
 * - Engineering (/work): About, Projects, Skills, Contact + Writing cross-link
 * - Writing (/writing, /writing/excerpt): Synopsis, Excerpt, About, Contact + Engineering cross-link
 * - Landing (/): just name + theme toggle
 *
 * Mobile: hamburger menu with fullscreen overlay.
 *
 * The overlay must be a SIBLING of <nav>, never a child: the nav uses
 * backdrop-blur-sm, and backdrop-filter establishes a containing block for
 * position:fixed descendants. Nested inside, the overlay would be sized to the
 * 64px header instead of the viewport and its links would spill out unstyled.
 */
interface NavLink {
  href: string;
  label: string;
  /** If true, uses the cross-identity accent color */
  crossAccent?: "writing" | "engineering";
}

interface NavProps {
  links?: NavLink[];
  resumeHref?: string;
}
export default function Nav({ links, resumeHref }: NavProps) {
  const [open, setOpen] = useState(false);

  // Lock background scroll and close on Escape while the menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-[var(--color-border)] bg-[var(--color-bg)]/97 backdrop-blur-sm">
        <div className="mx-auto flex h-full max-w-[1100px] items-center justify-between px-6">
          {/* Name — returns to landing */}
          <Link
            href="/"
            className="text-[15px] font-bold tracking-[0.5px] text-[var(--color-text)]"
            onClick={() => setOpen(false)}
          >
            Steven Koehl
          </Link>

          {/* Desktop nav links */}
          {links && links.length > 0 && (
            <ul className="hidden md:flex gap-8 items-center">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[13px] font-medium uppercase tracking-[1px] transition-colors ${
                      link.crossAccent === "writing"
                        ? "text-[var(--color-gold)] hover:text-[var(--color-gold-light)]"
                        : link.crossAccent === "engineering"
                          ? "text-[var(--color-accent)] hover:opacity-80"
                          : "text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {resumeHref && (
                <li>
                  <Link
                    href={resumeHref}
                    className="inline-block bg-[var(--color-accent)] text-white px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] hover:opacity-85 transition-opacity"
                  >
                    Resume
                  </Link>
                </li>
              )}
            </ul>
          )}

          <div className="flex items-center gap-4">
            {/* Hamburger (mobile) */}
            {links && links.length > 0 && (
              <button
                className="flex md:hidden flex-col items-center justify-center gap-[5px] p-2 min-w-[44px] min-h-[44px]"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                <span
                  className={`block w-[22px] h-[2px] bg-[var(--color-text)] transition-transform duration-300 ${
                    open ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block w-[22px] h-[2px] bg-[var(--color-text)] transition-opacity duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-[22px] h-[2px] bg-[var(--color-text)] transition-transform duration-300 ${
                    open ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </button>
            )}

            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile overlay — sibling of <nav> so fixed positioning resolves
          against the viewport, not the blurred header. */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="md:hidden fixed inset-0 top-16 z-40 overflow-y-auto bg-[var(--color-bg)]"
        >
          <div className="flex min-h-full flex-col items-center justify-center gap-8 px-6 py-10 pb-[max(env(safe-area-inset-bottom),2rem)]">
            {links?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block w-full text-center py-3 text-lg font-medium ${
                  link.crossAccent === "writing"
                    ? "text-[var(--color-gold)]"
                    : link.crossAccent === "engineering"
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text)]"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {resumeHref && (
              <Link
                href={resumeHref}
                className="mt-2 inline-block bg-[var(--color-accent)] text-white px-7 py-3 text-xs font-bold uppercase tracking-[2px]"
                onClick={() => setOpen(false)}
              >
                Resume
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
