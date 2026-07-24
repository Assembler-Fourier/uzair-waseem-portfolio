import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://uzairwaseem.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Uzair Waseem | Software, AI & Security Engineer in Dublin",
  description:
    "Uzair Waseem is a Dublin-based software engineer building full-stack products, polyglot backend systems, applied AI workflows and security-aware delivery with TypeScript, Python, Rust, Go and PostgreSQL.",
  applicationName: "Uzair Waseem Portfolio",
  authors: [{ name: "Uzair Waseem", url: siteUrl }],
  creator: "Uzair Waseem",
  publisher: "Uzair Waseem",
  alternates: {
    canonical: "https://uzairwaseem.com/"
  },
  icons: {
    icon: "/uzair-waseem-logo.svg",
    shortcut: "/uzair-waseem-logo.svg",
    apple: "/uzair-waseem-logo.svg"
  },
  keywords: [
    "Uzair Waseem",
    "Full-stack Software Engineer Dublin",
    "Full-stack Software Engineer Ireland",
    "Backend Engineer Ireland",
    "Software Engineer Ireland",
    "React Developer Ireland",
    "Node.js Developer Ireland",
    "QA Automation Engineer Ireland",
    "Graduate Software Engineer Ireland",
    "Junior Software Engineer Ireland",
    "Security-aware Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Rust",
    "Go",
    "FastAPI",
    "Supabase",
    "Redis",
    "Docker",
    "Docker Compose",
    "Kubernetes",
    "Terraform",
    "GitHub Actions",
    "REST APIs",
    "SQL",
    "PostgreSQL",
    "Playwright",
    "OWASP",
    "secure SDLC"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Uzair Waseem | Software, AI & Security Engineer in Dublin",
    description:
      "Dublin-based software engineer building tested products, polyglot backend systems, applied AI workflows and secure delivery paths.",
    url: siteUrl,
    siteName: "Uzair Waseem Portfolio",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Uzair Waseem, software engineer in Dublin"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzair Waseem | Software, AI & Security Engineer in Dublin",
    description:
      "Dublin-based engineer building tested products, polyglot services, applied AI and automation.",
    images: ["/opengraph-image"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b12",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IE">
      <body>{children}</body>
    </html>
  );
}
