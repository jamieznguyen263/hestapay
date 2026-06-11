import Link from "next/link";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

const verticals = [
  {
    title: "Restaurants",
    description:
      "Streamline dine-in, takeout, delivery, and QR table payments. Connect orders to payments in one flow.",
    href: "/restaurants",
  },
  {
    title: "Nail Salons",
    description:
      "Manage bookings, deposits, tipping, and checkout with a payment platform designed for salon workflows.",
    href: "/nail-salons",
  },
  {
    title: "Retail",
    description:
      "Accept in-store and online payments, track sales, and manage inventory integrations — all in one place.",
    href: "/retail",
  },
  {
    title: "Home Services",
    description:
      "Send payment links, accept on-site payments, and manage service invoices without the back-and-forth.",
    href: "/home-services",
  },
];

export default function BusinessTypeSelector() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading
          title="Choose your business type"
          subtitle="HestaPay is purpose-built for these industries. Select yours to see how we help."
          className="mx-auto text-center"
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {verticals.map((vertical) => (
            <Link
              key={vertical.href}
              href={vertical.href}
              className="group rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md hover:border-primary/30"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}