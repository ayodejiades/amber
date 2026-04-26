"use client";

import { useState, useEffect } from "react";
import { MapHUD } from "@/components/MapHUD";
import { TelemetryChart } from "@/components/TelemetryChart";
import { mockStore } from "@/lib/mock-store";
import { MockDataNotice } from "@/components/mock-data-notice";

export default function ParamedicPage() {
  const [activeIncident, setActiveIncident] = useState<any>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [bedConfirmed, setBedConfirmed] = useState(false);
  const [bedDetails, setBedDetails] = useState("");
  const [triageStatus, setTriageStatus] = useState("STABLE");

  useEffect(() => {
    // Check for existing incident
    if (mockStore) {
      const existing = mockStore.getActiveIncident();
      if (existing) setActiveIncident(existing);

      const handleNewIncident = (e: any) => {
        setActiveIncident(e.detail);
        setShowNotification(true);
        // Play alert sound logic could go here
      };

      const handleClearIncident = () => {
        setActiveIncident(null);
      };

      const handleBedConfirmed = (e: any) => {
        setBedConfirmed(true);
        setBedDetails(e.detail.bedDetails);
      };

      mockStore.addEventListener('new-incident', handleNewIncident);
      mockStore.addEventListener('clear-incident', handleClearIncident);
      mockStore.addEventListener('bed-confirmed', handleBedConfirmed);

      return () => {
        if (mockStore) {
          mockStore.removeEventListener('new-incident', handleNewIncident);
          mockStore.removeEventListener('clear-incident', handleClearIncident);
          mockStore.removeEventListener('bed-confirmed', handleBedConfirmed);
        }
      };
    }
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen font-body pb-20 md:pb-0">
      {/* Mobile-First Layout */}
      <main className="max-w-md mx-auto h-screen flex flex-col relative bg-white shadow-2xl">
        
        {/* Header HUD */}
        <header className="p-4 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-black italic text-xs">A</div>
            <div>
              <h1 className="text-sm font-black text-slate-900 tracking-tight uppercase">AMB-08 UNIT</h1>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Ready</span>
              </div>
            </div>
          </div>
          <button className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-400">
            <span className="material-symbols-outlined text-xl">account_circle</span>
          </button>
        </header>

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
          
          {!activeIncident ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-6">
              <div className="w-24 h-24 bg-slate-50 border-2 border-dashed border-slate-200 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-slate-200">radar</span>
              </div>
              <div>
                <h2 className="font-display font-bold text-slate-900 text-lg uppercase tracking-tight">Awaiting Dispatch</h2>
                <p className="text-sm text-slate-400 mt-2">Standby at Sector: Apapa. Maintain active connection for incident alerts.</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4 p-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Incident Banner */}
              <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary"></div>
                <div className="flex justify-between items-start mb-3">
                   <span className="bg-primary text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest">Active Call</span>
                   <span className="text-[10px] font-mono font-bold text-primary">ID: {activeIncident.id}</span>
                </div>
                <h2 className="text-xl font-display font-black text-slate-900 uppercase leading-tight mb-1">{activeIncident.type}</h2>
                <p className="text-xs font-bold text-slate-500 flex items-center gap-1 uppercase tracking-tight mb-4">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  {activeIncident.location}
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary text-white py-3 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-sm">navigation</span> Navigate
                  </button>
                  <button className="px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 font-bold text-xs">
                    <span className="material-symbols-outlined">call</span>
                  </button>
                </div>
              </div>

              {/* Patient EMR Profile (New Recommendation #8) */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm animate-in fade-in zoom-in duration-500">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Amber Patient Profile</h3>
                  <span className="text-[8px] bg-slate-900 text-white px-2 py-0.5 rounded uppercase font-black tracking-widest">Encrypted EMR</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Blood Type</p>
                    <p className="text-sm font-black text-primary">{activeIncident.patientProfile?.bloodType || 'O+'}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Allergies</p>
                    <p className="text-[10px] font-bold text-slate-700">{activeIncident.patientProfile?.allergies.join(', ') || 'None'}</p>
                  </div>
                </div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Medical History</p>
                <p className="text-[10px] text-slate-600 line-clamp-2 italic">{activeIncident.patientProfile?.history}</p>
              </div>

              {/* Triage Panel (New Recommendation #2) */}
              <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                 <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Field Triage (AVPU Scale)</h3>
                 <div className="grid grid-cols-4 gap-2">
                    {['A', 'V', 'P', 'U'].map((lvl) => (
                      <button 
                        key={lvl}
                        onClick={() => {
                          const status = lvl === 'A' ? 'ALERT' : lvl === 'V' ? 'VERBAL' : lvl === 'P' ? 'PAIN' : 'UNRESPONSIVE';
                          setTriageStatus(status);
                          if (mockStore) mockStore.updateTriage(activeIncident.id, status);
                        }}
                        className={`py-3 rounded-lg font-black text-sm transition-all ${
                          triageStatus.startsWith(lvl) 
                          ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                          : 'bg-slate-50 text-slate-400 border border-slate-100'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                 </div>
                 <p className="text-center text-[9px] font-black text-slate-300 mt-3 tracking-widest uppercase">
                   Current: {triageStatus}
                 </p>
              </div>

              {/* Patient Telemetry (RECHARTS) */}
              <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Bio-Telemetry Feed</h3>
                  <span className="text-[9px] font-bold text-primary animate-pulse bg-primary/5 px-2 py-0.5 rounded uppercase tracking-widest">Live</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Heart Rate</span>
                      <span className="text-sm font-black text-slate-900">88 BPM</span>
                    </div>
                    <TelemetryChart type="heart" color="#EF4444" seed={activeIncident.telemetrySeed} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Oxygen Sat</span>
                      <span className="text-sm font-black text-slate-900">98%</span>
                    </div>
                    <TelemetryChart type="spo2" color="#3B82F6" seed={activeIncident.telemetrySeed} />
                  </div>
                </div>
              </div>

              {/* Destination HUD */}
              <div className="bg-slate-950 text-white rounded-xl p-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <span className="material-symbols-outlined text-4xl">local_hospital</span>
                </div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Hospital Connection</p>
                <p className="font-bold text-sm uppercase truncate mb-1">{activeIncident.hospital}</p>
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] font-bold uppercase transition-colors ${bedConfirmed ? 'text-emerald-500' : 'text-slate-400'}`}>
                    {bedConfirmed ? (
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">check_circle</span>
                        {bedDetails} Reserved
                      </span>
                    ) : 'Awaiting confirmation...'}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">ETA 12:44</span>
                </div>
              </div>
            </div>
          )}

          {/* Map Navigation (Mapbox Fallback) */}
          <div className="px-4 pb-4 mt-auto">
            <div className="h-48 relative rounded-xl overflow-hidden shadow-inner border border-slate-100">
               <MapHUD 
                 className="h-full" 
                 zoom={14} 
                 center={activeIncident ? [3.37, 6.48] : [3.38, 6.52]}
                 markers={activeIncident ? [
                   { id: 'scene', lng: 3.37, lat: 6.48, type: 'incident', label: 'Scene' },
                   { id: 'unit', lng: 3.38, lat: 6.49, type: 'ambulance', label: 'AMB-08' }
                 ] : []}
               />
            </div>
          </div>
        </div>

        {/* Footer Controls */}
        <nav className="p-4 border-t border-slate-100 flex justify-around items-center bg-white shrink-0">
          <button className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[8px] font-black uppercase tracking-widest">Main</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-300">
            <span className="material-symbols-outlined">medical_information</span>
            <span className="text-[8px] font-black uppercase tracking-widest">Vitals</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-300">
            <span className="material-symbols-outlined">history</span>
            <span className="text-[8px] font-black uppercase tracking-widest">Logs</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-300">
             <span className="material-symbols-outlined">settings_suggest</span>
             <span className="text-[8px] font-black uppercase tracking-widest">Setup</span>
          </button>
        </nav>

        {/* Notification Overlay */}
        {showNotification && (
          <div className="absolute inset-x-4 top-20 z-50 bg-primary text-white p-4 rounded-xl shadow-2xl flex items-center justify-between animate-in slide-in-from-top-full duration-300">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined heartbeat">emergency_share</span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">New Assignment</p>
                <p className="text-sm font-bold truncate max-w-[180px]">INCIDENT DETECTED</p>
              </div>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="bg-white/20 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase"
            >
              Acknowledge
            </button>
          </div>
        )}

        <MockDataNotice />
      </main>
    </div>
  );
}
