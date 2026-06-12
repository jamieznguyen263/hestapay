import Link from "next/link";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";

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
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Industry fit
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for how local businesses get paid
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Every industry has its own payment flow. HestaPay adapts to yours.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {/* Featured column: Restaurants — larger */}
          <Link
            href={verticals[0].href}
            className="lg:col-span-5 group rounded-2xl border border-border bg-background p-7 shadow-card transition-all duration-200 hover:shadow-card-hover hover:border-accent-border hover:-translate-y-0.5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {verticals[0].title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm">
                {verticals[0].description}
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Explore
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

          {/* Remaining 3 verticals in a column */}
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-3">
            {verticals.slice(1).map((vertical) => (
              <Link
                key={vertical.href}
                href={vertical.href}
                className="group rounded-2xl border border-border bg-background p-5 shadow-card transition-all duration-200 hover:shadow-card-hover hover:border-accent-border hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {vertical.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    {vertical.description}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary">
                  Explore
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
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
        </div>
      </Container>
    </SectionWrapper>
  );
}