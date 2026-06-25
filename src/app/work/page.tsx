import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steven Koehl — Engineering Portfolio",
  description:
    "Open-source projects, military achievements, and the tech stack Steven Koehl uses to build them. NeuralPulse, the 92 AMXS Tracker, and the career that led from avionics benches to keyboards.",
};

/**
 * /work has been consolidated into the root landing page (/).
 * This route redirects permanently for backward compatibility.
 */
export default function WorkRedirect() {
  redirect("/");
}
