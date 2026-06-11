"use client";

import { useState } from "react";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Link from "next/link";

const faqs = [
  {
    question: "What is HestaPay?",
    answer:
      "HestaPay is a payment software and orchestration platform for local businesses. It connects to trusted payment infrastructure partners and provides a unified layer for payment links, QR payments, and a merchant dashboard — purpose-built for restaurants, nail salons, retail, and home services.",
  },
  {
    question: "Is HestaPay a payment processor?",
    answer:
      "No. HestaPay is not a bank, processor, or acquirer. It is a software layer that integrates with trusted payment infrastructure. You maintain your processor relationships while HestaPay provides the tools to manage and orchestrate payments.",
  },
  {
    question: "Which businesses is HestaPay built for?",
    answer:
      "HestaPay is purpose-built for restaurants, nail salons, retail stores, and home services. Each vertical has dedicated workflows, features, and support — not a generic solution adapted after the fact.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can join the early access program to be among the first businesses to use HestaPay. Early access members help shape the product and receive priority onboarding.",
  },
  {
    question: "How does pricing work?",
    answer:
      "HestaPay offers transparent pricing designed for local businesses. Visit the pricing page for details on plans and what's included.",
  },
];

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper alternate>
      <Container>
        <SectionHeading
          title="Frequently asked questions"
          subtitle="Quick answers to common questions about HestaPay."
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