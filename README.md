# Portfolio — Steven Koehl

Professional personal website and portfolio supporting Steven Koehl's transition from the United States Air Force into civilian employment.

Live: https://portfolio-two-ochre-vxl9gmenfz.vercel.app (temporary; custom domain to be attached)

## Tech Stack

Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion. Static export deployed to Cloudflare Pages.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production static build (outputs to out/)
npm run test     # Vitest
npm run lint     # ESLint
```

## Production build (static export)

```bash
npm run build
```

Output is written to `out/`. This is a fully static site with no server runtime.

## Cloudflare Pages deployment

- Framework preset: Next.js (Static HTML Export)
- Build command: `npx next build`
- Build output directory: `out`
- Connect the GitHub repository to Cloudflare Pages for automatic production deploys from `main` and preview deploys for pull requests.
- Custom domain and DNS changes require Steven's approval.

## Updating content

- Projects: edit `src/content/projects.ts` and add a case study route via `src/app/projects/[slug]`.
- Experience: edit `src/app/experience/page.tsx`.
- Resume: update web copy in `src/app/resume/page.tsx` and replace `public/assets/Steven-Koehl-Resume.pdf`.
- Images: place in `public/assets/` and reference with `/assets/...`. Optimize before committing.
- Redirects: edit `public/_redirects` (Cloudflare Pages format).

## License

MIT — see LICENSE.
