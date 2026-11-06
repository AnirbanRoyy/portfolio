@AGENTS.md

# Portfolio

Next.js portfolio for Anirban Roy. All content lives in `src/data/resume.ts` (and `projects.ts`); components in `src/components/sections/` only render it.

- **Layout:** phones (below `sm`, 640px) must keep the single long page. From `sm` up, each tab in `src/data/tabs.ts` is its own static route (`src/app/<tab>/page.tsx`) rendering `<Portfolio view=…>`, which hides the other sections with `sm:hidden`. Header and footer live in the root layout. A deep link on a phone scrolls to its section (`scroll-to-section.tsx`).
- **`/resume`** is a 307 redirect in `next.config.ts` to `profile.links.resume`.

## Project context sources

- **Durga Puja project:** before writing or changing anything about it, read `../durga-puja/.claude/context.md`. It is the maintained map of what that app does and what changed, and it is newer than `resources/durga-puja-project-summary.md` (which is out of date). Re-read it each time; it changes often.
  @../durga-puja/.claude/context.md
- **CloudTube:** `../youtube/plan/CONTEXT.md` (frontend and backend are separate repos: `cloudtube-frontend`, `cloudtube-backend`).
- **Resume:** the source of truth is the Google Doc `1sJE2MdxZgjCudCW8xjilCcrrL4DkCI3bF6ssquw81BI` (shared "anyone with the link"). Buttons open its `/preview` URL via `profile.links.resume`. `resources/Anirban_Roy_Resume.docx` is a docx export of it; re-export (`.../export?format=docx`) after the doc changes.

## Conventions

- Stack: Next.js 16 (read `node_modules/next/dist/docs/` before Next-specific code), Tailwind v4, shadcn (Base UI, no `asChild`; use `buttonVariants` / `badgeVariants` on plain elements), Motion, Hugeicons (`HugeiconsIcon` + `@hugeicons/core-free-icons`).
- Prettier, 4-space indent, `Readonly<{…}>` for component props.
- Static page: don't use `new Date()` or other per-request values in server components (Cache Components fails the build).
- Package manager is bun (`bun.lock`).
- Verify with `npx tsc --noEmit`, `npm run lint` and `npm run build` after changes.
- Don't claim features that aren't built. Mark planned work as planned.
- Keep personal data minimal: no phone number on the site.
- Don't commit or push unless asked.
