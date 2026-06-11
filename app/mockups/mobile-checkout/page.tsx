import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Mobile Checkout Mockup",
};

/* ---------- Icons ---------- */
function ChevronLeft() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}
function CardIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}
function WalletIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

export default function MobileCheckoutPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface p-8">
      {/* ── Phone frame ── */}
      <div className="relative w-full max-w-[390px] overflow-hidden rounded-[48px] border-[6px] border-foreground/20 bg-background shadow-2xl shadow-foreground/10">
        {/* Status bar */}
        <div className="flex items-center justify-between bg-background px-8 pt-4 pb-2">
          <span className="text-[11px] font-semibold text-foreground">9:41</span>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full border-2 border-foreground" />
            <div className="h-3 w-3 rounded-full border-2 border-foreground" />
          </div>
        </div>

        {/* ── Merchant header ── */}
        <header className="flex items-center gap-3 border-b border-border bg-background px-6 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl text-muted">
            <ChevronLeft />
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="flex h-2 w-2 rounded-full bg-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">HestaPay</p>
              <p className="text-[11px] text-muted">Payment checkout</p>
            </div>
          </div>
        </header>

        {/* ── Scrollable content ── */}
        <div className="max-h-[600px] overflow-y-auto px-6 py-5 space-y-6">

          {/* ── Amount + order summary ── */}
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
            <p className="text-xs text-muted uppercase tracking-wide">Payment amount</p>
            <p className="mt-2 text-4xl font-bold text-foreground">{"\u2014"}</p>
            <div className="mt-4 space-y-2.5 border-t border-border pt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Subtotal</span>
                <span className="font-medium text-foreground">{"\u2014"}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Tax</span>
                <span className="font-medium text-foreground">{"\u2014"}</span>
              </div>
              <div className="flex items-center justify-between text-sm border-t border-border pt-2.5">
                <span className="font-semibold text-foreground">Total</span>
                <span className="font-bold text-primary text-lg">{"\u2014"}</span>
              </div>
            </div>
          </div>

          {/* ── Tip selection ── */}
          <div>
            <p className="text-sm font-semibold text-foreground">Add a tip</p>
            <div className="mt-3 grid grid-cols-4 gap-2.5">
              {["15%", "18%", "20%", "Custom"].map((tip, i) => (
                <div
                  key={tip}
                  className={`rounded-xl border px-3 py-3 text-sm font-medium text-center transition-colors ${
                    i === 1
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border bg-surface text-muted"
                  }`}
                >
                  {tip}
                </div>
              ))}
            </div>
          </div>

          {/* ── Payment method ── */}
          <div>
            <p className="text-sm font-semibold text-foreground">Payment method</p>
            <div className="mt-3 space-y-2.5">
              {[
                { label: "Credit or debit card", icon: CardIcon, active: true },
                { label: "Digital wallet", icon: WalletIcon, active: false },
              ].map((method) => (
                <div
                  key={method.label}
                  className={`flex w-full items-center gap-4 rounded-xl border p-4 ${
                    method.active ? "border-primary bg-primary/5" : "border-border bg-surface"
                  }`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${method.active ? "bg-primary/15 text-primary" : "bg-muted/10 text-muted"}`}>
                    <method.icon />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{method.label}</p>
                    <p className="text-[11px] text-muted">{method.active ? "Selected" : "Tap to select"}</p>
                  </div>
                  {method.active && (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                      <CheckIcon />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Card input ── */}
          <div className="rounded-2xl border border-border bg-background p-5 space-y-4 shadow-sm">
            <div>
              <label className="block text-[11px] font-medium text-muted uppercase tracking-wide">Card number</label>
              <div className="mt-1.5 h-11 w-full rounded-xl border border-border bg-surface" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-medium text-muted uppercase tracking-wide">Expiry</label>
                <div className="mt-1.5 h-11 w-full rounded-xl border border-border bg-surface" />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-muted uppercase tracking-wide">CVC</label>
                <div className="mt-1.5 h-11 w-full rounded-xl border border-border bg-surface" />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-medium text-muted uppercase tracking-wide">Name on card</label>
              <div className="mt-1.5 h-11 w-full rounded-xl border border-border bg-surface" />
            </div>
          </div>

          {/* ── Pay CTA ── */}
          <div className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-base font-semibold text-white shadow-md shadow-primary/20">
            <LockIcon />
            Pay {"\u2014"}
          </div>

          {/* ── Secure payment note ── */}
          <div className="flex items-center justify-center gap-2 pb-2">
            <LockIcon />
            <span className="text-[11px] text-muted">Secure payment via trusted infrastructure partners</span>
          </div>

          {/* ── Receipt / success preview ── */}
          <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
            <div className="flex flex-col items-center justify-center py-4 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/5 text-primary/30">
                <CheckIcon />
              </div>
              <p className="mt-3 text-sm font-medium text-foreground">Payment receipt</p>
              <p className="mt-1 text-xs text-muted">Receipt appears here after confirmation</p>
              <span className="mt-2 font-bold text-lg text-primary">{"\u2014"}</span>
            </div>
          </div>

          <div className="h-4" />
        </div>

        {/* ── Home indicator ── */}
        <div className="flex justify-center bg-background pb-2 pt-1">
          <div className="h-1 w-32 rounded-full bg-border" />
        </div>
      </div>
    </div>
  );
}