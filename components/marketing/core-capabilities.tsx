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

        {/* Three cards — each shows a cropped, zoomed product fragment */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* 1. Route intelligently — route configuration fragment crop */}
          <CapabilityShell number="01" title="Route intelligently" description="Every transaction hits the right destination, every time. Route rules adapt by channel, location, amount, and time of day.">
            <RouteFragment />
          </CapabilityShell>

          {/* 2. Recover automatically — exception recovery fragment crop */}
          <CapabilityShell number="02" title="Recover automatically" description="When a payment fails, HestaPay retries intelligently — before your customer notices and before revenue leaks.">
            <RecoveryFragment />
          </CapabilityShell>

          {/* 3. Reconcile confidently — settlement reconciliation fragment crop */}
          <CapabilityShell number="03" title="Reconcile confidently" description="Settlement batches cross-checked in real time. Variances surfaced before they compound across locations.">
            <ReconcileFragment />
          </CapabilityShell>
        </div>
      </Container>
    </SectionWrapper>
  );
}

function CapabilityShell({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group rounded-[16px] border border-[#DDE1E6] bg-white overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08),0_0_1px_rgba(0,0,0,0.04)]">
      {/* Product fragment — cropped, zoomed, real-looking */}
      <div className="border-b border-[#E6EBF2] bg-[#F8F9FA] overflow-hidden" style={{ minHeight: "240px" }}>
        {children}
      </div>
      <div className="p-5">
        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">{number}</span>
        <h3 className="mt-1.5 text-[20px] font-bold text-[#0F172A] leading-tight">{title}</h3>
        <p className="mt-2 text-[13px] text-[#5B6475] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/**
 * RouteFragment — cropped route rule detail
 * Shows a selected routing rule with prefered path, fallback chain, and route health.
 * Feels like a zoomed-in detail panel from a real route configuration screen.
 */
function RouteFragment() {
  return (
    <div className="p-4 h-full flex flex-col justify-center">
      {/* Header context */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[10px] font-semibold text-[#0F172A]">Route rules</span>
        <span className="text-[9px] text-[#94A3B8]">Channel affinity · Draft</span>
        <span className="ml-auto text-[9px] text-emerald-600 font-medium">4 rules active</span>
      </div>

      {/* Selected rule detail */}
      <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-3.5 ring-1 ring-emerald-100 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-[11px] font-semibold text-[#0F172A]">Online invoice → Rte A</span>
          <span className="ml-auto text-[9px] text-emerald-600 font-medium">Priority 1</span>
        </div>
        <div className="space-y-1 text-[10px] text-[#5B6475]">
          <p>
            Condition: <span className="text-[#0F172A] font-medium">Channel = Online invoice</span>
          </p>
          <div className="flex items-center gap-1">
            <span>Fallback:</span>
            <span className="text-[#0F172A] font-medium">Rte B</span>
            <span className="text-[#94A3B8]">→</span>
            <span className="text-[#5B6475]">Rte E</span>
          </div>
        </div>
      </div>

      {/* Route health summary */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Rte A", rate: "99.4%", color: "emerald" },
          { label: "Rte B", rate: "98.8%", color: "emerald" },
          { label: "Rte C", rate: "89.2%", color: "amber" },
        ].map((r) => (
          <div key={r.label} className={`rounded-md border px-2.5 py-2 text-center ${r.color === "amber" ? "border-amber-200 bg-amber-50/50" : "border-[#E6EBF2] bg-white"}`}>
            <p className="text-[10px] font-semibold text-[#0F172A]">{r.label}</p>
            <p className={`text-[11px] font-bold mt-0.5 tabular-nums ${r.color === "amber" ? "text-amber-600" : "text-emerald-600"}`}>{r.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * RecoveryFragment — cropped exception detail
 * Shows a selected exception with retry timeline and recovery status.
 * Feels like a zoomed-in detail panel from a real exception workspace.
 */
function RecoveryFragment() {
  return (
    <div className="p-4 h-full flex flex-col justify-center">
      {/* Header context */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[10px] font-semibold text-[#0F172A]">Exception queue</span>
        <span className="text-[9px] text-[#94A3B8]">Studio Ledger Spa</span>
        <span className="ml-auto text-[9px] text-amber-600 font-medium">2 need review</span>
      </div>

      {/* Selected exception */}
      <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-3.5 mb-3">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          <span className="text-[11px] font-semibold text-[#0F172A]">EX-2104 · Settlement variance</span>
        </div>
        <p className="text-[10px] text-[#5B6475] mb-2">$128.40 off expected · Batch #512</p>

        {/* Retry timeline — compact */}
        <div className="flex items-center gap-1.5 text-[9px]">
          <span className="text-rose-600 font-medium">Declined</span>
          <span className="text-[#94A3B8]">→</span>
          <span className="text-amber-600">Rty 1 · 421ms</span>
          <span className="text-[#94A3B8]">→</span>
          <span className="text-amber-600">Rty 2 · 389ms</span>
          <span className="text-[#94A3B8]">→</span>
          <span className="text-emerald-600 font-medium">Recovered</span>
        </div>
      </div>

      {/* Recovery stats */}
      <div className="flex items-center gap-4 text-[10px]">
        <span className="text-[#5B6475]">
          Recovery rate: <span className="text-emerald-600 font-semibold">94.2%</span>
        </span>
        <span className="text-[#5B6475]">
          Median: <span className="text-[#0F172A] font-semibold">2.8s</span>
        </span>
        <span className="text-[#5B6475]">
          Recovered: <span className="text-emerald-600 font-semibold">$2,410</span>
        </span>
      </div>
    </div>
  );
}

/**
 * ReconcileFragment — cropped batch reconciliation
 * Shows expected vs settled comparison with variance highlighting.
 * Feels like a zoomed-in comparison panel from a real reconciliation screen.
 */
function ReconcileFragment() {
  return (
    <div className="p-4 h-full flex flex-col justify-center">
      {/* Header context */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[10px] font-semibold text-[#0F172A]">Batch reconciliation</span>
        <span className="text-[9px] text-[#94A3B8]">Alder Retail Group</span>
        <span className="ml-auto text-[9px] text-emerald-600 font-medium">8 settled today</span>
      </div>

      {/* Comparison table */}
      <div className="rounded-lg border border-[#E6EBF2] bg-white overflow-hidden mb-3">
        <div className="grid grid-cols-[1fr_1fr_auto] gap-0 divide-x divide-[#E6EBF2] border-b border-[#E6EBF2] bg-[#F8F9FA]">
          <span className="px-3 py-1.5 text-[9px] font-semibold text-[#5B6475]">Expected</span>
          <span className="px-3 py-1.5 text-[9px] font-semibold text-[#5B6475]">Settled</span>
          <span className="px-3 py-1.5 text-[9px] font-semibold text-[#5B6475]">Status</span>
        </div>
        {[
          { expected: "$12,840", settled: "$12,840", match: true },
          { expected: "$9,420", settled: "$9,420", match: true },
          { expected: "$7,278", settled: "$7,150", match: false, diff: "-$128.40" },
          { expected: "$11,320", settled: "$11,320", match: true },
        ].map((row, i) => (
          <div key={i} className={`grid grid-cols-[1fr_1fr_auto] gap-0 divide-x divide-[#E6EBF2] border-b border-[#E6EBF2] last:border-b-0 ${!row.match ? "bg-amber-50/40" : ""}`}>
            <span className="px-3 py-2 text-[10px] text-[#0F172A] tabular-nums font-medium">{row.expected}</span>
            <span className={`px-3 py-2 text-[10px] tabular-nums font-medium ${row.match ? "text-[#0F172A]" : "text-amber-700"}`}>{row.settled}</span>
            <span className="px-3 py-2">
              {row.match ? (
                <svg className="h-3 w-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span className="text-[9px] text-amber-600 font-medium">{row.diff}</span>
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="flex items-center gap-3 text-[10px]">
        <span className="text-[#5B6475]">$40,858 matched</span>
        <span className="text-[#94A3B8]">·</span>
        <span className="text-amber-600 font-medium">1 variance · $128.40</span>
      </div>
    </div>
  );
}