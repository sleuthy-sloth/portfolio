# Project Inventory

Review of candidate projects for the redesigned portfolio.

## 1. Clivus
- Repo: https://github.com/sleuthy-sloth/clivus
- Description: Free, open-source DICOM viewer for Windows, following Horos/OsiriX workflow. C++20, Qt 6, DCMTK, OpenGL, SQLite. GPL-3.0-or-later.
- Status: Active development (async decode pipeline merged; core tests + parity gate). Research tool, explicitly NOT a medical device (no regulatory clearance).
- Strengths: Deep engineering (test-first, fidelity table, performance spike with measured headroom 0.34ms vs 16.7ms budget). Demonstrates systems thinking, C++, graphics, testing discipline. Strong civilian-relevant engineering story.
- Risks: Not web software (no live demo). Must be accurate about "research tool, not medical device." Screenshots needed. License GPL.
- Recommendation: **Feature prominently** as a flagship case study demonstrating low-level/systems engineering and test discipline. Include architecture + performance numbers + test approach. No live demo; link to GitHub + releases.
- Slug: /projects/clivus

## 2. VerbaLibera
- Repo: https://github.com/sleuthy-sloth/VerbaLibera
- Description: Language learning app (French/German/Italian/Portuguese/Spanish A1) based on Language Transfer method. Offline PWA, no runtime AI. Web + portable HTML + desktop.
- Status: Active (78 lessons, 634 practice activities, 24 speaking steps). Live demo: verbalibera.vercel.app.
- Strengths: Full product (content pipeline, PWA, desktop, tests). Demonstrates product thinking, content engineering, offline-first. Live demo available.
- Recommendation: **Feature prominently.** Strong case study for product engineering + offline-first + content systems. Link to live demo.
- Slug: /projects/verbalibera

## 3. OpenNarrator
- Repo: https://github.com/sleuthy-sloth/opennarrator
- Description: Open-source audiobook factory. EPUB/TXT/DOCX → chaptered M4B via Kokoro TTS. Web UI + CLI + GitHub Action. v0.2, 85 tests, MIT.
- Status: Active, installable (Homebrew/pip), CI passing.
- Strengths: Clear problem (cost of audiobooks), clean architecture (Python, FastAPI, ffmpeg), multiple interfaces, published tooling (Homebrew tap, GH Action). Demonstrates end-to-end product + packaging.
- Recommendation: **Feature prominently.**
- Slug: /projects/opennarrator

## 4. NeuralPulse
- Repo: https://github.com/sleuthy-sloth/NeuralPulse
- Description: Open-source brain training PWA. 13 games, daily challenges, stats dashboard (radar charts, calendar heatmap), offline-first, optional Supabase sync. MIT.
- Status: Active, live at neuralpulse.app (per README; note portfolio previously flagged domain issue — verify current live URL).
- Strengths: Web app with real UI, data viz, PWA, optional backend sync. Good visual case study.
- Recommendation: **Feature prominently.** Verify live demo URL before publishing.
- Slug: /projects/neuralpulse

## 5. 92 AMXS Tracker
- Repo: https://github.com/sleuthy-sloth/92-AMXS-Tracker
- Description: Maintenance operations platform for 92nd AMXS. 16 pages, AI OCR of AF Forms, RBAC, offline PWA. React 19, Firebase, Tesseract.js. v0.9.0. CC BY-NC 4.0 → MIT (relicensed).
- Status: Active (v0.9.0, June 2026). Live demo on GitHub Pages.
- Strengths: Real operational domain (Steven's own work), AI integration (OCR), RBAC, real users (squadron maintainers). Strongest "military experience translated to software" story.
- Risks: Contains military operational context. Must not publish sensitive details; screenshots must be reviewed for sensitive info (tail numbers, personnel names, etc.). Live demo on GitHub Pages — verify what's exposed.
- Recommendation: **Feature prominently** but with careful content review. Use sanitized screenshots. Verify no sensitive data in demo.
- Slug: /projects/92-amxs-tracker

## Secondary / not featured
- Iron Storm (Godot RTS) — in progress (v0.2). Mention only as "in progress" or omit. Recommendation: **Wait until further development** (not a web/software-engineering showcase yet).
- Memoria Aeterna (novel) — handled in /writing, not /projects.
- Homelab — handled in /lab, not /projects.

## Projects NOT to publish
- None identified as harmful, but Iron Storm is too early. All others (clivus, VerbaLibera, OpenNarrator, NeuralPulse, 92-AMXS-Tracker) are appropriate.

## Project screenshots needed
- Clivus: capture from Windows build or use existing docs/screenshots if any.
- VerbaLibera: reuse docs/screenshots/warm-studio/* (home, lesson, listen, dashboard).
- OpenNarrator: terminal + web UI screenshots.
- NeuralPulse: existing asset (neuralpulse-screenshot.png) — verify current.
- 92 AMXS Tracker: existing asset (92amxs-screenshot.png) — verify no sensitive data; may need sanitized version.
