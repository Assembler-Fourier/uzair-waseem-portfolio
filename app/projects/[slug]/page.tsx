import Image from "next/image";
import Link from "next/link";
import { Maximize2 } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";

const caseStudies = {
  vaultwatch: {
    title: "VaultWatch",
    label: "Polyglot AI and security operations system",
    repo: "https://github.com/Assembler-Fourier/vaultwatch",
    repoLabel: "Review source",
    live: "https://dashboard-web-three-sable.vercel.app",
    ci: "https://github.com/Assembler-Fourier/vaultwatch/actions/workflows/ci.yml",
    image: "/projects/vaultwatch-product.png",
    imageAlt:
      "VaultWatch operations dashboard showing a synthetic risk investigation trace and alert",
    imageMode: "visual-vault",
    evidence: [
      ["Architecture", "Four bounded services"],
      ["Modes", "Showcase and full stack"],
      ["Delivery", "Cross-language CI"],
      ["Boundary", "Synthetic data only"],
    ],
    architecture: [
      "Rust risk engine and audit chain",
      "Go authentication and anomaly gateway",
      "Python agent orchestration and event fusion",
      "Next.js operations dashboard",
    ],
    problem:
      "Transaction-risk tools and account-security tools often inspect separate streams. A suspicious transfer can therefore miss the login context that makes an account-takeover pattern visible.",
    role: "I designed and built the four-service architecture, shared event contracts, public showcase, deterministic replay path, integration workflow and cross-language CI around a synthetic-data-only boundary.",
    stack: [
      "Rust and Axum",
      "Go",
      "Python and FastAPI",
      "scikit-learn",
      "Anthropic SDK",
      "Next.js and TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker Compose",
      "GitHub Actions",
    ],
    features: [
      "Deterministic transaction rules and a statistical pre-filter before any model stage",
      "Tiered triage, tool-using investigation and synthetic compliance drafting",
      "Account-security event fusion for impossible-travel and brute-force signals",
      "Argon2id authentication with rotating refresh tokens and reuse detection",
      "Hash-chained audit records and a live reasoning trace",
    ],
    testing: [
      "CI runs Rust formatting, Clippy and tests; Go build, vet and tests; Python Ruff and Pytest; and Next.js lint and build",
      "The public showcase falls back to deterministic replay when no Anthropic key is present",
      "A complete Docker Compose run verifies real HTTP calls across the service boundary",
      "Integration verification exposed and fixed a Postgres JSON-serialization defect and stale WebSocket cleanup",
    ],
    deployment:
      "The live Vercel showcase is a self-contained TypeScript port that uses the same event shapes and can run without secrets. The full Rust, Go, Python, Postgres, Redis and Next.js system runs through Docker Compose for review.",
    security:
      "Every account, identity, transaction and entity graph is synthetic. The system includes adaptive password hashing, rotating JWT refresh tokens, rate limits, anomaly detection and a tamper-evident audit mechanism.",
    tradeoffs:
      "Showcase-mode audit history is held in serverless-instance memory and demonstrates the mechanism rather than durable storage. Durable Postgres case history and the file-backed Rust audit chain belong to the full Docker Compose mode.",
    next: [
      "Add a hosted full-stack environment with durable managed data stores",
      "Expand cross-service contract and failure-injection coverage",
      "Add traces and operational dashboards before any production-style rollout",
    ],
    proves:
      "Polyglot backend engineering, applied AI orchestration, security controls, event-driven integration and honest deployment boundaries.",
  },
  "roster-command": {
    title: "Roster Command",
    label: "Privacy-safe public engineering extract",
    repo: "https://github.com/Assembler-Fourier/employee-roster-command",
    repoLabel: "Review public extract",
    live: null,
    ci: "https://github.com/Assembler-Fourier/employee-roster-command/actions/workflows/ci.yml",
    image: "/projects/roster-command-product.png",
    imageAlt:
      "Roster Command read-only recruiter dashboard with synthetic workforce data",
    imageMode: "visual-roster",
    evidence: [
      ["Source", "Selected domain logic"],
      ["Delivery", "Automated GitHub Actions"],
      ["Quality", "23 Vitest checks"],
      ["Boundary", "Synthetic data only"],
    ],
    architecture: [
      "Synthetic input contracts",
      "Coverage and urgency engines",
      "Explainable deterministic ranking",
      "Vitest edge-case suite",
    ],
    problem:
      "A weekly spreadsheet process made it difficult to distinguish genuinely urgent coverage gaps from future planning work, explain who could cover safely, and keep manager actions auditable.",
    role: "I extracted, sanitised and documented the scheduling domain logic, then strengthened validation, deterministic ranking and edge-case coverage without publishing private operational code or data.",
    stack: [
      "TypeScript",
      "Vitest",
      "GitHub Actions",
      "Synthetic fixtures",
      "Domain modeling",
    ],
    features: [
      "Urgency ranking across critical, high, medium, planning, future and missed work",
      "Explainable cover suggestions using conflicts, holidays, recency and working patterns",
      "Employee lifecycle and site-restriction handling",
      "Deterministic tie-breaking with evidence for every suggested employee",
      "Strict invalid date/time and multi-day-shift handling",
    ],
    testing: [
      "Twenty-three tests cover overlap, overnight and multi-day shifts, invalid inputs and missing end times",
      "Fixtures cover duplicate records, same-name employees and stable tie-breaking",
      "Type checking and tests run together through the repository check command",
      "GitHub Actions runs the same public verification command",
    ],
    deployment:
      "The public repository is not the complete application. A sanitised capture documents the product boundary, while the operational deployment remains protected behind authentication; no public live product is claimed.",
    security:
      "No employer, employee or client records are included. Employee IDs, deduplication and synthetic fixtures reduce accidental identity ambiguity in the public examples.",
    tradeoffs:
      "The extract proves scheduling decisions and test quality, not the private application's full React, database, authentication or deployment implementation.",
    next: [
      "Add property-based coverage around interval boundaries",
      "Document additional anonymised decision examples",
      "Integrate the hardened domain package back into the private application after owner review",
    ],
    proves:
      "Privacy-aware extraction, scheduling domain modeling, explainable ranking and disciplined edge-case testing.",
  },
  housefair: {
    title: "HouseFair",
    label: "Flagship full-stack shared-living product",
    repo: "https://github.com/Assembler-Fourier/housefair-ai",
    repoLabel: "Review source",
    live: "https://housemates-sand.vercel.app",
    ci: "https://github.com/Assembler-Fourier/housefair-ai/actions/workflows/ci.yml",
    image: "/projects/housefair-product.jpg",
    imageAlt:
      "HouseFair mobile screens for chores, groceries, money and house planning",
    imageMode: "visual-house",
    evidence: [
      ["Release", "Free early access"],
      ["Delivery", "Automated GitHub Actions"],
      ["Quality", "Mobile Playwright suite"],
      ["Boundary", "Household-scoped data"],
    ],
    architecture: [
      "Next.js PWA",
      "Validated server routes",
      "Household access resolver",
      "PostgreSQL RLS and private storage",
    ],
    problem:
      "In a six-person home, chores, groceries, shared spending and house issues were scattered across chat and memory, making fairness difficult to see and even harder to discuss.",
    role: "I built the product end to end, then moved it from a single-house workflow to a multi-household system with authentication, scoped data access, private storage and a mobile-first PWA experience.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase Auth",
      "PostgreSQL and RLS",
      "Zod",
      "Stripe foundation",
      "Playwright",
      "Vercel",
    ],
    features: [
      "Recurring chores, swaps, carry-over and camera-based proof",
      "Shared groceries, shopping mode and restock suggestions",
      "Expense splits, IOUs, settlements, receipts and budgets",
      "Calmer reminder, cleanup request and formal issue paths",
      "Explainable, recommendation-only fairness planning",
    ],
    testing: [
      "The 12 November 2026 review passed twelve browser checks across Chromium mobile and WebKit iPhone configurations",
      "The focused review covered the sample tour, session isolation, protected-route redirects and unauthorised API responses",
      "GitHub Actions runs lint, production build and the mobile suite",
      "A successful CI run was recorded on 12 November 2026; use the CI link to inspect the current result",
    ],
    deployment:
      "Deployed on Vercel as a controlled free early-access build with an installable PWA shell.",
    security:
      "Every commercial request resolves the authenticated user, active household and membership. Zod validation, route authorization, rate limits, private Storage and PostgreSQL RLS create layered boundaries.",
    tradeoffs:
      "The public sample tour uses demonstration data. Full authenticated household, email, upload and billing workflows were not fully re-tested in the 12 November review. Paid access remains gated by further verification.",
    next: [
      "Complete physical-device install, camera and notification checks",
      "Add external error monitoring",
      "Finish paid-access operational verification",
    ],
    proves:
      "Full-stack product engineering across UX, transactions, household-scoped data, authentication, testing, PWA delivery and honest launch gates.",
  },
  "theory-test-coach": {
    title: "Irish Theory Test Coach",
    label: "Live deployed EdTech platform",
    repo: "https://github.com/Assembler-Fourier/irish-theory-test-coach",
    repoLabel: "Review source",
    live: "https://irishtheorycoach.ie",
    ci: "https://github.com/Assembler-Fourier/irish-theory-test-coach/actions/workflows/security.yml",
    image: "/projects/theory-test-coach-product.png",
    imageAlt:
      "Irish Theory Test Coach learner workspace with a protected preview question",
    imageMode: "visual-learning",
    evidence: [
      ["Content", "1,277 validated items"],
      ["Quality", "15 post-deploy checks"],
      ["Domain", "Custom URL active"],
      ["Boundary", "Independent product"],
    ],
    architecture: [
      "Static learner PWA",
      "Vercel Functions",
      "Neon PostgreSQL",
      "Stripe and private content adapters",
    ],
    problem:
      "Learner drivers need structured practice, useful revision feedback and trustworthy progress signals without exposing premium answers or relying on unsupported exam-frequency claims.",
    role: "I built the learner experience, content pipeline, serverless APIs, payment and passwordless-account adapters, operator tooling, automated QA and release documentation.",
    stack: [
      "Modern JavaScript",
      "Vercel Functions",
      "Neon PostgreSQL",
      "Stripe Checkout",
      "Passwordless sessions",
      "PWA",
      "Accessibility automation",
      "Node and Python QA tooling",
    ],
    features: [
      "Free preview, revision modes and server-generated timed mocks",
      "Answer coaching, flags, missed-question review and study recommendations",
      "Passwordless progress restoration and cross-device accounts",
      "Stripe learner passes and instructor-code workflows",
      "Role-protected operations, content QA, support and audit views",
    ],
    testing: [
      "The current pipeline validates 1,277 structured practice items",
      "Fifteen post-deploy smoke checks cover the public learner journey and release boundaries",
      "Payment policy, webhook and entitlement transitions pass mocked automated checks",
      "Mobile E2E checks cover learner, paywall, restore and legal routes",
      "Accessibility automation covers ten learner and account states",
    ],
    deployment:
      "The public product is live at irishtheorycoach.ie. It is an independent practice platform and is not affiliated with RSA or Prometric; this case study does not claim paid transactions or learner traction.",
    security:
      "Premium sessions are selected server-side, correct answers are withheld until submission, payments use signed idempotent webhooks, and admin endpoints enforce server-side roles.",
    tradeoffs:
      "The public frontend was checked on 12 November 2026. Database, authentication and payment health were not established in that review. Payment settlement, commercial usage and final legal/content review remain separate verification steps.",
    next: [
      "Complete legal and content-rights review",
      "Run and record a real Stripe test-mode purchase, webhook and reconciliation flow",
      "Configure production-only operator and database services before paid launch",
    ],
    proves:
      "End-to-end product delivery across UX, serverless architecture, data quality, payments, security, accessibility and release operations.",
  },
  "qa-automation-lab": {
    title: "QA Automation Lab",
    label: "Playwright release-contract suite",
    repo: "https://github.com/Assembler-Fourier/qa-automation-lab",
    repoLabel: "Review test suite",
    live: "https://github.com/Assembler-Fourier/qa-automation-lab/actions/workflows/ci.yml",
    ci: "https://github.com/Assembler-Fourier/qa-automation-lab/actions/workflows/ci.yml",
    image: "/projects/qa-automation-lab-product.png",
    imageAlt:
      "Playwright report showing QA Automation Lab release-contract results",
    imageMode: "visual-qa",
    evidence: [
      ["Coverage", "26 listed contracts"],
      ["Live policy", "Read-only checks"],
      ["UI", "Route-mocked regression"],
      ["Evidence", "Trace, media and HTML"],
    ],
    architecture: [
      "Environment URL fixtures",
      "Page objects and HTTP helpers",
      "API and mocked UI suites",
      "CI reports and failure artifacts",
    ],
    problem:
      "Public portfolios often drift: links fail, CVs disappear, live products change and API contracts break without a single release boundary detecting the regression.",
    role: "I designed the suite boundaries, fixtures, page objects, negative tests, route mocks, accessibility checks and CI jobs around public evidence that can be verified without private credentials.",
    stack: [
      "Playwright",
      "Node.js",
      "APIRequestContext",
      "axe-core",
      "GitHub Actions",
      "HTML reports",
    ],
    features: [
      "Mobile recruiter journey with stable role and label locators",
      "SEO, JSON-LD, PDF, security-header and 404 contracts",
      "Read-only live API smoke checks plus opt-in isolated writes",
      "Deterministic UI regression through network interception",
      "Data-driven filters and project case-study checks",
    ],
    testing: [
      "Twenty-six tests are listed across five focused files",
      "Thirteen local SecureTaskOps API/UI checks pass with isolated writes enabled",
      "Seven live read-only API checks pass while three write checks are intentionally skipped",
      "Dependency audit is available through the repository quality checks",
    ],
    deployment:
      "GitHub Actions separates local writable regression, live read-only smoke and portfolio/product contracts. Each job uploads HTML reports and failure evidence for 14 days.",
    security:
      "The suite contains no credentials, grants Actions read-only repository permissions and never enables mutation tests against the shared live deployment.",
    tradeoffs:
      "Public checks cannot verify private authentication, database isolation or payment settlement. Deep product tests remain in each owning repository.",
    next: [
      "Add authenticated storage-state reuse only when a dedicated non-production identity exists",
      "Introduce contract versioning when APIs gain stable published schemas",
      "Add scheduled availability checks after defining an incident ownership path",
    ],
    proves:
      "QA automation across browser journeys, API contracts, accessibility, controlled test data, failure triage and CI evidence.",
  },
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
    alternates: { canonical: `https://uzairwaseem.com/projects/${slug}` },
    openGraph: {
      title: `${study.title} | Uzair Waseem`,
      description: study.proves,
      url: `https://uzairwaseem.com/projects/${slug}`,
      type: "article",
      images: [{ url: study.image, alt: study.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Uzair Waseem`,
      description: study.proves,
      images: [study.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const study = caseStudies[slug as keyof typeof caseStudies];
  if (!study) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CreativeWork",
                name: study.title,
                description: study.proves,
                url: `https://uzairwaseem.com/projects/${slug}`,
                image: `https://uzairwaseem.com${study.image}`,
                author: {
                  "@type": "Person",
                  "@id": "https://uzairwaseem.com/#person",
                  name: "Uzair Waseem",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://uzairwaseem.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: study.title,
                    item: `https://uzairwaseem.com/projects/${slug}`,
                  },
                ],
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#content">
        Skip to main content
      </a>
      <SiteHeader rootHref="/" sectionPrefix="/" />
      <main id="content" className="case-page">
        <section className="case-hero">
          <div className="shell case-hero-grid">
            <div className="case-hero-copy">
              <Link className="case-back" href="/#work">
                Back to selected work
              </Link>
              <p className="intro-label">{study.label}</p>
              <h1>{study.title}</h1>
              <p>{study.proves}</p>
              <div className="case-actions">
                {study.live ? (
                  <a
                    href={study.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {study.title === "QA Automation Lab"
                      ? "View test runs"
                      : study.title === "VaultWatch"
                        ? "Open showcase"
                        : "Open live product"}
                  </a>
                ) : null}
                <a href={study.repo} target="_blank" rel="noopener noreferrer">
                  {study.repoLabel}
                </a>
                <a href={study.ci} target="_blank" rel="noopener noreferrer">
                  Inspect CI
                </a>
              </div>
            </div>
            <div className={`case-hero-media ${study.imageMode}`}>
              <div className="product-window">
                <div className="product-window-bar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <strong>{study.title}</strong>
                  <Maximize2 size={14} />
                </div>
                <div className="product-window-screen">
                  <Image
                    className="product-shot"
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    priority
                    quality={85}
                    sizes="(max-width: 860px) calc(100vw - 56px), 520px"
                  />
                </div>
              </div>
              <div className="case-media-caption">
                <span>
                  {study.title === "Roster Command"
                    ? "Sanitised product view"
                    : "Actual product"}
                </span>
                <strong>{study.title}</strong>
              </div>
            </div>
          </div>
        </section>
        <section className="section case-content">
          <div className="shell">
            <div
              className="case-proof-grid"
              aria-label={`${study.title} evidence summary`}
            >
              {study.evidence.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <CaseHeading
              number="01"
              title="Context and ownership"
              text="The problem, the decisions I owned and the boundary of my contribution."
            />
            <div className="case-two-column">
              <CasePanel title="Problem" text={study.problem} />
              <CasePanel title="My role" text={study.role} />
            </div>

            <CaseHeading
              number="02"
              title="System and engineering decisions"
              text="A recruiter-readable map of the product path, followed by the implementation choices behind it."
            />
            <div className="case-system-grid">
              <div
                className="architecture-map"
                aria-label={`${study.title} architecture flow`}
              >
                {study.architecture.map((item, index) => (
                  <div key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
              <CasePanel title="Key product decisions" items={study.features} />
            </div>
            <ul
              className="case-stack"
              aria-label={`${study.title} technology stack`}
            >
              {study.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <CaseHeading
              number="03"
              title="Verification and release boundary"
              text="How the build is checked, delivered and kept honest about what is production-ready."
            />
            <div className="case-two-column">
              <CasePanel title="Automated verification" items={study.testing} />
              <div className="case-panel-stack">
                <CasePanel title="Deployment" text={study.deployment} />
                <CasePanel title="Security" text={study.security} />
              </div>
            </div>

            <CaseHeading
              number="04"
              title="Tradeoffs and next work"
              text="What remains incomplete is shown deliberately, because engineering judgment includes knowing what not to claim."
            />
            <div className="case-two-column">
              <CasePanel title="Current tradeoffs" text={study.tradeoffs} />
              <CasePanel title="Next improvements" items={study.next} />
            </div>

            <div className="case-closing">
              <span>What this proves</span>
              <h2>{study.proves}</h2>
              <div className="case-actions">
                {study.live ? (
                  <a
                    href={study.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try the product
                  </a>
                ) : null}
                <a href={study.repo} target="_blank" rel="noopener noreferrer">
                  Read the code
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function CaseHeading({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="case-section-heading">
      <span>{number}</span>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

function CasePanel({
  title,
  text,
  items,
}: {
  title: string;
  text?: string;
  items?: string[];
}) {
  return (
    <article className="case-panel">
      <h3>{title}</h3>
      {text ? <p>{text}</p> : null}
      {items ? (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
