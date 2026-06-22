import { describe, it, expect } from "vitest";
import { submitContact } from "@/app/actions/contact";

// ── Contact form action tests ──

describe("submitContact", () => {
  // Helper to build FormData
  function makeFormData(name: string, email: string, message: string) {
    const fd = new FormData();
    fd.set("name", name);
    fd.set("email", email);
    fd.set("message", message);
    return fd;
  }

  it("returns success for valid input", async () => {
    const result = await submitContact(
      { success: false },
      makeFormData("Jane Doe", "jane@example.com", "Hello, this is a test message."),
    );
    expect(result.success).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it("rejects names shorter than 2 characters", async () => {
    const result = await submitContact(
      { success: false },
      makeFormData("J", "jane@example.com", "Hello, this is a test message."),
    );
    expect(result.success).toBe(false);
    expect(result.error).toContain("Name");
  });

  it("rejects empty names", async () => {
    const result = await submitContact(
      { success: false },
      makeFormData("", "jane@example.com", "Hello, this is a test message."),
    );
    expect(result.success).toBe(false);
    expect(result.error).toContain("Name");
  });

  it("rejects invalid email addresses", async () => {
    const result = await submitContact(
      { success: false },
      makeFormData("Jane Doe", "not-an-email", "Hello, this is a test message."),
    );
    expect(result.success).toBe(false);
    expect(result.error).toContain("email");
  });

  it("rejects empty email", async () => {
    const result = await submitContact(
      { success: false },
      makeFormData("Jane Doe", "", "Hello, this is a test message."),
    );
    expect(result.success).toBe(false);
    expect(result.error).toContain("email");
  });

  it("rejects messages shorter than 10 characters", async () => {
    const result = await submitContact(
      { success: false },
      makeFormData("Jane Doe", "jane@example.com", "Short"),
    );
    expect(result.success).toBe(false);
    expect(result.error).toContain("Message");
  });

  it("rejects empty messages", async () => {
    const result = await submitContact(
      { success: false },
      makeFormData("Jane Doe", "jane@example.com", ""),
    );
    expect(result.success).toBe(false);
    expect(result.error).toContain("Message");
  });
});
