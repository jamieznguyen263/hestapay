import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";

export default function CoreCapabilities() {
  return (
    <SectionWrapper className="bg-white">
      <Container>
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px] leading-[1.08]">
            Three capabilities.
            <br />
            One orchestration layer.
          </h2>
          <p className="mt-5 text-[16px] text-[#5B6475] leading-relaxed">
            HestaPay doesn't process payments. It sits above your infrastructure
            and makes every transaction more reliable, more visible, and more
            recoverable.
          </p>
        </div>

        {/* Three cards — each structurally different, no identical templates */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* 1. Route intelligently — horizontal dense table crop */}
          <RouteCapabilityCard />

          {/* 2. Recover automatically — stacked dense incident crop */}
          <RecoveryCapabilityCard />

          {/* 3. Reconcile confidently — side-detail batch crop */}
          <ReconcileCapabilityCard />
        </div>
      </Container>
    </SectionWrapper>
  );
}

/* ================================================================
   1. ROUTE — Horizontal dense rule-table crop
   Feels like a cropped section of a rule configuration workspace.
   Strong horizontal rhythm, table density, selected row.
   No pastel backgrounds.
   ================================================================ */
function RouteCapabilityCard() {
  return (
    <div className="group rounded-[14px] border border-[#DDE1E6] bg-white overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
      {/* Product fragment — horizontal table crop */}
      <div className="border-b border-[#E6EBF2] overflow-hidden" style={{ minHeight: "260px" }}>
        {/* Mini toolbar */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-[#E6EBF2] bg-[#FAFBFC]">
          <span className="text-[11px] font-semibold text-[#0F172A]">Channel affinity</span>
          <span className="text-[11px] text-[#94A3B8]">4 rules</span>
          <span className="ml-auto text-[11px] font-medium text-amber-700 bg-white border border-amber-200 rounded px-2 py-0.5">
            Draft
          </span>
        </div>

        {/* Table header */}
        <div className="flex items-center gap-3 px-4 py-2 border-b border-[#E6EBF2] bg-[#FAFBFC] text-[11px] font-semibold text-[#5B6475] uppercase tracking-wide">
          <span className="flex-1 min-w-0">Scope</span>
          <span className="w-[100px] shrink-0">Preferred</span>
          <span className="w-[100px] shrink-0">Fallback</span>
          <span className="w-[48px] shrink-0 text-center">Prio</span>
        </div>

        {/* Rule rows */}
        <div>
          {[
            { scope: "Online invoice", preferred: "Rte A", fallback: "Rte B→E", priority: 1, selected: true },
            { scope: "Terminal", preferred: "Rte B", fallback: "Rte C→E", priority: 2, selected: false },
            { scope: "Mobile pay", preferred: "Rte D", fallback: "Rte B→E", priority: 3, selected: false },
            { scope: "QR payment", preferred: "Rte A", fallback: "Rte B→E", priority: 4, inherited: true },
          ].map((rule) => (
            <div
              key={rule.scope}
              className={`flex items-center gap-3 px-4 py-2.5 border-b border-[#E6EBF2] last:border-b-0 transition-colors ${
                rule.selected
                  ? "bg-white border-l-[3px] border-l-emerald-500"
                  : "border-l-[3px] border-l-transparent hover:bg-[#FAFBFC]"
              }`}
            >
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-medium text-[#0F172A]">{rule.scope}</p>
                {rule.inherited && (
                  <p className="text-[10px] text-[#94A3B8] mt-0.5">Inherited default</p>
                )}
              </div>
              <span className="w-[100px] shrink-0 text-[12px] text-[#0F172A]">{rule.preferred}</span>
              <span className="w-[100px] shrink-0 text-[11px] text-[#5B6475]">{rule.fallback}</span>
              <span className="w-[48px] shrink-0 text-center text-[12px] font-semibold text-[#5B6475] tabular-nums">
                P{rule.priority}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Copy */}
      <div className="p-5">
        <h3 className="text-[18px] font-bold text-[#0F172A] leading-tight">Route intelligently</h3>
        <p className="mt-2 text-[13px] text-[#5B6475] leading-relaxed">
          Every transaction hits the right destination. Rules adapt by channel,
          location, and time of day — applied across every payment surface.
        </p>
      </div>
    </div>
  );
}

/* ================================================================
   2. RECOVERY — Stacked dense incident crop
   Feels like a cropped exception queue with a selected incident detail.
   Vertical rhythm, incident detail, retry timeline, recovery stats.
   No pastel backgrounds.
   ================================================================ */
function RecoveryCapabilityCard() {
  return (
    <div className="group rounded-[14px] border border-[#DDE1E6] bg-white overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
      {/* Product fragment — stacked incident crop */}
      <div className="border-b border-[#E6EBF2] overflow-hidden" style={{ minHeight: "260px" }}>
        {/* Mini toolbar */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-[#E6EBF2] bg-[#FAFBFC]">
          <span className="text-[11px] font-semibold text-[#0F172A]">Exception queue</span>
          <span className="text-[11px] text-[#94A3B8]">Studio Ledger Spa</span>
          <span className="ml-auto text-[11px] font-medium text-amber-700 bg-white border border-amber-200 rounded px-2 py-0.5">
            2 need review
          </span>
        </div>

        {/* Exception list — compact */}
        <div className="divide-y divide-[#E6EBF2]">
          {[
            { id: "EX-2104", title: "Settlement variance", amount: "$128.40", severity: "medium", selected: true },
            { id: "EX-2101", title: "Auth timeout", amount: "$84.20", severity: "high", selected: false },
            { id: "EX-2098", title: "Duplicate detection", amount: "$56.00", severity: "low", selected: false },
          ].map((ex) => (
            <div
              key={ex.id}
              className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${
                ex.selected
                  ? "bg-white border-l-[3px] border-l-amber-500"
                  : "border-l-[3px] border-l-transparent hover:bg-[#FAFBFC]"
              }`}
            >
              <span className={`h-2 w-2 rounded-full shrink-0 ${
                ex.severity === "high" ? "bg-rose-500" : ex.severity === "medium" ? "bg-amber-500" : "bg-emerald-500"
              }`} />
              <span className="text-[11px] font-mono text-[#94A3B8] tabular-nums">{ex.id}</span>
              <span className="text-[12px] text-[#0F172A] flex-1">{ex.title}</span>
              <span className={`text-[12px] font-medium tabular-nums ${
                ex.severity === "high" ? "text-rose-600" : "text-[#5B6475]"
              }`}>
                {ex.amount}
              </span>
            </div>
          ))}
        </div>

        {/* Selected exception detail */}
        <div className="px-4 py-3 border-t border-[#E6EBF2] bg-[#FAFBFC]">
          <p className="text-[11px] font-semibold text-[#0F172A] mb-2">EX-2104 · Settlement variance</p>

          {/* Retry timeline */}
          <div className="flex items-center gap-1.5 text-[11px] mb-2">
            <span className="text-rose-600 font-medium">Declined</span>
            <span className="text-[#CBD5E1]">→</span>
            <span className="text-amber-600">Rty 1 · 421ms</span>
            <span className="text-[#CBD5E1]">→</span>
            <span className="text-amber-600">Rty 2 · 389ms</span>
            <span className="text-[#CBD5E1]">→</span>
            <span className="text-emerald-600 font-medium">Recovered</span>
          </div>

          {/* Recovery stats row */}
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-[#5B6475]">
              Rate: <span className="text-emerald-600 font-semibold">94.2%</span>
            </span>
            <span className="text-[#5B6475]">
              Median: <span className="text-[#0F172A] font-semibold">2.8s</span>
            </span>
            <span className="text-[#5B6475]">
              Recovered: <span className="text-emerald-600 font-semibold">$2,410</span>
            </span>
          </div>
        </div>
      </div>

      {/* Copy */}
      <div className="p-5">
        <h3 className="text-[18px] font-bold text-[#0F172A] leading-tight">Recover automatically</h3>
        <p className="mt-2 text-[13px] text-[#5B6475] leading-relaxed">
          When a payment fails, HestaPay retries intelligently — before your
          customer notices and before revenue leaks.
        </p>
      </div>
    </div>
  );
}

/* ================================================================
   3. RECONCILE — Side-detail batch crop
   Feels like a cropped batch comparison with a side detail panel.
   Two-column rhythm inside the visual, batch rows + variance detail.
   No pastel backgrounds.
   ================================================================ */
function ReconcileCapabilityCard() {
  return (
    <div className="group rounded-[14px] border border-[#DDE1E6] bg-white overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
      {/* Product fragment — side-detail batch crop */}
      <div className="border-b border-[#E6EBF2] overflow-hidden" style={{ minHeight: "260px" }}>
        {/* Mini toolbar */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-[#E6EBF2] bg-[#FAFBFC]">
          <span className="text-[11px] font-semibold text-[#0F172A]">Batch reconciliation</span>
          <span className="text-[11px] text-[#94A3B8]">Alder Retail</span>
          <span className="ml-auto text-[11px] font-medium text-emerald-700 bg-white border border-emerald-200 rounded px-2 py-0.5">
            8 settled
          </span>
        </div>

        {/* Side-by-side: batch rows (left) + variance detail (right) */}
        <div className="flex">
          {/* Left: batch rows */}
          <div className="flex-1 min-w-0 divide-y divide-[#E6EBF2]">
            {/* Table header */}
            <div className="flex items-center gap-0 bg-[#FAFBFC]">
              <span className="flex-1 px-3 py-1.5 text-[11px] font-semibold text-[#5B6475] uppercase tracking-wide">Expected</span>
              <span className="flex-1 px-3 py-1.5 text-[11px] font-semibold text-[#5B6475] uppercase tracking-wide">Settled</span>
            </div>
            {[
              { expected: "$12,840", settled: "$12,840", match: true },
              { expected: "$9,420", settled: "$9,420", match: true },
              { expected: "$7,278", settled: "$7,150", match: false, diff: "-$128.40" },
              { expected: "$11,320", settled: "$11,320", match: true },
            ].map((row, i) => (
              <div
                key={i}
                className={`flex items-center gap-0 ${!row.match ? "bg-amber-50/30" : ""} ${i === 2 ? "border-l-[3px] border-l-amber-500" : "border-l-[3px] border-l-transparent"}`}
              >
                <span className="flex-1 px-3 py-2 text-[12px] text-[#0F172A] tabular-nums font-medium">{row.expected}</span>
                <span className={`flex-1 px-3 py-2 text-[12px] tabular-nums font-medium ${row.match ? "text-[#0F172A]" : "text-amber-700"}`}>
                  {row.settled}
                </span>
              </div>
            ))}
          </div>

          {/* Right: variance detail panel */}
          <div className="w-[130px] shrink-0 border-l border-[#E6EBF2] bg-[#FAFBFC] flex flex-col justify-center px-3 py-3">
            <p className="text-[11px] font-semibold text-[#0F172A] mb-1">Variance</p>
            <p className="text-[14px] font-bold text-amber-600 tabular-nums">$128.40</p>
            <p className="text-[11px] text-[#5B6475] mt-0.5">Batch #512</p>
            <div className="mt-2 pt-2 border-t border-[#E6EBF2]">
              <p className="text-[11px] text-[#94A3B8]">Matched</p>
              <p className="text-[12px] font-semibold text-[#0F172A]">$40,858</p>
            </div>
            <div className="mt-1.5">
              <p className="text-[11px] text-[#94A3B8]">Unmatched</p>
              <p className="text-[12px] font-semibold text-amber-600">1 batch</p>
            </div>
            <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-amber-700 bg-white border border-amber-200 rounded px-2 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Review
            </span>
          </div>
        </div>
      </div>

      {/* Copy */}
      <div className="p-5">
        <h3 className="text-[18px] font-bold text-[#0F172A] leading-tight">Reconcile confidently</h3>
        <p className="mt-2 text-[13px] text-[#5B6475] leading-relaxed">
          Settlement batches cross-checked in real time. Variances surfaced
          before they compound across locations.
        </p>
      </div>
    </div>
  );
}