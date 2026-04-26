"use client";

import { MapHUD } from "@/components/MapHUD";
import { TelemetryChart } from "@/components/TelemetryChart";
import { MockDataNotice } from "@/components/mock-data-notice";
import { ParamedicShell } from "@/components/paramedic/ParamedicShell";
import { useParamedicIncident } from "@/components/paramedic/useParamedicIncident";

const ABCD_ITEMS = [
  { label: "Airway", status: "Compromised", tone: "text-red-600 bg-red-50 border-red-200" },
  { label: "Breathing", status: "Labored", tone: "text-amber-700 bg-amber-50 border-amber-200" },
  { label: "Circulation", status: "Hemorrhage", tone: "text-red-600 bg-red-50 border-red-200" },
  { label: "Disability", status: "Responsive", tone: "text-emerald-700 bg-emerald-50 border-emerald-200" },
];

export default function ParamedicPage() {
  const { activeIncident, showNotification, setShowNotification, bedConfirmed, bedDetails } =
    useParamedicIncident();

  return (
    <ParamedicShell title="Paramedic Patient HUD" subtitle="Sector 7G Live">
      {!activeIncident ? (
        <div className="flex min-h-[70vh] flex-col items-center justify-center rounded-3xl border border-clinical-border bg-white p-10 text-center shadow-clinical">
          <span className="material-symbols-outlined mb-3 text-6xl text-slate-300">ambulance_alert</span>
          <h2 className="font-display text-2xl font-black">Awaiting Dispatch</h2>
          <p className="mt-2 max-w-md text-sm text-slate-500">
            Unit is online and ready for response. New incidents from dispatch will appear here in real time.
          </p>
        </div>
      ) : (
        <section className="grid gap-6 xl:grid-cols-[1.45fr_1fr]">
          <div className="space-y-6">
            <article className="rounded-2xl border border-red-200 bg-white p-6 shadow-clinical">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                    Critical Status
                  </p>
                  <h2 className="font-display text-2xl font-black">{activeIncident.type}</h2>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    {activeIncident.location}
                  </p>
                </div>
                <p className="rounded-full border border-clinical-border px-3 py-1 text-[11px] font-mono font-bold">
                  {activeIncident.id}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <button className="rounded-xl bg-clinical-primary px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-white">
                  Request Evac
                </button>
                <button className="rounded-xl border border-clinical-border px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-slate-700">
                  Route Assist
                </button>
                <button className="rounded-xl border border-clinical-border px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-slate-700">
                  Voice Channel
                </button>
              </div>
            </article>

            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-clinical-border bg-white p-4 shadow-clinical">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Heart Rate</p>
                <p className="mt-2 font-mono text-4xl font-black text-red-600">142</p>
                <p className="text-[10px] font-bold uppercase text-slate-500">BPM</p>
                <TelemetryChart type="heart" seed={activeIncident.telemetrySeed} color="#dc2626" />
              </article>
              <article className="rounded-2xl border border-clinical-border bg-white p-4 shadow-clinical">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">SpO2</p>
                <p className="mt-2 font-mono text-4xl font-black text-sky-700">88</p>
                <p className="text-[10px] font-bold uppercase text-slate-500">%</p>
                <TelemetryChart type="spo2" seed={activeIncident.telemetrySeed} color="#0c4a6e" />
              </article>
              <article className="rounded-2xl border border-clinical-border bg-white p-4 shadow-clinical">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Blood Pressure
                </p>
                <p className="mt-2 font-mono text-4xl font-black text-amber-700">92/58</p>
                <p className="text-[10px] font-bold uppercase text-slate-500">MMHG</p>
                <TelemetryChart type="bp" seed={activeIncident.telemetrySeed} color="#b45309" />
              </article>
            </div>

            <article className="rounded-2xl border border-clinical-border bg-white p-5 shadow-clinical">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em]">ABCD Assessment</h3>
                <button className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Reset
                </button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {ABCD_ITEMS.map((item) => (
                  <div key={item.label} className={`rounded-xl border p-3 ${item.tone}`}>
                    <p className="text-[10px] font-black uppercase tracking-[0.16em]">{item.label}</p>
                    <p className="text-sm font-mono font-bold">{item.status}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-clinical-border bg-white p-5 shadow-clinical">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em]">Intervention Log</h3>
                <button className="rounded-lg bg-slate-900 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                  New Entry
                </button>
              </div>
              <div className="space-y-2">
                <div className="rounded-xl border border-clinical-border bg-slate-50 p-3">
                  <p className="text-[10px] font-mono font-bold text-slate-500">04:18</p>
                  <p className="text-xs font-black uppercase">Administered Epinephrine</p>
                </div>
                <div className="rounded-xl border border-clinical-border bg-slate-50 p-3">
                  <p className="text-[10px] font-mono font-bold text-slate-500">04:15</p>
                  <p className="text-xs font-black uppercase">IV Access Established</p>
                </div>
              </div>
            </article>
          </div>

          <aside className="space-y-6">
            <article className="rounded-2xl border border-clinical-border bg-white p-5 shadow-clinical">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Receiving Hospital
              </p>
              <h3 className="mt-1 text-lg font-black">{activeIncident.hospital}</h3>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-slate-100 p-2 text-center">
                  <p className="text-[10px] font-bold uppercase text-slate-500">ETA</p>
                  <p className="font-mono text-sm font-black">{activeIncident.eta}</p>
                </div>
                <div className="rounded-lg bg-slate-100 p-2 text-center">
                  <p className="text-[10px] font-bold uppercase text-slate-500">Status</p>
                  <p className="font-mono text-sm font-black text-emerald-700">
                    {bedConfirmed ? "Ready" : "Pre-alert"}
                  </p>
                </div>
              </div>
              {bedDetails ? (
                <p className="mt-3 rounded-lg bg-emerald-50 p-2 text-xs font-bold text-emerald-700">
                  {bedDetails}
                </p>
              ) : null}
            </article>

            <article className="h-72 overflow-hidden rounded-2xl border border-clinical-border bg-white shadow-clinical">
              <MapHUD
                className="h-full"
                zoom={14}
                center={[6.48, 3.37]}
                markers={[
                  { id: "scene", lat: 6.48, lng: 3.37, type: "incident", label: "Patient" },
                  { id: "unit", lat: 6.49, lng: 3.38, type: "ambulance", label: "AMB-08" },
                ]}
              />
            </article>

            <article id="comms" className="rounded-2xl border border-clinical-border bg-white p-5 shadow-clinical">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[11px] font-black uppercase tracking-[0.2em]">Comms Channel</p>
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </div>
              <div className="mb-3 space-y-2">
                <div className="rounded-xl bg-clinical-primary-soft p-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-clinical-primary">
                    Amber Command
                  </p>
                  <p className="text-xs text-slate-700">Clear path active. Trauma bay is prepped.</p>
                </div>
                <div className="rounded-xl border border-clinical-border p-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">
                    Receiving Team
                  </p>
                  <p className="text-xs text-slate-700">Continue oxygen support and update GCS en route.</p>
                </div>
              </div>
              <div className="relative">
                <input
                  placeholder="Send update..."
                  className="w-full rounded-xl border border-clinical-border bg-slate-50 px-4 py-2.5 text-xs font-mono"
                />
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  send
                </span>
              </div>
            </article>
          </aside>
        </section>
      )}

      {showNotification ? (
        <div className="fixed right-6 top-22 z-50 rounded-xl bg-clinical-primary p-4 text-white shadow-2xl">
          <p className="text-[10px] font-black uppercase tracking-[0.2em]">New Assignment</p>
          <p className="text-sm font-bold">{activeIncident?.type ?? "Incident detected"}</p>
          <button
            onClick={() => setShowNotification(false)}
            className="mt-2 rounded-md bg-white/20 px-3 py-1 text-[10px] font-bold uppercase"
          >
            Acknowledge
          </button>
        </div>
      ) : null}

      <button className="fixed bottom-7 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white shadow-xl shadow-red-200">
        <span className="material-symbols-outlined">add_alert</span>
      </button>

      <MockDataNotice />
    </ParamedicShell>
  );
}
