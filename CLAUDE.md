# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server on port 8080
npm run build      # Production build
npm run lint       # ESLint check
npm test           # Run Vitest (single run)
npm run test:watch # Vitest in watch mode
npm run preview    # Preview built app
```

## Architecture

**OmAds** — a single-page React landing page for a billboard advertising agency. Deployed on Vercel.

**Stack:** React 18 + TypeScript + Vite (SWC) + Tailwind CSS + shadcn-ui

**Routing:** React Router v6 with two routes — `/` (Index) and a `*` catch-all (NotFound). Vercel rewrites all routes to `index.html` via `vercel.json`.

**Page layout (`src/pages/Index.tsx`):** Assembles the full page from section components in order: `Navbar → HeroSection → AboutSection → ServicesSection → CtaBanner → PortfolioSection → ContactSection → Footer`. `PricingSection` exists but is currently commented out.

**Component organization:**
- `src/components/ui/` — shadcn-ui primitives (50+ components); do not edit these manually, use `npx shadcn-ui add <component>` to add new ones
- `src/components/` — page-level section components
- `src/hooks/` — `use-mobile.tsx` (breakpoint detection), `use-toast.ts` (toast hook)
- `src/lib/utils.ts` — `cn()` utility for class merging
- `src/assets/` — logo and image assets (hero carousel, portfolio photos)

**Styling:** Tailwind with custom brand tokens defined in `tailwind.config.ts`:
- Brand orange: `#f16702`
- Dark teal: `#003d52`
- Light teal: `#e6fdfe`
- Fonts: Montserrat (headings), Open Sans (body) — loaded via Google Fonts in `index.html`
- CSS variables for theming in `src/index.css`

**Path alias:** `@/` resolves to `./src/` in both TypeScript and Vite.

**Tests:** Vitest with jsdom environment. Test files live under `src/` matching `**/*.{test,spec}.{ts,tsx}`. Setup file at `src/test/setup.ts`.
