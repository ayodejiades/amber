"use client";

export default function DispatchAnalyticsPage() {
  return (
    <div className="h-full overflow-y-auto custom-scrollbar">
      <div className="mb-6">
        <h1 className="font-display text-3xl font-black uppercase tracking-tight text-slate-900">Network Analytics</h1>
        <p className="text-sm text-slate-600">Tactical command efficiency and live throughput performance.</p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">Total Dispatches</span>
          <p className="font-display text-4xl font-black">1,422</p>
          <span className="mt-2 block text-[10px] font-bold text-emerald-600">+12% vs last month</span>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">Avg Response Time</span>
          <p className="font-display text-4xl font-black text-red-600">08:14</p>
          <span className="mt-2 block text-[10px] font-bold text-slate-500">Target: 10:00</span>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">Matching Accuracy</span>
          <p className="font-display text-4xl font-black text-cyan-700">99.4%</p>
          <span className="mt-2 block text-[10px] font-bold text-cyan-700">AI optimized</span>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">Hospital Uptime</span>
          <p className="font-display text-4xl font-black">100%</p>
          <span className="mt-2 block text-[10px] font-bold text-slate-500">All partner hospitals</span>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-cyan-700">Response Heatline</h2>
          <div className="h-40 rounded-lg border border-slate-200 bg-gradient-to-r from-red-100 via-amber-100 to-cyan-100" />
          <p className="mt-2 text-xs text-slate-600">Intensity trend mirrors tactical command charting from admin reference.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-red-600">Alert Throughput</h2>
          <div className="space-y-2">
            <div className="rounded border border-slate-200 bg-slate-50 p-3 text-xs">Critical incidents processed: 42</div>
            <div className="rounded border border-slate-200 bg-slate-50 p-3 text-xs">Escort cases processed: 17</div>
            <div className="rounded border border-slate-200 bg-slate-50 p-3 text-xs">Resolved transfers: 33</div>
          </div>
        </article>
      </div>
    </div>
  );
}
