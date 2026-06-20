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

export const metadata: Metadata = {
  title: "Steven Koehl — Software Developer & Novelist",
  description:
    "Steven Koehl. USAF Technical Sergeant, software developer, and novelist. Building open-source tools and writing Memoria Aeterna, a literary historical fiction novel spanning 982 years of Byzantine and Ottoman history.",
  openGraph: {
    type: "website",
    title: "Steven Koehl — Software Developer & Novelist",
    description: "USAF TSgt, software developer, and novelist. Two sides of one site.",
    url: "https://sleuthy-sloth.github.io/portfolio/",
    images: ["https://sleuthy-sloth.github.io/portfolio/assets/photo.jpg"],
  },
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
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}
