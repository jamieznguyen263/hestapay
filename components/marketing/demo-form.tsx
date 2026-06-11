"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/button";

export default function DemoForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
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
          Thanks — we&rsquo;ll be in touch
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed max-w-sm mx-auto">
          We&rsquo;ll reach out to schedule a personalized demo at a time that
          works for you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-background p-6 sm:p-8 space-y-5">
      <div>
        <label htmlFor="demo-name" className="block text-sm font-medium text-foreground">
          Name <span className="text-primary">*</span>
        </label>
        <input
          id="demo-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="demo-email" className="block text-sm font-medium text-foreground">
          Work email <span className="text-primary">*</span>
        </label>
        <input
          id="demo-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="you@business.com"
        />
      </div>
      <div>
        <label htmlFor="demo-type" className="block text-sm font-medium text-foreground">
          Business type
        </label>
        <select
          id="demo-type"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">Select your business type</option>
          <option value="restaurant">Restaurant</option>
          <option value="nail-salon">Nail Salon</option>
          <option value="retail">Retail</option>
          <option value="home-services">Home Services</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="demo-message" className="block text-sm font-medium text-foreground">
          Anything you&rsquo;d like us to cover? <span className="text-muted font-normal">(optional)</span>
        </label>
        <textarea
          id="demo-message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          placeholder="Tell us about your business and what you&rsquo;d like to see."
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        size="base"
        className="w-full justify-center"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting…" : "Book a Demo"}
      </Button>
    </form>
  );
}