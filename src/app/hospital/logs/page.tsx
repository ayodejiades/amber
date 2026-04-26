"use client";

export default function HospitalLogsPage() {
  const logs = [
    { time: "14:32", type: "Transfer Alert", desc: "Incoming transfer AMB-01 accepted (ICU).", status: "Resolved" },
    { time: "13:15", type: "Capacity Update", desc: "ICU beds updated: 45/48 occupied.", status: "Info" },
    { time: "12:40", type: "Handover", desc: "Patient AMB-14 handover complete at ER.", status: "Resolved" },
    { time: "11:05", type: "System Alert", desc: "Telemetry connection lost with AMB-08.", status: "Warning" },
    { time: "10:50", type: "Transfer Alert", desc: "Incoming transfer AMB-08 pending.", status: "Active" },
  ];

  return (
    <div className="p-6 h-full overflow-y-auto custom-scrollbar bg-slate-50">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900 uppercase tracking-tighter">Activity Log</h1>
        <p className="text-slate-600 text-sm">Recent system events and patient transfers.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-slate-100 bg-slate-50 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
          <div className="col-span-2">Time</div>
          <div className="col-span-3">Event Type</div>
          <div className="col-span-5">Description</div>
          <div className="col-span-2">Status</div>
        </div>

        <div className="divide-y divide-slate-100">
          {logs.map((log, i) => (
            <div key={i} className="p-4 md:grid md:grid-cols-12 gap-4 items-center hover:bg-slate-50 transition-colors">
              <div className="col-span-2 font-mono text-sm text-slate-500 mb-2 md:mb-0">
                {log.time}
              </div>
              <div className="col-span-3 mb-2 md:mb-0">
                <span className="text-xs font-bold text-slate-900">{log.type}</span>
              </div>
              <div className="col-span-5 mb-3 md:mb-0 text-sm text-slate-600">
                {log.desc}
              </div>
              <div className="col-span-2">
                <span className={`text-[10px] font-semibold px-2 py-1 rounded tracking-widest uppercase ${
                  log.status === 'Resolved' ? 'bg-emerald-100 text-emerald-700' : 
                  log.status === 'Active' ? 'bg-primary/10 text-primary' : 
                  log.status === 'Warning' ? 'bg-amber-100 text-amber-700' : 
                  'bg-slate-100 text-slate-600'
                }`}>
                  {log.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
