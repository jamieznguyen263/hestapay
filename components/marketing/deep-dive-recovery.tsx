import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";

export default function DeepDiveRecovery() {
  return (
    <SectionWrapper className="bg-white" dense>
      <Container>
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">Exception recovery</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px] leading-[1.08]">
            Failed payments don't stay
            <br />
            failed for long.
          </h2>
          <p className="mt-5 text-[16px] text-[#5B6475] leading-relaxed">
            HestaPay detects declines, timeouts, and settlement mismatches in real time. Intelligent retry rules recover payments automatically while operators review and resolve flagged exceptions from a single queue.
          </p>
        </div>

        <RecoveryWorkspace />
      </Container>
    </SectionWrapper>
  );
}

/**
 * RecoveryWorkspace
 *
 * Real exception recovery workspace — queue on left, selected incident detail on right.
 * Asymmetric, operational, dense where meaningful.
 */
function RecoveryWorkspace() {
  return (
    <div className="rounded-[16px] border border-[#DDE1E6] bg-white overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06),0_0_1px_rgba(0,0,0,0.04)]">
      {/* Product chrome */}
      <div className="flex items-center gap-4 px-5 py-2.5 border-b border-[#E6EBF2] bg-white">
        <span className="text-[12px] font-semibold text-[#0F172A]">Exception queue</span>
        <span className="text-[10px] text-[#5B6475]">Studio Ledger Spa</span>
        <div className="ml-auto flex items-center gap-3">
          <div className="flex rounded-md border border-[#E6EBF2] bg-[#F8F9FA] p-0.5 text-[10px]">
            <span className="px-2.5 py-1 rounded font-medium bg-white text-[#0F172A] shadow-sm">All</span>
            <span className="px-2.5 py-1 text-[#5B6475]">Needs review</span>
            <span className="px-2.5 py-1 text-[#5B6475]">Recovered</span>
          </div>
          <span className="text-[10px] text-amber-600 font-medium">2 need review</span>
        </div>
      </div>

      {/* Main workspace — queue + detail */}
      <div className="flex" style={{ minHeight: "420px" }}>
        {/* LEFT: Exception queue (~55%) */}
        <div className="flex-[1.2] min-w-0 border-r border-[#E6EBF2] flex flex-col">
          <div className="px-5 py-3 border-b border-[#E6EBF2] bg-[#F8F9FA] flex items-center gap-4 text-[10px]">
            <span className="font-medium text-[#0F172A]">5 exceptions</span>
            <span className="text-[#5B6475]">Sorted by severity</span>
            <span className="ml-auto text-[#94A3B8]">Updated 14:22</span>
          </div>

          <div className="flex-1 overflow-hidden">
            {[
              { id: "EX-2104", type: "Settlement variance", location: "Midtown spa", amount: "$128.40", channel: "Terminal", status: "Review", severity: "amber" as const, selected: true },
              { id: "EX-2101", type: "Webhook failure", location: "Westside spa", amount: "$420.00", channel: "Mobile pay", status: "Review", severity: "amber" as const, selected: false },
              { id: "EX-2103", type: "Duplicate flagged", location: "Midtown spa", amount: "$84.20", channel: "Card-present", status: "Recovered", severity: "emerald" as const, selected: false },
              { id: "EX-2102", type: "Decline timeout", location: "Online booking", amount: "$156.00", channel: "Online invoice", status: "Recovered", severity: "emerald" as const, selected: false },
              { id: "EX-2100", type: "Partial capture", location: "Midtown counter", amount: "$32.50", channel: "Terminal", status: "Recovered", severity: "emerald" as const, selected: false },
            ].map((ex) => (
              <div
                key={ex.id}
                className={`flex items-center gap-3 px-5 py-3 border-b border-[#E6EBF2] cursor-pointer transition-colors ${
                  ex.selected
                    ? "bg-emerald-50/70 border-l-2 border-l-emerald-500"
                    : ex.severity === "amber"
                    ? "bg-amber-50/30 hover:bg-amber-50/50"
                    : "bg-white hover:bg-[#F8F9FA]"
                }`}
              >
                <span className="text-[10px] font-mono text-[#94A3B8] w-[56px] shrink-0">{ex.id}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${ex.severity === "amber" ? "bg-amber-500" : "bg-emerald-500"} shrink-0`} />
                    <span className="text-[11px] font-semibold text-[#0F172A]">{ex.type}</span>
                    <span className="text-[10px] text-[#5B6475]">{ex.location}</span>
                  </div>
                  <p className="text-[9px] text-[#94A3B8] mt-0.5 ml-[22px]">{ex.channel}</p>
                </div>
                <span className="text-[11px] font-semibold text-[#0F172A] tabular-nums w-[56px] text-right">{ex.amount}</span>
                <span className={`text-[9px] font-medium px-2 py-0.5 rounded-full w-[80px] text-center ${
                  ex.status === "Review" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
                }`}>{ex.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Selected incident detail (~45%) */}
        <div className="w-[320px] shrink-0 bg-[#F8F9FA] flex flex-col">
          <div className="px-5 py-3 border-b border-[#E6EBF2]">
            <p className="text-[9px] font-semibold text-[#5B6475] uppercase tracking-wider">Incident detail</p>
          </div>

          <div className="p-5 space-y-4 flex-1">
            {/* Incident header */}
            <div>
              <p className="text-[9px] text-[#94A3B8] uppercase tracking-wider mb-1">Selected</p>
              <p className="text-[12px] font-semibold text-[#0F172A]">EX-2104 · Settlement variance</p>
            </div>

            {/* Amount + context */}
            <div className="rounded-lg border border-[#E6EBF2] bg-white p-3">
              <div className="flex justify-between mb-1">
                <span className="text-[10px] text-[#5B6475]">Amount</span>
                <span className="text-[12px] font-bold text-[#0F172A] tabular-nums">$128.40</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] text-[#5B6475]">Channel</span>
                <span className="text-[10px] text-[#0F172A] font-medium">Terminal</span>
              </div>
            </div>

            {/* Retry history */}
            <div>
              <p className="text-[9px] font-semibold text-[#5B6475] uppercase tracking-wider mb-2">Retry history</p>
              <div className="space-y-1.5">
                {[
                  { attempt: "Attempt 1", time: "14:20:04", route: "Rte C", result: "Declined", color: "rose" },
                  { attempt: "Attempt 2", time: "14:20:08", route: "Rte B", result: "Timeout", color: "amber" },
                  { attempt: "Attempt 3", time: "14:20:14", route: "Rte A", result: "Recovered", color: "emerald" },
                ].map((a, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px]">
                    <span className={`h-1.5 w-1.5 rounded-full ${
                      a.color === "emerald" ? "bg-emerald-500" : a.color === "amber" ? "bg-amber-500" : "bg-rose-500"
                    } shrink-0`} />
                    <span className="text-[#5B6475] w-[56px]">{a.attempt}</span>
                    <span className="text-[#94A3B8] w-[52px]">{a.time}</span>
                    <span className="text-[#94A3B8] w-[40px]">{a.route}</span>
                    <span className={`font-medium ${a.color === "emerald" ? "text-emerald-600" : a.color === "amber" ? "text-amber-600" : "text-rose-600"}`}>{a.result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resolution */}
            <div className="pt-3 border-t border-[#E6EBF2]">
              <p className="text-[9px] font-semibold text-[#5B6475] uppercase tracking-wider mb-2">Resolution</p>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
                <p className="text-[10px] text-amber-800">
                  Batch #512 variance of $128.40 detected. Processor B settlement mismatch. Requires operator review before batch close.
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="flex gap-2">
              <span className="flex-1 text-center rounded-md border border-[#E6EBF2] bg-white py-2 text-[11px] font-medium text-[#5B6475] cursor-pointer">
                Dismiss
              </span>
              <span className="flex-1 text-center rounded-md bg-amber-500 text-white py-2 text-[11px] font-medium cursor-pointer">
                Investigate
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}