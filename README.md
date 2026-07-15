# Uzair Waseem - Engineering Portfolio

[![Portfolio CI](https://github.com/Assembler-Fourier/uzair-waseem-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Assembler-Fourier/uzair-waseem-portfolio/actions/workflows/ci.yml)
[![Live site](https://img.shields.io/badge/live-uzairwaseem.com-0f766e)](https://uzairwaseem.com)

Recruiter-focused portfolio for **Uzair Waseem**, a Dublin-based software engineer working with TypeScript, React, Node.js, PostgreSQL and Playwright across tested full-stack products and backend APIs.

![Uzair Waseem portfolio showing live engineering proof](.github/assets/portfolio-preview.png)

## Reviewer Path

1. Open the [live portfolio](https://uzairwaseem.com) for the concise hiring overview.
2. Start with [HouseFair](https://github.com/Assembler-Fourier/housefair-ai), the primary full-stack flagship.
3. Review the [Roster Command public engineering extract](https://github.com/Assembler-Fourier/employee-roster-command), which contains selected sanitised domain logic and synthetic fixtures rather than the private application.
4. Inspect the [Irish Theory Test Coach](https://github.com/Assembler-Fourier/irish-theory-test-coach) pre-launch product and its explicit release blockers.
5. Review the [QA Automation Lab](https://github.com/Assembler-Fourier/qa-automation-lab) for browser, API, accessibility, mocking and CI evidence.
6. Download the [one-page software engineering CV](https://uzairwaseem.com/Uzair-Waseem-CV.pdf).

## Public Project Status

| Project | Public boundary | Review path |
| --- | --- | --- |
| HouseFair | Live free early-access product | App, source, mobile Playwright checks |
| Roster Command | Public engineering extract; full application remains private | Sanitised logic, synthetic fixtures, 23 tests, separate read-only recruiter demo |
| Irish Theory Test Coach | Pre-launch public preview | Custom domain, source, full local QA, documented commercial blockers |
| QA Automation Lab | Public CI-backed test suite | 26 contracts, live read-only smoke, isolated local writes, failure artifacts |

## What This Repository Demonstrates

- Next.js App Router implementation with semantic HTML and keyboard-visible focus states.
- Evidence-led case studies that distinguish live products, previews, demos and source extracts.
- Canonical metadata, Open Graph output, `Person` and `WebSite` JSON-LD, robots and sitemap routes.
- Responsive recruiter-path checks from 320px through desktop.
- WebGL scene pixel-signal checks at mobile and desktop sizes.
- Content Security Policy and baseline browser security headers.
- A custom 404, reduced-motion support and accessible external-link labels.

## Architecture

```text
app/
  layout.tsx                   Global metadata and viewport configuration
  page.tsx                     Hiring page, project evidence and JSON-LD
  projects/[slug]/page.tsx     Four evidence-led case studies
  components/                  Navigation and performance-bounded Three.js scenes
  not-found.tsx                Recruiter-friendly 404
  opengraph-image.tsx          Generated social preview
  robots.ts / sitemap.ts       Crawl configuration
public/                        Portrait, product screenshots, logo and CV
tests/                         Playwright recruiter-path, responsive and WebGL checks
scripts/generate_cv.py         Reproducible PDF generation
```

## Quality Gates

```bash
npm ci
npx playwright install chromium
npm run qa
npm run audit
```

`npm run qa` runs ESLint, TypeScript, the production build, browser journeys, mobile overflow checks, the custom 404, CV delivery and nonblank WebGL assertions. GitHub Actions uploads Playwright reports and failure evidence for review.

## Local Development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. The Playwright configuration starts its own production server on port 4173.

## CV Generation

The software/backend and QA automation CVs are generated from `scripts/generate_cv.py` and served from `public/`. The main download uses the software version, while the QA-specific route receives distinct QA content. Older role-specific routes remain available so links already submitted to recruiters do not break.

```bash
python scripts/generate_cv.py
```

## Privacy And Accuracy

- The public portfolio does not publish a personal phone number or residential address.
- Work-authorisation wording is intentionally absent until the exact current permission is confirmed.
- Roster Command is labelled as an engineering extract, not a complete public application.
- Theory Test Coach is labelled pre-launch until real provider, payment and commercial checks are complete.
- Experience dates and titles require candidate confirmation before future changes.

## Contact

- Portfolio: [uzairwaseem.com](https://uzairwaseem.com)
- LinkedIn: [linkedin.com/in/uzair-waseem](https://www.linkedin.com/in/uzair-waseem/)
- GitHub: [github.com/Assembler-Fourier](https://github.com/Assembler-Fourier)
- Email: [uzairwaseem29@gmail.com](mailto:uzairwaseem29@gmail.com)
