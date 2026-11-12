import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, Download } from "lucide-react";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { WorkPreview } from "./components/WorkPreview";

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
    category: "Full-stack development",
    summary: "A calmer way to run a shared home.",
    detail:
      "Chores, groceries and shared expenses in one mobile-first workspace. Built with household access controls and a public sample tour.",
    image: "/projects/housefair-product.jpg",
    imageAlt:
      "HouseFair mobile screens for chores, groceries and shared expenses",
    stack: ["Next.js", "TypeScript", "Supabase", "Playwright"],
    boundary:
      "Sample tour available. Full authenticated workflows are a separate verification step.",
    repository: "https://github.com/Assembler-Fourier/housefair-ai",
    live: "https://housemates-sand.vercel.app/demo",
    liveLabel: "Try sample tour",
    caseStudy: "/projects/housefair",
    visual: "house",
  },
  {
    title: "VaultWatch",
    category: "Backend & security",
    summary: "Follow the signal. Understand the risk.",
    detail:
      "A fraud and account-security project connecting risk checks, investigation workflows and an operations dashboard.",
    image: "/projects/vaultwatch-product.png",
    imageAlt:
      "VaultWatch dashboard with a synthetic investigation and event trace",
    stack: ["Rust", "Go", "Python", "PostgreSQL"],
    boundary:
      "Synthetic showcase. The complete service stack runs locally with Docker Compose.",
    repository: "https://github.com/Assembler-Fourier/vaultwatch",
    live: "https://dashboard-web-three-sable.vercel.app",
    liveLabel: "Live showcase",
    caseStudy: "/projects/vaultwatch",
    visual: "vault",
  },
  {
    title: "Roster Command",
    category: "Practical automation",
    summary: "Turn coverage gaps into clear decisions.",
    detail:
      "Scheduling logic for availability, overlapping shifts and explainable cover ranking, extracted from a private roster system.",
    image: "/projects/roster-command-product.png",
    imageAlt:
      "Roster Command view with synthetic shifts and coverage information",
    stack: ["TypeScript", "Vitest", "Domain modelling"],
    boundary:
      "Sanitised public extract with synthetic data. Private workforce records stay private.",
    repository: "https://github.com/Assembler-Fourier/employee-roster-command",
    live: null,
    liveLabel: null,
    caseStudy: "/projects/roster-command",
    visual: "roster",
  },
  {
    title: "QA Automation Lab",
    category: "Testing & quality",
    summary: "Make regressions easier to catch.",
    detail:
      "Browser journeys, API contracts and accessibility checks with CI reports and failure evidence that make issues easier to investigate.",
    image: "/projects/qa-automation-lab-product.png",
    imageAlt: "Playwright test report with browser and API contract results",
    stack: ["Playwright", "TypeScript", "API testing", "CI"],
    boundary:
      "Public checks are read-only. Authenticated product tests belong in their own repositories.",
    repository: "https://github.com/Assembler-Fourier/qa-automation-lab",
    live: null,
    liveLabel: null,
    caseStudy: "/projects/qa-automation-lab",
    visual: "qa",
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
      dateModified: "2026-11-12",
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
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" /> Available immediately · Dublin,
                Ireland
              </p>
              <p className="intro-label">
                Hi, I’m Uzair. Software engineer & problem solver.
              </p>
              <h1 id="hero-title">
                Software.
                <br />
                <span>With substance.</span>
              </h1>
              <p className="hero-lede">
                From the first interaction to the API behind it.
                <br className="desktop-break" /> I build thoughtful products,
                test the details, and make complex workflows feel
                straightforward.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#work">
                  Explore my work
                  <ArrowDown size={17} aria-hidden="true" />
                </a>
                <a className="button secondary" href={contact.cv} download>
                  <Download size={17} aria-hidden="true" />
                  Download CV
                </a>
              </div>
              <div className="hero-links">
                <span>Find me on</span>
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
            <WorkPreview />
          </section>
          <div className="hero-bottom shell">
            <span>DESIGN WITH INTENT. BUILD WITH CARE.</span>
            <span>React · TypeScript · APIs · Automated testing</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
        <div
          className="availability shell"
          aria-label="Availability and qualifications"
        >
          <div>
            <span>Ready to contribute</span>
            <strong>Available immediately</strong>
          </div>
          <div>
            <span>Based in Dublin</span>
            <strong>Open to roles across Ireland</strong>
          </div>
          <div>
            <span>Education</span>
            <strong>MSc Cybersecurity</strong>
          </div>
          <a href="#contact">
            Let’s talk
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>

        <section
          className="section shell"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / Selected work</p>
              <h2 id="work-title">
                Good ideas.
                <br />
                Working products.
              </h2>
            </div>
            <p>
              A few projects that show how I build, test and think through the
              details.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card project-${project.visual}`}
                key={project.title}
              >
                <Link
                  className="project-visual"
                  href={project.caseStudy}
                  aria-label={`0${index + 1} Explore the ${project.title} case study`}
                >
                  <span className="project-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div
                    className={
                      project.visual === "house"
                        ? "house-phones"
                        : "project-image"
                    }
                  >
                    {project.visual === "house" ? (
                      <>
                        <div>
                          <Image
                            src="/projects/housefair-tour.jpg"
                            alt="HouseFair sample household overview"
                            fill
                            sizes="(max-width: 700px) 34vw, 160px"
                          />
                        </div>
                        <div>
                          <Image
                            src="/projects/housefair-tasks.jpg"
                            alt="HouseFair sample task list"
                            fill
                            sizes="(max-width: 700px) 34vw, 160px"
                          />
                        </div>
                      </>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 700px) 90vw, (max-width: 1200px) 45vw, 530px"
                        quality={85}
                      />
                    )}
                  </div>
                  <span className="image-link">
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </span>
                </Link>
                <div className="project-content">
                  <p className="eyebrow">{project.category}</p>
                  <h3>
                    <Link href={project.caseStudy}>{project.title}</Link>
                  </h3>
                  <p className="project-summary">{project.summary}</p>
                  <p>{project.detail}</p>
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
                      Case study
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
          <div className="more-work">
            <div>
              <p className="eyebrow">Also built</p>
              <h3>Irish Theory Test Coach</h3>
              <p>
                An independent driving-theory practice product with learner
                workflows and serverless APIs.
              </p>
            </div>
            <Link href="/projects/theory-test-coach">
              Read the case study
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section
          className="tools-section"
          id="engineering-tools"
          aria-labelledby="tools-title"
        >
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Small tools. Clear purpose.</p>
                <h2 id="tools-title">Try the engineering.</h2>
              </div>
              <p>Explore a sample, inspect the output, then read the code.</p>
            </div>
            <div className="tool-grid">
              {engineeringTools.map((tool) => (
                <article className="tool-card" key={tool.title}>
                  <p className="eyebrow">{tool.category}</p>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                  <p className="tool-stack">
                    {tool.stack.slice(0, 3).join(" / ")}
                  </p>
                  <div className="project-actions">
                    <a
                      href={tool.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Try it: ${tool.title} live`}
                    >
                      Try it
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                    <a
                      href={tool.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read ${tool.title} source`}
                    >
                      Source
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </div>
                  <p className="project-boundary">{tool.boundary}</p>
                </article>
              ))}
            </div>
          </div>
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
              <h2 id="experience-title">
                Real work.
                <br />
                Practical perspective.
              </h2>
              <p className="section-intro">
                Software delivery, quality assurance and hands-on operations.
              </p>
            </div>
            <div className="timeline">
              {experience.map((item) => (
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
              ))}
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
