import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";

export default function SolutionOverview() {
  return (
    <SectionWrapper alternate dense>
      <Container>
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Payment software built on trusted infrastructure
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Every payment surface your business needs, managed through a single
            orchestration layer and one dashboard.
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {/* Featured orchestration card — spans 3 of 4 cols, dominant */}
          <div className="lg:col-span-3 rounded-2xl border border-border bg-background shadow-md p-6 lg:p-10 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-semibold text-muted uppercase tracking-wider mb-5">
                Orchestration layer
              </p>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                All your payment surfaces, connected
              </h3>
              <p className="mt-3 text-base text-muted leading-relaxed max-w-xl">
                HestaPay sits between your business and trusted payment
                infrastructure, routing transactions and managing refunds with
                real-time visibility from one dashboard.
              </p>
            </div>

            {/* Composed product fragment */}
            <div className="mt-10 rounded-xl border border-border bg-surface overflow-hidden">
              {/* Top bar */}
              <div className="px-5 py-3.5 border-b border-border flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
                </div>
                <div className="h-3.5 w-40 rounded bg-muted/20" />
                <div className="ml-auto h-6 w-20 rounded-full bg-primary/15" />
              </div>
              {/* Three surface lanes */}
              <div className="grid grid-cols-3 divide-x divide-border">
                {/* Payment Links lane */}
                <div className="p-5 space-y-3">
                  <p className="text-[10px] font-semibold text-muted uppercase tracking-wider">
                    Payment Links
                  </p>
                  <div className="space-y-2">
                    <div className="h-5 w-full rounded bg-background border border-border" />
                    <div className="h-5 w-4/5 rounded bg-background border border-border" />
                    <div className="h-6 w-20 rounded-full bg-primary/70 mt-2" />
                  </div>
                </div>
                {/* QR Payments lane */}
                <div className="p-5 space-y-3">
                  <p className="text-[10px] font-semibold text-muted uppercase tracking-wider">
                    QR Payments
                  </p>
                  <div className="flex gap-3">
                    <div className="h-12 w-12 shrink-0 rounded border-2 border-border bg-background grid grid-cols-3 grid-rows-3 gap-px p-0.5">
                      {[...Array(9)].map((_, i) => (
                        <div
                          key={i}
                          className={
                            [0, 2, 4, 7, 8].includes(i)
                              ? "bg-foreground/60"
                              : "bg-transparent"
                          }
                        />
                      ))}
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="h-2.5 w-16 rounded bg-muted/20" />
                      <div className="h-2.5 w-10 rounded bg-muted/20" />
                    </div>
                  </div>
                </div>
                {/* Status lane */}
                <div className="p-5 space-y-3">
                  <p className="text-[10px] font-semibold text-muted uppercase tracking-wider">
                    Status
                  </p>
                  <div className="space-y-2.5">
                    {[
                      { color: "bg-emerald-400/70", label: "Completed" },
                      { color: "bg-amber-400/70", label: "Refunding" },
                      { color: "bg-blue-400/70", label: "Settled" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${item.color}`}
                        />
                        <span className="text-[10px] text-muted">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting card 1: Payment Links — sits beside featured */}
          <CapabilityCard
            label="Payment Links"
            title="Share a link, get paid"
            description="Create and send payment links in seconds."
          >
            <PaymentLinkFragment />
          </CapabilityCard>
        </div>

        {/* Row 2: 3 supporting cards + 1 industry card */}
        <div className="mt-5 grid gap-5 lg:grid-cols-4">
          <CapabilityCard
            label="QR Payments"
            title="Tap. Scan. Done."
            description="Contactless QR payments at the table or counter."
          >
            <QRFragment />
          </CapabilityCard>

          <CapabilityCard
            label="Dashboard"
            title="Everything in one view"
            description="Track transactions, issue refunds, monitor activity."
          >
            <DashboardFragment />
          </CapabilityCard>

          <CapabilityCard
            label="Visibility"
            title="Refunds and status, clear"
            description="Know exactly where every payment stands."
          >
            <RefundFragment />
          </CapabilityCard>

          {/* Industry-fit card */}
          <div className="rounded-2xl border border-border bg-surface px-6 py-7 flex flex-col justify-center">
            <p className="text-[11px] font-semibold text-muted uppercase tracking-wider mb-4">
              Industries
            </p>
            <h3 className="text-base font-bold text-foreground leading-snug">
              Purpose-built for local business
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Designed for restaurants, nail salons, retail, and home services.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <IndustryPill>Restaurants</IndustryPill>
              <IndustryPill>Nail Salons</IndustryPill>
              <IndustryPill>Retail</IndustryPill>
              <IndustryPill>Home Services</IndustryPill>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

/* --- Sub-components --- */

function IndustryPill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-background border border-border px-3 py-1 text-xs font-medium text-foreground">
      {children}
    </span>
  );
}

interface CapabilityCardProps {
  label: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

function CapabilityCard({
  label,
  title,
  description,
  children,
}: CapabilityCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-background shadow-card p-5 flex flex-col">
      <p className="text-[11px] font-semibold text-muted uppercase tracking-wider mb-3">
        {label}
      </p>
      <h3 className="text-base font-bold text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm text-muted leading-relaxed">
        {description}
      </p>
      <div className="mt-4 flex-1 flex items-end">{children}</div>
    </div>
  );
}

/* --- Product fragments --- */

function PaymentLinkFragment() {
  return (
    <div className="w-full rounded-xl border border-border bg-surface p-3 space-y-2">
      <div className="flex items-center gap-2">
        <div className="h-6 w-16 rounded bg-background border border-border" />
        <div className="h-2.5 flex-1 rounded bg-muted/20" />
      </div>
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 rounded bg-primary/20 flex items-center justify-center">
          <svg
            className="h-3 w-3 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
            />
          </svg>
        </div>
        <div className="h-1.5 w-24 rounded bg-muted/20" />
      </div>
      <div className="flex justify-end">
        <div className="h-6 w-14 rounded-full bg-primary/80" />
      </div>
    </div>
  );
}

function QRFragment() {
  return (
    <div className="w-full rounded-xl border border-border bg-surface p-3 flex items-center gap-4">
      <div className="h-14 w-14 shrink-0 rounded-lg border-2 border-foreground/20 bg-background grid grid-cols-4 grid-rows-4 gap-0.5 p-1">
        {[0, 1, 3, 5, 6, 9, 12, 14, 15].map((i) => (
          <div key={i} className="bg-foreground/70 rounded-[1px]" />
        ))}
        {[...Array(16)]
          .map((_, i) => i)
          .filter((i) => ![0, 1, 3, 5, 6, 9, 12, 14, 15].includes(i))
          .map((i) => (
            <div key={i} />
          ))}
      </div>
      <div className="space-y-1.5 flex-1">
        <div className="h-2 w-20 rounded bg-muted/20" />
        <div className="h-2 w-14 rounded bg-muted/20" />
        <div className="h-3 w-16 rounded bg-primary/20 mt-1" />
      </div>
    </div>
  );
}

function DashboardFragment() {
  return (
    <div className="w-full rounded-xl border border-border bg-surface p-3 space-y-2">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-2 w-16 rounded bg-muted/20" />
        <div className="h-2 w-10 rounded bg-primary/20 ml-auto" />
      </div>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="h-1.5 w-3/5 rounded bg-muted/20" />
          <div className="h-1.5 w-1/5 rounded bg-muted/20 ml-auto" />
        </div>
      ))}
      <div className="flex gap-2 mt-2">
        <div className="h-6 flex-1 rounded bg-background border border-border" />
        <div className="h-6 w-12 rounded bg-primary/20" />
      </div>
    </div>
  );
}

function RefundFragment() {
  return (
    <div className="w-full rounded-xl border border-border bg-surface p-3 space-y-2">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-amber-400/80" />
        <div className="h-1.5 w-16 rounded bg-muted/20" />
        <div className="h-1.5 w-12 rounded bg-muted/20 ml-auto" />
      </div>
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-green-400/80" />
        <div className="h-1.5 w-20 rounded bg-muted/20" />
        <div className="h-1.5 w-14 rounded bg-muted/20 ml-auto" />
      </div>
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-blue-400/80" />
        <div className="h-1.5 w-24 rounded bg-muted/20" />
        <div className="h-1.5 w-10 rounded bg-muted/20 ml-auto" />
      </div>
    </div>
  );
}