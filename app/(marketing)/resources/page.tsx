import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import PageHero from "@/components/marketing/page-hero";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Card from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/resources"],
  PAGE_DESCRIPTIONS["/resources"]
);

const resourceCategories = [
  {
    title: "Restaurant payments",
    description:
      "Guides on QR table ordering, tip splitting, and streamlining restaurant payment workflows.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    href: "/restaurants",
  },
  {
    title: "Salon deposits and checkout",
    description:
      "How to use payment links for booking deposits, manage no-shows, and create a smooth checkout experience.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6zM7 10v4m10-4v4M10 7h4m-4 10h4" />
      </svg>
    ),
    href: "/nail-salons",
  },
  {
    title: "QR payments",
    description:
      "Setting up QR codes for tables, counters, and invoices. Best practices for reducing checkout friction.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2m0 0H8m0 0a5 5 0 01-5-5 5 5 0 015-5m5 0h2m-2 0V4m2 0v1m-8 7h2m-2 0V8m2 3h4m-2 0V8m2 3v3m-8-3V8m2 3v3" />
      </svg>
    ),
    href: "/qr-payments",
  },
  {
    title: "Payment links",
    description:
      "Use cases for remote pay, deposits, phone orders, and service invoices — all collected via simple links.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    href: "/payment-links",
  },
  {
    title: "Staff workflows",
    description:
      "Managing team permissions, tracking tips and commissions, and using the HestaPay staff app for daily operations.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    href: "/merchant-dashboard",
  },
  {
    title: "Settlements, refunds, and disputes",
    description:
      "Understanding how payments settle, how to process refunds, and what to expect when a customer disputes a charge.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    href: "/security",
  },
];

const featuredGuides = [
  {
    title: "Getting started with QR table payments",
    description:
      "A practical guide to setting up QR codes for restaurant tables — from printing codes to training staff and optimizing the guest experience.",
  },
  {
    title: "Reducing no-shows with deposit payment links",
    description:
      "How salons and service businesses can use payment links to secure appointments and reduce revenue lost to no-shows.",
  },
  {
    title: "Managing refunds from the merchant dashboard",
    description:
      "A walkthrough of the refund process in HestaPay — full refunds, partial refunds, and voiding transactions before settlement.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        vertical="Resources"
        heading="Guides and resources for local business payments"
        subtitle="Practical guides, workflow examples, and payment resources — purpose-built for restaurants, salons, retail, and home services."
      />

      {/* 2. What you will find here */}
      <SectionWrapper>
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="A resource hub for better payment operations"
              subtitle="As we build HestaPay, we're creating guides, workflow examples, and payment resources for local businesses. This hub will grow with the platform."
            />
            <p className="mt-6 text-muted leading-relaxed">
              Each guide focuses on real-world payment workflows — not abstract
              payment theory. Whether you run a restaurant, salon, retail
              store, or home service business, you&rsquo;ll find practical
              content organized by the topics that matter to your daily
              operations.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. Resource category grid */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="Browse by topic"
            subtitle="Resources organized around the payment workflows that matter most to local businesses."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((category) => (
              <Link key={category.title} href={category.href} className="group block">
                <Card className="h-full transition-shadow hover:shadow-md hover:border-primary/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {category.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* 4. Featured resource cards */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Upcoming guides"
            subtitle="Workflow guides coming soon. These topics are on our roadmap — sign up for early access to be notified when new resources are published."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {featuredGuides.map((guide) => (
              <div
                key={guide.title}
                className="rounded-xl border-2 border-dashed border-border bg-surface p-6 flex flex-col"
              >
                <h3 className="text-sm font-semibold text-foreground">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                  {guide.description}
                </p>
                <p className="mt-4 text-xs font-medium text-muted uppercase tracking-wide">
                  Coming soon
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. CTA support block */}
      <section className="py-12 lg:py-16 bg-primary/10">
        <Container className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Want to see the platform behind the guides?
          </h2>
          <p className="mt-3 text-muted max-w-md mx-auto">
            Book a demo or join early access to explore payment links, QR
            payments, and the merchant dashboard.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/book-demo"
              className="text-sm font-medium text-primary hover:underline"
            >
              Book a Demo →
            </Link>
            <Link
              href="/early-access"
              className="text-sm font-medium text-primary hover:underline"
            >
              Get Early Access →
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted flex-wrap">
            <Link href="/payment-links" className="hover:text-primary transition-colors">
              Payment Links
            </Link>
            <Link href="/qr-payments" className="hover:text-primary transition-colors">
              QR Payments
            </Link>
            <Link href="/faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}