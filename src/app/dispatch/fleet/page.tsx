"use client";

export default function FleetPage() {
  const units = [
    { id: "AMB-01", status: "En Route", dest: "Apapa", eta: "04m", crew: "Dr. Adebayo, P. Okafor" },
    { id: "AMB-02", status: "Standby", dest: "Ikoyi Hub", eta: "-", crew: "Dr. Smith, M. Johnson" },
    { id: "AMB-03", status: "At Hospital", dest: "LUTH ER", eta: "Arrived", crew: "Dr. Eze, K. Nwosu" },
    { id: "AMB-04", status: "En Route", dest: "Lekki Phase 1", eta: "12m", crew: "Dr. Balogun, T. Kehinde" },
    { id: "AMB-05", status: "Standby", dest: "Surulere Hub", eta: "-", crew: "Dr. Danjuma, S. Bello" },
    { id: "AMB-06", status: "Maintenance", dest: "HQ Garage", eta: "-", crew: "N/A" }
  ];

  return (
    <div className="p-6 h-full overflow-y-auto custom-scrollbar bg-slate-50">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900 uppercase tracking-tighter">Active Fleet</h1>
        <p className="text-slate-600 text-sm">Live status of all Amber ambulances.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {units.map((u, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-1">{u.id}</h3>
                <span className={`text-[10px] font-semibold px-2 py-1 rounded tracking-widest uppercase ${
                  u.status === 'En Route' ? 'bg-primary/10 text-primary' : 
                  u.status === 'Standby' ? 'bg-emerald-100 text-emerald-700' : 
                  u.status === 'Maintenance' ? 'bg-slate-100 text-slate-600' : 
                  'bg-amber-100 text-amber-700'
                }`}>
                  {u.status}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[8px] font-semibold text-slate-500 uppercase tracking-widest mb-1">ETA</span>
                <span className={`font-mono font-bold ${u.status === 'En Route' ? 'text-primary' : 'text-slate-900'}`}>{u.eta}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="block text-[8px] font-semibold text-slate-500 uppercase tracking-widest mb-1">Destination</span>
                <p className="text-sm text-slate-900 font-bold uppercase truncate">{u.dest}</p>
              </div>
              <div>
                <span className="block text-[8px] font-semibold text-slate-500 uppercase tracking-widest mb-1">Crew</span>
                <p className="text-xs text-slate-600">{u.crew}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex gap-2">
              <button className="flex-1 bg-slate-50 border border-slate-200 text-slate-700 py-2 rounded text-[10px] font-semibold uppercase tracking-widest hover:bg-slate-100 transition-colors">
                Details
              </button>
              <button className="flex-1 bg-white border border-primary text-primary py-2 rounded text-[10px] font-semibold uppercase tracking-widest hover:bg-primary/5 transition-colors">
                Contact Crew
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
