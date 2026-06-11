"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/button";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-10 text-center">
        <svg
          className="mx-auto h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="mt-4 text-lg font-semibold text-foreground">
          Thanks &mdash; we&rsquo;ll get back to you
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed max-w-sm mx-auto">
          Your message has been received. We typically respond within a few
          business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-background p-6 sm:p-8 space-y-5">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-foreground">
          Name <span className="text-primary">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-foreground">
          Email <span className="text-primary">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="you@business.com"
        />
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-foreground">
          Subject
        </label>
        <select
          id="contact-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">Select a topic</option>
          <option value="general">General inquiry</option>
          <option value="sales">Sales</option>
          <option value="support">Support</option>
          <option value="partnerships">Partnerships</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-foreground">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          placeholder="Tell us how we can help."
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        size="base"
        className="w-full justify-center"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}