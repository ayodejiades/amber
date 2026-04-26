"use client";

export default function HospitalBedsPage() {
  const wards = [
    { name: "Intensive Care Unit (ICU)", capacity: "45/48", critical: true },
    { name: "Emergency Room (ER)", capacity: "78/100", elevated: true },
    { name: "Trauma Ward A", capacity: "12/20", optimal: true },
    { name: "Cardiac Ward", capacity: "28/30", elevated: true },
    { name: "General Ward East", capacity: "140/150", optimal: true },
  ];

  return (
    <div className="p-6 h-full overflow-y-auto custom-scrollbar bg-slate-50">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="font-display text-3xl font-bold text-slate-900 uppercase tracking-tighter">Bed Capacity</h1>
          <p className="text-slate-600 text-sm">Real-time occupancy across all hospital wards.</p>
        </div>
        <button className="bg-primary text-white border border-primary px-4 py-2 rounded-lg font-body text-xs font-bold uppercase tracking-widest shadow-md">
          Update Capacity
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {wards.map((w, i) => (
          <div key={i} className={`bg-white p-6 rounded-2xl border ${w.critical ? 'border-primary/30 shadow-md' : 'border-slate-200 shadow-sm'}`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display text-xl font-bold text-slate-900 uppercase">{w.name}</h3>
              {w.critical && <span className="bg-primary/10 text-primary border border-primary/20 px-2 py-1 rounded text-[10px] font-semibold tracking-widest uppercase">Critical</span>}
              {w.elevated && <span className="bg-amber-100 text-amber-700 border border-amber-200 px-2 py-1 rounded text-[10px] font-semibold tracking-widest uppercase">Elevated</span>}
              {w.optimal && <span className="bg-emerald-100 text-emerald-700 border border-emerald-200 px-2 py-1 rounded text-[10px] font-semibold tracking-widest uppercase">Optimal</span>}
            </div>
            
            <div className="mb-2 flex justify-between items-end">
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Occupancy</span>
              <span className={`font-mono text-xl font-bold ${w.critical ? 'text-primary' : 'text-slate-900'}`}>{w.capacity}</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div 
                className={`h-full ${w.critical ? 'bg-primary' : w.elevated ? 'bg-amber-500' : 'bg-emerald-500'}`} 
                style={{ width: `${(parseInt(w.capacity.split('/')[0]) / parseInt(w.capacity.split('/')[1])) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
