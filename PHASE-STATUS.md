# Portfolio Rebuild — Session Status & Next Steps

**Date:** June 20, 2026  
**Repo:** [sleuthy-sloth/portfolio](https://github.com/sleuthy-sloth/portfolio)  
**Live (Vercel):** https://portfolio-two-ochre-vxl9gmenfz.vercel.app  
**Previous (GitHub Pages):** https://sleuthy-sloth.github.io/portfolio/

---

## ✅ Completed: Phase 2 — Next.js Migration

- Next.js 16 (App Router, TypeScript, Tailwind v4, Turbopack)
- 5 routes: `/`, `/work`, `/writing`, `/writing/excerpt`, `/_not-found`
- Shared layout: Nav, Footer, ThemeToggle, RootClient (dark mode)
- Landing page: hero + fork cards (Engineering / Writing)
- `/work`: Hero, About, Projects, Skills, Contact
- `/writing`: Book hero + synopsis, Author bio, Agent/publisher contact
- `/writing/excerpt`: Chapter 1 "Letting the Palace Fall" with reading typography
- Two-identity design: Engineering (red #e63946) + Writing (gold #c9a227)
- Dark mode via data-theme + localStorage, inline script prevents flash
- Deployed to Vercel with auto-deploy on push
- All static prerender, TypeScript clean
- Phase 1 static HTML preserved in `_phase1/` for reference
- GitHub Pages workflow removed (replaced by Vercel)

---

## ✅ Completed: Phase 4 — Vercel Deployment

1. ✅ Vercel project connected to portfolio repo
2. ✅ Clean build confirmed on Vercel (all routes, TypeScript pass)
3. ✅ Auto-deploy from master branch configured
4. Domain: Steven can attach a custom domain later via Vercel dashboard

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

## Key Files & Paths

| File | Location | Notes |
|------|----------|-------|
| Portfolio repo | `/tmp/portfolio/` | Next.js 16, deployed to Vercel |
| Portfolio live | https://portfolio-two-ochre-vxl9gmenfz.vercel.app | Vercel production |
| Portfolio Vercel | https://vercel.com/sleuthy-sloths-projects/portfolio | Auto-deploy from master |
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

When you resume, say:

> "Continue Phase 3 of the portfolio rebuild. The Next.js baseline is live
> at https://portfolio-two-ochre-vxl9gmenfz.vercel.app. Start with the first
> visual upgrade from the plan — scroll-triggered reveals with Framer Motion."

Or just say: "Continue Phase 3 of the portfolio rebuild."
