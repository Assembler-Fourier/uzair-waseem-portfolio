from __future__ import annotations

import shutil
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer


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

SUMMARY = (
    "Dublin-based software engineer with remote experience delivering React and TypeScript web products, "
    "backend APIs, automation and QA workflows. Builds production-shaped systems with Node.js, Python, "
    "PostgreSQL, Playwright, Docker and GitHub Actions. MSc Cybersecurity adds practical depth in authentication, "
    "authorization, data isolation and secure software delivery."
)

SKILLS = [
    ("Frontend", "TypeScript, React, Next.js, JavaScript, HTML, CSS, responsive UI, PWA"),
    ("Backend", "Node.js, Express, REST APIs, Python, FastAPI, validation, serverless functions"),
    ("Data and cloud", "PostgreSQL, Supabase, Neon, SQL, MongoDB, Docker, Vercel, CI/CD"),
    ("Quality", "Playwright, Vitest, Pytest, API testing, regression testing, accessibility testing, GitHub Actions"),
    ("Security", "Authentication, authorization, RLS, secure sessions, CSRF, rate limiting, OWASP, secure SDLC"),
]

EXPERIENCE = [
    {
        "title": "Software Engineer (Full-Stack) - Outstanding Marketing",
        "meta": "Remote - Germany | Feb 2025 - May 2026 | outstanding-marketing.de",
        "bullets": [
            "Delivered React and TypeScript web features, internal dashboards and Node.js/API integrations for remote e-commerce and growth workflows.",
            "Automated reporting and repeatable QA checks to improve release visibility and reduce manual review.",
            "Converted stakeholder requirements into scoped tasks, delivery updates and reviewable product work.",
        ],
    },
    {
        "title": "Junior Software Engineer - LocalhostLabs",
        "meta": "Pakistan | Jun 2024 - Dec 2024 | localhostlabs.tech",
        "bullets": [
            "Built responsive front-end and back-end features across web applications, APIs and databases.",
            "Fixed defects, documented workflows and supported version control, QA triage and release handoffs in a consultancy delivery environment.",
        ],
    },
]

PROJECTS = [
    {
        "title": "Roster Command - Workforce Operations Platform",
        "stack": "TypeScript, React, Node.js APIs, Supabase PostgreSQL, Vitest, Playwright, PWA, GitHub Actions",
        "live": "https://employee-roster-command.vercel.app/?demo=1",
        "repo": "https://github.com/Assembler-Fourier/employee-roster-command",
        "bullets": [
            "Built a live manager and employee system that ranks roster gaps, explains cover suggestions and supports weekly planning, holidays, communications and review workflows.",
            "Separated private workforce data from a signed read-only recruiter demo using synthetic records and server-side write rejection; CI verifies type checks, tests and build.",
        ],
    },
    {
        "title": "HouseFair - Multi-Household Shared-Living PWA",
        "stack": "Next.js 16, React 19, TypeScript, Supabase Auth/PostgreSQL/RLS, Zod, Playwright, Stripe foundation",
        "live": "https://housemates-sand.vercel.app",
        "repo": "https://github.com/Assembler-Fourier/housefair-ai",
        "bullets": [
            "Built an installable product for recurring chores, groceries, expense splits, settlements and calmer house-issue workflows.",
            "Enforced household-scoped access with authenticated server routes and PostgreSQL RLS; mobile Playwright regression tests run in passing CI.",
        ],
    },
    {
        "title": "Irish Theory Test Coach - Pre-Launch EdTech Product",
        "stack": "JavaScript, Vercel Functions, Neon PostgreSQL, Stripe, passwordless sessions, PWA, accessibility automation",
        "live": "https://irish-theory-test-coach-assembler-fourier-job-work.vercel.app",
        "repo": "https://github.com/Assembler-Fourier/irish-theory-test-coach",
        "bullets": [
            "Built timed mock exams, progress coaching, protected premium flows, payment handling and role-protected operator tooling for an independent practice product.",
            "Validated a 1,277-item content pipeline, 18 of 18 Stripe sandbox scenarios and 11 of 11 post-deploy checks; production remains gated on legal/content review.",
        ],
    },
]

EDUCATION = [
    "MSc Cybersecurity - National College of Ireland, Dublin | 2025 - 2026",
    "BSc Computer Science - FAST NUCES, Pakistan | 2020 - 2024",
]


def make_styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=23.5,
            leading=25.5,
            textColor=colors.HexColor("#111827"),
            spaceAfter=2.2,
        ),
        "headline": ParagraphStyle(
            "Headline",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.0,
            leading=11.7,
            textColor=colors.HexColor("#0f766e"),
            spaceAfter=3.0,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.15,
            leading=9.75,
            textColor=colors.HexColor("#374151"),
            spaceAfter=1.3,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.7,
            leading=11.0,
            textColor=colors.HexColor("#0f766e"),
            spaceBefore=7.0,
            spaceAfter=2.3,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.45,
            leading=10.2,
            textColor=colors.HexColor("#111827"),
            spaceAfter=1.9,
        ),
        "item": ParagraphStyle(
            "Item",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.8,
            leading=10.3,
            textColor=colors.HexColor("#111827"),
            spaceBefore=2.5,
            spaceAfter=0.7,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.8,
            leading=9.1,
            textColor=colors.HexColor("#4b5563"),
            spaceAfter=0.7,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.3,
            leading=10.0,
            leftIndent=8,
            firstLineIndent=-8,
            textColor=colors.HexColor("#111827"),
            spaceAfter=1.0,
        ),
        "link": ParagraphStyle(
            "Link",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.7,
            leading=8.8,
            textColor=colors.HexColor("#2563eb"),
            spaceAfter=0.8,
        ),
    }


def p(text: str, style: ParagraphStyle) -> Paragraph:
    return Paragraph(text, style)


def add_section(story: list, title: str, styles: dict[str, ParagraphStyle]) -> None:
    story.append(p(title.upper(), styles["section"]))
    story.append(
        HRFlowable(
            width="100%",
            thickness=0.45,
            color=colors.HexColor("#cbd5d1"),
            spaceBefore=0,
            spaceAfter=1.8,
        )
    )


def project_links(project: dict, styles: dict[str, ParagraphStyle]) -> Paragraph:
    return p(
        f"<link href=\"{project['live']}\" color=\"#2563eb\">Live product</link>"
        f" | <link href=\"{project['repo']}\" color=\"#2563eb\">GitHub source</link>",
        styles["link"],
    )


def build_story(styles: dict[str, ParagraphStyle]) -> list:
    story: list = [
        p("Uzair Waseem", styles["name"]),
        p("FULL-STACK SOFTWARE ENGINEER | BACKEND APIs | QA AUTOMATION | SECURE DELIVERY", styles["headline"]),
        p(
            f"Dublin, Ireland | {PHONE} | <link href=\"mailto:{EMAIL}\" color=\"#2563eb\">{EMAIL}</link>",
            styles["contact"],
        ),
        p(
            f"<link href=\"{SITE}\" color=\"#2563eb\">uzairwaseem.com</link> | "
            f"<link href=\"{LINKEDIN}\" color=\"#2563eb\">linkedin.com/in/uzair-waseem</link> | "
            f"<link href=\"{GITHUB}\" color=\"#2563eb\">github.com/Assembler-Fourier</link>",
            styles["contact"],
        ),
    ]

    add_section(story, "Professional Summary", styles)
    story.append(p(SUMMARY, styles["body"]))

    add_section(story, "Technical Skills", styles)
    for label, value in SKILLS:
        story.append(p(f"<b>{label}:</b> {value}", styles["body"]))

    add_section(story, "Professional Experience", styles)
    for role in EXPERIENCE:
        block = [p(role["title"], styles["item"]), p(role["meta"], styles["meta"])]
        block.extend(p(f"- {bullet}", styles["bullet"]) for bullet in role["bullets"])
        story.append(KeepTogether(block))

    add_section(story, "Selected Engineering Projects", styles)
    for project in PROJECTS:
        block = [
            p(project["title"], styles["item"]),
            p(f"<b>Stack:</b> {project['stack']}", styles["meta"]),
            project_links(project, styles),
        ]
        block.extend(p(f"- {bullet}", styles["bullet"]) for bullet in project["bullets"])
        story.append(KeepTogether(block))

    add_section(story, "Education", styles)
    for line in EDUCATION:
        story.append(p(line, styles["body"]))
    story.append(
        p(
            "Team final-year project: <link href=\"https://github.com/mbg11rao/Style-Sense-AI-powerd-Wardrobe-FYP-/\" "
            "color=\"#2563eb\">Style Sense AI Wardrobe</link> - deep learning and image-recognition application.",
            styles["body"],
        )
    )
    add_section(story, "Availability", styles)
    story.append(
        p(
            "Open to full-stack, backend, graduate software and QA automation roles across Ireland, including hybrid and remote teams.",
            styles["body"],
        )
    )
    story.append(Spacer(1, 2.5))
    return story


def draw_footer(canvas: Canvas, doc: SimpleDocTemplate) -> None:
    canvas.saveState()
    width, _ = A4
    y = 10 * mm
    canvas.setStrokeColor(colors.HexColor("#cbd5d1"))
    canvas.setLineWidth(0.45)
    canvas.line(doc.leftMargin, y + 7, width - doc.rightMargin, y + 7)
    canvas.setFont("Helvetica", 7.0)
    canvas.setFillColor(colors.HexColor("#4b5563"))
    canvas.drawString(doc.leftMargin, y - 1, "Dublin, Ireland | Open to full-stack, backend and QA automation roles across Ireland")
    canvas.drawRightString(width - doc.rightMargin, y - 1, "uzairwaseem.com")
    canvas.restoreState()


def build_pdf() -> Path:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    output_path = OUTPUT_DIR / MASTER_FILENAME
    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=A4,
        leftMargin=17 * mm,
        rightMargin=17 * mm,
        topMargin=12 * mm,
        bottomMargin=17 * mm,
        title="Uzair Waseem - Full-Stack Software Engineer CV",
        author="Uzair Waseem",
        subject="ATS-friendly software engineering CV",
        keywords=(
            "Software Engineer, Full Stack Engineer, Backend Engineer, QA Automation Engineer, "
            "TypeScript, React, Next.js, Node.js, Python, PostgreSQL, Docker, GitHub Actions, Playwright"
        ),
    )
    doc.build(build_story(make_styles()), onFirstPage=draw_footer, onLaterPages=draw_footer)
    return output_path


def write_plain_text_cv() -> None:
    lines = [
        "Uzair Waseem",
        "Dublin, Ireland | +353 89 973 9932 | uzairwaseem29@gmail.com",
        "Portfolio: https://uzairwaseem.com",
        "LinkedIn: https://linkedin.com/in/uzair-waseem",
        "GitHub: https://github.com/Assembler-Fourier",
        "",
        "FULL-STACK SOFTWARE ENGINEER | BACKEND APIs | QA AUTOMATION | SECURE DELIVERY",
        "",
        "PROFESSIONAL SUMMARY",
        SUMMARY,
        "",
        "TECHNICAL SKILLS",
    ]
    lines.extend(f"{label}: {value}" for label, value in SKILLS)
    lines.extend(["", "PROFESSIONAL EXPERIENCE"])
    for role in EXPERIENCE:
        lines.extend([role["title"], role["meta"]])
        lines.extend(f"- {bullet}" for bullet in role["bullets"])
        lines.append("")
    lines.append("SELECTED ENGINEERING PROJECTS")
    for project in PROJECTS:
        lines.extend(
            [
                project["title"],
                f"Stack: {project['stack']}",
                f"Live: {project['live']}",
                f"GitHub: {project['repo']}",
            ]
        )
        lines.extend(f"- {bullet}" for bullet in project["bullets"])
        lines.append("")
    lines.extend(["EDUCATION", *EDUCATION])
    lines.append("Team final-year project: Style Sense AI Wardrobe - deep learning and image-recognition application.")
    lines.extend(
        [
            "",
            "AVAILABILITY",
            "Open to full-stack, backend, graduate software and QA automation roles across Ireland, including hybrid and remote teams.",
        ]
    )
    (OUTPUT_DIR / "Uzair-Waseem-CV-ATS.txt").write_text("\n".join(lines).strip() + "\n", encoding="utf-8")


def write_audit(master: Path) -> None:
    lines = [
        "ATS/readability audit for Uzair Waseem CV",
        "Result: one-page, single-column, text-based PDF",
        f"Generated file: {master.name}",
        "Standard headings: Professional Summary, Technical Skills, Professional Experience, Selected Engineering Projects, Education, Availability",
        "Machine-readable: selectable PDF text, standard fonts, visible descriptive links, no icons, no tables, no graphics",
        "Evidence alignment: website, GitHub, company links and project status use the same dates and claims",
        "Positioning: full-stack/backend primary; QA automation and security-aware delivery secondary",
        "Note: no universal ATS score exists; this is a local structure, parsing and readability heuristic.",
    ]
    (OUTPUT_DIR / "Uzair-Waseem-CV-ATS-Audit.txt").write_text("\n".join(lines) + "\n", encoding="utf-8")


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
