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
      <div className="bg-primary p-4 md:p-6 flex items-center justify-between shadow-[0_4px_20px_rgba(239,68,68,0.3)] z-10">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-black text-lg md:text-xl font-display shrink-0">
            {eta}
          </div>
          <div>
            <p className="text-[8px] md:text-[10px] text-white/70 font-bold uppercase tracking-widest font-caps">Minutes to Arrival</p>
            <p className="text-lg md:text-xl font-display font-black text-white uppercase tracking-tighter truncate max-w-[150px] sm:max-w-xs">LUTH - Sector A</p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[8px] md:text-[10px] text-white/70 font-bold uppercase tracking-widest font-caps">Unit</p>
          <p className="text-base md:text-lg font-mono font-bold text-white">AMB-09</p>
        </div>
      </div>

      {/* Main Map Area (Simulated) */}
      <div className="flex-grow relative bg-slate-900 overflow-hidden flex items-center justify-center min-h-[300px]">
        {/* Mock Map Background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale contrast-125" />
        
        {/* Navigation Prompt */}
        <div className="relative glass-panel p-6 rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.15)] flex flex-col items-center gap-4 max-w-[280px] md:max-w-xs mx-auto border-primary/30">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-primary/50">
            <span className="material-symbols-outlined text-white text-2xl md:text-3xl">arrow_upward</span>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tight">Turn Left in 400m</p>
            <p className="text-xs md:text-sm text-slate-400 font-medium">Onto Herbert Macaulay Way</p>
          </div>
        </div>
      </div>

      {/* Bottom Patient & Action Panel */}
      <div className="bg-surface-container-low border-t border-white/10 p-4 md:p-6 space-y-4 md:space-y-6 pb-8 md:pb-12 shrink-0">
        
        {/* Patient Briefing */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 bg-surface-container rounded border border-white/5 tactical-corner gap-3 sm:gap-0">
          <div className="space-y-1">
            <p className="text-[8px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest font-caps">Current Patient</p>
            <p className="text-base md:text-lg font-display font-bold text-white tracking-tight uppercase">Stroke Suspect (M, 58)</p>
            <p className="text-[10px] md:text-xs text-primary font-bold font-caps tracking-wider uppercase">Critical • Pre-Alert Sent</p>
          </div>
          <div className="sm:text-right border-t border-white/5 sm:border-0 pt-2 sm:pt-0">
            <p className="text-[8px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest font-caps">Vitals</p>
            <p className="text-base md:text-lg font-mono font-bold text-tertiary">BP: 160/95</p>
            <p className="text-[10px] md:text-xs text-slate-400 font-mono">HR: 88 bpm</p>
          </div>
        </div>

        {/* Dynamic Action Button */}
        <div className="grid gap-4">
          {status === "en-route" && (
            <button 
              onClick={() => setStatus("arrived")}
              className="w-full py-4 md:py-5 bg-white text-surface-container-lowest rounded font-caps font-bold tracking-widest text-base md:text-lg active:scale-95 transition-transform shadow-xl uppercase"
            >
              SIGNAL ARRIVAL
            </button>
          )}

          {status === "arrived" && (
            <div className="space-y-4 animate-in fade-in zoom-in duration-300">
              <p className="text-center text-tertiary font-bold flex items-center justify-center gap-2 font-caps tracking-widest text-xs md:text-sm">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-ping" />
                ARRIVED AT LUTH
              </p>
              <button 
                onClick={() => setStatus("handover")}
                className="w-full py-4 md:py-5 bg-tertiary text-surface-container-lowest rounded font-caps font-bold tracking-widest text-base md:text-lg active:scale-95 transition-transform shadow-xl shadow-tertiary/20 uppercase"
              >
                COMPLETE HANDOVER
              </button>
            </div>
          )}

          {status === "handover" && (
            <div className="text-center p-4 md:p-6 space-y-4 animate-in fade-in slide-in-from-bottom-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-tertiary/20 rounded-full flex items-center justify-center mx-auto text-tertiary text-3xl">
                <span className="material-symbols-outlined text-3xl md:text-4xl">check_circle</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tight">Mission Complete</h3>
                <p className="text-slate-400 text-xs md:text-sm">Handover data synced with LUTH.</p>
              </div>
              <button 
                onClick={() => { setStatus("en-route"); setEta(12); }}
                className="w-full py-3 md:py-4 bg-surface-container text-white rounded font-bold font-caps tracking-widest uppercase hover:bg-surface-container-high transition-colors text-sm md:text-base"
              >
                RETURN TO BASE
              </button>
            </div>
          )}
        </div>

        {/* AI Field Nurse Placeholder */}
        <div className="flex items-center justify-center gap-2 py-2 border-t border-white/5 opacity-50">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-tertiary heartbeat" />
          <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest font-caps">AI Field Nurse Listening...</p>
        </div>
      </div>

    </div>
  );
}
