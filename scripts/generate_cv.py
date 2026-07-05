from __future__ import annotations

import shutil
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


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
LINKEDIN = "https://www.linkedin.com/in/uzair-waseem/"
WHATSAPP = "https://wa.me/353899739932"

BLUE = colors.HexColor("#2563eb")
CYAN = colors.HexColor("#06b6d4")
INK = colors.HexColor("#101827")
MUTED = colors.HexColor("#475569")
LINE = colors.HexColor("#cbd5e1")
SOFT = colors.HexColor("#f1f5f9")
SOFT_BLUE = colors.HexColor("#eff6ff")


SUMMARY = (
    "Ireland-based software engineer building tested web apps, backend APIs, automation workflows and "
    "security-aware delivery. Strongest stack: React, Next.js, TypeScript, Node.js, Python/FastAPI, SQL, "
    "Docker and GitHub Actions. MSc Cybersecurity adds practical strength in authentication, secure SDLC, "
    "testing, reliability and risk-aware engineering."
)

SKILLS = [
    ("Primary stack", "React, Next.js, TypeScript, JavaScript, Node.js, Express, Python, FastAPI, SQL, PostgreSQL, MongoDB"),
    ("APIs &amp; backend", "REST APIs, data modeling, authentication/authorization, input validation, reusable service logic, documentation"),
    ("Testing &amp; QA", "Playwright, Selenium, Cypress, API testing, unit tests, integration tests, regression thinking, CI-ready checks"),
    ("DevOps &amp; cloud", "Docker, GitHub Actions, CI/CD, Linux, AWS basics, Azure basics, cloud deployment fundamentals"),
    ("Security-aware", "OWASP basics, secure SDLC, threat modeling basics, secrets handling, risk and reliability mindset"),
]

EXPERIENCE = [
    {
        "role": "Software Engineer",
        "company": "Motion Sensors",
        "location": "Remote - Canada",
        "dates": "Mar 2026 - Present",
        "bullets": [
            "Build software features, backend APIs and automation workflows for distributed product delivery.",
            "Develop Python/FastAPI prototypes for risk-ranking, document workflows and testable backend logic; support Dockerized services, CI/CD-aware delivery and secure SDLC practices.",
        ],
    },
    {
        "role": "Software Engineer (Full-Stack)",
        "company": "Outstanding Marketing",
        "location": "Remote - Germany",
        "dates": "Feb 2025 - Jan 2026",
        "bullets": [
            "Shipped web products and dashboards using React, TypeScript, Node.js and API integrations.",
            "Automated reporting and QA checks, translated stakeholder requirements into scoped product work, and collaborated through Git, pull requests and code review across time zones.",
        ],
    },
    {
        "role": "Junior Software Engineer",
        "company": "LocalhostLabs",
        "location": "On-site - Pakistan",
        "dates": "Jun 2024 - Dec 2024",
        "bullets": [
            "Built front-end and back-end features, fixed defects and supported sprint delivery across databases, APIs and responsive interfaces.",
            "Wrote tests, documented workflows and helped with version control, QA and technical support.",
        ],
    },
]

PROJECTS = [
    (
        "SecureTaskOps Workflow Platform",
        "https://github.com/Assembler-Fourier/securetaskops-workflow-platform",
        "Node.js workflow API for tasks, incidents and release-readiness signals with tests, Docker, GitHub Actions and security notes.",
    ),
    (
        "SentryScan Threat Monitoring",
        "https://github.com/Assembler-Fourier/sentryscan-threat-monitoring",
        "FastAPI prototype that normalizes security-event payloads, applies risk scoring and explains triage reasons for alert review.",
    ),
    (
        "TaskForge Workflow App",
        "https://github.com/Assembler-Fourier/taskforge-workflow-app",
        "Full-stack workflow app with task-state modeling, REST-style routes and a lightweight board UI for practical product delivery.",
    ),
    (
        "SecureFlow Delivery Dashboard",
        "https://github.com/Assembler-Fourier/secureflow-delivery-dashboard",
        "Dashboard case study for sprint health, blockers, QA signals and release-readiness communication.",
    ),
]

SNAPSHOT = [
    ("Target roles", "Software Engineer, Full-stack Engineer, Backend Engineer, QA Automation Engineer"),
    ("Ireland fit", "Open to Dublin, Cork, Galway, Limerick, Waterford, remote and hybrid teams"),
    ("Review proof", "GitHub repos with README depth, tests, Docker, CI, security notes and setup commands"),
    ("Keywords", "React, Node.js, Python/FastAPI, SQL, REST APIs, Playwright, Docker, secure SDLC"),
]

APPLICATION_FOCUS = [
    (
        "Software / backend",
        "Build web apps, REST APIs, workflow logic, SQL-backed features and reviewable services.",
    ),
    (
        "Testing / QA",
        "Add Playwright/Selenium checks, API tests, regression thinking and CI-ready validation.",
    ),
    (
        "Security-aware delivery",
        "Apply secure SDLC basics: auth, authorization, input validation, secrets handling and risk notes.",
    ),
    (
        "Working style",
        "Document setup, tradeoffs and limitations so reviewers can run and judge projects quickly.",
    ),
    (
        "Portfolio proof",
        "SecureTaskOps, SentryScan, TaskForge, SecureFlow and uzairwaseem.com support the same story.",
    ),
    (
        "Availability",
        "Open to software engineering roles across Ireland with relocation for the right opportunity.",
    ),
]


def make_styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=23.5,
            leading=25.0,
            textColor=INK,
            spaceAfter=2,
        ),
        "tagline": ParagraphStyle(
            "Tagline",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.1,
            leading=8.0,
            textColor=colors.HexColor("#94a3b8"),
            alignment=TA_RIGHT,
        ),
        "headline": ParagraphStyle(
            "Headline",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.0,
            leading=11.5,
            textColor=BLUE,
            spaceAfter=4,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.2,
            leading=8.4,
            textColor=MUTED,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.2,
            leading=10.2,
            textColor=BLUE,
            spaceBefore=5,
            spaceAfter=1,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.65,
            leading=8.95,
            textColor=INK,
            spaceAfter=2,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.05,
            leading=8.2,
            textColor=MUTED,
            spaceAfter=1,
        ),
        "strong_small": ParagraphStyle(
            "StrongSmall",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=7.15,
            leading=8.25,
            textColor=colors.HexColor("#334155"),
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.35,
            leading=9.4,
            textColor=INK,
        ),
        "date": ParagraphStyle(
            "Date",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.0,
            leading=8.0,
            textColor=MUTED,
            alignment=TA_RIGHT,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.15,
            leading=8.25,
            leftIndent=7,
            firstLineIndent=-7,
            textColor=INK,
            spaceAfter=0.5,
        ),
        "project": ParagraphStyle(
            "Project",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.05,
            leading=8.35,
            textColor=INK,
        ),
        "card_label": ParagraphStyle(
            "CardLabel",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=6.95,
            leading=8.0,
            textColor=BLUE,
            spaceAfter=1,
        ),
        "card_text": ParagraphStyle(
            "CardText",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=6.75,
            leading=7.75,
            textColor=colors.HexColor("#334155"),
        ),
    }


def para(text: str, style: ParagraphStyle) -> Paragraph:
    return Paragraph(text, style)


def section(story: list, title: str, styles: dict[str, ParagraphStyle]) -> None:
    story.append(Spacer(1, 2.2))
    story.append(para(title.upper(), styles["section"]))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LINE, spaceBefore=0, spaceAfter=3))


def make_header(styles: dict[str, ParagraphStyle], doc_width: float) -> list:
    contact_line = (
        "Ireland-based | +353 89 973 9932 | "
        '<link href="mailto:uzairwaseem29@gmail.com" color="#2563eb">uzairwaseem29@gmail.com</link> | '
        f'<link href="{SITE}" color="#2563eb">uzairwaseem.com</link> | '
        f'<link href="{LINKEDIN}" color="#2563eb">linkedin.com/in/uzair-waseem</link> | '
        f'<link href="{GITHUB}" color="#2563eb">github.com/Assembler-Fourier</link> | '
        f'<link href="{WHATSAPP}" color="#2563eb">WhatsApp</link>'
    )
    left = [
        para("Uzair Waseem", styles["name"]),
        para("Software Engineer | Full-Stack &amp; Backend APIs | Automation | Security-Aware Delivery", styles["headline"]),
        para(contact_line, styles["contact"]),
    ]
    right = [para("Design | Build | Test | Ship", styles["tagline"])]
    header = Table([[left, right]], colWidths=[doc_width * 0.78, doc_width * 0.22], hAlign="LEFT")
    header.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    accent = Table([["", "", ""]], colWidths=[doc_width * 0.23, doc_width * 0.105, doc_width * 0.665], rowHeights=[3])
    accent.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (0, 0), BLUE),
                ("BACKGROUND", (1, 0), (1, 0), CYAN),
                ("BACKGROUND", (2, 0), (2, 0), colors.white),
                ("LINEBELOW", (0, 0), (-1, 0), 0.8, INK),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return [header, Spacer(1, 4), accent, Spacer(1, 8)]


def make_summary(styles: dict[str, ParagraphStyle], doc_width: float) -> list:
    focus = Table(
        [[para("<b>Role focus:</b> Full-stack, backend and software engineering across Ireland; supporting fit for QA automation and security-aware software roles.", styles["strong_small"])]],
        colWidths=[doc_width],
    )
    focus.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), SOFT),
                ("BOX", (0, 0), (-1, -1), 0.25, colors.HexColor("#e2e8f0")),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    return [para(SUMMARY, styles["body"]), Spacer(1, 3), focus]


def make_skills(styles: dict[str, ParagraphStyle], doc_width: float) -> Table:
    rows = [[para(f"<b>{label}</b>", styles["strong_small"]), para(value, styles["small"])] for label, value in SKILLS]
    table = Table(rows, colWidths=[doc_width * 0.16, doc_width * 0.84])
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4),
                ("TOPPADDING", (0, 0), (-1, -1), 0.1),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0.1),
            ]
        )
    )
    return table


def make_experience(styles: dict[str, ParagraphStyle], doc_width: float) -> list:
    story = []
    for item in EXPERIENCE:
        title = (
            f"<b>{item['role']}</b> - "
            f'<font color="#2563eb"><b>{item["company"]}</b></font><br/>'
            f'<font color="#475569">{item["location"]}</font>'
        )
        row = Table(
            [[para(title, styles["role"]), para(item["dates"], styles["date"])]],
            colWidths=[doc_width * 0.74, doc_width * 0.26],
        )
        row.setStyle(
            TableStyle(
                [
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 0),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                    ("TOPPADDING", (0, 0), (-1, -1), 0),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ]
            )
        )
        story.append(row)
        for bullet in item["bullets"]:
            story.append(para(f"- {bullet}", styles["bullet"]))
        story.append(Spacer(1, 1.2))
    return story


def make_projects(styles: dict[str, ParagraphStyle], doc_width: float) -> Table:
    cards = []
    for name, url, text in PROJECTS:
        cards.append(
            [
                para(f'<b><link href="{url}" color="#2563eb">{name}</link></b>', styles["card_label"]),
                para(text, styles["card_text"]),
            ]
        )

    def card(idx: int) -> list:
        return [cards[idx][0], cards[idx][1]]

    table = Table(
        [[card(0), card(1)], [card(2), card(3)]],
        colWidths=[doc_width * 0.495, doc_width * 0.495],
        hAlign="LEFT",
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#fbfdff")),
                ("BOX", (0, 0), (-1, -1), 0.35, colors.HexColor("#dbeafe")),
                ("INNERGRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#e2e8f0")),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    return table


def make_bottom_grid(styles: dict[str, ParagraphStyle], doc_width: float) -> Table:
    education = [
        para("<b>MSc in Cybersecurity</b> - National College of Ireland, Dublin | 2025 - 2026", styles["small"]),
        para("<b>BSc in Computer Science</b> - FAST NUCES, Pakistan | 2020 - 2024", styles["small"]),
        Spacer(1, 2),
        para(
            "<b>Additional proof:</b> DocuMind RAG Assistant shows document chunking, retrieval ranking and citation-style answers; the portfolio site shows Next.js, SEO metadata, Vercel deployment and recruiter-focused content.",
            styles["small"],
        ),
    ]
    snapshot_rows = []
    for label, text in SNAPSHOT:
        snapshot_rows.append([para(f"<b>{label}</b>", styles["card_label"]), para(text, styles["card_text"])])
    snapshot = Table(snapshot_rows, colWidths=[doc_width * 0.13, doc_width * 0.35])
    snapshot.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 4),
                ("RIGHTPADDING", (0, 0), (-1, -1), 3),
                ("TOPPADDING", (0, 0), (-1, -1), 1.5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
            ]
        )
    )
    grid = Table(
        [[education, snapshot]],
        colWidths=[doc_width * 0.50, doc_width * 0.49],
        hAlign="LEFT",
    )
    grid.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BACKGROUND", (0, 0), (-1, -1), SOFT_BLUE),
                ("BOX", (0, 0), (-1, -1), 0.35, colors.HexColor("#dbeafe")),
                ("INNERGRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#dbeafe")),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    return grid


def make_application_focus(styles: dict[str, ParagraphStyle], doc_width: float) -> Table:
    cells = []
    for label, text in APPLICATION_FOCUS:
        cells.append([para(label, styles["card_label"]), para(text, styles["card_text"])])
    table = Table([cells[:3], cells[3:]], colWidths=[doc_width * 0.33, doc_width * 0.33, doc_width * 0.33], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#fbfdff")),
                ("BOX", (0, 0), (-1, -1), 0.35, colors.HexColor("#dbeafe")),
                ("INNERGRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#e2e8f0")),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    return table


def build_story(styles: dict[str, ParagraphStyle], doc_width: float) -> list:
    story: list = []
    story.extend(make_header(styles, doc_width))

    section(story, "Professional summary", styles)
    story.extend(make_summary(styles, doc_width))

    section(story, "Technical skills", styles)
    story.append(make_skills(styles, doc_width))

    section(story, "Professional experience", styles)
    story.extend(make_experience(styles, doc_width))

    section(story, "Selected projects", styles)
    story.append(make_projects(styles, doc_width))

    section(story, "Education and recruiter scan", styles)
    story.append(make_bottom_grid(styles, doc_width))
    section(story, "Application focus", styles)
    story.append(make_application_focus(styles, doc_width))
    return story


def add_footer(canvas, doc):
    canvas.saveState()
    footer_y = 10 * mm
    canvas.setFillColor(SOFT)
    canvas.roundRect(doc.leftMargin, footer_y - 3, A4[0] - doc.leftMargin - doc.rightMargin, 14, 2, fill=1, stroke=0)
    canvas.setFont("Helvetica-Bold", 6.8)
    canvas.setFillColor(colors.HexColor("#334155"))
    canvas.drawString(
        doc.leftMargin + 7,
        footer_y + 1,
        "Open across Ireland: Dublin, Cork, Galway, Limerick, Waterford, remote or hybrid teams | Portfolio: uzairwaseem.com",
    )
    canvas.restoreState()


def build_pdf() -> Path:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    styles = make_styles()
    output_path = OUTPUT_DIR / MASTER_FILENAME
    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=A4,
        leftMargin=13 * mm,
        rightMargin=13 * mm,
        topMargin=16 * mm,
        bottomMargin=18 * mm,
        title="Uzair Waseem - One Page Software Engineer CV",
        author="Uzair Waseem",
        subject="ATS-friendly one-page software engineering CV",
        keywords=(
            "Software Engineer, Full Stack Engineer, Backend Engineer, React, Next.js, TypeScript, "
            "Node.js, Python, FastAPI, SQL, Docker, GitHub Actions, Playwright, Selenium, Cybersecurity"
        ),
    )
    doc.build(build_story(styles, doc.width), onFirstPage=add_footer, onLaterPages=add_footer)
    return output_path


def write_audit(master: Path) -> None:
    lines = [
        "ATS/readability heuristic for Uzair Waseem one-page CV",
        "Heuristic result: strong one-page recruiter format",
        f"Generated file: {master.name}",
        "Standard sections present: Professional summary, Technical skills, Professional experience, Selected projects, Education",
        "Machine-readable formatting: real PDF text, standard headings, visible links, no image-only resume content",
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
    write_audit(master)
    print(PUBLIC_DIR / MASTER_FILENAME)
    for filename in LEGACY_VARIANT_FILENAMES:
        print(PUBLIC_VARIANT_DIR / filename)
    print(OUTPUT_DIR / "Uzair-Waseem-CV-ATS-Audit.txt")


if __name__ == "__main__":
    main()
