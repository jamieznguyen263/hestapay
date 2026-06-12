import Container from "@/components/ui/container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-14 lg:pt-20 lg:pb-24">
      {/* Minimal ambient gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[900px] h-[900px] -translate-y-1/3 translate-x-1/4 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(16,185,129,0.025) 0%, rgba(16,185,129,0.006) 40%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-10 items-start lg:grid-cols-12 lg:gap-14">
          {/* Left — copy */}
          <div className="lg:col-span-5 pt-2 lg:pt-6">
            <div className="inline-flex items-center gap-1.5 rounded-md border border-[#E0E4E9] bg-white px-3 py-1.5 text-[13px] font-medium text-[#0F172A] mb-8">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              Payment orchestration for local businesses
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-[48px] leading-[1.05]">
              Route payments.
              <br />
              Recover revenue.
              <br />
              See everything.
            </h1>

            <p className="mt-6 max-w-md text-[16px] text-[#5B6475] leading-relaxed">
              HestaPay is the orchestration layer between your payment surfaces
              and trusted infrastructure — routing every transaction, recovering
              failed payments, and giving operators full visibility across every
              channel and location.
            </p>

            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <a
                href="/early-access"
                className="inline-flex items-center rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white border border-emerald-500 px-6 py-3 text-[15px] font-semibold transition-colors shadow-[0_2px_8px_rgba(16,185,129,0.25)]"
              >
                Get early access
              </a>
              <a
                href="/book-demo"
                className="inline-flex items-center rounded-lg border border-[#E0E4E9] text-[#5B6475] hover:border-[#C4CBD5] hover:text-[#0F172A] bg-white px-6 py-3 text-[15px] font-semibold transition-colors"
              >
                Book a demo
              </a>
            </div>

            <div className="mt-10 hidden sm:flex items-center gap-6 text-[13px]">
              <span className="text-[#5B6475]">
                <span className="font-semibold text-[#0F172A] tabular-nums">
                  98.72%
                </span>{" "}
                auth rate
              </span>
              <span className="text-[#DDE1E6]">|</span>
              <span className="text-[#5B6475]">
                <span className="font-semibold text-[#0F172A] tabular-nums">
                  421ms
                </span>{" "}
                median route
              </span>
              <span className="text-[#DDE1E6]">|</span>
              <span className="text-[#5B6475]">
                <span className="font-semibold text-[#0F172A] tabular-nums">
                  43
                </span>{" "}
                locations connected
              </span>
            </div>
          </div>

          {/* Right — product surface */}
          <div className="lg:col-span-7">
            <HeroProductSurface />
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * HeroProductSurface — Canonical v1
 *
 * Composition: Selected-incident monitoring workspace.
 *
 *   [Toolbar]
 *   [Chart (62%)  |  Incident Inspector (38%)]
 *   [Full-width Affected Locations Table]
 *
 * The right is NOT a generic sidebar.
 * It is a focused incident inspector orbiting one selected event:
 * Rte C auth degradation at 14:20.
 */
function HeroProductSurface() {
  return (
    <div className="relative w-full select-none">
      {/* ===== WORKSPACE FRAME ===== */}
      <div className="rounded-lg border border-[#DDE2E8] bg-white overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_2px_8px_rgba(0,0,0,0.05)]">
        {/* ===== TOOLBAR ===== */}
        <div className="flex items-center gap-3 px-4 py-2 border-b border-[#EBEEF2] bg-[#FAFBFC]">
          <span className="text-[12px] font-semibold text-[#0F172A]">
            Northline Hospitality
          </span>
          <span className="text-[#D0D5DD] text-[11px] select-none">·</span>
          <span className="text-[12px] text-[#5B6475]">43 locations</span>

          <span className="flex items-center gap-1 ml-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-medium text-emerald-600">
              Live
            </span>
          </span>

          <span className="flex items-center gap-1 ml-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span className="text-[11px] font-medium text-amber-700">
              1 incident
            </span>
          </span>

          <span className="flex-1" />

          <span className="text-[11px] text-[#5B6475] bg-[#EEF1F5] rounded px-2 py-0.5 font-medium">
            Saved: Daily Review
          </span>
          <span className="text-[11px] text-[#5B6475]">Today 06:00–18:00</span>
          <span className="text-[11px] text-[#5B6475] bg-[#EEF1F5] rounded px-2 py-0.5 font-medium">
            All channels
          </span>
        </div>

        {/* ===== MAIN AREA: Chart (left) + Incident Inspector (right) ===== */}
        <div className="flex" style={{ minHeight: "460px" }}>
          {/* ===== LEFT: Dominant monitoring chart ===== */}
          <div className="flex-[1.62] min-w-0 flex flex-col bg-white">
            {/* Compact operational summary */}
            <div className="flex items-center gap-5 px-4 pt-3 pb-1">
              <span className="text-[11px] text-[#5B6475]">
                <span className="font-medium text-[#94A3B8]">Today</span>{" "}
                <span className="font-bold text-[#0F172A] tabular-nums text-[15px] ml-0.5">
                  $184,920
                </span>
              </span>
              <span className="text-[11px] text-[#5B6475]">
                <span className="font-medium text-[#94A3B8]">Auth rate</span>{" "}
                <span className="font-bold text-emerald-600 tabular-nums text-[15px] ml-0.5">
                  98.72%
                </span>
              </span>
              <span className="text-[11px] text-[#5B6475]">
                <span className="font-medium text-[#94A3B8]">Routes</span>{" "}
                <span className="font-bold text-[#0F172A] tabular-nums text-[15px] ml-0.5">
                  6/7 active
                </span>
              </span>

              <span className="flex-1" />

              {/* Legend */}
              <span className="flex items-center gap-1 text-[11px] text-[#5B6475]">
                <span className="h-2 w-2 rounded-sm bg-[#E0E5EC] border border-[#CFD6E0]" />
                Volume
              </span>
              <span className="flex items-center gap-1 text-[11px] text-[#5B6475] ml-2">
                <span className="h-0.5 w-3.5 bg-emerald-500 rounded-full" />
                Auth rate
              </span>
              <span className="flex items-center gap-1 text-[11px] text-amber-600 ml-2">
                <span className="h-0.5 w-3.5 bg-amber-400 rounded-full" />
                SLA
              </span>
            </div>

            {/* Chart */}
            <div className="flex-1 px-3 pt-2 pb-2">
              <AuthRateChart />
            </div>
          </div>

          {/* ===== RIGHT: Selected Incident Inspector ===== */}
          <div className="w-[310px] shrink-0 border-l border-[#EBEEF2] bg-[#FAFBFC] flex flex-col">
            <IncidentInspector />
          </div>
        </div>

        {/* ===== BOTTOM: Affected Locations Table ===== */}
        <AffectedLocationsTable />
      </div>

      <p className="text-center mt-3 text-[11px] text-[#94A3B8]">
        Internal preview · Northline Hospitality Group
      </p>
    </div>
  );
}

/**
 * IncidentInspector
 *
 * A focused selected-incident detail panel.
 * NOT a generic sidebar. NOT a fact list.
 *
 * Orbits one event: Rte C auth degradation, 14:20.
 */
function IncidentInspector() {
  return (
    <>
      {/* Incident header */}
      <div className="px-4 pt-3 pb-2.5">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded px-2 py-0.5 mb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
          Selected incident
        </span>
        <h3
          className="text-[13px] font-bold text-[#0F172A] leading-snug"
          style={{ letterSpacing: "-0.01em" }}
        >
          Rte C — Overflow
          <br />
          Auth degradation
        </h3>
        <div className="flex items-center gap-3 mt-1.5 text-[11px] text-[#5B6475]">
          <span>Opened 14:20</span>
          <span className="text-[#D0D5DD]">|</span>
          <span className="font-semibold text-rose-600">High severity</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#EBEEF2]" />

      {/* Current state block */}
      <div className="px-4 py-3 space-y-2.5">
        <div>
          <span className="text-[11px] text-[#94A3B8]">Current auth rate</span>
          <p className="text-[22px] font-bold text-rose-600 tabular-nums leading-tight">
            82.1%
          </p>
        </div>
        <div>
          <span className="text-[11px] text-[#94A3B8]">Latency delta</span>
          <p className="text-[13px] font-bold text-amber-600 tabular-nums">
            +526ms
          </p>
        </div>
        <div className="flex gap-4">
          <div>
            <span className="text-[11px] text-[#94A3B8]">Txns affected</span>
            <p className="text-[12px] font-semibold text-[#0F172A] tabular-nums">
              25
            </p>
          </div>
          <div>
            <span className="text-[11px] text-[#94A3B8]">In flight</span>
            <p className="text-[12px] font-semibold text-[#0F172A] tabular-nums">
              $4,820
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#EBEEF2]" />

      {/* Fallback & recovery */}
      <div className="px-4 py-3 space-y-2.5">
        <div>
          <span className="text-[11px] text-[#94A3B8]">Fallback</span>
          <p className="text-[12px] font-medium text-[#0F172A] leading-snug">
            Rte C → Rte E engaged
          </p>
        </div>
        <div>
          <span className="text-[11px] text-[#94A3B8]">Auto-recovery</span>
          <p className="text-[12px] font-medium text-emerald-600">Active</p>
        </div>
        <div>
          <span className="text-[11px] text-[#94A3B8]">Processor response</span>
          <p className="text-[11px] text-[#5B6475]">
            Gateway timeout · 3 attempts sent
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#EBEEF2]" />

      {/* Recovery timeline stepper */}
      <div className="px-4 py-3">
        <span className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wide">
          Recovery progress
        </span>
        <div className="mt-2.5 space-y-0">
          {[
            { label: "Detected", time: "14:20", done: true, active: false },
            { label: "Fallback engaged", time: "14:21", done: true, active: false },
            { label: "Rerouting", time: "14:22", done: true, active: true },
            { label: "Stabilizing", time: "—", done: false, active: false },
            { label: "Recovered", time: "—", done: false, active: false },
          ].map((step, i) => (
            <div key={step.label} className="flex items-start gap-2.5">
              {/* Connector line + dot */}
              <div className="flex flex-col items-center shrink-0" style={{ width: 14 }}>
                {i > 0 && (
                  <div
                    className="w-px h-3"
                    style={{
                      background:
                        step.done || (i === 2 && step.active)
                          ? "#10B981"
                          : "#E4E8ED",
                    }}
                  />
                )}
                <span
                  className={`block rounded-full shrink-0 ${
                    step.done
                      ? "bg-emerald-500"
                      : step.active
                        ? "bg-amber-500 ring-2 ring-amber-200"
                        : "bg-[#D0D5DD]"
                  }`}
                  style={{ width: 8, height: 8 }}
                />
                {i < 4 && (
                  <div
                    className="w-px flex-1"
                    style={{
                      background:
                        step.done
                          ? "#10B981"
                          : step.active
                            ? "#E4E8ED"
                            : "#E4E8ED",
                    }}
                  />
                )}
              </div>
              {/* Label */}
              <div className="pb-2.5">
                <p
                  className={`text-[12px] font-medium leading-none ${
                    step.done
                      ? "text-[#0F172A]"
                      : step.active
                        ? "text-amber-700"
                        : "text-[#94A3B8]"
                  }`}
                >
                  {step.label}
                </p>
                <p className="text-[11px] text-[#94A3B8] mt-0.5">{step.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#EBEEF2]" />

      {/* Tool actions */}
      <div className="px-4 py-2.5 flex items-center gap-3">
        <span className="text-[12px] font-medium text-[#5B6475] cursor-pointer hover:text-[#0F172A] transition-colors">
          Open incident →
        </span>
        <span className="text-[#D0D5DD] text-[11px]">|</span>
        <span className="text-[12px] font-medium text-[#5B6475] cursor-pointer hover:text-[#0F172A] transition-colors">
          Review fallback chain →
        </span>
      </div>
    </>
  );
}

/**
 * AffectedLocationsTable
 *
 * Full-width operational table below the main workspace.
 * Shows 5 locations affected by the Rte C degradation,
 * each at a different recovery stage.
 */
function AffectedLocationsTable() {
  return (
    <div className="border-t border-[#EBEEF2] bg-[#FAFBFC]">
      {/* Table header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[#EBEEF2]">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
        <span className="text-[11px] font-semibold text-[#0F172A]">
          Locations routed via Rte C — rerouting in progress
        </span>
        <span className="text-[11px] text-[#94A3B8]">5 affected</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-[11px] font-medium text-[#5B6475] border-b border-[#EBEEF2]">
            <th className="px-4 py-2 font-medium w-[28%]">Location</th>
            <th className="px-3 py-2 font-medium w-[14%]">Route</th>
            <th className="px-3 py-2 font-medium text-right w-[10%]">
              Rerouted
            </th>
            <th className="px-3 py-2 font-medium text-right w-[12%]">
              Latency
            </th>
            <th className="px-3 py-2 font-medium w-[18%]">Recovery</th>
            <th className="px-4 py-2 font-medium text-right w-[18%]">
              Last update
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              name: "Northline Bistro #4",
              route: "C → E",
              rerouted: 12,
              latency: "608ms",
              recovery: "Active",
              recoveryClass: "amber",
              updated: "14:23",
            },
            {
              name: "Northline Kitchen #9",
              route: "C → E",
              rerouted: 8,
              latency: "597ms",
              recovery: "Active",
              recoveryClass: "amber",
              updated: "14:23",
            },
            {
              name: "Northline Café #22",
              route: "C → E",
              rerouted: 5,
              latency: "483ms",
              recovery: "Stabilized",
              recoveryClass: "green-outline",
              updated: "14:25",
            },
            {
              name: "Northline Taproom #31",
              route: "C → E",
              rerouted: 3,
              latency: "412ms",
              recovery: "Recovered",
              recoveryClass: "green",
              updated: "14:28",
            },
            {
              name: "Northline Express #17",
              route: "C → E",
              rerouted: 2,
              latency: "354ms",
              recovery: "Recovered",
              recoveryClass: "green",
              updated: "14:30",
            },
          ].map((loc) => (
            <tr
              key={loc.name}
              className="border-b border-[#EBEEF2] last:border-b-0 hover:bg-white/70 transition-colors"
            >
              <td className="px-4 py-2.5 text-[12px] font-medium text-[#0F172A]">
                {loc.name}
              </td>
              <td className="px-3 py-2.5 text-[12px] text-[#5B6475] tabular-nums">
                {loc.route}
              </td>
              <td className="px-3 py-2.5 text-[12px] text-[#5B6475] tabular-nums text-right">
                {loc.rerouted}
              </td>
              <td className="px-3 py-2.5 text-[12px] font-medium text-amber-600 tabular-nums text-right">
                {loc.latency}
              </td>
              <td className="px-3 py-2.5">
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] font-medium rounded px-2 py-0.5 ${
                    loc.recoveryClass === "green"
                      ? "text-emerald-700 bg-emerald-50 border border-emerald-200"
                      : loc.recoveryClass === "green-outline"
                        ? "text-emerald-600 bg-white border border-emerald-200"
                        : "text-amber-700 bg-white border border-amber-200"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      loc.recoveryClass === "green"
                        ? "bg-emerald-500"
                        : loc.recoveryClass === "green-outline"
                          ? "bg-emerald-400"
                          : "bg-amber-500"
                    }`}
                  />
                  {loc.recovery}
                </span>
              </td>
              <td className="px-4 py-2.5 text-[11px] text-[#94A3B8] tabular-nums text-right">
                {loc.updated}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * AuthRateChart — Canonical v1
 *
 * SVG monitoring chart. Tight, serious, product-real.
 *
 * - Y-axis: 97.0%–99.8%
 * - One credible dip at 15:00 (97.8%)
 * - Incident window 14:00–16:00 highlighted
 * - SLA line at 98.5% (dashed amber)
 * - Subtle neutral volume bars behind the line
 */
function AuthRateChart() {
  const data = [
    { h: "06", v: 65, a: 99.1 },
    { h: "07", v: 42, a: 99.2 },
    { h: "08", v: 78, a: 98.9 },
    { h: "09", v: 55, a: 99.3 },
    { h: "10", v: 88, a: 99.0 },
    { h: "11", v: 96, a: 98.8 },
    { h: "12", v: 72, a: 99.1 },
    { h: "13", v: 45, a: 99.4 },
    { h: "14", v: 62, a: 98.9 },
    { h: "15", v: 85, a: 97.8 },
    { h: "16", v: 92, a: 98.8 },
    { h: "17", v: 68, a: 99.0 },
    { h: "18", v: 48, a: 99.1 },
    { h: "19", v: 52, a: 98.9 },
    { h: "20", v: 70, a: 99.1 },
  ];

  const n = data.length;

  const svgW = 760;
  const svgH = 260;
  const padL = 46;
  const padR = 10;
  const padT = 14;
  const padB = 28;
  const chartW = svgW - padL - padR;
  const chartH = svgH - padT - padB;

  const yMin = 96.8;
  const yMax = 99.8;
  const yScale = (rate: number) =>
    padT + ((yMax - rate) / (yMax - yMin)) * chartH;
  const xScale = (i: number) => padL + (i / (n - 1)) * chartW;

  const linePoints = data
    .map((d, i) => `${xScale(i).toFixed(1)},${yScale(d.a).toFixed(1)}`)
    .join(" ");

  const yTicks = [99.5, 99.0, 98.5, 98.0, 97.5, 97.0];

  const anomalyIdx = 9; // 15:00

  // Incident window: points 8–10 (14:00–16:00)
  const incStartX = xScale(8) - (chartW / n) * 0.5;
  const incEndX = xScale(10) + (chartW / n) * 0.5;

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: "visible" }}
    >
      {/* Grid */}
      {yTicks.map((tick) => {
        const y = yScale(tick);
        const isSLA = tick === 98.5;
        return (
          <g key={`g-${tick}`}>
            <line
              x1={padL}
              y1={y}
              x2={svgW - padR}
              y2={y}
              stroke={isSLA ? "#F59E0B" : "#E4E8ED"}
              strokeWidth={0.75}
              strokeDasharray={isSLA ? "4,3" : undefined}
              opacity={isSLA ? 0.55 : 1}
            />
            <text
              x={padL - 8}
              y={y + 4}
              textAnchor="end"
              fill={isSLA ? "#B45309" : "#5B6475"}
              fontSize="10"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight={isSLA ? 600 : 400}
            >
              {tick.toFixed(1)}%
            </text>
            {isSLA && (
              <text
                x={svgW - padR - 4}
                y={y - 5}
                textAnchor="end"
                fill="#B45309"
                fontSize="10"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontWeight={600}
              >
                98.5% SLA
              </text>
            )}
          </g>
        );
      })}

      {/* Volume bars */}
      {data.map((d, i) => {
        const barH = (d.v / 100) * chartH * 0.85;
        const barW = Math.max(2, (chartW / n) * 0.45);
        const barX = xScale(i) - barW / 2;
        const barY = padT + chartH - barH;
        const isInc = i >= 8 && i <= 10;
        return (
          <rect
            key={`v-${i}`}
            x={barX}
            y={barY}
            width={barW}
            height={Math.max(1, barH)}
            rx={1}
            fill={
              isInc
                ? "rgba(245,158,11,0.10)"
                : "rgba(203,213,225,0.20)"
            }
          />
        );
      })}

      {/* Incident window highlight */}
      <rect
        x={incStartX}
        y={padT}
        width={incEndX - incStartX}
        height={chartH}
        fill="rgba(245,158,11,0.035)"
        rx={2}
      />
      <rect
        x={incStartX}
        y={padT}
        width={incEndX - incStartX}
        height={chartH}
        fill="none"
        stroke="rgba(245,158,11,0.25)"
        strokeWidth={0.75}
        strokeDasharray="3,3"
        rx={2}
        vectorEffect="non-scaling-stroke"
      />

      {/* Auth rate polyline */}
      <polyline
        points={linePoints}
        fill="none"
        stroke="#10B981"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <polyline
        points={linePoints}
        fill="none"
        stroke="rgba(16,185,129,0.10)"
        strokeWidth="5"
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Data dots */}
      {data.map((d, i) => {
        const cx = xScale(i);
        const cy = yScale(d.a);
        const isAnomaly = i === anomalyIdx;
        return (
          <circle
            key={`d-${i}`}
            cx={cx}
            cy={cy}
            r={isAnomaly ? 2.5 : 1.3}
            fill={isAnomaly ? "#F59E0B" : "#10B981"}
            stroke="white"
            strokeWidth={isAnomaly ? 1.5 : 0.8}
            vectorEffect="non-scaling-stroke"
          />
        );
      })}

      {/* X-axis labels */}
      {[0, 2, 4, 6, 8, 10, 12, 14].map((i) => (
        <text
          key={`x-${i}`}
          x={xScale(i)}
          y={svgH - 8}
          textAnchor="middle"
          fill="#5B6475"
          fontSize="10"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight={500}
        >
          {data[i].h}:00
        </text>
      ))}
    </svg>
  );
}