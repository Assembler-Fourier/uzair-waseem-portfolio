import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://uzairwaseem.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Uzair Waseem | Full-stack Software Engineer in Ireland",
  description:
    "Ireland-based full-stack software engineer open to relocate across Ireland. Focused on React, Node.js, Python, FastAPI, backend APIs, automation, testing, Docker, GitHub Actions, and security-aware development.",
  applicationName: "Uzair Waseem Portfolio",
  authors: [{ name: "Uzair Waseem", url: siteUrl }],
  creator: "Uzair Waseem",
  publisher: "Uzair Waseem",
  alternates: {
    canonical: "https://uzairwaseem.com/"
  },
  keywords: [
    "Uzair Waseem",
    "Full-stack Software Engineer Ireland",
    "Backend Engineer Ireland",
    "Software Engineer Ireland",
    "React Developer Ireland",
    "Node.js Developer Ireland",
    "Python FastAPI Developer Ireland",
    "Graduate Software Engineer Ireland",
    "Junior Software Engineer Ireland",
    "QA Automation Engineer",
    "Security-aware Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "FastAPI",
    "Docker",
    "GitHub Actions",
    "REST APIs",
    "SQL",
    "PostgreSQL",
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
    title: "Uzair Waseem | Full-stack Software Engineer in Ireland",
    description:
      "Ireland-based full-stack/backend software engineer focused on React, Node.js, Python, FastAPI, APIs, testing, Docker, GitHub Actions and security-aware delivery.",
    url: siteUrl,
    siteName: "Uzair Waseem Portfolio",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Uzair Waseem portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzair Waseem | Full-stack Software Engineer in Ireland",
    description:
      "Ireland-based full-stack/backend software engineer open to roles across Ireland.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
