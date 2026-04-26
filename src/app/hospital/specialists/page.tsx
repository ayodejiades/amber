"use client";

import { MockDataNotice } from "@/components/mock-data-notice";

export default function HospitalSpecialistsPage() {
  const specialists = [
    { name: "Dr. Sarah Chen", spec: "Trauma Surgeon", status: "On-Site", phone: "+234 801 234 5678", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100" },
    { name: "Dr. Marcus Webb", spec: "Cardiologist", status: "On-Site", phone: "+234 802 345 6789", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100" },
    { name: "Dr. Elena Rostova", spec: "Neurologist", status: "In Surgery", phone: "N/A", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100" },
    { name: "Dr. John Doe", spec: "ER Specialist", status: "Off-Duty", phone: "+234 803 456 7890", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100" }
  ];

  return (
    <div className="p-0">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="font-display text-3xl font-bold text-white uppercase tracking-tighter">Specialist Roster</h1>
          <p className="text-slate-400 text-sm">Verified shift tracking and availability.</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {specialists.map((s, i) => (
          <div key={i} className="glass-panel p-6 rounded-lg border-white/5 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-surface-container-high overflow-hidden border-2 border-white/10 mb-4 relative">
              <img alt={s.name} className={`w-full h-full object-cover ${s.status === 'Off-Duty' ? 'grayscale' : ''}`} src={s.img} />
              <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-slate-950 ${s.status === 'On-Site' ? 'bg-emerald-500' : s.status === 'In Surgery' ? 'bg-secondary animate-pulse' : 'bg-slate-500'}`}></div>
            </div>
            <h3 className="font-display text-lg font-bold text-white uppercase mb-1">{s.name}</h3>
            <p className="font-caps text-[10px] font-bold tracking-widest text-secondary mb-4 uppercase">{s.spec}</p>
            <div className="w-full pt-4 border-t border-white/5 space-y-2">
              <div className="flex justify-between text-[10px] font-caps font-bold">
                <span className="text-slate-500">Status</span>
                <span className={s.status === 'On-Site' ? 'text-emerald-500' : s.status === 'In Surgery' ? 'text-secondary' : 'text-slate-500'}>{s.status}</span>
              </div>
              <div className="flex justify-between text-[10px] font-caps font-bold">
                <span className="text-slate-500">Contact</span>
                <span className="text-white font-mono">{s.phone}</span>
              </div>
            </div>
            <button className="w-full mt-6 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-caps font-bold text-[10px] uppercase tracking-widest transition-all">Page Specialist</button>
          </div>
        ))}
      </div>

      <MockDataNotice />
    </div>
  );
}
