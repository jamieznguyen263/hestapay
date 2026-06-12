import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Link from "next/link";
import { CTAS } from "@/lib/constants";

interface CTASectionProps {
  heading?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?:
    | "default"
    | "restaurant"
    | "salon"
    | "paymentLinks"
    | "qrPayments"
    | "dashboard"
    | "pricing"
    | "security"
    | "retail"
    | "homeServices"
    | "about";
}

const variantDefaults: Record<
  Exclude<CTASectionProps["variant"], undefined>,
  { heading: string; subtitle: string }
> = {
  default: {
    heading: "Ready to simplify your payments?",
    subtitle:
      "Join local businesses using HestaPay to unify their payment operations. Early access members shape the product and receive priority onboarding.",
  },
  restaurant: {
    heading: "Ready to simplify your restaurant payments?",
    subtitle:
      "From table-side QR to staff tips -- HestaPay brings your restaurant payment flow into one dashboard.",
  },
  salon: {
    heading: "Ready to simplify your salon payments?",
    subtitle:
      "From booking deposits to commission tracking -- HestaPay connects every payment touchpoint for your salon.",
  },
  paymentLinks: {
    heading: "Ready to simplify how you collect payments?",
    subtitle:
      "Create and share payment links in seconds. Get early access to start collecting deposits, invoices, and remote payments.",
  },
  qrPayments: {
    heading: "Ready to bring QR payments to your business?",
    subtitle:
      "Accept touch-free QR payments at the table, at the counter, or on the go. Join early access today.",
  },
  dashboard: {
    heading: "Ready to run your business from one dashboard?",
    subtitle:
      "Track transactions, manage refunds, and view analytics -- all from one dashboard. Get early access.",
  },
  pricing: {
    heading: "See how HestaPay fits your business",
    subtitle:
      "Pricing is confirmed during onboarding. Book a demo or join early access to discuss your setup.",
  },
  security: {
    heading: "See how HestaPay keeps payments safe",
    subtitle:
      "Built with security as a foundation, not an afterthought. Book a demo to learn more about our architecture.",
  },
  retail: {
    heading: "Ready to unify your retail payments?",
    subtitle:
      "From counter checkout to phone orders -- HestaPay connects in-store and remote payments in one dashboard.",
  },
  homeServices: {
    heading: "Ready to get paid on-site, on time?",
    subtitle:
      "Send payment links after every job. Accept QR payments on-site. Track daily field revenue from one dashboard.",
  },
  about: {
    heading: "See what HestaPay can do for your business",
    subtitle:
      "Built for restaurants, salons, retail, and home services. Early access members shape the product.",
  },
};

export default function CTASection({
  heading,
  subtitle,
  primaryLabel = CTAS.primary,
  primaryHref = "/early-access",
  secondaryLabel = CTAS.secondary,
  secondaryHref = "/book-demo",
  variant = "default",
}: CTASectionProps) {
  const defaults = variantDefaults[variant];

  return (
    <section className="relative py-24 lg:py-32">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none ambient-glow" />

      <Container className="text-center relative z-10">
        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-5">
          Get started
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {heading ?? defaults.heading}
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-lg text-muted leading-relaxed">
          {subtitle ?? defaults.subtitle}
        </p>
        <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
          <Button variant="primary" size="lg" href={primaryHref}>
            {primaryLabel}
          </Button>
          <Button variant="outline" size="lg" href={secondaryHref}>
            {secondaryLabel}
          </Button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted flex-wrap">
          <Link
            href="/pricing"
            className="hover:text-foreground transition-colors inline-flex items-center gap-1 group"
          >
            View Pricing
            <svg
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
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
          <span className="text-border select-none">&middot;</span>
          <Link
            href="/security"
            className="hover:text-foreground transition-colors inline-flex items-center gap-1 group"
          >
            Security
            <svg
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
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
      </Container>
    </section>
  );
}