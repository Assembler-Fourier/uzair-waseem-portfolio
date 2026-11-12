import { ArrowUpRight } from "lucide-react";

type SiteHeaderProps = { rootHref?: string; sectionPrefix?: string };
export function SiteHeader({
  rootHref = "#top",
  sectionPrefix = "",
}: SiteHeaderProps) {
  return (
    <header className="site-header" id="top">
      <div className="shell header-inner">
        <a className="brand" href={rootHref} title="Portfolio home">
          <span className="brand-mark">
            u<span>.</span>w
          </span>
          <span>
            Uzair Waseem<span className="brand-sub">Software engineer</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href={`${sectionPrefix}#work`}>
            Work<span>01</span>
          </a>
          <a href={`${sectionPrefix}#roles`}>
            About<span>02</span>
          </a>
          <a href={`${sectionPrefix}#experience`}>
            Experience<span>03</span>
          </a>
        </nav>
        <a className="header-contact" href={`${sectionPrefix}#contact`}>
          Let’s talk
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
