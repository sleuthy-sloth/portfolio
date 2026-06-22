"use server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactResult {
  success: boolean;
  error?: string;
  mailto?: string;
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

  // Build mailto link as a working fallback
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(
    `From: ${name} <${email}>\n\n${message}`,
  );
  const mailto = `mailto:spkoehl@gmail.com?subject=${subject}&body=${body}`;

  // Log for server records
  console.log(`[Contact] ${name} <${email}>: ${message}`);

  return { success: true, mailto };
}
