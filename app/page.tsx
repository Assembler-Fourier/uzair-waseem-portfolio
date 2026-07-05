import {
  ArrowUpRight,
  BriefcaseBusiness,
  Bug,
  CheckCircle2,
  Code2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

const siteUrl = "https://uzairwaseem.com";

const contact = {
  email: "uzairwaseem29@gmail.com",
  phone: "+353 89 973 9932",
  whatsapp: "https://wa.me/353899739932?text=Hi%20Uzair%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect.",
  cv: "/Uzair-Waseem-CV.pdf",
  linkedin: "https://www.linkedin.com/in/uzair-waseem",
  github: "https://github.com/Assembler-Fourier"
};

const stackChips = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "Python",
  "FastAPI",
  "SQL",
  "Docker",
  "GitHub Actions"
];

const proofItems = [
  ["Location", "Ireland-based"],
  ["Relocation", "Open across Ireland"],
  ["Target", "Full-stack / Backend"],
  ["Testing", "QA automation"],
  ["Education", "MSc Cybersecurity"],
  ["Foundation", "BSc Computer Science"],
];

const companyChips = ["Motion Sensors", "Outstanding Marketing", "LocalhostLabs"];

const projects = [
  {
    title: "SecureTaskOps Workflow Platform",
    category: "Deployed workflow dashboard",
    visual: "pipeline",
    problem: "Small teams need a fast way to see blockers, security-sensitive work and release readiness before shipping.",
    solution: "Built and deployed a workflow dashboard with API-backed tasks, filters, item creation, risk scoring and release-readiness signals.",
    outcome:
      "Now works as a live product demo: dashboard loads publicly, API endpoints return live data and task creation returns scored workflow items.",
    proof: "Deployed dashboard, Node.js service, REST API examples, risk/readiness scoring, tests, Docker, GitHub Actions.",
    limits: "Demo runtime data can reset; PostgreSQL persistence, auth, RBAC and audit logs are next hardening steps.",
    stack: ["Node.js", "REST API", "Dashboard", "Vercel", "Docker", "GitHub Actions"],
    repository: "https://github.com/Assembler-Fourier/securetaskops-workflow-platform",
    live: "https://securetaskops-workflow-platform.vercel.app/",
    caseStudy: "/projects/securetaskops"
  },
  {
    title: "SentryScan Threat Monitoring",
    category: "Security-aware backend prototype",
    visual: "radar",
    problem: "Security event payloads are hard to triage when alerts arrive without risk context or explainable severity.",
    solution: "Built a FastAPI prototype that normalizes event payloads, applies risk scoring and returns triage reasons.",
    outcome:
      "Now works as a live FastAPI demo with dashboard, API docs, health endpoint and POST ranking endpoint verified in production.",
    proof: "FastAPI app, live dashboard, API docs, risk scoring, tests, security notes.",
    limits: "Demo data and scoring are transparent heuristics; persistent storage, auth and deeper event workflows are next hardening steps.",
    stack: ["Python", "FastAPI", "Dashboard", "REST API", "Risk scoring", "Testing"],
    repository: "https://github.com/Assembler-Fourier/sentryscan-threat-monitoring",
    live: "https://sentryscan-threat-monitoring.vercel.app/",
    caseStudy: "/projects/sentryscan"
  },
  {
    title: "QA Automation Lab",
    category: "Testing proof repo",
    visual: "dashboard",
    problem: "A portfolio can claim testing experience, but hiring managers need visible tests, CI behavior and clear coverage limits.",
    solution: "Created a Playwright API testing suite that runs against SecureTaskOps and checks smoke, filtering, validation and release-readiness paths.",
    outcome:
      "Turns QA automation into reviewable proof: six Playwright API checks pass locally, with CI configured to start the target app and upload reports.",
    proof: "Playwright APIRequestContext, validation tests, smoke checks, GitHub Actions, HTML report artifacts.",
    limits: "Current suite targets the existing API; auth, CRUD UI and role tests are queued after SecureTaskOps adds those features.",
    stack: ["Playwright", "API testing", "GitHub Actions", "QA strategy", "Regression checks"],
    repository: "https://github.com/Assembler-Fourier/qa-automation-lab",
    live: "",
    caseStudy: "/projects/qa-automation-lab"
  },
  {
    title: "DocuMind RAG Assistant",
    category: "AI/data retrieval project",
    visual: "rag",
    problem: "Internal notes are hard to use when answers need supporting source context instead of loose summaries.",
    solution: "Built a Python retrieval assistant that chunks Markdown knowledge, ranks context and returns grounded answer drafts with citations.",
    outcome:
      "Now works as a live FastAPI retrieval demo with question input, ranked citations, answer endpoint and API docs verified in production.",
    proof: "Python package structure, FastAPI demo, document chunking, local retriever, citations, unit tests, RAG-ready design.",
    limits: "Uses a transparent local retriever; vector database, external model provider and evaluation metrics are next steps.",
    stack: ["Python", "FastAPI", "RAG", "Retrieval", "Citations", "Unit tests"],
    repository: "https://github.com/Assembler-Fourier/documind-rag-assistant",
    live: "https://documind-rag-assistant.vercel.app/",
    caseStudy: "/projects/documind"
  }
];

const roles = [
  {
    icon: Code2,
    title: "Full-stack Software Engineer",
    fit: "Build practical web apps, reusable UI, backend routes and maintainable product workflows.",
    tools: "React, Next.js, TypeScript, JavaScript, Node.js, REST APIs, SQL",
    proof: "SecureTaskOps and DocuMind show workflow logic, API-backed product thinking and reviewable setup paths."
  },
  {
    icon: Workflow,
    title: "Backend Engineer",
    fit: "Build APIs, model data, document setup paths and keep business logic testable.",
    tools: "Node.js, Express, Python, FastAPI, SQL, PostgreSQL, MongoDB, Docker",
    proof: "SecureTaskOps and SentryScan show API design, service logic and runnable repository structure."
  },
  {
    icon: Bug,
    title: "QA Automation Engineer",
    fit: "Add browser/API checks, regression thinking and clearer release confidence.",
    tools: "Playwright, Selenium, API testing, unit testing, integration testing, GitHub Actions",
    proof: "QA Automation Lab now shows visible Playwright API tests and CI-ready reporting."
  },
  {
    icon: ShieldCheck,
    title: "Security-aware Software Engineer",
    fit: "Apply secure SDLC thinking to authentication, authorization, validation and risk-aware delivery.",
    tools: "OWASP basics, secure SDLC, auth, input validation, threat modeling basics",
    proof: "MSc Cybersecurity strengthens the software engineering profile without making security the main identity."
  }
];

const experience = [
  {
    company: "Motion Sensors",
    location: "Remote - Canada",
    period: "Mar 2026 - Present",
    bullets: [
      "Build software features, APIs and automation workflows for distributed product delivery.",
      "Develop Python/FastAPI prototypes for risk ranking, document workflows and testable backend logic.",
      "Support Dockerized services, CI/CD-aware delivery, automated testing and secure SDLC practices."
    ]
  },
  {
    company: "Outstanding Marketing",
    location: "Remote - Germany",
    period: "Feb 2025 - Jan 2026",
    bullets: [
      "Shipped web products and dashboards using React, TypeScript, Node.js and API integrations.",
      "Automated reporting and QA checks to improve release confidence across remote teams.",
      "Translated stakeholder requirements into scoped product work, user stories and delivery updates."
    ]
  },
  {
    company: "LocalhostLabs",
    location: "On-site - Pakistan",
    period: "Jun 2024 - Dec 2024",
    bullets: [
      "Built frontend and backend features, fixed defects and supported sprint delivery.",
      "Wrote tests, documented workflows and helped with version control, QA and technical support.",
      "Worked with software engineering foundations across databases, APIs and responsive interfaces."
    ]
  }
];

const education = [
  {
    degree: "MSc Cybersecurity",
    school: "National College of Ireland, Dublin",
    period: "2025 - 2026",
    focus: "Secure systems, authentication, risk, networks, governance and secure SDLC."
  },
  {
    degree: "BSc Computer Science",
    school: "FAST NUCES",
    period: "2020 - 2024",
    focus: "Software engineering, databases, algorithms, web systems and computer science foundations."
  }
];

const skillGroups = [
  {
    title: "Primary stack",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "REST APIs",
      "Git"
    ]
  },
  {
    title: "Testing and QA",
    items: ["Playwright", "Selenium", "API testing", "Unit testing", "Integration testing", "Test automation"]
  },
  {
    title: "Security-aware development",
    items: [
      "OWASP basics",
      "Secure SDLC",
      "Authentication",
      "Authorization",
      "Threat modeling basics",
      "Input validation",
      "Secrets handling"
    ]
  },
  {
    title: "Working knowledge",
    items: [
      "AWS basics",
      "Azure basics",
      "CI/CD",
      "Linux",
      "Cloud deployment",
      "RAG prototypes",
      "LangChain basics",
      "Vector search basics"
    ]
  }
];

const keywords = [
  "Full-stack Software Engineer Ireland",
  "Backend Engineer Ireland",
  "Software Engineer Ireland",
  "Junior Software Engineer Ireland",
  "Graduate Software Engineer Ireland",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "FastAPI",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Azure",
  "CI/CD",
  "Playwright",
  "Selenium",
  "API testing",
  "QA automation",
  "Secure SDLC",
  "OWASP",
  "Authentication",
  "Authorization",
  "RAG",
  "vector search",
  "dashboards",
  "Dublin",
  "Cork",
  "Galway",
  "Limerick",
  "Waterford",
  "Remote",
  "Hybrid"
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Uzair Waseem",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Ireland",
      addressCountry: "IE"
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "National College of Ireland"
      },
      {
        "@type": "CollegeOrUniversity",
        name: "FAST NUCES"
      }
    ],
    jobTitle: [
      "Software Engineer",
      "Full-stack Software Engineer",
      "Backend Engineer",
      "Junior Software Engineer",
      "Graduate Software Engineer",
      "Security-aware Software Engineer",
      "QA Automation Engineer"
    ],
    knowsAbout: keywords,
    sameAs: [contact.linkedin, contact.github]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Uzair Waseem Portfolio",
    url: siteUrl,
    inLanguage: "en-IE",
    description:
      "Portfolio website for Uzair Waseem, an Ireland-based full-stack software engineer focused on backend APIs, testing, automation and security-aware development."
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
      <Header />
      <main id="content">
        <Hero />
        <ProofStrip />
        <About />
        <Skills />
        <SelectedWork />
        <RoleFit />
        <ExperienceTimeline />
        <Education />
        <ContactCTA />
      </main>
    </>
  );
}

function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Uzair Waseem portfolio home">
        <img className="brand-logo" src="/uzair-waseem-logo.svg" alt="" aria-hidden="true" />
        <span>Uzair Waseem</span>
      </a>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#roles">Roles</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="shell hero-shell">
        <div className="hero-copy reveal">
          <div className="eyebrow-row">
            <span className="eyebrow">
              <MapPin size={15} aria-hidden="true" />
              Ireland-based
            </span>
            <span className="eyebrow muted">Open to relocate across Ireland</span>
          </div>
          <p className="intro-label">Uzair Waseem</p>
          <h1>Full-stack Software Engineer building tested web apps, APIs, and automation workflows.</h1>
          <p className="hero-lede">
            I am an Ireland-based software engineer focused on React, Node.js,
            Python, FastAPI, SQL, Docker and GitHub Actions. My cybersecurity
            background helps me build practical systems with stronger attention
            to testing, reliability, authentication and secure delivery.
          </p>
          <div className="stack-chips" aria-label="Core stack">
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
              View projects
            </a>
            <a
              className="icon-link"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Uzair Waseem on LinkedIn"
            >
              <BriefcaseBusiness size={19} aria-hidden="true" />
            </a>
            <a
              className="icon-link"
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Uzair Waseem on GitHub"
            >
              <Code2 size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual reveal" aria-label="Technical dashboard visual">
      <div className="terminal-bar">
        <span />
        <span />
        <span />
        <strong>tested-api-workflow.ts</strong>
      </div>
      <div className="visual-grid">
        <div className="visual-panel radar-panel">
          <div className="radar">
            <span className="radar-sweep" />
            <span className="radar-dot dot-one" />
            <span className="radar-dot dot-two" />
            <span className="radar-dot dot-three" />
          </div>
          <p>Security-aware backend</p>
        </div>
        <div className="visual-panel code-panel">
          <span>api.route("/tasks")</span>
          <span>service.validate(input)</span>
          <span>tests.run("api")</span>
          <span>auth.check(role)</span>
        </div>
        <div className="visual-panel metric-panel">
          <div>
            <span>Tests</span>
            <strong>ready</strong>
          </div>
          <div>
            <span>API</span>
            <strong>covered</strong>
          </div>
          <div>
            <span>SDLC</span>
            <strong>secure</strong>
          </div>
        </div>
        <div className="visual-panel flow-panel">
          <span>Design</span>
          <i />
          <span>Build</span>
          <i />
          <span>Test</span>
          <i />
          <span>Ship</span>
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
        <div className="company-row reveal" aria-label="Experience companies">
          <span>Experience across</span>
          {companyChips.map((company) => (
            <strong key={company}>{company}</strong>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="shell about-layout">
        <SectionHeading
          eyebrow="About"
          title="A focused software profile, with cybersecurity as the useful edge."
          text="The target is software, full-stack, backend and QA automation roles across Ireland. Security is the differentiator, not the whole identity."
        />
        <div className="about-panel reveal">
          <p>
            I am an Ireland-based software engineer focused on full-stack
            development, backend APIs, automation, testing and secure delivery.
            I work mainly with React, Next.js, TypeScript, Node.js, Python,
            FastAPI, SQL, Docker and GitHub Actions.
          </p>
          <p>
            My MSc in Cybersecurity strengthens how I think about authentication,
            secure SDLC, risk, testing and reliability. I am targeting software,
            backend, full-stack and QA automation roles where I can ship practical
            systems and improve them through clean code, tests and documentation.
          </p>
          <p>
            I am open to relocating across Ireland for the right software
            engineering opportunity, including Dublin, Cork, Galway, Limerick,
            Waterford and remote or hybrid teams in Ireland.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="shell">
        <SectionHeading
          eyebrow="Skills"
          title="Primary engineering stack first. Supporting tools clearly labeled."
          text="This avoids pretending every tool is equally strong while still keeping recruiter keywords visible."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card reveal" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
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
          title="Four focused projects that support full-stack, backend, AI and QA hiring."
          text="Each project is framed honestly as a deployed app, runnable project, prototype or testing proof, with limitations visible."
        />
        {/* TODO: Replace qualitative outcomes with verified metrics when production numbers are available. */}
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
      <ProjectVisual variant={project.visual} />
      <div className="project-content">
        <div className="project-meta">
          <span>{project.category}</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </div>
        <h3>{project.title}</h3>
        <dl className="project-story">
          <div>
            <dt>Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>Solution</dt>
            <dd>{project.solution}</dd>
          </div>
          <div>
            <dt>Outcome</dt>
            <dd>{project.outcome}</dd>
          </div>
          <div>
            <dt>Proves</dt>
            <dd>{project.proof}</dd>
          </div>
          <div>
            <dt>Limits</dt>
            <dd>{project.limits}</dd>
          </div>
        </dl>
        <ul className="tag-list" aria-label={`${project.title} stack`}>
          {project.stack.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-actions-row">
          {project.live ? (
            <a
              className="project-link"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live app`}
            >
              Live app
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : null}
          <a
            className={project.live ? "project-link ghost" : "project-link"}
            href={project.caseStudy}
            aria-label={`Read ${project.title} case study`}
          >
            Case study
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            className="project-link ghost"
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} repository on GitHub`}
          >
            GitHub
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

function ProjectVisual({ variant }: { variant: string }) {
  return (
    <div className={`project-visual visual-${variant}`} aria-hidden="true">
      {variant === "radar" && (
        <>
          <span className="pv-ring one" />
          <span className="pv-ring two" />
          <span className="pv-sweep" />
          <span className="pv-alert a" />
          <span className="pv-alert b" />
          <span className="pv-alert c" />
          <div className="alert-feed">
            <i />
            <i />
            <i />
          </div>
        </>
      )}
      {variant === "kanban" && (
        <div className="mini-board">
          {[0, 1, 2].map((col) => (
            <div key={col}>
              <span />
              <i />
              <i />
              {col !== 2 && <i />}
            </div>
          ))}
        </div>
      )}
      {variant === "dashboard" && (
        <div className="mini-dashboard">
          <div className="chart-line" />
          <div className="chart-bars">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="status-list">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}
      {variant === "pipeline" && (
        <div className="pipeline-map">
          <span className="pipe-node active">API</span>
          <i />
          <span className="pipe-node">Tests</span>
          <i />
          <span className="pipe-node">Docker</span>
          <i />
          <span className="pipe-node ready">CI</span>
          <div className="release-card">
            <b />
            <b />
            <b />
          </div>
        </div>
      )}
      {variant === "rag" && (
        <div className="rag-map">
          <span className="doc d1" />
          <span className="doc d2" />
          <span className="node n1" />
          <span className="node n2" />
          <span className="node n3" />
          <span className="answer" />
        </div>
      )}
    </div>
  );
}

function RoleFit() {
  return (
    <section className="section role-fit" id="roles">
      <div className="shell">
        <SectionHeading
          eyebrow="Role fit"
          title="Focused on the roles that match the proof."
          text="Primary target: full-stack/backend software engineering. Supporting target: QA automation and security-aware software roles."
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
                <p><strong>Relevant tools:</strong> {role.tools}</p>
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
          <h2>Software delivery experience across web apps, APIs, automation and testing.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-card reveal" key={item.company}>
              <div className="timeline-top">
                <div>
                  <h3>{item.company}</h3>
                  <p>{item.location}</p>
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
          <h2>Computer science foundation with cybersecurity specialization.</h2>
        </div>
        <div className="education-cards">
          {education.map((item) => (
            <article className="education-card reveal" key={item.degree}>
              <span>{item.period}</span>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
              <small>{item.focus}</small>
            </article>
          ))}
        </div>
      </div>
      <div className="shell keyword-strip reveal" aria-label="Recruiter keyword strip">
        {keywords.map((keyword) => (
          <span key={keyword}>{keyword}</span>
        ))}
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <footer className="contact-section" id="contact">
      <div className="shell contact-layout">
        <div className="contact-copy reveal">
          <div className="section-eyebrow">
            <Mail size={17} aria-hidden="true" />
            Contact
          </div>
          <h2>Send me the role. I will map my work to it quickly.</h2>
          <p>
            Uzair Waseem is Ireland-based and open to software engineering,
            full-stack, backend, QA automation and security-aware software roles
            across Ireland. I am willing to relocate for the right opportunity.
            Recruiters can email, call, WhatsApp or download a current CV in one click.
          </p>
        </div>
        <div className="contact-card reveal">
          <a className="contact-primary" href={`mailto:${contact.email}`}>
            <Mail size={20} aria-hidden="true" />
            Email Uzair Waseem
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a href={contact.cv} download>
            <Download size={19} aria-hidden="true" />
            Download CV
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
            <Phone size={19} aria-hidden="true" />
            {contact.phone}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={19} aria-hidden="true" />
            WhatsApp {contact.phone}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            <BriefcaseBusiness size={19} aria-hidden="true" />
            LinkedIn profile
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            <Code2 size={19} aria-hidden="true" />
            GitHub projects
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="shell footer-line">
        <span>Uzair Waseem</span>
        <span>Full-stack Software Engineer in Ireland</span>
        <span>{siteUrl.replace("https://", "")}</span>
      </div>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
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
