import Link from "next/link";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

const verticals = [
  {
    title: "Restaurants",
    description:
      "QR table payments, digital tips, split checks, and unified reporting for dine-in and takeout.",
    href: "/restaurants",
  },
  {
    title: "Nail Salons",
    description:
      "Deposits via payment links, tipping at checkout, commission tracking, and client payment history.",
    href: "/nail-salons",
  },
  {
    title: "Retail",
    description:
      "Counter QR payments, payment links for phone orders, refund management, and multi-location visibility.",
    href: "/retail",
  },
  {
    title: "Home Services",
    description:
      "SMS payment links, on-site QR payments, field team payment tracking, and daily revenue visibility.",
    href: "/home-services",
  },
];

export default function BusinessTypeSelector() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading
          title="Built for how local businesses get paid"
          subtitle="Every industry has its own payment flow. HestaPay adapts to yours."
          centered
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {verticals.map((vertical) => (
            <Link
              key={vertical.href}
              href={vertical.href}
              className="group rounded-2xl border border-border bg-background p-6 shadow-card transition-all duration-200 hover:shadow-card-hover hover:border-accent-border hover:-translate-y-0.5"
            >
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {vertical.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {vertical.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Learn more
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}