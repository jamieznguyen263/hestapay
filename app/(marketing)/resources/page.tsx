import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/resources"],
  PAGE_DESCRIPTIONS["/resources"]
);

export default function ResourcesPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="text-center">
        <SectionHeading
          title="Resources"
          subtitle="Guides, articles, and resources for growing your business with better payments."
          className="mx-auto"
        />
      </Container>
    </section>
  );
}