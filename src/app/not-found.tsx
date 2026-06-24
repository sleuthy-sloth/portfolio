import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Steven Koehl",
  description:
    "The page you're looking for doesn't exist or was moved.",
};

export default function NotFound() {
  return (
    <>
      <main className="flex-1" id="main-content">
        <section className="flex min-h-[60vh] items-center justify-center px-6 pt-[calc(var(--nav-height)+48px)] pb-12">
          <div className="max-w-[720px] text-center">
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--color-accent)] mb-5">
              404
            </p>
            <h1 className="text-[clamp(40px,7vw,72px)] font-black leading-none tracking-[-2px] mb-6">
              Page not
              <br />
              found.
            </h1>
            <p className="text-[17px] leading-relaxed text-[var(--color-text-muted)] max-w-[480px] mx-auto mb-10">
              The page you&apos;re looking for doesn&apos;t exist or was
              moved.
            </p>
            <Link
              href="/"
              className="inline-block bg-[var(--color-accent)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:opacity-85 transition-opacity"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
