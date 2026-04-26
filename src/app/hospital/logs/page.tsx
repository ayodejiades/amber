"use client";

import { MockDataNotice } from "@/components/mock-data-notice";

export default function HospitalLogsPage() {
  const logs = [
    { time: "09:42", event: "Patient Handover", unit: "AMB-01", status: "Complete" },
    { time: "09:15", event: "ICU Bed Reserved", unit: "AMB-09", status: "Pending" },
    { time: "08:30", event: "ER Admission", unit: "AMB-12", status: "Complete" },
    { time: "07:45", event: "Cardiac Pre-Alert", unit: "AMB-05", status: "Logged" }
  ];

  return (
    <div className="p-0">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-white uppercase tracking-tighter">Operational Logs</h1>
        <p className="text-slate-400 text-sm">Full audit trail of facility actions.</p>
      </div>

      <div className="glass-panel rounded-lg border-white/5 overflow-hidden mb-12">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low/50">
              <th className="p-4 text-[10px] font-caps font-bold text-slate-500 uppercase tracking-widest">Timestamp</th>
              <th className="p-4 text-[10px] font-caps font-bold text-slate-500 uppercase tracking-widest">Event</th>
              <th className="p-4 text-[10px] font-caps font-bold text-slate-500 uppercase tracking-widest">Source</th>
              <th className="p-4 text-[10px] font-caps font-bold text-slate-500 uppercase tracking-widest">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {logs.map((l, i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors">
                <td className="p-4 text-xs font-mono text-slate-400">{l.time}</td>
                <td className="p-4 text-sm font-bold text-white">{l.event}</td>
                <td className="p-4 text-xs font-mono text-secondary">{l.unit}</td>
                <td className="p-4">
                  <span className={`text-[8px] font-caps font-bold px-2 py-0.5 rounded ${l.status === 'Complete' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-primary/10 text-primary'}`}>
                    {l.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <MockDataNotice />
    </div>
  );
}
