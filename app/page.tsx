import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, Download } from "lucide-react";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { CoverageSketch } from "./components/CoverageSketch";

const siteUrl = "https://uzairwaseem.com";
const contact = {
  email: "uzairwaseem29@gmail.com",
  cv: "/Uzair-Waseem-CV.pdf",
  linkedin: "https://www.linkedin.com/in/uzair-waseem",
  github: "https://github.com/Assembler-Fourier",
};

const projects = [
  {
    title: "HouseFair",
    category: "01 / Full-stack product",
    summary: "A shared home, without the scattered messages.",
    detail:
      "I built a mobile-first workspace for chores, groceries and shared expenses, with household access controls and a public sample tour.",
    evidence: "Household-scoped access · Mobile workflows · Browser checks",
    stack: ["Next.js", "TypeScript", "Supabase", "Playwright"],
    boundary:
      "Public preview with sample data. Full authenticated workflows remain a separate verification step.",
    repository: "https://github.com/Assembler-Fourier/housefair-ai",
    live: "https://housemates-sand.vercel.app/demo",
    liveLabel: "Try sample tour",
    caseStudy: "/projects/housefair",
    image: "/projects/housefair-product.jpg",
    imageAlt: "HouseFair mobile product screens",
    visual: "house",
  },
  {
    title: "Roster Command",
    category: "02 / Operations & automation",
    summary: "Clearer decisions when a shift needs cover.",
    detail:
      "I extracted scheduling rules from a private roster tool: coverage gaps, overlapping shifts and explainable cover suggestions.",
    evidence: "Interval validation · Conflict checks · Deterministic ranking",
    stack: ["TypeScript", "Vitest", "Domain modelling"],
    boundary:
      "Sanitised public code and synthetic examples. Cover suggestions require human confirmation.",
    repository: "https://github.com/Assembler-Fourier/employee-roster-command",
    live: null,
    liveLabel: null,
    caseStudy: "/projects/roster-command",
    image: "/projects/roster-command-product.png",
    imageAlt: "Roster Command sanitised product view",
    visual: "roster",
  },
  {
    title: "VaultWatch",
    category: "03 / Backend & security",
    summary: "Follow a payment decision across services.",
    detail:
      "I built a local fraud and account-security workspace with risk checks, investigation events and case history across four services.",
    evidence: "Rust risk engine · Go gateway · Python orchestration",
    stack: ["Rust", "Go", "Python", "PostgreSQL"],
    boundary:
      "Synthetic data. The public TypeScript showcase is smaller than the full local system, which supports scripted model replay.",
    repository: "https://github.com/Assembler-Fourier/vaultwatch",
    live: "https://dashboard-web-three-sable.vercel.app",
    liveLabel: "Open showcase",
    caseStudy: "/projects/vaultwatch",
    image: "/projects/vaultwatch-product.png",
    imageAlt: "VaultWatch synthetic investigation dashboard",
    visual: "vault",
  },
];

const experience = [
  {
    company: "TalentHunter Ltd",
    companyUrl: "https://talenthunter.me",
    title: "Software Engineer & QA",
    period: "Sep 2026 - Nov 2026",
    bullets: [
      "Contributed to platform development and end-to-end testing across candidate, employer and admin workflows.",
      "Investigated frontend and backend defects, reviewed code changes and documented findings to support release decisions.",
    ],
  },
  {
    company: "Threadstone Security Ltd",
    title: "Control Room Manager (weekends)",
    period: "Nov 2025 - Present",
    bullets: [
      "Coordinate rosters and staffing changes for a security workforce of approximately 300, using a personally developed rostering system.",
      "Liaise with managers and collect timesheets alongside campus security, CCTV, gate-control and building lock-up duties.",
    ],
  },
  {
    company: "Outstanding Marketing",
    companyUrl: "https://outstanding-marketing.de/en",
    title: "Software Engineer (Full-Stack)",
    location: "Remote · Germany",
    period: "Feb 2025 - May 2026",
    bullets: [
      "Delivered React and TypeScript web features, internal dashboards and Node.js/API integrations for remote e-commerce and growth workflows.",
      "Automated reporting and repeatable QA checks to improve release visibility and reduce manual review.",
      "Converted stakeholder requirements into scoped tasks, delivery updates and reviewable product work.",
    ],
  },
  {
    company: "LocalhostLabs",
    companyUrl: "https://localhostlabs.tech",
    title: "Software Engineer",
    location: "Pakistan",
    period: "Jun 2024 - Dec 2024",
    bullets: [
      "Built responsive front-end and back-end features across web applications, APIs and databases.",
      "Fixed defects, documented workflows and supported version control, QA triage and release handoffs.",
      "Worked with product and engineering requirements in a consultancy delivery environment.",
    ],
  },
  {
    company: "Octans Digital (OD)",
    companyUrl: "https://octans.ai",
    title: "Software Engineering Roles",
    location: "Islamabad · Pakistan",
    period: "Nov 2020 - Apr 2024",
    bullets: [
      "Completed development tickets, including C# tasks, through intern, junior and associate roles alongside Computer Science studies.",
    ],
  },
];

const education = [
  {
    degree: "MSc Cybersecurity",
    school: "National College of Ireland · Dublin",
    period: "2025 - 2026 · Graduated April 2026",
    focus:
      "Secure systems, authentication, risk, networks, governance and secure software delivery.",
  },
  {
    degree: "BSc Computer Science",
    school: "FAST NUCES · Pakistan",
    period: "2020 - 2024",
    focus:
      "Software engineering, databases, algorithms, web systems and AI foundations.",
    project: {
      label: "Team FYP: Style Sense AI Wardrobe",
      url: "https://github.com/mbg11rao/Style-Sense-AI-powerd-Wardrobe-FYP-",
    },
  },
];

const engineeringTools = [
  {
    title: "DataProof",
    category: "Data quality · Python backend",

    description:
      "Profile a CSV, define a reusable data contract, and trace failed checks to the exact rows and columns.",
    workflow: "Upload → profile → validate → export",
    evidence:
      "Typed rules, bounded CSV processing, row-level diagnostics and a CLI that can fail a CI job.",
    boundary:
      "Request-scoped processing. Uploaded data is not saved as a shared dataset.",
    stack: ["Python", "FastAPI", "Pydantic", "Data contracts", "CI"],
    live: "https://dataproof-quality-workbench.vercel.app",
    repo: "https://github.com/Assembler-Fourier/dataproof-quality-workbench",
  },
  {
    title: "ContractLens",
    category: "Developer tooling · API quality",

    description:
      "Validate JSON responses against OpenAPI contracts, compare API versions, and export reproducible test fixtures.",
    workflow: "Load contract → inspect response → compare versions",
    evidence:
      "JSON-pointer diagnostics, compatibility rules, local reference resolution and executable test exports.",
    boundary:
      "Documented OpenAPI 3.0 subset. Checks supplied contracts and responses without calling target APIs.",
    stack: ["Python", "FastAPI", "OpenAPI", "JSON Schema", "Contract tests"],
    live: "https://contractlens-api-lab.vercel.app",
    repo: "https://github.com/Assembler-Fourier/contractlens-api-lab",
  },
  {
    title: "DocuMind",
    category: "Applied AI · Document processing",

    description:
      "Upload PDF, Word or text documents, retrieve relevant passages, and generate answers with inspectable citations.",
    workflow: "Extract → retrieve → answer with citations",
    evidence:
      "BM25 retrieval, bounded document parsing, 22 automated tests and a tested upload-to-citation flow.",
    boundary:
      "Evidence mode needs no key. OpenAI generation requires the visitor’s key; documents live in the browser session.",
    stack: ["Python", "FastAPI", "RAG", "OpenAI", "BM25"],
    live: "https://documind-rag-assistant.vercel.app",
    repo: "https://github.com/Assembler-Fourier/documind-rag-assistant",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Uzair Waseem",
      url: siteUrl,
      image: `${siteUrl}/uzair-waseem-portrait.jpg`,
      jobTitle: "Software Engineer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dublin",
        addressCountry: "IE",
      },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "National College of Ireland" },
        { "@type": "CollegeOrUniversity", name: "FAST NUCES" },
      ],
      knowsAbout: [
        "TypeScript",
        "React",
        "Node.js",
        "Python",
        "REST APIs",
        "PostgreSQL",
        "Automated testing",
      ],
      sameAs: [contact.linkedin, contact.github],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Uzair Waseem",
      url: siteUrl,
      inLanguage: "en-IE",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: `${siteUrl}/`,
      name: "Uzair Waseem | Software Engineer in Dublin",
      dateModified: "2026-11-13",
      inLanguage: "en-IE",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
    },
  ],
};

const cvVariants = [
  ["Software engineering", "Software-Engineer"],
  ["Full-stack", "Full-Stack-Engineer"],
  ["Backend", "Backend-Engineer"],
  ["QA automation", "QA-Automation-Engineer"],
  ["Technical support", "Technical-Support-Engineer"],
  ["AI software", "AI-Software-Engineer"],
  ["Platform", "Platform-Software-Engineer"],
  ["Security-aware software", "Security-Aware-Software-Engineer"],
  ["Customer service & operations", "Customer-Service-Operations"],
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#content">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="content">
        <div className="hero-zone" id="intro">
          <section className="hero shell" aria-labelledby="hero-title">
            <div className="hero-intro">
              <p className="intro-label">
                Uzair Waseem <span>/ Dublin, Ireland</span>
              </p>
              <p className="availability-note">
                <span className="status-dot" /> Available immediately
              </p>
            </div>
            <h1 id="hero-title">
              Software engineer.
              <br />
              <span>Practical by design.</span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-lede">
                I build web products, backend APIs and tools that make everyday
                work easier. Full-stack development, careful testing and a
                security-aware approach.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#work">
                  Explore my work
                  <ArrowDown size={18} aria-hidden="true" />
                </a>
                <a className="button secondary" href={contact.cv} download>
                  <Download size={18} aria-hidden="true" />
                  Download CV
                </a>
              </div>
            </div>
            <div className="hero-context">
              <a href="#experience">
                Recent engineering & QA work at <strong>TalentHunter</strong>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <div className="hero-links">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <a href={`mailto:${contact.email}`}>
                  Email me
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>
        </div>

        <section
          className="section shell"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / Selected work</p>
              <h2 id="work-title">Three problems. Three builds.</h2>
            </div>
            <p>
              Product development, operational rules and backend systems. Here’s
              what I built and how it works.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card project-${project.visual}`}
                key={project.title}
              >
                <div className="project-visual">
                  {project.visual === "house" ? (
                    <div className="house-product">
                      <span className="product-kicker">
                        HouseFair / public sample tour
                      </span>
                      <div className="house-phones">
                        <div>
                          <Image
                            src="/projects/housefair-tour.jpg"
                            alt="HouseFair sample household overview"
                            fill
                            sizes="(max-width: 700px) 34vw, 180px"
                          />
                        </div>
                        <div>
                          <Image
                            src="/projects/housefair-tasks.jpg"
                            alt="HouseFair sample chores workflow"
                            fill
                            sizes="(max-width: 700px) 34vw, 180px"
                          />
                        </div>
                      </div>
                    </div>
                  ) : project.visual === "roster" ? (
                    <CoverageSketch />
                  ) : (
                    <div className="vault-product">
                      <span className="product-kicker">
                        VaultWatch / synthetic showcase
                      </span>
                      <div className="project-image">
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          sizes="(max-width: 700px) 90vw, 540px"
                          quality={85}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <p className="eyebrow">{project.category}</p>
                  <h3>
                    <Link href={project.caseStudy}>{project.title}</Link>
                  </h3>
                  <p className="project-summary">{project.summary}</p>
                  <p>{project.detail}</p>
                  <p className="project-evidence">{project.evidence}</p>
                  <ul
                    className="tag-list"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.stack.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="project-actions">
                    <Link href={project.caseStudy}>
                      Read case study
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} ${project.liveLabel?.toLowerCase()}`}
                      >
                        {project.liveLabel}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} ${project.title === "Roster Command" ? "public engineering extract source" : "source"} on GitHub`}
                    >
                      Source
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </div>
                  <p className="project-boundary">{project.boundary}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="quality-feature">
            <div>
              <p className="eyebrow">Testing & quality</p>
              <h3>QA Automation Lab</h3>
              <p>
                Browser journeys, API contracts and accessibility checks, with
                traces and reports that make failures easier to investigate.
              </p>
              <span>Playwright · JavaScript · API testing · CI</span>
            </div>
            <Link className="text-link" href="/projects/qa-automation-lab">
              Read the testing case study
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="tools-section shell" aria-labelledby="tools-title">
          <details className="more-projects">
            <summary>
              <span id="tools-title">Developer tools & more</span>
              <span>Four focused experiments</span>
              <span className="details-icon" aria-hidden="true">
                +
              </span>
            </summary>
            <div className="tool-grid">
              {engineeringTools.map((tool) => (
                <article className="tool-card" key={tool.title}>
                  <p className="eyebrow">{tool.category}</p>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                  <div className="project-actions">
                    <a
                      href={tool.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Try {tool.title}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                    <a
                      href={tool.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${tool.title} source`}
                    >
                      Source
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </div>
                  <p className="project-boundary">{tool.boundary}</p>
                </article>
              ))}
              <article className="tool-card">
                <p className="eyebrow">Learning product · Public preview</p>
                <h3>Irish Theory Test Coach</h3>
                <p>
                  Driving-theory practice, learner workflows and serverless
                  APIs.
                </p>
                <div className="project-actions">
                  <Link href="/projects/theory-test-coach">
                    Read case study
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </div>
                <p className="project-boundary">
                  Full account, database and payment health remain unverified.
                </p>
              </article>
            </div>
          </details>
        </section>

        <section
          className="section shell skills-section"
          id="roles"
          aria-labelledby="skills-title"
        >
          <div>
            <p className="eyebrow">02 / What I bring</p>
            <h2 id="skills-title">
              Build carefully.
              <br />
              Test the edges.
            </h2>
            <p className="section-intro">
              My focus is software engineering, backend APIs and QA automation.
              I bring a security-aware approach shaped by my MSc and practical
              project work.
            </p>
            <a className="text-link" href={contact.cv} download>
              View my experience in the CV
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="skill-list">
            <article>
              <span>01</span>
              <div>
                <h3>Product development</h3>
                <p>
                  React, TypeScript, Next.js and responsive interfaces. Turning
                  a workflow into something clear and usable.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Backend & integrations</h3>
                <p>
                  Node.js, Python, REST APIs and PostgreSQL. Connecting systems
                  with validation and clear access boundaries.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Testing & investigation</h3>
                <p>
                  Playwright, API testing, regression checks and CI. Reproducing
                  failures and documenting what needs to change.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          className="experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section shell experience-layout">
            <div>
              <p className="eyebrow">03 / Experience</p>
              <h2 id="experience-title">Experience that shapes the work.</h2>
              <p className="section-intro">
                Commercial engineering, QA and hands-on operations. Open to
                software roles across Ireland.
              </p>
            </div>
            <div className="timeline">
              {experience.slice(0, 3).map((item) => (
                <ExperienceEntry key={item.company} item={item} />
              ))}
              <details className="earlier-roles">
                <summary>Earlier engineering roles</summary>
                {experience.slice(3).map((item) => (
                  <ExperienceEntry key={item.company} item={item} />
                ))}
              </details>
            </div>
          </div>
        </section>

        <section
          className="section shell education-section"
          id="education"
          aria-labelledby="education-title"
        >
          <div>
            <p className="eyebrow">04 / Education</p>
            <h2 id="education-title">A strong foundation.</h2>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article key={item.degree}>
                <span className="eyebrow">{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <p>{item.focus}</p>
                {item.project && (
                  <a
                    className="text-link"
                    href={item.project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.project.label}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="shell contact-layout">
            <div>
              <p className="eyebrow">Have a role in mind?</p>
              <h2 id="contact-title">
                Let’s build
                <br />
                something useful.
              </h2>
              <p>
                I’m available immediately for software engineering, QA
                automation and technical support roles. Open to onsite, hybrid
                and remote work across Ireland.
              </p>
              <a className="contact-email" href={`mailto:${contact.email}`}>
                {contact.email}
                <ArrowUpRight size={22} aria-hidden="true" />
              </a>
              <div className="hero-actions">
                <a className="button primary" href={contact.cv} download>
                  <Download size={17} aria-hidden="true" />
                  Download CV
                </a>
                <a
                  className="text-link"
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
            <aside
              className="contact-details"
              aria-label="Recruiter information"
            >
              <h3>The practical details</h3>
              <p>
                <Check size={17} aria-hidden="true" />
                Based in Dublin. Open to relocation.
              </p>
              <p>
                <Check size={17} aria-hidden="true" />
                Stamp 1G · expires 30 April 2028
              </p>
              <p>
                <Check size={17} aria-hidden="true" />
                Employment permit support needed later.
              </p>
              <p>
                <Check size={17} aria-hidden="true" />I have my own car and a
                full Irish driving licence.
              </p>
              <details className="cv-versions">
                <summary>Looking for a role-specific CV?</summary>
                <div>
                  {cvVariants.map(([label, slug]) => (
                    <a
                      href={`/cv/Uzair-Waseem-CV-${slug}.pdf`}
                      download
                      key={slug}
                    >
                      {label}
                      <Download size={14} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </details>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function ExperienceEntry({ item }: { item: (typeof experience)[number] }) {
  return (
    <article className="timeline-card" key={item.company}>
      <div className="timeline-top">
        <div>
          <h3>
            {item.companyUrl ? (
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.company}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ) : (
              item.company
            )}
          </h3>
          <p className="job-title">{item.title}</p>
        </div>
        <span>{item.period}</span>
      </div>
      <ul>
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}
