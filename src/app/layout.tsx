import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stevenkoehl.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Steven Koehl — Engineering Complex Systems. Building Practical Solutions.",
  description:
    "Steven Koehl. Aerospace engineering professional and software developer with 18 years of Air Force technical experience in systems management, engineering leadership, and independent software development.",
  icons: {
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    title: "Steven Koehl — Engineering Complex Systems. Building Practical Solutions.",
    description: "USAF TSgt and software developer. Open-source projects, military service, and writing.",
    url: SITE_URL,
    images: [`${SITE_URL}/assets/photo-og.jpg`],
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
                  email: "contact@stevenkoehl.com",
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
                  url: SITE_URL,
                  description:
                    "USAF Technical Sergeant and software developer. Open-source projects and engineering portfolio.",
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
      </body>
    </html>
  );
}
