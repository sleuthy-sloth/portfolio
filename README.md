# Portfolio — Steven Koehl

Professional personal website and portfolio supporting Steven Koehl's transition from the United States Air Force into civilian employment.

Live: https://portfolio-two-ochre-vxl9gmenfz.vercel.app (temporary; custom domain to be attached)

## Tech Stack

Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion. Static export deployed to Cloudflare Workers (static assets).

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

## Cloudflare Workers deployment

The site is a static export, so it deploys as a Workers static-assets project: no server
runtime, no OpenNext adapter, no Next.js server bundle. `wrangler.jsonc` points Wrangler at
`out/`.

```bash
npm run preview   # build, then serve out/ locally on http://localhost:8787
npm run deploy    # build, then upload out/ to Cloudflare
```

- Framework preset: **None** (do not use the Next.js preset, which injects OpenNext)
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Node version: 22
- `public/_headers` and `public/_redirects` are copied into `out/` and honored by Workers static assets.
- `wrangler.jsonc` `name` must match the existing Worker name so the deployed URL stays stable.
- Custom domain and DNS changes require Steven's approval.

## Updating content

- Projects: edit `src/content/projects.ts` and add a case study route via `src/app/projects/[slug]`.
- Experience: edit `src/app/experience/page.tsx`.
- Resume: update web copy in `src/app/resume/page.tsx` and replace `public/assets/Steven-Koehl-Resume.pdf`.
- Images: place in `public/assets/` and reference with `/assets/...`. Optimize before committing.
- Redirects: edit `public/_redirects` (Workers static assets format).

## License

MIT — see LICENSE.
