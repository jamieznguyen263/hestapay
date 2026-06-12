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
 * HeroProductSurface
 *
 * A cropped monitoring workspace — NOT a dashboard mockup.
 *
 * Composition (horizontal bands, no left/right split):
 *   [Toolbar]
 *   [Full-width auth monitoring chart — dominant anchor]
 *   [Incident context strip — route health + selected incident]
 *   [Affected locations table — dense, operational]
 *
 * No permanent sidebar. No "chart-left + panel-right" template.
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

        {/* ===== CHART: Full-width, dominant ===== */}
        <div className="px-4 pt-3 pb-1" style={{ minHeight: "285px" }}>
          {/* Compact summary row above chart */}
          <div className="flex items-center gap-6 mb-1">
            <div>
              <span className="text-[11px] text-[#5B6475] font-medium">
                Captured today
              </span>
              <span className="ml-1.5 text-[15px] font-bold text-[#0F172A] tabular-nums">
                $184,920
              </span>
            </div>
            <div>
              <span className="text-[11px] text-[#5B6475] font-medium">
                Auth rate
              </span>
              <span className="ml-1.5 text-[15px] font-bold text-emerald-600 tabular-nums">
                98.72%
              </span>
            </div>
            <div>
              <span className="text-[11px] text-[#5B6475] font-medium">
                Active routes
              </span>
              <span className="ml-1.5 text-[15px] font-bold text-[#0F172A] tabular-nums">
                6/7
              </span>
            </div>

            {/* Legend */}
            <div className="ml-auto flex items-center gap-3">
              <span className="flex items-center gap-1 text-[11px] text-[#5B6475]">
                <span className="h-2 w-2 rounded-sm bg-[#E0E5EC] border border-[#CFD6E0]" />
                Volume
              </span>
              <span className="flex items-center gap-1 text-[11px] text-[#5B6475]">
                <span className="h-0.5 w-3.5 bg-emerald-500 rounded-full" />
                Auth rate
              </span>
              <span className="flex items-center gap-1 text-[11px] text-amber-600">
                <span className="h-0.5 w-3.5 bg-amber-400 rounded-full" />
                SLA 98.5%
              </span>
            </div>
          </div>

          <AuthRateChart />
        </div>

        {/* ===== INCIDENT CONTEXT STRIP ===== */}
        <div className="border-t border-[#EBEEF2] bg-white px-4 py-3 flex items-start gap-6">
          {/* Selected incident — Rte C */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0" />
              <span className="text-[12px] font-semibold text-[#0F172A]">
                Rte C — Overflow: Auth degraded (82.1%)
              </span>
              <span className="text-[11px] text-[#94A3B8]">14:20</span>
            </div>
            <div className="flex items-center gap-4 flex-wrap text-[12px]">
              <span className="text-[#5B6475]">
                <span className="text-[#94A3B8]">Fallback:</span>{" "}
                <span className="font-medium text-[#0F172A]">
                  Rte C → Rte E engaged
                </span>
              </span>
              <span className="text-emerald-600 font-medium text-[11px]">
                Auto-recovery active
              </span>
              <span className="text-[#D0D5DD]">|</span>
              <span className="text-[#5B6475]">
                <span className="text-[#94A3B8]">Latency Δ:</span>{" "}
                <span className="font-semibold text-amber-600 tabular-nums">
                  +526ms
                </span>
              </span>
              <span className="text-[#D0D5DD]">|</span>
              <span className="text-[#5B6475]">
                <span className="text-[#94A3B8]">Affected:</span>{" "}
                <span className="font-medium text-[#0F172A] tabular-nums">
                  25 txns · $4,820 in flight
                </span>
              </span>
              <span className="text-[#D0D5DD]">|</span>
              <span className="text-[#5B6475] text-[11px]">
                Gateway timeout · 3 attempts
              </span>
            </div>
          </div>

          {/* Route health mini-bars — compact */}
          <div className="shrink-0 flex items-center gap-3">
            {[
              { name: "A", rate: 99.4, degraded: false },
              { name: "B", rate: 98.8, degraded: false },
              { name: "C", rate: 82.1, degraded: true },
              { name: "D", rate: 97.9, degraded: false },
            ].map((r) => (
              <div key={r.name} className="flex items-center gap-1.5">
                <span className="text-[11px] font-medium text-[#5B6475] w-3">
                  {r.name}
                </span>
                <div className="w-10 h-1.5 rounded-full bg-[#E8ECF1] overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      r.degraded ? "bg-amber-500" : "bg-emerald-500"
                    }`}
                    style={{ width: `${r.rate}%` }}
                  />
                </div>
                <span
                  className={`text-[11px] font-semibold tabular-nums ${
                    r.degraded ? "text-amber-600" : "text-emerald-600"
                  }`}
                >
                  {r.rate.toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== AFFECTED LOCATIONS TABLE ===== */}
        <div className="border-t border-[#EBEEF2] bg-[#FAFBFC]">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-[#EBEEF2]">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span className="text-[11px] font-semibold text-[#0F172A]">
              Locations routed via degraded Rte C — rerouting in progress
            </span>
            <span className="text-[11px] text-[#94A3B8]">5 affected</span>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-[11px] font-medium text-[#5B6475] border-b border-[#EBEEF2]">
                <th className="px-4 py-2 font-medium">Location</th>
                <th className="px-3 py-2 font-medium">Route</th>
                <th className="px-3 py-2 font-medium text-right">
                  Txns rerouted
                </th>
                <th className="px-3 py-2 font-medium text-right">
                  Latency baseline
                </th>
                <th className="px-3 py-2 font-medium text-right">
                  Latency current
                </th>
                <th className="px-4 py-2 font-medium">Recovery</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Northline Bistro #4",
                  route: "C → E",
                  rerouted: 12,
                  baseline: "298ms",
                  current: "608ms",
                  recovery: "Active",
                },
                {
                  name: "Northline Kitchen #9",
                  route: "C → E",
                  rerouted: 8,
                  baseline: "312ms",
                  current: "597ms",
                  recovery: "Active",
                },
                {
                  name: "Northline Café #22",
                  route: "C → E",
                  rerouted: 5,
                  baseline: "285ms",
                  current: "483ms",
                  recovery: "Stabilized",
                },
                {
                  name: "Northline Taproom #31",
                  route: "C → E",
                  rerouted: 3,
                  baseline: "301ms",
                  current: "412ms",
                  recovery: "Recovered",
                },
                {
                  name: "Northline Express #17",
                  route: "C → E",
                  rerouted: 2,
                  baseline: "276ms",
                  current: "354ms",
                  recovery: "Recovered",
                },
              ].map((loc) => (
                <tr
                  key={loc.name}
                  className="border-b border-[#EBEEF2] last:border-b-0 hover:bg-white/70 transition-colors"
                >
                  <td className="px-4 py-2 text-[12px] font-medium text-[#0F172A]">
                    {loc.name}
                  </td>
                  <td className="px-3 py-2 text-[12px] text-[#5B6475] tabular-nums">
                    {loc.route}
                  </td>
                  <td className="px-3 py-2 text-[12px] text-[#5B6475] tabular-nums text-right">
                    {loc.rerouted}
                  </td>
                  <td className="px-3 py-2 text-[12px] text-[#94A3B8] tabular-nums text-right">
                    {loc.baseline}
                  </td>
                  <td className="px-3 py-2 text-[12px] font-medium text-amber-600 tabular-nums text-right">
                    {loc.current}
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-medium rounded px-2 py-0.5 ${
                        loc.recovery === "Recovered"
                          ? "text-emerald-700 bg-emerald-50 border border-emerald-200"
                          : loc.recovery === "Stabilized"
                            ? "text-emerald-600 bg-white border border-emerald-200"
                            : "text-amber-700 bg-white border border-amber-200"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          loc.recovery === "Recovered"
                            ? "bg-emerald-500"
                            : loc.recovery === "Stabilized"
                              ? "bg-emerald-400"
                              : "bg-amber-500"
                        }`}
                      />
                      {loc.recovery}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-center mt-3 text-[11px] text-[#94A3B8]">
        Internal preview · Northline Hospitality Group
      </p>
    </div>
  );
}

/**
 * AuthRateChart
 *
 * Full-width SVG monitoring chart — the dominant visual anchor.
 *
 * Design:
 * - Y-axis: 97.0%–99.8% (realistic global auth-rate range)
 * - Subtle volume bars as secondary context
 * - Auth-rate polyline as primary signal
 * - SLA line at 98.5% (dashed amber)
 * - One incident window highlighted at ~14:00–15:30
 * - Clean grid with labeled Y ticks and X hour labels
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

  // SVG dimensions
  const svgW = 800;
  const svgH = 250;
  const padL = 48;
  const padR = 12;
  const padT = 12;
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

  const xLabels = [
    { i: 0, label: "06:00" },
    { i: 2, label: "08:00" },
    { i: 4, label: "10:00" },
    { i: 6, label: "12:00" },
    { i: 8, label: "14:00" },
    { i: 10, label: "16:00" },
    { i: 12, label: "18:00" },
    { i: 14, label: "20:00" },
  ];

  const anomalyIdx = 9; // Index 9 = 15:00, value 97.8%

  // Incident window: data point 8–10 (14:00–16:00)
  const incStartX = xScale(8) - (chartW / n) * 0.5;
  const incEndX = xScale(10) + (chartW / n) * 0.5;
  const incWidth = incEndX - incStartX;

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: "visible" }}
    >
      {/* ===== Grid ===== */}
      {yTicks.map((tick) => {
        const y = yScale(tick);
        const isSLA = tick === 98.5;
        return (
          <g key={`grid-${tick}`}>
            {/* Horizontal grid line */}
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
            {/* Y-axis label */}
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
            {/* SLA label (right side) */}
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

      {/* ===== Volume bars (secondary, behind line) ===== */}
      {data.map((d, i) => {
        const barH = (d.v / 100) * chartH * 0.85;
        const barW = Math.max(2.5, (chartW / n) * 0.5);
        const barX = xScale(i) - barW / 2;
        const barY = padT + chartH - barH;
        const isIncident = i >= 8 && i <= 10;
        return (
          <rect
            key={`vol-${i}`}
            x={barX}
            y={barY}
            width={barW}
            height={Math.max(1, barH)}
            rx={1}
            fill={
              isIncident
                ? "rgba(245,158,11,0.10)"
                : "rgba(203,213,225,0.20)"
            }
          />
        );
      })}

      {/* ===== Incident window highlight ===== */}
      <rect
        x={incStartX}
        y={padT}
        width={incWidth}
        height={chartH}
        fill="rgba(245,158,11,0.035)"
        rx={3}
      />

      {/* ===== Auth rate line (primary) ===== */}
      <polyline
        points={linePoints}
        fill="none"
        stroke="#10B981"
        strokeWidth="1.6"
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Subtle glow */}
      <polyline
        points={linePoints}
        fill="none"
        stroke="rgba(16,185,129,0.12)"
        strokeWidth="5"
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* ===== Data dots ===== */}
      {data.map((d, i) => {
        const cx = xScale(i);
        const cy = yScale(d.a);
        const isAnomaly = i === anomalyIdx;
        return (
          <circle
            key={`dot-${i}`}
            cx={cx}
            cy={cy}
            r={isAnomaly ? 3 : 1.5}
            fill={isAnomaly ? "#F59E0B" : "#10B981"}
            stroke="white"
            strokeWidth={isAnomaly ? 2 : 1}
            vectorEffect="non-scaling-stroke"
          />
        );
      })}

      {/* ===== Incident window border (subtle) ===== */}
      <rect
        x={incStartX}
        y={padT}
        width={incWidth}
        height={chartH}
        fill="none"
        stroke="rgba(245,158,11,0.28)"
        strokeWidth="0.75"
        strokeDasharray="3,3"
        rx={3}
        vectorEffect="non-scaling-stroke"
      />

      {/* ===== X-axis labels ===== */}
      {xLabels.map(({ i, label }) => (
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
          {label}
        </text>
      ))}
    </svg>
  );
}