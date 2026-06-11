"use client";

import { useState } from "react";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Link from "next/link";

export interface FAQ {
  question: string;
  answer: string;
}

interface PageFAQProps {
  /** Used in default subtitle: "Common questions about HestaPay for {context}." */
  context: string;
  heading?: string;
  subtitle?: string;
  faqs: FAQ[];
}

export default function PageFAQ({
  context,
  heading = "Frequently asked questions",
  subtitle,
  faqs,
}: PageFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper alternate>
      <Container>
        <SectionHeading
          title={heading}
          subtitle={subtitle ?? `Common questions about HestaPay for ${context.toLowerCase()}.`}
          className="mx-auto text-center"
        />
        <div className="mt-12 max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-background overflow-hidden"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="text-sm font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-muted transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
          >
            View all FAQ →
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
}