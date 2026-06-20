"use client";

import { useEffect } from "react";

/**
 * RootClient — Client-side wrapper for the root layout.
 *
 * Handles dark mode initialization from localStorage (runs before paint to
 * avoid flash of wrong theme) and provides the client React tree.
 *
 * Next.js 16 requires a client/server split when the root layout needs
 * interactive state (theme) while also exporting metadata (server-only).
 */
export default function RootClient({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Apply saved theme on mount — runs after hydration, but we also have
    // the inline script below that runs before paint.
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  return (
    <>
      {/* Inline script: runs before React hydrates, preventing theme flash */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              } catch(e) {}
            })();
          `,
        }}
      />
      {children}
    </>
  );
}
