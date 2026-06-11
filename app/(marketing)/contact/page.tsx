import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import PageHero from "@/components/marketing/page-hero";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Card from "@/components/ui/card";
import Link from "next/link";
import ContactForm from "@/components/marketing/contact-form";
import FAQCategory from "@/components/marketing/faq-category";
import type { FAQ } from "@/components/marketing/page-faq";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/contact"],
  PAGE_DESCRIPTIONS["/contact"]
);

const contactFaqs: FAQ[] = [
  {
    question: "When will I hear back?",
    answer:
      "We typically respond within a few business days. If your inquiry is about booking a demo, the fastest path is to use the Book a Demo form for a direct scheduling link.",
  },
  {
    question: "Can I book a demo instead?",
    answer:
      "Yes. If you want to see HestaPay in action, the Book a Demo page is the quickest way to schedule a personalized walkthrough of the platform.",
  },
  {
    question: "I'm interested in partnering with HestaPay",
    answer:
      "Select the Partnerships option in the subject dropdown and tell us about your organization. We'll route your message to the right team.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        vertical="Contact"
        heading="Get in touch with HestaPay"
        subtitle="Questions about the platform, interest in partnering, or just want to say hello — we'd love to hear from you."
      />

      {/* 2. Contact routing */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="How can we help?"
            subtitle="Choose the path that best fits your needs. If you're not sure, use the contact form and we'll route your message."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <h3 className="text-sm font-semibold text-foreground">Sales / Demo</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                See how HestaPay works for your business type. Schedule a personalized demo.
              </p>
              <Link
                href="/book-demo"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Book a Demo →
              </Link>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold text-foreground">General questions</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Not ready for a demo? Have a general question? Use the contact form below.
              </p>
              <a
                href="#contact-form"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Contact form ↓
              </a>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold text-foreground">Partnerships</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Interested in working with HestaPay? Select the Partnerships option and we'll route your message.
              </p>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold text-foreground">Support</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If you are already working with HestaPay, include details about your question and we will route it appropriately.
              </p>
            </Card>
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. Contact form */}
      <div id="contact-form">
        <SectionWrapper alternate>
          <Container>
            <SectionHeading
              title="Send us a message"
              subtitle="Fill out the form and we'll get back to you within a few business days."
              className="mx-auto text-center"
            />
            <div className="mt-10 max-w-lg mx-auto">
              <ContactForm />
            </div>
          </Container>
        </SectionWrapper>
      </div>

      {/* 4. Mini FAQ */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Quick questions"
            subtitle="Common questions about getting in touch with us."
            className="mx-auto text-center"
          />
          <div className="mt-10 max-w-2xl mx-auto">
            <FAQCategory faqs={contactFaqs} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. Trust note closing */}
      <section className="py-12 lg:py-16 bg-surface border-t border-border">
        <Container className="text-center">
          <p className="text-sm text-muted max-w-lg mx-auto leading-relaxed">
            HestaPay is a software and orchestration platform. We work with
            trusted payment infrastructure partners — we are not a bank,
            processor, or acquirer. Every conversation starts with
            understanding your business and whether HestaPay is the right fit.
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm flex-wrap">
            <Link
              href="/security"
              className="text-muted hover:text-primary transition-colors"
            >
              Security & Compliance
            </Link>
            <Link
              href="/pricing"
              className="text-muted hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-muted hover:text-primary transition-colors"
            >
              FAQ
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}