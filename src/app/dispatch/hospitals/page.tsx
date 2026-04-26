"use client";

import { MockDataNotice } from "@/components/mock-data-notice";

export default function DispatchHospitalsPage() {
  const hospitals = [
    { name: "Reddington VI", status: "Optimal", beds: "42/50", trauma: "Level 1", score: 98 },
    { name: "St. Nicholas", status: "Elevated", beds: "12/15", trauma: "Level 2", score: 82 },
    { name: "First Cardiology", status: "Optimal", beds: "8/20", trauma: "Cardiac Spec", score: 95 },
    { name: "LUTH", status: "Critical", beds: "2/100", trauma: "Level 1", score: 44 },
    { name: "Evercare", status: "Optimal", beds: "15/30", trauma: "Level 2", score: 89 },
    { name: "Lagoon Ikoyi", status: "Elevated", beds: "5/12", trauma: "Level 2", score: 76 }
  ];

  return (
    <div className="p-6 h-full overflow-y-auto custom-scrollbar">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="font-display text-3xl font-bold text-white uppercase tracking-tighter">Hospital Network</h1>
          <p className="text-slate-400 text-sm">Verified Tier-1 medical facilities load status.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white/5 border border-white/10 px-4 py-2 text-[10px] font-caps font-bold uppercase text-white hover:bg-white/10 transition-colors">Export Logs</button>
          <button className="bg-primary text-white px-4 py-2 text-[10px] font-caps font-bold uppercase hover:brightness-110 transition-all">Add Facility</button>
        </div>
      </div>

      <div className="grid gap-4 mb-8">
        {hospitals.map((h, i) => (
          <div key={i} className="glass-panel p-4 flex items-center justify-between border-l-4 border-white/5 hover:border-primary/50 transition-all">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-surface-container-high rounded flex items-center justify-center text-primary font-display text-xl font-bold">
                {h.score}%
              </div>
              <div>
                <h3 className="text-lg font-bold text-white uppercase font-display">{h.name}</h3>
                <div className="flex gap-3 text-[10px] font-caps font-bold text-slate-500 uppercase tracking-widest">
                  <span>{h.trauma}</span>
                  <span className="text-white/20">|</span>
                  <span>{h.beds} BEDS</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-caps font-bold text-slate-500 uppercase tracking-widest mb-1">Status</p>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${h.status === 'Optimal' ? 'bg-emerald-500/10 text-emerald-500' : h.status === 'Critical' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                  {h.status}
                </span>
              </div>
              <button className="p-2 text-slate-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <MockDataNotice />
    </div>
  );
}
