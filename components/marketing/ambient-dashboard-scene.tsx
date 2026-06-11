"use client";

import { useState, useEffect } from "react";

/* ------------------------------------------------------------------ */
/* Safe placeholder data                                              */
/* ------------------------------------------------------------------ */
const EM = "\u2014";

const summaryCards = [
  { label: "Today\u2019s revenue", value: EM },
  { label: "Transactions", value: EM },
  { label: "Avg. ticket", value: EM },
  { label: "Refund rate", value: EM },
] as const;

const transactions = [
  { type: "Card payment", amount: EM, status: "Completed" },
  { type: "Payment link", amount: EM, status: "Pending" },
  { type: "QR payment", amount: EM, status: "Completed" },
  { type: "Refund", amount: EM, status: "Refunded" },
  { type: "Card payment", amount: EM, status: "Completed" },
] as const;

const chartBars = [
  { label: "M", h: 30 },
  { label: "T", h: 55 },
  { label: "W", h: 40 },
  { label: "T", h: 70 },
  { label: "F", h: 35 },
  { label: "S", h: 60 },
  { label: "S", h: 45 },
];

/* ---------- Icons ---------- */
function ChevronDown() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
function StatusChip({ status }: { status: string }) {
  const map: Record<string, string> = {
    Completed: "bg-primary/10 text-primary",
    Pending: "bg-muted/15 text-muted",
    Refunded: "bg-muted/15 text-muted",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-medium ${
        map[status] ?? "bg-muted/15 text-muted"
      }`}
    >
      <svg className="h-1.5 w-1.5" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="4" fill="currentColor" />
      </svg>
      {status}
    </span>
  );
}

/* ================================================================== */
/* Ambient scene -- 3D depth + soft auto-pulse chart, no cursor       */
/* ================================================================== */
export default function AmbientDashboardScene() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);

  // Detect reduced-motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Soft 6-second ambient pulse loop
  useEffect(() => {
    if (reducedMotion) return;

    let phase = 0;
    const tick = () => setPulseActive((phase % 2) === 1);

    // Pulse at 3s, rest at 3s = 6s cycle
    const interval = setInterval(() => {
      phase++;
      tick();
    }, 3000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className="relative w-full select-none">
      <div
        className="relative overflow-hidden rounded-3xl border border-border bg-background"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          boxShadow:
            "0 0 0 1px rgba(0,0,0,0.03), 0 6px 32px -6px rgba(0,0,0,0.08), 0 2px 12px -2px rgba(16,185,129,0.04), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        <div
          className="relative"
          style={{
            transform: "rotateX(2deg) rotateY(-1.5deg)",
            transformOrigin: "center center",
          }}
        >
          <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
            {/* Summary cards */}
            <div className="grid gap-2 sm:gap-3 grid-cols-2 sm:grid-cols-4">
              {summaryCards.map((card, i) => (
                <div
                  key={card.label}
                  className={`rounded-2xl border p-3 sm:p-4 transition-all duration-600 ${
                    i === 0
                      ? "border-primary/15 bg-background shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)]"
                      : "border-border bg-background shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)]"
                  }`}
                  style={{
                    transform: i === 0 ? "translateZ(3px)" : "translateZ(0px)",
                  }}
                >
                  <p className="text-[9px] sm:text-[10px] text-muted uppercase tracking-wide">
                    {card.label}
                  </p>
                  <p className="mt-1.5 sm:mt-2 text-lg sm:text-xl font-bold text-primary">
                    {card.value}
                  </p>
                  <p className="mt-0.5 text-[8px] sm:text-[10px] text-muted">Preview</p>
                </div>
              ))}
            </div>

            {/* Filter row */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <h2 className="text-[10px] sm:text-xs font-semibold text-foreground mr-1">
                Recent transactions
              </h2>
              {["All types", "All statuses", "Last 7 days"].map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-1 rounded-lg border border-border px-2 py-1 sm:px-2.5 sm:py-1.5 text-[9px] sm:text-[11px] text-muted"
                >
                  {f}
                  <ChevronDown />
                </div>
              ))}
              <span className="ml-auto text-[9px] sm:text-[11px] text-muted">
                View all &rsaquo;
              </span>
            </div>

            {/* Chart */}
            <div
              className={`rounded-xl sm:rounded-2xl border border-border bg-surface/50 p-3 sm:p-4 transition-all duration-700 ${
                pulseActive
                  ? "border-primary/15 shadow-[0_0_20px_-4px_rgba(16,185,129,0.06),inset_0_1px_0_rgba(255,255,255,0.5)]"
                  : "shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_2px_6px_-2px_rgba(0,0,0,0.04)]"
              }`}
              style={{ transform: "translateZ(-1px)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[10px] sm:text-xs font-semibold text-foreground">
                  Revenue overview
                </h3>
                <div className="flex items-center gap-1 rounded-lg border border-border px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] text-muted bg-background">
                  Last 7 days
                  <ChevronDown />
                </div>
              </div>
              <div className="flex items-end gap-1.5 sm:gap-2 h-[100px] sm:h-[130px]">
                {chartBars.map((d) => {
                  const h = pulseActive ? d.h * 1.06 : d.h;
                  return (
                    <div key={d.label} className="flex flex-1 flex-col items-center gap-1.5">
                      <div
                        className="w-full rounded-t-lg transition-all duration-700 ease-out"
                        style={{
                          height: `${h}%`,
                          background: pulseActive
                            ? "linear-gradient(to top, rgba(16,185,129,0.24), rgba(16,185,129,0.06))"
                            : "linear-gradient(to top, rgba(16,185,129,0.15), rgba(16,185,129,0.04))",
                        }}
                      />
                      <span className="text-[7px] sm:text-[9px] text-muted">{d.label}</span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-2 text-center text-[8px] sm:text-[10px] text-muted">
                Preview {EM} live chart data appears here
              </p>
            </div>

            {/* Transaction table */}
            <div
              className="rounded-xl sm:rounded-2xl border border-border bg-background overflow-hidden shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)]"
              style={{ transform: "translateZ(1px)" }}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-border text-[8px] sm:text-[10px] text-muted uppercase tracking-wide">
                      <th className="py-2 pl-3 sm:pl-4 font-medium">Type</th>
                      <th className="py-2 font-medium">Amount</th>
                      <th className="py-2 font-medium">Status</th>
                      <th className="py-2 pr-3 sm:pr-4 font-medium" />
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx, i) => (
                      <tr
                        key={i}
                        className="border-b border-border last:border-0 hover:bg-surface/50 transition-colors"
                      >
                        <td className="py-2.5 pl-3 sm:pl-4 text-[10px] sm:text-xs text-foreground">
                          {tx.type}
                        </td>
                        <td className="py-2.5 text-[10px] sm:text-xs text-muted">
                          {tx.amount}
                        </td>
                        <td className="py-2.5">
                          <StatusChip status={tx.status} />
                        </td>
                        <td className="py-2.5 pr-3 sm:pr-4">
                          <button
                            type="button"
                            className="rounded-lg px-2 py-1 text-[9px] sm:text-[10px] font-medium text-muted hover:bg-surface hover:text-foreground transition-colors"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {reducedMotion && (
        <p className="mt-3 text-center text-[9px] sm:text-[11px] text-muted">
          Static preview {EM} ambient motion disabled for reduced motion
        </p>
      )}
    </div>
  );
}