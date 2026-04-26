"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MapHUD } from "@/components/MapHUD";
import { mockStore } from "@/lib/mock-store";

const EMERGENCY_TYPES = [
  { label: "Road Accident", icon: "car_crash" },
  { label: "Cardiac", icon: "cardiology" },
  { label: "Trauma", icon: "personal_injury" },
  { label: "Burns", icon: "local_fire_department" },
  { label: "Maternity", icon: "pregnant_woman" },
  { label: "Other", icon: "more_horiz" },
];

const ASSET_CARDS = [
  { id: "Amber 01", status: "EN ROUTE", detail: "DEST: VICTORIA ISLAND", width: "w-[65%]", tone: "border-red-500 text-red-700 bg-red-50" },
  { id: "Amber 05", status: "STANDBY", detail: "LOC: CENTRAL HUB 4", width: "w-[40%]", tone: "border-cyan-500 text-cyan-700 bg-cyan-50" },
  { id: "Amber 09", status: "MAINTENANCE", detail: "EST. RETURN: 0400 HRS", width: "w-[15%]", tone: "border-slate-400 text-slate-600 bg-slate-50" },
  { id: "Amber 12", status: "EN ROUTE", detail: "DEST: LEKKI PHASE 1", width: "w-[30%]", tone: "border-amber-500 text-amber-700 bg-amber-50" },
];

export default function DispatchOverviewPage() {
  return (
    <Suspense fallback={null}>
      <DispatchContent />
    </Suspense>
  );
}

function DispatchContent() {
  const searchParams = useSearchParams();
  const [showModal, setShowModal] = useState(searchParams.get("newEmergency") === "true");
  const [modalStep, setModalStep] = useState<"form" | "matching" | "dispatched">("form");
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [incidentLocation, setIncidentLocation] = useState("");
  const [showHeatmap, setShowHeatmap] = useState(false);

  const openModal = () => {
    setShowModal(true);
    setModalStep("form");
    setSelectedType(null);
    setIncidentLocation("");
  };

  const handleDispatchAction = () => {
    if (selectedType === null || !incidentLocation) return;
    setModalStep("matching");

    // Simulate AI matching
    setTimeout(() => {
      setModalStep("dispatched");
      
      // Send to mock store for cross-portal handshake
      if (mockStore) {
        mockStore.dispatchIncident({
          id: "INC-" + Math.floor(Math.random() * 10000),
          type: EMERGENCY_TYPES[selectedType].label,
          location: incidentLocation,
          eta: "03:00",
          hospital: "Blue Cross Hospital, Apapa",
          patient: "Priority Member #1204"
        });
      }
    }, 2500);
  };

  return (
    <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-12">
      <section className="flex flex-col gap-4 lg:col-span-3">
        <div className="flex h-full min-h-[560px] flex-col rounded-xl border border-slate-200 bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Asset Monitor</h2>
            <span className="material-symbols-outlined text-cyan-700">sensors</span>
          </div>
          <div className="space-y-3 overflow-y-auto pr-1 custom-scrollbar">
            {ASSET_CARDS.map((asset) => (
              <article key={asset.id} className={`rounded-r-lg border-l-2 p-3 ${asset.tone}`}>
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-mono text-sm font-bold">{asset.id}</p>
                  <span className="rounded px-2 py-1 text-[10px] font-black">{asset.status}</span>
                </div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em]">{asset.detail}</p>
                <div className="h-1.5 rounded-full bg-white/70">
                  <div className={`h-1.5 rounded-full bg-current ${asset.width}`} />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">Active</p>
              <p className="font-mono text-xl font-black">14</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">Available</p>
              <p className="font-mono text-xl font-black text-cyan-700">08</p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:col-span-6">
        <article className="relative h-full min-h-[560px] overflow-hidden rounded-xl border border-red-200 bg-white shadow-[0_0_30px_rgba(239,68,68,0.09)]">
          <MapHUD
            className="h-full"
            simulateMovement
            showHeatmap={showHeatmap}
            markers={[
              { id: "amb-01", lng: 3.37, lat: 6.51, type: "ambulance", label: "Amber 01" },
              { id: "luth", lng: 3.36, lat: 6.52, type: "hospital", label: "LUTH" },
              { id: "incident-1", lng: 3.38, lat: 6.50, type: "incident", label: "Cardiac Incident" },
            ]}
          />
          <div className="pointer-events-none absolute inset-0 p-4">
            <div className="flex justify-between">
              <div className="rounded border border-slate-200 bg-white/90 p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-amber-700">Coordinates</p>
                <p className="font-mono text-xs font-bold">6 deg 27N 3 deg 23E</p>
              </div>
              <div className="rounded border border-slate-200 bg-white/90 p-3 text-right">
                <p className="text-[10px] uppercase tracking-[0.16em] text-cyan-700">Signal Strength</p>
                <p className="font-mono text-xs font-bold">99.8% Crypto-Link</p>
              </div>
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-slate-300 bg-white/95 px-6 py-3">
              <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.14em]">
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-red-500" /> Fleet</span>
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-500" /> Medical Hubs</span>
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-500" /> Active Incidents</span>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="lg:col-span-3">
        <article className="flex h-full min-h-[560px] flex-col rounded-xl border border-slate-200 bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Live Alerts</h2>
            <span className="material-symbols-outlined text-red-600">wifi_tethering</span>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto pr-1 custom-scrollbar">
            <article className="rounded border border-red-200 bg-red-50 p-4">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.14em] text-red-700">ID: #8821-X</p>
              <p className="mb-2 text-xs font-black uppercase">Cardiac Incident - VI</p>
              <div className="mb-3 rounded border border-cyan-200 bg-cyan-50 p-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.14em] text-cyan-700">AI Hospital Match</span>
                  <span className="text-[10px] font-mono font-bold text-cyan-700">98% Score</span>
                </div>
                <p className="text-xs font-bold">Reddington Victoria Island</p>
                <p className="text-[10px] text-slate-600">ICU Bed 04 available | Cardiology team on-site</p>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 rounded bg-red-600 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-white">
                  Dispatch Amber 01
                </button>
                <button className="rounded border border-slate-300 px-2 text-slate-600">
                  <span className="material-symbols-outlined text-sm">more_vert</span>
                </button>
              </div>
            </article>
            <article className="rounded border border-slate-200 bg-slate-50 p-3">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-[10px] font-black uppercase">Trauma - Lekki 1</p>
                <span className="text-[9px] font-mono text-slate-500">2m ago</span>
              </div>
              <p className="text-[10px] text-slate-600">Patient: VIP Member #0042</p>
            </article>
            <article className="rounded border border-slate-200 bg-slate-50 p-3">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-[10px] font-black uppercase">Resolved - Hub 2</p>
                <span className="text-[9px] font-mono text-slate-500">14m ago</span>
              </div>
              <p className="text-[10px] text-slate-600">Transfer complete to St. Nicholas</p>
            </article>
          </div>
          <div className="mt-4 space-y-3 border-t border-slate-200 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">Predictive Heatmap</span>
              <button
                onClick={() => setShowHeatmap(!showHeatmap)}
                className={`relative h-5 w-10 rounded-full ${showHeatmap ? "bg-red-600" : "bg-slate-300"}`}
              >
                <span className={`absolute top-1 h-3 w-3 rounded-full bg-white transition-all ${showHeatmap ? "left-6" : "left-1"}`} />
              </button>
            </div>
            <button
              onClick={openModal}
              className="w-full rounded bg-red-600 py-3 text-xs font-black uppercase tracking-[0.14em] text-white"
            >
              New Emergency
            </button>
          </div>
        </article>
      </section>

      {/* New Emergency Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-2xl">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-slate-100 p-5 flex justify-between items-center rounded-t-2xl z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">emergency</span>
                </div>
                <div>
                  <h2 className="font-display font-bold text-slate-900">Protocol Initiation</h2>
                  <p className="text-xs text-slate-500">Manual dispatch override</p>
                </div>
              </div>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-5">
              {/* Step 1: Form */}
              {modalStep === "form" && (
                <div className="space-y-5">
                  {/* Emergency Type Grid */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Incident Type</label>
                    <div className="grid grid-cols-3 gap-2">
                      {EMERGENCY_TYPES.map((type, i) => (
                        <button
                          key={type.label}
                          type="button"
                          onClick={() => setSelectedType(i)}
                          className={`flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl border text-[10px] font-bold transition-all uppercase tracking-tight ${
                            selectedType === i
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200"
                          }`}
                        >
                          <span className="material-symbols-outlined text-lg">{type.icon}</span>
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Incident Location */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Scene Coordinates / Address</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">location_on</span>
                      <input
                        type="text"
                        value={incidentLocation}
                        onChange={(e) => setIncidentLocation(e.target.value)}
                        placeholder="Enter scene location..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-slate-900 placeholder:text-slate-400 font-medium"
                      />
                    </div>
                  </div>

                  {/* Patient Info */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Initial Assessment <span className="text-slate-300 font-normal">(optional)</span></label>
                    <textarea
                      placeholder="Enter patient status or triage notes..."
                      rows={2}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-slate-900 placeholder:text-slate-400 resize-none font-medium"
                    />
                  </div>

                  {/* Dispatch Button */}
                  <button
                    onClick={handleDispatchAction}
                    type="button"
                    disabled={selectedType === null || !incidentLocation}
                    className="w-full py-4 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 uppercase tracking-widest font-caps"
                  >
                    <span className="material-symbols-outlined text-lg">bolt</span>
                    Identify Hub & Dispatch
                  </button>
                </div>
              )}

              {/* Step 2: Matching */}
              {modalStep === "matching" && (
                <div className="py-8 text-center animate-pulse">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">radar</span>
                  </div>
                  <h3 className="font-display font-bold text-slate-900 mb-2 uppercase tracking-tight">System Matching</h3>
                  <p className="text-xs text-slate-500 mb-8 uppercase font-caps tracking-widest">Scanning Network Assets...</p>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-2/3 animate-progress"></div>
                  </div>
                  <div className="mt-6 space-y-3 text-left text-[11px] font-medium uppercase font-caps tracking-wide">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <span className="material-symbols-outlined text-base">check_circle</span>
                      <span>Verified: 3 Hospitals within 5km</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600">
                      <span className="material-symbols-outlined text-base">check_circle</span>
                      <span>Matching: Blue Cross VI (Optimal)</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <span className="material-symbols-outlined text-base animate-spin">sync</span>
                      <span>Assigning nearest unit...</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Dispatched */}
              {modalStep === "dispatched" && (
                <div className="py-4">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="material-symbols-outlined text-emerald-600 text-3xl">verified</span>
                    </div>
                    <h3 className="font-display font-bold text-slate-900 mb-1 uppercase tracking-tight">Unit Dispatched</h3>
                    <p className="text-xs text-slate-500 font-caps tracking-widest uppercase">Protocol Active · Fleet Synced</p>
                  </div>

                  {/* Assignment Summary */}
                  <div className="space-y-3">
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-3">Assigned Asset</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-mono font-black text-xl text-slate-900">AMB-08</span>
                          <p className="text-[10px] text-slate-500 font-bold uppercase">Sector: Apapa</p>
                        </div>
                        <div className="text-right">
                          <span className="font-mono font-black text-xl text-primary">03:00</span>
                          <p className="text-[10px] text-slate-500 font-bold uppercase">Live ETA</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-3">Destination Facility</p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                          <span className="material-symbols-outlined text-2xl">local_hospital</span>
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-slate-900 text-sm uppercase truncate">Blue Cross Hospital, VI</p>
                          <p className="text-[10px] text-emerald-600 font-bold uppercase">ER Bed #04 Reserved</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full mt-6 py-4 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest font-caps hover:bg-slate-800 transition-all shadow-xl"
                  >
                    Confirm & Track
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
