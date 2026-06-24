import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import WorkHero from "@/components/WorkHero";
import AboutSection from "@/components/AboutSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsGrid from "@/components/SkillsGrid";
import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Steven Koehl | Engineering & Software Development",
  description:
    "Open-source projects, military achievements, and the tech stack Steven Koehl uses to build them. NeuralPulse, the 92 AMXS Tracker, and the career that led from avionics benches to keyboards.",
  openGraph: {
    title: "Steven Koehl — Engineering Portfolio",
    description:
      "From flightlines to code: software engineering projects by Steven Koehl, USAF Technical Sergeant.",
  },
};

/**
 * Engineering portfolio (/work) — Steven's software development and
 * USAF career, organized into sections: Hero, About, Projects, Skills, Contact.
 */
export default function WorkPage() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work#about", label: "About" },
    { href: "/work#projects", label: "Projects" },
    { href: "/work#skills", label: "Skills" },
    { href: "/work#contact", label: "Contact" },
    { href: "/writing", label: "Writing", crossAccent: "writing" as const },
  ];

  return (
    <>
      <Nav links={navLinks} />
      <CommandPalette />

      <main className="flex-1" id="main-content">
        <WorkHero />
        <AboutSection />
        <ProjectsGrid />
        <SkillsGrid />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
