import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/contact"],
  PAGE_DESCRIPTIONS["/contact"]
);

export default function ContactPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="text-center">
        <SectionHeading
          title="Contact"
          subtitle="Get in touch with the HestaPay team."
          className="mx-auto"
        />
      </Container>
    </section>
  );
}