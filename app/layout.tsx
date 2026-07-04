import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://uzairwaseem.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Uzair Waseem | Software, AI & Cybersecurity Engineer in Dublin",
  description:
    "Uzair Waseem is a Dublin-based software, AI, cloud, automation and cybersecurity engineer building production-ready web products, data workflows, QA systems and secure delivery pipelines.",
  applicationName: "Uzair Waseem Portfolio",
  authors: [{ name: "Uzair Waseem", url: siteUrl }],
  creator: "Uzair Waseem",
  publisher: "Uzair Waseem",
  alternates: {
    canonical: "/"
  },
  keywords: [
    "Uzair Waseem",
    "Software Engineer Dublin",
    "AI Engineer Dublin",
    "Data Engineer Ireland",
    "Cloud Engineer Ireland",
    "DevOps Engineer Dublin",
    "Cybersecurity Engineer Dublin",
    "QA Automation Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "FastAPI",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
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
    title: "Uzair Waseem | Software, AI & Cybersecurity Engineer in Dublin",
    description:
      "Dublin-based engineer building production-ready web products, AI workflows, cloud automation, QA systems and secure delivery pipelines.",
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
    title: "Uzair Waseem | Software, AI & Cybersecurity Engineer in Dublin",
    description:
      "Software, AI, cloud, automation and cybersecurity engineer based in Dublin.",
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
