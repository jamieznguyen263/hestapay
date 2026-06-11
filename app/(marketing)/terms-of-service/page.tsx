import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/terms-of-service"],
  PAGE_DESCRIPTIONS["/terms-of-service"]
);

export default function TermsOfServicePage() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Terms of Service"
          subtitle="Terms and conditions for using HestaPay services."
          className="mb-12"
        />
        <div className="prose prose-neutral max-w-3xl mx-auto text-muted">
          <p>
            These Terms of Service govern your use of the HestaPay website and
            services. By accessing or using HestaPay, you agree to be bound by
            these terms.
          </p>
          <p>
            Full terms of service content will be provided before launch. This
            placeholder establishes the required page route.
          </p>
        </div>
      </Container>
    </section>
  );
}