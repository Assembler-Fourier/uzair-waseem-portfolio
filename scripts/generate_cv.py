from __future__ import annotations

import shutil
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PUBLIC_DIR = ROOT / "public"
OUTPUT_PDF = OUTPUT_DIR / "Uzair-Waseem-CV.pdf"
PUBLIC_PDF = PUBLIC_DIR / "Uzair-Waseem-CV.pdf"


PROFILE = (
    "Dublin-based software, AI and cybersecurity engineer building production-ready "
    "web products, data workflows, QA systems and secure delivery pipelines. Strong "
    "Computer Science foundation, MSc Cybersecurity in progress, and hands-on work "
    "across React, Next.js, Node.js, Python, FastAPI, SQL, cloud automation, testing "
    "and secure SDLC. Open to Software Engineer, AI/Data Engineer, Cloud/DevOps, "
    "Cybersecurity and QA Automation roles across Ireland, hybrid and remote markets."
)

SKILLS = [
    ("Languages", "TypeScript, JavaScript, Python, SQL, HTML, CSS"),
    ("Frontend", "React, Next.js, responsive UI, accessibility, SEO, dashboard UX"),
    ("Backend & Data", "Node.js, FastAPI, REST APIs, PostgreSQL, MongoDB, ETL, Power BI"),
    ("Cloud & DevOps", "AWS, Azure, Docker, Kubernetes, Terraform, GitHub Actions, CI/CD, Vercel"),
    ("QA & Automation", "Playwright, Selenium, Cypress, API testing, regression testing, Jira"),
    ("AI & Security", "PyTorch, scikit-learn, Hugging Face, LangChain, RAG, vector search, OWASP, secure SDLC, threat modeling, SIEM, ISO 27001, NIST CSF, GDPR"),
]

EXPERIENCE = [
    {
        "role": "Software / AI Engineer",
        "company": "Motion Sensors",
        "location": "Remote - Canada",
        "dates": "Mar 2026 - Present",
        "bullets": [
            "Build ML-backed product features, APIs and automation workflows for distributed product delivery.",
            "Develop risk-ranking, anomaly-detection and document-workflow prototypes using Python, FastAPI and model-evaluation patterns.",
            "Support Dockerized services, CI/CD-aware delivery, automated testing and secure SDLC practices across product work.",
        ],
    },
    {
        "role": "Software Engineer / Automation Engineer",
        "company": "Outstanding Marketing",
        "location": "Remote - Germany",
        "dates": "Feb 2025 - Jan 2026",
        "bullets": [
            "Shipped responsive web products and dashboards using React, TypeScript, Node.js and third-party API integrations.",
            "Automated reporting, QA checks and delivery workflows with GitHub Actions, Docker and test automation.",
            "Translated stakeholder requirements into scoped user stories, release updates and practical delivery plans for remote teams.",
        ],
    },
    {
        "role": "Junior Software / QA Engineer",
        "company": "LocalhostLabs",
        "location": "On-site - Pakistan",
        "dates": "Jun 2024 - Dec 2024",
        "bullets": [
            "Built frontend and backend features, fixed defects and supported sprint delivery for client web applications.",
            "Wrote tests, documented workflows and supported version control, QA triage and technical support tasks.",
            "Worked across databases, APIs and responsive interfaces while strengthening software engineering fundamentals.",
        ],
    },
]

PROJECTS = [
    {
        "name": "SentryScan Threat Monitoring",
        "url": "https://github.com/Assembler-Fourier/sentryscan-threat-monitoring",
        "text": "Risk-ranked security event triage prototype with anomaly scoring, FastAPI endpoint and CI tests.",
        "stack": "Python, FastAPI, security events, SIEM-style triage",
    },
    {
        "name": "TaskForge Workflow App",
        "url": "https://github.com/Assembler-Fourier/taskforge-workflow-app",
        "text": "API-first workflow board with task states, sprint summaries and a rendered product view.",
        "stack": "Node.js, JavaScript, REST-style APIs, workflow modeling",
    },
    {
        "name": "SecureFlow Delivery Dashboard",
        "url": "https://github.com/Assembler-Fourier/secureflow-delivery-dashboard",
        "text": "Delivery analytics dashboard for sprint health, blocker pressure, QA confidence and release readiness.",
        "stack": "Node.js, dashboards, CI/CD signals, release readiness",
    },
    {
        "name": "DocuMind RAG Assistant",
        "url": "https://github.com/Assembler-Fourier/documind-rag-assistant",
        "text": "Document retrieval assistant with chunking, transparent scoring, citations and answer drafting.",
        "stack": "Python, RAG architecture, document retrieval",
    },
    {
        "name": "Portfolio Website",
        "url": "https://github.com/Assembler-Fourier/uzair-waseem-portfolio",
        "text": "Recruiter-focused Next.js portfolio deployed on Vercel with SEO metadata and project links.",
        "stack": "Next.js, React, TypeScript, Vercel, SEO",
    },
]


def make_styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=20,
            leading=23,
            textColor=colors.HexColor("#071018"),
            spaceAfter=2,
        ),
        "headline": ParagraphStyle(
            "Headline",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.5,
            leading=12,
            textColor=colors.HexColor("#0f766e"),
            spaceAfter=5,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.6,
            leading=11,
            textColor=colors.HexColor("#334155"),
            spaceAfter=8,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=13,
            textColor=colors.HexColor("#071018"),
            borderPadding=(5, 0, 2),
            borderColor=colors.HexColor("#cbd5e1"),
            borderWidth=0,
            spaceBefore=7,
            spaceAfter=4,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.8,
            leading=11.2,
            textColor=colors.HexColor("#111827"),
            spaceAfter=3,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.1,
            leading=10.3,
            textColor=colors.HexColor("#334155"),
            spaceAfter=2,
        ),
        "item_title": ParagraphStyle(
            "ItemTitle",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.1,
            leading=11.2,
            textColor=colors.HexColor("#071018"),
            spaceBefore=2,
            spaceAfter=1,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.45,
            leading=10.5,
            leftIndent=9,
            firstLineIndent=-9,
            textColor=colors.HexColor("#111827"),
            spaceAfter=1.8,
        ),
        "link": ParagraphStyle(
            "Link",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.25,
            leading=10.2,
            textColor=colors.HexColor("#2563eb"),
            spaceAfter=2,
        ),
    }


def p(text: str, style: ParagraphStyle) -> Paragraph:
    return Paragraph(text.replace("&", "&amp;"), style)


def link_text(url: str, label: str | None = None) -> str:
    visible = label or url.replace("https://", "")
    return f'<link href="{url}" color="#2563eb">{visible}</link>'


def add_section(story: list, title: str, styles: dict[str, ParagraphStyle]) -> None:
    story.append(p(title.upper(), styles["section"]))


def build_story(styles: dict[str, ParagraphStyle]) -> list:
    story: list = []
    story.append(p("Uzair Waseem", styles["name"]))
    story.append(p("Software, AI & Cybersecurity Engineer - Dublin, Ireland", styles["headline"]))
    story.append(
        Paragraph(
            "Dublin, Ireland | "
            '<link href="mailto:uzairwaseem29@gmail.com" color="#2563eb">uzairwaseem29@gmail.com</link>'
            " | +353 89 973 9932 | "
            f"{link_text('https://uzairwaseem.com')} | "
            f"{link_text('https://www.linkedin.com/in/uzair-waseem/', 'linkedin.com/in/uzair-waseem')} | "
            f"{link_text('https://github.com/Assembler-Fourier', 'github.com/Assembler-Fourier')}",
            styles["contact"],
        )
    )

    add_section(story, "Professional summary", styles)
    story.append(p(PROFILE, styles["body"]))

    add_section(story, "Core skills", styles)
    for label, value in SKILLS:
        story.append(Paragraph(f"<b>{label}:</b> {value}", styles["small"]))

    add_section(story, "Professional experience", styles)
    for item in EXPERIENCE:
        story.append(
            Paragraph(
                f"<b>{item['role']} - {item['company']}</b> | {item['location']} | {item['dates']}",
                styles["item_title"],
            )
        )
        for bullet in item["bullets"]:
            story.append(p(f"- {bullet}", styles["bullet"]))

    add_section(story, "Selected project repositories", styles)
    for project in PROJECTS[:3]:
        story.append(Paragraph(f"<b>{project['name']}</b> - {project['text']}", styles["body"]))
        story.append(Paragraph(f"Stack: {project['stack']} | {link_text(project['url'])}", styles["link"]))

    story.append(PageBreak())

    add_section(story, "Selected project repositories continued", styles)
    for project in PROJECTS[3:]:
        story.append(Paragraph(f"<b>{project['name']}</b> - {project['text']}", styles["body"]))
        story.append(Paragraph(f"Stack: {project['stack']} | {link_text(project['url'])}", styles["link"]))

    add_section(story, "Education", styles)
    story.append(p("<b>MSc Cybersecurity</b> - National College of Ireland, Dublin | 2025 - 2026", styles["body"]))
    story.append(p("Focus: secure systems, risk, networks, governance and secure delivery.", styles["small"]))
    story.append(p("<b>BSc Computer Science</b> - FAST NUCES, Pakistan | 2020 - 2024", styles["body"]))
    story.append(p("Focus: software engineering, databases, algorithms, AI/data foundations and systems.", styles["small"]))

    add_section(story, "Recruiter keywords", styles)
    story.append(
        p(
            "React, Next.js, TypeScript, JavaScript, Node.js, Python, FastAPI, SQL, PostgreSQL, MongoDB, REST APIs, "
            "GitHub Actions, Docker, Kubernetes, AWS, Azure, Terraform, CI/CD, Playwright, Selenium, Cypress, API testing, "
            "QA automation, PyTorch, scikit-learn, Hugging Face, LangChain, RAG, vector search, ETL, dashboards, OWASP, "
            "secure SDLC, threat modeling, SIEM, ISO 27001, NIST CSF, GDPR, Jira, Confluence, Power BI, ITIL.",
            styles["small"],
        )
    )

    add_section(story, "Role fit", styles)
    for line in [
        "Software / Full-stack Engineer: product interfaces, APIs, data models, testing and secure releases.",
        "AI / Data Engineer: Python workflows, retrieval systems, model evaluation, data pipelines and dashboards.",
        "Cloud / DevOps Engineer: containers, CI/CD, cloud deployment paths, monitoring and infrastructure automation.",
        "Cybersecurity Engineer: secure SDLC, OWASP, threat modeling, risk context, SIEM-style monitoring and governance.",
        "QA Automation Engineer: Playwright/Selenium/Cypress, API testing, regression checks and defect triage.",
    ]:
        story.append(p(f"- {line}", styles["bullet"]))

    return story


def add_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#d7dde8"))
    canvas.setLineWidth(0.5)
    canvas.line(doc.leftMargin, 14 * mm, A4[0] - doc.rightMargin, 14 * mm)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(colors.HexColor("#64748b"))
    canvas.drawString(doc.leftMargin, 9 * mm, "Uzair Waseem - Software, AI & Cybersecurity Engineer")
    canvas.drawRightString(A4[0] - doc.rightMargin, 9 * mm, f"Page {doc.page}")
    canvas.restoreState()


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    styles = make_styles()
    doc = SimpleDocTemplate(
        str(OUTPUT_PDF),
        pagesize=A4,
        leftMargin=16 * mm,
        rightMargin=16 * mm,
        topMargin=14 * mm,
        bottomMargin=17 * mm,
        title="Uzair Waseem CV",
        author="Uzair Waseem",
        subject="Software, AI and Cybersecurity Engineer CV",
    )
    doc.build(build_story(styles), onFirstPage=add_footer, onLaterPages=add_footer)
    shutil.copy2(OUTPUT_PDF, PUBLIC_PDF)
    print(OUTPUT_PDF)
    print(PUBLIC_PDF)


if __name__ == "__main__":
    main()
