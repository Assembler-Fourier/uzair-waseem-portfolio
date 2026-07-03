import Image from "next/image";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Bug,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

const contact = {
  email: "uzairwaseem29@gmail.com",
  phone: "+353 89 973 9932",
  linkedin: "https://www.linkedin.com/in/uzair-waseem",
  github: "https://github.com/Assembler-Fourier"
};

const fastFacts = [
  ["Based in", "Dublin, Ireland"],
  ["Education", "MSc Cybersecurity + BSc CS"],
  ["Core stack", "React, Next.js, Node, Python, SQL"],
  ["Open for", "Ireland, hybrid and remote roles"]
];

const strengths = [
  {
    icon: Code2,
    title: "Build",
    body: "Full-stack products with responsive interfaces, APIs, databases, tests and CI/CD."
  },
  {
    icon: BrainCircuit,
    title: "Model",
    body: "ML, anomaly detection, RAG assistants, evaluation loops and Python data pipelines."
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    body: "Threat modeling, OWASP, ISO 27001, NIST CSF, cloud security and secure SDLC."
  },
  {
    icon: Workflow,
    title: "Ship",
    body: "Agile delivery, product thinking, automation, QA coverage and stakeholder clarity."
  }
];

const roleLanes = [
  {
    icon: Code2,
    role: "Software Engineer",
    fit: "React, Next.js, Node.js, REST APIs, PostgreSQL, MongoDB, testing and code review."
  },
  {
    icon: BrainCircuit,
    role: "AI / Data Engineer",
    fit: "Python, scikit-learn, PyTorch, Hugging Face, RAG, vector search, ETL and dashboards."
  },
  {
    icon: Cloud,
    role: "Cloud / DevOps",
    fit: "AWS, Azure, Docker, Kubernetes, Terraform, GitHub Actions, monitoring and releases."
  },
  {
    icon: Bug,
    role: "QA Automation",
    fit: "Playwright, Selenium, Cypress, API testing, regression suites and CI-integrated checks."
  },
  {
    icon: ShieldCheck,
    role: "Security Engineer",
    fit: "Secure SDLC, threat modeling, SIEM, hardening, vulnerability scanning, GDPR controls."
  },
  {
    icon: BriefcaseBusiness,
    role: "Product / Support",
    fit: "Roadmaps, user stories, Jira, Confluence, IT support, documentation and clear delivery."
  }
];

const projects = [
  {
    name: "SentryScan Threat Monitoring",
    type: "Security + AI",
    icon: ShieldCheck,
    summary:
      "Risk-ranked anomaly detection over event and sensor data, exposed through an alerting API and dashboard.",
    stack: ["Python", "FastAPI", "scikit-learn", "SIEM"]
  },
  {
    name: "TaskForge Workflow App",
    type: "Full-stack",
    icon: Workflow,
    summary:
      "Kanban-style team workflow platform with auth, live board updates, REST APIs and release-ready UI.",
    stack: ["React", "Node.js", "MongoDB", "Testing"]
  },
  {
    name: "SecureFlow Delivery Dashboard",
    type: "Product delivery",
    icon: Database,
    summary:
      "Client-facing delivery analytics that turned Jira signals into sprint health, blockers and release status.",
    stack: ["React", "Node.js", "Jira API", "PostgreSQL"]
  },
  {
    name: "PipelineIQ CI/CD",
    type: "Automation",
    icon: Cloud,
    summary:
      "Container-based build, test and deploy pipeline with automated checks, rollback thinking and release visibility.",
    stack: ["GitHub Actions", "Docker", "Kubernetes", "Bash"]
  },
  {
    name: "DocuMind RAG Assistant",
    type: "LLM app",
    icon: BrainCircuit,
    summary:
      "Retrieval-augmented Q&A assistant over internal documents with prompt design, vector search and evaluation.",
    stack: ["LangChain", "Vector DB", "LLM", "Python"]
  },
  {
    name: "RiskLens Compliance Suite",
    type: "GRC",
    icon: CheckCircle2,
    summary:
      "Control mapping and audit-readiness toolkit for spotting security gaps before an audit or review.",
    stack: ["ISO 27001", "NIST CSF", "Risk", "GDPR"]
  }
];

const experience = [
  {
    company: "Motion Sensors",
    location: "Remote - Canada",
    period: "Mar 2026 - Present",
    focus:
      "Building ML-backed product features, APIs, automation and secure deployment workflows for distributed teams."
  },
  {
    company: "Outstanding Marketing",
    location: "Remote - Germany",
    period: "Feb 2025 - Jan 2026",
    focus:
      "Shipped client web products, dashboards, data reports, QA automation and delivery improvements across time zones."
  },
  {
    company: "LocalhostLabs",
    location: "On-site - Pakistan",
    period: "Jun 2024 - Dec 2024",
    focus:
      "Built software features, fixed defects, supported testing, documentation, support and sprint delivery."
  }
];

const education = [
  {
    degree: "MSc in Cybersecurity",
    school: "National College of Ireland, Dublin",
    period: "2025 - 2026"
  },
  {
    degree: "BSc in Computer Science",
    school: "FAST NUCES, Pakistan",
    period: "2020 - 2024"
  }
];

const keywords = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "SQL",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Terraform",
  "GitHub Actions",
  "Playwright",
  "Selenium",
  "PyTorch",
  "LangChain",
  "RAG",
  "OWASP",
  "ISO 27001",
  "NIST CSF",
  "Jira",
  "Power BI",
  "ITIL"
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Uzair Waseem home">
          <span className="brand-mark" aria-hidden="true" />
          <span>Uzair Waseem</span>
        </a>
        <nav className="nav-links">
          <a href="#fit">Fit</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <Image
          className="hero-bg"
          src="/hero-lab.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" aria-hidden="true" />
        <Image
          className="portrait"
          src="/uzair-waseem.png"
          alt="Uzair Waseem"
          width={508}
          height={628}
          priority
        />
        <div className="hero-content shell">
          <p className="eyebrow">
            <MapPin size={16} aria-hidden="true" />
            Dublin, Ireland
          </p>
          <h1>Uzair Waseem</h1>
          <p className="hero-lede">
            Secure product engineer building software, AI systems, cloud
            workflows and automation that make teams faster without making
            systems fragile.
          </p>
          <div className="hero-actions" aria-label="Contact links">
            <a className="button primary" href={`mailto:${contact.email}`}>
              <Mail size={18} aria-hidden="true" />
              Email me
            </a>
            <a
              className="button ghost"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BriefcaseBusiness size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              className="icon-button"
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="fast-strip shell" aria-label="Profile fast facts">
        {fastFacts.map(([label, value]) => (
          <div className="fast-item" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </section>

      <section className="section shell intro-section">
        <div className="section-kicker">
          <Sparkles size={18} aria-hidden="true" />
          Recruiter fast scan
        </div>
        <div className="intro-grid">
          <h2>I am strongest where engineering, security and delivery overlap.</h2>
          <p>
            I am applying across a few role families because my work sits across
            them: building web products, automating delivery, using data and AI,
            securing the stack, and keeping stakeholders aligned. The through
            line is practical ownership from messy problem to shipped result.
          </p>
        </div>
        <div className="strength-grid">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <article className="strength-card" key={item.title}>
                <Icon size={22} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section role-band" id="fit">
        <div className="shell section-heading">
          <div className="section-kicker">
            <BriefcaseBusiness size={18} aria-hidden="true" />
            Role fit
          </div>
          <h2>One portfolio link, several relevant hiring paths.</h2>
        </div>
        <div className="shell role-grid">
          {roleLanes.map((lane) => {
            const Icon = lane.icon;
            return (
              <article className="role-card" key={lane.role}>
                <div className="role-icon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3>{lane.role}</h3>
                <p>{lane.fit}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading split-heading">
          <div>
            <div className="section-kicker">
              <Code2 size={18} aria-hidden="true" />
              Selected work
            </div>
            <h2>Projects with enough range to match the CV in front of them.</h2>
          </div>
          <p>
            Each project is framed around the result, not just the technology:
            build a product, make delivery visible, automate releases, detect
            risk, or turn documents and data into something useful.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.name}>
                <div className="project-top">
                  <span>{project.type}</span>
                  <Icon size={23} aria-hidden="true" />
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <ul className="stack-list" aria-label={`${project.name} stack`}>
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section proof-band">
        <div className="shell proof-grid">
          <div>
            <div className="section-kicker">
              <BriefcaseBusiness size={18} aria-hidden="true" />
              Experience
            </div>
            <h2>Remote-friendly, delivery-minded, comfortable across the stack.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div>
                  <h3>{item.company}</h3>
                  <p>{item.location}</p>
                </div>
                <span>{item.period}</span>
                <p>{item.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell education-grid" aria-label="Education and skills">
        <div className="education-panel">
          <div className="section-kicker">
            <GraduationCap size={18} aria-hidden="true" />
            Education
          </div>
          {education.map((item) => (
            <article className="education-item" key={item.degree}>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
              <span>{item.period}</span>
            </article>
          ))}
        </div>
        <div className="skills-panel">
          <div className="section-kicker">
            <Sparkles size={18} aria-hidden="true" />
            Keywords recruiters search
          </div>
          <div className="keyword-cloud">
            {keywords.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div>
            <div className="section-kicker">
              <Mail size={18} aria-hidden="true" />
              Contact
            </div>
            <h2>Send the role. I will map the work to it quickly.</h2>
            <p>
              Best fit: software, AI/data, cloud/DevOps, security, QA automation,
              product delivery and technical support roles in Ireland or remote.
            </p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`}>
              <Mail size={20} aria-hidden="true" />
              {contact.email}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              <Phone size={20} aria-hidden="true" />
              {contact.phone}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              <BriefcaseBusiness size={20} aria-hidden="true" />
              linkedin.com/in/uzair-waseem
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              <Code2 size={20} aria-hidden="true" />
              github.com/Assembler-Fourier
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="shell footer-line">
          <span>Uzair Waseem</span>
          <span>2026 - Dublin, Ireland</span>
        </div>
      </footer>
    </main>
  );
}
