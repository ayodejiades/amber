"use client";

export default function FleetPage() {
  const units = [
    { id: "Amber 01", status: "EN ROUTE", dest: "Victoria Island", eta: "04m", crew: "Dr. Adebayo, P. Okafor" },
    { id: "Amber 02", status: "STANDBY", dest: "Ikoyi Hub", eta: "-", crew: "Dr. Smith, M. Johnson" },
    { id: "Amber 03", status: "AT HOSPITAL", dest: "LUTH ER", eta: "ARRIVED", crew: "Dr. Eze, K. Nwosu" },
    { id: "Amber 04", status: "EN ROUTE", dest: "Lekki Phase 1", eta: "12m", crew: "Dr. Balogun, T. Kehinde" },
    { id: "Amber 05", status: "STANDBY", dest: "Surulere Hub", eta: "-", crew: "Dr. Danjuma, S. Bello" },
    { id: "Amber 06", status: "MAINTENANCE", dest: "HQ Garage", eta: "-", crew: "N/A" },
  ];

  return (
    <div className="h-full overflow-y-auto custom-scrollbar">
      <div className="mb-6">
        <h1 className="font-display text-3xl font-black uppercase tracking-tight text-slate-900">Fleet Grid</h1>
        <p className="text-sm text-slate-600">Command-level readiness status for all tactical medical assets.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {units.map((u) => (
          <article key={u.id} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="mb-4 flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-mono text-base font-black">{u.id}</h3>
                <span className={`mt-1 inline-block rounded px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] ${
                  u.status === "EN ROUTE"
                    ? "bg-red-50 text-red-700"
                    : u.status === "STANDBY"
                      ? "bg-cyan-50 text-cyan-700"
                      : u.status === "MAINTENANCE"
                        ? "bg-slate-100 text-slate-600"
                        : "bg-amber-50 text-amber-700"
                }`}>
                  {u.status}
                </span>
              </div>
              <div className="text-right">
                <span className="mb-1 block text-[9px] font-black uppercase tracking-[0.14em] text-slate-500">ETA</span>
                <span className={`font-mono text-sm font-bold ${u.status === "EN ROUTE" ? "text-red-700" : "text-slate-900"}`}>{u.eta}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <span className="mb-1 block text-[9px] font-black uppercase tracking-[0.14em] text-slate-500">Destination</span>
                <p className="truncate text-sm font-bold uppercase">{u.dest}</p>
              </div>
              <div>
                <span className="mb-1 block text-[9px] font-black uppercase tracking-[0.14em] text-slate-500">Crew</span>
                <p className="text-xs text-slate-600">{u.crew}</p>
              </div>
              <div className="h-1.5 rounded-full bg-slate-100">
                <div
                  className={`h-1.5 rounded-full ${
                    u.status === "EN ROUTE"
                      ? "w-[70%] bg-red-500"
                      : u.status === "STANDBY"
                        ? "w-[40%] bg-cyan-500"
                        : u.status === "MAINTENANCE"
                          ? "w-[12%] bg-slate-500"
                          : "w-[90%] bg-amber-500"
                  }`}
                />
              </div>
            </div>

            <div className="mt-4 flex gap-2 border-t border-slate-100 pt-3">
              <button className="flex-1 rounded border border-slate-200 bg-slate-50 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-slate-700">
                Details
              </button>
              <button className="flex-1 rounded border border-red-300 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-red-700">
                Contact Crew
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
