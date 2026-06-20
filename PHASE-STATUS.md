# Portfolio Rebuild — Session Status & Next Steps

**Date:** June 19, 2026  
**Repo:** [sleuthy-sloth/portfolio](https://github.com/sleuthy-sloth/portfolio)  
**Live:** https://sleuthy-sloth.github.io/portfolio/

---

## Completed: Phase 0 — Diagnose & Fix

### NeuralPulse Deployment
- `neuralpulse.app` is NOT your domain — it belongs to someone else (AI/Web3 blog)
- GitHub Pages deployment was broken due to basePath mismatch (old "BrainSpark" name)
- NeuralPulse GitHub Pages: **disabled** (app needs Vercel server, not static hosting)
- NeuralPulse README updated: removed broken URL, says "Deployment coming soon on Vercel"
- Repo description and homepage URL updated

### Copy Audit (4 repos, all pushed)

| Repo | What Changed |
|------|-------------|
| `sleuthy-sloth/portfolio` | Em dashes removed, AI filler stripped, "Officer"→"TSgt", "8+"→"13" games |
| `sleuthy-sloth/NeuralPulse` | Em dashes→colons, broken URL removed, "entirely"/"easy on the eyes" cut |
| `sleuthy-sloth/92-AMXS-Tracker` | 29 em dashes replaced, "purpose-built"/"full-featured" removed |
| `sleuthy-sloth/sleuthy-sloth` | "Novice coder" line removed, em dashes fixed, game count→13 |

---

## Completed: Phase 1 — Two Identities, One Site

### Live Pages
| URL | Page | Purpose |
|-----|------|---------|
| `/` | Landing | Fork: Software & Engineering vs Writing |
| `/work.html` | Engineering | Full portfolio: About, Projects, Skills, Contact |
| `/writing.html` | Writing | Book cover, synopsis, author bio, agent contact |
| `/excerpt.html` | Excerpt | Chapter 1 "Letting the Palace Fall" ~800 words |

### Design System
- **Engineering:** red accent (#e63946), white/light gray, Inter font
- **Writing:** gold accent (#c9a227), midnight blue (#0d1b2a), Source Serif 4 font
- **Shared:** dark mode toggle, responsive nav, footer with all contact channels
- **Cross-links:** "Writing" link on engineering side, "Engineering" link on writing side

### Content Prepared (staged locally)
- `/tmp/memoria-aeterna-cover.png` — book cover (2.2MB PNG)
- `/tmp/memoria-aeterna-synopsis.txt` — synopsis used on writing page
- `/tmp/memoria-aeterna-author-bio.txt` — author bio used on writing page
- `/tmp/memoria-aeterna-excerpt.txt` — Chapter 1 excerpt used on excerpt page
- PDF: `/tmp/memoria-aeterna-STANDARD.pdf` — full 720-page manuscript

### Repo Metadata
- Description: "Two sides of one life: Software & Engineering and Writing (Memoria Aeterna)..."
- Topics: portfolio, software-developer, usaf, skillbridge, aerospace, typescript, react, open-source

---

## Remaining: Phase 2 — Next.js Migration

### What This Phase Does
Rebuild the site in **Next.js (App Router)** with **TypeScript** and **Tailwind CSS**, matching the NeuralPulse stack. Keep the same information architecture from Phase 1 (landing fork, /work, /writing, /writing/excerpt).

### Key Instructions
1. **Use file-based routing:** App Router with `app/` directory
   - `app/page.tsx` → landing page (fork)
   - `app/work/page.tsx` → engineering portfolio
   - `app/writing/page.tsx` → Memoria Aeterna
   - `app/writing/excerpt/page.tsx` → Chapter 1
2. **Use `next/image`** for all images (headshot, screenshots, book cover)
3. **Organized structure:** `components/`, `app/`, `lib/` directories
4. **Files under 150 lines** where practical — split into components
5. **Migrate content faithfully first** (structure from Phase 1), THEN layer in Phase 3 upgrades
6. **Synchronous code** unless async is strictly necessary
7. **Comment generously** — assume Steven is reading every file

### Migration Order
1. Initialize Next.js project in the portfolio repo (replace static HTML)
2. Build shared layout (nav, footer, theme toggle)
3. Build landing page with fork cards
4. Build /work route with all sections
5. Build /writing route with book content
6. Build /writing/excerpt route with reading typography
7. Get a working baseline, deploy to Vercel, show Steven

### Notes
- Current `next.config.ts` in NeuralPulse is a good reference for Next.js 16 config
- The existing static HTML files and assets should be kept as reference during migration
- GitHub Pages deployment workflow can be removed once Vercel is set up

---

## Remaining: Phase 3 — Visual & Interactive Upgrades

Apply AFTER the Next.js migration baseline works. Roughly in priority order:

1. **Scroll-triggered reveals** — Framer Motion, sections fade/slide in
2. **Animated stat counters** — count up when they enter viewport
3. **Bento-grid layout for Projects** — NeuralPulse + 92-AMXS as large tiles
4. **Dedicated case-study pages** — template first, then real content
5. **Custom color identity & typography** — 2-3 palette directions to choose from
6. **Dark/light mode toggle** — Tailwind dark mode (already a working prototype in Phase 1)
7. **Live GitHub activity widget** — fetch from GitHub API, cache appropriately
8. **Command palette (Cmd+K)** — for /work side specifically
9. **Interactive project card hover states** — looping demo clips if feasible

### Rules
- Implement one at a time, show Steven, get thumbs up, move on
- Flag anything that hurts performance or accessibility before building
- Don't build all nine in one shot

---

## Remaining: Phase 4 — Vercel Deployment

1. Create Vercel project connected to portfolio repo
2. Point `neuralpulse.app` (or new custom domain) at NeuralPulse Vercel deployment
3. Confirm clean build: correct Next.js config, env vars, GitHub API token if needed
4. Walk through attaching custom portfolio domain (Steven will purchase later)
5. Set up automatic deployments from main branch
6. Fix NeuralPulse Vercel deployment (currently only CI builds, no deploy)

### Known State
- ✅ Steven has a Vercel account linked to GitHub
- ✅ NeuralPulse uses default `*.vercel.app` domain (no custom domain for now)
- ✅ Portfolio custom domain: will purchase later
- ✅ Proton email for literary agent contact: `steven.koehl@proton.me`

---

## Key Files & Paths

| File | Location | Notes |
|------|----------|-------|
| Portfolio repo | `/tmp/portfolio/` | Local clone, pushed to GitHub |
| Portfolio live | https://sleuthy-sloth.github.io/portfolio/ | GitHub Pages |
| NeuralPulse repo | `sleuthy-sloth/NeuralPulse` | Next.js 16, 13 games |
| 92-AMXS repo | `sleuthy-sloth/92-AMXS-Tracker` | React 19, Firebase |
| Profile README | `sleuthy-sloth/sleuthy-sloth` | GitHub profile showcase |
| Book PDF | `/tmp/memoria-aeterna-STANDARD.pdf` | 720 pages, 46 chapters |
| Book cover | `/tmp/memoria-aeterna-cover.png` | 2.2MB, midnight/gold palette |
| Book PDF (original) | `~/Downloads/Memoria Aeterna .zip` | Contains STANDARD + PRINT-READY |
| Book cover (original) | `~/Downloads/Memoria Aeterna Cover Final.png` | |

---

## Decisions Made (Don't Revisit)

- **Name:** Steven Koehl (real name used throughout)
- **Rank:** Technical Sergeant (enlisted, not Officer)
- **Education:** M.S. Aeronautical Engineering, Embry-Riddle (confirmed real)
- **AFSC:** 2A974 — avionics technician
- **Retirement:** June 1, 2028
- **SkillBridge:** Active transition program
- **Author name:** "Steven K" (on book cover, writing pages)
- **No em dashes** in any copy — use colons, periods, or restructured sentences
- **13 games** in NeuralPulse (not 8, not 8+)
- **No "novice coder"** label anywhere
- **NeuralPulse domain:** default Vercel subdomain until purchased
- **Portfolio domain:** will purchase later
- **Book contact:** Proton email (`steven.koehl@proton.me`)

---

## For the Next Session

When you resume, tell OpenCode:

> "Continue the portfolio rebuild from Phase 2. The status document is at
> `/tmp/portfolio/PHASE-STATUS.md` in the repo. Start with the Next.js
> migration — initialize the project in the portfolio repo, migrate the
> Phase 1 information architecture to App Router, and stop for review
> once the baseline is working."

Or just say: "Continue Phase 2 of the portfolio rebuild."
