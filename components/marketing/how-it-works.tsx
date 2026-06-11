import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "Connect your payment infrastructure",
    description:
      "HestaPay integrates with trusted payment partners. You keep your existing processor relationships &mdash; we add the software layer that makes them work together.",
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
      "In person, online, via payment links, or through QR codes. One platform handles every payment method your customers prefer.",
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
            className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
          >
            Explore Payment Links &rarr;
          </Link>
          <span className="text-border select-none">&middot;</span>
          <Link
            href="/qr-payments"
            className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
          >
            See QR in Action &rarr;
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
}