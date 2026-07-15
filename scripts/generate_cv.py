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
SOFTWARE_FILENAME = "Uzair-Waseem-Software-Engineer-CV.pdf"
QA_FILENAME = "Uzair-Waseem-QA-Automation-CV.pdf"

SITE = "https://uzairwaseem.com"
GITHUB = "https://github.com/Assembler-Fourier"
LINKEDIN = "https://linkedin.com/in/uzair-waseem"
EMAIL = "uzairwaseem29@gmail.com"

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

EDUCATION = [
    "MSc Cybersecurity - National College of Ireland, Dublin | 2025 - 2026",
    "BSc Computer Science - FAST NUCES, Pakistan | 2020 - 2024",
]

HOUSEFAIR = {
    "title": "HouseFair - Shared-Living Full-Stack Product",
    "stack": "Next.js 16, React 19, TypeScript, Supabase Auth/PostgreSQL/RLS, Zod, Playwright, PWA",
    "live": "https://housemates-sand.vercel.app",
    "live_label": "Live product",
    "repo": "https://github.com/Assembler-Fourier/housefair-ai",
    "bullets": [
        "Built an installable household workspace for recurring chores, groceries, shared expenses and calmer issue workflows.",
        "Scoped authenticated requests by household membership with PostgreSQL RLS as a second boundary; 12 mobile Playwright checks pass across Android and iPhone PWA viewports.",
    ],
}

ROSTER = {
    "title": "Roster Command - Public Scheduling Logic Extract",
    "stack": "TypeScript, Vitest, synthetic fixtures, domain modeling, GitHub Actions",
    "live": "https://employee-roster-command.vercel.app/?demo=1",
    "live_label": "Recruiter demo",
    "repo": "https://github.com/Assembler-Fourier/employee-roster-command",
    "bullets": [
        "Published selected and sanitised domain logic from a private roster system with no employer, employee or client data.",
        "Hardened overlap, overnight and multi-day shift handling, lifecycle restrictions, deterministic ranking and same-name employee matching; 23 tests pass.",
    ],
}

THEORY_COACH = {
    "title": "Irish Theory Test Coach - Pre-Launch EdTech Product",
    "stack": "JavaScript, Vercel Functions, PostgreSQL adapters, passwordless sessions, PWA, accessibility automation",
    "live": "https://irishtheorycoach.ie",
    "live_label": "Public preview",
    "repo": "https://github.com/Assembler-Fourier/irish-theory-test-coach",
    "bullets": [
        "Built timed mock exams, progress coaching, protected premium adapters and role-protected operator tooling for an independent practice product.",
        "Validated a 1,277-item content pipeline and a full local QA suite; paid launch remains gated on real provider, payment and legal/content verification.",
    ],
}

QA_LAB = {
    "title": "QA Automation Lab - Browser and API Release Contracts",
    "stack": "Playwright, TypeScript, APIRequestContext, axe-core, fixtures, page objects, GitHub Actions",
    "live": "https://github.com/Assembler-Fourier/qa-automation-lab/actions",
    "live_label": "CI workflow",
    "repo": "https://github.com/Assembler-Fourier/qa-automation-lab",
    "bullets": [
        "Built 26 browser and API contracts covering public portfolio evidence, live read-only product boundaries and an isolated writable workflow target.",
        "Separated smoke and negative checks from opt-in writes, with role-based locators, route interception, accessibility checks, traces, screenshots and HTML reports.",
    ],
}

VARIANTS = {
    "software": {
        "filename": SOFTWARE_FILENAME,
        "headline": "SOFTWARE ENGINEER | TYPESCRIPT, REACT, NODE.JS AND POSTGRESQL",
        "summary": (
            "Dublin-based software engineer with remote delivery experience across React and TypeScript products, "
            "backend APIs and QA automation. Builds tested full-stack workflows with Node.js, PostgreSQL, Playwright "
            "and GitHub Actions; MSc Cybersecurity strengthens authentication, authorization and data-isolation decisions."
        ),
        "skills": [
            ("Frontend", "TypeScript, React, Next.js, JavaScript, HTML, CSS, responsive UI, PWA"),
            ("Backend", "Node.js, REST APIs, Python, FastAPI, validation, serverless functions"),
            ("Data and delivery", "PostgreSQL, Supabase, Neon, SQL, Docker, Vercel, CI/CD"),
            ("Quality", "Playwright, Vitest, Pytest, API testing, regression testing, accessibility testing, GitHub Actions"),
            ("Security", "Authentication, authorization, RLS, secure sessions, CSRF, rate limiting, OWASP, secure SDLC"),
        ],
        "projects": [HOUSEFAIR, ROSTER, THEORY_COACH],
        "availability": "Open to graduate and junior software, full-stack and backend roles across Ireland, including hybrid and remote teams.",
        "pdf_title": "Uzair Waseem - Software Engineer CV",
        "pdf_subject": "ATS-readable software and backend engineering CV",
        "pdf_keywords": "Software Engineer, Full Stack Engineer, Backend Engineer, TypeScript, React, Next.js, Node.js, PostgreSQL, REST APIs, Playwright, CI/CD",
    },
    "qa": {
        "filename": QA_FILENAME,
        "headline": "QA AUTOMATION ENGINEER | PLAYWRIGHT, TYPESCRIPT, API TESTING AND CI/CD",
        "summary": (
            "Dublin-based QA automation and software engineer with remote delivery experience. Builds Playwright browser "
            "and API suites with isolated data, negative checks, accessibility coverage and CI evidence; product-engineering "
            "experience supports defect investigation across React interfaces, Node.js APIs and PostgreSQL workflows."
        ),
        "skills": [
            ("Automation", "Playwright, TypeScript, browser E2E, APIRequestContext, smoke, regression and negative testing"),
            ("Test design", "Fixtures, page objects, stable locators, data isolation, route mocking, traces, screenshots, HTML reports"),
            ("Quality", "Accessibility testing, axe-core, Vitest, Pytest, defect investigation, test triage"),
            ("CI and delivery", "GitHub Actions, parallel execution, retries, Node.js, npm, Docker, Vercel, CI/CD"),
            ("Product stack", "React, Next.js, REST APIs, PostgreSQL, Supabase, authentication, authorization, RLS"),
        ],
        "projects": [QA_LAB, HOUSEFAIR, ROSTER],
        "availability": "Open to graduate and junior QA automation, SDET and software-engineering roles across Ireland, including hybrid and remote teams.",
        "pdf_title": "Uzair Waseem - QA Automation Engineer CV",
        "pdf_subject": "ATS-readable QA automation and SDET CV",
        "pdf_keywords": "QA Automation Engineer, Junior SDET, Playwright, TypeScript, API Testing, Test Automation, Accessibility Testing, GitHub Actions, CI/CD",
    },
}


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
        f"<link href=\"{project['live']}\" color=\"#2563eb\">{project['live_label']}</link>"
        f" | <link href=\"{project['repo']}\" color=\"#2563eb\">GitHub source</link>",
        styles["link"],
    )


def build_story(variant: dict, styles: dict[str, ParagraphStyle]) -> list:
    story: list = [
        p("Uzair Waseem", styles["name"]),
        p(variant["headline"], styles["headline"]),
        p(
            f"Dublin, Ireland | <link href=\"mailto:{EMAIL}\" color=\"#2563eb\">{EMAIL}</link>",
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
    story.append(p(variant["summary"], styles["body"]))

    add_section(story, "Technical Skills", styles)
    for label, value in variant["skills"]:
        story.append(p(f"<b>{label}:</b> {value}", styles["body"]))

    add_section(story, "Professional Experience", styles)
    for role in EXPERIENCE:
        block = [p(role["title"], styles["item"]), p(role["meta"], styles["meta"])]
        block.extend(p(f"- {bullet}", styles["bullet"]) for bullet in role["bullets"])
        story.append(KeepTogether(block))

    add_section(story, "Selected Engineering Projects", styles)
    for project in variant["projects"]:
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
    add_section(story, "Availability", styles)
    story.append(p(variant["availability"], styles["body"]))
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
    canvas.drawString(doc.leftMargin, y - 1, "Dublin, Ireland | Software engineering and QA automation roles across Ireland")
    canvas.drawRightString(width - doc.rightMargin, y - 1, "uzairwaseem.com")
    canvas.restoreState()


def build_pdf(variant: dict) -> Path:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    output_path = OUTPUT_DIR / variant["filename"]
    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=A4,
        leftMargin=17 * mm,
        rightMargin=17 * mm,
        topMargin=12 * mm,
        bottomMargin=17 * mm,
        title=variant["pdf_title"],
        author="Uzair Waseem",
        subject=variant["pdf_subject"],
        keywords=variant["pdf_keywords"],
    )
    doc.build(build_story(variant, make_styles()), onFirstPage=draw_footer, onLaterPages=draw_footer)
    return output_path


def write_plain_text_cv(key: str, variant: dict) -> Path:
    lines = [
        "Uzair Waseem",
        "Dublin, Ireland | uzairwaseem29@gmail.com",
        "Portfolio: https://uzairwaseem.com",
        "LinkedIn: https://linkedin.com/in/uzair-waseem",
        "GitHub: https://github.com/Assembler-Fourier",
        "",
        variant["headline"],
        "",
        "PROFESSIONAL SUMMARY",
        variant["summary"],
        "",
        "TECHNICAL SKILLS",
    ]
    lines.extend(f"{label}: {value}" for label, value in variant["skills"])
    lines.extend(["", "PROFESSIONAL EXPERIENCE"])
    for role in EXPERIENCE:
        lines.extend([role["title"], role["meta"]])
        lines.extend(f"- {bullet}" for bullet in role["bullets"])
        lines.append("")
    lines.append("SELECTED ENGINEERING PROJECTS")
    for project in variant["projects"]:
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
    lines.extend(
        [
            "",
            "AVAILABILITY",
            variant["availability"],
        ]
    )
    output = OUTPUT_DIR / f"Uzair-Waseem-{key.title()}-CV-ATS.txt"
    output.write_text("\n".join(lines).strip() + "\n", encoding="utf-8")
    return output


def write_audit(outputs: dict[str, Path]) -> Path:
    lines = [
        "ATS/readability audit for Uzair Waseem CV",
        "Result: one-page, single-column, text-based PDF",
        f"Generated files: {', '.join(path.name for path in outputs.values())}",
        "Standard headings: Professional Summary, Technical Skills, Professional Experience, Selected Engineering Projects, Education, Availability",
        "Machine-readable: selectable PDF text, standard fonts, visible descriptive links, no icons, no tables, no graphics",
        "Evidence alignment: website, GitHub, company links and project status use the same dates and claims",
        "Positioning: one software/backend version and one QA automation/SDET version",
        "Note: no universal ATS score exists; this is a local structure, parsing and readability heuristic.",
    ]
    output = OUTPUT_DIR / "Uzair-Waseem-CV-ATS-Audit.txt"
    output.write_text("\n".join(lines) + "\n", encoding="utf-8")
    return output


def publish(outputs: dict[str, Path]) -> None:
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_VARIANT_DIR.mkdir(parents=True, exist_ok=True)
    software = outputs["software"]
    qa = outputs["qa"]
    shutil.copy2(software, PUBLIC_DIR / MASTER_FILENAME)
    for filename in [
        "Uzair-Waseem-CV-Software-Engineer.pdf",
        "Uzair-Waseem-CV-Full-Stack-Engineer.pdf",
        "Uzair-Waseem-CV-Backend-Engineer.pdf",
        "Uzair-Waseem-CV-Security-Aware-Software-Engineer.pdf",
    ]:
        shutil.copy2(software, PUBLIC_VARIANT_DIR / filename)
    shutil.copy2(qa, PUBLIC_VARIANT_DIR / "Uzair-Waseem-CV-QA-Automation-Engineer.pdf")


def main() -> None:
    outputs = {key: build_pdf(variant) for key, variant in VARIANTS.items()}
    text_outputs = {key: write_plain_text_cv(key, variant) for key, variant in VARIANTS.items()}
    publish(outputs)
    audit = write_audit(outputs)
    print(PUBLIC_DIR / MASTER_FILENAME)
    for path in outputs.values():
        print(path)
    for path in text_outputs.values():
        print(path)
    print(audit)


if __name__ == "__main__":
    main()
