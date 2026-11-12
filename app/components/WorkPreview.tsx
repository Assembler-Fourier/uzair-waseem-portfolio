"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Check, Code2, Layers, ShieldCheck } from "lucide-react";

const previews = [
  {
    label: "Full-stack",
    title: "HouseFair",
    description: "One home. A little more harmony.",
    image: "/projects/housefair-product.jpg",
    alt: "HouseFair mobile product screens",
    tech: "Next.js / TypeScript / Supabase",
    href: "/projects/housefair",
    status: "Public sample tour",
    icon: Layers,
  },
  {
    label: "Backend",
    title: "VaultWatch",
    description: "Every signal tells a story.",
    image: "/projects/vaultwatch-product.png",
    alt: "VaultWatch synthetic investigation dashboard",
    tech: "Rust / Go / Python / PostgreSQL",
    href: "/projects/vaultwatch",
    status: "Synthetic showcase",
    icon: ShieldCheck,
  },
  {
    label: "QA",
    title: "QA Automation Lab",
    description: "Catch the edges. Keep the confidence.",
    image: "/projects/qa-automation-lab-product.png",
    alt: "QA Automation Lab Playwright test report",
    tech: "Playwright / API testing / CI",
    href: "/projects/qa-automation-lab",
    status: "Browser & API test suite",
    icon: Code2,
  },
];

export function WorkPreview() {
  const [active, setActive] = useState(0);
  const project = previews[active];
  const Icon = project.icon;
  return (
    <div className="work-preview">
      <div className="preview-toolbar">
        <span>
          <span className="status-dot" /> A closer look
        </span>
        <span>0{active + 1} / 03</span>
      </div>
      <div
        className="preview-tabs"
        role="group"
        aria-label="Explore work by focus"
      >
        {previews.map((item, index) => (
          <button
            type="button"
            key={item.label}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={`preview-stage preview-stage-${active}`}>
        <div className="preview-cross cross-one" aria-hidden="true">
          +
        </div>
        <div className="preview-cross cross-two" aria-hidden="true">
          +
        </div>
        <div className={active === 0 ? "house-phones" : "preview-image"}>
          {active === 0 ? (
            <>
              <div>
                <Image
                  src="/projects/housefair-tour.jpg"
                  alt="HouseFair sample household overview"
                  fill
                  priority
                  sizes="(max-width: 700px) 31vw, (max-width: 1100px) 12vw, 150px"
                />
              </div>
              <div>
                <Image
                  src="/projects/housefair-tasks.jpg"
                  alt="HouseFair sample chores workflow"
                  fill
                  priority
                  sizes="(max-width: 700px) 31vw, (max-width: 1100px) 12vw, 150px"
                />
              </div>
            </>
          ) : (
            <Image
              src={project.image}
              alt={project.alt}
              fill
              sizes="(max-width: 700px) 88vw, 520px"
            />
          )}
        </div>
        <div className="preview-status">
          <Check size={12} aria-hidden="true" />
          {project.status}
        </div>
      </div>
      <div className="preview-info" aria-live="polite">
        <div>
          <p>{project.tech}</p>
          <h2>{project.title}</h2>
          <span>{project.description}</span>
        </div>
        <a href={project.href} aria-label={`Read ${project.title} case study`}>
          <ArrowUpRight size={23} aria-hidden="true" />
        </a>
      </div>
      <div className="preview-note">
        <Icon size={15} aria-hidden="true" />
        <span>Explore the product. Inspect the decisions.</span>
      </div>
    </div>
  );
}
