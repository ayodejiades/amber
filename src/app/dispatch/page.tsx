"use client";

import { useState } from "react";
import { findOptimalHospital, MOCK_HOSPITALS, PatientRequest, MatchResult } from "@/lib/matching";
import LagosPitchMap from "@/components/LagosPitchMap";

const SEVERITIES = [
  { id: "critical", label: "Critical", color: "bg-red-500" },
  { id: "severe", label: "Severe", color: "bg-orange-500" },
  { id: "moderate", label: "Moderate", color: "bg-blue-500" },
];

const SPECIALISTS = [
  "Trauma Surgeon",
  "Cardiologist",
  "Neurologist (Stroke)",
  "Pediatrician",
  "Obstetrician",
  "General Surgeon",
];

export default function DispatchPage() {
  const [matching, setMatching] = useState(false);
  const [results, setResults] = useState<MatchResult[]>([]);
  const [selectedSeverity, setSelectedSeverity] = useState("severe");
  const [selectedSpecialist, setSelectedSpecialist] = useState<string | null>(null);

  const handleMatch = (e: React.FormEvent) => {
    e.preventDefault();
    setMatching(true);
    
    // Simulate Processing Delay
    setTimeout(() => {
      const patient: PatientRequest = {
        location: { lat: 6.45, lng: 3.39 }, // Mock VI location
        severity: selectedSeverity as any,
        requiredSpecialist: selectedSpecialist || undefined,
      };

      const matches = findOptimalHospital(patient, MOCK_HOSPITALS);
      setResults(matches);
      setMatching(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 p-6 lg:p-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* Left Column: Intake Form */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold text-white">Command Center</h1>
              <p className="text-slate-400 mt-1">AI-Assisted Emergency Routing</p>
            </div>
            <div className="px-4 py-2 bg-slate-900 rounded-full border border-white/5 text-xs font-mono text-slate-500">
              MATCH_ENGINE_V1.2
            </div>
          </div>

          <form onSubmit={handleMatch} className="glass rounded-3xl p-8 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Patient ID / Reference</label>
                <input 
                  type="text" 
                  defaultValue="CAS-7702-X"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Current Location (GPS)</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    readOnly
                    value="6.4500° N, 3.3900° E"
                    className="flex-grow bg-slate-900/20 border border-white/5 rounded-xl px-4 py-3 text-slate-500 cursor-not-allowed"
                  />
                  <button type="button" className="p-3 bg-slate-800 rounded-xl border border-white/10">📍</button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium text-slate-400">Triage Severity</label>
              <div className="grid grid-cols-3 gap-4">
                {SEVERITIES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedSeverity(s.id)}
                    className={`p-4 rounded-2xl border transition-all text-left ${selectedSeverity === s.id ? 'bg-slate-800 border-white/30 ring-1 ring-white/20' : 'bg-slate-900 border-white/5 opacity-50'}`}
                  >
                    <div className={`w-3 h-3 rounded-full ${s.color} mb-2`} />
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">{s.label}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium text-slate-400">Required Specialist</label>
              <div className="flex flex-wrap gap-2">
                {SPECIALISTS.map((spec) => (
                  <button
                    key={spec}
                    type="button"
                    onClick={() => setSelectedSpecialist(selectedSpecialist === spec ? null : spec)}
                    className={`px-4 py-2 rounded-full border text-sm transition-all ${selectedSpecialist === spec ? 'bg-accent border-accent text-white' : 'bg-slate-900 border-white/5 text-slate-400'}`}
                  >
                    {spec}
                  </button>
                ))}
              </div>
            </div>

            <button 
              type="submit"
              disabled={matching}
              className="w-full py-4 bg-accent hover:bg-accent/90 disabled:bg-slate-800 disabled:cursor-not-allowed rounded-2xl font-display font-bold text-lg shadow-xl shadow-accent/20 transition-all flex items-center justify-center gap-3"
            >
              {matching ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Running AI Matching...
                </>
              ) : (
                "Search Optimal Facility"
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Dynamic Results */}
        <div className="space-y-6">
          <div className="glass rounded-3xl p-6 min-h-[400px] flex flex-col relative overflow-hidden">
            {results.length === 0 && !matching && (
              <div className="flex-grow flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4 border border-white/10">
                  <span className="text-xl text-slate-700">?</span>
                </div>
                <h3 className="font-display font-bold text-slate-500 uppercase tracking-widest text-xs">Ready for Input</h3>
              </div>
            )}

            {matching && (
              <div className="flex-grow flex flex-col items-center justify-center space-y-6">
                <div className="relative w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-accent w-1/3 animate-[slide_1.5s_infinite_linear]" />
                </div>
                <p className="text-[10px] font-mono text-accent animate-pulse uppercase tracking-[0.2em]">Calculating Weights...</p>
              </div>
            )}

            {results.length > 0 && !matching && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Recommended Matches</p>
                  <span className="text-[10px] text-success font-bold uppercase">Success Rank</span>
                </div>

                <div className="space-y-4">
                  {results.slice(0, 3).map((match, idx) => (
                    <div 
                      key={match.hospital.id} 
                      className={`p-5 rounded-2xl border transition-all ${idx === 0 ? 'bg-white/5 border-white/20' : 'bg-slate-900/50 border-white/5 opacity-60'}`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="max-w-[70%]">
                          <h4 className="font-display font-bold text-white truncate">{match.hospital.name}</h4>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-[10px] font-mono font-bold text-slate-400">{match.distance}km</span>
                            <span className="text-[10px] font-mono font-bold text-accent">{match.eta}m ETA</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-xl font-display font-black ${match.score > 80 ? 'text-success' : 'text-amber-500'}`}>
                            {match.score}%
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                        {match.reasons.slice(0, 2).map((reason, i) => (
                          <span key={i} className="text-[9px] font-bold text-slate-500 uppercase bg-slate-800 px-2 py-1 rounded">
                            {reason}
                          </span>
                        ))}
                      </div>

                      {idx === 0 && (
                        <button className="w-full mt-4 py-3 bg-white text-slate-950 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-[0.98] transition-transform">
                          Confirm Dispatch
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="glass rounded-3xl p-6 bg-gradient-to-br from-accent/5 to-transparent border-accent/10">
            <h3 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">Emergency Protocol</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-4 h-4 bg-accent/20 rounded text-[10px] flex items-center justify-center text-accent">1</span>
                <p className="text-[11px] text-slate-400">Match patients to hospitals with confirmed specialist on-call.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-4 h-4 bg-accent/20 rounded text-[10px] flex items-center justify-center text-accent">2</span>
                <p className="text-[11px] text-slate-400">Prioritize facilities with &gt;2 available ER beds for Critical cases.</p>
              </div>
            </div>
          </div>

          <LagosPitchMap />
        </div>

      </div>

      <style jsx>{`
        @keyframes slide {
          from { transform: translateX(-100%); }
          to { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
}
