"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

/**
 * CommandPalette — Cmd+K search/navigation overlay for the /work side.
 *
 * Opens with Cmd+K (Mac) or Ctrl+K (Windows/Linux). Provides quick
 * navigation to pages, page sections, and external links. Arrow keys
 * navigate results, Enter selects, Escape closes.
 */

interface Command {
  id: string;
  label: string;
  /** Short description shown in muted text */
  description?: string;
  /** Icon or emoji */
  icon: string;
  /** Where this command goes */
  href: string;
  /** "page" = Next.js router push, "section" = scroll to anchor, "external" = new tab */
  kind: "page" | "section" | "external";
  /** Keyboard shortcut hint (e.g. "G H") */
  shortcut?: string;
  /** Category for grouping */
  category: string;
}

const COMMANDS: Command[] = [
  // ── Pages ──
  {
    id: "home",
    label: "Home",
    description: "Engineering portfolio and projects",
    icon: "🏠",
    href: "/",
    kind: "page",
    shortcut: "G H",
    category: "Navigate",
  },
  {
    id: "work",
    label: "Portfolio",
    description: "Engineering portfolio and projects",
    icon: "💻",
    href: "/",
    kind: "page",
    shortcut: "G P",
    category: "Navigate",
  },
  {
    id: "writing",
    label: "Writing",
    description: "Memoria Aeterna book showcase",
    icon: "📖",
    href: "/writing",
    kind: "page",
    shortcut: "G W",
    category: "Navigate",
  },
  {
    id: "neuralpulse",
    label: "NeuralPulse Case Study",
    description: "Deep dive into the brain training app",
    icon: "🧠",
    href: "/work/neuralpulse",
    kind: "page",
    category: "Navigate",
  },
  {
    id: "amxs",
    label: "92 AMXS Tracker Case Study",
    description: "Maintenance platform deep dive",
    icon: "🔧",
    href: "/work/92-amxs-tracker",
    kind: "page",
    category: "Navigate",
  },
  {
    id: "now",
    label: "What I'm Doing Now",
    description: "Current projects, learning, and focus",
    icon: "📍",
    href: "/now",
    kind: "page",
    category: "Navigate",
  },

  // ── Sections (scroll to anchor on /work) ──
  {
    id: "about",
    label: "About Me",
    description: "Bio, stats, and GitHub activity",
    icon: "👤",
    href: "/#about",
    kind: "section",
    category: "Jump to Section",
  },
  {
    id: "projects",
    label: "Projects",
    description: "Bento grid of software and military work",
    icon: "🗂️",
    href: "/#projects",
    kind: "section",
    category: "Jump to Section",
  },
  {
    id: "skills",
    label: "Skills & Expertise",
    description: "Tech stack and professional skills",
    icon: "⚡",
    href: "/#skills",
    kind: "section",
    category: "Jump to Section",
  },
  {
    id: "contact",
    label: "Contact",
    description: "Email, LinkedIn, GitHub links",
    icon: "✉️",
    href: "/#contact",
    kind: "section",
    category: "Jump to Section",
  },

  // ── External ──
  {
    id: "github",
    label: "GitHub Profile",
    description: "github.com/sleuthy-sloth",
    icon: "🐙",
    href: "https://github.com/sleuthy-sloth",
    kind: "external",
    shortcut: "G H",
    category: "External",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "linkedin.com/in/steven-koehl",
    icon: "💼",
    href: "https://www.linkedin.com/in/steven-koehl",
    kind: "external",
    category: "External",
  },
  {
    id: "email",
    label: "Send Email",
    description: "spkoehl@gmail.com",
    icon: "📧",
    href: "mailto:spkoehl@gmail.com",
    kind: "external",
    category: "External",
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Filter commands by query
  const filtered = query.trim()
    ? COMMANDS.filter(
        (cmd) =>
          cmd.label.toLowerCase().includes(query.toLowerCase()) ||
          cmd.description?.toLowerCase().includes(query.toLowerCase()) ||
          cmd.category.toLowerCase().includes(query.toLowerCase()),
      )
    : COMMANDS;

  const safeIndex = Math.min(selectedIndex, Math.max(0, filtered.length - 1));

  // Reset selection when query changes
  const handleQueryChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedIndex(0);
  }, []);

  // Keyboard shortcut listener
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Close and reset
  const closePalette = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  // Execute command
  const execute = useCallback(
    (cmd: Command) => {
      closePalette();
      if (cmd.kind === "page") {
        router.push(cmd.href);
      } else if (cmd.kind === "section") {
        // If on /, scroll; otherwise navigate then scroll
        if (window.location.pathname === "/") {
          const el = document.querySelector(cmd.href.split("#")[1] ? `#${cmd.href.split("#")[1]}` : "");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          router.push(cmd.href);
        }
      } else {
        window.open(cmd.href, "_blank", "noopener noreferrer");
      }
    },
    [router, closePalette],
  );

  // Keyboard navigation inside palette
  function handlePaletteKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[safeIndex]) {
        execute(filtered[safeIndex]);
      }
    } else if (e.key === "Escape") {
      closePalette();
    }
  }

  // Group filtered commands by category
  const grouped: Record<string, Command[]> = {};
  for (const cmd of filtered) {
    if (!grouped[cmd.category]) grouped[cmd.category] = [];
    grouped[cmd.category].push(cmd);
  }

  // Flatten for arrow-key navigation while preserving group headers
  let flatIndex = 0;
  const flatMap = new Map<number, Command>();
  for (const cmd of filtered) {
    flatMap.set(flatIndex, cmd);
    flatIndex++;
  }

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm"
        onClick={closePalette}
      />

      {/* Palette */}
      <div
        className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[201] w-full max-w-[560px] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg shadow-2xl overflow-hidden"
        onKeyDown={handlePaletteKeyDown}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--color-border)]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[var(--color-text-muted)] shrink-0"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Search pages, sections, links..."
            className="flex-1 bg-transparent text-[15px] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none"
            spellCheck={false}
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-muted)] bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded">
            esc
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[320px] overflow-y-auto p-2">
          {Object.entries(grouped).map(([category, commands]) => (
            <div key={category}>
              <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[2px] text-[var(--color-text-muted)]">
                {category}
              </p>
              {commands.map((cmd) => {
                const isSelected = flatMap.get(safeIndex)?.id === cmd.id;
                return (
                  <button
                    key={cmd.id}
                    onClick={() => execute(cmd)}
                    onMouseEnter={() => {
                      // Find this command's flat index
                      let idx = 0;
                      for (const c of filtered) {
                        if (c.id === cmd.id) {
                          setSelectedIndex(idx);
                          break;
                        }
                        idx++;
                      }
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-left transition-colors ${
                      isSelected
                        ? "bg-[var(--color-accent)] text-white"
                        : "text-[var(--color-text)] hover:bg-[var(--color-bg-alt)]"
                    }`}
                  >
                    <span className="text-base shrink-0" aria-hidden="true">{cmd.icon}</span>
                    <div className="flex-1 min-w-0">
                      <span
                        className={`text-sm font-medium ${
                          isSelected ? "text-white" : "text-[var(--color-text)]"
                        }`}
                      >
                        {cmd.label}
                      </span>
                      {cmd.description && (
                        <span
                          className={`text-xs ml-2 ${
                            isSelected
                              ? "text-white/70"
                              : "text-[var(--color-text-muted)]"
                          }`}
                        >
                          {cmd.description}
                        </span>
                      )}
                    </div>
                    {cmd.shortcut && (
                      <kbd
                        className={`text-[10px] px-1.5 py-0.5 rounded ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-[var(--color-bg-alt)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                        }`}
                      >
                        {cmd.shortcut}
                      </kbd>
                    )}
                    {cmd.kind === "external" && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={isSelected ? "text-white/60" : "text-[var(--color-text-muted)]"}
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="px-3 py-8 text-center text-sm text-[var(--color-text-muted)]">
              No results for &ldquo;{query}&rdquo;
            </p>
          )}
        </div>

        {/* Footer hint */}
        <div className="flex items-center gap-4 px-4 py-2 border-t border-[var(--color-border)] text-[10px] text-[var(--color-text-muted)]">
          <span>↑↓ Navigate</span>
          <span>↵ Select</span>
          <span>Esc Dismiss</span>
        </div>
      </div>
    </>
  );
}
