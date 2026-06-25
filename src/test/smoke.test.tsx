import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";
import WritingPage from "@/app/writing/page";
import ExcerptPage from "@/app/writing/excerpt/page";
import NeuralPulsePage from "@/app/work/neuralpulse/page";
import AmxsTrackerPage from "@/app/work/92-amxs-tracker/page";
import NowPage from "@/app/now/page";
import NotFound from "@/app/not-found";

describe("Portfolio — smoke tests", () => {
  it("renders the landing page with engineering hero", () => {
    render(<HomePage />);
    expect(
      screen.getByText((content) => content.includes("From Flightlines")),
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("To Code")),
    ).toBeInTheDocument();
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

  it("renders the NeuralPulse case study", () => {
    render(<NeuralPulsePage />);
    expect(screen.getByText("NeuralPulse")).toBeInTheDocument();
  });

  it("renders the 92 AMXS Tracker case study", () => {
    render(<AmxsTrackerPage />);
    expect(screen.getByText("92 AMXS Tracker")).toBeInTheDocument();
  });

  it("renders the /now page", () => {
    render(<NowPage />);
    const headings = screen.getAllByText("Now");
    expect(headings.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("SkillBridge Transition")).toBeInTheDocument();
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
