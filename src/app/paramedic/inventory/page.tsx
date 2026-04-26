"use client";

import { ParamedicShell } from "@/components/paramedic/ParamedicShell";

const SUPPLIES = [
  { item: "Epinephrine", code: "MED-EPI-01", ratio: "6/20", status: "Low Stock", tone: "border-red-200 bg-red-50 text-red-700" },
  { item: "Tourniquet", code: "TRN-114", ratio: "14/20", status: "Stable", tone: "border-emerald-200 bg-emerald-50 text-emerald-700" },
  { item: "Airway Kit", code: "AWK-332", ratio: "4/8", status: "Priority", tone: "border-amber-200 bg-amber-50 text-amber-700" },
  { item: "Saline Bags", code: "SLN-220", ratio: "18/20", status: "Standby", tone: "border-sky-200 bg-sky-50 text-sky-700" },
];

export default function ParamedicInventoryPage() {
  return (
    <ParamedicShell title="Paramedic Inventory Grid" subtitle="Mission Resource Tracking">
      <section className="space-y-6">
        <article className="rounded-xl border border-clinical-border bg-white p-5 shadow-clinical">
          <h2 className="font-display text-xl font-black">Mission Scan</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-[1fr_auto]">
            <input
              placeholder="Scan barcode or enter item code"
              className="rounded-lg border border-clinical-border bg-slate-50 px-4 py-3 text-sm"
            />
            <button className="rounded-lg bg-clinical-primary px-6 py-3 text-xs font-black uppercase tracking-[0.18em] text-white">
              Log
            </button>
          </div>
        </article>

        <div className="grid gap-4 xl:grid-cols-12">
          <article className="rounded-xl border border-clinical-border bg-white p-5 shadow-clinical xl:col-span-7">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em]">Stock Matrix</h3>
              <p className="text-[11px] font-mono text-slate-500">Updated 2 mins ago</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {SUPPLIES.map((supply) => (
                <div key={supply.code} className="rounded-lg border border-clinical-border p-3">
                  <p className="text-xs font-black">{supply.item}</p>
                  <p className="text-[10px] font-mono text-slate-500">{supply.code}</p>
                  <p className="mt-1 text-sm font-mono font-black">{supply.ratio}</p>
                  <span className={`mt-2 inline-block rounded-full border px-2 py-1 text-[10px] font-black uppercase ${supply.tone}`}>
                    {supply.status}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-clinical-border bg-white p-5 shadow-clinical xl:col-span-5">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em]">Oxygen Supply</h3>
            <p className="mt-2 font-mono text-4xl font-black text-clinical-primary">63%</p>
            <div className="mt-3 h-2 rounded-full bg-slate-100">
              <div className="h-2 w-[63%] rounded-full bg-clinical-primary" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="rounded border border-slate-200 bg-slate-50 p-2 text-center">
                <p className="text-[10px] font-bold uppercase text-slate-500">Pressure</p>
                <p className="font-mono text-sm font-black">1460 PSI</p>
              </div>
              <div className="rounded border border-slate-200 bg-slate-50 p-2 text-center">
                <p className="text-[10px] font-bold uppercase text-slate-500">Flow</p>
                <p className="font-mono text-sm font-black">12 L/min</p>
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3">
              <p className="text-[10px] font-black uppercase text-amber-700">Projected Runtime</p>
              <p className="text-sm font-bold text-amber-800">3h 25m at current mission load</p>
            </div>
          </article>

          <article className="rounded-xl border border-clinical-border bg-white p-5 shadow-clinical xl:col-span-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em]">Mission Log</h3>
            <div className="mt-3 space-y-2">
              <div className="rounded-lg border border-clinical-border bg-slate-50 p-3">
                <p className="text-[10px] font-mono text-slate-500">22:02</p>
                <p className="text-xs font-bold">Barcode scan recorded for MED-EPI-01</p>
              </div>
              <div className="rounded-lg border border-clinical-border bg-slate-50 p-3">
                <p className="text-[10px] font-mono text-slate-500">21:58</p>
                <p className="text-xs font-bold">Oxygen usage spike detected</p>
              </div>
              <div className="rounded-lg border border-clinical-border bg-slate-50 p-3">
                <p className="text-[10px] font-mono text-slate-500">21:47</p>
                <p className="text-xs font-bold">Supply sync transmitted to command network</p>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-clinical-border bg-white p-5 shadow-clinical xl:col-span-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em]">Supply Depletion Rate</h3>
            <div className="mt-3 space-y-3">
              <div>
                <div className="mb-1 flex justify-between text-[11px] font-bold text-slate-600">
                  <span>Trauma consumables</span>
                  <span>72%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 w-[72%] rounded-full bg-amber-500" />
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-[11px] font-bold text-slate-600">
                  <span>Airway assets</span>
                  <span>41%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 w-[41%] rounded-full bg-sky-500" />
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs font-bold text-slate-600">Projected runtime: 3h 25m at current use.</p>
          </article>
        </div>

        <footer className="grid gap-3 sm:grid-cols-2">
          <button className="rounded-lg border border-clinical-border bg-white px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-slate-700 shadow-clinical">
            Report Discrepancy
          </button>
          <button className="rounded-lg bg-clinical-primary px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-white shadow-clinical">
            Request Resupply
          </button>
        </footer>
      </section>
    </ParamedicShell>
  );
}
