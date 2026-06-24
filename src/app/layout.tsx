import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import RootClient from "./RootClient";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["400", "600"],
});

const SITE_URL = "https://portfolio-two-ochre-vxl9gmenfz.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Steven Koehl — Software Developer & Novelist",
  description:
    "Steven Koehl. USAF Technical Sergeant, software developer, and novelist. Building open-source tools and writing Memoria Aeterna, a literary historical fiction novel spanning 982 years of Byzantine and Ottoman history.",
  openGraph: {
    type: "website",
    title: "Steven Koehl — Software Developer & Novelist",
    description: "USAF TSgt, software developer, and novelist. Two sides of one site.",
    url: SITE_URL,
    images: [`${SITE_URL}/assets/photo.png`],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline favicon: red "S" for engineering, gold "M" for writing pages */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23e63946'/><text x='50' y='72' font-size='60' font-weight='900' text-anchor='middle' fill='white' font-family='Arial'>S</text></svg>"
        />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Steven Koehl",
                  givenName: "Steven",
                  familyName: "Koehl",
                  email: "spkoehl@gmail.com",
                  jobTitle: "Technical Sergeant",
                  affiliation: {
                    "@type": "Organization",
                    name: "United States Air Force",
                  },
                  sameAs: [
                    "https://github.com/sleuthy-sloth",
                    "https://www.linkedin.com/in/steven-koehl",
                  ],
                  knowsAbout: [
                    "Software Engineering",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Aircraft Maintenance",
                    "Avionics",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "Steven Koehl — Portfolio",
                  url: "https://portfolio-two-ochre-vxl9gmenfz.vercel.app",
                  description:
                    "USAF Technical Sergeant, software developer, and novelist. Two sides of one life.",
                },
                {
                  "@type": "Book",
                  name: "Memoria Aeterna",
                  author: {
                    "@type": "Person",
                    name: "Steven Koehl",
                  },
                  genre: ["Literary Fiction", "Historical Fiction"],
                  description:
                    "A novel about an immortal man searching for the woman he loves across 982 years of Byzantine and Ottoman history.",
                  numberOfPages: 720,
                },
                {
                  "@type": "SoftwareApplication",
                  name: "NeuralPulse",
                  applicationCategory: "HealthApplication",
                  operatingSystem: "Web",
                  description:
                    "Open-source brain training PWA with 13 games, daily challenges, and stats dashboard.",
                  url: "https://neuralpulse.app",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "OpenNarrator",
                  applicationCategory: "Multimedia",
                  operatingSystem: "macOS, Linux",
                  description:
                    "Open-source audiobook creator. Convert ebooks to chaptered M4B using open-source TTS.",
                  url: "https://github.com/sleuthy-sloth/opennarrator",
                },
              ],
            }),
          }}
        />
        {/* Skip-to-content for keyboard users */}
        <style>{`#skip-link:focus { top: 8px; }`}</style>
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d0d0d" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body className="min-h-dvh flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <a
          id="skip-link"
          href="#main-content"
          className="sr-only absolute top-[-100px] left-4 z-[100] bg-[var(--color-accent)] text-white px-4 py-3 rounded text-sm font-bold focus:not-sr-only focus:static transition-[top] duration-100"
        >
          Skip to main content
        </a>
        <RootClient>{children}</RootClient>
        <Analytics />
      </body>
    </html>
  );
}
