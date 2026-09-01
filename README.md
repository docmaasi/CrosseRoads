# CrosseRoads

![CrosseRoads logo](public/crosseroads-logo-clear.png)

Dr. Kisa Crosse's guidance platform — **Guidance • Support • Opportunity** — empowering single moms and
single dads to navigate the path from high school to college and beyond — as a standalone web app with no backend: every tool runs
in the visitor's browser, and everything they enter stays on their device.

## The tools

| Route | Tool |
|---|---|
| `/CareerPathfinder` | Free 7-factor career assessment (36 questions, 37 careers, personalized report) |
| `/CollegePlanner` | College admissions checklist — junior year through move-in day |
| `/ParentRoadmap` | First-Time College Parent Roadmap package, with a financial-aid award comparison worksheet and a college-list tracker |
| `/Wellness` | Wellness Transformation companion for midlife women (habits, check-ins, trends, journal) |
| `/Guides` | Articles on career discovery and college admissions |

## Development

```bash
npm install
npm run dev        # local dev server
npm test           # unit tests (vitest)
npm run typecheck  # TypeScript
npm run build      # production build
```

Brand assets live in `public/`: `crosseroads-logo-clear.png`
(transparent), `crosseroads-logo.png` (white background, used as the
social sharing card), and `crosseroads-brand-card.png` (the full brand
sheet with the mission and pillars).

Branding (platform name, tagline, contact email) lives in
`src/components/career-pathfinder/branding.js`.

Built with Vite + React + Tailwind CSS. Deployed on Vercel
(`vercel.json` rewrites all routes to the SPA).
