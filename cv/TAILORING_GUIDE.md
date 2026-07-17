# Application CV Workflow

This repository uses one verified evidence bank in `cv/profile.json`. The public CVs and every job-specific CV are generated from that same source so dates, links, skills and project claims cannot drift.

## One-Time Setup

Create the repo-local CV environment and install the pinned document dependencies:

```powershell
npm run cv:setup
```

## Default CVs

Generate all five role tracks:

```powershell
npm run cv:generate
```

The public website serves the software version at `/Uzair-Waseem-CV.pdf`. Existing role-specific URLs remain valid, but now contain genuinely distinct full-stack, backend, QA and security-aware versions.

## Tailor To A Vacancy

1. Put the complete job description in a plain-text file.
2. Run:

```powershell
npm run cv:tailor -- --job-file job.txt --title "Graduate Software Engineer" --company "Example Company"
```

The command automatically selects the closest track, reorders verified skills and projects, and writes:

- a one-page PDF for submission;
- an editable ATS-safe DOCX;
- a plain-text parsing copy;
- a JSON match report showing matched and unsupported requirements.

Override automatic track selection only when the vacancy is genuinely cross-functional:

```powershell
npm run cv:tailor -- --job-file job.txt --track backend --title "Junior Backend Engineer" --company "Example Company"
```

Supported tracks are `software`, `full-stack`, `backend`, `qa` and `security`.

## Private Phone Number

The public website CV intentionally excludes a phone number. A private application copy can include one without storing it in Git:

```powershell
$env:CV_PHONE="+353 ..."
npm run cv:tailor -- --job-file job.txt --title "Graduate Software Engineer" --company "Example Company"
Remove-Item Env:CV_PHONE
```

## What Tailoring May Change

- role track and headline;
- skill order;
- project order;
- experience bullet order;
- output filename and application metadata.

## What Tailoring Cannot Change

- employers, titles or dates;
- project ownership or status;
- metrics and test counts;
- technologies outside the verified bank;
- work authorisation;
- education status.

Read the generated match report before submitting. Unsupported job requirements are reported as gaps and are never inserted into the CV.

## Application Check

Before uploading a CV:

1. Confirm the role title and company in the generated report.
2. Read every bullet and complete the fact-check items in `cv/profile.json`.
3. Open the PDF and DOCX once.
4. Use PDF unless the portal asks for Word or parsing looks unreliable.
5. Keep LinkedIn dates and titles identical to the submitted CV.
