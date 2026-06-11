import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import PageHero from "@/components/marketing/page-hero";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import FeatureList from "@/components/marketing/feature-list";
import CTASection from "@/components/marketing/cta-section";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/about"],
  PAGE_DESCRIPTIONS["/about"]
);

const beliefs = [
  {
    title: "Payments should be simple",
    description:
      "Local businesses shouldn't need a degree in payments to accept money. Software should handle the complexity — you should focus on serving your customers.",
  },
  {
    title: "Software should fit workflows, not the other way around",
    description:
      "A restaurant and a salon operate differently. A retail store and a home service provider need different tools. HestaPay is built for those differences — not a one-size-fits-all solution.",
  },
  {
    title: "Transparency builds trust",
    description:
      "Clear pricing, clear separation of responsibilities, and clear communication. Businesses should know exactly what they're paying for and who handles what.",
  },
  {
    title: "Local businesses matter",
    description:
      "The businesses that make our communities work — restaurants, salons, shops, service providers — deserve software that works as hard as they do.",
  },
];

const whoWeBuildFor = [
  {
    title: "Restaurants",
    description:
      "From table-side QR ordering to tip splitting and shift reporting — payment tools built for the pace of restaurant service.",
  },
  {
    title: "Nail Salons",
    description:
      "Booking deposits, commission tracking, and checkout designed around salon workflows — not adapted from another industry.",
  },
  {
    title: "Retail",
    description:
      "Unified counter, phone order, and remote payments with returns and refunds managed in one dashboard.",
  },
  {
    title: "Home Services",
    description:
      "Get paid on-site via payment link or QR. Track daily field revenue and team payments in real time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        vertical="About"
        heading="Building payment software for local businesses"
        subtitle="HestaPay exists to make payment operations simpler, clearer, and better aligned with real-world business workflows."
      />

      {/* 2. Why HestaPay exists */}
      <SectionWrapper>
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Why HestaPay exists"
              subtitle="Most payment software was built for ecommerce — then adapted for local businesses. That adaptation shows in every awkward workflow, every disconnected system, and every unnecessary step between a customer and a completed payment."
            />
            <p className="mt-6 text-muted leading-relaxed">
              HestaPay started from a different place: what if payment software
              was designed from the ground up for how restaurants, salons,
              retail stores, and home service providers actually work? What if
              it respected the differences between industries instead of
              pretending one solution fits all?
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We&rsquo;re building that platform. HestaPay is a software and
              orchestration layer — we integrate with trusted payment
              infrastructure partners to handle processing, while we focus on
              making the software layer that businesses interact with every day
              as clear and useful as possible.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. What we believe */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="What we believe"
            subtitle="The principles that guide how we build HestaPay."
            className="mx-auto text-center"
          />
          <div className="mt-12 max-w-3xl mx-auto">
            <FeatureList features={beliefs} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 4. Who we build for */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Who we build for"
            subtitle="HestaPay is purpose-built for these industries — not a generic solution adapted after the fact."
            className="mx-auto text-center"
          />
          <div className="mt-12 max-w-3xl mx-auto">
            <FeatureList features={whoWeBuildFor} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. Product philosophy */}
      <SectionWrapper alternate>
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Product philosophy"
              subtitle="HestaPay is a software and orchestration layer. We integrate with trusted payment infrastructure partners. We don&rsquo;t process payments — we make payment operations better."
            />
            <p className="mt-6 text-muted leading-relaxed">
              This separation matters. By not being a processor, we can focus
              entirely on the software experience — payment links, QR payments,
              dashboard reporting, staff controls — while your processor handles
              settlement and funds movement. You get a better product without
              changing your processing relationships.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We design for clarity. No hidden fees. No confusing pricing. No
              lock-in. Software should make your business easier to run, not
              add another layer of complexity.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* 6. Company positioning */}
      <SectionWrapper>
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="The company behind the platform"
              subtitle="HestaPay is a new company building payment software for local businesses. We are focused on making payment operations simpler, clearer, and better aligned with real-world workflows."
            />
            <p className="mt-6 text-muted leading-relaxed">
              We believe that great software starts with listening to the people
              who use it. Every feature we build, every workflow we design, and
              every decision we make starts with understanding the businesses we
              serve.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We&rsquo;re early in our journey, and we&rsquo;re building
              alongside the businesses that will use HestaPay every day. Early
              access members directly shape the product — their feedback
              determines what we build next.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* 7. Final CTA */}
      <CTASection variant="about" />
    </>
  );
}