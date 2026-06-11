import type { Metadata } from "next";
import MockupShell from "@/app/mockups/_components/shell";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Payment Link Creation Mockup",
};

/* ---------- Icons ---------- */
function LinkIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}
function CopyIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}
function SmsIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function QRIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2m0 0H8m0 0a5 5 0 01-5-5 5 5 0 015-5m5 0h2m-2 0V4m2 0v1m-8 7h2m-2 0V8m2 3h4m-2 0V8m2 3v3m-8-3V8m2 3v3" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

const shareMethods = [
  { label: "Copy link", icon: CopyIcon },
  { label: "SMS", icon: SmsIcon },
  { label: "Email", icon: MailIcon },
  { label: "QR code", icon: QRIcon },
];

export default function PaymentLinkCreationPage() {
  return (
    <MockupShell activeNav="Payment Links" showBack backLabel="Back to Dashboard">
      <div className="flex-1 space-y-6 p-6">

        {/* Page heading */}
        <div>
          <h1 className="text-xl font-bold text-foreground">Create Payment Link</h1>
          <p className="mt-1 text-sm text-muted">Generate a shareable payment link in seconds</p>
        </div>

        {/* Split layout: form + preview */}
        <div className="grid gap-6 lg:grid-cols-5 flex-1">
          {/* Left: form */}
          <div className="space-y-8 lg:col-span-3">
            {/* Amount + label */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground">Amount</label>
                <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3">
                  <span className="text-muted text-sm">$</span>
                  <span className="flex-1 text-sm font-medium text-foreground">{"\u2014"}</span>
                </div>
                <p className="mt-1.5 text-xs text-muted">Enter the payment amount (or leave open for customer to enter)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground">Label or reference</label>
                <div className="mt-1.5 rounded-xl border border-border bg-surface px-4 py-3">
                  <span className="text-sm font-medium text-foreground">{"\u2014"}</span>
                </div>
                <p className="mt-1.5 text-xs text-muted">For your internal tracking - not shown to the customer</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground">Description <span className="text-muted font-normal">(optional)</span></label>
                <div className="mt-1.5 rounded-xl border border-border bg-surface px-4 py-3">
                  <span className="text-sm font-medium text-foreground">{"\u2014"}</span>
                </div>
                <p className="mt-1.5 text-xs text-muted">Shown to the customer on the payment page</p>
              </div>
            </div>

            {/* Expiration + payment methods */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground">Expiration</label>
                <div className="mt-1.5 flex items-center gap-1.5 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground">
                  <ClockIcon />
                  <span className="flex-1">24 hours</span>
                  <ChevronDown />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground">Allowed payment methods</label>
                <div className="mt-2 flex flex-wrap gap-3">
                  {[
                    { label: "Card", checked: true },
                    { label: "Digital wallet", checked: true },
                    { label: "Bank transfer", checked: false },
                  ].map((method) => (
                    <div
                      key={method.label}
                      className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm"
                    >
                      <div className={`flex h-4 w-4 items-center justify-center rounded border ${method.checked ? "border-primary bg-primary" : "border-border bg-transparent"}`}>
                        {method.checked && <CheckIcon />}
                      </div>
                      <span className={method.checked ? "text-foreground" : "text-muted"}>{method.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Share options */}
            <div className="border-t border-border pt-6">
              <label className="block text-sm font-medium text-foreground">Share options</label>
              <div className="mt-3 grid grid-cols-4 gap-3">
                {shareMethods.map((method) => (
                  <div
                    key={method.label}
                    className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-3 text-center transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <method.icon />
                    </div>
                    <span className="text-xs font-medium text-foreground">{method.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white shadow-sm shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-md hover:shadow-primary/20 active:scale-[0.98]">
                <LinkIcon />
                Create Link
              </div>
              <div className="rounded-xl border border-border bg-transparent px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-surface hover:border-primary/30 active:scale-[0.98]">
                Cancel
              </div>
            </div>
          </div>

          {/* Right: live preview */}
          <div className="lg:col-span-2">
            <div className="sticky top-6 space-y-4">
              <h2 className="text-sm font-semibold text-foreground">Preview</h2>

              {/* Checkout preview card */}
              <div className="rounded-2xl border border-border bg-background p-6 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs font-medium text-foreground">HestaPay</span>
                </div>
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="text-xs text-muted uppercase tracking-wide">Payment amount</p>
                  <p className="mt-1 text-3xl font-bold text-foreground">{"\u2014"}</p>
                  <p className="mt-2 text-sm text-muted">{"\u2014"}</p>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl border border-border bg-background p-3">
                      <p className="text-[10px] text-muted uppercase tracking-wide">Card number</p>
                      <div className="mt-1 h-4 w-3/4 rounded bg-muted/10" />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 rounded-xl border border-border bg-background p-3">
                        <p className="text-[10px] text-muted uppercase tracking-wide">Expiry</p>
                        <div className="mt-1 h-4 w-1/2 rounded bg-muted/10" />
                      </div>
                      <div className="flex-1 rounded-xl border border-border bg-background p-3">
                        <p className="text-[10px] text-muted uppercase tracking-wide">CVC</p>
                        <div className="mt-1 h-4 w-1/3 rounded bg-muted/10" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 w-full rounded-xl bg-primary py-3 text-center text-sm font-medium text-white shadow-sm shadow-primary/25">
                    Pay {"\u2014"}
                  </div>
                  <p className="mt-3 text-center text-[11px] text-muted">Secure payment via trusted infrastructure partners</p>
                </div>
              </div>

              {/* Share preview panel */}
              <div className="rounded-2xl border border-border bg-background p-5 shadow-md">
                <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide">Share your link</h3>
                <div className="mt-3 flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3">
                  <span className="flex-1 text-sm text-muted truncate">hestapay.com/pay/{"\u2014"}</span>
                  <div className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-background">
                    <CopyIcon />
                    Copy
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  {shareMethods.map((method) => (
                    <div key={method.label} className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-primary/30 hover:text-primary" title={method.label}>
                      <method.icon />
                    </div>
                  ))}
                </div>
              </div>

              {/* Link status */}
              <div className="rounded-2xl border border-border bg-background p-5 shadow-md">
                <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide">Link status</h3>
                <div className="mt-4 flex flex-col items-center justify-center py-4 text-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/10 text-muted">
                    <div className="flex h-2 w-2 rounded-full bg-muted" />
                  </div>
                  <p className="mt-2 text-xs text-muted">Not yet created</p>
                  <p className="mt-1 text-[11px] text-muted">Status appears after link is shared</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}