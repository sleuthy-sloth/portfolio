import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ForkCard from "@/components/ForkCard";

export default function NotFound() {
  return (
    <>
      <Nav />
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
              moved. Pick a direction below.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 md:grid-cols-2 gap-6">
            <ForkCard
              href="/work"
              identity="engineering"
              label="Software & Engineering"
              title="From Flightlines\nTo Code"
              description="Open-source projects, military achievements, and the tech stack I use to build them."
              tags={["TypeScript", "React / Next.js", "Firebase / Supabase"]}
            />
            <ForkCard
              href="/writing"
              identity="writing"
              label="Writing"
              title="Memoria\nAeterna"
              description="A literary historical fiction novel spanning 982 years of Byzantine and Ottoman history."
              tags={["Literary Fiction", "Historical", "First Novel"]}
            />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/"
              className="text-[13px] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              &larr; Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
