"use client";

import { useRef, useState } from "react";
import { MapHUD, type MapHUDHandle } from "@/components/MapHUD";
import { ParamedicShell } from "@/components/paramedic/ParamedicShell";
import { useParamedicIncident } from "@/components/paramedic/useParamedicIncident";

const HOSPITAL_LOAD = [
  { name: "Reddington VI", capacity: "72%", trauma: "Level I", status: "Open" },
  { name: "St. Nicholas", capacity: "85%", trauma: "Level II", status: "High Load" },
  { name: "LUTH", capacity: "64%", trauma: "Level I", status: "Open" },
];

export default function ParamedicMapPage() {
  const { activeIncident } = useParamedicIncident();
  const mapRef = useRef<MapHUDHandle>(null);
  const [followAmbulance, setFollowAmbulance] = useState(true);

  return (
    <ParamedicShell title="Paramedic Tactical Map" subtitle="Route Intelligence">
      <div className="space-y-4">
        <article className="relative h-[62vh] overflow-hidden rounded-xl border border-clinical-border bg-white shadow-clinical">
          <MapHUD
            ref={mapRef}
            className="h-full"
            zoom={13}
            simulateMovement
            followAmbulance={followAmbulance}
            center={activeIncident ? [6.48, 3.37] : [6.52, 3.38]}
            markers={
              activeIncident
                ? [
                    { id: "scene", lat: 6.48, lng: 3.37, type: "incident", label: "Incident" },
                    { id: "unit", lat: 6.52, lng: 3.38, type: "ambulance", label: "AMB-08" },
                    { id: "hospital", lat: 6.46, lng: 3.42, type: "hospital", label: "Receiving" },
                  ]
                : [{ id: "unit", lat: 6.52, lng: 3.38, type: "ambulance", label: "AMB-08" }]
            }
          />
          <div className="absolute left-4 top-4 z-[1002] rounded-lg border border-cyan-200 bg-cyan-50/95 p-3">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-800">
              Clear Path Active
            </p>
            <p className="text-xs font-bold text-cyan-700">Emergency pre-emption enabled</p>
          </div>
          <div className="absolute right-4 top-4 z-[1002] flex flex-col gap-2">
            <button
              onClick={() => mapRef.current?.zoomIn()}
              aria-label="Zoom in"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 transition hover:bg-slate-50"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
            <button
              onClick={() => mapRef.current?.zoomOut()}
              aria-label="Zoom out"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 transition hover:bg-slate-50"
            >
              <span className="material-symbols-outlined">remove</span>
            </button>
            <button
              onClick={() => mapRef.current?.recenterToAmbulance()}
              aria-label="Recenter to ambulance"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 transition hover:bg-slate-50"
            >
              <span className="material-symbols-outlined">my_location</span>
            </button>
            <button
              onClick={() => setFollowAmbulance((prev) => !prev)}
              aria-label={followAmbulance ? "Disable follow mode" : "Enable follow mode"}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border text-slate-600 transition ${
                followAmbulance
                  ? "border-cyan-400 bg-cyan-50 text-cyan-700"
                  : "border-slate-300 bg-white hover:bg-slate-50"
              }`}
            >
              <span className="material-symbols-outlined">explore</span>
            </button>
          </div>
        </article>

        <div className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-xl border border-clinical-border bg-white p-4 shadow-clinical">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">Destination</p>
            <p className="text-lg font-black">{activeIncident?.hospital ?? "Reddington VI"}</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-slate-50 p-2">
                <p className="text-[10px] font-bold uppercase text-slate-500">ETA</p>
                <p className="font-mono text-sm font-black">07:24</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-2">
                <p className="text-[10px] font-bold uppercase text-slate-500">Distance</p>
                <p className="font-mono text-sm font-black">3.2 mi</p>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-600">Next maneuver: Turn right to Hospital Rd.</p>
          </article>

          <article className="rounded-xl border border-clinical-border bg-white p-4 shadow-clinical">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em]">Regional Load</h3>
            <div className="mt-3 space-y-2">
              {HOSPITAL_LOAD.map((item) => (
                <div key={item.name} className="rounded-lg border border-clinical-border bg-slate-50 p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-black">{item.name}</p>
                    <span className={`text-[9px] font-black uppercase ${item.status === "High Load" ? "text-red-600" : "text-emerald-700"}`}>{item.status}</span>
                  </div>
                  <p className="text-[11px] text-slate-600">ER {item.capacity} · {item.trauma}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-clinical-border bg-white p-4 shadow-clinical">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em]">Tactical Telemetry</h3>
            <div className="mt-3 space-y-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-[10px] font-bold uppercase text-slate-500">Signal Strength</p>
                <p className="font-mono text-sm font-black">98%</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-[10px] font-bold uppercase text-slate-500">Vehicle Integrity</p>
                <p className="font-mono text-sm font-black">92%</p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-amber-800">
                <p className="text-[10px] font-black uppercase">Route Alert</p>
                <p className="text-[11px]">Diversion active via Marina corridor.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </ParamedicShell>
  );
}
