import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Bug,
  CheckCircle2,
  Cloud,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

const siteUrl = "https://uzairwaseem.com";

const contact = {
  email: "uzairwaseem29@gmail.com",
  phone: "+353 89 973 9932",
  linkedin: "https://www.linkedin.com/in/uzair-waseem",
  github: "https://github.com/Assembler-Fourier"
};

const stackChips = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "FastAPI",
  "SQL",
  "AWS",
  "Azure",
  "Docker",
  "Security"
];

const proofItems = [
  ["Location", "Dublin-based"],
  ["Education", "MSc Cybersecurity"],
  ["Foundation", "BSc Computer Science"],
  ["Delivery", "Remote product teams"],
  ["Stack", "AI + cloud + security"],
  ["Approach", "Production-focused"]
];

const companyChips = ["Motion Sensors", "Outstanding Marketing", "LocalhostLabs"];

const projects = [
  {
    title: "SentryScan Threat Monitoring",
    category: "Security + AI",
    visual: "radar",
    problem: "Security and event signals are easy to miss when alerts arrive without risk context.",
    solution: "Built a risk-ranked monitoring concept with anomaly detection, alert streams and a dashboard-ready API.",
    outcome:
      "Created a clearer path from raw events to incident triage without adding noisy manual reporting.",
    stack: ["Python", "FastAPI", "scikit-learn", "SIEM", "Threat modeling"]
  },
  {
    title: "TaskForge Workflow App",
    category: "Full-stack product",
    visual: "kanban",
    problem: "Team work was scattered across manual trackers, making ownership and sprint status harder to see.",
    solution: "Designed a workflow app with task states, auth-ready product structure and API-first delivery.",
    outcome:
      "Centralized task flow and made release work easier to scan for engineering and non-technical stakeholders.",
    stack: ["React", "Node.js", "MongoDB", "REST APIs", "Testing"]
  },
  {
    title: "SecureFlow Delivery Dashboard",
    category: "Delivery analytics",
    visual: "dashboard",
    problem: "Sprint health, blockers and release status were spread across tools and meetings.",
    solution: "Connected delivery signals into a dashboard view for sprint health, blocker age and release readiness.",
    outcome:
      "Improved release visibility and reduced the need for repeated status-reporting loops.",
    stack: ["React", "Node.js", "Jira API", "PostgreSQL", "Dashboards"]
  },
  {
    title: "DocuMind RAG Assistant",
    category: "LLM workflow",
    visual: "rag",
    problem: "Internal knowledge was hard to search quickly across documents and repeated questions.",
    solution: "Built a retrieval-augmented assistant pattern with document chunks, vector search and prompt evaluation.",
    outcome:
      "Turned static documents into a faster question-answering workflow with a production-minded architecture.",
    stack: ["LangChain", "RAG", "Vector search", "Hugging Face", "Python"]
  }
];

const roles = [
  {
    icon: Code2,
    title: "Software / Full-stack Engineer",
    fit: "Build product interfaces, APIs, data models and reliable releases.",
    tools: "React, Next.js, TypeScript, JavaScript, Node.js, REST APIs, PostgreSQL, MongoDB",
    proof: "TaskForge and SecureFlow show product UI, backend and delivery-dashboard thinking."
  },
  {
    icon: BrainCircuit,
    title: "AI / Data Engineer",
    fit: "Turn data and documents into model-backed workflows and useful dashboards.",
    tools: "Python, FastAPI, PyTorch, scikit-learn, Hugging Face, LangChain, RAG, ETL",
    proof: "SentryScan and DocuMind show anomaly detection, vector search and evaluation patterns."
  },
  {
    icon: Cloud,
    title: "Cloud / DevOps Engineer",
    fit: "Automate builds, containers, environments, monitoring and deployment paths.",
    tools: "AWS, Azure, Docker, Kubernetes, Terraform, GitHub Actions, CI/CD",
    proof: "Experience includes deployment automation, containerized workflows and release visibility."
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Engineer",
    fit: "Bring secure SDLC, risk and monitoring into product delivery.",
    tools: "OWASP, secure SDLC, threat modeling, SIEM, ISO 27001, NIST CSF, GDPR",
    proof: "MSc Cybersecurity plus SentryScan and RiskLens-style control mapping experience."
  },
  {
    icon: Bug,
    title: "QA Automation Engineer",
    fit: "Add automated checks and edge-case thinking before production releases.",
    tools: "Playwright, Selenium, Cypress, API testing, QA automation, Jira",
    proof: "Experience includes regression/API testing, CI-integrated checks and defect triage."
  }
];

const experience = [
  {
    company: "Motion Sensors",
    location: "Remote - Canada",
    period: "Mar 2026 - Present",
    bullets: [
      "Build ML-backed product features, APIs and automation workflows for distributed delivery.",
      "Support secure deployment patterns with Docker, CI/CD thinking and monitoring-ready services.",
      "Work across data, software and product requirements to turn prototypes into usable systems."
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
    focus: "Secure systems, risk, networks, governance and secure delivery."
  },
  {
    degree: "BSc Computer Science",
    school: "FAST NUCES",
    period: "2020 - 2024",
    focus: "Software engineering, databases, algorithms, AI/data foundations and systems."
  }
];

const keywords = [
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
  "Kubernetes",
  "AWS",
  "Azure",
  "Terraform",
  "CI/CD",
  "Playwright",
  "Selenium",
  "Cypress",
  "API testing",
  "QA automation",
  "PyTorch",
  "scikit-learn",
  "Hugging Face",
  "LangChain",
  "RAG",
  "vector search",
  "ETL",
  "dashboards",
  "OWASP",
  "secure SDLC",
  "threat modeling",
  "SIEM",
  "ISO 27001",
  "NIST CSF",
  "GDPR",
  "Jira",
  "Confluence",
  "Power BI",
  "ITIL"
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
      addressLocality: "Dublin",
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
      "AI Engineer",
      "Data Engineer",
      "Cloud Engineer",
      "DevOps Engineer",
      "Cybersecurity Engineer",
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
      "Portfolio website for Uzair Waseem, a Dublin-based software, AI, cloud, automation and cybersecurity engineer."
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
        <span className="brand-mark" aria-hidden="true" />
        <span>Uzair Waseem</span>
      </a>
      <nav className="nav-links">
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
              Dublin, Ireland
            </span>
            <span className="eyebrow muted">Open to Ireland, hybrid and remote</span>
          </div>
          <p className="intro-label">Uzair Waseem</p>
          <h1>Software, AI & Security Engineer building production-ready systems.</h1>
          <p className="hero-lede">
            I build web products, AI workflows, cloud automation, QA systems and secure
            delivery pipelines for teams that need reliable software shipped fast.
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
            <a className="button secondary" href="#work">
              <Sparkles size={18} aria-hidden="true" />
              View selected work
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
        <strong>secure-delivery.ts</strong>
      </div>
      <div className="visual-grid">
        <div className="visual-panel radar-panel">
          <div className="radar">
            <span className="radar-sweep" />
            <span className="radar-dot dot-one" />
            <span className="radar-dot dot-two" />
            <span className="radar-dot dot-three" />
          </div>
          <p>Risk-ranked monitoring</p>
        </div>
        <div className="visual-panel code-panel">
          <span>api.route("/release-health")</span>
          <span>model.evaluate(events)</span>
          <span>pipeline.deploy()</span>
          <span>scan.owasp()</span>
        </div>
        <div className="visual-panel metric-panel">
          <div>
            <span>CI/CD</span>
            <strong>ready</strong>
          </div>
          <div>
            <span>QA</span>
            <strong>covered</strong>
          </div>
          <div>
            <span>Cloud</span>
            <strong>observable</strong>
          </div>
        </div>
        <div className="visual-panel flow-panel">
          <span>Design</span>
          <i />
          <span>Build</span>
          <i />
          <span>Secure</span>
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

function SelectedWork() {
  return (
    <section className="section selected-work" id="work">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Four credible project stories, built for a fast recruiter scan."
          text="Each card shows the problem, the system built and the honest outcome without inventing metrics."
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
        </dl>
        <ul className="tag-list" aria-label={`${project.title} stack`}>
          {project.stack.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
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
          title="Focused for the roles most likely to match."
          text="Broad enough for the market, tight enough for a recruiter to understand quickly."
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
          <h2>Remote delivery experience across product, software, data and security.</h2>
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
            Uzair Waseem is based in Dublin and open to software, AI/data,
            cloud/DevOps, cybersecurity, QA automation, technical product and support
            opportunities across Ireland, hybrid and remote markets.
          </p>
        </div>
        <div className="contact-card reveal">
          <a className="contact-primary" href={`mailto:${contact.email}`}>
            <Mail size={20} aria-hidden="true" />
            Email Uzair Waseem
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
            <Phone size={19} aria-hidden="true" />
            {contact.phone}
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
        <span>Software, AI & Cybersecurity Engineer in Dublin</span>
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
