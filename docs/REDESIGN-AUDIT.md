# Portfolio Redesign — Repository Audit

Date: 2026-11-02
Branch: redesign/cloudflare-portfolio (created from master)
Repo: https://github.com/sleuthy-sloth/portfolio

## 1. Existing Architecture

- Framework: Next.js 16.2.9 (App Router), React 19.2.4, TypeScript 5 (strict)
- Styling: Tailwind CSS v4 via @tailwindcss/postcss, design tokens as CSS custom properties in src/app/globals.css
- Animation: Framer Motion 12.40.0 (sparingly, via ScrollReveal)
- Testing: Vitest 4.1.9 + Testing Library + jsdom (24 tests, smoke + component + contact)
- Lint: ESLint 9 with eslint-config-next
- Hosting: Vercel (auto-deploy from master). Previous GitHub Pages (removed). CI via .github/workflows/ci.yml (lint, test, build on push/PR to master).
- Build output: standard Next.js build (server-capable). NOT currently configured for static export.

### Routes (current)
- `/` — engineering portfolio landing (WorkHero, About, Projects, Skills, Contact, writing footnote)
- `/work` — permanent redirect to `/` (backward compat)
- `/work/neuralpulse` — case study
- `/work/opennarrator` — case study
- `/work/92-amxs-tracker` — case study
- `/writing` — Memoria Aeterna showcase
- `/writing/excerpt` — Chapter 1
- `/now` — now page
- `/_not-found`, error boundary

### Components (src/components)
- Nav, Footer, ThemeToggle, RootClient, WorkHero, AboutSection, ProjectsGrid, ProjectCard, SkillsGrid, ContactSection, ContactForm, ScrollReveal, AnimatedCounter, GitHubActivity, GitHubStars, CommandPalette

### Server-side features (MUST be removed/replaced for static export)
- src/app/actions/contact.ts — "use server" server action using Resend. Requires Next.js server runtime. INCOMPATIBLE with static export. Replace with direct mailto link or hosted form service.
- src/app/opengraph-image.tsx — uses next/og ImageResponse with `runtime = "edge"`. Edge runtime is not available in static export. Must be replaced with a static OG image file.
- src/app/robots.ts and src/app/sitemap.ts — MetadataRoute generators. These are supported in static export as static files (Next.js generates them at build time), so they can remain but URLs must be updated to the final domain.
- `redirect()` in /work/page.tsx — runtime redirect. For static export, use Cloudflare Pages `_redirects` instead, or a client-side redirect. Better: generate a static redirect page or use _redirects.
- @vercel/analytics — Vercel-specific, remove for Cloudflare.
- next/image with default loader — image optimization requires server. Must set `images.unoptimized: true` (or configure a static-compatible loader).

### Client components using browser APIs (fine for static, but some fetch third-party APIs)
- GitHubActivity, GitHubStars — fetch api.github.com at runtime (client-side, fine for static, but adds network dependency; keep but optional).

## 2. Reusable Components

Reusable as-is or with light refactoring:
- Nav (props-driven links; keep but update nav structure per new IA)
- Footer (contact links; keep, refine)
- ThemeToggle (dark/light; keep)
- ScrollReveal (Framer Motion; keep, restrain usage)
- ProjectCard (featured/standard variants; keep, refine visuals per Unslop)
- AnimatedCounter (keep)
- CommandPalette (keep, update command list for new routes)

Components to replace / rewrite:
- WorkHero → new Hero for homepage (professional positioning, portrait, resume/GitHub/LinkedIn actions, transition status)
- AboutSection → split into About page + homepage About teaser + Professional Snapshot
- ProjectsGrid → new Projects index + Selected Projects homepage section (different layouts per project)
- SkillsGrid → Technical Capabilities grouped by discipline
- ContactSection/ContactForm → contact page with direct email link (remove server action) + optional hosted form
- GitHubActivity/GitHubStars — keep but de-emphasize (not primary)

Components to remove:
- RootClient inline theme script is fine; keep.
- @vercel/analytics import in layout.tsx — remove.

## 3. Components to Remove (accounting)

- src/app/actions/contact.ts (server action) — replace contact with mailto + optional hosted form.
- src/app/opengraph-image.tsx (edge runtime) — replace with static OG image in public/.
- `redirect()`-based /work route — replace with Cloudflare `_redirects` or static page.
- Vercel analytics dependency.
- `now` route — not in new IA. Decision: keep as secondary (footer link) or remove. Brief doesn't list /now. Recommendation: keep route but remove from primary nav; low priority. Flag in CONTENT-QUESTIONS.

## 4. Content Needing Verification (all metrics/claims)

From existing content (must verify against approved source material before publishing):
- 18+ years Air Force service (enlisted May 20, 2008) — verified via memory.
- $35M in assets managed — needs verification.
- $7M fleet costs recovered via deficiency reporting (140 PQDRs) — needs verification.
- 800+ students trained, 92% pass rate — needs verification.
- 300 hours instructional material — needs verification.
- $2M service contract, 100% PWS adherence — needs verification.
- 5,000-item Technical Order library, 98% audit accuracy — needs verification.
- M.S. Aeronautical Engineering, Embry-Riddle — verified (memory).
- TSgt rank, AFSC 2A974 — verified (memory).
- Retirement June 1, 2028, SkillBridge active — verified (memory).
- Memoria Aeterna: 720 pages, 46 chapters, 982 years span — from existing content; verify manuscript facts.
- NeuralPulse: 13 games — verified via README.
- OpenNarrator: 85 tests, 16 voices — from README; verify.
- 92 AMXS Tracker: v0.9.0, 16 pages — from README; verify.
- Clivus: not yet mentioned on site; new project. Status in development. Verify before featuring.

Email addresses: spkoehl@gmail.com (personal) and steven.koehl@proton.me (book contact). Brief says avoid multiple personal email addresses; use custom-domain email when domain finalized. Flag in CONTENT-QUESTIONS.

LinkedIn URL: https://www.linkedin.com/in/steven-koehl (verify exists).

## 5. Missing Images and Assets

Available:
- /assets/photo.png (1.3MB — optimize)
- /assets/neuralpulse-screenshot.png (16K)
- /assets/92amxs-screenshot.png (112K)
- /assets/memoria-aeterna-cover.png (2.2MB — optimize)
- /assets/cv.pdf (90K) — resume; rename to Steven-Koehl-Resume.pdf
- favicon (inline SVG data URI)
- PWA icons (SVG)

Missing / needed:
- Clivus screenshots (none in portfolio assets) — need from repo or capture.
- VerbaLibera screenshots — need (repo has docs/screenshots).
- OpenNarrator screenshots — need (none currently; terminal mockup exists in case study).
- Professional portrait (current photo.png is the only one; verify quality/appropriateness).
- OG social image (currently generated via edge runtime; replace with static file).
- Architecture diagrams for /lab and project case studies.
- Resume PDF web-readable version + PDF consistency check.

## 6. Deployment Changes Required

- Configure Next.js static export: `output: "export"` in next.config.ts.
- Remove server-only features: contact server action, edge OG image, runtime redirect, Vercel analytics.
- Set `images.unoptimized: true` (or compatible loader) for next/image.
- Add Cloudflare Pages `_redirects` for /work → / and any legacy routes.
- Add `_headers` if needed (cache, security).
- Custom 404: Next.js static export generates 404.html automatically from not-found.tsx; ensure it's styled.
- Update SITE_URL / metadataBase to final domain (TBD; use placeholder or current Vercel URL until domain chosen; flag).
- Remove Vercel analytics.
- robots.ts / sitemap.ts: update baseUrl.
- CI: update workflow to build with static export; optionally add Cloudflare Pages preview. Keep lint+test+build.
- GitHub Pages assumptions: already removed (per PHASE-STATUS). Confirm no gh-pages workflow files remain (none found in .github/workflows — only ci.yml).

## 7. Potential Technical Problems

1. Contact form relies on server action + Resend. Incompatible with static export. Must replace.
2. opengraph-image.tsx uses edge runtime. Incompatible. Replace with static image.
3. `/work` uses `redirect()` (server). Incompatible. Use _redirects or static redirect page.
4. `images.formats` (avif/webp) with default loader requires server optimization. With unoptimized, formats hint is ignored; images served as-is. Ensure source images are reasonably sized/optimized manually.
5. GitHubActivity/GitHubStars fetch unauthenticated GitHub API at runtime — fine for static but rate-limited and adds third-party dependency. Keep but make resilient (already has fallbacks). Consider removing from primary pages per "minimal third-party scripts".
6. Large images: photo.png 1.3MB, memoria-aeterna-cover.png 2.2MB. Optimize before production.
7. Dark mode is class/data-attribute based via localStorage + inline script — works in static export. Keep.
8. `@vercel/analytics` — remove.
9. next/font/google loads fonts from Google at build time (self-hosted by Next.js) — fine for static export, but brief prefers locally hosted fonts. Consider downloading Inter/Source Serif 4/IBM Plex Mono to public/fonts for full local hosting. Flag as optional.
10. CommandPalette and other client components use useRouter from next/navigation — works in static export (client-side routing). Fine.
11. Sitemap includes `/work/neuralpulse` etc. (old routes). Update to new `/projects/[slug]` routes.
12. Tests reference old routes/pages (HomePage, WritingPage, ExcerptPage, NeuralPulsePage, AmxsTrackerPage, NowPage, NotFound). These tests will break as pages are renamed/moved. Tests must be updated alongside implementation (not a blocker, but track).
13. Clivus is C++/Qt (not web) — case study will be documentation-heavy with screenshots; no live demo. Accurate status required.
14. VerbaLibera is a separate substantial app; portfolio should link out, not embed.

## 8. Summary of Current State

- Site is live on Vercel, engineering-first landing, writing demoted to footnote (but still present).
- Two-identity design (red engineering, gold writing) — brief wants single professional identity with writing as secondary (midnight/gold/serif) — compatible.
- Content is rich and mostly verified (metrics need confirmation).
- No /about, /experience, /projects, /resume, /contact, /lab routes yet — all must be created.
- Resume exists as cv.pdf (90K) — rename + ensure web/PDF consistency.
- Static export not configured — required for Cloudflare Pages.
