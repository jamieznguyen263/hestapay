import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/privacy-policy"],
  PAGE_DESCRIPTIONS["/privacy-policy"]
);

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Privacy Policy"
          subtitle="How we handle and protect your data."
          className="mb-12"
        />
        <div className="prose prose-neutral max-w-3xl mx-auto text-muted">
          <p>
            This Privacy Policy describes how HestaPay collects, uses, and
            protects your information when you visit our website or use our
            services.
          </p>
          <p>
            Full privacy policy content will be provided before launch. This
            placeholder establishes the required page route.
          </p>
        </div>
      </Container>
    </section>
  );
}