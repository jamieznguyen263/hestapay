"use client";

import { useState } from "react";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";

type BusinessType = "restaurants" | "nail-salons" | "retail" | "home-services";

interface TabData {
  label: string;
  sublabel: string;
  headline: string;
  copy: string;
  bullets: { title: string; desc: string }[];
  dotColor: string;
  accentBg: string;
  accentBorder: string;
}

const tabData: Record<BusinessType, TabData> = {
  restaurants: {
    label: "Restaurants",
    sublabel: "Floor + table payments",
    headline: "Payments that move at restaurant speed.",
    copy: "QR at the table, split checks, tipped transactions, and day-end settlement — orchestrated so your floor runs smoothly and your books close cleanly.",
    bullets: [
      { title: "Table-side QR with tips", desc: "Guests scan, tip, and pay without waiting for a terminal. Tips flow directly into shift summaries." },
      { title: "Split tenders handled", desc: "One table, multiple cards, one reconciliation entry. No manual math at end of shift." },
      { title: "Day-end settlement visibility", desc: "Lunch and dinner volume broken down by channel, server, and payment type before the next service." },
    ],
    dotColor: "bg-emerald-500",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-200",
  },
  "nail-salons": {
    label: "Nail Salons",
    sublabel: "Appointment + deposit flow",
    headline: "From booking deposit to final checkout — seamless.",
    copy: "Capture deposits at booking, prevent double charges, split commissions, and reconcile appointment-linked payments in one view.",
    bullets: [
      { title: "Booking deposit capture", desc: "Deposits collected at time of booking. Automatically applied to final service total at checkout." },
      { title: "Duplicate prevention", desc: "Appointment-linked payment context prevents accidental double charges when deposits are in play." },
      { title: "Commission-ready reporting", desc: "Technician-level payment reports with deposit status, service totals, and commission splits." },
    ],
    dotColor: "bg-amber-500",
    accentBg: "bg-amber-50",
    accentBorder: "border-amber-200",
  },
  retail: {
    label: "Retail",
    sublabel: "Counter + multi-location",
    headline: "Every lane, every location, one payment surface.",
    copy: "Card-present at the counter, phone orders, refunds across locations — all routed through one orchestration layer with lane-level visibility.",
    bullets: [
      { title: "Lane and device visibility", desc: "See authorization rates and volume by lane, device, and location — not just by processor batch." },
      { title: "Refund and retry flows", desc: "Refunds initiated from the same surface. Failed payments retried before the customer leaves the counter." },
      { title: "Multi-location route performance", desc: "Compare route health, fallback rates, and settlement timing across every retail location." },
    ],
    dotColor: "bg-blue-500",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-200",
  },
  "home-services": {
    label: "Home Services",
    sublabel: "Field pay + invoice follow-up",
    headline: "Get paid on-site, on time — every job.",
    copy: "Send payment links after every job, track field-team collection status, and recover delayed webhooks before they become revenue gaps.",
    bullets: [
      { title: "Mobile pay for field teams", desc: "Technicians send payment links or accept QR on-site. No terminal hardware required in the field." },
      { title: "Invoice follow-up tracking", desc: "See which invoices are outstanding, which clients have viewed the link, and which need a nudge." },
      { title: "Delayed webhook recovery", desc: "When processor webhooks lag, HestaPay retries and reconciles — so you're not manually chasing job payments." },
    ],
    dotColor: "bg-teal-500",
    accentBg: "bg-teal-50",
    accentBorder: "border-teal-200",
  },
};

const tabMerchants: Record<BusinessType, { name: string; context: string }> = {
  restaurants: { name: "Harbor Table", context: "Dinner service · 18:00–22:00" },
  "nail-salons": { name: "Studio Ledger Spa", context: "Today's appointments · 3 techs" },
  retail: { name: "Willow Retail Group", context: "3 locations · Midtown + Downtown" },
  "home-services": { name: "FieldKit Services", context: "Field team · 6 techs · 3-day close" },
};

export default function BusinessTypeSelector() {
  const [active, setActive] = useState<BusinessType>("restaurants");
  const data = tabData[active];
  const merchant = tabMerchants[active];

  return (
    <SectionWrapper className="bg-white">
      <Container>
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
            Industry fit
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px] leading-[1.08]">
            One payment engine.
            <br />
            Four business rhythms.
          </h2>
          <p className="mt-5 text-[16px] text-[#5B6475] leading-relaxed">
            The same HestaPay orchestration core, tuned to how each type of
            local business actually gets paid.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex border-b border-[#E6EBF2] mb-10 overflow-x-auto">
          {(Object.keys(tabData) as BusinessType[]).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-2 px-5 py-3.5 text-[14px] font-semibold border-b-2 transition-colors whitespace-nowrap ${
                active === key
                  ? "border-emerald-500 text-[#0F172A]"
                  : "border-transparent text-[#5B6475] hover:text-[#0F172A]"
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${tabData[key].dotColor}`} />
              {tabData[key].label}
            </button>
          ))}
        </div>

        <div className="grid gap-10 items-start lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className={`inline-flex items-center gap-1.5 rounded-md border ${data.accentBorder} ${data.accentBg} px-3 py-1 text-[12px] font-medium text-[#0F172A] mb-5`}>
              <span className={`h-1.5 w-1.5 rounded-full ${data.dotColor}`} />
              {data.sublabel}
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl leading-tight">
              {data.headline}
            </h3>
            <p className="mt-4 text-[15px] text-[#5B6475] leading-relaxed">{data.copy}</p>
            <div className="mt-8 space-y-5">
              {data.bullets.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="text-[14px] font-semibold text-[#0F172A]">{b.title}</h4>
                    <p className="mt-1 text-[13px] text-[#5B6475] leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <WorkflowVisual type={active} merchant={merchant} />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

function WorkflowVisual({ type, merchant }: { type: BusinessType; merchant: { name: string; context: string } }) {
  switch (type) {
    case "restaurants": return <RestaurantWorkflow merchant={merchant} />;
    case "nail-salons": return <SalonWorkflow merchant={merchant} />;
    case "retail": return <RetailWorkflow merchant={merchant} />;
    case "home-services": return <HomeServicesWorkflow merchant={merchant} />;
  }
}

/* ========== RESTAURANT — active floor with payment states ========== */
function RestaurantWorkflow({ merchant }: { merchant: { name: string; context: string } }) {
  return (
    <div className="rounded-[16px] border border-[#DDE1E6] bg-white overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06),0_0_1px_rgba(0,0,0,0.04)]">
      {/* Chrome — real app header */}
      <div className="flex items-center gap-3 px-5 py-2.5 border-b border-[#E6EBF2] bg-white">
        <span className="text-[12px] font-semibold text-[#0F172A]">{merchant.name}</span>
        <span className="text-[10px] text-[#5B6475]">{merchant.context}</span>
        <div className="ml-auto flex items-center gap-2">
          <div className="flex rounded-md border border-[#E6EBF2] bg-[#F8F9FA] p-0.5 text-[10px]">
            <span className="px-2.5 py-1 rounded font-medium bg-white text-[#0F172A] shadow-sm">Floor</span>
            <span className="px-2.5 py-1 text-[#5B6475]">Staff</span>
            <span className="px-2.5 py-1 text-[#5B6475]">Closeout</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        {/* Summary row */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[13px] font-semibold text-[#0F172A]">Active floor</p>
            <p className="text-[10px] text-[#5B6475] mt-0.5">8 tables · 2 servers · dinner</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-[#5B6475] uppercase tracking-wide">Closed tonight</p>
            <p className="text-[16px] font-bold text-emerald-600 tabular-nums">$1,188</p>
          </div>
        </div>

        {/* Table grid — tighter, more operational */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { name: "T1", status: "Paid", total: "$142", tip: "18% · $25.56", color: "emerald", items: "2" },
            { name: "T2", status: "Open", total: "$89", tip: "—", color: "slate", items: "3" },
            { name: "T4", status: "Paid", total: "$210", tip: "20% · $42.00", color: "emerald", items: "4" },
            { name: "T5", status: "Open", total: "$67", tip: "—", color: "slate", items: "2" },
            { name: "T7", status: "Split", total: "$156", tip: "15%", color: "amber", items: "3", split: true },
            { name: "T8", status: "Paid", total: "$94", tip: "22% · $20.68", color: "emerald", items: "1" },
            { name: "T9", status: "QR scan", total: "$118", tip: "—", color: "blue", items: "2" },
            { name: "T12", status: "Closed", total: "$312", tip: "18% · $56.16", color: "emerald", items: "5" },
          ].map((t) => (
            <div
              key={t.name}
              className={`rounded-lg border p-2.5 ${
                t.split
                  ? "border-amber-200 bg-amber-50/60"
                  : t.color === "emerald"
                  ? "border-emerald-100 bg-emerald-50/40"
                  : t.color === "blue"
                  ? "border-blue-100 bg-blue-50/40"
                  : "border-[#E6EBF2] bg-white"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-[10px] font-semibold text-[#0F172A]">{t.name}</p>
                <span className={`h-1.5 w-1.5 rounded-full ${
                  t.color === "emerald" ? "bg-emerald-500" : t.color === "amber" ? "bg-amber-500" : t.color === "blue" ? "bg-blue-500" : "bg-[#94A3B8]"
                }`} />
              </div>
              <p className="text-[11px] font-bold text-[#0F172A] tabular-nums">{t.total}</p>
              <p className="text-[8px] text-[#5B6475]">{t.status} · {t.items} items</p>
              <p className="text-[8px] text-[#94A3B8]">{t.tip}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#E6EBF2] text-[10px]">
          <span className="text-[#5B6475]">6 paid · 2 open · 1 split pending</span>
          <span className="text-[#5B6475]">
            Volume: <span className="font-semibold text-[#0F172A]">$2,840</span>
          </span>
        </div>
      </div>
      <p className="text-center pb-4 text-[10px] text-[#94A3B8]">Internal preview · {merchant.name} floor view</p>
    </div>
  );
}

/* ========== SALON — appointment ledger with deposits ========== */
function SalonWorkflow({ merchant }: { merchant: { name: string; context: string } }) {
  return (
    <div className="rounded-[16px] border border-[#DDE1E6] bg-white overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06),0_0_1px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3 px-5 py-2.5 border-b border-[#E6EBF2] bg-white">
        <span className="text-[12px] font-semibold text-[#0F172A]">{merchant.name}</span>
        <span className="text-[10px] text-[#5B6475]">{merchant.context}</span>
        <div className="ml-auto">
          <div className="flex rounded-md border border-[#E6EBF2] bg-[#F8F9FA] p-0.5 text-[10px]">
            <span className="px-2.5 py-1 rounded font-medium bg-white text-[#0F172A] shadow-sm">Appointments</span>
            <span className="px-2.5 py-1 text-[#5B6475]">Deposits</span>
            <span className="px-2.5 py-1 text-[#5B6475]">Commission</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[13px] font-semibold text-[#0F172A]">Appointment ledger</p>
            <p className="text-[10px] text-[#5B6475] mt-0.5">14 appointments · 4 deposits held · $317 held</p>
          </div>
          <span className="text-[16px] font-bold text-amber-700 tabular-nums">$1,940 checkout</span>
        </div>

        {[
          { client: "Client K", service: "Gel set", deposit: "$25", due: "$82", status: "In service", color: "amber", tech: "Mia" },
          { client: "Client J", service: "Full set + design", deposit: "$40", due: "$115", status: "Waiting", color: "slate", tech: "Lena" },
          { client: "Client M", service: "Dip powder", deposit: "$30", due: "$65", status: "Checkout", color: "emerald", tech: "Mia" },
          { client: "Client L", service: "Pedicure", deposit: "Held", due: "$55", status: "Scheduled", color: "slate", tech: "Lena" },
        ].map((a) => (
          <div
            key={a.client}
            className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 mb-2 ${
              a.color === "amber" ? "border-amber-200 bg-amber-50/60" :
              a.color === "emerald" ? "border-emerald-200 bg-emerald-50/60" : "border-[#E6EBF2] bg-white"
            }`}
          >
            <span className="text-[11px] font-semibold text-[#0F172A] flex-1">{a.client}</span>
            <span className="text-[10px] text-[#5B6475] w-[100px]">{a.service}</span>
            <span className="text-[10px] text-[#94A3B8] w-[40px]">{a.tech}</span>
            <span className="text-[10px] font-medium text-amber-700 w-[36px] text-right">{a.deposit}</span>
            <span className="text-[10px] font-bold text-[#0F172A] w-[36px] text-right tabular-nums">{a.due}</span>
            <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium w-[80px] text-center ${
              a.color === "amber" ? "bg-amber-100 text-amber-700" :
              a.color === "emerald" ? "bg-emerald-100 text-emerald-700" : "bg-[#F8F9FA] text-[#5B6475]"
            }`}>{a.status}</span>
          </div>
        ))}

        <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#E6EBF2] text-[10px]">
          <span className="text-[#5B6475]">15% commission · 0 duplicates</span>
          <span className="text-emerald-600 font-medium">All deposits reconciled</span>
        </div>
      </div>
      <p className="text-center pb-4 text-[10px] text-[#94A3B8]">Internal preview · {merchant.name} appointments</p>
    </div>
  );
}

/* ========== RETAIL — lane/device activity ========== */
function RetailWorkflow({ merchant }: { merchant: { name: string; context: string } }) {
  return (
    <div className="rounded-[16px] border border-[#DDE1E6] bg-white overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06),0_0_1px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3 px-5 py-2.5 border-b border-[#E6EBF2] bg-white">
        <span className="text-[12px] font-semibold text-[#0F172A]">{merchant.name}</span>
        <span className="text-[10px] text-[#5B6475]">{merchant.context}</span>
        <div className="ml-auto">
          <div className="flex rounded-md border border-[#E6EBF2] bg-[#F8F9FA] p-0.5 text-[10px]">
            <span className="px-2.5 py-1 rounded font-medium bg-white text-[#0F172A] shadow-sm">Lanes</span>
            <span className="px-2.5 py-1 text-[#5B6475]">Routes</span>
            <span className="px-2.5 py-1 text-[#5B6475]">Refunds</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[13px] font-semibold text-[#0F172A]">Lane activity</p>
            <p className="text-[10px] text-[#5B6475] mt-0.5">847 txns today · 98.9% auth · $214 refunded</p>
          </div>
          <span className="text-[16px] font-bold text-emerald-600 tabular-nums">$32,950</span>
        </div>

        {[
          { lane: "Counter 1", location: "Midtown", txns: 312, volume: "$12,840", auth: "99.1%", lat: "312ms", color: "emerald" },
          { lane: "Counter 2", location: "Midtown", txns: 248, volume: "$9,420", auth: "98.7%", lat: "445ms", color: "emerald" },
          { lane: "Counter 1", location: "Downtown", txns: 195, volume: "$7,150", auth: "98.4%", lat: "521ms", color: "emerald" },
          { lane: "Online orders", location: "Both", txns: 92, volume: "$3,540", auth: "96.2%", lat: "842ms", color: "amber" },
        ].map((l) => (
          <div key={l.lane + l.location} className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 mb-2 ${l.color === "amber" ? "border-amber-200 bg-amber-50/60" : "border-[#E6EBF2] bg-white"}`}>
            <span className={`h-2 w-2 rounded-full ${l.color === "amber" ? "bg-amber-500" : "bg-emerald-500"} shrink-0`} />
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-[#0F172A]">{l.lane}</p>
              <p className="text-[9px] text-[#5B6475]">{l.location} · {l.lat}</p>
            </div>
            <span className="text-[10px] text-[#5B6475] tabular-nums">{l.txns} txns</span>
            <span className="text-[11px] font-semibold text-[#0F172A] tabular-nums w-[64px] text-right">{l.volume}</span>
            <span className={`text-[10px] font-medium w-[44px] text-right tabular-nums ${l.color === "amber" ? "text-amber-600" : "text-emerald-600"}`}>{l.auth}</span>
          </div>
        ))}

        <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#E6EBF2] text-[10px]">
          <span className="text-[#5B6475]">2 locations · 4 lanes · 6 routes healthy</span>
          <span className="text-emerald-600 font-medium">Rte C degraded — fallback active</span>
        </div>
      </div>
      <p className="text-center pb-4 text-[10px] text-[#94A3B8]">Internal preview · {merchant.name} lane activity</p>
    </div>
  );
}

/* ========== HOME SERVICES — field team collection ========== */
function HomeServicesWorkflow({ merchant }: { merchant: { name: string; context: string } }) {
  return (
    <div className="rounded-[16px] border border-[#DDE1E6] bg-white overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06),0_0_1px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3 px-5 py-2.5 border-b border-[#E6EBF2] bg-white">
        <span className="text-[12px] font-semibold text-[#0F172A]">{merchant.name}</span>
        <span className="text-[10px] text-[#5B6475]">{merchant.context}</span>
        <div className="ml-auto">
          <div className="flex rounded-md border border-[#E6EBF2] bg-[#F8F9FA] p-0.5 text-[10px]">
            <span className="px-2.5 py-1 rounded font-medium bg-white text-[#0F172A] shadow-sm">Jobs</span>
            <span className="px-2.5 py-1 text-[#5B6475]">Invoices</span>
            <span className="px-2.5 py-1 text-[#5B6475]">Retries</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[13px] font-semibold text-[#0F172A]">Field collection</p>
            <p className="text-[10px] text-[#5B6475] mt-0.5">12 jobs · $4,280 invoiced · $2,140 collected</p>
          </div>
          <span className="text-[16px] font-bold text-teal-700 tabular-nums">$2,140</span>
        </div>

        {[
          { job: "HVAC repair #412", tech: "Mike D.", invoiced: "$1,240", status: "Link sent", color: "teal", time: "14:20" },
          { job: "Plumbing #308", tech: "Sarah K.", invoiced: "$780", status: "Paid on-site", color: "emerald", time: "13:45" },
          { job: "Electrical #219", tech: "James L.", invoiced: "$1,560", status: "Follow-up #2", color: "amber", time: "11:30" },
          { job: "HVAC maint #415", tech: "Mike D.", invoiced: "$420", status: "Completed", color: "emerald", time: "10:15" },
          { job: "Plumbing #311", tech: "Sarah K.", invoiced: "$280", status: "Scheduled", color: "slate", time: "09:00" },
        ].map((j) => (
          <div
            key={j.job}
            className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 mb-2 ${
              j.color === "amber" ? "border-amber-200 bg-amber-50/60" :
              j.color === "emerald" ? "border-emerald-200 bg-emerald-50/60" :
              j.color === "teal" ? "border-teal-200 bg-teal-50/60" : "border-[#E6EBF2] bg-white"
            }`}
          >
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-[#0F172A]">{j.job}</p>
              <p className="text-[9px] text-[#5B6475]">{j.tech} · {j.time}</p>
            </div>
            <span className="text-[11px] font-semibold text-[#0F172A] tabular-nums w-[56px] text-right">{j.invoiced}</span>
            <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium w-[88px] text-center ${
              j.color === "emerald" ? "bg-emerald-100 text-emerald-700" :
              j.color === "amber" ? "bg-amber-100 text-amber-700" :
              j.color === "teal" ? "bg-teal-100 text-teal-700" : "bg-[#F8F9FA] text-[#5B6475]"
            }`}>{j.status}</span>
          </div>
        ))}

        <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#E6EBF2] text-[10px]">
          <span className="text-[#5B6475]">2 webhook retries pending · $2,140 outstanding</span>
          <span className="text-amber-600 font-medium">2 invoices overdue</span>
        </div>
      </div>
      <p className="text-center pb-4 text-[10px] text-[#94A3B8]">Internal preview · {merchant.name} field collection</p>
    </div>
  );
}