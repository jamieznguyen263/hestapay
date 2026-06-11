import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/qr-payments"],
  PAGE_DESCRIPTIONS["/qr-payments"]
);

export default function QRPaymentsPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="text-center">
        <SectionHeading
          title="QR Payments"
          subtitle="Accept touch-free QR payments in-store, at the table, or on the go."
          className="mx-auto"
        />
      </Container>
    </section>
  );
}