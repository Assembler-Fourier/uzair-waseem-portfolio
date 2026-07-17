from __future__ import annotations

import argparse

from cv_engine import generate_base_tracks, load_profile, validate_pdf_is_one_page


def main() -> None:
    profile = load_profile()
    parser = argparse.ArgumentParser(description="Generate verified role-specific CVs.")
    parser.add_argument("--track", choices=sorted(profile["tracks"]), action="append")
    parser.add_argument("--no-publish", action="store_true", help="Do not copy PDFs into public/.")
    args = parser.parse_args()

    results = generate_base_tracks(args.track, publish=not args.no_publish)
    for track, paths in results.items():
        validate_pdf_is_one_page(paths["pdf"])
        print(f"{track}: {paths['pdf']}")
        print(f"{track}: {paths['docx']}")


if __name__ == "__main__":
    main()
