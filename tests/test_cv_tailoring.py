from __future__ import annotations

import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from cv_engine import build_variant, load_profile  # noqa: E402


class CvTailoringTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.profile = load_profile()

    def test_qa_vacancy_selects_qa_track(self) -> None:
        job = "QA Automation Engineer using Playwright, TypeScript, API testing, regression and CI/CD."
        variant, report = build_variant(self.profile, job_text=job)
        self.assertEqual(report["selectedTrack"], "qa")
        self.assertEqual(variant["projects"][0]["title"], self.profile["projects"]["qa_lab"]["title"])

    def test_empty_evidence_defaults_to_software_track(self) -> None:
        _, report = build_variant(self.profile)
        self.assertEqual(report["selectedTrack"], "software")

    def test_backend_vacancy_selects_backend_track(self) -> None:
        job = "Junior Backend Engineer building Node.js REST APIs with Python, PostgreSQL and serverless functions."
        _, report = build_variant(self.profile, job_text=job)
        self.assertEqual(report["selectedTrack"], "backend")
        self.assertIn("PostgreSQL", report["matchedVerifiedSkills"])

    def test_unsupported_requirements_are_reported_not_added(self) -> None:
        job = "Build Ruby on Rails services on AWS with Selenium and Appium."
        variant, report = build_variant(self.profile, job_text=job, requested_track="backend")
        self.assertEqual(report["unsupportedRequirementsNotAdded"], ["AWS", "Ruby", "Selenium", "Appium"])
        rendered_skills = " ".join(item for _, items in variant["skillGroups"] for item in items)
        self.assertNotIn("Ruby", rendered_skills)
        self.assertNotIn("Selenium", rendered_skills)

    def test_tailoring_keeps_three_verified_projects(self) -> None:
        job = "Software Engineer with React, Next.js, authentication, Playwright and accessibility testing."
        variant, _ = build_variant(self.profile, job_text=job)
        self.assertEqual(len(variant["projects"]), 3)
        verified_titles = {project["title"] for project in self.profile["projects"].values()}
        self.assertTrue(all(project["title"] in verified_titles for project in variant["projects"]))

    def test_software_cv_leads_with_vaultwatch(self) -> None:
        variant, _ = build_variant(self.profile, requested_track="software")
        self.assertEqual(variant["projects"][0]["title"], self.profile["projects"]["vaultwatch"]["title"])

    def test_platform_cv_keeps_doctor_system_attribution_boundary(self) -> None:
        variant, _ = build_variant(self.profile, requested_track="platform")
        project = next(
            project
            for project in variant["projects"]
            if project["title"] == self.profile["projects"]["doctor_system"]["title"]
        )
        rendered = " ".join([project["title"], *project["bullets"]])
        self.assertIn("Apache-2.0", rendered)
        self.assertIn("not a production cloud deployment", rendered)

    def test_theory_coach_is_described_as_live_without_traction_claims(self) -> None:
        project = self.profile["projects"]["theory"]
        rendered = " ".join([project["title"], *project["bullets"]]).lower()
        self.assertIn("live deployed", rendered)
        self.assertIn("irishtheorycoach.ie", rendered)
        self.assertNotIn("users", rendered)
        self.assertNotIn("revenue", rendered)


if __name__ == "__main__":
    unittest.main()
