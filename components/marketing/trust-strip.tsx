import Container from "@/components/ui/container";

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface py-8">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:gap-8">
          <p className="text-sm font-medium text-foreground">
            A software and orchestration layer for local business payments
          </p>
          <div className="flex items-center gap-6 sm:gap-10">
            <span className="text-sm text-muted">
              Built for restaurants
            </span>
            <span className="text-sm text-muted">
              Built for salons
            </span>
            <span className="text-sm text-muted">
              Built for retail
            </span>
            <span className="hidden text-sm text-muted sm:inline">
              Built for home services
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}