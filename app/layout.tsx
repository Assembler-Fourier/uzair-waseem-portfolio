import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://uzairwaseem.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Uzair Waseem | Software Engineer in Dublin",
  description:
    "Uzair Waseem is a Dublin-based software engineer building full-stack products, backend APIs, QA automation and security-aware delivery workflows with TypeScript, React, Node.js, PostgreSQL and Playwright.",
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
    "Supabase",
    "Docker",
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
    title: "Uzair Waseem | Software Engineer in Dublin",
    description:
      "Dublin-based software engineer building full-stack products, backend APIs, QA automation and secure delivery workflows.",
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
    title: "Uzair Waseem | Software Engineer in Dublin",
    description:
      "Dublin-based engineer building tested full-stack products, APIs and automation.",
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
