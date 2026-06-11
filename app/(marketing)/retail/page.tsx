import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/retail"],
  PAGE_DESCRIPTIONS["/retail"]
);

export default function RetailPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="text-center">
        <SectionHeading
          title="Payment Software for Retail Stores"
          subtitle="Flexible payment software built for retail stores and shops."
          className="mx-auto"
        />
      </Container>
    </section>
  );
}