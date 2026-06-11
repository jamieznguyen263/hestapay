import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Link from "next/link";
import { CTAS } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-primary/10">
      <Container className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Ready to simplify your payments?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-muted leading-relaxed">
          Join local businesses using HestaPay to unify their payment
          operations. Early access members shape the product and receive
          priority onboarding.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Button variant="primary" size="lg" href="/early-access">
            {CTAS.primary}
          </Button>
          <Button variant="outline" size="lg" href="/book-demo">
            {CTAS.secondary}
          </Button>
        </div>
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted flex-wrap">
          <Link
            href="/pricing"
            className="hover:text-primary transition-colors"
          >
            View Pricing
          </Link>
          <Link
            href="/security"
            className="hover:text-primary transition-colors"
          >
            Security & Compliance
          </Link>
        </div>
      </Container>
    </section>
  );
}