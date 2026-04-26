"use client";

import { useState, useEffect } from "react";

export default function ParamedicView() {
  const [status, setStatus] = useState<"en-route" | "arrived" | "handover">("en-route");
  const [eta, setEta] = useState(12);

  // Mock ETA countdown
  useEffect(() => {
    if (status === "en-route" && eta > 0) {
      const timer = setInterval(() => setEta(prev => prev - 1), 60000);
      return () => clearInterval(timer);
    }
  }, [status, eta]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body selection:bg-primary/30 text-slate-900">
      
      {/* Top Status Bar */}
      <div className="bg-primary p-4 md:p-6 flex items-center justify-between shadow-lg z-10">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-black text-lg md:text-xl font-display shrink-0">
            {eta}
          </div>
          <div>
            <p className="text-[8px] md:text-[10px] text-white/70 font-bold uppercase tracking-widest font-body">Minutes to Arrival</p>
            <p className="text-lg md:text-xl font-display font-black text-white uppercase tracking-tighter truncate max-w-[150px] sm:max-w-xs">LUTH - Ward A</p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[8px] md:text-[10px] text-white/70 font-bold uppercase tracking-widest font-body">Ambulance</p>
          <p className="text-base md:text-lg font-mono font-bold text-white">AMB-09</p>
        </div>
      </div>

      {/* Main Map Area */}
      <div className="flex-grow relative bg-slate-200 overflow-hidden flex items-center justify-center min-h-[300px]">
        <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale" />
        
        {/* Navigation Prompt */}
        <div className="relative bg-white/95 p-6 rounded-2xl shadow-xl flex flex-col items-center gap-4 max-w-[280px] md:max-w-xs mx-auto border border-slate-200 ">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-primary/40">
            <span className="material-symbols-outlined text-white text-2xl md:text-3xl">arrow_upward</span>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-display font-bold text-slate-900 uppercase tracking-tight">Turn Left in 400m</p>
            <p className="text-xs md:text-sm text-slate-600 font-medium">Onto Herbert Macaulay Way</p>
          </div>
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="bg-white border-t border-slate-200 p-4 md:p-6 space-y-4 md:space-y-6 pb-8 md:pb-12 shrink-0 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        
        {/* Patient Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 bg-slate-50 rounded-xl border border-slate-200 gap-3 sm:gap-0">
          <div className="space-y-1">
            <p className="text-[8px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest font-body">Current Patient</p>
            <p className="text-base md:text-lg font-display font-bold text-slate-900 tracking-tight uppercase">Stroke Suspect (M, 58)</p>
            <p className="text-[10px] md:text-xs text-primary font-bold font-body tracking-wider uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Critical &bull; Hospital Notified
            </p>
          </div>
          <div className="sm:text-right border-t border-slate-200 sm:border-0 pt-2 sm:pt-0">
            <p className="text-[8px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest font-body">Vitals</p>
            <p className="text-base md:text-lg font-mono font-bold text-emerald-600">BP: 160/95</p>
            <p className="text-[10px] md:text-xs text-slate-500 font-mono">HR: 88 bpm</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid gap-4">
          {status === "en-route" && (
            <button 
              onClick={() => setStatus("arrived")}
              className="w-full py-4 md:py-5 bg-slate-900 text-white rounded-xl font-semibold tracking-widest text-base md:text-lg active:scale-95 transition-transform shadow-xl uppercase hover:bg-slate-800"
            >
              MARK ARRIVED
            </button>
          )}

          {status === "arrived" && (
            <div className="space-y-4 animate-in fade-in zoom-in duration-300">
              <p className="text-center text-emerald-600 font-bold flex items-center justify-center gap-2 font-body tracking-widest text-xs md:text-sm bg-emerald-50 py-2 rounded-lg border border-emerald-100">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                ARRIVED AT LUTH
              </p>
              <button 
                onClick={() => setStatus("handover")}
                className="w-full py-4 md:py-5 bg-emerald-600 text-white rounded-xl font-semibold tracking-widest text-base md:text-lg active:scale-95 transition-transform shadow-xl shadow-emerald-600/20 uppercase hover:bg-emerald-700"
              >
                COMPLETE HANDOVER
              </button>
            </div>
          )}

          {status === "handover" && (
            <div className="text-center p-4 md:p-6 space-y-4 animate-in fade-in slide-in-from-bottom-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 text-3xl">
                <span className="material-symbols-outlined text-3xl md:text-4xl">check_circle</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 uppercase tracking-tight">Handover Complete</h3>
                <p className="text-slate-500 text-xs md:text-sm">Patient data synced with LUTH.</p>
              </div>
              <button 
                onClick={() => { setStatus("en-route"); setEta(12); }}
                className="w-full py-3 md:py-4 bg-white border border-slate-200 text-slate-700 rounded-lg font-bold font-body tracking-widest uppercase hover:bg-slate-50 transition-colors text-sm md:text-base shadow-sm"
              >
                BACK TO STANDBY
              </button>
            </div>
          )}
        </div>

        {/* AI Assistant */}
        <div className="flex items-center justify-center gap-2 py-2 border-t border-slate-100 pt-4">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 heartbeat" />
          <p className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest font-body">AI Assistant Active</p>
        </div>
      </div>
    </div>
  );
}
