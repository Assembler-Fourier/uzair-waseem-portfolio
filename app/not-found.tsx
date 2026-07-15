import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { SiteHeader } from "./components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader rootHref="/" sectionPrefix="/" />
      <main className="not-found-page">
        <div className="not-found-grid" aria-hidden="true" />
        <section className="not-found-content" aria-labelledby="not-found-title">
          <p className="intro-label">404 · Route not found</p>
          <h1 id="not-found-title">This proof path does not exist.</h1>
          <p>The portfolio, case studies and contact routes are still available from the home page.</p>
          <div className="case-actions">
            <Link href="/#work"><ArrowLeft size={17} aria-hidden="true" />View selected work</Link>
            <a href="mailto:uzairwaseem29@gmail.com"><Mail size={17} aria-hidden="true" />Email Uzair</a>
          </div>
        </section>
      </main>
    </>
  );
}
