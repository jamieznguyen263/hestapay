import Container from "@/components/ui/container";

interface TrustStripProps {
  variant?: "default" | "compact";
}

const assurances = [
  {
    label: "Trusted infrastructure",
    detail: "Payments processed through established provider networks",
  },
  {
    label: "No extra hardware",
    detail: "Works with the devices and terminals you already use",
  },
  {
    label: "Faster payment visibility",
    detail: "See transactions and refunds in hours, not days",
  },
] as const;

export default function TrustStrip({ variant = "default" }: TrustStripProps) {
  const compact = variant === "compact";

  if (compact) {
    return (
      <section className="border-y border-border bg-surface py-8">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3 sm:divide-x sm:divide-border">
            {assurances.map((item) => (
              <div
                key={item.label}
                className="sm:px-6 first:sm:pl-0 last:sm:pr-0"
              >
                <p className="text-sm font-semibold text-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-xs text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="border-y border-border bg-surface py-14 lg:py-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          {/* Left: intro block */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-5">
              Assurance
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:pr-10">
              Built on infrastructure you can rely on
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed max-w-md">
              HestaPay operates on proven payment infrastructure &mdash; so you
              get reliability without re-building your stack.
            </p>
          </div>

          {/* Right: 3 assurance items as proof rail */}
          <div className="lg:col-span-7">
            <div className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {assurances.map((item, i) => (
                <div
                  key={item.label}
                  className="py-6 sm:py-0 sm:px-7 first:sm:pl-0 last:sm:pr-0"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <p className="text-sm font-semibold text-foreground">
                      {item.label}
                    </p>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}