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
 * A real route editing/configuration tool, not a topology poster.
 * - Top config header with publish state + validation
 * - Left rail: rule groups with counts + indicators
 * - Center: dense rule table with operational metadata
 * - Right inspector: deep selected-rule details
 * - Bottom footer: change summary / validation / publish diff
 */
function RouteConfigurationWorkspace() {
  return (
    <div className="rounded-[14px] border border-[#DDE1E6] bg-white overflow-hidden shadow-[0_6px_40px_rgba(0,0,0,0.07),0_0_0_1px_rgba(0,0,0,0.03)]">
      {/* ======= TOP CONFIG HEADER ======= */}
      <div className="flex items-center gap-3 px-5 py-2.5 border-b border-[#E6EBF2] bg-[#FAFBFC]">
        <span className="text-[13px] font-semibold text-[#0F172A]">Route configuration</span>
        <span className="text-[#DDE1E6]">·</span>
        <span className="text-[12px] text-[#5B6475]">Northline Hospitality Group</span>

        <div className="flex-1" />

        {/* Draft state */}
        <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded-md px-2.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          Draft
        </span>
        <span className="text-[12px] text-[#94A3B8]">Edited 14m ago</span>

        {/* Validation count */}
        <span className="inline-flex items-center gap-1 text-[12px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md px-2.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          12 validations passed
        </span>

        {/* Actions */}
        <span className="text-[12px] font-medium text-[#5B6475] border border-[#DDE1E6] rounded-md px-2.5 py-1 cursor-pointer hover:bg-[#F8F9FA] transition-colors">
          Test rules
        </span>
        <span className="text-[12px] font-semibold text-white bg-emerald-500 border border-emerald-500 rounded-md px-3 py-1 cursor-pointer hover:bg-emerald-600 transition-colors">
          Publish
        </span>
      </div>

      {/* ======= TAB BAR ======= */}
      <div className="flex border-b border-[#E6EBF2] bg-[#F8F9FA]">
        {["Rule sets", "Fallback chains", "Route health", "Change log"].map((t, i) => (
          <span
            key={t}
            className={`px-4 py-2.5 text-[12px] font-medium border-b-2 transition-colors cursor-pointer ${
              i === 0
                ? "border-emerald-500 text-[#0F172A] bg-white"
                : "border-transparent text-[#5B6475] hover:text-[#0F172A]"
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      {/* ======= MAIN WORKSPACE (3-column) ======= */}
      <div className="flex" style={{ minHeight: "440px" }}>
        {/* ========== LEFT RAIL: Rule groups ========== */}
        <div className="w-[210px] shrink-0 border-r border-[#E6EBF2] bg-[#F8F9FA] flex flex-col">
          <div className="px-4 py-3 border-b border-[#E6EBF2] flex items-center justify-between">
            <p className="text-[11px] font-semibold text-[#5B6475] uppercase tracking-wide">Rule sets</p>
            <span className="text-[11px] text-[#94A3B8]">5 groups</span>
          </div>

          <div className="flex-1 overflow-hidden">
            {[
              {
                name: "Channel affinity",
                count: 4,
                active: true,
                draft: true,
                warnings: 0,
                lastEdited: "14m ago",
              },
              {
                name: "Amount thresholds",
                count: 3,
                active: false,
                draft: false,
                warnings: 1,
                lastEdited: "2h ago",
              },
              {
                name: "Location routing",
                count: 12,
                active: false,
                draft: false,
                warnings: 0,
                lastEdited: "yesterday",
              },
              {
                name: "Time-based routes",
                count: 2,
                active: false,
                draft: true,
                warnings: 0,
                lastEdited: "6h ago",
              },
              {
                name: "Fallback overrides",
                count: 1,
                active: false,
                draft: false,
                warnings: 0,
                lastEdited: "3d ago",
              },
            ].map((rs) => (
              <div
                key={rs.name}
                className={`px-4 py-3 border-b border-[#E6EBF2] cursor-pointer transition-colors ${
                  rs.active
                    ? "bg-white border-l-[3px] border-l-emerald-500 shadow-sm"
                    : "hover:bg-white/60 border-l-[3px] border-l-transparent"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <p className={`text-[12px] font-medium ${rs.active ? "text-[#0F172A]" : "text-[#5B6475]"}`}>
                    {rs.name}
                  </p>
                  {rs.draft && (
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" title="Has unsaved changes" />
                  )}
                  {rs.warnings > 0 && (
                    <span className="text-[10px] font-medium text-amber-600 bg-amber-100 rounded-full px-1.5 py-0.5 leading-none ml-auto">
                      {rs.warnings}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[#94A3B8] mt-0.5">
                  {rs.count} rule{rs.count !== 1 ? "s" : ""} · {rs.lastEdited}
                </p>
              </div>
            ))}
          </div>

          <div className="px-4 py-2.5 border-t border-[#E6EBF2] bg-white">
            <span className="text-[12px] font-medium text-emerald-600 cursor-pointer hover:text-emerald-700 transition-colors">
              + New rule set
            </span>
          </div>
        </div>

        {/* ========== CENTER: Rule table ========== */}
        <div className="flex-[1.2] min-w-0 flex flex-col">
          {/* Center header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#E6EBF2]">
            <div>
              <h3 className="text-[14px] font-semibold text-[#0F172A]">Channel affinity rules</h3>
              <p className="text-[11px] text-[#5B6475] mt-0.5">
                Preferred routes by payment channel · 4 rules configured
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#5B6475] border border-[#DDE1E6] rounded px-2 py-1 cursor-pointer hover:bg-[#F8F9FA]">
                Sort: Priority
              </span>
            </div>
          </div>

          {/* Rule rows — dense table */}
          <div className="flex-1 overflow-hidden">
            {/* Table header */}
            <div className="flex items-center gap-3 px-5 py-2 border-b border-[#E6EBF2] bg-[#FAFBFC] text-[11px] font-semibold text-[#5B6475] uppercase tracking-wide">
              <span className="flex-1 min-w-0">Scope / condition</span>
              <span className="w-[170px] shrink-0">Preferred route</span>
              <span className="w-[170px] shrink-0">Fallback chain</span>
              <span className="w-[56px] shrink-0 text-center">Weight</span>
              <span className="w-[60px] shrink-0 text-center">Priority</span>
              <span className="w-[70px] shrink-0 text-center">State</span>
              <span className="w-[100px] shrink-0 text-right">Edited</span>
            </div>

            {/* Rule rows */}
            <div>
              {[
                {
                  scope: "Online invoice",
                  condition: "channel = 'online_invoice'",
                  preferred: "Rte A — Primary",
                  preferredRate: "99.4%",
                  fallback: ["Rte B — Secondary", "Rte E — Backup"],
                  weight: "38%",
                  priority: 1,
                  state: "Active",
                  note: null,
                  edited: "14m ago",
                  selected: true,
                },
                {
                  scope: "Terminal",
                  condition: "channel = 'terminal'",
                  preferred: "Rte B — Secondary",
                  preferredRate: "98.8%",
                  fallback: ["Rte C — Overflow", "Rte E — Backup"],
                  weight: "27%",
                  priority: 2,
                  state: "Active",
                  note: null,
                  edited: "2h ago",
                  selected: false,
                },
                {
                  scope: "Mobile pay",
                  condition: "channel = 'mobile_pay' AND amount < 5000",
                  preferred: "Rte D — Field pay",
                  preferredRate: "97.9%",
                  fallback: ["Rte B — Secondary", "Rte E — Backup"],
                  weight: "22%",
                  priority: 3,
                  state: "Active",
                  note: null,
                  edited: "yesterday",
                  selected: false,
                },
                {
                  scope: "QR payment",
                  condition: "channel = 'qr'",
                  preferred: "Rte A — Primary",
                  preferredRate: "99.4%",
                  fallback: ["Rte B — Secondary", "Rte E — Backup"],
                  weight: "13%",
                  priority: 4,
                  state: "Inherited",
                  note: "Auto-assigned via default chain",
                  edited: "3d ago",
                  selected: false,
                },
              ].map((rule, i) => (
                <div
                  key={rule.scope}
                  className={`flex items-center gap-3 px-5 py-3 border-b border-[#E6EBF2] transition-colors ${
                    rule.selected
                      ? "bg-emerald-50/60 border-l-[3px] border-l-emerald-500 shadow-sm"
                      : "hover:bg-[#FAFBFC] border-l-[3px] border-l-transparent"
                  }`}
                >
                  {/* Scope */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-semibold text-[#0F172A]">{rule.scope}</p>
                    <p className="text-[11px] text-[#94A3B8] font-mono mt-0.5 truncate">{rule.condition}</p>
                    {rule.note && (
                      <p className="text-[10px] text-amber-600 mt-0.5">{rule.note}</p>
                    )}
                  </div>

                  {/* Preferred */}
                  <div className="w-[170px] shrink-0">
                    <p className="text-[12px] font-medium text-[#0F172A]">{rule.preferred}</p>
                    <p className="text-[11px] text-emerald-600 font-medium tabular-nums">{rule.preferredRate}</p>
                  </div>

                  {/* Fallback chain */}
                  <div className="w-[170px] shrink-0">
                    <div className="flex items-center gap-1 flex-wrap">
                      {rule.fallback.map((fb, j) => (
                        <span key={fb} className="text-[11px] text-[#5B6475]">
                          {fb}
                          {j < rule.fallback.length - 1 && (
                            <span className="text-[#94A3B8] ml-1">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Weight */}
                  <span className="w-[56px] shrink-0 text-center text-[12px] font-medium text-[#0F172A] tabular-nums">
                    {rule.weight}
                  </span>

                  {/* Priority */}
                  <span className="w-[60px] shrink-0 text-center text-[12px] font-semibold text-[#5B6475] tabular-nums">
                    P{rule.priority}
                  </span>

                  {/* State */}
                  <div className="w-[70px] shrink-0 flex justify-center">
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-medium rounded px-2 py-0.5 ${
                        rule.state === "Active"
                          ? "text-emerald-700 bg-emerald-50 border border-emerald-200"
                          : "text-[#5B6475] bg-[#F8F9FA] border border-[#E6EBF2]"
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${rule.state === "Active" ? "bg-emerald-500" : "bg-[#94A3B8]"}`} />
                      {rule.state}
                    </span>
                  </div>

                  {/* Edited */}
                  <span className="w-[100px] shrink-0 text-right text-[11px] text-[#94A3B8]">
                    {rule.edited}
                  </span>
                </div>
              ))}
            </div>

            {/* Add rule row */}
            <div className="px-5 py-3 border-b border-dashed border-[#DDE1E6] text-center cursor-pointer hover:bg-[#FAFBFC] transition-colors">
              <span className="text-[12px] font-medium text-[#94A3B8] hover:text-[#5B6475]">+ Add channel rule</span>
            </div>
          </div>
        </div>

        {/* ========== RIGHT INSPECTOR ========== */}
        <div className="w-[260px] shrink-0 border-l border-[#E6EBF2] bg-[#F8F9FA] flex flex-col">
          <div className="px-4 py-3 border-b border-[#E6EBF2] flex items-center justify-between">
            <p className="text-[11px] font-semibold text-[#5B6475] uppercase tracking-wide">Rule inspector</p>
            <span className="text-[11px] text-[#94A3B8]">Online invoice · P1</span>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Selected rule */}
            <div>
              <p className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wide mb-1">Selected rule</p>
              <p className="text-[12px] font-semibold text-[#0F172A]">Online invoice → Rte A</p>
              <p className="text-[11px] text-[#94A3B8] font-mono mt-0.5">channel = 'online_invoice'</p>
            </div>

            {/* Preferred route */}
            <div>
              <p className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wide mb-1">Preferred route</p>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-medium text-[#0F172A]">Rte A — Primary</span>
                <span className="text-[12px] font-semibold text-emerald-600 tabular-nums">99.4%</span>
              </div>
              <p className="text-[11px] text-[#94A3B8]">Median latency: 312ms</p>
            </div>

            {/* Fallback chain with statuses */}
            <div>
              <p className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wide mb-1.5">Fallback chain</p>
              <div className="space-y-1.5">
                {[
                  { name: "Rte A — Primary", rate: "99.4%", status: "active", isPreferred: true },
                  { name: "Rte B — Secondary", rate: "98.8%", status: "standby" },
                  { name: "Rte E — Backup", rate: "—", status: "standby" },
                ].map((fb, j) => (
                  <div key={fb.name} className="flex items-center gap-2">
                    <span className="text-[10px] text-[#94A3B8] font-mono tabular-nums w-4">{j + 1}.</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] text-[#0F172A]">{fb.name}</p>
                    </div>
                    <span className={`text-[11px] font-medium tabular-nums ${fb.rate !== "—" ? "text-emerald-600" : "text-[#94A3B8]"}`}>
                      {fb.rate}
                    </span>
                    <span
                      className={`text-[10px] font-medium rounded px-1.5 py-0.5 ${
                        fb.isPreferred
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-[#EEF1F5] text-[#5B6475]"
                      }`}
                    >
                      {fb.isPreferred ? "preferred" : fb.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Affected locations */}
            <div>
              <p className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wide mb-1.5">Affected locations</p>
              <p className="text-[12px] font-medium text-[#0F172A]">43 of 43 locations</p>
              <div className="mt-2 rounded-md border border-[#E6EBF2] bg-white overflow-hidden">
                <div className="flex items-center justify-between px-3 py-1.5 text-[11px] text-[#5B6475] border-b border-[#E6EBF2]">
                  <span>Top 3 by volume</span>
                </div>
                {[
                  { name: "Northline Bistro #4", volume: "$42,630" },
                  { name: "Northline Kitchen #9", volume: "$38,210" },
                  { name: "Northline Café #22", volume: "$19,480" },
                ].map((loc) => (
                  <div key={loc.name} className="flex items-center justify-between px-3 py-1.5 border-b border-[#E6EBF2] last:border-b-0">
                    <span className="text-[11px] text-[#5B6475] truncate flex-1 mr-2">{loc.name}</span>
                    <span className="text-[11px] font-medium text-[#0F172A] tabular-nums">{loc.volume}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Test transaction preview */}
            <div>
              <p className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wide mb-1.5">Test transaction</p>
              <div className="rounded-md border border-[#E6EBF2] bg-white overflow-hidden">
                <div className="px-3 py-2 border-b border-[#E6EBF2] bg-[#FAFBFC] flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#0F172A]">$42.00 · Online invoice</span>
                  <span className="text-[10px] text-emerald-600 font-medium">→ Rte A (98ms)</span>
                </div>
                <div className="px-3 py-1.5 flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span>Route match: Channel affinity P1</span>
                  <span className="text-emerald-600">✓</span>
                </div>
              </div>
            </div>

            {/* Validation notes */}
            <div className="pt-3 border-t border-[#E6EBF2]">
              <p className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wide mb-1.5">Validation</p>
              <div className="space-y-1">
                {[
                  { label: "No conflicts detected", ok: true },
                  { label: "Fallback chain complete", ok: true },
                  { label: "All locations covered", ok: true },
                ].map((v) => (
                  <div key={v.label} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-[11px] text-emerald-700">{v.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======= BOTTOM FOOTER: Change summary ======= */}
      <div className="flex items-center gap-4 px-5 py-2.5 border-t border-[#E6EBF2] bg-[#FAFBFC]">
        {/* Unsaved changes */}
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          <span className="text-[12px] font-medium text-[#0F172A]">2 unsaved changes</span>
        </div>

        <span className="text-[#DDE1E6]">|</span>

        {/* Change summary */}
        <span className="text-[12px] text-[#5B6475]">
          <span className="font-medium text-[#0F172A]">Online invoice:</span> preferred route updated (Rte B → Rte A)
        </span>
        <span className="text-[12px] text-[#5B6475]">
          <span className="font-medium text-[#0F172A]">Terminal:</span> fallback priority reordered
        </span>

        <div className="flex-1" />

        {/* Validation state */}
        <span className="inline-flex items-center gap-1 text-[12px] font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          All validations passed
        </span>

        {/* Discard / Publish */}
        <span className="text-[12px] font-medium text-[#5B6475] cursor-pointer hover:text-[#0F172A] transition-colors">
          Discard
        </span>
        <span className="text-[12px] font-semibold text-white bg-emerald-500 border border-emerald-500 rounded-md px-3 py-1 cursor-pointer hover:bg-emerald-600 transition-colors">
          Publish changes
        </span>
      </div>
    </div>
  );
}