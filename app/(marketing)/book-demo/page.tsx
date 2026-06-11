import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import PageHero from "@/components/marketing/page-hero";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import FeatureList from "@/components/marketing/feature-list";
import BusinessTypeSelector from "@/components/marketing/business-type-selector";
import DemoForm from "@/components/marketing/demo-form";
import Link from "next/link";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/book-demo"],
  PAGE_DESCRIPTIONS["/book-demo"]
);

const demoIncludes = [
  {
    title: "Merchant dashboard walkthrough",
    description:
      "See the unified dashboard where you track transactions, run reports, and manage staff access — all in one place.",
  },
  {
    title: "Payment links in action",
    description:
      "Watch how payment links are created and shared in seconds. See the customer checkout experience from their phone.",
  },
  {
    title: "QR payment flow",
    description:
      "See how QR codes are generated, displayed, and scanned — and how staff get instant payment confirmation.",
  },
  {
    title: "Workflows for your industry",
    description:
      "We'll tailor the demo to your business type — restaurant, salon, retail, or home services — so you see the features that matter most.",
  },
];

const miniFaqs = [
  {
    question: "How long does a demo take?",
    answer:
      "Most demos run about 20 to 30 minutes. We'll walk through the dashboard, payment links, and QR payments — focused on what's relevant to your business.",
  },
  {
    question: "Do I need to prepare anything?",
    answer:
      "No preparation needed. Just come with questions about your current payment setup and what you'd like to improve.",
  },
  {
    question: "What happens after the demo?",
    answer:
      "If HestaPay is a good fit, we'll discuss next steps, including early access enrollment, onboarding, and connecting your payment processor.",
  },
];

export default function BookDemoPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        vertical="Book a Demo"
        heading="See HestaPay in action"
        subtitle="A personalized walkthrough of the HestaPay platform — focused on your business type and the features that matter most to you."
        primaryLabel="Get Early Access"
        primaryHref="/early-access"
      />

      {/* 2. What you will see */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="What you'll see in the demo"
            subtitle="A focused walkthrough of the HestaPay platform tailored to your business."
            className="mx-auto text-center"
          />
          <div className="mt-12 max-w-3xl mx-auto">
            <FeatureList features={demoIncludes} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. Choose your business type */}
      <BusinessTypeSelector />

      {/* 4. Demo request form */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="Request a demo"
            subtitle="Fill out the form and we'll reach out to schedule a time that works for you."
            className="mx-auto text-center"
          />
          <div className="mt-10 max-w-lg mx-auto">
            <DemoForm />
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. Mini FAQ */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Quick questions"
            subtitle="Common questions about booking a demo with HestaPay."
            className="mx-auto text-center"
          />
          <div className="mt-10 max-w-2xl mx-auto space-y-3">
            {miniFaqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-background p-5"
              >
                <h4 className="text-sm font-semibold text-foreground">
                  {faq.question}
                </h4>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* 6. Trust note / closing */}
      <section className="py-12 lg:py-16 bg-surface border-t border-border">
        <Container className="text-center">
          <p className="text-sm text-muted max-w-lg mx-auto leading-relaxed">
            HestaPay is a software and orchestration platform for local
            businesses. We integrate with trusted payment infrastructure
            partners. No fake demos, no pressure — just a real look at how the
            platform works.
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm flex-wrap">
            <Link
              href="/security"
              className="text-muted hover:text-primary transition-colors"
            >
              Security & Compliance
            </Link>
            <Link
              href="/pricing"
              className="text-muted hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-muted hover:text-primary transition-colors"
            >
              FAQ
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}