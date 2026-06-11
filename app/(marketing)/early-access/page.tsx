import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import PageHero from "@/components/marketing/page-hero";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import FeatureList from "@/components/marketing/feature-list";
import StepFlow from "@/components/marketing/step-flow";
import EarlyAccessForm from "@/components/marketing/early-access-form";
import Link from "next/link";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/early-access"],
  PAGE_DESCRIPTIONS["/early-access"]
);

const whyJoin = [
  {
    title: "Shape the product",
    description:
      "Early access members provide feedback that directly influences which features we build and how we prioritize. Your real-world needs guide our roadmap.",
  },
  {
    title: "Priority onboarding",
    description:
      "Get set up before general availability. We'll work with you personally to configure the platform for your business workflows.",
  },
  {
    title: "Influence pricing and packaging",
    description:
      "Early members help us understand what pricing and plan structures work for businesses like yours. Your input matters.",
  },
  {
    title: "Early access to new features",
    description:
      "Try new capabilities before anyone else. See what's coming and help us refine features based on your experience.",
  },
];

const afterSignupSteps = [
  {
    number: 1,
    title: "Confirmation",
    description:
      "You'll receive a confirmation email with what to expect next. We'll also ask a few questions about your business to prepare for onboarding.",
  },
  {
    number: 2,
    title: "Onboarding call",
    description:
      "A member of the HestaPay team will reach out to schedule your onboarding. We'll discuss your current payment setup, processor relationship, and platform configuration.",
  },
  {
    number: 3,
    title: "Platform access",
    description:
      "Once configured, you'll get access to the HestaPay dashboard, payment links, and QR payments. We'll walk you through your first transactions and make sure everything is working.",
  },
];

const miniFaqs = [
  {
    question: "Is there a cost for early access?",
    answer:
      "Early access members will have platform pricing discussed during onboarding. Our goal is to build a product that delivers value — and pricing will reflect that.",
  },
  {
    question: "How long until I get access?",
    answer:
      "We're onboarding early members in cohorts. After you sign up, we'll reach out with your expected timeline. Most members are onboarded within a few weeks of signing up.",
  },
  {
    question: "Can I leave the early access program?",
    answer:
      "Yes. Early access is voluntary. If the platform isn't the right fit, there's no obligation to continue.",
  },
];

export default function EarlyAccessPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        vertical="Early Access"
        heading="Join the future of local business payments"
        subtitle="Be among the first businesses to use HestaPay. Help shape the platform while getting priority access and personalized onboarding."
        primaryLabel="Get Early Access"
        primaryHref="#form"
      />

      {/* 2. Why join now */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Why join early access"
            subtitle="Early members get more than just first access. You help build the payment platform local businesses deserve."
            className="mx-auto text-center"
          />
          <div className="mt-12 max-w-3xl mx-auto">
            <FeatureList features={whyJoin} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. Early access form */}
      <div id="form">
        <SectionWrapper alternate>
          <Container>
            <SectionHeading
              title="Get early access"
              subtitle="Fill out the form and we'll be in touch with next steps."
              className="mx-auto text-center"
            />
            <div className="mt-10 max-w-lg mx-auto">
              <EarlyAccessForm />
            </div>
          </Container>
        </SectionWrapper>
      </div>

      {/* 4. What happens after signup */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="What happens after you sign up"
            subtitle="Three steps from signup to platform access."
            className="mx-auto text-center"
          />
          <div className="mt-12">
            <StepFlow steps={afterSignupSteps} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. Mini FAQ */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="Quick questions"
            subtitle="Common questions about the HestaPay early access program."
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

      {/* 6. Light trust note / closing */}
      <section className="py-12 lg:py-16 bg-surface border-t border-border">
        <Container className="text-center">
          <p className="text-sm text-muted max-w-lg mx-auto leading-relaxed">
            HestaPay is a software and orchestration platform. We work with
            trusted payment infrastructure partners — we are not a bank,
            processor, or acquirer. Early access members help us build the
            right product for local businesses.
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
              href="/book-demo"
              className="text-muted hover:text-primary transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}