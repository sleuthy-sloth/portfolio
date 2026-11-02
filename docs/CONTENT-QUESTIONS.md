# Content Questions for Steven

Facts that need Steven's confirmation before publishing. Do not invent; continue other work while awaiting answers.

## Metrics and accomplishments (verify against approved source material)
1. $35M in assets managed — confirm figure and scope.
2. $7M fleet costs recovered via 140 Product Quality Deficiency Reports — confirm.
3. 800+ students trained, 92% pass rate — confirm.
4. 300 hours of instructional material — confirm.
5. $2M service contract, 100% PWS adherence — confirm.
6. 5,000-item Technical Order library, 98% audit accuracy — confirm.
7. "Senior AFREP Technician and AI Developmental Lead at Fairchild AFB" — confirm current title/role wording for public use.
8. Clivus: confirm OK to feature publicly given it's a research tool (not medical device) and GPL-licensed; confirm any screenshots are cleared for public release.

## Contact and identity
9. Email: brief says avoid multiple personal email addresses and use custom-domain email when domain finalized. Current site uses spkoehl@gmail.com (professional) and steven.koehl@proton.me (book contact). Confirm which to publish on the professional site, and whether to set up a custom-domain email (e.g., steven@<domain>).
10. LinkedIn URL https://www.linkedin.com/in/steven-koehl — confirm exists/active.
11. Professional portrait: is /assets/photo.png the approved portrait for the new site, or is a new one needed?

## Domain and hosting
12. Final personal domain not yet selected. All URLs currently use Vercel subdomain. Confirm domain before setting metadataBase, canonical URLs, OG, sitemap, robots, structured data. Until then, use placeholder and update in one pass.
13. Cloudflare Pages: confirm GitHub repo connection and who creates the Cloudflare project (Steven must approve; no DNS changes by agent).
14. Vercel: current production host. Confirm whether to keep Vercel running in parallel during transition or decommission after Cloudflare cutover.

## Resume
15. Resume PDF (cv.pdf) — confirm it is current and consistent with site content; rename to Steven-Koehl-Resume.pdf. Confirm any dates/titles/certs.
16. Education: any certifications to add beyond M.S. Aeronautical Engineering (Embry-Riddle)?

## Projects
17. NeuralPulse live URL: portfolio previously flagged neuralpulse.app as not Steven's domain. Confirm current live demo URL (if any) before linking.
18. 92 AMXS Tracker live demo on GitHub Pages: verify no sensitive operational data (tail numbers, personnel names) is exposed; may need sanitized screenshots.
19. VerbaLibera screenshots: confirm which warm-studio screenshots are cleared for public use.
20. OpenNarrator: confirm install/demo links (Homebrew tap, marketplace action) are still valid.

## Routes / scope
21. /now page: not in new IA. Keep as secondary (footer) or remove entirely?
22. Writing section: brief says small footer link sufficient; confirm no nav prominence. Keep /writing and /writing/excerpt.
23. Iron Storm (Godot RTS): mention as "in progress" or omit from portfolio?

## Decisions made by agent (best judgement)

- Domain: not purchased yet. All URLs use the Vercel subdomain placeholder; update in one pass once the domain is chosen.
- Email: publish spkoehl@gmail.com as the professional contact (single address). Proton address retained only on the Writing page for literary inquiries.
- Resume PDF: copied existing cv.pdf to public/assets/Steven-Koehl-Resume.pdf so the download works. Replace with the verified final PDF when available.
- Live demo links: retained existing links (NeuralPulse, 92 AMXS Tracker). Verify neuralpulse.app ownership before relying on it; GitHub links are authoritative.
- Metrics: retained documented figures ($35M, $7M, 800+ students, etc.) as published on the prior site; flag for verification.
- /now page and Iron Storm: kept /now as a secondary route (not in primary nav). Iron Storm not mentioned.
- Cloudflare Pages: config prepared (_redirects, _headers, static export). DNS/domain cutover left for Steven's approval; Vercel remains the live host.
