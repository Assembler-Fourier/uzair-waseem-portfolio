from __future__ import annotations

import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from cv_engine import build_plain_text, build_variant, load_profile  # noqa: E402


class CvTailoringTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.profile = load_profile()

    def test_qa_vacancy_selects_qa_track(self) -> None:
        job = "QA Automation Engineer using Playwright, TypeScript, API testing, regression and CI/CD."
        variant, report = build_variant(self.profile, job_text=job)
        self.assertEqual(report["selectedTrack"], "qa")
        self.assertEqual(variant["projects"][0]["title"], self.profile["projects"]["qa_lab"]["title"])

    def test_customer_service_role_uses_transferable_experience(self) -> None:
        variant, report = build_variant(self.profile, job_text="Customer service and customer care administrator")
        self.assertEqual(report["selectedTrack"], "customer-service")
        text = build_plain_text(variant)
        self.assertIn("TRANSFERABLE SKILLS", text)
        self.assertIn("seeking customer service", text)
        self.assertNotIn("call handling experience", text)

    def test_updated_employment_education_and_mobility_are_on_every_track(self) -> None:
        for track in self.profile["tracks"]:
            variant, _ = build_variant(self.profile, requested_track=track)
            text = build_plain_text(variant)
            self.assertIn("Associate Software Engineer - Octans Digital (OD)", text)
            self.assertIn("Nov 2020 - Apr 2024", text)
            self.assertIn("Software Engineer - LocalhostLabs", text)
            self.assertNotIn("Junior Software Engineer - LocalhostLabs", text)
            self.assertIn("Graduated April 2026", text)
            self.assertIn("Own car and full Irish driving licence", text)
            self.assertNotIn("nearly two years", text)

    def test_octans_does_not_infer_company_technology_or_employment_type(self) -> None:
        octans = next(role for role in self.profile["experience"] if role["company"] == "Octans Digital (OD)")
        self.assertNotIn("employmentType", octans)
        self.assertEqual(octans["bullets"], [{
            "text": "Supported assigned software development tasks across team projects.",
            "tags": ["software development"],
        }])

    def test_empty_evidence_defaults_to_software_track(self) -> None:
        _, report = build_variant(self.profile)
        self.assertEqual(report["selectedTrack"], "software")

    def test_backend_vacancy_selects_backend_track(self) -> None:
        job = "Junior Backend Engineer building Node.js REST APIs with Python, PostgreSQL and serverless functions."
        _, report = build_variant(self.profile, job_text=job)
        self.assertEqual(report["selectedTrack"], "backend")
        self.assertIn("PostgreSQL", report["matchedVerifiedSkills"])

    def test_ai_role_selects_truth_locked_ai_track(self) -> None:
        job = (
            "Junior AI Developer using Python, TypeScript, LLM APIs, agent frameworks, "
            "RAG, Azure and Power Platform."
        )
        variant, report = build_variant(self.profile, job_text=job)
        self.assertEqual(report["selectedTrack"], "ai")
        self.assertEqual(variant["projects"][0]["title"], self.profile["projects"]["vaultwatch"]["title"])
        self.assertIn("LLM APIs", report["matchedVerifiedSkills"])
        self.assertIn("agent orchestration", report["matchedVerifiedSkills"])
        self.assertIn("RAG", report["unsupportedRequirementsNotAdded"])
        self.assertIn("Azure", report["unsupportedRequirementsNotAdded"])

    def test_unsupported_requirements_are_reported_not_added(self) -> None:
        job = "Build Ruby on Rails services on AWS with Selenium and Appium."
        variant, report = build_variant(self.profile, job_text=job, requested_track="backend")
        self.assertEqual(report["unsupportedRequirementsNotAdded"], ["AWS", "Ruby", "Selenium", "Appium"])
        rendered_skills = " ".join(item for _, items in variant["skillGroups"] for item in items)
        self.assertNotIn("Ruby", rendered_skills)
        self.assertNotIn("Selenium", rendered_skills)

    def test_generic_software_track_keeps_four_verified_projects(self) -> None:
        variant, _ = build_variant(self.profile, requested_track="software")
        self.assertEqual(len(variant["projects"]), 4)
        verified_titles = {project["title"] for project in self.profile["projects"].values()}
        self.assertTrue(all(project["title"] in verified_titles for project in variant["projects"]))
        self.assertIn(self.profile["projects"]["roster"]["title"], {project["title"] for project in variant["projects"]})

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
