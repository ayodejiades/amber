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
    <div className="min-h-screen bg-slate-950 flex flex-col">
      
      {/* Top Navigation Status Bar */}
      <div className="bg-accent p-6 flex items-center justify-between shadow-2xl z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-black text-xl">
            {eta}
          </div>
          <div>
            <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Minutes to Arrival</p>
            <p className="text-xl font-display font-black text-white">LUTH - Sector A</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Unit</p>
          <p className="text-lg font-mono font-bold text-white">AMB-09</p>
        </div>
      </div>

      {/* Main Map Area (Simulated) */}
      <div className="flex-grow relative bg-slate-900 overflow-hidden flex items-center justify-center">
        {/* Mock Map Background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i13!2i4928!3i3472!2m3!1e0!2sm!3i633190800!3m17!2sen!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m3!1e12!2m1!1s1!4e0!5m1!5f2')] bg-cover bg-center grayscale contrast-125" />
        
        {/* Navigation Prompt */}
        <div className="relative glass p-6 rounded-3xl border-white/20 shadow-2xl flex flex-col items-center gap-4 max-w-xs mx-auto">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-accent/50">
            <span className="text-3xl">⬆️</span>
          </div>
          <div className="text-center">
            <p className="text-xl font-display font-bold text-white">Turn Left in 400m</p>
            <p className="text-sm text-slate-400">Onto Herbert Macaulay Way</p>
          </div>
        </div>
      </div>

      {/* Bottom Patient & Action Panel */}
      <div className="glass-light border-t border-white/10 p-6 space-y-6 pb-12">
        
        {/* Patient Briefing */}
        <div className="flex items-center justify-between p-4 bg-slate-900/80 rounded-2xl border border-white/5">
          <div className="space-y-1">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Current Patient</p>
            <p className="text-lg font-display font-bold text-white">Stroke Suspect (M, 58)</p>
            <p className="text-xs text-accent font-medium">Critical • Pre-Alert Sent</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Vitals</p>
            <p className="text-lg font-mono font-bold text-success">BP: 160/95</p>
            <p className="text-xs text-slate-400">HR: 88 bpm</p>
          </div>
        </div>

        {/* Dynamic Action Button */}
        <div className="grid gap-4">
          {status === "en-route" && (
            <button 
              onClick={() => setStatus("arrived")}
              className="w-full py-5 bg-white text-slate-950 rounded-2xl font-display font-black text-xl active:scale-95 transition-transform shadow-xl"
            >
              SIGNAL ARRIVAL
            </button>
          )}

          {status === "arrived" && (
            <div className="space-y-4 animate-in fade-in zoom-in duration-300">
              <p className="text-center text-success font-bold flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-ping" />
                ARRIVED AT LUTH
              </p>
              <button 
                onClick={() => setStatus("handover")}
                className="w-full py-5 bg-success text-white rounded-2xl font-display font-black text-xl active:scale-95 transition-transform shadow-xl shadow-success/20"
              >
                COMPLETE HANDOVER
              </button>
            </div>
          )}

          {status === "handover" && (
            <div className="text-center p-6 space-y-4 animate-in fade-in slide-in-from-bottom-4">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto text-success text-3xl">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">Mission Complete</h3>
                <p className="text-slate-400 text-sm">Handover data synced with LUTH.</p>
              </div>
              <button 
                onClick={() => { setStatus("en-route"); setEta(12); }}
                className="w-full py-4 bg-slate-800 text-white rounded-xl font-bold"
              >
                RETURN TO BASE
              </button>
            </div>
          )}
        </div>

        {/* AI Field Nurse Placeholder */}
        <div className="flex items-center justify-center gap-2 py-2 border-t border-white/5 opacity-50">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Field Nurse Listening...</p>
        </div>
      </div>

    </div>
  );
}
