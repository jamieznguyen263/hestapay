import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";

export default function DeepDiveSettlement() {
  return (
    <SectionWrapper alternate dense>
      <Container>
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
            Settlement + reconciliation
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px] leading-[1.08]">
            Close the books without
            <br />
            chasing processor reports.
          </h2>
          <p className="mt-5 text-[16px] text-[#5B6475] leading-relaxed">
            Settlement batches are cross-checked in real time across every
            location. Variances are flagged before they compound. Operators see
            exactly what settled, what didn't, and why — from one surface.
          </p>
        </div>

        <ReconciliationWorkspace />
      </Container>
    </SectionWrapper>
  );
}

/**
 * ReconciliationWorkspace
 *
 * Real reconciliation workspace — batch comparison on left, variance inspector on right.
 * Calmer and more controlled than recovery.
 */
function ReconciliationWorkspace() {
  return (
    <div className="rounded-[16px] border border-[#DDE1E6] bg-white overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06),0_0_1px_rgba(0,0,0,0.04)]">
      {/* Product chrome */}
      <div className="flex items-center gap-4 px-5 py-2.5 border-b border-[#E6EBF2] bg-white">
        <span className="text-[12px] font-semibold text-[#0F172A]">Settlement reconciliation</span>
        <span className="text-[10px] text-[#5B6475]">Alder Retail Group · 12 locations</span>
        <div className="ml-auto flex items-center gap-3">
          <div className="flex rounded-md border border-[#E6EBF2] bg-[#F8F9FA] p-0.5 text-[10px]">
            <span className="px-2.5 py-1 rounded font-medium bg-white text-[#0F172A] shadow-sm">Today</span>
            <span className="px-2.5 py-1 text-[#5B6475]">This week</span>
            <span className="px-2.5 py-1 text-[#5B6475]">All batches</span>
          </div>
          <span className="text-[10px] text-emerald-600 font-medium">8 settled</span>
        </div>
      </div>

      {/* Summary bar — compact, one line */}
      <div className="px-5 py-3 border-b border-[#E6EBF2] bg-[#F8F9FA] flex items-center justify-between text-[11px]">
        <span className="text-[#5B6475]">
          <span className="font-semibold text-[#0F172A]">$97,420</span> settled across 8 batches
        </span>
        <span className="text-[#5B6475]">
          <span className="font-semibold text-amber-600">1 variance</span> · Real-time cross-check active
        </span>
      </div>

      {/* Main workspace — batch grid + variance inspector */}
      <div className="flex" style={{ minHeight: "420px" }}>
        {/* LEFT: Batch settlement grid (~60%) */}
        <div className="flex-[1.4] min-w-0 border-r border-[#E6EBF2] flex flex-col">
          <div className="px-5 py-3 border-b border-[#E6EBF2] bg-[#F8F9FA] text-[10px] text-[#5B6475]">
            <span className="font-medium text-[#0F172A]">9 locations</span> · Sorted by batch
          </div>

          <div className="flex-1 p-4">
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: "Market Row #1", expected: "$12,840", settled: "$12,840", batch: "#2201", match: true },
                { name: "Pine Avenue", expected: "$9,420", settled: "$9,420", batch: "#2202", match: true },
                { name: "Alder Downtown", expected: "$7,278", settled: "$7,150", batch: "#2204", match: false, diff: "$128.40", selected: true },
                { name: "Market Row #2", expected: "$11,320", settled: "$11,320", batch: "#2203", match: true },
                { name: "Cedar Crossing", expected: "$8,760", settled: "$8,760", batch: "#2205", match: true },
                { name: "Spruce Lane", expected: "$6,540", settled: "$6,540", batch: "#2206", match: true },
                { name: "Alder Westside", expected: "$14,200", settled: "$14,200", batch: "#2207", match: true },
                { name: "Birch Plaza", expected: "$10,890", settled: "$10,890", batch: "#2208", match: true },
                { name: "Oak Street", expected: "$16,300", settled: "$16,300", batch: "#2210", match: true },
              ].map((loc) => (
                <div
                  key={loc.name}
                  className={`rounded-lg border p-3 ${loc.selected ? "border-amber-300 bg-amber-50/70 ring-1 ring-amber-200" : loc.match ? "border-[#E6EBF2] bg-white" : "border-amber-200 bg-amber-50/40"}`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-[10px] font-semibold text-[#0F172A]">{loc.name}</p>
                    <span className={`h-1.5 w-1.5 rounded-full ${loc.match ? "bg-emerald-500" : "bg-amber-500"}`} />
                  </div>
                  <div className="flex justify-between text-[9px] mb-0.5">
                    <span className="text-[#94A3B8]">Expected</span>
                    <span className="text-[#0F172A] font-medium tabular-nums">{loc.expected}</span>
                  </div>
                  <div className="flex justify-between text-[9px] mb-1">
                    <span className="text-[#94A3B8]">Settled</span>
                    <span className={`font-medium tabular-nums ${loc.match ? "text-[#0F172A]" : "text-amber-700"}`}>{loc.settled}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] text-[#94A3B8]">Batch {loc.batch}</span>
                    {loc.match ? (
                      <svg className="h-2.5 w-2.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-[8px] text-amber-600 font-medium">{loc.diff}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Variance inspector (~40%) */}
        <div className="w-[300px] shrink-0 bg-[#F8F9FA] flex flex-col">
          <div className="px-5 py-3 border-b border-[#E6EBF2]">
            <p className="text-[9px] font-semibold text-[#5B6475] uppercase tracking-wider">Variance inspector</p>
          </div>

          <div className="p-5 space-y-4 flex-1">
            {/* Selected batch */}
            <div>
              <p className="text-[9px] text-[#94A3B8] uppercase tracking-wider mb-1">Selected batch</p>
              <p className="text-[12px] font-semibold text-[#0F172A]">#2204 · Alder Downtown</p>
            </div>

            {/* Comparison */}
            <div className="rounded-lg border border-[#E6EBF2] bg-white overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-[#E6EBF2] border-b border-[#E6EBF2] bg-[#F8F9FA]">
                <div className="px-3 py-2 text-center">
                  <p className="text-[9px] font-semibold text-[#5B6475]">Expected</p>
                  <p className="text-[12px] font-bold text-[#0F172A] tabular-nums">$7,278</p>
                </div>
                <div className="px-3 py-2 text-center">
                  <p className="text-[9px] font-semibold text-[#5B6475]">Settled</p>
                  <p className="text-[12px] font-bold text-amber-700 tabular-nums">$7,150</p>
                </div>
              </div>
              <div className="px-3 py-2 text-center bg-amber-50/50">
                <p className="text-[9px] text-amber-600 font-medium">
                  Variance: $128.40 below expected
                </p>
              </div>
            </div>

            {/* Detail */}
            <div className="space-y-2">
              <div className="flex justify-between text-[10px]">
                <span className="text-[#94A3B8]">Processor</span>
                <span className="text-[#0F172A] font-medium">Processor B</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-[#94A3B8]">Detection</span>
                <span className="text-[#0F172A] font-medium">Real-time cross-check</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-[#94A3B8]">Batch status</span>
                <span className="text-amber-600 font-medium">Open · Awaiting review</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-[#94A3B8]">Affected txns</span>
                <span className="text-[#0F172A] font-medium">3 transactions</span>
              </div>
            </div>

            {/* Note */}
            <div className="rounded-lg border border-[#E6EBF2] bg-white p-3">
              <p className="text-[10px] text-[#5B6475] leading-relaxed">
                Processor B settlement total does not match expected batch total. Variance likely from split capture during Rte C fallback event at 14:20.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <span className="flex-1 text-center rounded-md border border-[#E6EBF2] bg-white py-2 text-[11px] font-medium text-[#5B6475] cursor-pointer">
                Mark reviewed
              </span>
              <span className="flex-1 text-center rounded-md bg-emerald-500 text-white py-2 text-[11px] font-medium cursor-pointer">
                Reconcile
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}