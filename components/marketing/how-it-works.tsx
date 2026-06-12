import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";

const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "HestaPay integrates with your existing payment infrastructure partners.",
  },
  {
    number: "02",
    title: "Configure",
    description:
      "Set up payment links, QR codes, and checkout flows. No code required.",
  },
  {
    number: "03",
    title: "Accept",
    description:
      "Take payments in person, via links, and through QR codes.",
  },
  {
    number: "04",
    title: "Manage",
    description:
      "Track transactions, view analytics, and manage refunds from one dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper alternate dense>
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Four steps from setup to growth
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            HestaPay is the software and orchestration layer between your
            business and payment infrastructure.
          </p>
        </div>

        <div className="mt-16 grid gap-0 sm:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative sm:px-6 py-6 sm:py-0 first:sm:pl-0 last:sm:pr-0"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-5 left-[calc(50%+1rem)] w-[calc(100%-2rem)] h-px bg-border" />
              )}
              <div className="flex sm:flex-col items-start sm:items-center gap-4 sm:gap-5 sm:text-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary text-xs font-bold">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}