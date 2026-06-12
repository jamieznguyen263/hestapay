import Container from "@/components/ui/container";
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
    heading: "Ready to see every payment — across every channel?",
    subtitle:
      "Join local businesses using HestaPay to route, recover, and reconcile every transaction. Early access members shape the product and receive priority onboarding.",
  },
  restaurant: {
    heading: "Ready to simplify your restaurant payments?",
    subtitle:
      "From table-side QR to staff tips — HestaPay brings your restaurant payment flow into one dashboard.",
  },
  salon: {
    heading: "Ready to simplify your salon payments?",
    subtitle:
      "From booking deposits to commission tracking — HestaPay connects every payment touchpoint for your salon.",
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
      "Track transactions, manage refunds, and view analytics — all from one dashboard. Get early access.",
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
      "From counter checkout to phone orders — HestaPay connects in-store and remote payments in one dashboard.",
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
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(16,185,129,0.07) 0%, rgba(16,185,129,0.02) 35%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-6">
            Get started
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[44px] leading-[1.06]">
            {heading ?? defaults.heading}
          </h2>
          <p className="mt-6 text-[16px] text-[#5B6475] leading-relaxed max-w-xl mx-auto">
            {subtitle ?? defaults.subtitle}
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <a
              href={primaryHref}
              className="inline-flex items-center rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white border border-emerald-500 px-7 py-3.5 text-[15px] font-semibold transition-colors shadow-[0_2px_16px_rgba(16,185,129,0.3)]"
            >
              {primaryLabel}
            </a>
            <a
              href={secondaryHref}
              className="inline-flex items-center rounded-lg border border-[#E6EBF2] text-[#5B6475] hover:border-[#CBD5E1] hover:text-[#0F172A] bg-white px-7 py-3.5 text-[15px] font-semibold transition-colors"
            >
              {secondaryLabel}
            </a>
          </div>

          {/* Product echo — subtle visual fragment tying back to orchestration concept */}
          <div className="mt-14 flex items-center justify-center">
            <div className="inline-flex items-center gap-3 rounded-xl border border-[#E6EBF2] bg-white px-5 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              {/* 3 surface dots flowing into orchestration core */}
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="h-px w-3 bg-[#E6EBF2]" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="h-px w-3 bg-[#E6EBF2]" />
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              <span className="mx-1 text-[10px] text-[#94A3B8]">→</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 border border-emerald-200">
                <span className="text-[9px] font-bold text-emerald-700">HP</span>
              </div>
              <span className="mx-1 text-[10px] text-[#94A3B8]">→</span>
              <span className="text-[11px] text-[#5B6475] font-medium">Route · Recover · Reconcile</span>
            </div>
          </div>

          {/* Links */}
          <div className="mt-8 flex items-center justify-center gap-6 text-[14px] text-[#5B6475] flex-wrap">
            <Link
              href="/pricing"
              className="hover:text-[#0F172A] transition-colors inline-flex items-center gap-1 group"
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
            <span className="text-[#E6EBF2] select-none">&middot;</span>
            <Link
              href="/security"
              className="hover:text-[#0F172A] transition-colors inline-flex items-center gap-1 group"
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
        </div>
      </Container>
    </section>
  );
}