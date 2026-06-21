"use server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactResult {
  success: boolean;
  error?: string;
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

  // --- Email provider hook ---
  // To send real emails, add Resend, SendGrid, or another provider here.
  // Example with Resend:
  //
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "portfolio@stevenkoehl.dev",
  //     to: "spkoehl@gmail.com",
  //     subject: `Portfolio contact from ${name}`,
  //     text: `From: ${name} <${email}>\n\n${message}`,
  //   });
  //
  // For now, this logs to console and returns success.
  console.log(`[Contact] ${name} <${email}>: ${message}`);

  return { success: true };
}
