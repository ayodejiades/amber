export default function SettingsPage() {
  return (
    <div className="h-full overflow-y-auto custom-scrollbar">
      <div className="mb-6">
        <h1 className="font-display text-3xl font-black uppercase tracking-tight text-slate-900">Command Settings</h1>
        <p className="text-sm text-slate-600">Security, escalation, and tactical communication controls.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-red-600">Escalation Rules</h2>
          <div className="space-y-3">
            <label className="flex items-center justify-between rounded border border-slate-200 bg-slate-50 p-3 text-sm">
              <span>Auto-dispatch on cardiac incidents</span>
              <input type="checkbox" defaultChecked />
            </label>
            <label className="flex items-center justify-between rounded border border-slate-200 bg-slate-50 p-3 text-sm">
              <span>Force dual-hospital matching</span>
              <input type="checkbox" defaultChecked />
            </label>
          </div>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-cyan-700">Comms Security</h2>
          <div className="space-y-3">
            <label className="flex items-center justify-between rounded border border-slate-200 bg-slate-50 p-3 text-sm">
              <span>Encrypted signal fallback</span>
              <input type="checkbox" defaultChecked />
            </label>
            <label className="flex items-center justify-between rounded border border-slate-200 bg-slate-50 p-3 text-sm">
              <span>Priority alert push to chief dispatcher</span>
              <input type="checkbox" defaultChecked />
            </label>
          </div>
        </article>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button className="rounded border border-slate-300 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-slate-600">
          Reset
        </button>
        <button className="rounded bg-red-600 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white">
          Save Settings
        </button>
      </div>
    </div>
  );
}
