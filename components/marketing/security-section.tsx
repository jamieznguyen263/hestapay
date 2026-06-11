import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Link from "next/link";

interface SecuritySectionProps {
  /** Heading override — defaults to "Security by design" */
  heading?: string;
  /** Subtitle override */
  subtitle?: string;
  /** CTA text override */
  ctaText?: string;
  /** CTA href override */
  ctaHref?: string;
  /** Visual variant */
  variant?: "default" | "restaurant" | "salon";
}

const principles = [
  {
    title: "Infrastructure isolation",
    description:
      "HestaPay is a software and orchestration layer. Your payment data is processed by trusted, certified infrastructure partners — we never handle raw cardholder data.",
  },
  {
    title: "Modern security practices",
    description:
      "Encryption in transit and at rest. Access controls with role-based permissions. Regular security reviews of our software platform.",
  },
  {
    title: "Reliable architecture",
    description:
      "Built for uptime. Redundant systems ensure your payment operations continue even if a component experiences issues.",
  },
  {
    title: "Transparent operations",
    description:
      "Real-time monitoring, detailed transaction logs, and clear audit trails. You always know what's happening with your payments.",
  },
];

const variantDefaults = {
  default: {
    heading: "Security by design",
    subtitle:
      "HestaPay is built with security and reliability as foundational principles — not afterthoughts.",
  },
  restaurant: {
    heading: "Payments you can trust, service you can rely on",
    subtitle:
      "Restaurant operations can't afford downtime or security gaps. HestaPay is built to keep your payments running safely, shift after shift.",
  },
  salon: {
    heading: "Secure payments your clients and staff can trust",
    subtitle:
      "From deposits to checkout, every transaction is handled with the security practices salons and their clients expect.",
  },
};

export default function SecuritySection({
  heading,
  subtitle,
  ctaText = "Learn more about Security →",
  ctaHref = "/security",
  variant = "default",
}: SecuritySectionProps) {
  const defaults = variantDefaults[variant];

  return (
    <SectionWrapper alternate>
      <Container>
        <div className="grid gap-10 items-center lg:grid-cols-2">
          {/* Text column */}
          <div>
            <SectionHeading
              title={heading ?? defaults.heading}
              subtitle={subtitle ?? defaults.subtitle}
            />
            <ul className="mt-8 space-y-5">
              {principles.map((principle) => (
                <li key={principle.title} className="flex gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {principle.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href={ctaHref}
                className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          {/* Architecture diagram placeholder */}
          <div>
            <div className="rounded-xl border-2 border-dashed border-border bg-surface p-8 flex flex-col items-center justify-center text-center min-h-[340px]">
              <svg
                className="h-12 w-12 text-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4h6v6H4zm0 10h6v6H4zm10-10h6v6h-6zm0 10h6v6h-6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 10v4m10-4v4M10 7h4m-4 10h4"
                />
              </svg>
              <p className="mt-4 text-sm text-muted font-medium">
                Architecture overview
              </p>
              <p className="mt-1 text-xs text-muted">
                Diagram coming soon
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}