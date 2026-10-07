# Portfolio

Personal portfolio of **Anirban Roy**, a full stack software engineer. It is a minimal, single-page site built with Next.js and statically prerendered, so it deploys to Vercel with no configuration.

## Features

- Single page with Hero, Stats, Experience, Skills, Highlights (achievements, certifications, education) and Contact sections
- Light and dark theme that follows the system setting, with a manual toggle and no flash on load
- Scroll-reveal, animated counters and collapsible experience groups, all of which respect `prefers-reduced-motion`
- All content in one typed data file, so changing the text never means touching components
- Fully static output with no backend and no environment variables

## Tech stack

| Area       | Choice                                                    |
| ---------- | --------------------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router), React 19   |
| Language   | TypeScript                                                |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com)                 |
| Components | [shadcn/ui](https://ui.shadcn.com) (Base UI primitives)   |
| Animation  | [Motion](https://motion.dev)                              |
| Icons      | [Hugeicons](https://hugeicons.com) (free set)             |
| Fonts      | Geist Sans and Geist Mono via `next/font`                 |

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

| Script          | What it does                         |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server                 |
| `npm run build` | Create the production build          |
| `npm start`     | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Fonts, metadata, theme init script
│   ├── page.tsx          # Page composition
│   └── globals.css       # Tailwind and shadcn theme tokens
├── components/
│   ├── sections/         # Hero, Stats, Experience, Skills, Highlights, Contact
│   ├── ui/               # shadcn/ui components (button, badge, card, separator)
│   ├── header.tsx        # Sticky nav
│   ├── theme-toggle.tsx  # Light/dark switch
│   ├── reveal.tsx        # Scroll-reveal wrapper (Motion)
│   └── counter.tsx       # Animated number counter
├── data/
│   └── resume.ts         # All site content
└── lib/utils.ts          # cn() class helper
```

## Using this as a template

You are welcome to fork this for your own portfolio.

1. Replace the content in `src/data/resume.ts` (profile, stats, experience, skills, links).
2. Update the title and description in `src/app/layout.tsx`.
3. Adjust colors in the CSS variables in `src/app/globals.css`.
4. Add shadcn components with `npx shadcn@latest add <component>`. The project is configured to use Hugeicons.

Please swap in your own details and don't publish my personal information as yours.

## Deploying to Vercel

1. Push the repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new). Vercel detects Next.js automatically.
3. Click **Deploy**. No environment variables are needed.

You can also deploy from the CLI with `npx vercel`.

## Contact

- Email: anirban15987@gmail.com
- LinkedIn: [anirbanroyy](https://www.linkedin.com/in/anirbanroyy)
- GitHub: [AnirbanRoyy](https://github.com/AnirbanRoyy)
