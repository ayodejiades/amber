"use client";

import { MockDataNotice } from "@/components/mock-data-notice";

export default function DispatchAnalyticsPage() {
  return (
    <div className="p-6 h-full overflow-y-auto custom-scrollbar">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-white uppercase tracking-tighter">Operational Logistics</h1>
        <p className="text-slate-400 text-sm">Tactical efficiency and response metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="glass-panel p-6 rounded-lg border-white/5">
          <span className="text-[10px] font-caps font-bold text-slate-500 uppercase tracking-widest mb-2 block">Total Dispatches</span>
          <p className="text-4xl font-display font-black text-white">1,422</p>
          <span className="text-[9px] text-emerald-500 font-bold mt-2 block">+12% vs last month</span>
        </div>
        <div className="glass-panel p-6 rounded-lg border-white/5">
          <span className="text-[10px] font-caps font-bold text-slate-500 uppercase tracking-widest mb-2 block">Avg Response Time</span>
          <p className="text-4xl font-display font-black text-primary">08:14</p>
          <span className="text-[9px] text-slate-500 font-bold mt-2 block">SLA Target: 10:00</span>
        </div>
        <div className="glass-panel p-6 rounded-lg border-white/5">
          <span className="text-[10px] font-caps font-bold text-slate-500 uppercase tracking-widest mb-2 block">Matching Accuracy</span>
          <p className="text-4xl font-display font-black text-tertiary">99.4%</p>
          <span className="text-[9px] text-emerald-500 font-bold mt-2 block">Optimized by AI</span>
        </div>
        <div className="glass-panel p-6 rounded-lg border-white/5">
          <span className="text-[10px] font-caps font-bold text-slate-500 uppercase tracking-widest mb-2 block">Facility Uptime</span>
          <p className="text-4xl font-display font-black text-white">100%</p>
          <span className="text-[9px] text-slate-500 font-bold mt-2 block">Active Tier-1 Hubs</span>
        </div>
      </div>

      <div className="glass-panel p-8 rounded-xl border-white/5 h-64 flex flex-col justify-center items-center text-center">
        <span className="material-symbols-outlined text-slate-700 text-6xl mb-4">analytics</span>
        <p className="text-slate-500 font-caps font-bold tracking-widest uppercase">Deep Logistics Visualization Loading...</p>
      </div>

      <MockDataNotice />
    </div>
  );
}
