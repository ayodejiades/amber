"use client";

export default function HospitalsPage() {
  const hospitals = [
    { name: "Blue Cross Hospital", location: "Apapa", status: "Optimal", beds: "45/50", eta: "12m avg" },
    { name: "LUTH", location: "Surulere", status: "Critical", beds: "98/100", eta: "25m avg" },
    { name: "St. Nicholas", location: "Lagos Island", status: "Elevated", beds: "35/40", eta: "15m avg" },
    { name: "Evercare", location: "Lekki Phase 1", status: "Optimal", beds: "60/80", eta: "18m avg" },
  ];

  return (
    <div className="p-6 h-full overflow-y-auto custom-scrollbar bg-slate-50">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900 uppercase tracking-tighter">Partner Hospitals</h1>
        <p className="text-slate-600 text-sm">Live capacity and routing status for network hospitals.</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {hospitals.map((h, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1">{h.name}</h3>
                <span className="text-[10px] text-slate-500 font-semibold tracking-widest">{h.location}</span>
              </div>
              <span className={`text-[8px] font-semibold px-2 py-1 rounded tracking-widest uppercase ${
                h.status === 'Optimal' ? 'bg-emerald-100 text-emerald-700' : 
                h.status === 'Critical' ? 'bg-primary/10 text-primary' : 
                'bg-amber-100 text-amber-700'
              }`}>
                {h.status}
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1">
                  <span>Bed Capacity</span>
                  <span className="text-slate-900">{h.beds}</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className={`h-full ${h.status === 'Critical' ? 'bg-primary' : h.status === 'Elevated' ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: h.status === 'Critical' ? '98%' : h.status === 'Elevated' ? '85%' : '60%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Avg ETA from Hub</span>
                <span className="text-sm font-mono font-bold text-slate-900">{h.eta}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-white border border-primary text-primary py-2 rounded text-[10px] font-semibold uppercase tracking-widest hover:bg-primary/5 transition-colors">
                Route Patient
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">add_business</span>
          </div>
          <div>
            <h4 className="font-display font-bold text-slate-900 uppercase">Add Facility</h4>
            <p className="text-xs text-slate-600">Register a new partner hospital to the Amber network.</p>
          </div>
        </div>
        <button className="bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2 rounded text-xs font-semibold uppercase tracking-widest hover:bg-slate-100">
          Register
        </button>
      </div>
    </div>
  );
}
