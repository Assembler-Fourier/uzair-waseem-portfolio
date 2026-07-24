import Image from "next/image";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Boxes,
  Braces,
  Bug,
  CheckCircle2,
  Code2,
  Database,
  Download,
  GraduationCap,
  GitBranch,
  Mail,
  MapPin,
  Maximize2,
  ServerCog,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import DeliverySystemScene from "./components/DeliverySystemScene";
import EngineeringScene from "./components/EngineeringScene";
import { SiteHeader } from "./components/SiteHeader";

const siteUrl = "https://uzairwaseem.com";

const contact = {
  email: "uzairwaseem29@gmail.com",
  cv: "/Uzair-Waseem-CV.pdf",
  linkedin: "https://www.linkedin.com/in/uzair-waseem",
  github: "https://github.com/Assembler-Fourier"
};

const stackChips = [
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Rust",
  "Go",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Playwright",
  "Docker",
  "CI/CD",
  "Secure SDLC"
];

const proofItems = [
  ["Location", "Dublin, Ireland"],
  ["Product proof", "4 reviewable projects"],
  ["Backend", "Rust + Go + Python"],
  ["Quality", "Cross-language CI"],
  ["Education", "MSc Cybersecurity"],
  ["Work status", "Stamp 1G · immediate"]
];

const deliveryStages = [
  {
    icon: Boxes,
    number: "01",
    title: "Interface",
    stack: "React + Next.js",
    detail: "Role-aware product workflows"
  },
  {
    icon: Braces,
    number: "02",
    title: "Services",
    stack: "Rust + Go + Python",
    detail: "Typed APIs and bounded responsibilities"
  },
  {
    icon: Database,
    number: "03",
    title: "Data",
    stack: "PostgreSQL + Redis",
    detail: "Durable state and event delivery"
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Quality",
    stack: "Tests + multi-language CI",
    detail: "Automated verification at each layer"
  },
  {
    icon: ServerCog,
    number: "05",
    title: "Delivery",
    stack: "Docker Compose + Vercel",
    detail: "Reviewable full and showcase modes"
  }
];

const companies = [
  {
    name: "Outstanding Marketing",
    url: "https://outstanding-marketing.de/en"
  },
  {
    name: "LocalhostLabs",
    url: "https://localhostlabs.tech"
  }
];

const projects = [
  {
    title: "VaultWatch",
    category: "Security + AI · Polyglot operations platform",
    visual: "vault",
    summary:
      "Built a four-service fraud and account-security platform that escalates synthetic transactions from deterministic checks to agentic investigation.",
    outcome:
      "The public replay makes the reasoning path inspectable; the full Docker Compose mode connects Rust, Go, Python and Next.js through Postgres and Redis.",
    proof:
      "Cross-language GitHub Actions runs Rust, Go, Python and Next.js checks; integration runs surfaced real persistence and WebSocket defects.",
    status: "Live synthetic showcase · Full stack via Docker Compose",
    image: "/projects/vaultwatch-product.png",
    imageAlt: "VaultWatch operations dashboard showing a synthetic risk investigation trace and alert",
    imageMode: "dashboard",
    evidence: [
      ["Architecture", "4 services"],
      ["CI", "Passing"],
      ["Modes", "Showcase + full"]
    ],
    ci: "https://github.com/Assembler-Fourier/vaultwatch/actions/workflows/ci.yml",
    stack: ["Rust", "Go", "FastAPI", "Next.js", "PostgreSQL", "Redis", "Docker"],
    repository: "https://github.com/Assembler-Fourier/vaultwatch",
    live: "https://dashboard-web-three-sable.vercel.app",
    primaryLabel: "Live showcase",
    sourceLabel: "Source",
    caseStudy: "/projects/vaultwatch"
  },
  {
    title: "HouseFair",
    category: "Full-stack product · Shared living",
    visual: "house",
    summary:
      "Built a mobile-first household workspace for recurring chores, groceries, shared expenses and calmer issue reporting.",
    outcome:
      "The early-access build scopes household data by membership and delivers shared-living workflows through an installable PWA.",
    proof:
      "Next.js 16, React 19, TypeScript, Supabase Auth/PostgreSQL/RLS, Zod, Playwright and GitHub Actions.",
    status: "Live product · Free early access",
    image: "/projects/housefair-product.jpg",
    imageAlt: "HouseFair mobile product screens for chores, groceries, shared money and house planning",
    imageMode: "contact-sheet",
    evidence: [
      ["Release", "Early access"],
      ["CI", "Passing"],
      ["Coverage", "12 mobile E2E"]
    ],
    ci: "https://github.com/Assembler-Fourier/housefair-ai/actions/workflows/ci.yml",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Playwright", "PWA"],
    repository: "https://github.com/Assembler-Fourier/housefair-ai",
    live: "https://housemates-sand.vercel.app",
    primaryLabel: "Live app",
    sourceLabel: "Source",
    caseStudy: "/projects/housefair"
  },
  {
    title: "Irish Theory Test Coach",
    category: "Live EdTech · Serverless product",
    visual: "learning",
    summary:
      "Designed and deployed an independent Category B practice product with timed mocks, road-sign drills, weak-area review and account-access flows.",
    outcome:
      "The public release is live on its custom domain, backed by 1,277 practice items and a 15-check post-deploy smoke suite.",
    proof:
      "Vercel Functions, protected learner and operator routes, passwordless sessions, PWA, accessibility checks and content QA.",
    status: "Live deployed product · Independent practice platform",
    image: "/projects/theory-test-coach-product.png",
    imageAlt: "Irish Theory Test Coach desktop practice workspace with secure preview questions",
    imageMode: "dashboard",
    evidence: [
      ["Content", "1,277 items"],
      ["QA", "15 smoke checks"],
      ["Release", "Live"]
    ],
    ci: "https://github.com/Assembler-Fourier/irish-theory-test-coach/actions/workflows/security.yml",
    stack: ["JavaScript", "Neon", "Stripe", "Security", "Accessibility", "PWA"],
    repository: "https://github.com/Assembler-Fourier/irish-theory-test-coach",
    live: "https://irishtheorycoach.ie",
    primaryLabel: "Live product",
    sourceLabel: "Source",
    caseStudy: "/projects/theory-test-coach"
  },
  {
    title: "Roster Command",
    category: "Public engineering extract · Workforce operations",
    visual: "roster",
    summary:
      "Published selected, sanitised scheduling logic from a private roster system without exposing employer or employee data.",
    outcome:
      "The extract demonstrates deterministic cover ranking, overlap handling, availability rules and explainable decisions across edge cases.",
    proof:
      "TypeScript domain modules, synthetic fixtures, 23 Vitest checks, architecture notes and GitHub Actions.",
    status: "Public engineering extract · Synthetic data only",
    image: "/projects/roster-command-product.png",
    imageAlt: "Roster Command recruiter demo showing a synthetic read-only workforce operations dashboard",
    imageMode: "dashboard",
    evidence: [
      ["Boundary", "Sanitised extract"],
      ["CI", "Passing"],
      ["Tests", "23 passing"]
    ],
    ci: "https://github.com/Assembler-Fourier/employee-roster-command/actions/workflows/ci.yml",
    stack: ["TypeScript", "Vitest", "Domain modeling", "CI", "Synthetic data"],
    repository: "https://github.com/Assembler-Fourier/employee-roster-command",
    live: null,
    primaryLabel: null,
    sourceLabel: "Public engineering extract",
    caseStudy: "/projects/roster-command"
  }
];

const roles = [
  {
    icon: Code2,
    title: "Full-stack / Backend Engineer",
    fit: "Product UI, APIs, data models and server-side workflows built as one coherent system.",
    tools: "TypeScript, React, Next.js, Node.js, Python, REST APIs, PostgreSQL",
    proof: "VaultWatch, HouseFair and Irish Theory Test Coach"
  },
  {
    icon: BrainCircuit,
    title: "Applied AI / Security Systems Engineer",
    fit: "Cost-aware agent workflows, deterministic risk gates and explainable security operations interfaces.",
    tools: "Python, FastAPI, scikit-learn, Anthropic SDK, Rust, Go, Redis, WebSockets",
    proof: "VaultWatch plus an MSc Cybersecurity"
  },
  {
    icon: Bug,
    title: "QA Automation Engineer",
    fit: "UI and API checks, regression coverage, release gates and failure-focused product thinking.",
    tools: "Playwright, Vitest, Pytest, API testing, accessibility, GitHub Actions",
    proof: "QA Automation Lab, mobile regression suites and cross-language CI"
  },
  {
    icon: ServerCog,
    title: "Platform / Cloud Foundations",
    fit: "Containerised services, event-driven integration and infrastructure code with explicit deployment boundaries.",
    tools: "Docker Compose, Kubernetes, Terraform, GitHub Actions, Kafka, RabbitMQ",
    proof: "VaultWatch and the attributed Doctor System modernisation"
  }
];

const experience = [
  {
    company: "Outstanding Marketing",
    companyUrl: "https://outstanding-marketing.de/en",
    title: "Software Engineer (Full-Stack)",
    location: "Remote · Germany",
    period: "Feb 2025 - May 2026",
    bullets: [
      "Delivered React and TypeScript web features, internal dashboards and Node.js/API integrations for remote e-commerce and growth workflows.",
      "Automated reporting and repeatable QA checks to improve release visibility and reduce manual review.",
      "Converted stakeholder requirements into scoped tasks, delivery updates and reviewable product work."
    ]
  },
  {
    company: "LocalhostLabs",
    companyUrl: "https://localhostlabs.tech",
    title: "Junior Software Engineer",
    location: "Pakistan",
    period: "Jun 2024 - Dec 2024",
    bullets: [
      "Built responsive front-end and back-end features across web applications, APIs and databases.",
      "Fixed defects, documented workflows and supported version control, QA triage and release handoffs.",
      "Worked with product and engineering requirements in a consultancy delivery environment."
    ]
  }
];

const education = [
  {
    degree: "MSc Cybersecurity",
    school: "National College of Ireland · Dublin",
    period: "2025 - 2026",
    focus: "Secure systems, authentication, risk, networks, governance and secure software delivery."
  },
  {
    degree: "BSc Computer Science",
    school: "FAST NUCES · Pakistan",
    period: "2020 - 2024",
    focus: "Software engineering, databases, algorithms, web systems and AI foundations.",
    project: {
      label: "Team FYP: Style Sense AI Wardrobe",
      url: "https://github.com/mbg11rao/Style-Sense-AI-powerd-Wardrobe-FYP-"
    }
  }
];

const keywords = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Rust",
  "Go",
  "FastAPI",
  "WebSockets",
  "REST APIs",
  "PostgreSQL",
  "Redis",
  "Supabase",
  "Neon",
  "Docker",
  "Docker Compose",
  "Kubernetes",
  "Terraform",
  "GitHub Actions",
  "Playwright",
  "API testing",
  "PWA",
  "Stripe",
  "Authentication",
  "Authorization",
  "Agent orchestration",
  "Event-driven systems",
  "OWASP",
  "Secure SDLC",
  "Dublin",
  "Ireland",
  "Hybrid",
  "Remote"
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Uzair Waseem",
    url: siteUrl,
    mainEntityOfPage: { "@id": `${siteUrl}/#profile` },
    image: `${siteUrl}/uzair-waseem-portrait.jpg`,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dublin",
      addressCountry: "IE"
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "National College of Ireland" },
      { "@type": "CollegeOrUniversity", name: "FAST NUCES" }
    ],
    jobTitle: [
      "Software Engineer",
      "Full-stack Software Engineer",
      "Backend Engineer",
      "Applied AI Engineer",
      "QA Automation Engineer",
      "Security-aware Software Engineer"
    ],
    knowsAbout: keywords,
    sameAs: [contact.linkedin, contact.github]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Uzair Waseem",
    url: siteUrl,
    inLanguage: "en-IE",
    description:
      "Portfolio for Uzair Waseem, a Dublin-based software engineer building full-stack products, polyglot backend systems, applied AI workflows and security-aware delivery."
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profile`,
    url: siteUrl,
    name: "Uzair Waseem | Full-Stack Software Engineer in Dublin",
    dateModified: "2026-07-24",
    inLanguage: "en-IE",
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: { "@id": `${siteUrl}/#person` }
  }
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
        }}
      />
      <a className="skip-link" href="#content">Skip to main content</a>
      <div className="page-progress" aria-hidden="true" />
      <SiteHeader />
      <main id="content">
        <Hero />
        <ProofStrip />
        <DeliverySystem />
        <SelectedWork />
        <RoleFit />
        <ExperienceTimeline />
        <Education />
        <ContactCTA />
      </main>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <EngineeringScene />
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="shell hero-shell">
        <div className="hero-copy reveal">
          <div className="eyebrow-row">
            <span className="eyebrow">
              <MapPin size={15} aria-hidden="true" />
              Dublin, Ireland
            </span>
            <span className="eyebrow muted">Open to Ireland · hybrid · remote</span>
          </div>
          <p className="intro-label">Uzair Waseem · Software Engineer</p>
          <h1>
            Software engineer building <span className="headline-highlight">tested products</span> and security-aware backend systems.
          </h1>
          <p className="hero-lede">
            I turn operational problems into deployed web products and reviewable service architectures with TypeScript, Python, Rust, Go, PostgreSQL, Redis, Docker and automated quality gates.
          </p>
          <div className="stack-chips" aria-label="Core engineering stack">
            {stackChips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
          <div className="hero-actions" aria-label="Primary contact actions">
            <a className="button primary" href={`mailto:${contact.email}`}>
              <Mail size={18} aria-hidden="true" />
              Email me
            </a>
            <a className="button secondary" href={contact.cv} download>
              <Download size={18} aria-hidden="true" />
              Download CV
            </a>
            <a className="button secondary" href="#work">
              <Sparkles size={18} aria-hidden="true" />
              View work
            </a>
            <span className="social-actions">
              <a
                className="icon-link"
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Uzair Waseem on LinkedIn"
                title="LinkedIn"
              >
                <BriefcaseBusiness size={19} aria-hidden="true" />
              </a>
              <a
                className="icon-link"
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Uzair Waseem on GitHub"
                title="GitHub"
              >
                <Code2 size={19} aria-hidden="true" />
              </a>
            </span>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const signals = [
    ["01", "VaultWatch", "Polyglot security + AI system", "LIVE"],
    ["02", "HouseFair", "Full-stack PWA · CI passing", "LIVE"],
    ["03", "Theory Test Coach", "Custom-domain EdTech product", "LIVE"]
  ];

  return (
    <div className="hero-visual reveal" aria-label="Portrait and current engineering proof">
      <div className="portrait-panel">
        <Image
          src="/uzair-waseem-portrait.jpg"
          alt="Uzair Waseem, software engineer based in Dublin"
          fill
          priority
          sizes="(max-width: 980px) 100vw, 220px"
        />
        <div className="portrait-overlay" aria-hidden="true" />
        <div className="portrait-caption">
          <span>Based in</span>
          <strong>Dublin, Ireland</strong>
        </div>
      </div>
      <div className="proof-console">
        <div className="terminal-bar">
          <span />
          <span />
          <span />
          <strong>current-proof.json</strong>
        </div>
        <p className="console-label">Proof, not promises</p>
        <div className="signal-list">
          {signals.map(([number, title, detail, status]) => (
            <div className="proof-signal" key={title}>
              <span>{number}</span>
              <div>
                <strong>{title}</strong>
                <small>{detail}</small>
              </div>
              <b>{status}</b>
            </div>
          ))}
        </div>
        <div className="console-flow" aria-hidden="true">
          <span>Design</span><i /><span>Build</span><i /><span>Test</span><i /><span>Ship</span>
        </div>
      </div>
    </div>
  );
}

function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Recruiter proof strip">
      <div className="shell proof-shell">
        <div className="proof-grid">
          {proofItems.map(([label, value]) => (
            <article className="proof-item reveal" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
        <div className="company-row reveal" aria-label="Verified experience companies">
          <span>Experience</span>
          {companies.map((company) => (
            <a key={company.name} href={company.url} target="_blank" rel="noopener noreferrer">
              <strong>{company.name}</strong>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverySystem() {
  return (
    <section className="delivery-system" aria-labelledby="delivery-system-title">
      <DeliverySystemScene />
      <div className="delivery-scanlines" aria-hidden="true" />
      <div className="shell delivery-shell">
        <div className="delivery-copy reveal">
          <span className="section-eyebrow">
            <GitBranch size={16} aria-hidden="true" />
            Engineering system
          </span>
          <h2 id="delivery-system-title">A live architecture, from click to cloud.</h2>
          <p>
            I work across the delivery path, connecting product interfaces to bounded services, durable data,
            automated checks and reviewable full-stack deployment paths.
          </p>
          <dl className="render-budget" aria-label="3D scene performance envelope">
            <div>
              <dt>Render</dt>
              <dd>30 FPS budget</dd>
            </div>
            <div>
              <dt>Geometry</dt>
              <dd>37 instanced objects</dd>
            </div>
            <div>
              <dt>Runtime</dt>
              <dd>Paused offscreen</dd>
            </div>
          </dl>
        </div>
        <div className="delivery-scene-space" aria-hidden="true" />
        <ol className="delivery-layers reveal" aria-label="Software delivery layers">
          {deliveryStages.map((stage) => {
            const Icon = stage.icon;
            return (
              <li key={stage.title}>
                <span>{stage.number}</span>
                <Icon size={19} aria-hidden="true" />
                <div>
                  <strong>{stage.title}</strong>
                  <small>{stage.stack}</small>
                  <p>{stage.detail}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section className="section selected-work" id="work">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Verified projects. Honest boundaries. Evidence one click behind."
          text="Each project pairs a review path with source, automated checks, current status and limitations a recruiter can inspect."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-card reveal">
      <ProjectVisual project={project} />
      <div className="project-content">
        <div className="project-meta">
          <span>{project.category}</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </div>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="evidence-grid" aria-label={`${project.title} engineering evidence`}>
          {project.evidence.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <dl className="project-story">
          <div>
            <dt>Outcome</dt>
            <dd>{project.outcome}</dd>
          </div>
          <div>
            <dt>Proof</dt>
            <dd>{project.proof}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
        </dl>
        <ul className="tag-list" aria-label={`${project.title} technology stack`}>
          {project.stack.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-actions-row">
          {project.live && project.primaryLabel ? (
            <a
              className="project-link"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} ${project.primaryLabel.toLowerCase()}`}
            >
              {project.primaryLabel}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : null}
          <a className="project-link ghost" href={project.caseStudy}>
            Case study
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            className="project-link ghost"
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} ${project.sourceLabel.toLowerCase()} on GitHub`}
          >
            {project.sourceLabel}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            className="project-link ghost"
            href={project.ci}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Review ${project.title} continuous integration checks`}
          >
            CI checks
            <CheckCircle2 size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  return (
    <a
      className={`project-visual visual-${project.visual} ${project.imageMode}`}
      href={project.caseStudy}
      aria-label={`Explore the ${project.title} case study`}
      title={`Open ${project.title} case study`}
    >
      <div className="product-window">
        <div className="product-window-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <strong>{project.title}</strong>
          <Maximize2 size={14} />
        </div>
        <div className="product-window-screen">
          <Image
            className="product-shot"
            src={project.image}
            alt={project.imageAlt}
            fill
            quality={85}
            sizes="(max-width: 860px) calc(100vw - 28px), (max-width: 1200px) 50vw, 560px"
          />
          <div className="product-shot-overlay" aria-hidden="true" />
        </div>
      </div>
      <div className="product-shot-label">
        <span>{project.title === "Roster Command" ? "Sanitised product view" : "Actual product"}</span>
        <strong>{project.title}</strong>
      </div>
    </a>
  );
}

function RoleFit() {
  return (
    <section className="section role-fit" id="roles">
      <div className="shell">
        <SectionHeading
          eyebrow="Role fit"
          title="Focused enough to place quickly. Broad enough to contribute across delivery."
          text="Primary target: software, full-stack and backend engineering. Applied AI, QA and platform depth are tied to reviewable project evidence."
        />
        <div className="role-grid">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <article className="role-card reveal" key={role.title}>
                <div className="role-heading">
                  <Icon size={21} aria-hidden="true" />
                  <h3>{role.title}</h3>
                </div>
                <p><strong>Where I fit:</strong> {role.fit}</p>
                <p><strong>Tools:</strong> {role.tools}</p>
                <p><strong>Proof:</strong> {role.proof}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section className="section experience-section" id="experience">
      <div className="shell experience-layout">
        <div className="sticky-heading reveal">
          <div className="section-eyebrow">
            <BriefcaseBusiness size={17} aria-hidden="true" />
            Experience
          </div>
          <h2>Remote delivery experience, kept concise and verifiable.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-card reveal" key={item.company}>
              <div className="timeline-top">
                <div>
                  <h3>
                    <a href={item.companyUrl} target="_blank" rel="noopener noreferrer">
                      {item.company}<ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </h3>
                  <p>{item.title} · {item.location}</p>
                </div>
                <span>{item.period}</span>
              </div>
              <ul>
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="shell education-layout">
        <div className="education-copy reveal">
          <div className="section-eyebrow">
            <GraduationCap size={17} aria-hidden="true" />
            Education
          </div>
          <h2>Computer science foundation. Security specialization.</h2>
        </div>
        <div className="education-cards">
          {education.map((item) => (
            <article className="education-card reveal" key={item.degree}>
              <span>{item.period}</span>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
              <small>{item.focus}</small>
              {item.project ? (
                <a className="education-link" href={item.project.url} target="_blank" rel="noopener noreferrer">
                  {item.project.label}<ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
      <div className="shell keyword-strip reveal" aria-label="Recruiter keyword strip">
        {keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <footer className="contact-section" id="contact">
      <div className="shell contact-layout">
        <div className="contact-copy reveal">
          <div className="section-eyebrow"><Mail size={17} aria-hidden="true" />Contact</div>
          <h2>Send me the role. I will map my proof to it quickly.</h2>
          <p>
            Uzair Waseem is based in Dublin and open to software engineering, full-stack, backend and applied AI opportunities across Ireland, hybrid and remote teams.
          </p>
        </div>
        <div className="contact-card reveal">
          <a className="contact-primary" href={`mailto:${contact.email}`}>
            <Mail size={20} aria-hidden="true" />Email Uzair Waseem<ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a href={contact.cv} download>
            <Download size={19} aria-hidden="true" />Download CV<ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            <BriefcaseBusiness size={19} aria-hidden="true" />LinkedIn profile<ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            <Code2 size={19} aria-hidden="true" />GitHub projects<ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="shell footer-line">
        <span>Uzair Waseem</span>
        <span>Software Engineer · Dublin, Ireland</span>
        <span>{siteUrl.replace("https://", "")}</span>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-heading reveal">
      <div className="section-eyebrow">
        <CheckCircle2 size={17} aria-hidden="true" />
        {eyebrow}
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
