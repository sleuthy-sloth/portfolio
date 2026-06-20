"use client";

import { useState } from "react";
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
 */
interface NavLink {
  href: string;
  label: string;
  /** If true, uses the cross-identity accent color */
  crossAccent?: "writing" | "engineering";
}

export default function Nav({ links }: { links?: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-[var(--color-border)] bg-white/97 dark:bg-[#0d0d0d]/97 backdrop-blur-sm">
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
          <ul className="hidden md:flex gap-8">
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
          </ul>
        )}

        <div className="flex items-center gap-4">
          {/* Hamburger (mobile) */}
          {links && links.length > 0 && (
            <button
              className="flex md:hidden flex-col gap-[5px] p-1"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className="block w-[22px] h-[2px] bg-[var(--color-text)] transition-transform" />
              <span className="block w-[22px] h-[2px] bg-[var(--color-text)] transition-transform" />
              <span className="block w-[22px] h-[2px] bg-[var(--color-text)] transition-transform" />
            </button>
          )}

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-[var(--color-bg)] flex flex-col items-center justify-center gap-10 z-40">
          {links?.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium ${
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
        </div>
      )}
    </nav>
  );
}
