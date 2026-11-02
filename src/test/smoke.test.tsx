import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import ExperiencePage from "@/app/experience/page";
import ProjectsPage from "@/app/projects/page";
import ResumePage from "@/app/resume/page";
import ContactPage from "@/app/contact/page";
import WritingPage from "@/app/writing/page";
import ExcerptPage from "@/app/writing/excerpt/page";
import LabPage from "@/app/lab/page";
import NotFound from "@/app/not-found";

describe("Portfolio — smoke tests", () => {
  it("renders the landing page with professional hero", () => {
    render(<HomePage />);
    expect(
      screen.getByText((content) => content.includes("Technical Leadership")),
    ).toBeInTheDocument();
  });

  it("renders the /about page", () => {
    render(<AboutPage />);
    expect(screen.getByText("Professional biography")).toBeInTheDocument();
  });

  it("renders the /experience page", () => {
    render(<ExperiencePage />);
    expect(screen.getByText("Professional experience")).toBeInTheDocument();
  });

  it("renders the /projects page", () => {
    render(<ProjectsPage />);
    expect(screen.getByText("Portfolio index")).toBeInTheDocument();
  });

  it("renders the /resume page", () => {
    render(<ResumePage />);
    expect(screen.getByText("Summary")).toBeInTheDocument();
  });

  it("renders the /contact page", () => {
    render(<ContactPage />);
    expect(screen.getByText((content) => content.includes("Let's talk"))).toBeInTheDocument();
  });

  it("renders the /writing page with book synopsis", () => {
    render(<WritingPage />);
    const matches = screen.getAllByText((content) => content.includes("Memoria"));
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the excerpt page with chapter text", () => {
    render(<ExcerptPage />);
    expect(screen.getByText("Letting the Palace Fall")).toBeInTheDocument();
  });

  it("renders the /lab page", () => {
    render(<LabPage />);
    expect(screen.getByText("Homelab and infrastructure")).toBeInTheDocument();
  });

  it("renders the 404 page", () => {
    render(<NotFound />);
    expect(
      screen.getByText((content) => content.includes("Page not")),
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("found.")),
    ).toBeInTheDocument();
  });
});
