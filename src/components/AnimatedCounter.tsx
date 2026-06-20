"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, motion, animate, useMotionValue, useTransform } from "framer-motion";

/**
 * AnimatedCounter — Counts up from 0 to a target number when scrolled into view.
 *
 * Uses Framer Motion's imperative animate() + useMotionValue for smooth
 * counter animation. Only triggers once (once=true on useInView).
 *
 * Props:
 * - target: the number to count up to (required)
 * - prefix: string before the number (e.g. "$", "")
 * - suffix: string after the number (e.g. "+", "K", "%")
 * - duration: animation duration in seconds (default 1.5)
 * - className: passed to the wrapper span
 * - label: optional text label rendered below the counter (for stats)
 */

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  label?: string;
}

export default function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 1.5,
  className = "",
  label,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, {
        duration,
        ease: "easeOut",
      });
      const unsubscribe = rounded.on("change", (v) => {
        setDisplay(`${prefix}${v}${suffix}`);
      });
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [inView, target, duration, count, rounded, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-[28px] font-black leading-none"
      >
        {display}
      </motion.span>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-[10px] font-bold uppercase tracking-[1.5px] text-[var(--color-text-muted)] mt-1 block"
        >
          {label}
        </motion.span>
      )}
    </span>
  );
}
