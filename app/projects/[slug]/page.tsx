import Link from "next/link";
import { notFound } from "next/navigation";

const caseStudies = {
  securetaskops: {
    title: "SecureTaskOps Workflow Platform",
    label: "Flagship backend workflow build",
    repo: "https://github.com/Assembler-Fourier/securetaskops-workflow-platform",
    live: "",
    problem:
      "Recruiters and engineering managers need more than a polished project card. They need runnable code, tests, CI, Docker instructions, security notes and a clear roadmap.",
    role:
      "Designed and built the current Node.js workflow API, risk/readiness scoring, tests, Docker setup, GitHub Actions workflow, README and security notes.",
    stack: ["Node.js", "REST APIs", "Docker", "GitHub Actions", "Node test runner", "JavaScript"],
    features: [
      "Workflow task API with seeded data",
      "Risk scoring for severity, blockers, due dates and security-sensitive items",
      "Release-readiness summary endpoint",
      "Validation errors for invalid task creation",
      "Docker and CI-ready setup"
    ],
    testing: [
      "Domain tests for validation, filtering, release summary and risk scoring",
      "QA Automation Lab Playwright API tests run against this API",
      "CI workflow runs syntax checks and tests"
    ],
    deployment:
      "Current version is repository proof, not a hosted production app. Backend/frontend/database deployment is tracked in the Proof v1 GitHub issues.",
    security:
      "Current notes cover validation, secrets handling and risk-aware modeling. Authentication, role-based access and audit logging are planned issues before production-style claims are made.",
    tradeoffs:
      "Uses in-memory sample data to keep reviewer setup fast. PostgreSQL persistence, auth and UI are intentionally not claimed yet.",
    next: [
      "Add PostgreSQL and Prisma",
      "Add authentication and role-based access",
      "Add Swagger/OpenAPI docs",
      "Deploy backend, frontend and database",
      "Add screenshots and demo credentials"
    ],
    proves:
      "Backend API structure, testable domain logic, Docker/CI awareness, honest documentation and a roadmap toward production-style software."
  },
  sentryscan: {
    title: "SentryScan Threat Monitoring",
    label: "Security-aware backend prototype",
    repo: "https://github.com/Assembler-Fourier/sentryscan-threat-monitoring",
    live: "",
    problem:
      "Security-event payloads are hard to triage when alerts arrive without normalized fields, explainable risk scoring or review status.",
    role:
      "Built and documented a FastAPI-style security-event triage prototype that connects software engineering with cybersecurity-aware thinking.",
    stack: ["Python", "FastAPI", "Risk scoring", "Security event modeling", "Testing"],
    features: [
      "Event normalization concept",
      "Rule-based risk scoring",
      "Severity explanations",
      "Security-aware README framing",
      "Roadmap for PostgreSQL, notes and status tracking"
    ],
    testing: [
      "Current prototype has test-focused scoring logic",
      "Proof v1 issues track Pytest coverage for ingestion, scoring, status and dashboard behavior"
    ],
    deployment:
      "Not currently deployed. Deployment is planned after PostgreSQL persistence, API coverage and example payload documentation are implemented.",
    security:
      "The project is framed as a triage prototype, not a SOC platform. Security notes avoid overstating production readiness.",
    tradeoffs:
      "Keeps the cybersecurity angle practical and software-focused instead of pretending senior security operations experience.",
    next: [
      "Add PostgreSQL and SQLAlchemy models",
      "Add event ingestion and triage notes",
      "Add dashboard summary and filters",
      "Add Docker Compose and GitHub Actions",
      "Deploy API and add screenshots"
    ],
    proves:
      "FastAPI backend thinking, security-event modeling, explainable scoring and the MSc Cybersecurity differentiator inside software engineering."
  },
  "qa-automation-lab": {
    title: "QA Automation Lab",
    label: "Testing proof repo",
    repo: "https://github.com/Assembler-Fourier/qa-automation-lab",
    live: "",
    problem:
      "Testing claims are weak unless reviewers can see executable tests, CI behavior, reports and clear limitations.",
    role:
      "Created a Playwright API testing repo that targets SecureTaskOps and documents the test strategy, CI flow and future auth/CRUD/role coverage.",
    stack: ["Playwright", "APIRequestContext", "GitHub Actions", "JavaScript", "HTML reports"],
    features: [
      "Health endpoint smoke test",
      "Task API response-shape checks",
      "Severity filter test",
      "Release-readiness endpoint test",
      "Validation error test",
      "Valid task creation test"
    ],
    testing: [
      "6 Playwright API tests pass locally against SecureTaskOps",
      "GitHub Actions workflow starts SecureTaskOps and runs the QA suite",
      "HTML report artifact upload configured"
    ],
    deployment:
      "This is a testing repository, not a deployed app. Its CI is the primary proof surface.",
    security:
      "Role and auth tests are planned after SecureTaskOps implements authentication and role-based access.",
    tradeoffs:
      "Current tests target the API that exists today. The README clearly marks auth, CRUD UI and role tests as future work.",
    next: [
      "Add auth flow tests",
      "Add project/task CRUD tests",
      "Add role restriction tests",
      "Add browser smoke tests",
      "Add report screenshots to README"
    ],
    proves:
      "Practical QA automation, API testing, CI report thinking and honest dependency between test coverage and app capability."
  },
  portfolio: {
    title: "Portfolio Website",
    label: "Recruiter proof hub",
    repo: "https://github.com/Assembler-Fourier/uzair-waseem-portfolio",
    live: "https://uzairwaseem.com",
    problem:
      "The public profile needed to stop sounding broad and start giving recruiters a fast, consistent proof path.",
    role:
      "Built and deployed the Next.js portfolio, CV download flow, SEO metadata, contact actions and project proof structure.",
    stack: ["Next.js", "React", "TypeScript", "CSS", "Vercel", "SEO metadata"],
    features: [
      "Focused Ireland-based software engineering positioning",
      "ATS CV download",
      "GitHub and LinkedIn links",
      "Proof-focused project cards",
      "Structured metadata, sitemap and robots"
    ],
    testing: [
      "Production build passes",
      "Live domain and CV download verified after deployment",
      "PDF page count and link extraction checked locally"
    ],
    deployment:
      "Deployed on Vercel and aliased to uzairwaseem.com.",
    security:
      "Static portfolio with no user data collection. External links use safe target attributes where relevant.",
    tradeoffs:
      "The site is intentionally compact. Deep proof belongs in case studies and repositories rather than a bloated homepage.",
    next: [
      "Add screenshots from each flagship project",
      "Add live demo links when backends are deployed",
      "Add case-study metrics only when real numbers exist"
    ],
    proves:
      "Clear positioning, public deployment, technical SEO basics, recruiter workflow and consistency across CV/GitHub/LinkedIn."
  }
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug as keyof typeof caseStudies];
  if (!study) return {};

  return {
    title: `${study.title} | Uzair Waseem Project Case Study`,
    description: `${study.title} case study for Uzair Waseem: ${study.proves}`
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug as keyof typeof caseStudies];
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
            <a href={study.repo} target="_blank" rel="noopener noreferrer">View GitHub repo</a>
            {study.live ? <a href={study.live} target="_blank" rel="noopener noreferrer">Open live site</a> : null}
          </div>
        </div>
      </section>
      <section className="section case-content">
        <div className="shell case-grid">
          <CaseBlock title="Problem" text={study.problem} />
          <CaseBlock title="My Role" text={study.role} />
          <CaseBlock title="Tech Stack" items={study.stack} />
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
      {items ? (
        <ul>
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      ) : null}
    </article>
  );
}
