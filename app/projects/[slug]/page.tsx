import Link from "next/link";
import { notFound } from "next/navigation";

const caseStudies = {
  securetaskops: {
    title: "SecureTaskOps Workflow Platform",
    label: "Deployed workflow dashboard",
    repo: "https://github.com/Assembler-Fourier/securetaskops-workflow-platform",
    live: "https://securetaskops-workflow-platform.vercel.app/",
    problem:
      "Small teams need a fast way to see blockers, security-sensitive work and release readiness before shipping.",
    role:
      "Built the dashboard, Node.js request handler, Vercel deployment, API routes, risk/readiness scoring, tests, Docker setup, GitHub Actions workflow, README and security notes.",
    stack: ["Node.js", "REST APIs", "Dashboard", "Vercel", "Docker", "GitHub Actions", "JavaScript"],
    features: [
      "Public dashboard for release signal, filters and workflow queue",
      "Workflow task API with seeded demo data",
      "Task creation form backed by API validation",
      "Risk scoring for severity, blockers, due dates and security-sensitive items",
      "Release-readiness summary endpoint",
      "Docker and CI-ready setup",
      "Live Vercel deployment"
    ],
    testing: [
      "Domain tests for validation, filtering, release summary and risk scoring",
      "QA Automation Lab Playwright API tests run against this API",
      "CI workflow runs syntax checks and tests",
      "Production smoke checks verified dashboard, API endpoints and task creation"
    ],
    deployment:
      "Deployed on Vercel at securetaskops-workflow-platform.vercel.app with a static dashboard and Node/Vercel API surface.",
    security:
      "Validation, secrets handling and risk-aware modeling are implemented/documented. Authentication, role-based access and audit logging remain planned hardening work.",
    tradeoffs:
      "Uses runtime demo data to keep the live app public and easy to review. PostgreSQL persistence, auth and RBAC are intentionally listed as next hardening steps.",
    next: [
      "Add PostgreSQL and Prisma",
      "Add authentication and role-based access",
      "Add audit logs and role-specific views",
      "Add browser smoke tests",
      "Add OpenAPI documentation"
    ],
    proves:
      "Deployed product demo, backend API structure, testable domain logic, Docker/CI awareness, honest documentation and a practical roadmap toward production hardening."
  },
  sentryscan: {
    title: "SentryScan Threat Monitoring",
    label: "Live FastAPI security triage demo",
    repo: "https://github.com/Assembler-Fourier/sentryscan-threat-monitoring",
    live: "https://sentryscan-threat-monitoring.vercel.app/",
    problem:
      "Security-event payloads are hard to triage when alerts arrive without normalized fields, explainable risk scoring or review status.",
    role:
      "Built and documented a FastAPI-style security-event triage prototype that connects software engineering with cybersecurity-aware thinking.",
    stack: ["Python", "FastAPI", "Dashboard", "Risk scoring", "Security event modeling", "Testing"],
    features: [
      "Live dashboard for ranked event triage",
      "FastAPI health, docs and ranking endpoint",
      "Event normalization concept",
      "Rule-based risk scoring",
      "Severity explanations",
      "Security-aware README framing",
      "Roadmap for PostgreSQL, notes and status tracking"
    ],
    testing: [
      "Current prototype has test-focused scoring logic",
      "Production smoke checks verified dashboard, docs, health and POST ranking endpoint",
      "Proof v1 issues track Pytest coverage for ingestion, scoring, status and dashboard behavior"
    ],
    deployment:
      "Deployed on Vercel at sentryscan-threat-monitoring.vercel.app with a FastAPI app serving the dashboard, /docs, /health and /events/rank.",
    security:
      "The project is framed as a triage prototype, not a SOC platform. Security notes avoid overstating production readiness.",
    tradeoffs:
      "Keeps the cybersecurity angle practical and software-focused instead of pretending senior security operations experience or SOC-grade detection accuracy.",
    next: [
      "Add PostgreSQL and SQLAlchemy models",
      "Add event ingestion and triage notes",
      "Add dashboard summary and filters",
      "Add Docker Compose and GitHub Actions",
      "Add production screenshots"
    ],
    proves:
      "Live FastAPI deployment, security-event modeling, explainable scoring and the MSc Cybersecurity differentiator inside software engineering."
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
  documind: {
    title: "DocuMind RAG Assistant",
    label: "Live FastAPI retrieval demo",
    repo: "https://github.com/Assembler-Fourier/documind-rag-assistant",
    live: "https://documind-rag-assistant.vercel.app/",
    problem:
      "Internal notes are hard to use when answers need supporting source context instead of loose summaries.",
    role:
      "Built a Python/FastAPI document retrieval assistant that chunks Markdown knowledge, ranks relevant context and returns grounded answer drafts with visible citations.",
    stack: ["Python", "FastAPI", "RAG", "Document retrieval", "Ranking", "Citations", "Unit tests"],
    features: [
      "Live browser demo for retrieval questions",
      "FastAPI health, docs and answer endpoint",
      "Markdown knowledge-base loader",
      "Document chunking by heading and paragraph",
      "Lightweight term-vector ranking",
      "Top context snippets with source citations",
      "Grounded answer draft that separates evidence from generated wording"
    ],
    testing: [
      "Unit tests cover release-readiness retrieval",
      "Unit tests verify citations are returned",
      "Production smoke checks verified dashboard, docs, health and POST answer endpoint",
      "Package structure supports future evaluation and model-provider wiring"
    ],
    deployment:
      "Deployed on Vercel at documind-rag-assistant.vercel.app with a FastAPI app serving the dashboard, /docs, /health and /answer.",
    security:
      "Uses local sample knowledge files and no secrets. Future LLM/provider integration should add environment-based secrets and data-handling controls.",
    tradeoffs:
      "Uses a transparent local retriever instead of pretending to be a production vector database or enterprise LLM assistant.",
    next: [
      "Add vector database integration",
      "Add retrieval quality metrics",
      "Add model-provider abstraction",
      "Add sample evaluation report"
    ],
    proves:
      "AI/data engineering fundamentals: document chunking, retrieval ranking, citation handling, testable RAG workflow design and honest limitations."
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
    description: `${study.title} case study for Uzair Waseem: ${study.proves}`,
    alternates: {
      canonical: `https://uzairwaseem.com/projects/${slug}`
    }
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
