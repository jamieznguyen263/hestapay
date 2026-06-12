"use client";

import { useState } from "react";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import Link from "next/link";

const faqs = [
  {
    question: "What is HestaPay?",
    answer:
      "HestaPay is payment software and an orchestration layer for local businesses. It connects to trusted payment infrastructure partners and provides a unified layer for payment links, QR payments, and a merchant dashboard — purpose-built for restaurants, nail salons, retail, and home services.",
  },
  {
    question: "Is HestaPay a payment processor?",
    answer:
      "No. HestaPay is not a bank, processor, or acquirer. It is a software layer that integrates with trusted payment infrastructure. You maintain your processor relationships while HestaPay provides the tools to manage and orchestrate payments.",
  },
  {
    question: "Which businesses is HestaPay built for?",
    answer:
      "HestaPay is purpose-built for restaurants, nail salons, retail stores, and home services. Each vertical has dedicated payment features and support — not a generic solution adapted after the fact.",
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
    <SectionWrapper className="bg-white" dense>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left: Section heading + product echo */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
              FAQ
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl leading-[1.08]">
              Questions
              <br />
              about orchestration.
            </h2>
            <p className="mt-4 text-[15px] text-[#5B6475] leading-relaxed">
              Quick answers about how HestaPay fits into your payment stack.
            </p>

            {/* Subtle product echo — orchestration flow */}
            <div className="mt-8 hidden sm:block">
              <div className="rounded-xl border border-[#E6EBF2] bg-[#F9FAFB] p-4">
                <div className="flex items-center gap-2 justify-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <span className="text-[10px] text-[#94A3B8]">Channels</span>
                  <span className="h-px w-6 bg-[#E6EBF2]" />
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-100 border border-emerald-200">
                    <span className="text-[8px] font-bold text-emerald-700">HP</span>
                  </div>
                  <span className="h-px w-6 bg-[#E6EBF2]" />
                  <span className="text-[10px] text-[#94A3B8]">Visibility</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: FAQ accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-[#E6EBF2] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)] overflow-hidden"
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F9FAFB] transition-colors"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span className="text-[14px] font-semibold text-[#0F172A] pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-[#94A3B8] transition-transform duration-200 ${
                        openIndex === index ? "rotate-180 text-emerald-500" : ""
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
                    <div className="px-6 pb-6">
                      <p className="text-[14px] text-[#5B6475] leading-relaxed border-t border-[#E6EBF2] pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/faq"
                className="text-[14px] font-medium text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1.5 group transition-colors duration-200"
              >
                View all questions
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}