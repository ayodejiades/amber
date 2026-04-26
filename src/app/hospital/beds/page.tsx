"use client";

import { MockDataNotice } from "@/components/mock-data-notice";

export default function HospitalBedsPage() {
  const sections = [
    { name: "ICU North", beds: [
      { id: "101", status: "Occupied", patient: "#8821-X", vitals: "Critical" },
      { id: "102", status: "Occupied", patient: "#9042-Y", vitals: "Stable" },
      { id: "103", status: "Available", patient: "N/A", vitals: "N/A" },
      { id: "104", status: "Reserved", patient: "UNIT_042", vitals: "Incoming" }
    ]},
    { name: "Trauma Bay 1", beds: [
      { id: "T1", status: "Occupied", patient: "#7712-Z", vitals: "Critical" },
      { id: "T2", status: "Available", patient: "N/A", vitals: "N/A" }
    ]}
  ];

  return (
    <div className="p-0">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-white uppercase tracking-tighter">Bed Management</h1>
        <p className="text-slate-400 text-sm">Real-time occupancy and incoming reservations.</p>
      </div>

      <div className="space-y-12 mb-12">
        {sections.map((s, i) => (
          <div key={i}>
            <h2 className="font-caps font-bold text-primary text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
              {s.name}
              <div className="h-px bg-primary/20 flex-1"></div>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {s.beds.map((b, bi) => (
                <div key={bi} className={`glass-panel p-6 rounded-lg border-white/5 ${b.status === 'Available' ? 'border-emerald-500/30' : b.status === 'Reserved' ? 'border-secondary/30 glow-red' : ''}`}>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-xl font-bold text-white">{b.id}</span>
                    <span className={`text-[8px] font-caps font-bold px-2 py-0.5 rounded ${b.status === 'Available' ? 'bg-emerald-500/10 text-emerald-500' : b.status === 'Occupied' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                      {b.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-caps font-bold">
                      <span className="text-slate-500 uppercase">Patient</span>
                      <span className="text-white">{b.patient}</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-caps font-bold">
                      <span className="text-slate-500 uppercase">Vitals</span>
                      <span className={b.vitals === 'Critical' ? 'text-primary' : b.vitals === 'Incoming' ? 'text-secondary' : 'text-emerald-500'}>{b.vitals}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <MockDataNotice />
    </div>
  );
}
