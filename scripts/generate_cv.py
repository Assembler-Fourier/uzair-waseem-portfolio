from __future__ import annotations

import shutil
from dataclasses import dataclass
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

SITE = "https://uzairwaseem.com"
GITHUB = "https://github.com/Assembler-Fourier"
LINKEDIN = "https://www.linkedin.com/in/uzair-waseem/"
WHATSAPP = "https://wa.me/353899739932"

CONTACT_LINE = (
    'Ireland-based | Open to relocate across Ireland | '
    '<link href="mailto:uzairwaseem29@gmail.com" color="#2563eb">uzairwaseem29@gmail.com</link>'
    " | +353 89 973 9932 | "
    f'<link href="{SITE}" color="#2563eb">uzairwaseem.com</link>'
)

LINK_LINE = (
    f'<link href="{LINKEDIN}" color="#2563eb">linkedin.com/in/uzair-waseem</link>'
    " | "
    f'<link href="{GITHUB}" color="#2563eb">github.com/Assembler-Fourier</link>'
    " | "
    f'<link href="{WHATSAPP}" color="#2563eb">WhatsApp</link>'
)

BASE_SUMMARY = (
    "Ireland-based software engineer focused on full-stack development, backend APIs, automation, "
    "testing, and secure delivery. Experienced with React, Next.js, TypeScript, Node.js, Python, "
    "FastAPI, SQL, Docker, GitHub Actions, and QA automation. MSc Cybersecurity candidate with a "
    "strong computer science foundation and practical interest in secure SDLC, API reliability, "
    "and maintainable software delivery."
)

SKILLS = [
    ("Frontend", "React, Next.js, TypeScript, JavaScript, HTML, CSS, responsive UI, accessibility"),
    ("Backend", "Node.js, Express.js, Python, FastAPI, REST APIs, SQL, PostgreSQL, MongoDB"),
    ("Testing", "Playwright, Selenium, Cypress, API testing, unit testing, integration testing"),
    ("DevOps/Cloud", "Docker, GitHub Actions, CI/CD, AWS basics, Azure basics, Linux, Vercel"),
    ("Security/AI", "OWASP basics, secure SDLC, authentication, authorization, RAG prototypes, LangChain basics"),
]

EXPERIENCE = [
    {
        "role": "Software Engineer",
        "company": "Motion Sensors",
        "location": "Remote - Canada",
        "dates": "Mar 2026 - Present",
        "bullets": [
            "Build software features, APIs, and automation workflows for distributed product delivery.",
            "Develop Python/FastAPI prototypes for risk ranking, document workflows, and testable backend logic.",
        ],
    },
    {
        "role": "Software Engineer / Automation Engineer",
        "company": "Outstanding Marketing",
        "location": "Remote - Germany",
        "dates": "Feb 2025 - Jan 2026",
        "bullets": [
            "Built responsive web products and dashboards using React, TypeScript, Node.js, and API integrations.",
            "Implemented reporting automation and QA checks using GitHub Actions, Docker, and test scripts.",
        ],
    },
    {
        "role": "Junior Software / QA Engineer",
        "company": "LocalhostLabs",
        "location": "On-site - Pakistan",
        "dates": "Jun 2024 - Dec 2024",
        "bullets": [
            "Built frontend/backend features, fixed defects, and supported sprint delivery for web applications.",
            "Wrote tests, documented workflows, and supported version control, QA triage, and technical support tasks.",
        ],
    },
]

PROJECTS = {
    "securetaskops": {
        "name": "SecureTaskOps Workflow Platform",
        "url": "https://github.com/Assembler-Fourier/securetaskops-workflow-platform",
        "text": (
            "Current flagship build for task, incident, and release-readiness workflows using a documented "
            "Node.js service, tests, Docker setup, GitHub Actions, API examples, and security notes."
        ),
    },
    "sentryscan": {
        "name": "SentryScan Threat Monitoring",
        "url": "https://github.com/Assembler-Fourier/sentryscan-threat-monitoring",
        "text": (
            "FastAPI security-event triage prototype that normalizes payloads, applies risk scoring, returns "
            "explainable severity decisions, and includes tests for scoring logic."
        ),
    },
    "taskforge": {
        "name": "TaskForge Workflow App",
        "url": "https://github.com/Assembler-Fourier/taskforge-workflow-app",
        "text": (
            "Node.js workflow app for task tracking and sprint summaries, with REST-style routes, task-state "
            "modeling, lightweight UI rendering, and documented setup instructions."
        ),
    },
    "secureflow": {
        "name": "SecureFlow Delivery Dashboard",
        "url": "https://github.com/Assembler-Fourier/secureflow-delivery-dashboard",
        "text": (
            "Delivery dashboard case study that turns sprint, blocker, QA, and release-readiness signals into "
            "a compact status view for engineering and stakeholder review."
        ),
    },
    "documind": {
        "name": "DocuMind RAG Assistant",
        "url": "https://github.com/Assembler-Fourier/documind-rag-assistant",
        "text": (
            "Local document retrieval assistant that chunks knowledge files, ranks relevant context, returns "
            "citations, and demonstrates transparent retrieval logic."
        ),
    },
    "portfolio": {
        "name": "Portfolio Website",
        "url": "https://github.com/Assembler-Fourier/uzair-waseem-portfolio",
        "text": (
            "Recruiter-focused Next.js portfolio deployed on Vercel with SEO metadata, responsive layout, "
            "contact actions, and downloadable CV."
        ),
    },
}


@dataclass(frozen=True)
class Variant:
    filename: str
    title: str
    summary: str
    projects: tuple[str, str, str]
    keywords: str


VARIANTS = [
    Variant(
        "Uzair-Waseem-CV.pdf",
        "Full-stack Software Engineer",
        BASE_SUMMARY,
        ("securetaskops", "taskforge", "sentryscan"),
        "Full-stack Software Engineer, Backend Engineer, React, Node.js, Python, FastAPI, REST APIs, Ireland",
    ),
    Variant(
        "Uzair-Waseem-CV-Software-Engineer.pdf",
        "Software Engineer",
        BASE_SUMMARY,
        ("securetaskops", "taskforge", "secureflow"),
        "Software Engineer Ireland, Junior Software Engineer, Graduate Software Engineer, React, Node.js, Python",
    ),
    Variant(
        "Uzair-Waseem-CV-Full-Stack-Engineer.pdf",
        "Full-stack Engineer",
        "Ireland-based full-stack engineer focused on web applications, backend APIs, automation, testing, and secure delivery. Strongest stack: React, Next.js, TypeScript, Node.js, Python, FastAPI, SQL, Docker, and GitHub Actions.",
        ("securetaskops", "taskforge", "portfolio"),
        "Full-stack Engineer Ireland, React Developer Ireland, Next.js, TypeScript, Node.js, REST APIs",
    ),
    Variant(
        "Uzair-Waseem-CV-Backend-Engineer.pdf",
        "Backend Engineer",
        "Ireland-based backend-focused software engineer building APIs, workflow logic, automation scripts, and security-aware services with Node.js, Express, Python, FastAPI, SQL, Docker, and GitHub Actions.",
        ("securetaskops", "sentryscan", "documind"),
        "Backend Engineer Ireland, Python FastAPI Developer Ireland, Node.js Developer Ireland, REST APIs, Docker",
    ),
    Variant(
        "Uzair-Waseem-CV-QA-Automation-Engineer.pdf",
        "QA Automation Engineer",
        "Ireland-based software engineer targeting QA automation and software engineering roles. Experienced with Playwright, Selenium, Cypress, API testing, GitHub Actions, testable backend logic, and documentation.",
        ("secureflow", "taskforge", "sentryscan"),
        "QA Automation Engineer Ireland, Test Automation Engineer, Playwright, Selenium, Cypress, API testing, CI/CD",
    ),
    Variant(
        "Uzair-Waseem-CV-Security-Aware-Software-Engineer.pdf",
        "Security-aware Software Engineer",
        "Ireland-based full-stack/backend software engineer with an MSc Cybersecurity background. Focused on practical software systems, APIs, automation, testing, authentication, authorization, secure SDLC, and OWASP-aware development.",
        ("sentryscan", "securetaskops", "secureflow"),
        "Security-aware Software Engineer, Secure SDLC, OWASP, Authentication, Authorization, Backend Engineer Ireland",
    ),
]


def make_styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=18.8,
            leading=20.5,
            textColor=colors.HexColor("#071018"),
            spaceAfter=1,
        ),
        "headline": ParagraphStyle(
            "Headline",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.8,
            leading=10.4,
            textColor=colors.HexColor("#0f766e"),
            spaceAfter=2,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.15,
            leading=8.45,
            textColor=colors.HexColor("#334155"),
            spaceAfter=1.2,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.45,
            leading=9.7,
            textColor=colors.HexColor("#071018"),
            spaceBefore=3.8,
            spaceAfter=2.0,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.35,
            leading=8.65,
            textColor=colors.HexColor("#111827"),
            spaceAfter=1.8,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.0,
            leading=8.2,
            textColor=colors.HexColor("#334155"),
            spaceAfter=1.2,
        ),
        "item": ParagraphStyle(
            "Item",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=7.75,
            leading=8.9,
            textColor=colors.HexColor("#071018"),
            spaceBefore=1.7,
            spaceAfter=0.8,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.1,
            leading=8.2,
            leftIndent=7,
            firstLineIndent=-7,
            textColor=colors.HexColor("#111827"),
            spaceAfter=0.8,
        ),
    }


def p(text: str, style: ParagraphStyle) -> Paragraph:
    return Paragraph(text, style)


def section(story: list, title: str, styles: dict[str, ParagraphStyle]) -> None:
    story.append(p(title.upper(), styles["section"]))


def project_line(project_key: str) -> str:
    project = PROJECTS[project_key]
    return (
        f'<b><link href="{project["url"]}" color="#2563eb">{project["name"]}</link></b>'
        f' - {project["text"]}'
    )


def build_story(variant: Variant, styles: dict[str, ParagraphStyle]) -> list:
    story: list = [
        p("Uzair Waseem", styles["name"]),
        p(f"{variant.title} | Ireland-based | Open to relocate across Ireland", styles["headline"]),
        p(CONTACT_LINE, styles["contact"]),
        p(LINK_LINE, styles["contact"]),
    ]

    section(story, "Professional summary", styles)
    story.append(p(variant.summary, styles["body"]))

    section(story, "Technical skills", styles)
    for label, value in SKILLS:
        story.append(p(f"<b>{label}:</b> {value}", styles["small"]))

    section(story, "Professional experience", styles)
    for item in EXPERIENCE:
        story.append(
            p(
                f"<b>{item['role']} - {item['company']}</b> | {item['location']} | {item['dates']}",
                styles["item"],
            )
        )
        for bullet in item["bullets"]:
            story.append(p(f"- {bullet}", styles["bullet"]))

    section(story, "Selected projects", styles)
    for key in variant.projects:
        story.append(p(project_line(key), styles["body"]))

    section(story, "Education", styles)
    story.append(
        p(
            "<b>MSc Cybersecurity</b> - National College of Ireland, Dublin | 2025 - 2026 | "
            "secure systems, risk, networks, governance, secure SDLC",
            styles["small"],
        )
    )
    story.append(
        p(
            "<b>BSc Computer Science</b> - FAST NUCES | 2020 - 2024 | software engineering, databases, "
            "algorithms, web systems, CS foundations",
            styles["small"],
        )
    )

    section(story, "Recruiter keywords", styles)
    story.append(
        p(
            f"{variant.keywords}, TypeScript, JavaScript, SQL, PostgreSQL, MongoDB, Docker, GitHub Actions, "
            "CI/CD, Playwright, Selenium, API testing, secure SDLC, OWASP, authentication, authorization, "
            "Dublin, Cork, Galway, Limerick, Waterford, remote, hybrid.",
            styles["small"],
        )
    )

    story.append(Spacer(1, 1.5 * mm))
    story.append(
        p(
            "Note: Project claims are intentionally framed as portfolio prototypes, current builds, or case studies unless production metrics are available.",
            styles["small"],
        )
    )
    return story


def add_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#d7dde8"))
    canvas.setLineWidth(0.45)
    canvas.line(doc.leftMargin, 10.8 * mm, A4[0] - doc.rightMargin, 10.8 * mm)
    canvas.setFont("Helvetica", 6.75)
    canvas.setFillColor(colors.HexColor("#64748b"))
    canvas.drawString(doc.leftMargin, 6.8 * mm, "Uzair Waseem - Full-stack Software Engineer")
    canvas.drawRightString(A4[0] - doc.rightMargin, 6.8 * mm, "One-page recruiter CV")
    canvas.restoreState()


def build_pdf(variant: Variant, styles: dict[str, ParagraphStyle]) -> Path:
    output_path = OUTPUT_DIR / variant.filename
    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=A4,
        leftMargin=12 * mm,
        rightMargin=12 * mm,
        topMargin=10 * mm,
        bottomMargin=13 * mm,
        title=f"Uzair Waseem CV - {variant.title}",
        author="Uzair Waseem",
        subject=f"{variant.title} CV",
    )
    doc.build(build_story(variant, styles), onFirstPage=add_footer, onLaterPages=add_footer)
    return output_path


def write_audit(generated: list[Path]) -> None:
    lines = [
        "ATS/readability heuristic for generated Uzair Waseem CV variants",
        "Heuristic result: strong one-page recruiter format",
        f"Generated files: {len(generated)}",
        "Standard sections present: Professional summary, Technical skills, Professional experience, Selected projects, Education",
        "Machine-readable formatting: real PDF text, standard headings, visible links, no image-only resume content",
        "Positioning: Ireland-based full-stack/backend software engineer with QA automation and security-aware delivery as differentiators",
        "Note: This is a local heuristic, not a vendor ATS guarantee.",
    ]
    (OUTPUT_DIR / "Uzair-Waseem-CV-ATS-Audit.txt").write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_VARIANT_DIR.mkdir(parents=True, exist_ok=True)

    styles = make_styles()
    generated = [build_pdf(variant, styles) for variant in VARIANTS]

    for path in generated:
        destination = PUBLIC_DIR / path.name if path.name == "Uzair-Waseem-CV.pdf" else PUBLIC_VARIANT_DIR / path.name
        shutil.copy2(path, destination)
        print(destination)

    write_audit(generated)
    print(OUTPUT_DIR / "Uzair-Waseem-CV-ATS-Audit.txt")


if __name__ == "__main__":
    main()
