import Link from "next/link";
import { notFound } from "next/navigation";

const caseStudies = {
  "roster-command": {
    title: "Roster Command",
    label: "Flagship workforce operations product",
    repo: "https://github.com/Assembler-Fourier/employee-roster-command",
    live: "https://employee-roster-command.vercel.app/?demo=1",
    problem:
      "A weekly spreadsheet process made it difficult to distinguish genuinely urgent coverage gaps from future planning work, explain who could cover safely, and keep manager actions auditable.",
    role:
      "I designed and built the manager command centre, scheduling domain logic, employee experience, scoped APIs, import workflows, testing strategy, privacy boundary and Vercel delivery path.",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Node.js serverless APIs",
      "Supabase PostgreSQL",
      "Vitest",
      "Playwright",
      "GitHub Actions",
      "PWA"
    ],
    features: [
      "Urgency ranking across critical, high, medium, planning, future and missed work",
      "Explainable cover suggestions using conflicts, holidays, recency and working patterns",
      "Weekly planner plus employee, site, holiday, communication and review workflows",
      "Separate mobile employee route with scoped visibility and shift controls",
      "Read-only roster import with staged diffs, normalization and audit records"
    ],
    testing: [
      "Unit tests cover yellow rows, workflow timing, lead time, overlap, holidays and specialist behavior",
      "The public demo test rejects mutation attempts",
      "CI runs type checking, lint, tests and a production build",
      "The latest public GitHub Actions run is passing"
    ],
    deployment:
      "The same Vercel application supports the private manager system and a locked recruiter demo. Use demo@rostercommand.app with password threadstone-demo for the synthetic, read-only path.",
    security:
      "Opaque HttpOnly sessions, CSRF protection, SameSite cookies, rate limits and role checks protect the private workflow. Demo routing branches before database initialization, serves bundled synthetic data and rejects writes server-side.",
    tradeoffs:
      "Operational records and provider credentials stay private. The public repository contains privacy-scrubbed history, selected production domain code, synthetic fixtures, tests and architecture notes rather than exposing workforce data.",
    next: [
      "Expand browser coverage for manager exception workflows",
      "Add external error monitoring and service-level alerts",
      "Continue simplifying dense planner states on small screens"
    ],
    proves:
      "A real operational problem taken through product design, domain modeling, privacy-aware architecture, automated testing and live delivery."
  },
  housefair: {
    title: "HouseFair",
    label: "Full-stack shared-living SaaS",
    repo: "https://github.com/Assembler-Fourier/housefair-ai",
    live: "https://housemates-sand.vercel.app",
    problem:
      "In a six-person home, chores, groceries, shared spending and house issues were scattered across chat and memory, making fairness difficult to see and even harder to discuss.",
    role:
      "I built the product end to end, then moved it from a single-house workflow to a multi-household system with authentication, scoped data access, private storage and a mobile-first PWA experience.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase Auth",
      "PostgreSQL and RLS",
      "Zod",
      "Stripe foundation",
      "Playwright",
      "Vercel"
    ],
    features: [
      "Recurring chores, swaps, carry-over and camera-based proof",
      "Shared groceries, shopping mode and restock suggestions",
      "Expense splits, IOUs, settlements, receipts and budgets",
      "Calmer reminder, cleanup request and formal issue paths",
      "Explainable, recommendation-only fairness planning"
    ],
    testing: [
      "Mobile Playwright coverage runs across Android and iPhone PWA viewports",
      "Regression paths cover identity, tasks, proof, groceries, money, notifications and settings",
      "GitHub Actions runs lint, production build and the mobile suite",
      "The latest CI run is passing"
    ],
    deployment:
      "Deployed on Vercel as a controlled free early-access build with an installable PWA shell.",
    security:
      "Every commercial request resolves the authenticated user, active household and membership. Zod validation, route authorization, rate limits, private Storage and PostgreSQL RLS create layered boundaries.",
    tradeoffs:
      "Paid access remains off until SMTP, full Stripe test-mode verification, legal copy, external monitoring and physical-device checks are complete.",
    next: [
      "Complete physical-device install, camera and notification checks",
      "Add external error monitoring",
      "Finish paid-access operational verification"
    ],
    proves:
      "Full-stack product engineering across UX, transactions, household-scoped data, authentication, testing, PWA delivery and honest launch gates."
  },
  "theory-test-coach": {
    title: "Irish Theory Test Coach",
    label: "Pre-launch EdTech product",
    repo: "https://github.com/Assembler-Fourier/irish-theory-test-coach",
    live: "https://irish-theory-test-coach-assembler-fourier-job-work.vercel.app",
    problem:
      "Learner drivers need structured practice, useful revision feedback and trustworthy progress signals without exposing premium answers or relying on unsupported exam-frequency claims.",
    role:
      "I built the product design, learner experience, content pipeline, serverless APIs, database model, payment flows, passwordless accounts, operator tooling, automated QA and deployment evidence.",
    stack: [
      "Modern JavaScript",
      "Vercel Functions",
      "Neon PostgreSQL",
      "Stripe Checkout",
      "Passwordless sessions",
      "PWA",
      "Accessibility automation",
      "Node and Python QA tooling"
    ],
    features: [
      "Free preview, revision modes and server-generated timed mocks",
      "Answer coaching, flags, missed-question review and study recommendations",
      "Passwordless progress restoration and cross-device accounts",
      "Stripe learner passes and instructor-code workflows",
      "Role-protected operations, content QA, support and audit views"
    ],
    testing: [
      "The current pipeline validates 1,277 structured practice items",
      "18 of 18 Stripe sandbox scenarios pass",
      "11 of 11 post-deploy checks pass",
      "Accessibility checks cover seven product states with no critical axe findings in the latest audit"
    ],
    deployment:
      "The full commercial build is available as a Vercel preview using Stripe sandbox payments. It is an independent practice product and is not affiliated with RSA or Prometric.",
    security:
      "Premium sessions are selected server-side, correct answers are withheld until submission, payments use signed idempotent webhooks, and admin endpoints enforce server-side roles.",
    tradeoffs:
      "Production promotion is deliberately gated on custom-domain activation, credential rotation and legal/content review. The website does not claim official exam frequency or guaranteed outcomes.",
    next: [
      "Complete legal and content-rights review",
      "Activate and verify the custom domain",
      "Rotate final production credentials before promotion"
    ],
    proves:
      "End-to-end product delivery across UX, serverless architecture, data quality, payments, security, accessibility and release operations."
  }
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export const dynamicParams = false;

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const study = caseStudies[slug as keyof typeof caseStudies];
  if (!study) return {};

  return {
    title: `${study.title} | Uzair Waseem Project Case Study`,
    description: `${study.title} case study by Uzair Waseem: ${study.proves}`,
    alternates: { canonical: `https://uzairwaseem.com/projects/${slug}` }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const study = caseStudies[slug as keyof typeof caseStudies];
  if (!study) notFound();

  return (
    <main className="case-page">
      <section className="case-hero">
        <div className="shell case-shell">
          <Link className="case-back" href="/#work">Back to selected work</Link>
          <p className="intro-label">{study.label}</p>
          <h1>{study.title}</h1>
          <p>{study.proves}</p>
          <div className="case-actions">
            <a href={study.live} target="_blank" rel="noopener noreferrer">Open live product</a>
            <a href={study.repo} target="_blank" rel="noopener noreferrer">Review source</a>
          </div>
        </div>
      </section>
      <section className="section case-content">
        <div className="shell case-grid">
          <CaseBlock title="Problem" text={study.problem} />
          <CaseBlock title="My Role" text={study.role} />
          <CaseBlock title="Technology" items={study.stack} />
          <CaseBlock title="Key Features" items={study.features} />
          <CaseBlock title="Testing" items={study.testing} />
          <CaseBlock title="Deployment" text={study.deployment} />
          <CaseBlock title="Security" text={study.security} />
          <CaseBlock title="Tradeoffs" text={study.tradeoffs} />
          <CaseBlock title="Next Improvements" items={study.next} />
          <CaseBlock title="What This Proves" text={study.proves} />
        </div>
      </section>
    </main>
  );
}

function CaseBlock({ title, text, items }: { title: string; text?: string; items?: string[] }) {
  return (
    <article className="case-card">
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
      {items ? <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
    </article>
  );
}
