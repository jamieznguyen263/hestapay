import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";

/** Mini workspace preview — payment orchestration environment */
export default function SolutionOverview() {
  return (
    <SectionWrapper alternate dense>
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Capabilities</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Payment software built on trusted infrastructure
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Every payment surface your business needs, managed through a single
            orchestration layer and one dashboard.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {/* Featured workspace — spans 3 cols */}
          <div className="lg:col-span-3 rounded-2xl border border-border bg-background shadow-md p-6 lg:p-10 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-semibold text-muted uppercase tracking-wider mb-5">Orchestration layer</p>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">All your payment surfaces, connected</h3>
              <p className="mt-3 text-base text-muted leading-relaxed max-w-xl">
                HestaPay sits between your business and trusted payment
                infrastructure, routing transactions and managing refunds with
                real-time visibility from one dashboard.
              </p>
            </div>

            {/* ===== MINI WORKSPACE ===== */}
            <div className="mt-10 rounded-xl border border-border bg-surface overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
              <div className="px-4 py-2.5 border-b border-border flex items-center gap-2 bg-surface/80">
                <span className="h-2 w-2 rounded-full bg-red-400/50" />
                <span className="h-2 w-2 rounded-full bg-amber-400/50" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/50" />
                <div className="h-3.5 w-40 rounded-md bg-background/80 border border-border flex items-center justify-center">
                  <span className="text-[8px] text-muted/60">app.hestapay.com</span>
                </div>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-primary/10 border border-accent-border px-2 py-0.5 text-[8px] font-medium text-primary">
                  <span className="h-1 w-1 rounded-full bg-primary animate-ambient-pulse" />
                  Live
                </span>
              </div>

              <div className="flex divide-x divide-border">
                {/* LEFT MODULE — Payment Links primary */}
                <div className="w-[45%] p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-foreground">Payment Links</p>
                        <p className="text-[8px] text-muted">3 active</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[8px] font-medium text-primary">+ New</span>
                  </div>
                  <div className="rounded-lg border border-border bg-background p-2.5 space-y-2">
                    <div className="h-5 rounded bg-surface border border-border flex items-center px-2">
                      <span className="text-[8px] text-muted/60">Amount</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-5 flex-1 rounded bg-surface border border-border flex items-center px-2">
                        <span className="text-[8px] text-muted/60">Channel</span>
                      </div>
                      <div className="h-5 w-14 rounded bg-primary/70 flex items-center justify-center">
                        <span className="text-[8px] font-bold text-white">Send</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <LinkMini label="Invoice #1042" amount="$212" channel="Email" status="paid" time="5:42 PM" />
                    <LinkMini label="Deposit #219" amount="$89" channel="SMS" status="pending" time="4:15 PM" />
                    <LinkMini label="Service #304" amount="$156" channel="Link" status="sent" time="2:08 PM" selected />
                  </div>
                </div>

                {/* MIDDLE MODULE — QR support */}
                <div className="w-[25%] p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-400/10 text-blue-500">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2m0 0H8m0 0a5 5 0 01-5-5 5 5 0 015-5m5 0h2m-2 0V4m2 0v1m-8 7h2m-2 0V8m2 3h4m-2 0V8m2 3v3m-8-3V8m2 3v3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-foreground">QR</p>
                      <p className="text-[8px] text-muted">2 active</p>
                    </div>
                  </div>
                  <QRMini label="Table 9" amount="$67" tips={["15%", "18%", "20%"]} status="completed" active />
                  <QRMini label="Table 4" amount="$94" tips={["15%", "18%"]} status="open" />
                </div>

                {/* RIGHT MODULE — Inspector */}
                <div className="w-[30%] p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-400/10 text-amber-500">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-foreground">Inspector</p>
                      <p className="text-[8px] text-muted">1 pending</p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[8px] font-semibold text-muted uppercase tracking-wider">Refund queue</p>
                    <InspectRow color="bg-amber-400/80" label="Refunding" amount="$30.00" time="3:10 PM" />
                    <InspectRow color="bg-amber-400/60" label="Pending" amount="$15.00" time="4:45 PM" />
                  </div>
                  <div className="pt-1.5 border-t border-border space-y-1.5">
                    <p className="text-[8px] font-semibold text-muted uppercase tracking-wider">Settlement</p>
                    <InspectRow color="bg-blue-400/80" label="Settled" amount="$1,215" time="Today" />
                    <InspectRow color="bg-emerald-400/80" label="Completed" amount="$89" time="12:05 PM" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting card 1 */}
          <CapabilityCard label="Payment Links" title="Share a link, get paid" description="Create and send payment links via SMS, email, or any channel in seconds.">
            <CardShell><LinkSurface /></CardShell>
          </CapabilityCard>
        </div>

        {/* Row 2 */}
        <div className="mt-5 grid gap-5 lg:grid-cols-4">
          <CapabilityCard label="QR Payments" title="Tap. Scan. Done." description="Contactless QR payments at the table or counter with tip selection built in.">
            <CardShell><QRSurface /></CardShell>
          </CapabilityCard>
          <CapabilityCard label="Dashboard" title="Everything in one view" description="Track transactions, monitor channels, issue refunds from a single pane.">
            <CardShell><DashboardSurface /></CardShell>
          </CapabilityCard>
          <CapabilityCard label="Visibility" title="Clear status, every payment" description="Know exactly where every payment stands from initiation through settlement.">
            <CardShell><VisibilitySurface /></CardShell>
          </CapabilityCard>
          <div className="rounded-2xl border border-border bg-surface px-6 py-7 flex flex-col justify-center">
            <p className="text-[11px] font-semibold text-muted uppercase tracking-wider mb-4">Industries</p>
            <h3 className="text-base font-bold text-foreground leading-snug">Purpose-built for local business</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">Designed for restaurants, nail salons, retail, and home services.</p>
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
    <span className="inline-flex items-center rounded-full bg-background border border-border px-3 py-1 text-xs font-medium text-foreground hover:border-accent-border hover:text-primary transition-colors cursor-pointer">
      {children}
    </span>
  );
}

function CapabilityCard({ label, title, description, children }: { label: string; title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-background shadow-card p-5 flex flex-col hover:shadow-card-hover transition-shadow">
      <p className="text-[11px] font-semibold text-muted uppercase tracking-wider mb-3">{label}</p>
      <h3 className="text-base font-bold text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm text-muted leading-relaxed">{description}</p>
      <div className="mt-4 flex-1 flex items-end">{children}</div>
    </div>
  );
}

function LinkMini({ label, amount, channel, status, time, selected }: { label: string; amount: string; channel: string; status: string; time: string; selected?: boolean }) {
  const sMap: Record<string, string> = {
    paid: "bg-emerald-400/10 text-emerald-600 border-emerald-400/20",
    pending: "bg-amber-400/10 text-amber-600 border-amber-400/20",
    sent: "bg-blue-400/10 text-blue-600 border-blue-400/20",
  };
  return (
    <div className={`flex items-center gap-1.5 rounded-md border px-2 py-1.5 ${selected ? "border-accent-border bg-accent-surface/40" : "border-border bg-background"}`}>
      <div className="flex-1 min-w-0">
        <p className="text-[9px] font-medium text-foreground truncate">{label}</p>
        <p className="text-[7px] text-muted/70">{channel}, {time}</p>
      </div>
      <span className="text-[9px] font-semibold text-foreground tabular-nums">{amount}</span>
      <span className={`inline-flex items-center rounded-full border px-1 py-0.5 text-[7px] font-medium flex-shrink-0 ${sMap[status] ?? "bg-muted/10 text-muted"}`}>
        {status}
      </span>
    </div>
  );
}

function QRMini({ label, amount, tips, status, active }: { label: string; amount: string; tips: string[]; status: string; active?: boolean }) {
  const sMap: Record<string, string> = {
    completed: "bg-emerald-400/10 text-emerald-600 border-emerald-400/20",
    open: "bg-blue-400/10 text-blue-600 border-blue-400/20",
  };
  return (
    <div className={`rounded-md border px-2 py-2 ${active ? "border-accent-border bg-accent-surface/40" : "border-border bg-background"}`}>
      <div className="flex items-center gap-1.5 mb-1">
        <div className="h-6 w-6 shrink-0 rounded border-2 border-border bg-white grid grid-cols-3 grid-rows-3 gap-px p-0.5">
          {[0, 2, 4, 7, 8].map((i) => (<div key={i} className="bg-foreground/60 rounded-[1px]" />))}
          {[1, 3, 5, 6].map((i) => (<div key={i} />))}
        </div>
        <div>
          <p className="text-[9px] font-semibold text-foreground">{label}</p>
          <p className="text-[8px] text-muted/70">{amount}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 mb-1">
        {tips.map((t) => (<span key={t} className="rounded border border-border px-1 py-0.5 text-[7px] text-muted">{t}</span>))}
      </div>
      <span className={`inline-flex items-center rounded-full border px-1 py-0.5 text-[7px] font-medium flex-shrink-0 ${sMap[status] ?? "bg-muted/10"}`}>
        {status}
      </span>
    </div>
  );
}

function InspectRow({ color, label, amount, time }: { color: string; label: string; amount: string; time: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${color} flex-shrink-0`} />
      <span className="text-[9px] text-foreground flex-1">{label}</span>
      <span className="text-[9px] font-medium text-foreground tabular-nums">{amount}</span>
      <span className="text-[8px] text-muted/50">{time}</span>
    </div>
  );
}

/* --- Mini product modules for supporting cards --- */

function CardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-xl border border-border bg-surface p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
      {children}
    </div>
  );
}

function LinkSurface() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="h-7 w-16 rounded-lg bg-background border border-border flex items-center justify-center text-[10px] font-bold text-foreground tabular-nums">$212</div>
        <div className="flex-1 text-right">
          <span className="text-[9px] font-medium text-foreground">Invoice #1042</span>
          <p className="text-[8px] text-muted/60">Email, 5:42 PM</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center rounded-full bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 text-[8px] font-medium text-emerald-600">Paid</span>
        <div className="h-6 w-14 rounded-full bg-primary/80 flex items-center justify-center">
          <span className="text-[7px] font-bold text-white">Resend</span>
        </div>
      </div>
    </div>
  );
}

function QRSurface() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-14 w-14 shrink-0 rounded-lg border-2 border-foreground/20 bg-background grid grid-cols-4 grid-rows-4 gap-0.5 p-1">
        {[0, 1, 3, 5, 6, 9, 12, 14, 15].map((i) => (<div key={i} className="bg-foreground/70 rounded-[1px]" />))}
      </div>
      <div className="space-y-1.5">
        <div>
          <span className="text-[10px] font-semibold text-foreground">Table 7</span>
          <p className="text-[8px] text-muted/70">2 items, 18% tip</p>
        </div>
        <div className="flex gap-1.5">
          <span className="rounded-md border border-border bg-background px-1.5 py-0.5 text-[8px] text-muted">15%</span>
          <span className="rounded-md border border-accent-border bg-accent-surface px-1.5 py-0.5 text-[8px] font-medium text-primary">18%</span>
          <span className="rounded-md border border-border bg-background px-1.5 py-0.5 text-[8px] text-muted">20%</span>
        </div>
        <span className="text-[10px] font-bold text-primary">$94</span>
      </div>
    </div>
  );
}

function DashboardSurface() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="h-2 w-16 rounded bg-muted/20" />
        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-accent-surface border border-accent-border px-2 py-0.5 text-[8px] font-medium text-primary">
          <span className="h-1 w-1 rounded-full bg-primary animate-ambient-pulse" />Live
        </span>
      </div>
      {[
        { c: "bg-emerald-400/80", l: "Completed", a: "$1,324", w: "w-3/5" },
        { c: "bg-blue-400/80", l: "Settled", a: "$842", w: "w-2/5" },
        { c: "bg-amber-400/80", l: "Refunding", a: "$30", w: "w-1/4" },
      ].map((it) => (
        <div key={it.l} className="flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${it.c}`} />
          <div className={`h-1.5 ${it.w} rounded bg-muted/20`} />
          <span className="ml-auto text-[8px] text-muted">{it.l}</span>
          <span className="text-[8px] font-medium text-foreground tabular-nums">{it.a}</span>
        </div>
      ))}
      <div className="flex gap-2 pt-1">
        <div className="h-7 flex-1 rounded-lg bg-background border border-border flex items-center px-2">
          <span className="text-[8px] text-muted">Filter</span>
        </div>
        <div className="h-7 w-14 rounded-lg bg-primary/20 flex items-center justify-center">
          <span className="text-[8px] font-medium text-primary">Export</span>
        </div>
      </div>
    </div>
  );
}

function VisibilitySurface() {
  return (
    <div className="space-y-2">
      {[
        { c: "bg-amber-400/80", t: "Card payment", a: "$30.00", tm: "3:10 PM", tag: "Refunding" },
        { c: "bg-emerald-400/80", t: "Payment link", a: "$45.00", tm: "2:05 PM", tag: "Completed" },
        { c: "bg-blue-400/80", t: "QR payment", a: "$15.00", tm: "1:28 PM", tag: "Settled" },
      ].map((it) => (
        <div key={it.t} className="flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${it.c} shrink-0`} />
          <span className="text-[9px] text-foreground font-medium flex-1">{it.t}</span>
          <span className="text-[9px] font-semibold text-foreground tabular-nums">{it.a}</span>
          <span className="inline-flex items-center rounded-full border px-1 py-0.5 text-[7px] font-medium flex-shrink-0 bg-muted/10 text-muted">{it.tag}</span>
        </div>
      ))}
    </div>
  );
}