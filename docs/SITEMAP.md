# Sitemap (initial)

Base URL: https://<final-domain> (TBD; placeholder until domain selected)

## Primary navigation (compact)
Home, About, Experience, Projects, Contact + prominent Resume link.

## Routes

- `/` — Home (professional homepage)
  - Hero (name, positioning, portrait, resume/GitHub/LinkedIn actions, transition status)
  - Professional snapshot (3-4 metrics)
  - Selected projects (3-5)
  - Professional experience overview
  - Technical capabilities
  - Education
  - About (teaser)
  - Contact (CTA)
- `/about` — Professional biography and background
- `/experience` — Detailed professional experience (Air Force career, civilian language)
- `/projects` — Portfolio index
- `/projects/clivus` — Case study
- `/projects/verbalibera` — Case study
- `/projects/opennarrator` — Case study
- `/projects/neuralpulse` — Case study
- `/projects/92-amxs-tracker` — Case study
- `/resume` — Web resume + PDF download
- `/contact` — Professional contact

## Secondary (footer links only, not primary nav)
- `/writing` — Memoria Aeterna (cover, synopsis, author bio, excerpt, literary contact)
- `/writing/excerpt` — Chapter 1
- `/lab` — Homelab / infrastructure showcase
- `/now` — (optional; keep as secondary or remove) Current focus

## Error
- `/404` — designed 404 page

## Redirects (Cloudflare _redirects)
- `/work` → `/` (301) [legacy]
- `/work/neuralpulse` → `/projects/neuralpulse` (301)
- `/work/opennarrator` → `/projects/opennarrator` (301)
- `/work/92-amxs-tracker` → `/projects/92-amxs-tracker` (301)

## SEO
- robots.txt, sitemap.xml, favicon, OG image (static), canonical URLs, Person structured data, per-page metadata.
