import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";

export default function PaymentFlowStory() {
  return (
    <SectionWrapper alternate dense>
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">The problem</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px] leading-[1.08]">
            Payments don't move in a straight line.
            <br />
            Most tools pretend they do.
          </h2>
          <p className="mt-5 text-[16px] text-[#5B6475] leading-relaxed max-w-2xl">
            Card-present, online invoices, mobile pay, retries, fallbacks, settlement batches — every payment channel creates its own flow. Without orchestration, operators stitch visibility together by hand.
          </p>
        </div>

        {/* Visual metaphor — cleaner grid, stronger tension */}
        <div className="mt-16">
          <div className="rounded-[16px] border border-[#DDE1E6] bg-white overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06),0_0_1px_rgba(0,0,0,0.04)]">
            <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#E6EBF2]">
              {/* Zone 1: Payment channels come in — organized */}
              <div className="p-6 lg:p-8">
                <p className="text-[9px] font-semibold text-[#5B6475] uppercase tracking-wider mb-5">Channels in</p>
                <div className="space-y-3">
                  {[
                    { label: "Card-present", sub: "Terminal · Tap/Dip/Swipe", color: "bg-blue-500", border: "border-blue-200", bg: "bg-blue-50", amount: "$12,840" },
                    { label: "Online invoice", sub: "Email · SMS · Payment links", color: "bg-emerald-500", border: "border-emerald-200", bg: "bg-emerald-50", amount: "$8,420" },
                    { label: "Mobile pay", sub: "QR · Field payments · App", color: "bg-violet-500", border: "border-violet-200", bg: "bg-violet-50", amount: "$4,170" },
                  ].map((ch) => (
                    <div key={ch.label} className={`rounded-lg border ${ch.border} ${ch.bg} p-3.5`}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`h-2 w-2 rounded-full ${ch.color} shrink-0`} />
                        <span className="text-[12px] font-semibold text-[#0F172A]">{ch.label}</span>
                      </div>
                      <p className="text-[10px] text-[#5B6475] mb-2">{ch.sub}</p>
                      <p className="text-[13px] font-bold text-[#0F172A] tabular-nums">{ch.amount}</p>
                      <p className="text-[9px] text-[#94A3B8] mt-0.5">Today's volume</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Zone 2: The fragmentation problem — more real, more problematic */}
              <div className="p-6 lg:p-8 bg-[#F8F9FA]">
                <p className="text-[9px] font-semibold text-amber-600 uppercase tracking-wider mb-5">The fragmentation</p>

                <div className="space-y-3">
                  {/* Processor A portal fragment */}
                  <div className="rounded-lg border border-[#E6EBF2] bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-semibold text-[#5B6475]">Processor A portal</span>
                      <span className="text-[9px] text-[#94A3B8]">Last sync 14:20</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-[#5B6475]">Authorizations</span>
                        <span className="text-[#0F172A] font-medium">1,204</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-[#5B6475]">Settled</span>
                        <span className="text-[#0F172A] font-medium">$12,840</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-[#5B6475]">Exceptions</span>
                        <span className="text-rose-600 font-medium">3 unresolved</span>
                      </div>
                    </div>
                  </div>

                  {/* Processor B portal fragment */}
                  <div className="rounded-lg border border-[#E6EBF2] bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-semibold text-[#5B6475]">Processor B portal</span>
                      <span className="text-[9px] text-[#94A3B8]">Last sync 13:45</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-[#5B6475]">Batches</span>
                        <span className="text-[#0F172A] font-medium">4 pending</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-[#5B6475]">Variances</span>
                        <span className="text-amber-600 font-medium">$128.40</span>
                      </div>
                    </div>
                  </div>

                  {/* Invoice log fragment */}
                  <div className="rounded-lg border border-[#E6EBF2] bg-white p-3 shadow-sm opacity-80">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-semibold text-[#5B6475]">Invoice log</span>
                      <span className="text-[9px] text-[#94A3B8]">Manual</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-[#5B6475]">Outstanding</span>
                        <span className="text-amber-600 font-medium">7 invoices</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-[#5B6475]">Reconciled</span>
                        <span className="text-[#0F172A] font-medium">18 of 25</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fragmentation chaos indicator */}
                <div className="mt-4 flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span className="text-[10px] font-medium text-amber-700">
                      3 systems · zero shared visibility
                    </span>
                  </div>
                </div>
              </div>

              {/* Zone 3: HestaPay unified destination */}
              <div className="p-6 lg:p-8">
                <p className="text-[9px] font-semibold text-emerald-600 uppercase tracking-wider mb-5">With HestaPay</p>
                <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/80 p-5 text-center shadow-[0_0_24px_rgba(16,185,129,0.08)]">
                  <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-200 mb-4">
                    <span className="text-[14px] font-bold text-emerald-700">HP</span>
                  </div>
                  <p className="text-[14px] font-bold text-emerald-800 mb-2">Unified orchestration</p>
                  <p className="text-[11px] text-emerald-700/80 leading-relaxed max-w-[200px] mx-auto">
                    One surface. Every channel. All locations. Real-time status.
                  </p>
                </div>

                <div className="mt-5 space-y-2.5">
                  {[
                    { label: "Authorization", value: "98.72%", detail: "All channels monitored" },
                    { label: "Exceptions", value: "17 open", detail: "3 need review · 14 auto-recovered" },
                    { label: "Settlement", value: "$184,920", detail: "12 batches · 1 variance" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-lg border border-emerald-100 bg-white p-3">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[10px] font-semibold text-[#0F172A]">{m.label}</span>
                        <span className="text-[11px] font-bold text-emerald-700 tabular-nums">{m.value}</span>
                      </div>
                      <p className="text-[9px] text-[#5B6475]">{m.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="text-center mt-3 text-[10px] text-[#94A3B8]">Internal preview · Problem illustration</p>
        </div>

        {/* Three insight blocks */}
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          <InsightBlock number="01" title="Fragmented payment visibility" description="Terminal reports, processor portals, invoice logs — each channel speaks a different language. Operators jump between systems to answer a simple question: did we get paid?" />
          <InsightBlock number="02" title="Manual exception handling" description="Declines, timeouts, settlement variances — most exceptions land in someone's inbox or a processor portal. By the time they're noticed, revenue has already leaked." />
          <InsightBlock number="03" title="Delayed reconciliation" description="Settlement reports arrive days later. By the time a variance is caught, the batch is closed, the shift is over, and the root cause is buried in log files." />
        </div>
      </Container>
    </SectionWrapper>
  );
}

function InsightBlock({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div>
      <span className="text-[11px] font-semibold text-emerald-500/70 tracking-widest">{number}</span>
      <h3 className="mt-3 text-[16px] font-bold text-[#0F172A] leading-snug">{title}</h3>
      <p className="mt-2 text-[14px] text-[#5B6475] leading-relaxed">{description}</p>
    </div>
  );
}