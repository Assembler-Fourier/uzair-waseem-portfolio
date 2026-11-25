import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

const cvPath = "/Uzair-Waseem-CV.pdf";
const pageUrl = "https://uzairwaseem.com/cv";
const title = "CV | Uzair Waseem, Software Engineer in Dublin";
const description =
  "One-page CV for Uzair Waseem, a software engineer in Dublin working with TypeScript, React, Node.js, Python, backend APIs and QA automation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Uzair Waseem | Software Engineer CV",
    description,
    url: pageUrl,
    type: "profile",
    images: [
      {
        url: "/og-cv.png",
        width: 1200,
        height: 630,
        alt: "Uzair Waseem's one-page software engineer CV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzair Waseem | Software Engineer CV",
    description,
    images: ["/og-cv.png"],
  },
};

export default function CvPage() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to main content
      </a>
      <SiteHeader rootHref="/" sectionPrefix="/" />
      <main id="content" className="cv-page shell">
        <section className="cv-intro" aria-labelledby="cv-title">
          <p className="intro-label">
            Uzair Waseem <span>/ CV</span>
          </p>
          <h1 id="cv-title">One-page CV.</h1>
          <p>
            Software engineer in Dublin. TypeScript, React, Node.js and Python,
            with a focus on backend APIs and careful testing. Available
            immediately for roles across Ireland.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={cvPath} download>
              <Download size={18} aria-hidden="true" />
              Download CV
            </a>
            <a
              className="button secondary"
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="cv-note">
            Need a version for a specific role?{" "}
            <Link href="/#contact">Role-specific CVs are on the home page.</Link>
          </p>
        </section>
        <a
          className="cv-preview"
          href={cvPath}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the full CV as a PDF"
        >
          <Image
            src="/cv-preview.png"
            alt="First page of Uzair Waseem's CV"
            width={900}
            height={1273}
            sizes="(max-width: 860px) 92vw, 560px"
            priority
          />
        </a>
      </main>
      <SiteFooter />
    </>
  );
}
