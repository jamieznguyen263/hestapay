import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/about"],
  PAGE_DESCRIPTIONS["/about"]
);

export default function AboutPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="text-center">
        <SectionHeading
          title="About HestaPay"
          subtitle="Our mission is to make payments simple for local businesses everywhere."
          className="mx-auto"
        />
      </Container>
    </section>
  );
}