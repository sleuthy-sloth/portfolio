"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * ScrollReveal — Wraps children in a scroll-triggered fade-up animation.
 *
 * Uses Framer Motion's whileInView so the animation triggers when the
 * element scrolls into the viewport, and reverses if it scrolls back out.
 * Respects prefers-reduced-motion via the global CSS rule.
 *
 * Props:
 * - children: content to animate
 * - delay: stagger delay in seconds (default 0)
 * - direction: "up" (default) or "none" (fade only)
 * - className: passed through to the wrapper
 * - once: if true, animation plays once and stays visible (default true)
 */

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "none";
  className?: string;
  once?: boolean;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: ScrollRevealProps) {
  const variants = direction === "none" ? fadeOnly : fadeUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px 0px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
