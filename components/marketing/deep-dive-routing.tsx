import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";

export default function DeepDiveRouting() {
  return (
    <SectionWrapper alternate dense>
      <Container>
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
            Routing logic
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px] leading-[1.08]">
            Route rules that adapt
            <br />
            before traffic hits a wall.
          </h2>
          <p className="mt-5 text-[16px] text-[#5B6475] leading-relaxed">
            HestaPay evaluates channel, amount, location, and real-time route
            health on every transaction. Rules are configured once and applied
            across every payment surface.
          </p>
        </div>

        <RouteConfigurationWorkspace />
      </Container>
    </SectionWrapper>
  );
}

/**
 * RouteConfigurationWorkspace
 *
 * A real route configuration interface — NOT a topology poster.
 * Left: rule set list. Center: rule matrix / conditions. Right: selected rule inspector.
 * Asymmetric, dense where needed, calm where appropriate.
 */
function RouteConfigurationWorkspace() {
  return (
    <div className="rounded-[16px] border border-[#DDE1E6] bg-white overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06),0_0_1px_rgba(0,0,0,0.04)]">
      {/* Product chrome */}
      <div className="flex items-center gap-4 px-5 py-2.5 border-b border-[#E6EBF2] bg-white">
        <span className="text-[12px] font-semibold text-[#0F172A]">Route configuration</span>
        <span className="text-[10px] text-[#5B6475]">Northline Hospitality Group</span>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-[10px] font-medium text-amber-600 bg-amber-50 border border-amber-200 rounded px-2 py-0.5">
            Draft · Edited 14m ago
          </span>
          <span className="text-[10px] px-2.5 py-1 rounded bg-emerald-500 text-white font-medium text-[10px]">
            Publish rules
          </span>
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex border-b border-[#E6EBF2] bg-[#F8F9FA]">
        {["Rule sets", "Fallback chains", "Route health", "Change log"].map((t, i) => (
          <span
            key={t}
            className={`px-4 py-2.5 text-[11px] font-medium border-b-2 ${
              i === 0 ? "border-emerald-500 text-[#0F172A]" : "border-transparent text-[#5B6475]"
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Main workspace — 3-column asymmetric */}
      <div className="flex" style={{ minHeight: "400px" }}>
        {/* LEFT: Rule set list (~25%) */}
        <div className="w-[200px] shrink-0 border-r border-[#E6EBF2] bg-[#F8F9FA] flex flex-col">
          <div className="px-4 py-3 border-b border-[#E6EBF2]">
            <p className="text-[9px] font-semibold text-[#5B6475] uppercase tracking-wider">Rule sets</p>
          </div>
          <div className="flex-1 overflow-hidden">
            {[
              { name: "Channel affinity", active: true, count: "4 rules" },
              { name: "Amount thresholds", active: false, count: "3 rules" },
              { name: "Location routing", active: false, count: "12 rules" },
              { name: "Time-based routes", active: false, count: "2 rules" },
              { name: "Fallback override", active: false, count: "1 rule" },
            ].map((rs) => (
              <div
                key={rs.name}
                className={`px-4 py-2.5 border-b border-[#E6EBF2] cursor-pointer ${
                  rs.active ? "bg-white border-l-2 border-l-emerald-500" : "hover:bg-white/50"
                }`}
              >
                <p className={`text-[11px] font-medium ${rs.active ? "text-[#0F172A]" : "text-[#5B6475]"}`}>
                  {rs.name}
                </p>
                <p className="text-[9px] text-[#94A3B8] mt-0.5">{rs.count}</p>
              </div>
            ))}
          </div>
          <div className="px-4 py-2.5 border-t border-[#E6EBF2]">
            <span className="text-[10px] text-emerald-600 font-medium">+ New rule set</span>
          </div>
        </div>

        {/* CENTER: Rule matrix (~50%) */}
        <div className="flex-[1.2] min-w-0 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-[13px] font-semibold text-[#0F172A]">Channel affinity rules</h3>
              <p className="text-[10px] text-[#5B6475] mt-0.5">Define preferred routes by payment channel</p>
            </div>
          </div>

          {/* Rule matrix — rows of channel→route mappings */}
          <div className="space-y-1.5">
            {[
              { channel: "Online invoice", preferred: "Rte A — Primary", fallback: "Rte B → Rte E", priority: "1", active: true },
              { channel: "Terminal", preferred: "Rte B — Secondary", fallback: "Rte C → Rte E", priority: "2", active: true },
              { channel: "Mobile pay", preferred: "Rte D — Field pay", fallback: "Rte B → Rte E", priority: "3", active: true },
              { channel: "QR payment", preferred: "Rte A — Primary", fallback: "Rte B → Rte E", priority: "4", active: false, note: "Inherited" },
            ].map((rule, i) => (
              <div
                key={rule.channel}
                className={`flex items-center gap-3 rounded-lg border px-4 py-3 ${
                  i === 0 ? "border-emerald-200 bg-emerald-50/50 ring-1 ring-emerald-100" :
                  !rule.active ? "border-[#E6EBF2] bg-white opacity-60" : "border-[#E6EBF2] bg-white"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-semibold text-[#0F172A]">{rule.channel}</span>
                    {i === 0 && <span className="text-[9px] text-emerald-600 font-medium bg-emerald-100 px-1.5 py-0.5 rounded">Selected</span>}
                    {rule.note && <span className="text-[9px] text-[#94A3B8]">{rule.note}</span>}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-[#5B6475]">
                    <span>Preferred: <span className="text-[#0F172A] font-medium">{rule.preferred}</span></span>
                    <span className="text-[#E6EBF2]">|</span>
                    <span>Fallback: <span className="text-[#5B6475]">{rule.fallback}</span></span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${rule.active ? "bg-emerald-500" : "bg-[#94A3B8]"}`} />
                  <span className="text-[10px] text-[#94A3B8]">Priority {rule.priority}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Add rule */}
          <div className="mt-3 rounded-lg border border-dashed border-[#DDE1E6] p-3 text-center">
            <span className="text-[10px] text-[#94A3B8]">+ Add channel rule</span>
          </div>
        </div>

        {/* RIGHT: Rule inspector (~25%) */}
        <div className="w-[240px] shrink-0 border-l border-[#E6EBF2] bg-[#F8F9FA] flex flex-col">
          <div className="px-4 py-3 border-b border-[#E6EBF2]">
            <p className="text-[9px] font-semibold text-[#5B6475] uppercase tracking-wider">Rule inspector</p>
          </div>
          <div className="p-4 space-y-4 flex-1">
            <div>
              <p className="text-[9px] text-[#94A3B8] uppercase tracking-wider mb-1">Selected rule</p>
              <p className="text-[11px] font-semibold text-[#0F172A]">Online invoice → Rte A</p>
            </div>

            <div>
              <p className="text-[9px] text-[#94A3B8] uppercase tracking-wider mb-1">Condition</p>
              <p className="text-[10px] text-[#5B6475]">Channel equals "Online invoice"</p>
            </div>

            <div>
              <p className="text-[9px] text-[#94A3B8] uppercase tracking-wider mb-1">Fallback chain</p>
              <div className="text-[10px] text-[#5B6475] space-y-0.5">
                <p>1. Rte A — Primary <span className="text-emerald-600 font-medium">99.4%</span></p>
                <p>2. Rte B — Secondary <span className="text-[#94A3B8]">98.8%</span></p>
                <p>3. Rte E — Backup <span className="text-[#94A3B8]">Standby</span></p>
              </div>
            </div>

            <div>
              <p className="text-[9px] text-[#94A3B8] uppercase tracking-wider mb-1">Affected locations</p>
              <p className="text-[10px] text-[#5B6475]">43 of 43 locations</p>
            </div>

            <div className="pt-3 border-t border-[#E6EBF2]">
              <p className="text-[9px] text-[#94A3B8] uppercase tracking-wider mb-1">Validation</p>
              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                No conflicts detected
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}