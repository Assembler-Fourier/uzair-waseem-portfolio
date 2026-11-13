# Uzair Waseem - Engineering Portfolio

[![Portfolio CI](https://github.com/Assembler-Fourier/uzair-waseem-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Assembler-Fourier/uzair-waseem-portfolio/actions/workflows/ci.yml)
[![Live site](https://img.shields.io/badge/live-uzairwaseem.com-0f766e)](https://uzairwaseem.com)

Recruiter-focused portfolio for **Uzair Waseem**, a Dublin-based software engineer working across tested web products, polyglot backend systems, applied AI workflows and security-aware delivery.

A paper, ink and clay-red interface puts three project stories, experience and contact details first. Typography is self-hosted; the page works without JavaScript.

## Reviewer Path

1. Explore [HouseFair](https://uzairwaseem.com/projects/housefair), a shared-home product with a public sample tour.
2. Inspect [Roster Command](https://uzairwaseem.com/projects/roster-command), a sanitised scheduling extract with synthetic examples and explainable rules.
3. Review [VaultWatch](https://uzairwaseem.com/projects/vaultwatch), a local backend/security workspace with a separate, smaller public showcase.
4. Read [QA Automation Lab](https://uzairwaseem.com/projects/qa-automation-lab) for browser/API contracts and failure evidence.
5. Expand Developer tools & more for DataProof, ContractLens, DocuMind and Theory Coach.
6. Download the [software engineering CV](https://uzairwaseem.com/Uzair-Waseem-CV.pdf).

## Public boundaries

- HouseFair: sample tour verified; full authenticated, upload, email and payment workflows need separate checks.
- Roster Command: selected public code and synthetic examples. The scheduling illustration explains overlapping intervals; it is not a live dashboard or availability guarantee.
- VaultWatch: local polyglot system, normally reviewed through scripted replay. Its public TypeScript showcase omits the full payment policy, durable case history and Go/Redis fusion.
- QA Lab: read-only live checks and separate isolated regression fixtures. Follow the owning repository's CI links for current results.
- DataProof and ContractLens: stateless data-quality and API-contract tools with documented scope.
- DocuMind: lexical evidence retrieval; optional generation requires the visitor's key.
- Theory Coach: public preview; account, database and payment health remain separate verification steps.

## What This Repository Demonstrates

- Next.js App Router implementation with semantic HTML and keyboard-visible focus states.
- Evidence-led case studies that distinguish live products, previews, demos and source extracts.
- Canonical metadata, Open Graph output, `Person` and `WebSite` JSON-LD, robots and sitemap routes.
- Responsive recruiter-path checks from 320px through desktop.
- Chromium and iPhone WebKit checks, automated accessibility audits and keyboard journeys.
- Content Security Policy and baseline browser security headers.
- A custom 404, reduced-motion support and accessible external-link labels.

## Architecture

```text
app/
  layout.tsx                   Global metadata and viewport configuration
  page.tsx                     Hiring page, project evidence and JSON-LD
  projects/[slug]/page.tsx     Five evidence-led case studies
  components/                  Shared navigation, footer and a labelled scheduling illustration
  not-found.tsx                Recruiter-friendly 404
  opengraph-image.tsx          Generated social preview
  robots.ts / sitemap.ts       Crawl configuration
public/                        Portrait, product screenshots, logo and CV
tests/                         Playwright mobile, accessibility, metadata and recruiter checks
scripts/generate_cv.py         Reproducible PDF generation
```

## Quality Gates

```bash
npm ci
npx playwright install chromium webkit
npm run qa
npm run audit
```

`npm run qa` runs ESLint, TypeScript, the production build, browser journeys, mobile overflow checks, the custom 404, CV delivery keyboard interaction, reduced-motion and no-JavaScript fallback, accessibility and SEO contracts. GitHub Actions uploads Playwright reports and failure evidence for review.

## Local Development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. The Playwright configuration starts its own production server on port 4173. Set `BASE_URL=https://uzairwaseem.com npx playwright test` to run the same read-only checks against the live site. The local HTTP harness removes only `upgrade-insecure-requests` from intercepted navigation responses so WebKit can load loopback assets. Live HTTPS checks use the full, unchanged security policy.

## CV Generation

Software, full-stack, backend, QA, support, security and platform CVs are generated from `scripts/generate_cv.py` and served from `public/`. The main download uses the software version; role-specific routes remain available so links already submitted to recruiters do not break.

The source of truth is `cv/profile.json`. Run `npm run cv:setup` once, `npm run cv:generate` to rebuild the public role variants, or follow `cv/TAILORING_GUIDE.md` to create a job-specific PDF, DOCX, plain-text copy and match report without inventing unsupported requirements.

```bash
python scripts/generate_cv.py
```

## Privacy And Accuracy

- The public portfolio does not publish a personal phone number or residential address.
- Public CVs state Stamp 1G expiry of 30 April 2028, confirmed by the candidate on 12 November 2026.
- Roster Command is labelled as an engineering extract, not a complete public application.
- VaultWatch uses synthetic data and distinguishes its Vercel replay showcase from the full Docker Compose architecture.
- Theory Test Coach is labelled as a public preview; paid transactions and learner traction are not claimed without evidence.
- Experience dates and titles require candidate confirmation before future changes.

## Contact

- Portfolio: [uzairwaseem.com](https://uzairwaseem.com)
- LinkedIn: [linkedin.com/in/uzair-waseem](https://www.linkedin.com/in/uzair-waseem/)
- GitHub: [github.com/Assembler-Fourier](https://github.com/Assembler-Fourier)
- Email: [uzairwaseem29@gmail.com](mailto:uzairwaseem29@gmail.com)
