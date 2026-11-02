"use client";

import { useState } from "react";

/**
 * ContactForm — Static-hosting compatible.
 *
 * No server action. On submit, validates client-side and opens the user's
 * email client via a mailto: link with the message pre-filled.
 */

const initialState = { success: false, error: undefined as string | undefined };

export default function ContactForm() {
  const [state, setState] = useState(initialState);
  const [pending, setPending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (name.length < 2) {
      setState({ success: false, error: "Name must be at least 2 characters." });
      setPending(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState({ success: false, error: "Please enter a valid email address." });
      setPending(false);
      return;
    }
    if (message.length < 10) {
      setState({ success: false, error: "Message must be at least 10 characters." });
      setPending(false);
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    const mailto = `mailto:spkoehl@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setState({ success: true, error: undefined });
    setPending(false);
  }

  if (state.success) {
    return (
      <div className="text-center py-12">
        <p className="text-[28px] font-black leading-none mb-4">Opening your email client...</p>
        <p className="text-base text-[var(--color-text-muted)]">
          If nothing happened,{" "}
          <a
            href="mailto:spkoehl@gmail.com"
            className="text-[var(--color-accent)] hover:underline"
          >
            click here to email directly
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[480px] mx-auto text-left space-y-5">
      <div>
        <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-[2px] text-[var(--color-text-muted)] mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          autoComplete="name"
          className="w-full bg-transparent border border-[var(--color-border)] px-4 py-3 text-[15px] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-[2px] text-[var(--color-text-muted)] mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full bg-transparent border border-[var(--color-border)] px-4 py-3 text-[15px] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] outline-none transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-[2px] text-[var(--color-text-muted)] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          className="w-full bg-transparent border border-[var(--color-border)] px-4 py-3 text-[15px] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] outline-none transition-colors resize-y"
          placeholder="What would you like to discuss?"
        />
      </div>

      {state.error && (
        <p className="text-sm text-[var(--color-accent)]">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-block bg-[var(--color-accent)] text-white px-7 py-[14px] text-xs font-bold uppercase tracking-[2px] hover:opacity-85 transition-opacity disabled:opacity-50"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
