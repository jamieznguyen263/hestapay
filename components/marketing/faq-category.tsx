"use client";

import { useState } from "react";
import type { FAQ } from "@/components/marketing/page-faq";

interface FAQCategoryProps {
  faqs: FAQ[];
  categoryId?: string;
}

export default function FAQCategory({ faqs, categoryId }: FAQCategoryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3" id={categoryId}>
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
  );
}