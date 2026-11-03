// Structured project content. Used by /projects index and /projects/[slug] case studies.

export type ProjectStatus = "Active" | "In development" | "Beta" | "Released" | "Archived";

export interface ProjectLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  status: ProjectStatus;
  oneLine: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  screenshot?: { src: string; alt: string };
  featured: boolean;
  // Case study fields
  problem: string;
  objectives: string[];
  role: string;
  approach: string[];
  challenges: { title: string; body: string }[];
  results: string[];
}

export const projects: Project[] = [
  {
    slug: "clivus",
    name: "Clivus",
    category: "Systems Engineering / Medical Imaging",
    status: "In development",
    oneLine: "A free, open-source DICOM viewer for Windows, following the Horos/OsiriX workflow.",
    description:
      "Clivus is a new DICOM viewer built Windows-first. It follows the Horos/OsiriX workflow (drag-to-window on the canvas, series thumbnails, volume stacks) without sharing code with them. Built test-first, with a measured performance budget: 0.34 ms to re-window a 512² frame against a 16.7 ms budget.",
    technologies: ["C++20", "Qt 6", "DCMTK", "OpenGL", "SQLite", "CMake"],
    links: [
      { href: "https://github.com/sleuthy-sloth/clivus", label: "Source Code", external: true },
    ],
    featured: true,
    problem:
      "On Windows, the platform most of the medical and research world runs on, the realistic DICOM viewer options are locked-down PACS workstations, subscription seats priced for hospitals, feature-limited editions, or manual pixel extraction. macOS has had twenty years of serious free DICOM tooling; Windows has not.",
    objectives: [
      "Deliver a free, open-source DICOM viewer for Windows that follows the proven Horos/OsiriX workflow.",
      "Make decoded pixel fidelity verifiable through tests that compare against ground truth.",
      "Keep interaction speed high enough that windowing a 12-bit CT series feels instant.",
    ],
    role:
      "Sole designer and developer. Architecture, rendering pipeline, DICOM parsing, test harness, and performance spike.",
    approach: [
      "New codebase (no Horos/OsiriX code), built on proven open ingredients: Qt 6, DCMTK, OpenGL, SQLite.",
      "Test-first development: fidelity tests compare decoded images to ground truth and fail loudly on regression.",
      "Performance spike validated the interaction model before committing to the full build (0.34 ms vs 16.7 ms budget).",
      "Async decode pipeline for multi-frame browsing, colour photometrics, MODALITY LUT handling, RT Dose.",
    ],
    challenges: [
      { title: "Pixel fidelity vs. speed", body: "A viewer that is slightly wrong is worse than no viewer. Fidelity tests against ground truth catch quiet regressions from compression or upgrades." },
      { title: "Interaction speed", body: "Re-windowing a 512² frame must stay under the 16.7 ms frame budget. The spike measured 0.34 ms, approximately 49 times faster than the budget." },
    ],
    results: [
      "Real, working, test-backed viewer state available immediately after opening a folder.",
      "Performance headroom validated before full build.",
    ],
  },
  {
    slug: "verbalibera",
    name: "VerbaLibera",
    category: "Education / Language Learning",
    status: "Active",
    oneLine: "Language learning through practical sentence construction, built on the Language Transfer method.",
    description:
      "VerbaLibera introduces a pattern, asks the learner to build it themselves, then offers a model answer. Covers French, German, Italian, Portuguese, and Spanish at A1. Offline-capable PWA with no runtime AI; no account or server required.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PWA", "PostgreSQL (desktop)"],
    links: [
      { href: "https://verbalibera.vercel.app", label: "Live Demo", external: true },
      { href: "https://github.com/sleuthy-sloth/VerbaLibera", label: "Source Code", external: true },
    ],
    screenshot: { src: "/assets/verbalibera-home.webp", alt: "VerbaLibera landing page" },
    featured: true,
    problem:
      "Most language apps optimize for engagement (timers, streaks, lost hearts) rather than understanding. Learners memorize phrases without learning to construct sentences. The Language Transfer method puts pattern recognition first.",
    objectives: [
      "Build a free, offline-capable language app around the Language Transfer Thinking Method.",
      "Support three delivery modes: web app, single-file portable HTML, and desktop app with local storage.",
      "Keep all practice data local — no account, no server, no connection required.",
    ],
    role: "Sole designer and developer. Product, content pipeline, PWA, desktop build, tests.",
    approach: [
      "Next.js web app with offline-first PWA (service worker, IndexedDB).",
      "Portable HTML build: one file, opens in any browser.",
      "Electron-style desktop app with local PostgreSQL storage.",
      "Content pipeline (npm run content:build) generates per-course reports; tests fail if docs drift.",
    ],
    challenges: [
      { title: "Three delivery modes, one codebase", body: "Web, portable HTML, and desktop share logic but have different storage and packaging constraints." },
      { title: "Content integrity", body: "Lesson counts and activity totals are generated and checked by tests to prevent silent drift." },
    ],
    results: [
      "78 lessons across 5 languages, 634 practice activities, 24 speaking steps.",
      "Live demo deployed; offline-capable.",
    ],
  },
  {
    slug: "opennarrator",
    name: "OpenNarrator",
    category: "Developer Tools / Audio",
    status: "Released",
    oneLine: "Open-source audiobook factory: convert any ebook to a chaptered M4B using open-source TTS.",
    // TODO(audit-2026-11-03): pyproject.toml reports version 0.1.0 but git tag is v0.2.0.
    // Align package version with the tagged release before the next portfolio update.
    description:
      "OpenNarrator converts EPUB, TXT, and DOCX ebooks into chaptered M4B audiobooks using the Kokoro TTS engine (82M params, Apache 2.0). Web UI, CLI, and GitHub Action. No API keys, no cloud services, no vendor lock-in. Installs via Homebrew or pip.",
    technologies: ["Python 3.11+", "Kokoro TTS", "FastAPI", "Typer CLI", "ffmpeg", "pytest"],
    links: [
      { href: "https://github.com/sleuthy-sloth/opennarrator", label: "Source Code", external: true },
    ],
    featured: true,
    problem:
      "Audiobooks are expensive ($15-30 per title) and TTS services charge per character while holding data on their servers. There was no tool that runs entirely on the user's own machine, uses open-source models, and produces professional-grade chaptered M4B files.",
    objectives: [
      "Convert EPUB/TXT/DOCX to chaptered M4B locally using open-source TTS.",
      "Provide web UI, CLI, and GitHub Action interfaces.",
      "Ship installable packages (Homebrew, pip) with no API keys required.",
    ],
    role: "Sole designer and developer. Architecture, TTS integration, packaging, CI, tests (85).",
    approach: [
      "Kokoro TTS engine (82M parameters, Apache 2.0) for natural-sounding speech.",
      "FastAPI + uvicorn web UI at localhost:8080 with voice preview and speed slider.",
      "Typer CLI for scripting and batch processing; --demo flag for a 60-second trial.",
      "Resume support: pick up interrupted conversions.",
      "GitHub Actions template repo for free cloud conversion on GitHub runners.",
    ],
    challenges: [
      { title: "Local-only, no cloud", body: "Everything runs on the user's machine; model size and ffmpeg availability are constraints." },
      { title: "Chaptered M4B output", body: "Proper chapter metadata so files work in Apple Books, Plex, and any audiobook player." },
    ],
    results: [
      "85 tests passing; CI across platforms.",
      "Installable via Homebrew and pip; v0.2 released.",
    ],
  },
  {
    slug: "neuralpulse",
    name: "NeuralPulse",
    category: "Health / Brain Training",
    status: "Active",
    // TODO(audit-2026-11-03): package.json reports version 0.1.0 but git tag is v1.0.0.
    // Align package version with the tagged release before the next portfolio update.
    oneLine: "Open-source brain training web app: 13 games, daily challenges, stats dashboard.",
    description:
      "NeuralPulse is a free, open-source brain training web app comparable to Elevate or Lumosity. 13 games across memory, attention, speed, and problem-solving. Daily challenges (Wordle-style), stats dashboard with radar charts and calendar heatmap. Offline-first PWA with optional Supabase sync.",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "Supabase", "Zustand", "IndexedDB", "PWA"],
    links: [
      { href: "https://github.com/sleuthy-sloth/NeuralPulse", label: "Source Code", external: true },
    ],
    screenshot: { src: "/assets/neuralpulse-screenshot.webp", alt: "NeuralPulse dashboard and game screens" },
    featured: true,
    problem:
      "Brain training apps charge $5-15/month for mini-games with progress tracking. I wanted to prove you can build something comparable — radar charts, calendar heatmaps, streak tracking, daily challenges, offline support — and give it away.",
    objectives: [
      "Deliver 13 brain games across memory, math, reflexes, vocabulary, focus, and logic.",
      "Provide a unified stats dashboard with skill radar charts and calendar heatmaps.",
      "Work offline-first as a PWA; optional cloud sync via Supabase.",
    ],
    role: "Sole designer and developer. Product, games, state management, PWA, tests.",
    approach: [
      "Next.js 16 App Router with TypeScript and Tailwind CSS.",
      "Zustand for global state; IndexedDB (idb) for offline-first storage.",
      "Supabase for optional account sync (Google OAuth / magic link).",
      "Daily challenge system: same 3-game sequence for all players each day.",
      "PWA with Workbox for installability and offline use.",
    ],
    challenges: [
      { title: "Offline-first data model", body: "Scores stored locally first, then sync to Supabase when an account exists — conflict handling and guest mode." },
      { title: "Daily shared challenge", body: "Same puzzle for everyone each day requires deterministic generation independent of server state." },
    ],
    results: [
      "13 games shipped; live PWA.",
      "Free and open source (MIT).",
    ],
  },
  {
    slug: "92-amxs-tracker",
    name: "92 AMXS Tracker",
    category: "Operations / Maintenance Management",
    status: "Active",
    oneLine: "Maintenance operations platform for the 92nd Aircraft Maintenance Squadron.",
    description:
      "A full-stack maintenance management platform replacing paper logbooks and spreadsheets with a real-time command center. 16 pages, AI-powered OCR scanning of AF Forms, role-based access control, offline PWA support. Built in close collaboration with the maintainers who use it.",
    technologies: ["React 19", "TypeScript", "Firebase", "Tesseract.js", "Tailwind CSS", "PWA"],
    links: [
      { href: "https://sleuthy-sloth.github.io/92-AMXS-Tracker/", label: "Live Demo", external: true },
      { href: "https://github.com/sleuthy-sloth/92-AMXS-Tracker", label: "Source Code", external: true },
    ],
    screenshot: { src: "/assets/92amxs-screenshot.webp", alt: "92 AMXS Tracker maintenance dashboard" },
    featured: true,
    problem:
      "Aircraft maintenance squadrons run on paperwork: AFTO Form 781s, status boards, TCTO tracking, training records scattered across binders, logbooks, and spreadsheets. When a commander asks for fleet status, someone walks the flightline to check.",
    objectives: [
      "Replace paper logbooks and spreadsheets with a single real-time web application.",
      "Give every role (technician to commander) the same picture of fleet readiness.",
      "Digitize paper forms via AI-powered OCR.",
      "Work offline in hangar environments with intermittent connectivity.",
    ],
    role: "Sole designer and developer, built in close collaboration with squadron maintainers.",
    approach: [
      "React 19 SPA with 16 pages: dashboard, maintenance tracking, personnel, reports, admin.",
      "Firebase backend: Firestore, Authentication, Cloud Storage with security rules.",
      "Role-based access control: technicians, supervisors, commanders see different views.",
      "AI-powered OCR of AF Forms using Tesseract.js in the browser.",
      "Offline PWA support for hangar environments.",
      "Automated report generation for weekly status briefings and monthly metrics.",
    ],
    challenges: [
      { title: "Military domain accuracy", body: "Workflow must match real squadron operations; built with the maintainers who use it daily." },
      { title: "Offline in hangars", body: "Intermittent connectivity requires local-first data with background sync." },
      { title: "Sensitive data handling", body: "Operational data requires strict access control and careful public presentation." },
    ],
    results: [
      "v0.9.0 released (June 2026) with interactive intelligence alerts and scoped AI assistant.",
      "Live demo deployed; iterating on maintainer feedback.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
