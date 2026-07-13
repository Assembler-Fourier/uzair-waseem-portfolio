import Image from "next/image";

type SiteHeaderProps = {
  rootHref?: string;
  sectionPrefix?: string;
};

export function SiteHeader({ rootHref = "#top", sectionPrefix = "" }: SiteHeaderProps) {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href={rootHref} aria-label="Uzair Waseem portfolio home">
        <Image
          className="brand-logo"
          src="/uzair-waseem-logo.svg"
          alt=""
          width={30}
          height={30}
          aria-hidden="true"
        />
        <span>Uzair Waseem</span>
      </a>
      <nav className="nav-links">
        <a href={`${sectionPrefix}#work`}>Work</a>
        <a href={`${sectionPrefix}#roles`}>Fit</a>
        <a href={`${sectionPrefix}#experience`}>Experience</a>
        <a href={`${sectionPrefix}#contact`}>Contact</a>
      </nav>
    </header>
  );
}
