import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";

// Mock localStorage for ThemeToggle tests
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

// ── Nav tests ──

describe("Nav", () => {
  it("renders the name link to home", () => {
    render(<Nav links={[]} />);
    const nameLink = screen.getByText("Steven Koehl");
    expect(nameLink).toBeInTheDocument();
    expect(nameLink.closest("a")).toHaveAttribute("href", "/");
  });

  it("renders nothing when links prop is empty", () => {
    render(<Nav links={[]} />);
    // No nav list items should exist
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("renders all provided links on desktop", () => {
    const links = [
      { href: "/", label: "Home" },
      { href: "/work", label: "Portfolio" },
      { href: "/writing", label: "Writing" },
    ];
    render(<Nav links={links} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Writing")).toBeInTheDocument();
  });

  it("marks crossAccent writing links with gold color class", () => {
    const links = [
      { href: "/writing", label: "Writing", crossAccent: "writing" as const },
    ];
    render(<Nav links={links} />);
    const link = screen.getByText("Writing");
    expect(link.className).toContain("text-[var(--color-gold)]");
  });

  it("includes a theme toggle button", () => {
    render(<Nav links={[]} />);
    expect(screen.getByRole("button", { name: /toggle dark mode/i })).toBeInTheDocument();
  });

  it("has a hamburger button when links are provided", () => {
    const links = [{ href: "/work", label: "Portfolio" }];
    render(<Nav links={links} />);
    expect(screen.getByRole("button", { name: /toggle menu/i })).toBeInTheDocument();
  });
});

// ── ThemeToggle tests ──

describe("ThemeToggle", () => {
  beforeEach(() => {
    // Clean up data-theme and localStorage between tests
    document.documentElement.removeAttribute("data-theme");
    localStorageMock.clear();
  });

  it("renders the toggle button", () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("button", { name: /toggle dark mode/i })).toBeInTheDocument();
  });

  it("sets data-theme to dark and persists to localStorage when clicked in light mode", () => {
    // Ensure light mode (no data-theme attribute)
    document.documentElement.removeAttribute("data-theme");
    render(<ThemeToggle />);

    fireEvent.click(screen.getByRole("button", { name: /toggle dark mode/i }));

    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("removes data-theme and persists light to localStorage when clicked in dark mode", () => {
    // Set initial dark mode
    document.documentElement.setAttribute("data-theme", "dark");
    render(<ThemeToggle />);

    fireEvent.click(screen.getByRole("button", { name: /toggle dark mode/i }));

    expect(document.documentElement.getAttribute("data-theme")).toBeNull();
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
