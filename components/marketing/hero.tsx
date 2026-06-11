import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import { CTAS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-20 lg:py-32">
      <Container className="text-center">
        <h1 className="max-w-4xl mx-auto text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Payments built for{" "}
          <span className="text-primary">local businesses</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted leading-relaxed sm:text-xl">
          Modern payment software for restaurants, nail salons, retail, and home
          services. Integrate with trusted payment infrastructure, orchestrate
          your workflows, and grow — all from one platform.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Button variant="primary" size="lg" href="/early-access">
            {CTAS.primary}
          </Button>
          <Button variant="outline" size="lg" href="/book-demo">
            {CTAS.secondary}
          </Button>
        </div>
      </Container>
    </section>
  );
}