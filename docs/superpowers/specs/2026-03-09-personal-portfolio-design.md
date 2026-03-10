# Personal Portfolio Website — Design Spec

**Date:** 2026-03-09
**Status:** Approved

---

## Overview

A professional single-page portfolio website for an active USAF officer with an M.S. in Aeronautical Engineering (Space Studies focus) from Embry-Riddle Aeronautical University. The site is engineering-first, with military service as supporting context. Target audience spans aerospace industry, defense contractors, space sector companies, and academic institutions.

---

## Goals

- Establish a professional online presence for career opportunities
- Showcase engineering projects and technical expertise
- Convey credibility through military service and academic background
- Be easy to update as new projects and content are added

---

## Architecture

**Tech stack:** Pure HTML/CSS/JS — no framework, no build step, no dependencies.

**File structure:**
```
personal-website/
├── index.html        # Single page, all sections
├── style.css         # All styles
├── script.js         # Smooth scroll, mobile nav toggle
├── assets/
│   ├── photo.jpg     # Profile photo (placeholder initially)
│   └── cv.pdf        # Downloadable CV (placeholder initially)
└── docs/
    └── superpowers/specs/
```

**Hosting:** GitHub Pages or Netlify — static deploy, no server needed.

---

## Visual System

| Property | Value |
|---|---|
| Background | `#ffffff` white |
| Primary text | `#111111` near-black |
| Accent | `#e63946` bold red |
| Secondary text | `#555555` gray |
| Section backgrounds | alternating `#ffffff` / `#f8f8f8` |
| Contact section bg | `#111111` dark |

**Typography:** Inter (Google Fonts)
- Headings: weight 900, tight letter-spacing
- Section labels: 10px, weight 700, all-caps, 2-3px letter-spacing, accent red
- Body: weight 400, 1.6–1.7 line-height

**Design language:** Bold Minimal — heavy typographic hierarchy, generous whitespace, red accent used sparingly for maximum impact.

---

## Sections

### 1. Navigation
- Sticky top bar, white background, subtle bottom border
- Name/rank on left
- Section links on right: About · Projects · Skills · Contact
- Mobile: hamburger menu, full-screen overlay
- Smooth scroll to sections on link click

### 2. Hero
- Full-viewport-height section
- All-caps label: `AERONAUTICAL ENGINEER · USAF OFFICER`
- Bold tagline (two lines): e.g. `Space Systems. / Mission Ready.`
- 3px red horizontal divider, 40px wide
- 2-sentence bio snippet
- Two CTAs:
  - **See My Work** (primary, red filled) — smooth scrolls to Projects
  - **Download CV** (secondary, black outline) — links to `assets/cv.pdf`

### 3. About
- Light gray background
- Photo (square, slight border-radius) on left
- Bio paragraph on right (3–4 sentences)
- Three stat callouts below bio: Years of Service · M.S. Degree · Institution

### 4. Projects
- White background
- Section label + heading
- 2-column card grid (1-column on mobile)
- Each card:
  - Category tag (e.g. SPACE SYSTEMS, RESEARCH)
  - Red top border on featured projects, black on secondary
  - Project title (bold)
  - Short description (2–3 sentences)
  - Tech tag pills (gray background)
- Placeholder cards included until real content is added

### 5. Skills
- Light gray background
- 3-column layout: **Engineering** · **Software & Tools** · **Leadership**
- Simple list format under each column header
- No progress bars or percentages — clean list is more credible

### 6. Contact
- Dark (`#111`) background — visual anchor at bottom of page
- Red accent label, bold white heading, gray subline
- Three link buttons: **Email Me** · **LinkedIn** · **GitHub**
- All links open appropriately (mailto:, new tab for LinkedIn/GitHub)
- No form, no backend required

---

## Responsiveness

- Mobile-first CSS
- Breakpoints: 768px (tablet), 480px (mobile)
- Projects grid: 2-col → 1-col
- Skills grid: 3-col → 1-col
- About layout: side-by-side → stacked
- Nav: links → hamburger

---

## Content Placeholders

The following will be placeholder at launch and filled in by the owner:
- Profile photo (`assets/photo.jpg`)
- CV PDF (`assets/cv.pdf`)
- Bio paragraph text
- Project titles, descriptions, and tech tags
- Skills lists
- Email address, LinkedIn URL, GitHub URL
- Years of service stat

---

## Out of Scope

- Blog or writing section
- CMS or admin panel
- Contact form with backend
- Analytics (can be added later with a single script tag)
- Dark mode
