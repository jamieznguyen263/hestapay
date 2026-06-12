import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";

export default function HowItWorks() {
  return (
    <SectionWrapper alternate dense>
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Payment orchestration, from surfaces to visibility
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            HestaPay is the software layer between your payment surfaces and
            your operations. Every payment flows through one system.
          </p>
        </div>

        {/* Unified control-plane canvas */}
        <div className="mt-16 rounded-2xl border border-border bg-background shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_2fr_1fr]">
            {/* Zone 1: Payment surfaces (inputs) — compact */}
            <div className="p-6 lg:p-7">
              <p className="text-[10px] font-semibold text-muted uppercase tracking-wider mb-5">
                Payment surfaces in
              </p>
              <div className="space-y-2.5">
                <SurfaceRow
                  label="Payment Links"
                  icon={<LinkIcon />}
                  right={<ActionPill />}
                />
                <SurfaceRow
                  label="QR payments"
                  icon={<QRSquare />}
                  right={<span className="text-[10px] text-muted">Scan</span>}
                />
                <SurfaceRow
                  label="Card payments"
                  icon={<CardRect />}
                  right={<span className="text-[10px] text-muted">Tap</span>}
                />
              </div>
            </div>

            {/* Zone 2: HestaPay orchestration core — dominant */}
            <div className="p-6 lg:p-8 bg-gradient-to-b from-accent-surface/60 to-accent-surface/20 border-x border-border relative">
              {/* Routing lane indicators — subtle horizontal lines across the canvas */}
              <div className="absolute inset-y-0 left-0 w-px bg-border/0" />
              <div className="absolute inset-y-0 right-0 w-px bg-border/0" />

              <div className="flex items-center gap-2.5 mb-6">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-white text-[10px] font-bold shadow-sm">
                  HP
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    HestaPay orchestration
                  </p>
                  <p className="text-[10px] text-muted">
                    Routing &middot; Refunds &middot; Analytics
                  </p>
                </div>
              </div>

              {/* Inbound routing lanes */}
              <div className="mb-5 space-y-2">
                <p className="text-[9px] font-semibold text-muted uppercase tracking-wider mb-3">
                  Inbound routing
                </p>
                {[
                  { label: "Payment Links", w: "w-2/5" },
                  { label: "QR payments", w: "w-3/5" },
                  { label: "Card payments", w: "w-1/2" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5"
                  >
                    <div className="h-px flex-1 bg-border/50" />
                    <span className="text-[10px] text-muted whitespace-nowrap">
                      {item.label}
                    </span>
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                    <div className={`h-0.5 ${item.w} rounded bg-primary/15`} />
                  </div>
                ))}
              </div>

              {/* Central core processing */}
              <div className="rounded-2xl border border-accent-border bg-background p-5 text-center shadow-[0_0_0_1px_rgba(16,185,129,0.05),0_4px_16px_-4px_rgba(16,185,129,0.08)]">
                <p className="text-sm font-bold text-primary">
                  Transaction orchestration
                </p>
                <p className="mt-1.5 text-[11px] text-muted leading-relaxed max-w-sm mx-auto">
                  Routes every payment through trusted infrastructure. Handles
                  routing, refunds, and analytics in one pass.
                </p>
                <div className="mt-3 flex items-center justify-center gap-3 text-[9px] text-muted">
                  <span>Trusted provider network</span>
                  <span className="text-border">&middot;</span>
                  <span>Real-time processing</span>
                </div>
              </div>

              {/* Outbound routing lanes */}
              <div className="mt-5 space-y-2">
                <p className="text-[9px] font-semibold text-muted uppercase tracking-wider mb-3">
                  Outbound streams
                </p>
                {[
                  { label: "Transaction log", w: "w-1/2" },
                  { label: "Refund queue", w: "w-2/5" },
                  { label: "Analytics pipe", w: "w-3/5" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 flex-row-reverse"
                  >
                    <div className="h-px flex-1 bg-border/50" />
                    <span className="text-[10px] text-muted whitespace-nowrap">
                      {item.label}
                    </span>
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                    <div className={`h-0.5 ${item.w} rounded bg-primary/10`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Zone 3: Dashboard / visibility (outputs) — compact */}
            <div className="p-6 lg:p-7">
              <p className="text-[10px] font-semibold text-muted uppercase tracking-wider mb-5">
                Visibility out
              </p>

              <div className="rounded-xl border border-border bg-surface p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-20 rounded bg-muted/20" />
                  <div className="ml-auto h-2.5 w-8 rounded bg-primary/20" />
                </div>
                {[
                  {
                    color: "bg-emerald-400/70",
                    w: "w-3/5",
                    label: "Completed",
                  },
                  {
                    color: "bg-blue-400/70",
                    w: "w-2/5",
                    label: "Settled",
                  },
                  {
                    color: "bg-amber-400/70",
                    w: "w-1/2",
                    label: "Refunding",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${item.color}`} />
                    <div className={`h-1.5 ${item.w} rounded bg-muted/20`} />
                    <span className="ml-auto text-[9px] text-muted">
                      {item.label}
                    </span>
                  </div>
                ))}
                <div className="pt-3 border-t border-border flex justify-between">
                  <div className="h-1.5 w-12 rounded bg-muted/20" />
                  <div className="h-1.5 w-16 rounded bg-primary/20" />
                </div>
              </div>

              <p className="mt-5 text-[11px] text-muted leading-relaxed">
                One dashboard for reconciliation, reporting, and control. No
                separate processor logins.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

/* ---------- Sub-components ---------- */

function SurfaceRow({
  label,
  icon,
  right,
}: {
  label: string;
  icon: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-border bg-surface p-2.5">
      {icon}
      <span className="text-[11px] text-foreground">{label}</span>
      <div className="ml-auto">{right}</div>
    </div>
  );
}

function ActionPill() {
  return <div className="h-5 w-12 rounded-full bg-primary/70" />;
}

function LinkIcon() {
  return (
    <div className="h-5 w-5 rounded bg-primary/15 flex items-center justify-center shrink-0">
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
  );
}

function QRSquare() {
  return (
    <div className="h-5 w-5 shrink-0 rounded border-2 border-border bg-background grid grid-cols-2 grid-rows-2 gap-px p-0.5">
      <div className="bg-foreground/60 rounded-[1px]" />
      <div />
      <div className="bg-foreground/60 rounded-[1px]" />
      <div className="bg-foreground/60 rounded-[1px]" />
    </div>
  );
}

function CardRect() {
  return (
    <div className="h-5 w-7 shrink-0 rounded bg-background border border-border" />
  );
}