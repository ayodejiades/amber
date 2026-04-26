"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const EMERGENCY_TYPES = [
  { label: "Road Accident", icon: "car_crash" },
  { label: "Cardiac", icon: "cardiology" },
  { label: "Trauma", icon: "personal_injury" },
  { label: "Burns", icon: "local_fire_department" },
  { label: "Maternity", icon: "pregnant_woman" },
  { label: "Other", icon: "more_horiz" },
];

const AVAILABLE_UNITS = [
  { id: "AMB-05", location: "Hub 4, Surulere", eta: "6 min" },
  { id: "AMB-08", location: "Costain, Apapa", eta: "3 min" },
  { id: "AMB-14", location: "Orile Depot", eta: "9 min" },
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
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState<"form" | "matching" | "dispatched">("form");
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [incidentLocation, setIncidentLocation] = useState("");
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null);

  useEffect(() => {
    if (searchParams.get("newEmergency") === "true") {
      openModal();
    }
  }, [searchParams]);

  const openModal = () => {
    setShowModal(true);
    setModalStep("form");
    setSelectedType(null);
    setIncidentLocation("");
    setSelectedUnit(null);
  };

  const handleDispatch = () => {
    if (selectedType === null || !incidentLocation) return;
    setModalStep("matching");

    // Simulate AI matching
    setTimeout(() => {
      setSelectedUnit(1); // Auto-select AMB-08 (closest)
      setModalStep("dispatched");
    }, 2500);
  };

  return (
    <div className="p-4 h-full flex flex-col lg:grid lg:grid-cols-12 gap-4 overflow-y-auto lg:overflow-hidden pb-8 lg:pb-4">
      {/* Left: Ambulance Monitor */}
      <section className="lg:col-span-3 flex flex-col gap-4">
        <div className="bg-white border border-slate-200 rounded-xl flex flex-col h-[400px] lg:h-full shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center shrink-0">
            <h2 className="font-display font-bold text-slate-900 uppercase tracking-widest text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base">airport_shuttle</span> Ambulance Monitor
            </h2>
            <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded font-bold">142 Active</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
            {/* Active Unit Card */}
            <div className="bg-slate-50 border border-primary/20 rounded-lg p-3 shadow-sm relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-mono text-xs font-bold text-slate-900">AMB-01</span>
                  <p className="text-[9px] text-primary font-semibold uppercase tracking-wider">En route to scene</p>
                </div>
                <span className="text-[10px] text-slate-500 font-bold font-mono">ETA 04m</span>
              </div>
              <div className="text-xs text-slate-600 mb-2 font-mono">
                TO: APAPA WHARF
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[80%]"></div>
              </div>
            </div>

            {/* Standby Unit Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-3 relative overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-mono text-xs font-bold text-slate-700">AMB-05</span>
                  <p className="text-[9px] text-emerald-600 font-semibold uppercase tracking-wider">Standby</p>
                </div>
              </div>
              <div className="text-xs text-slate-500 font-mono">
                AT: HUB 4
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-mono text-xs font-bold text-slate-900">AMB-12</span>
                  <p className="text-[9px] text-amber-600 font-semibold uppercase tracking-wider">At hospital</p>
                </div>
              </div>
              <div className="text-xs text-slate-600 font-mono">
                LOC: LUTH ER
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Center: Live Network Monitor */}
      <section className="lg:col-span-6 flex flex-col gap-4">
        <div className="bg-white border border-slate-200 rounded-xl flex-1 relative overflow-hidden shadow-sm flex flex-col min-h-[400px]">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Map" 
              className="w-full h-full object-cover opacity-50 grayscale" 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90"></div>
          </div>
          
          <div className="relative z-10 p-4 flex justify-between items-start shrink-0">
            <h2 className="font-display font-bold text-slate-900 text-sm flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200">
              <span className="material-symbols-outlined text-primary text-base">my_location</span> Live Network Monitor
            </h2>
            <div className="flex gap-2">
              <span className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-[10px] font-semibold flex items-center gap-2 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Connected
              </span>
            </div>
          </div>

          {/* Map Entities */}
          <div className="relative z-10 flex-1 w-full h-full">
            {/* Active Incident */}
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 border border-primary bg-primary/10 rounded-full flex items-center justify-center relative z-10 text-primary">
                <span className="material-symbols-outlined text-2xl">emergency</span>
              </div>
            </div>

            {/* Hospital Node */}
            <div className="absolute top-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-8 h-8 border border-emerald-500 bg-white rounded-lg flex items-center justify-center shadow-lg relative z-10 text-emerald-600">
                <span className="material-symbols-outlined text-lg">local_hospital</span>
              </div>
              <span className="mt-1 bg-white border border-slate-200 text-slate-700 text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm">LUTH</span>
            </div>
          </div>

          <div className="relative z-10 p-4 shrink-0">
            <div className="bg-white border border-slate-200 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-4 shadow-lg">
              <div>
                <p className="text-[10px] font-semibold text-slate-500 mb-1">Selected Unit</p>
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-xl text-slate-900">AMB-01</span>
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-semibold border border-primary/20">Critical</span>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6 text-right w-full sm:w-auto justify-between sm:justify-end border-t border-slate-100 sm:border-0 pt-3 sm:pt-0">
                <div>
                  <span className="block text-[10px] font-medium text-slate-500">ETA</span>
                  <span className="font-mono font-bold text-lg text-primary">04:12</span>
                </div>
                <div>
                  <span className="block text-[10px] font-medium text-slate-500">Speed</span>
                  <span className="font-mono font-bold text-lg text-slate-900">84 km/h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right: Live Stats */}
      <section className="lg:col-span-3 flex flex-col gap-4">
        <div className="bg-white border border-slate-200 rounded-xl flex-1 flex flex-col shadow-sm overflow-hidden min-h-[400px]">
          <div className="p-4 border-b border-slate-100 bg-slate-50 shrink-0">
            <h2 className="font-display font-bold text-slate-900 text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base">route</span> Live Stats
            </h2>
          </div>
          
          <div className="flex-1 p-4 space-y-6 overflow-y-auto custom-scrollbar">
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-[10px] font-medium text-slate-500">Network Load</span>
                <span className="font-mono text-sm font-bold text-primary">94%</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[94%]"></div>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-medium text-slate-500 block mb-3">System Health</span>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-100">
                  <span className="text-xs text-slate-700 font-semibold">API Gateway</span>
                  <span className="text-[10px] text-emerald-600 font-bold">12ms</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-100">
                  <span className="text-xs text-slate-700 font-semibold">Database</span>
                  <span className="text-[10px] text-emerald-600 font-bold">45ms</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-100">
                  <span className="text-xs text-slate-700 font-semibold">Connection</span>
                  <span className="text-[10px] text-emerald-600 font-bold">Strong</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-slate-100">
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-lg text-xs shadow-lg shadow-primary/20 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">send</span> Send Amber 01
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New Emergency Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowModal(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-md max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-slate-100 p-5 flex justify-between items-center rounded-t-2xl z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">emergency</span>
                </div>
                <div>
                  <h2 className="font-display font-bold text-slate-900">New Emergency</h2>
                  <p className="text-xs text-slate-500">Dispatch an ambulance to the scene</p>
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
                    <label className="text-xs font-semibold text-slate-500">Emergency Type</label>
                    <div className="grid grid-cols-3 gap-2">
                      {EMERGENCY_TYPES.map((type, i) => (
                        <button
                          key={type.label}
                          type="button"
                          onClick={() => setSelectedType(i)}
                          className={`flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl border text-xs font-medium transition-colors ${
                            selectedType === i
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
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
                    <label className="text-xs font-semibold text-slate-500">Incident Location</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">location_on</span>
                      <input
                        type="text"
                        value={incidentLocation}
                        onChange={(e) => setIncidentLocation(e.target.value)}
                        placeholder="Enter address or landmark"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 text-sm text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Patient Info */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500">Caller Info <span className="text-slate-400 font-normal">(optional)</span></label>
                    <textarea
                      placeholder="Patient details, vitals, number of casualties..."
                      rows={2}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 text-sm text-slate-900 placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {/* Dispatch Button */}
                  <button
                    onClick={handleDispatch}
                    disabled={selectedType === null || !incidentLocation}
                    className="w-full py-3.5 bg-primary text-white rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-lg">search</span>
                    Find Ambulance & Hospital
                  </button>
                </div>
              )}

              {/* Step 2: Matching */}
              {modalStep === "matching" && (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">search</span>
                  </div>
                  <h3 className="font-display font-bold text-slate-900 mb-2">Matching in progress</h3>
                  <p className="text-sm text-slate-500 mb-8">Scanning hospitals and ambulances...</p>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-2/3 transition-all duration-1000"></div>
                  </div>
                  <div className="mt-6 space-y-3 text-left text-sm">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <span className="material-symbols-outlined text-lg">check_circle</span>
                      <span className="font-medium">3 hospitals within range</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600">
                      <span className="material-symbols-outlined text-lg">check_circle</span>
                      <span className="font-medium">Blue Cross Hospital — ER bed available</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <span className="material-symbols-outlined text-lg">pending</span>
                      <span className="font-medium">Selecting nearest ambulance...</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Dispatched */}
              {modalStep === "dispatched" && (
                <div className="py-4">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-emerald-50 border-2 border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="material-symbols-outlined text-emerald-600 text-3xl">check</span>
                    </div>
                    <h3 className="font-display font-bold text-slate-900 mb-1">Ambulance Dispatched</h3>
                    <p className="text-sm text-slate-500">Unit assigned and en route to scene.</p>
                  </div>

                  {/* Assignment Summary */}
                  <div className="space-y-3">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="text-xs text-slate-500 font-medium mb-2">Assigned Unit</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-mono font-bold text-lg text-slate-900">AMB-08</span>
                          <p className="text-xs text-slate-500">Costain, Apapa</p>
                        </div>
                        <div className="text-right">
                          <span className="font-mono font-bold text-lg text-primary">03:00</span>
                          <p className="text-xs text-slate-500">ETA</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="text-xs text-slate-500 font-medium mb-2">Destination Hospital</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center">
                          <span className="material-symbols-outlined text-emerald-600">local_hospital</span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">Blue Cross Hospital, Apapa</p>
                          <p className="text-xs text-slate-500">ER Bed reserved · Dr. Ngozi Okafor</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-700 flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">info</span>
                      Pre-arrival alert sent to hospital. Trauma team notified.
                    </div>
                  </div>

                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full mt-5 py-3.5 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-slate-800 transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating New Emergency Button - replaces the sidebar one */}
      <button
        onClick={openModal}
        className="fixed bottom-6 left-6 z-40 lg:hidden bg-primary text-white px-6 py-4 rounded-full font-semibold text-sm shadow-xl shadow-primary/30 hover:bg-primary/90 transition-colors flex items-center gap-2"
      >
        <span className="material-symbols-outlined">add</span> New Emergency
      </button>
    </div>
  );
}
