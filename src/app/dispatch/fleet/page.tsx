"use client";

import { MockDataNotice } from "@/components/mock-data-notice";

export default function DispatchFleetPage() {
  const units = [
    { id: "AMB-01", status: "En Route", dest: "Victoria Island", fuel: "82%", crew: "S. Chen, M. Webb" },
    { id: "AMB-05", status: "Standby", dest: "Central Hub 4", fuel: "94%", crew: "J. Doe, K. Smith" },
    { id: "AMB-09", status: "Maintenance", dest: "N/A", fuel: "12%", crew: "N/A" },
    { id: "AMB-12", status: "En Route", dest: "Lekki Phase 1", fuel: "45%", crew: "E. Rostova, A. Brown" },
    { id: "AMB-15", status: "Standby", dest: "Hub 2", fuel: "68%", crew: "P. Parker, B. Wayne" }
  ];

  return (
    <div className="p-6 h-full overflow-y-auto custom-scrollbar">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-white uppercase tracking-tighter">Active Fleet</h1>
        <p className="text-slate-400 text-sm">Real-time telemetry of all Amber response units.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {units.map((u, i) => (
          <div key={i} className="glass-panel p-6 rounded-lg border-white/5 relative group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-mono font-bold text-white mb-1">{u.id}</h3>
                <span className={`text-[10px] font-caps font-bold px-2 py-0.5 rounded ${u.status === 'En Route' ? 'bg-primary/20 text-primary' : u.status === 'Standby' ? 'bg-tertiary/20 text-tertiary' : 'bg-slate-500/20 text-slate-500'}`}>
                  {u.status}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[8px] font-caps font-bold text-slate-500 uppercase tracking-widest mb-1">Fuel Level</span>
                <span className="text-xs font-mono font-bold text-white">{u.fuel}</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <span className="block text-[8px] font-caps font-bold text-slate-500 uppercase tracking-widest mb-1">Location / Destination</span>
                <p className="text-sm text-white font-bold uppercase truncate">{u.dest}</p>
              </div>
              <div>
                <span className="block text-[8px] font-caps font-bold text-slate-500 uppercase tracking-widest mb-1">Tactical Crew</span>
                <p className="text-xs text-slate-400">{u.crew}</p>
              </div>
            </div>

            <button className="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-caps font-bold text-[10px] uppercase tracking-widest transition-all">Open Comms</button>
          </div>
        ))}
      </div>

      <MockDataNotice />
    </div>
  );
}
