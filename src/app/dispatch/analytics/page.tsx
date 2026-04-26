"use client";

export default function DispatchAnalyticsPage() {
  return (
    <div className="p-6 h-full overflow-y-auto custom-scrollbar bg-slate-50">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900 uppercase tracking-tighter">Performance Overview</h1>
        <p className="text-slate-600 text-sm">Response metrics and efficiency data.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-2 block">Total Dispatches</span>
          <p className="text-4xl font-display font-black text-slate-900">1,422</p>
          <span className="text-[9px] text-emerald-600 font-bold mt-2 block">+12% vs last month</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-2 block">Avg Response Time</span>
          <p className="text-4xl font-display font-black text-primary">08:14</p>
          <span className="text-[9px] text-slate-500 font-bold mt-2 block">Target: 10:00</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-2 block">Matching Accuracy</span>
          <p className="text-4xl font-display font-black text-emerald-600">99.4%</p>
          <span className="text-[9px] text-emerald-600 font-bold mt-2 block">AI optimized</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-2 block">Hospital Uptime</span>
          <p className="text-4xl font-display font-black text-slate-900">100%</p>
          <span className="text-[9px] text-slate-500 font-bold mt-2 block">All partner hospitals</span>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 h-64 flex flex-col justify-center items-center text-center shadow-sm">
        <span className="material-symbols-outlined text-slate-300 text-6xl mb-4">analytics</span>
        <p className="text-slate-400 font-semibold tracking-widest uppercase">Charts coming soon</p>
      </div>
    </div>
  );
}
