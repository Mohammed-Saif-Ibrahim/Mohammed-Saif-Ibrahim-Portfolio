import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteUrl, fullName } from "@/lib/site";

const siteName = `${fullName} — Full Stack Developer`;
const description =
  "Full Stack Developer specializing in React, Node.js, and scalable web applications. Building production-ready systems with clean architecture and real-world usability.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s — ${fullName}`,
  },
  description,
  keywords: [
    fullName,
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: fullName }],
  creator: fullName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080A0F",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: fullName,
  url: siteUrl,
  jobTitle: "Full Stack Developer",
  description,
  knowsAbout: [
    "React",
    "Node.js",
    "Express.js",
    "TypeScript",
    "Next.js",
    "SQL Server",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
