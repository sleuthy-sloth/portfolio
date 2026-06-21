"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex-1 flex items-center justify-center px-6 pt-[calc(var(--nav-height)+48px)] pb-24" id="main-content">
      <div className="max-w-[480px] text-center">
        <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
          Error
        </p>
        <h1 className="text-[clamp(28px,4vw,40px)] font-black leading-none tracking-[-1px] mb-4">
          Something went wrong
        </h1>
        <p className="text-[15px] leading-relaxed text-[var(--color-text-muted)] mb-8">
          An unexpected error occurred. Try again, or go back to the home page.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-block bg-[var(--color-accent)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:opacity-85 transition-opacity"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block border-2 border-[var(--color-text)] text-[var(--color-text)] px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:bg-[var(--color-text)] hover:text-white transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
