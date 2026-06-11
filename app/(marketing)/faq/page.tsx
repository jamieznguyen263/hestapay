import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/faq"],
  PAGE_DESCRIPTIONS["/faq"]
);

export default function FAQPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="text-center">
        <SectionHeading
          title="FAQ"
          subtitle="Find answers to common questions about HestaPay."
          className="mx-auto"
        />
      </Container>
    </section>
  );
}