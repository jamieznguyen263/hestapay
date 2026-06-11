import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "Connect your payment infrastructure",
    description:
      "HestaPay integrates with trusted payment infrastructure partners. You keep your existing processor relationships -- we add the software layer that makes them work together.",
  },
  {
    number: 2,
    title: "Configure your workflows",
    description:
      "Set up payment links, QR codes, and checkout flows that match how your business operates. No code, no complex integrations.",
  },
  {
    number: 3,
    title: "Accept payments everywhere",
    description:
      "In person, online, via payment links, or through QR codes. One dashboard handles every payment method your customers prefer.",
  },
  {
    number: 4,
    title: "Manage and grow",
    description:
      "Track transactions, view analytics, manage refunds, and optimize your payment operations from a single merchant dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper alternate>
      <Container>
        <SectionHeading
          title="How HestaPay works"
          subtitle="Four steps from setup to growth. HestaPay is the software and orchestration layer between your business and payment infrastructure."
          centered
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-glow-sm text-white text-lg font-bold">
                {step.number}
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center flex items-center justify-center gap-4">
          <Link
            href="/payment-links"
            className="text-sm font-medium text-primary hover:text-primary-dark inline-flex items-center gap-1 group transition-colors duration-200"
          >
            Explore Payment Links
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <span className="text-border select-none">&middot;</span>
          <Link
            href="/qr-payments"
            className="text-sm font-medium text-primary hover:text-primary-dark inline-flex items-center gap-1 group transition-colors duration-200"
          >
            See QR in Action
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
}