import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uzair Waseem | Secure Product Engineer",
  description:
    "Dublin-based software, AI, cloud, automation and security engineer building reliable products from idea to production.",
  authors: [{ name: "Uzair Waseem" }],
  keywords: [
    "Uzair Waseem",
    "Software Engineer Dublin",
    "AI Engineer Ireland",
    "Security Engineer",
    "Cloud DevOps Engineer",
    "QA Automation Engineer",
    "Product Engineer"
  ],
  openGraph: {
    title: "Uzair Waseem | Secure Product Engineer",
    description:
      "Software, AI, cloud, automation and security work from a Dublin-based engineer.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101214"
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
