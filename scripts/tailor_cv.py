from __future__ import annotations

import argparse
import sys
from pathlib import Path

from cv_engine import (
    OUTPUT_ROOT,
    build_package,
    build_variant,
    load_profile,
    private_phone,
    slugify,
    validate_pdf_is_one_page,
)


def read_job_text(job_file: str | None, job_text: str | None) -> str:
    if job_text:
        return job_text.strip()
    if job_file == "-":
        return sys.stdin.read().strip()
    if job_file:
        return Path(job_file).read_text(encoding="utf-8").strip()
    raise ValueError("Provide --job-file, --job-file - for stdin, or --job-text.")


def main() -> None:
    profile = load_profile()
    parser = argparse.ArgumentParser(description="Create a truth-locked CV tailored to a job description.")
    parser.add_argument("--job-file", help="UTF-8 text file containing the complete vacancy.")
    parser.add_argument("--job-text", help="Vacancy text supplied directly on the command line.")
    parser.add_argument("--track", choices=sorted(profile["tracks"]), help="Override automatic track selection.")
    parser.add_argument("--title", default="Target Role", help="Vacancy title used in filenames and reports.")
    parser.add_argument("--company", default="Target Company", help="Company used in filenames and reports.")
    parser.add_argument("--output-dir", type=Path, help="Optional output directory.")
    parser.add_argument("--phone", help="Private phone for this application only; never published by this command.")
    args = parser.parse_args()

    job_text = read_job_text(args.job_file, args.job_text)
    variant, report = build_variant(
        profile,
        job_text=job_text,
        requested_track=args.track,
        target_title=args.title,
        company=args.company,
    )
    folder_slug = slugify(f"{args.company}-{args.title}")
    output_dir = args.output_dir or OUTPUT_ROOT / "tailored" / folder_slug
    base_name = slugify(f"Uzair-Waseem-{args.company}-{args.title}-CV")
    phone = args.phone.strip() if args.phone else private_phone()
    paths = build_package(variant, report, output_dir, base_name, phone)
    validate_pdf_is_one_page(paths["pdf"])

    print(f"Selected track: {report['selectedTrack']}")
    print(f"Matched verified skills: {', '.join(report['matchedVerifiedSkills']) or 'none detected'}")
    print(f"Requirements not added: {', '.join(report['unsupportedRequirementsNotAdded']) or 'none detected'}")
    for label, path in paths.items():
        print(f"{label}: {path}")


if __name__ == "__main__":
    main()
