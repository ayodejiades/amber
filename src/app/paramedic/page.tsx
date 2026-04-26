"use client";

import { useState, useEffect } from "react";

export default function ParamedicView() {
  const [status, setStatus] = useState<"en-route" | "arrived" | "handover">("en-route");
  const [eta, setEta] = useState(12);

  // Mock ETA countdown
  useEffect(() => {
    if (status === "en-route" && eta > 0) {
      const timer = setInterval(() => setEta(prev => prev - 1), 60000); // Decr every min
      return () => clearInterval(timer);
    }
  }, [status, eta]);

  return (
    <div className="min-h-screen bg-surface-container-lowest flex flex-col font-body selection:bg-primary/30">
      
      {/* Top Navigation Status Bar */}
      <div className="bg-primary p-6 flex items-center justify-between shadow-[0_4px_20px_rgba(239,68,68,0.3)] z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-black text-xl font-display">
            {eta}
          </div>
          <div>
            <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest font-caps">Minutes to Arrival</p>
            <p className="text-xl font-display font-black text-white uppercase tracking-tighter">LUTH - Sector A</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest font-caps">Unit</p>
          <p className="text-lg font-mono font-bold text-white">AMB-09</p>
        </div>
      </div>

      {/* Main Map Area (Simulated) */}
      <div className="flex-grow relative bg-slate-900 overflow-hidden flex items-center justify-center">
        {/* Mock Map Background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale contrast-125" />
        
        {/* Navigation Prompt */}
        <div className="relative glass-panel p-6 rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.15)] flex flex-col items-center gap-4 max-w-xs mx-auto border-primary/30">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-primary/50">
            <span className="material-symbols-outlined text-white text-3xl">arrow_upward</span>
          </div>
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-white uppercase tracking-tight">Turn Left in 400m</p>
            <p className="text-sm text-slate-400 font-medium">Onto Herbert Macaulay Way</p>
          </div>
        </div>
      </div>

      {/* Bottom Patient & Action Panel */}
      <div className="bg-surface-container-low border-t border-white/10 p-6 space-y-6 pb-12">
        
        {/* Patient Briefing */}
        <div className="flex items-center justify-between p-4 bg-surface-container rounded border border-white/5 tactical-corner">
          <div className="space-y-1">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest font-caps">Current Patient</p>
            <p className="text-lg font-display font-bold text-white tracking-tight uppercase">Stroke Suspect (M, 58)</p>
            <p className="text-xs text-primary font-bold font-caps tracking-wider uppercase">Critical • Pre-Alert Sent</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest font-caps">Vitals</p>
            <p className="text-lg font-mono font-bold text-tertiary">BP: 160/95</p>
            <p className="text-xs text-slate-400 font-mono">HR: 88 bpm</p>
          </div>
        </div>

        {/* Dynamic Action Button */}
        <div className="grid gap-4">
          {status === "en-route" && (
            <button 
              onClick={() => setStatus("arrived")}
              className="w-full py-5 bg-white text-surface-container-lowest rounded font-caps font-bold tracking-widest text-lg active:scale-95 transition-transform shadow-xl uppercase"
            >
              SIGNAL ARRIVAL
            </button>
          )}

          {status === "arrived" && (
            <div className="space-y-4 animate-in fade-in zoom-in duration-300">
              <p className="text-center text-tertiary font-bold flex items-center justify-center gap-2 font-caps tracking-widest text-sm">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-ping" />
                ARRIVED AT LUTH
              </p>
              <button 
                onClick={() => setStatus("handover")}
                className="w-full py-5 bg-tertiary text-surface-container-lowest rounded font-caps font-bold tracking-widest text-lg active:scale-95 transition-transform shadow-xl shadow-tertiary/20 uppercase"
              >
                COMPLETE HANDOVER
              </button>
            </div>
          )}

          {status === "handover" && (
            <div className="text-center p-6 space-y-4 animate-in fade-in slide-in-from-bottom-4">
              <div className="w-16 h-16 bg-tertiary/20 rounded-full flex items-center justify-center mx-auto text-tertiary text-3xl">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight">Mission Complete</h3>
                <p className="text-slate-400 text-sm">Handover data synced with LUTH.</p>
              </div>
              <button 
                onClick={() => { setStatus("en-route"); setEta(12); }}
                className="w-full py-4 bg-surface-container text-white rounded font-bold font-caps tracking-widest uppercase hover:bg-surface-container-high transition-colors"
              >
                RETURN TO BASE
              </button>
            </div>
          )}
        </div>

        {/* AI Field Nurse Placeholder */}
        <div className="flex items-center justify-center gap-2 py-2 border-t border-white/5 opacity-50">
          <div className="w-2 h-2 rounded-full bg-tertiary heartbeat" />
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-caps">AI Field Nurse Listening...</p>
        </div>
      </div>

    </div>
  );
}
