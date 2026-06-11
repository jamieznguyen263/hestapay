import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import PageHero from "@/components/marketing/page-hero";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import FeatureList from "@/components/marketing/feature-list";
import PricingCard from "@/components/marketing/pricing-card";
import PageFAQ from "@/components/marketing/page-faq";
import CTASection from "@/components/marketing/cta-section";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/pricing"],
  PAGE_DESCRIPTIONS["/pricing"]
);

const starterFeatures = [
  "Payment links",
  "QR payments",
  "Merchant dashboard",
  "Basic reporting",
  "Staff access (up to 5)",
  "Email support",
];

const growthFeatures = [
  "Everything in Starter",
  "Advanced reporting and analytics",
  "Multi-location management",
  "Staff access (unlimited)",
  "Role-based permissions",
  "Priority support",
];

const customFeatures = [
  "Everything in Growth",
  "Custom integrations",
  "Dedicated account support",
  "Volume-based processing setup",
  "Custom onboarding and training",
  "Tailored feature configuration",
];

const includedFeatures = [
  {
    title: "Unified payment dashboard",
    description:
      "One dashboard for payment links, QR payments, and transaction management across all your locations.",
  },
  {
    title: "Payment links and QR payments",
    description:
      "Create and share payment links. Generate QR codes for touch-free checkout. Included in every plan.",
  },
  {
    title: "Staff access and permissions",
    description:
      "Invite team members with role-based permissions. Staff see their transactions; managers run reports; owners control everything.",
  },
  {
    title: "Reporting and analytics",
    description:
      "Revenue reports, transaction history, refund tracking, and staff performance — all built into the dashboard.",
  },
  {
    title: "Platform updates and support",
    description:
      "Continuous platform improvements and support from the HestaPay team. Your software stays current without additional cost.",
  },
];

const partnerFeatures = [
  {
    title: "You choose your processor",
    description:
      "HestaPay integrates with trusted payment infrastructure partners. You maintain your processor relationship — HestaPay provides the software layer.",
  },
  {
    title: "Transparent processing costs",
    description:
      "Processing rates are set by your payment processor, not by HestaPay. You know exactly what you pay for processing — no hidden markups from us.",
  },
  {
    title: "No lock-in",
    description:
      "HestaPay is software, not a processor. If your processing needs change, you can work with your processor to adjust — your HestaPay platform stays the same.",
  },
];

const faqs = [
  {
    question: "How does HestaPay pricing work?",
    answer:
      "HestaPay charges a platform fee for access to the software — payment links, QR payments, merchant dashboard, reporting, and staff controls. Processing costs are separate and handled by your payment processor. Final platform pricing is confirmed during onboarding.",
  },
  {
    question: "Is HestaPay a payment processor?",
    answer:
      "No. HestaPay is a software and orchestration platform. Payment processing, settlement, and funds movement are handled by trusted payment infrastructure partners. You maintain your processor relationship while using HestaPay's software tools.",
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "HestaPay is designed to be flexible. Platform terms are discussed during onboarding. Since processing is handled by your chosen processor, you are not locked into a single provider through HestaPay.",
  },
  {
    question: "Can I switch plans as my business grows?",
    answer:
      "Yes. You can upgrade your plan as your business expands — whether you're adding locations, staff, or need advanced features. Plan changes are handled through your account.",
  },
  {
    question: "What does onboarding look like?",
    answer:
      "During onboarding, we discuss your business setup, processing needs, and platform configuration. You'll confirm your plan, connect your processor, and get your team set up on the HestaPay dashboard.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        vertical="Pricing"
        heading="Transparent pricing for local businesses"
        subtitle="Simple platform plans. Processing handled by your trusted payment partners. No hidden fees, no surprises."
      />

      {/* 2. Pricing philosophy */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="A platform fee, not a processor markup"
            subtitle="You pay for the software that makes payments simple. Processing costs stay with your processor — we don't add hidden markups."
            className="mx-auto text-center"
          />
        </Container>
      </SectionWrapper>

      {/* 3. Plan cards */}
      <SectionWrapper>
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <PricingCard
              name="Starter"
              audience="For single-location businesses"
              description="Everything you need to accept payments, track transactions, and manage your team — all in one platform."
              features={starterFeatures}
            />
            <PricingCard
              name="Growth"
              audience="For growing teams and multi-location operators"
              description="Advanced reporting, unlimited staff, and multi-location management for businesses scaling up."
              features={growthFeatures}
              featured
            />
            <PricingCard
              name="Custom"
              audience="For tailored setups and larger operational needs"
              description="Custom integrations, dedicated support, and volume-based processing configuration for businesses with specific requirements."
              features={customFeatures}
              ctaLabel="Contact us"
              ctaHref="/contact"
            />
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Final platform pricing and processing setup are confirmed during onboarding.
          </p>
        </Container>
      </SectionWrapper>

      {/* 4. What is included */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="What is included in the platform fee"
            subtitle="Every plan includes the core HestaPay platform. Higher tiers add advanced features and scale."
            className="mx-auto text-center"
          />
          <div className="mt-12 max-w-3xl mx-auto">
            <FeatureList features={includedFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. Partner-managed processing */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Processing: managed by your payment partners"
            subtitle="HestaPay is a software layer — not a processor. Here's how processing works with HestaPay."
            className="mx-auto text-center"
          />
          <div className="mt-12 max-w-3xl mx-auto">
            <FeatureList features={partnerFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 6. FAQ */}
      <PageFAQ context="Pricing" heading="Pricing questions" faqs={faqs} />

      {/* 7. Final CTA */}
      <CTASection variant="pricing" />
    </>
  );
}