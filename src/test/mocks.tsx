import { vi } from "vitest";
import React from "react";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

// Mock next/image
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) =>
    React.createElement("img", props),
}));

// Mock next/font/google
vi.mock("next/font/google", () => ({
  Inter: () => ({ variable: "--font-inter", subsets: ["latin"] }),
  Source_Serif_4: () => ({
    variable: "--font-source-serif",
    subsets: ["latin"],
  }),
}));

// Mock next/link
vi.mock("next/link", () => ({
  default: (props: Record<string, unknown>) =>
    React.createElement("a", props),
}));

// Mock framer-motion fully
vi.mock("framer-motion", () => {
  const createMotionComponent = (tag: string) => {
    const Component = (props: Record<string, unknown>) =>
      React.createElement(tag, props);
    Component.displayName = `Motion${tag}`;
    return Component;
  };
  const Group = (props: Record<string, unknown>) =>
    React.createElement(React.Fragment, {}, props.children as React.ReactNode);
  Group.displayName = "MotionGroup";

  const unsubscribe = vi.fn();
  const mockMotionValue = {
    get: () => 0,
    set: vi.fn(),
    onChange: vi.fn(),
    on: (_event: string, cb: (v: number) => void) => { cb(18); return unsubscribe; },
    destroy: vi.fn(),
  };

  return {
    motion: {
      div: createMotionComponent("div"),
      span: createMotionComponent("span"),
    },
    AnimatePresence: Group,
    useInView: () => true,
    useMotionValue: () => mockMotionValue,
    useTransform: () => mockMotionValue,
    animate: () => ({ stop: vi.fn() }),
  };
});
