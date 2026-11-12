import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://uzairwaseem.com";
const title = "Uzair Waseem | Software Engineer in Dublin, Ireland";
const description =
  "Software engineer in Dublin working with React, TypeScript, backend APIs and QA automation. Explore projects, experience and CV. Available for roles across Ireland.";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Uzair Waseem Portfolio",
  authors: [{ name: "Uzair Waseem", url: siteUrl }],
  creator: "Uzair Waseem",
  publisher: "Uzair Waseem",
  alternates: { canonical: `${siteUrl}/` },
  icons: { icon: "/uzair-waseem-logo.svg", shortcut: "/uzair-waseem-logo.svg" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Uzair Waseem",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Uzair Waseem, software engineer in Dublin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#151d19",
  colorScheme: "light",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IE">
      <body>{children}</body>
    </html>
  );
}
