import Image from "next/image";
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
  Sparkles
} from "lucide-react";

const siteUrl = "https://uzairwaseem.com";

const contact = {
  email: "uzairwaseem29@gmail.com",
  phone: "+353 89 973 9932",
  whatsapp:
    "https://wa.me/353899739932?text=Hi%20Uzair%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect.",
  cv: "/Uzair-Waseem-CV.pdf",
  linkedin: "https://www.linkedin.com/in/uzair-waseem",
  github: "https://github.com/Assembler-Fourier"
};

const stackChips = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Playwright",
  "Docker",
  "CI/CD",
  "Secure SDLC"
];

const proofItems = [
  ["Location", "Dublin, Ireland"],
  ["Product proof", "3 reviewable builds"],
  ["Backend", "Node.js + PostgreSQL"],
  ["Quality", "CI + Playwright"],
  ["Education", "MSc Cybersecurity"],
  ["Open to", "Ireland / hybrid / remote"]
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
    title: "Roster Command",
    category: "Flagship · Workforce operations",
    visual: "roster",
    summary:
      "Turned a spreadsheet-heavy weekly scheduling process into a manager command centre that ranks coverage gaps and explains who can realistically help.",
    outcome:
      "The private system supports real operations; the recruiter demo uses a signed, read-only synthetic session and rejects writes server-side.",
    proof:
      "React, TypeScript, Node.js APIs, Supabase PostgreSQL, Vitest, Playwright, PWA and GitHub Actions.",
    status: "Live product · Privacy-safe recruiter demo",
    image: "/projects/roster-command-product.png",
    imageAlt: "Roster Command recruiter demo showing the read-only workforce operations dashboard",
    imageMode: "dashboard",
    evidence: [
      ["Demo", "Read-only"],
      ["CI", "Passing"],
      ["Coverage", "Unit + browser"]
    ],
    ci: "https://github.com/Assembler-Fourier/employee-roster-command/actions/workflows/ci.yml",
    stack: ["TypeScript", "React", "PostgreSQL", "Playwright", "PWA", "CI"],
    repository: "https://github.com/Assembler-Fourier/employee-roster-command",
    live: "https://employee-roster-command.vercel.app/?demo=1",
    caseStudy: "/projects/roster-command"
  },
  {
    title: "HouseFair",
    category: "Full-stack SaaS · Shared living",
    visual: "house",
    summary:
      "Built a mobile-first household workspace for recurring chores, groceries, shared expenses and calmer issue reporting.",
    outcome:
      "The multi-household build isolates data by membership, keeps AI recommendations explainable and ships as an installable PWA.",
    proof:
      "Next.js 16, React 19, TypeScript, Supabase Auth/PostgreSQL/RLS, Stripe foundation and mobile Playwright regression tests.",
    status: "Live early access · CI passing",
    image: "/projects/housefair-product.jpg",
    imageAlt: "HouseFair mobile product screens for chores, groceries, shared money and house planning",
    imageMode: "contact-sheet",
    evidence: [
      ["Release", "Early access"],
      ["CI", "Passing"],
      ["Coverage", "Mobile E2E"]
    ],
    ci: "https://github.com/Assembler-Fourier/housefair-ai/actions/workflows/ci.yml",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Playwright", "PWA"],
    repository: "https://github.com/Assembler-Fourier/housefair-ai",
    live: "https://housemates-sand.vercel.app",
    caseStudy: "/projects/housefair"
  },
  {
    title: "Irish Theory Test Coach",
    category: "EdTech · Serverless product",
    visual: "learning",
    summary:
      "Built an independent study product with timed mock exams, progress coaching, protected premium flows and operator tooling.",
    outcome:
      "The current preview validates 1,277 structured items, 18 sandbox payment scenarios and 11 post-deploy checks without claiming RSA affiliation.",
    proof:
      "Vercel Functions, Neon PostgreSQL, Stripe, passwordless sessions, PWA, accessibility checks, content QA and security runbooks.",
    status: "Pre-launch · Legal/content review remains a release gate",
    image: "/projects/theory-test-coach-product.png",
    imageAlt: "Irish Theory Test Coach desktop practice workspace with secure preview questions",
    imageMode: "dashboard",
    evidence: [
      ["Content", "1,277 items"],
      ["Payments", "18 checks"],
      ["Deploy", "11 checks"]
    ],
    ci: "https://github.com/Assembler-Fourier/irish-theory-test-coach/actions/workflows/security.yml",
    stack: ["JavaScript", "Neon", "Stripe", "Security", "Accessibility", "PWA"],
    repository: "https://github.com/Assembler-Fourier/irish-theory-test-coach",
    live: "https://irish-theory-test-coach-assembler-fourier-job-work.vercel.app",
    caseStudy: "/projects/theory-test-coach"
  }
];

const roles = [
  {
    icon: Code2,
    title: "Full-stack / Backend Engineer",
    fit: "Product UI, APIs, data models and server-side workflows built as one coherent system.",
    tools: "TypeScript, React, Next.js, Node.js, Python, REST APIs, PostgreSQL",
    proof: "Roster Command, HouseFair and Irish Theory Test Coach"
  },
  {
    icon: Bug,
    title: "QA Automation Engineer",
    fit: "UI and API checks, regression coverage, release gates and failure-focused product thinking.",
    tools: "Playwright, Vitest, Pytest, API testing, accessibility, GitHub Actions",
    proof: "Mobile regression suites and CI-backed deployment checks"
  },
  {
    icon: ShieldCheck,
    title: "Security-aware Software Engineer",
    fit: "Authentication, authorization, data isolation and secure delivery inside product engineering.",
    tools: "Secure SDLC, OWASP, RLS, sessions, CSRF, rate limiting, threat modeling",
    proof: "MSc Cybersecurity plus documented security boundaries in live products"
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
  "FastAPI",
  "REST APIs",
  "PostgreSQL",
  "Supabase",
  "Neon",
  "Docker",
  "GitHub Actions",
  "Playwright",
  "API testing",
  "PWA",
  "Stripe",
  "Authentication",
  "Authorization",
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
    telephone: contact.phone,
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
      "Portfolio for Uzair Waseem, a Dublin-based software engineer building full-stack products, APIs, QA automation and security-aware delivery workflows."
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profile`,
    url: siteUrl,
    name: "Uzair Waseem | Full-Stack Software Engineer in Dublin",
    dateModified: "2026-07-13",
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
        <Image className="brand-logo" src="/uzair-waseem-logo.svg" alt="" width={28} height={28} aria-hidden="true" />
        <span>Uzair Waseem</span>
      </a>
      <nav className="nav-links">
        <a href="#work">Work</a>
        <a href="#roles">Fit</a>
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
            <span className="eyebrow muted">Open to Ireland · hybrid · remote</span>
          </div>
          <p className="intro-label">Uzair Waseem · Software Engineer</p>
          <h1>Full-stack engineer shipping tested products and backend systems.</h1>
          <p className="hero-lede">
            I turn operational problems into production-shaped software with TypeScript, React, Node.js, PostgreSQL and Playwright. My cybersecurity MSc strengthens the way I design authentication, data isolation and delivery risk.
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
              Selected work
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
  const signals = [
    ["01", "Roster Command", "Live workforce system"],
    ["02", "HouseFair", "Full-stack PWA · CI passing"],
    ["03", "MSc Cybersecurity", "Secure delivery edge"]
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
          {signals.map(([number, title, detail], index) => (
            <div className="proof-signal" key={title}>
              <span>{number}</span>
              <div>
                <strong>{title}</strong>
                <small>{detail}</small>
              </div>
              <b>{index < 2 ? "LIVE" : "2026"}</b>
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

function SelectedWork() {
  return (
    <section className="section selected-work" id="work">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Real interfaces first. Architecture and verification one click behind."
          text="Each product exposes a working review path, source, automated checks, security boundaries and the limitations that still remain."
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
          <a className="project-link ghost" href={project.caseStudy}>
            Case study
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            className="project-link ghost"
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source on GitHub`}
          >
            Source
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
    <div className={`project-visual visual-${project.visual} ${project.imageMode}`}>
      <Image
        className="product-shot"
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes="(max-width: 860px) 100vw, 560px"
      />
      <div className="product-shot-overlay" aria-hidden="true" />
      <div className="product-shot-label">
        <span>Actual product</span>
        <strong>{project.title}</strong>
      </div>
    </div>
  );
}

function RoleFit() {
  return (
    <section className="section role-fit" id="roles">
      <div className="shell">
        <SectionHeading
          eyebrow="Role fit"
          title="Focused enough to place quickly. Broad enough to contribute across delivery."
          text="Primary target: full-stack and backend engineering. Strong adjacent fit: QA automation and security-aware product engineering."
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
            Uzair Waseem is based in Dublin and open to software engineering, full-stack, backend and QA automation opportunities across Ireland, hybrid and remote teams.
          </p>
        </div>
        <div className="contact-card reveal">
          <a className="contact-primary" href={`mailto:${contact.email}`}>
            <Mail size={20} aria-hidden="true" />Email Uzair Waseem<ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a href={contact.cv} download>
            <Download size={19} aria-hidden="true" />Download CV<ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
            <Phone size={19} aria-hidden="true" />{contact.phone}<ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={19} aria-hidden="true" />WhatsApp {contact.phone}<ArrowUpRight size={17} aria-hidden="true" />
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
