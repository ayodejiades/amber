"use client";

export default function HospitalsPage() {
  const hospitals = [
    { name: "Blue Cross Hospital", location: "Apapa", status: "OPTIMAL", beds: "45/50", eta: "12m avg" },
    { name: "LUTH", location: "Surulere", status: "CRITICAL", beds: "98/100", eta: "25m avg" },
    { name: "St. Nicholas", location: "Lagos Island", status: "ELEVATED", beds: "35/40", eta: "15m avg" },
    { name: "Evercare", location: "Lekki Phase 1", status: "OPTIMAL", beds: "60/80", eta: "18m avg" },
  ];

  return (
    <div className="h-full overflow-y-auto custom-scrollbar">
      <div className="mb-6">
        <h1 className="font-display text-3xl font-black uppercase tracking-tight text-slate-900">Hospital Network</h1>
        <p className="text-sm text-slate-600">AI-assisted partner facility capacity and reroute readiness.</p>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {hospitals.map((h) => (
          <article key={h.name} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-black">{h.name}</h3>
                <span className="text-[10px] font-bold tracking-[0.12em] text-slate-500">{h.location}</span>
              </div>
              <span className={`rounded px-2 py-1 text-[9px] font-black uppercase tracking-[0.12em] ${
                h.status === "OPTIMAL"
                  ? "bg-emerald-100 text-emerald-700"
                  : h.status === "CRITICAL"
                    ? "bg-red-100 text-red-700"
                    : "bg-amber-100 text-amber-700"
              }`}>
                {h.status}
              </span>
            </div>

            <div className="mb-4 space-y-3">
              <div>
                <div className="mb-1 flex justify-between text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">
                  <span>Bed Capacity</span>
                  <span className="text-slate-900">{h.beds}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className={`h-full ${
                    h.status === "CRITICAL" ? "w-[98%] bg-red-500" : h.status === "ELEVATED" ? "w-[85%] bg-amber-500" : "w-[60%] bg-emerald-500"
                  }`} />
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">Avg ETA from Hub</span>
                <span className="text-sm font-mono font-bold text-slate-900">{h.eta}</span>
              </div>
            </div>

            <button className="w-full rounded border border-red-300 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-red-700">
                Route Patient
            </button>
          </article>
        ))}
      </div>
      
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600">
            <span className="material-symbols-outlined">add_business</span>
          </div>
          <div>
            <h4 className="font-display font-bold uppercase text-slate-900">Add Facility</h4>
            <p className="text-xs text-slate-600">Register a new partner hospital to the Amber network.</p>
          </div>
        </div>
        <button className="rounded border border-slate-300 bg-slate-50 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-slate-700">
          Register
        </button>
      </div>
    </div>
  );
}
