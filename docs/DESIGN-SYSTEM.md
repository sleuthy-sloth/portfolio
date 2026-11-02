# Design System

## Aesthetic
Editorial technical. Technical precision + editorial typography + restrained color + clear hierarchy + strong alignment/spacing + real screenshots + minimal purposeful motion. Like a well-designed engineering publication or architect's portfolio. Light mode primary.

## Color tokens (light mode primary)

| Token | Hex | Use |
|---|---|---|
| --color-bg (warm paper) | #F2F0E9 | Primary background |
| --color-bg-alt | #EAE7DE | Alt surface |
| --color-text (charcoal) | #242522 | Primary text |
| --color-text-muted (muted gray) | #70716B | Secondary text |
| --color-border (warm gray) | #D8D5CC | Borders |
| --color-accent (burnt red) | #B94A36 | Accent (links, CTAs, labels) — use sparingly |
| --color-accent-hover | #9E3D2B | Accent hover |
| --color-brass (secondary accent) | #C5A66A | Secondary accent (writing/lab emphasis) |
| --color-dark-surface | #20221F | Dark sections |
| --color-dark-text | #A8A59C | Text on dark |
| --color-dark-border | #3A3A36 | Borders on dark |

Dark mode: invert surfaces to deep charcoal (#20221F) with warm paper text; keep burnt red accent; reduce contrast slightly. Light mode is primary presentation.

## Typography
- Sans (headings + body): Inter (or Geist) — distinctive, clean.
- Serif (occasional editorial emphasis): Source Serif 4 — headings on writing/lab, pull quotes.
- Mono (technical metadata, project identifiers, small details): IBM Plex Mono — locally hosted if licensing/file size permit; otherwise system mono fallback.
- Scale: clamp-based fluid type for headings; fixed rem for body (17px base). Tracking: tight for large headings (-2px), wide for uppercase labels (2-3px).

## Spacing scale
4, 8, 12, 16, 24, 32, 48, 64, 96 (px). Section vertical padding 96px desktop / 64px mobile. Max content width 1100px. Project case study width 900px. Reading width 680px.

## Grid
- 12-column conceptual grid; containers use max-width + horizontal padding.
- Strong alignment: all sections share the same horizontal margins within a container.
- Responsive: mobile-first; breakpoints sm 640, md 768, lg 1024, xl 1280.

## Components
- Nav: compact, fixed top, height 64px, backdrop blur. Links: Home, About, Experience, Projects, Contact. Resume as prominent action button. Mobile: hamburger overlay.
- Footer: contact links (email, LinkedIn, GitHub) + copyright + secondary links (Writing, Lab).
- Hero: name, positioning, short intro, portrait, resume download, view projects, LinkedIn, GitHub, transition status. Not oversized.
- Section headings: small uppercase label (burnt red) + large heading + optional divider bar.
- Project cards: varied layouts (featured with screenshot, standard compact, case-study deep). Avoid identical repeated cards.
- Buttons: solid burnt red (primary), outlined (secondary). Uppercase tracking, small text.
- Focus: 2px burnt red outline, 2px offset. Visible on all interactive elements.
- Theme toggle: sun/moon, persisted.

## Motion
- Framer Motion used sparingly: subtle nav transitions, small image reveals, smooth section transitions, lightweight hover feedback.
- Respect prefers-reduced-motion (CSS media query disables animations).
- No parallax, no animating every paragraph, no excessive stagger.

## Image treatment
- Real screenshots only. Consistent aspect ratios (16/10 for project screenshots). object-cover object-top.
- Optimize: manual compression, modern formats where practical. No oversized images.
- Alt text required and descriptive.

## Accessibility
- Keyboard nav, visible focus, proper contrast (WCAG AA minimum), semantic HTML, correct heading hierarchy, alt text, reduced-motion support, useful link text.
- Touch targets minimum 44px.

## Dark mode
- Supported via data-theme attribute + localStorage + inline pre-paint script.
- Light mode is primary presentation; dark mode is a useful implementation, not the default.
