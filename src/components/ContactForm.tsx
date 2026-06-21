"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";

const initialState = { success: false, error: undefined as string | undefined };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.success) {
    return (
      <div className="text-center py-12">
        <p className="text-[28px] font-black leading-none mb-4">Message sent.</p>
        <p className="text-base text-[var(--color-text-muted)]">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="max-w-[480px] mx-auto text-left space-y-5">
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
