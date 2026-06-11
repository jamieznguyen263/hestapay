import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/nail-salons"],
  PAGE_DESCRIPTIONS["/nail-salons"]
);

export default function NailSalonsPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="text-center">
        <SectionHeading
          title="Payment Software for Nail Salons"
          subtitle="Modern payment tools for nail salons — from booking to checkout."
          className="mx-auto"
        />
      </Container>
    </section>
  );
}