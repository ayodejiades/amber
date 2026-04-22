"use client";

import { useState } from "react";

export default function HospitalPortal() {
  const [bedsOpen, setBedsOpen] = useState(4);
  const [isAccepting, setIsAccepting] = useState(true);
  
  const [incomingAlert, setIncomingAlert] = useState<any>({
    patientId: "AMB-09-STROKE",
    eta: "8 mins",
    condition: "Acute Stroke Suspect",
    severity: "Critical",
    assignedSpecialist: "Neurologist (Dr. Adeyemi)"
  });

  return (
    <div className="min-h-screen bg-slate-950 p-6 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-display font-bold text-white">LUTH Staff Portal</h1>
            <p className="text-slate-400 mt-1">Lagos University Teaching Hospital • Sector A</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className={`px-4 py-2 rounded-full border ${isAccepting ? 'bg-success/10 border-success/30 text-success' : 'bg-accent/10 border-accent/30 text-accent'} text-sm font-bold flex items-center gap-2`}>
              <span className={`w-2 h-2 rounded-full ${isAccepting ? 'bg-success animate-pulse' : 'bg-accent'}`} />
              {isAccepting ? 'ACCEPTING EMERGENCIES' : 'AT FULL CAPACITY'}
            </div>
            <button 
              onClick={() => setIsAccepting(!isAccepting)}
              className="px-6 py-2 bg-white text-slate-950 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors"
            >
              Toggle Status
            </button>
          </div>
        </div>

        {/* Incoming Alert (Mission Critical) */}
        {incomingAlert && (
          <div className="bg-accent/10 border-2 border-accent/50 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-pulse shadow-[0_0_50px_rgba(239,68,68,0.15)]">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="px-3 py-1 bg-accent text-white text-[10px] font-black rounded-lg uppercase tracking-widest">Pre-Alert</span>
                <span className="text-accent font-mono font-bold">ETA: {incomingAlert.eta}</span>
              </div>
              <h2 className="text-4xl font-display font-black text-white">{incomingAlert.condition}</h2>
              <p className="text-slate-400 font-medium">Patient coming from VI via {incomingAlert.patientId.split('-')[0] + '-' + incomingAlert.patientId.split('-')[1]}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="px-6 py-4 bg-slate-900/80 rounded-2xl border border-white/10 text-center">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Assigned Specialist</p>
                <p className="font-bold text-white">{incomingAlert.assignedSpecialist}</p>
              </div>
              <button className="px-8 py-4 bg-accent text-white rounded-2xl font-display font-black text-lg hover:scale-105 transition-transform shadow-xl shadow-accent/40">
                ACKNOWLEDGE
              </button>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Capacity Management */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-lg font-display font-bold mb-6">Real-time Bed Capacity</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-8 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">ER Beds Open</p>
                  <div className="flex items-center gap-6">
                    <button 
                      onClick={() => setBedsOpen(Math.max(0, bedsOpen - 1))}
                      className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-2xl font-bold hover:bg-slate-700 transition-colors"
                    >-</button>
                    <span className="text-7xl font-display font-black text-white">{bedsOpen}</span>
                    <button 
                      onClick={() => setBedsOpen(bedsOpen + 1)}
                      className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-2xl font-bold hover:bg-slate-700 transition-colors"
                    >+</button>
                  </div>
                </div>
                
                <div className="p-8 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Wait Time</p>
                  <p className="text-7xl font-display font-black text-success">08</p>
                  <p className="text-xs font-bold text-slate-500 mt-2 uppercase tracking-widest">Minutes (Median)</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['Trauma', 'ICU', 'NICU', 'Burn Unit'].map((unit) => (
                  <div key={unit} className="p-4 rounded-2xl bg-slate-900/50 border border-white/5">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">{unit}</p>
                    <p className="text-lg font-bold">4 Available</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specialist Roster */}
          <div className="space-y-8">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-lg font-display font-bold mb-6">On-Call Specialists</h3>
              <div className="space-y-4">
                {[
                  { name: "Dr. Adeyemi", role: "Neurologist", status: "In-Surgery" },
                  { name: "Dr. Okonjo", role: "Trauma Surgeon", status: "On-Call" },
                  { name: "Dr. Balogun", role: "Obstetrician", status: "On-Call" },
                ].map((doc) => (
                  <div key={doc.name} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div>
                      <p className="text-sm font-bold">{doc.name}</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest">{doc.role}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${doc.status === 'On-Call' ? 'bg-success/20 text-success' : 'bg-amber-500/20 text-amber-500'}`}>
                      {doc.status}
                    </span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 bg-slate-900 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
                Manage Roster
              </button>
            </div>

            <div className="glass rounded-3xl p-8 bg-gradient-to-br from-blue-600/20 to-transparent border-blue-500/20">
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Facility Stats</h3>
              <div className="space-y-2">
                <p className="text-2xl font-display font-black text-white">24</p>
                <p className="text-xs text-slate-400">Emergencies Triaged Today</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
