"use server";

import { Resend } from "resend";

interface ContactResult {
  success: boolean;
  error?: string;
  mailto?: string;
}

/** Initialize Resend lazily — no crash if RESEND_API_KEY is unset. */
function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  try {
    return new Resend(key);
  } catch {
    return null;
  }
}

export async function submitContact(
  _prev: ContactResult,
  formData: FormData,
): Promise<ContactResult> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validate
  if (!name || name.trim().length < 2) {
    return { success: false, error: "Name must be at least 2 characters." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }
  if (!message || message.trim().length < 10) {
    return { success: false, error: "Message must be at least 10 characters." };
  }

  // Build mailto fallback
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
  const mailto = `mailto:spkoehl@gmail.com?subject=${subject}&body=${body}`;

  // Try server-side email via Resend (if configured)
  const resend = getResend();
  if (resend) {
    try {
      const result = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "spkoehl@gmail.com",
        replyTo: email,
        subject: `[Portfolio] Contact from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><hr/><p>${message.replace(/\n/g, "<br/>")}</p>`,
      });

      if (result.error) {
        console.warn("[Contact] Resend error, falling back to mailto:", result.error.message);
        return { success: true, mailto };
      }

      console.log(`[Contact] Sent via Resend: ${name} <${email}>`);
      return { success: true };
    } catch (err) {
      console.warn("[Contact] Resend threw, falling back to mailto:", err);
      return { success: true, mailto };
    }
  }

  // No Resend configured — use mailto only
  console.log(`[Contact] No RESEND_API_KEY, using mailto: ${name} <${email}>`);
  return { success: true, mailto };
}
