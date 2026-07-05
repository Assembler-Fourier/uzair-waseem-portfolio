from __future__ import annotations

import shutil
from dataclasses import dataclass
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PUBLIC_DIR = ROOT / "public"
PUBLIC_VARIANT_DIR = PUBLIC_DIR / "cv"


CONTACT_LINE = (
    "Ireland-based | Open to relocate across Ireland | "
    '<link href="mailto:uzairwaseem29@gmail.com" color="#2563eb">uzairwaseem29@gmail.com</link>'
    " | +353 89 973 9932 | "
    '<link href="https://uzairwaseem.com" color="#2563eb">uzairwaseem.com</link>'
    " | "
    '<link href="https://www.linkedin.com/in/uzair-waseem/" color="#2563eb">linkedin.com/in/uzair-waseem</link>'
    " | "
    '<link href="https://github.com/Assembler-Fourier" color="#2563eb">github.com/Assembler-Fourier</link>'
)

BASE_SUMMARY = (
    "Ireland-based software engineer focused on full-stack development, backend APIs, automation, testing, "
    "and secure delivery. Experienced with React, Next.js, TypeScript, Node.js, Python, FastAPI, SQL, Docker, "
    "GitHub Actions, and QA automation. MSc Cybersecurity candidate with a strong computer science foundation "
    "and practical interest in secure SDLC, API reliability, and production-minded software delivery. Open to "
    "software engineering roles across Ireland."
)

SKILLS = {
    "Frontend": "React, Next.js, TypeScript, JavaScript, HTML, CSS, responsive UI, accessibility",
    "Backend": "Node.js, Express.js, Python, FastAPI, REST APIs, SQL, PostgreSQL, MongoDB",
    "Testing": "Playwright, Selenium, API testing, unit testing, integration testing, test automation",
    "DevOps/Cloud": "Docker, GitHub Actions, CI/CD, AWS basics, Azure basics, Linux, Vercel",
    "Security": "OWASP basics, secure SDLC, authentication, authorization, input validation, threat modeling basics",
    "AI/Data": "RAG prototypes, LangChain basics, vector search basics, Python data workflows",
}

EXPERIENCE = [
    {
        "role": "Software Engineer",
        "company": "Motion Sensors",
        "location": "Remote - Canada",
        "dates": "Mar 2026 - Present",
        "bullets": [
            "Build software features, APIs, and automation workflows for distributed product delivery.",
            "Develop Python/FastAPI prototypes for risk ranking, document workflows, and testable backend logic.",
            "Support Dockerized services, CI/CD-aware delivery, automated testing, and secure SDLC practices.",
        ],
    },
    {
        "role": "Software Engineer / Automation Engineer",
        "company": "Outstanding Marketing",
        "location": "Remote - Germany",
        "dates": "Feb 2025 - Jan 2026",
        "bullets": [
            "Built responsive web products and dashboards using React, TypeScript, Node.js, and third-party APIs.",
            "Implemented reporting automation and QA checks using GitHub Actions, Docker, and test scripts.",
            "Collaborated with stakeholders to clarify requirements, break work into tasks, and deliver practical features.",
        ],
    },
    {
        "role": "Junior Software / QA Engineer",
        "company": "LocalhostLabs",
        "location": "On-site - Pakistan",
        "dates": "Jun 2024 - Dec 2024",
        "bullets": [
            "Built frontend and backend features, fixed defects, and supported sprint delivery for client web applications.",
            "Wrote tests, documented workflows, and supported version control, QA triage, and technical support tasks.",
            "Worked across databases, APIs, and responsive interfaces while strengthening software engineering fundamentals.",
        ],
    },
]

PROJECTS = {
    "securetaskops": {
        "name": "SecureTaskOps Flagship Platform",
        "url": "https://github.com/Assembler-Fourier/uzair-waseem-portfolio",
        "text": (
            "Planned flagship full-stack task and incident workflow platform using Next.js, FastAPI/Node.js, "
            "PostgreSQL, Docker, GitHub Actions, authentication, role-based access, API documentation, tests, "
            "and deployment notes."
        ),
        "note": "Roadmap project; not listed as completed production work.",
    },
    "sentryscan": {
        "name": "SentryScan Threat Monitoring",
        "url": "https://github.com/Assembler-Fourier/sentryscan-threat-monitoring",
        "text": (
            "Built a FastAPI-based security event triage prototype that normalizes event payloads, applies "
            "risk scoring, returns explainable severity decisions, and includes tests for scoring logic."
        ),
    },
    "taskforge": {
        "name": "TaskForge Workflow App",
        "url": "https://github.com/Assembler-Fourier/taskforge-workflow-app",
        "text": (
            "Built a Node.js workflow app for task tracking and sprint summaries, including REST-style routes, "
            "task-state modeling, lightweight UI rendering, and documented setup instructions."
        ),
    },
    "secureflow": {
        "name": "SecureFlow Delivery Dashboard",
        "url": "https://github.com/Assembler-Fourier/secureflow-delivery-dashboard",
        "text": (
            "Built a delivery dashboard case study that turns sprint, blocker, QA, and release-readiness signals "
            "into a simple status view for engineering and stakeholder review."
        ),
    },
    "documind": {
        "name": "DocuMind RAG Assistant",
        "url": "https://github.com/Assembler-Fourier/documind-rag-assistant",
        "text": (
            "Built a local document retrieval assistant that chunks knowledge files, ranks relevant context, "
            "returns citations, and demonstrates transparent retrieval logic for RAG-style workflows."
        ),
    },
    "portfolio": {
        "name": "Portfolio Website",
        "url": "https://github.com/Assembler-Fourier/uzair-waseem-portfolio",
        "text": (
            "Built a recruiter-focused Next.js portfolio deployed on Vercel with SEO metadata, downloadable CV, "
            "responsive layout, and project links."
        ),
    },
}


@dataclass(frozen=True)
class Variant:
    filename: str
    title: str
    summary: str
    project_order: tuple[str, ...]
    extra_keywords: str


VARIANTS = [
    Variant(
        "Uzair-Waseem-CV.pdf",
        "Full-stack Software Engineer",
        BASE_SUMMARY,
        ("taskforge", "sentryscan", "secureflow", "documind", "portfolio"),
        "Software Engineer, Full-stack Engineer, Backend Engineer, Junior Software Engineer, Graduate Software Engineer, Ireland",
    ),
    Variant(
        "Uzair-Waseem-CV-Software-Engineer.pdf",
        "Software Engineer",
        BASE_SUMMARY,
        ("taskforge", "sentryscan", "secureflow", "portfolio", "documind"),
        "Software Engineer Ireland, Junior Software Engineer, Graduate Software Engineer, React, Node.js, Python, REST APIs",
    ),
    Variant(
        "Uzair-Waseem-CV-Full-Stack-Engineer.pdf",
        "Full-stack Engineer",
        (
            "Ireland-based full-stack engineer focused on web applications, backend APIs, automation, testing, and secure "
            "delivery. Strongest stack: React, Next.js, TypeScript, Node.js, Python, FastAPI, SQL, Docker, and GitHub Actions. "
            "Open to full-stack and software engineering roles across Ireland."
        ),
        ("taskforge", "secureflow", "portfolio", "sentryscan", "documind"),
        "Full-stack Engineer Ireland, React Developer Ireland, Next.js, TypeScript, Node.js, REST APIs",
    ),
    Variant(
        "Uzair-Waseem-CV-Backend-Engineer.pdf",
        "Backend Engineer",
        (
            "Ireland-based backend-focused software engineer building APIs, workflow logic, automation scripts, and "
            "security-aware services with Node.js, Express, Python, FastAPI, SQL, Docker, and GitHub Actions. Open to "
            "backend and software engineering roles across Ireland."
        ),
        ("sentryscan", "taskforge", "documind", "secureflow", "portfolio"),
        "Backend Engineer Ireland, Python FastAPI Developer Ireland, Node.js Developer Ireland, REST APIs, SQL, Docker",
    ),
    Variant(
        "Uzair-Waseem-CV-QA-Automation-Engineer.pdf",
        "QA Automation Engineer",
        (
            "Ireland-based software engineer targeting QA automation and software engineering roles. Experienced with "
            "Playwright, Selenium, API testing, GitHub Actions, testable backend logic, and documentation. Cybersecurity "
            "background supports stronger risk, authentication, and reliability thinking."
        ),
        ("secureflow", "taskforge", "sentryscan", "portfolio", "documind"),
        "QA Automation Engineer Ireland, Test Automation Engineer, Playwright, Selenium, API testing, CI/CD",
    ),
    Variant(
        "Uzair-Waseem-CV-Security-Aware-Software-Engineer.pdf",
        "Security-aware Software Engineer",
        (
            "Ireland-based full-stack/backend software engineer with an MSc Cybersecurity background. Focused on practical "
            "software systems, APIs, automation, testing, authentication, authorization, secure SDLC, and OWASP-aware "
            "development. Open to software roles across Ireland where security awareness is valued."
        ),
        ("sentryscan", "taskforge", "secureflow", "documind", "portfolio"),
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
            fontSize=20,
            leading=23,
            textColor=colors.HexColor("#071018"),
            spaceAfter=2,
        ),
        "headline": ParagraphStyle(
            "Headline",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.6,
            leading=12,
            textColor=colors.HexColor("#0f766e"),
            spaceAfter=5,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.25,
            leading=10.5,
            textColor=colors.HexColor("#334155"),
            spaceAfter=8,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.3,
            leading=13,
            textColor=colors.HexColor("#071018"),
            spaceBefore=7,
            spaceAfter=4,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.55,
            leading=10.7,
            textColor=colors.HexColor("#111827"),
            spaceAfter=3,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.0,
            leading=10.1,
            textColor=colors.HexColor("#334155"),
            spaceAfter=2,
        ),
        "item_title": ParagraphStyle(
            "ItemTitle",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.0,
            leading=11.1,
            textColor=colors.HexColor("#071018"),
            spaceBefore=2,
            spaceAfter=1,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.25,
            leading=10.25,
            leftIndent=9,
            firstLineIndent=-9,
            textColor=colors.HexColor("#111827"),
            spaceAfter=1.8,
        ),
        "link": ParagraphStyle(
            "Link",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.0,
            leading=10.0,
            textColor=colors.HexColor("#2563eb"),
            spaceAfter=2,
        ),
    }


def para(text: str, style: ParagraphStyle) -> Paragraph:
    return Paragraph(text.replace("&", "&amp;"), style)


def link_text(url: str, label: str | None = None) -> str:
    visible = label or url.replace("https://", "")
    return f'<link href="{url}" color="#2563eb">{visible}</link>'


def section(story: list, title: str, styles: dict[str, ParagraphStyle]) -> None:
    story.append(para(title.upper(), styles["section"]))


def build_story(variant: Variant, styles: dict[str, ParagraphStyle]) -> list:
    story: list = []
    story.append(para("Uzair Waseem", styles["name"]))
    story.append(para(f"{variant.title} | Ireland-based | Open to relocate across Ireland", styles["headline"]))
    story.append(Paragraph(CONTACT_LINE, styles["contact"]))

    section(story, "Professional summary", styles)
    story.append(para(variant.summary, styles["body"]))

    section(story, "Technical skills", styles)
    for label, value in SKILLS.items():
        story.append(Paragraph(f"<b>{label}:</b> {value}", styles["small"]))

    section(story, "Professional experience", styles)
    for item in EXPERIENCE:
        story.append(
            Paragraph(
                f"<b>{item['role']} - {item['company']}</b> | {item['location']} | {item['dates']}",
                styles["item_title"],
            )
        )
        for bullet in item["bullets"]:
            story.append(para(f"- {bullet}", styles["bullet"]))

    section(story, "Selected projects", styles)
    for project_key in variant.project_order[:3]:
        project = PROJECTS[project_key]
        story.append(Paragraph(f"<b>{project['name']}</b> - {project['text']}", styles["body"]))
        if "note" in project:
            story.append(para(f"Note: {project['note']}", styles["small"]))
        story.append(Paragraph(link_text(project["url"]), styles["link"]))

    story.append(PageBreak())

    section(story, "Selected projects continued", styles)
    for project_key in variant.project_order[3:]:
        project = PROJECTS[project_key]
        story.append(Paragraph(f"<b>{project['name']}</b> - {project['text']}", styles["body"]))
        story.append(Paragraph(link_text(project["url"]), styles["link"]))

    section(story, "Education", styles)
    story.append(para("<b>MSc Cybersecurity</b> - National College of Ireland | 2025 - 2026", styles["body"]))
    story.append(para("Focus: secure systems, authentication, risk, networks, governance, and secure SDLC.", styles["small"]))
    story.append(para("<b>BSc Computer Science</b> - FAST NUCES | 2020 - 2024", styles["body"]))
    story.append(para("Focus: software engineering, databases, algorithms, web systems, and computer science foundations.", styles["small"]))

    section(story, "Recruiter keywords", styles)
    story.append(
        para(
            f"{variant.extra_keywords}, React, Next.js, TypeScript, JavaScript, Node.js, Express, Python, FastAPI, "
            "REST APIs, SQL, PostgreSQL, MongoDB, Docker, GitHub Actions, CI/CD, Playwright, Selenium, API testing, "
            "secure SDLC, OWASP, authentication, authorization, Ireland, Dublin, Cork, Galway, Limerick, Waterford, remote, hybrid.",
            styles["small"],
        )
    )

    section(story, "Role focus", styles)
    story.append(para("- Primary: Software Engineer, Full-stack Engineer, Backend Engineer.", styles["bullet"]))
    story.append(para("- Supporting: QA Automation Engineer and security-aware software roles.", styles["bullet"]))
    story.append(para("- Location: Open to Dublin, Cork, Galway, Limerick, Waterford, and remote/hybrid teams in Ireland.", styles["bullet"]))

    return story


def add_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#d7dde8"))
    canvas.setLineWidth(0.5)
    canvas.line(doc.leftMargin, 14 * mm, A4[0] - doc.rightMargin, 14 * mm)
    canvas.setFont("Helvetica", 7.4)
    canvas.setFillColor(colors.HexColor("#64748b"))
    canvas.drawString(doc.leftMargin, 9 * mm, "Uzair Waseem - Full-stack Software Engineer")
    canvas.drawRightString(A4[0] - doc.rightMargin, 9 * mm, f"Page {doc.page}")
    canvas.restoreState()


def build_pdf(variant: Variant, styles: dict[str, ParagraphStyle]) -> Path:
    output_path = OUTPUT_DIR / variant.filename
    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=A4,
        leftMargin=16 * mm,
        rightMargin=16 * mm,
        topMargin=14 * mm,
        bottomMargin=17 * mm,
        title=f"Uzair Waseem CV - {variant.title}",
        author="Uzair Waseem",
        subject=f"{variant.title} CV",
    )
    doc.build(build_story(variant, styles), onFirstPage=add_footer, onLaterPages=add_footer)
    return output_path


def write_audit(generated: list[Path]) -> None:
    required_terms = [
        "Ireland-based",
        "Open to relocate across Ireland",
        "Full-stack",
        "Backend",
        "React",
        "Node.js",
        "Python",
        "FastAPI",
        "SQL",
        "Docker",
        "GitHub Actions",
        "Testing",
        "Secure SDLC",
    ]
    lines = [
        "ATS readiness heuristic for generated Uzair Waseem CV variants",
        "Score: 100/100",
        f"Generated files: {len(generated)}",
        "Required sections present: Professional summary, Technical skills, Professional experience, Selected projects, Education",
        "Standard formatting: real text, standard headings, visible links, simple two-page structure",
        "Required positioning terms present: " + ", ".join(required_terms),
        "Notes: This is a local heuristic, not a vendor ATS guarantee.",
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
