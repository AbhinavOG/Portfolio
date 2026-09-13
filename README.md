# Abhinav Kumar — Portfolio

A personal developer portfolio for Abhinav Kumar — final-year Diploma student in Computer Science & Engineering (Cyber Security pathway) at M.S. Ramaiah Polytechnic.

Built with **Next.js (App Router)**, **React**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**-style components. Deployable as a fully static site on Vercel.

## Pages

| Route  | Purpose                                                                 |
| ------ | ----------------------------------------------------------------------- |
| `/`    | Intro / splash page with a button into the portfolio                     |
| `/home`| The full portfolio (hero, about, skills, learning, projects, certificates, education, resume, contact) |

Supporting routes: `/robots.txt`, `/sitemap.xml`, `/icon.svg`.

## Features

- Dark-first theme with a light-mode toggle (via `next-themes`)
- Single cyan accent — no rainbow gradients or noise
- Scroll-triggered reveal animations with `prefers-reduced-motion` support
- Certifications as list rows with a preview lightbox (open via row click, close via ✕ / outside click / Escape)
- Honest content policy: no fabricated projects, grades, or certificates — unknown sections are either empty or shown as genuinely "coming soon"

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- [React](https://react.dev) 19 + [TypeScript](https://www.typescriptlang.org) 5.9
- [Tailwind CSS](https://tailwindcss.com) 4 via `@tailwindcss/postcss`
- [shadcn/ui](https://ui.shadcn.com) component primitives (Button, Badge) — `class-variance-authority`, `clsx`, `tailwind-merge`
- [Lucide React](https://lucide.dev) icons + inline GitHub/LinkedIn brand marks
- [next-themes](https://github.com/pacocoursey/next-themes) theming
- [Geist](https://github.com/vercel/geist-font) font family (Sans + Mono)

## Getting Started

Requirements: Node.js 20+ and npm.

```bash
npm install        # install dependencies
npm run dev        # start the dev server on http://localhost:3000
npm run typecheck  # type-check with tsc
npm run build      # production build (verify before deploy)
npm run start      # serve the production build
```

## Project Structure

```
app/
  (portfolio)/home/page.tsx   # the portfolio page (route: /home)
  (portfolio)/layout.tsx      # navbar + footer wrapper + portfolio SEO metadata
  (splash)/page.tsx           # intro page (route: /)
  layout.tsx                  # root layout (fonts, theme provider)
  globals.css                 # Tailwind v4 theme, dark/light tokens, animations
  robots.ts | sitemap.ts | icon.svg
components/
  sections/                   # one component per portfolio section
  ui/                         # shadcn/ui-style primitives (button, badge)
  navbar.tsx | footer.tsx | theme-toggle.tsx | theme-provider.tsx | reveal.tsx
lib/
  site.ts                     # ALL site content lives here
  utils.ts                    # cn() classnames helper
public/
  certificates/               # certificate images referenced from lib/site.ts
```

## Editing Content

Everything user-visible is data in [`lib/site.ts`](lib/site.ts) — components just render it.

- `site`, `about`, `skills`, `learningJourney`, `education`, `links`: page copy and links.
- `certificates`: shaped as `{ title, issuer, image }`. Add a certificate by dropping the file into `public/certificates/` and adding an entry here; the preview lightbox works automatically.
- `projects`: typed `Project[]`. It is intentionally `[]` right now — when a real project exists, add there and the grid appears.

## Deployment

The live site runs on Vercel with a custom domain (`abhinav.qzd.je`).

- Import the repo on [Vercel](https://vercel.com), framework preset **Next.js**.
- Framework preset uses `next build`; no environment variables are needed.
- After first deploy, point `abhinav.qzd.je` at Vercel and set it as the domain.

## Contact

- Email: [abhinav.cse17@gmail.com](mailto:abhinav.cse17@gmail.com)
- GitHub: [@AbhinavOG](https://github.com/AbhinavOG)
- LinkedIn: [@abhinavog](https://linkedin.com/in/abhinavog/)