import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/pricing"],
  PAGE_DESCRIPTIONS["/pricing"]
);

export default function PricingPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="text-center">
        <SectionHeading
          title="Pricing"
          subtitle="Transparent pricing for businesses of every size."
          className="mx-auto"
        />
      </Container>
    </section>
  );
}