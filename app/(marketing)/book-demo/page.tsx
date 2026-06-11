import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/book-demo"],
  PAGE_DESCRIPTIONS["/book-demo"]
);

export default function BookDemoPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="text-center">
        <SectionHeading
          title="Book a Demo"
          subtitle="Schedule a personalized demo to see how HestaPay works for your business."
          className="mx-auto"
        />
      </Container>
    </section>
  );
}