from __future__ import annotations

import shutil
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PUBLIC_DIR = ROOT / "public"
PUBLIC_VARIANT_DIR = PUBLIC_DIR / "cv"

MASTER_FILENAME = "Uzair-Waseem-CV.pdf"
LEGACY_VARIANT_FILENAMES = [
    "Uzair-Waseem-CV-Software-Engineer.pdf",
    "Uzair-Waseem-CV-Full-Stack-Engineer.pdf",
    "Uzair-Waseem-CV-Backend-Engineer.pdf",
    "Uzair-Waseem-CV-QA-Automation-Engineer.pdf",
    "Uzair-Waseem-CV-Security-Aware-Software-Engineer.pdf",
]

SITE = "https://uzairwaseem.com"
GITHUB = "https://github.com/Assembler-Fourier"
LINKEDIN = "https://linkedin.com/in/uzair-waseem"
EMAIL = "uzairwaseem29@gmail.com"
PHONE = "+353 89 973 9932"


SECTIONS = [
    (
        "Professional Summary",
        [
            (
                "Ireland-based software engineer focused on full-stack and backend product delivery. "
                "Strongest stack includes React, Next.js, TypeScript, Node.js, Python/FastAPI, PostgreSQL, "
                "REST APIs, Docker, GitHub Actions, and automated testing. MSc Cybersecurity adds practical "
                "strength in secure SDLC, authentication, authorization, validation, and risk-aware engineering."
            )
        ],
    ),
    (
        "Technical Skills",
        [
            "<b>Frontend:</b> React, Next.js, TypeScript, JavaScript, Tailwind CSS",
            "<b>Backend:</b> Node.js, Express, Python, FastAPI, REST APIs, authentication, authorization, validation",
            "<b>Databases:</b> PostgreSQL, MongoDB, SQL, Prisma, SQLAlchemy",
            "<b>Testing:</b> Playwright, Selenium, Cypress, Jest/Vitest, Pytest, Supertest, API testing, regression testing",
            "<b>DevOps:</b> Docker, Docker Compose, GitHub Actions, CI/CD, Linux, Vercel, Render/Fly.io/Railway, basic AWS/Azure",
            "<b>Security-aware delivery:</b> OWASP basics, secure SDLC, input validation, secrets handling, role-based access, risk-aware design",
        ],
    ),
]


EXPERIENCE = [
    {
        "title": "Software Engineer - Motion Sensors",
        "meta": "Remote - Canada | Mar 2026 - Present",
        "bullets": [
            "Build backend APIs, automation workflows, and testable service logic for distributed product delivery.",
            "Develop Python/FastAPI prototypes for risk ranking, document workflows, and structured data processing.",
            "Support Dockerized services, CI/CD-aware delivery, documentation, and secure SDLC practices for reviewable engineering work.",
        ],
    },
    {
        "title": "Software Engineer (Full-Stack) - Outstanding Marketing",
        "meta": "Remote - Germany | Feb 2025 - Jan 2026",
        "bullets": [
            "Shipped React/TypeScript dashboards and web product features backed by Node.js services and third-party API integrations.",
            "Converted stakeholder requirements into scoped tasks, delivery updates, and reviewable work across remote teams.",
            "Added reporting automation and QA checks to improve visibility into releases and reduce repeated manual review.",
        ],
    },
    {
        "title": "Junior Software Engineer - LocalhostLabs",
        "meta": "Pakistan | Jun 2024 - Dec 2024",
        "bullets": [
            "Built front-end and back-end features across web applications, APIs, databases, and responsive interfaces.",
            "Fixed defects, documented workflows, used version control, and supported QA triage and technical support tasks.",
        ],
    },
]


PROJECTS = [
    {
        "title": "SecureTaskOps Workflow Platform",
        "stack": "Node.js, REST APIs, Docker, GitHub Actions, tests",
        "url": "https://github.com/Assembler-Fourier/securetaskops-workflow-platform",
        "bullet": (
            "Built a workflow API for tasks, incidents, and release-readiness signals with validation, "
            "risk scoring, unit tests, Docker setup, GitHub Actions CI, security notes, and reviewer-friendly documentation."
        ),
    },
    {
        "title": "SentryScan Threat Monitoring",
        "stack": "Python, FastAPI, risk scoring, security-event modeling, tests",
        "url": "https://github.com/Assembler-Fourier/sentryscan-threat-monitoring",
        "bullet": (
            "Built a FastAPI security-event triage prototype that normalizes event payloads, applies "
            "rule-based risk scoring, returns explainable severity decisions, and documents limitations honestly."
        ),
    },
    {
        "title": "QA Automation Lab",
        "stack": "Playwright, API testing, GitHub Actions",
        "url": "https://github.com/Assembler-Fourier/qa-automation-lab",
        "bullet": (
            "Created a Playwright API testing suite for SecureTaskOps covering health checks, task filtering, "
            "release-readiness behavior, validation errors, task creation, and CI report artifacts."
        ),
    },
    {
        "title": "Portfolio Website",
        "stack": "Next.js, React, TypeScript, SEO, Vercel",
        "url": "https://github.com/Assembler-Fourier/uzair-waseem-portfolio",
        "bullet": (
            "Built and deployed a recruiter-focused portfolio with project case studies, SEO metadata, "
            "contact links, CV download, and links to live engineering proof."
        ),
    },
]


def make_styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=18.5,
            leading=20.0,
            textColor=colors.HexColor("#111827"),
            spaceAfter=1.8,
        ),
        "headline": ParagraphStyle(
            "Headline",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.5,
            leading=9.8,
            textColor=colors.HexColor("#111827"),
            spaceAfter=2.2,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.0,
            leading=8.2,
            textColor=colors.HexColor("#374151"),
            spaceAfter=1.0,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.2,
            leading=9.2,
            textColor=colors.HexColor("#111827"),
            spaceBefore=4.5,
            spaceAfter=1.4,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.2,
            leading=8.25,
            textColor=colors.HexColor("#111827"),
            spaceAfter=1.5,
        ),
        "item": ParagraphStyle(
            "Item",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=7.45,
            leading=8.35,
            textColor=colors.HexColor("#111827"),
            spaceBefore=1.2,
            spaceAfter=0.4,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=6.8,
            leading=7.7,
            textColor=colors.HexColor("#4b5563"),
            spaceAfter=0.5,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.0,
            leading=8.05,
            leftIndent=7,
            firstLineIndent=-7,
            textColor=colors.HexColor("#111827"),
            spaceAfter=0.6,
        ),
        "link": ParagraphStyle(
            "Link",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=6.75,
            leading=7.6,
            textColor=colors.HexColor("#2563eb"),
            spaceAfter=0.8,
        ),
    }


def p(text: str, style: ParagraphStyle) -> Paragraph:
    return Paragraph(text, style)


def add_section(story: list, title: str, styles: dict[str, ParagraphStyle]) -> None:
    story.append(p(title.upper(), styles["section"]))


def build_story(styles: dict[str, ParagraphStyle]) -> list:
    story: list = [
        p("Uzair Waseem", styles["name"]),
        p("Software Engineer | Full-Stack & Backend | Testing & Security-Aware Delivery", styles["headline"]),
        p(f"Ireland-based | {PHONE} | <link href=\"mailto:{EMAIL}\" color=\"#2563eb\">{EMAIL}</link>", styles["contact"]),
        p(
            f"Portfolio: <link href=\"{SITE}\" color=\"#2563eb\">{SITE}</link> | "
            f"LinkedIn: <link href=\"{LINKEDIN}\" color=\"#2563eb\">{LINKEDIN}</link> | "
            f"GitHub: <link href=\"{GITHUB}\" color=\"#2563eb\">{GITHUB}</link>",
            styles["contact"],
        ),
    ]

    for title, lines in SECTIONS:
        add_section(story, title, styles)
        for line in lines:
            story.append(p(line, styles["body"]))

    add_section(story, "Professional Experience", styles)
    for role in EXPERIENCE:
        story.append(p(role["title"], styles["item"]))
        story.append(p(role["meta"], styles["meta"]))
        for bullet in role["bullets"]:
            story.append(p(f"- {bullet}", styles["bullet"]))

    add_section(story, "Selected Projects", styles)
    for project in PROJECTS:
        story.append(p(project["title"], styles["item"]))
        story.append(p(f"Stack: {project['stack']}", styles["meta"]))
        story.append(p(f"GitHub: <link href=\"{project['url']}\" color=\"#2563eb\">{project['url']}</link>", styles["link"]))
        story.append(p(f"- {project['bullet']}", styles["bullet"]))

    add_section(story, "Education", styles)
    story.append(p("MSc Cybersecurity, National College of Ireland, Dublin | 2025 - 2026", styles["body"]))
    story.append(p("BSc Computer Science, FAST NUCES, Pakistan | 2020 - 2024", styles["body"]))

    add_section(story, "Availability", styles)
    story.append(
        p(
            "Open to software engineering roles across Ireland, including Dublin, Cork, Galway, Limerick, Waterford, remote, and hybrid teams.",
            styles["body"],
        )
    )
    return story


def build_pdf() -> Path:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    output_path = OUTPUT_DIR / MASTER_FILENAME
    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=A4,
        leftMargin=11 * mm,
        rightMargin=11 * mm,
        topMargin=11 * mm,
        bottomMargin=11 * mm,
        title="Uzair Waseem - ATS Software Engineer CV",
        author="Uzair Waseem",
        subject="ATS-friendly software engineering CV",
        keywords=(
            "Software Engineer, Full Stack Engineer, Backend Engineer, QA Automation Engineer, "
            "React, Next.js, TypeScript, Node.js, Python, FastAPI, PostgreSQL, Docker, GitHub Actions, Playwright"
        ),
    )
    doc.build(build_story(make_styles()))
    return output_path


def write_plain_text_cv() -> None:
    plain = """Uzair Waseem
Ireland-based | +353 89 973 9932 | uzairwaseem29@gmail.com
Portfolio: https://uzairwaseem.com
LinkedIn: https://linkedin.com/in/uzair-waseem
GitHub: https://github.com/Assembler-Fourier

Software Engineer | Full-Stack & Backend | Testing & Security-Aware Delivery

Professional Summary
Ireland-based software engineer focused on full-stack and backend product delivery. Strongest stack includes React, Next.js, TypeScript, Node.js, Python/FastAPI, PostgreSQL, REST APIs, Docker, GitHub Actions, and automated testing. MSc Cybersecurity adds practical strength in secure SDLC, authentication, authorization, validation, and risk-aware engineering.

Technical Skills
Frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS
Backend: Node.js, Express, Python, FastAPI, REST APIs, authentication, authorization, validation
Databases: PostgreSQL, MongoDB, SQL, Prisma, SQLAlchemy
Testing: Playwright, Selenium, Cypress, Jest/Vitest, Pytest, Supertest, API testing, regression testing
DevOps: Docker, Docker Compose, GitHub Actions, CI/CD, Linux, Vercel, Render/Fly.io/Railway, basic AWS/Azure
Security-aware delivery: OWASP basics, secure SDLC, input validation, secrets handling, role-based access, risk-aware design

Professional Experience
Software Engineer - Motion Sensors
Remote - Canada | Mar 2026 - Present
- Build backend APIs, automation workflows, and testable service logic for distributed product delivery.
- Develop Python/FastAPI prototypes for risk ranking, document workflows, and structured data processing.
- Support Dockerized services, CI/CD-aware delivery, documentation, and secure SDLC practices for reviewable engineering work.

Software Engineer (Full-Stack) - Outstanding Marketing
Remote - Germany | Feb 2025 - Jan 2026
- Shipped React/TypeScript dashboards and web product features backed by Node.js services and third-party API integrations.
- Converted stakeholder requirements into scoped tasks, delivery updates, and reviewable work across remote teams.
- Added reporting automation and QA checks to improve visibility into releases and reduce repeated manual review.

Junior Software Engineer - LocalhostLabs
Pakistan | Jun 2024 - Dec 2024
- Built front-end and back-end features across web applications, APIs, databases, and responsive interfaces.
- Fixed defects, documented workflows, used version control, and supported QA triage and technical support tasks.

Selected Projects
SecureTaskOps Workflow Platform
Stack: Node.js, REST APIs, Docker, GitHub Actions, tests
GitHub: https://github.com/Assembler-Fourier/securetaskops-workflow-platform
- Built a workflow API for tasks, incidents, and release-readiness signals with validation, risk scoring, unit tests, Docker setup, GitHub Actions CI, security notes, and reviewer-friendly documentation.

SentryScan Threat Monitoring
Stack: Python, FastAPI, risk scoring, security-event modeling, tests
GitHub: https://github.com/Assembler-Fourier/sentryscan-threat-monitoring
- Built a FastAPI security-event triage prototype that normalizes event payloads, applies rule-based risk scoring, returns explainable severity decisions, and documents limitations honestly.

QA Automation Lab
Stack: Playwright, API testing, GitHub Actions
GitHub: https://github.com/Assembler-Fourier/qa-automation-lab
- Created a Playwright API testing suite for SecureTaskOps covering health checks, task filtering, release-readiness behavior, validation errors, task creation, and CI report artifacts.

Portfolio Website
Stack: Next.js, React, TypeScript, SEO, Vercel
Live: https://uzairwaseem.com
GitHub: https://github.com/Assembler-Fourier/uzair-waseem-portfolio
- Built and deployed a recruiter-focused portfolio with project case studies, SEO metadata, contact links, CV download, and links to live engineering proof.

Education
MSc Cybersecurity, National College of Ireland, Dublin | 2025 - 2026
BSc Computer Science, FAST NUCES, Pakistan | 2020 - 2024

Availability
Open to software engineering roles across Ireland, including Dublin, Cork, Galway, Limerick, Waterford, remote, and hybrid teams.
"""
    (OUTPUT_DIR / "Uzair-Waseem-CV-ATS.txt").write_text(plain, encoding="utf-8")


def write_audit(master: Path) -> None:
    lines = [
        "ATS/readability heuristic for Uzair Waseem CV",
        "Heuristic result: plain one-column ATS-focused format",
        f"Generated file: {master.name}",
        "Standard sections present: Professional Summary, Technical Skills, Professional Experience, Selected Projects, Education, Availability",
        "Machine-readable formatting: real PDF text, standard headings, visible links, no icons, no graphics, no tables",
        "Positioning: Ireland-based software engineer with full-stack/backend focus, QA automation support, and security-aware delivery as differentiator",
        "Note: This is a local heuristic, not a vendor ATS guarantee.",
    ]
    (OUTPUT_DIR / "Uzair-Waseem-CV-ATS-Audit.txt").write_text("\n".join(lines), encoding="utf-8")


def publish(master: Path) -> None:
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_VARIANT_DIR.mkdir(parents=True, exist_ok=True)
    shutil.copy2(master, PUBLIC_DIR / MASTER_FILENAME)
    for filename in LEGACY_VARIANT_FILENAMES:
        shutil.copy2(master, PUBLIC_VARIANT_DIR / filename)


def main() -> None:
    master = build_pdf()
    publish(master)
    write_plain_text_cv()
    write_audit(master)
    print(PUBLIC_DIR / MASTER_FILENAME)
    for filename in LEGACY_VARIANT_FILENAMES:
        print(PUBLIC_VARIANT_DIR / filename)
    print(OUTPUT_DIR / "Uzair-Waseem-CV-ATS.txt")
    print(OUTPUT_DIR / "Uzair-Waseem-CV-ATS-Audit.txt")


if __name__ == "__main__":
    main()
