"use client";

import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";
import { MockDataNotice } from "@/components/mock-data-notice";

export default function PartnersPage() {
  const partners = [
    { name: "Reddington Hospital", location: "Victoria Island", status: "Optimal", capacity: "88%", special: ["Cardiology", "Trauma", "ICU"] },
    { name: "St. Nicholas Hospital", location: "Lagos Island", status: "Elevated", capacity: "92%", special: ["Nephrology", "Surgery"] },
    { name: "First Cardiology", location: "Ikoyi", status: "Optimal", capacity: "74%", special: ["Cardiac Center", "Diagnostics"] },
    { name: "LUTH", location: "Surulere", status: "Critical", capacity: "98%", special: ["General Surgery", "Pediatrics"] },
    { name: "Evercare Hospital", location: "Lekki", status: "Optimal", capacity: "65%", special: ["Diagnostics", "Obstetrics"] },
    { name: "Lagoon Hospital", location: "Ikoyi", status: "Elevated", capacity: "82%", special: ["Emergency Care", "Diagnostics"] }
  ];

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body selection:bg-primary/30">
      <PublicHeader />
      
      <main className="pt-32 min-h-screen">
        <section className="px-6 md:px-8 max-w-screen-xl mx-auto pb-24">
          <div className="mb-12">
            <span className="font-caps font-bold text-primary text-xs uppercase tracking-[0.3em] mb-4 block">Authorized Network</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase mb-6">Medical <span className="text-primary">Hubs</span></h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
              We only partner with Tier-1 medical facilities that meet our strict tactical telemetry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {partners.map((p, i) => (
              <div key={i} className="glass-panel p-6 rounded-lg border-white/5 hover:border-primary/30 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-display text-xl text-white font-bold uppercase mb-1">{p.name}</h3>
                    <p className="text-[10px] text-slate-500 font-caps font-bold tracking-widest">{p.location}</p>
                  </div>
                  <span className={`text-[8px] font-caps font-bold px-2 py-1 rounded ${p.status === 'Optimal' ? 'bg-emerald-500/10 text-emerald-500' : p.status === 'Critical' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                    {p.status}
                  </span>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-[10px] font-caps font-bold mb-2">
                    <span className="text-slate-500 uppercase tracking-widest">Load Capacity</span>
                    <span className="text-white">{p.capacity}</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${p.status === 'Critical' ? 'bg-primary' : 'bg-emerald-500'}`} style={{width: p.capacity}}></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.special.map((s, si) => (
                    <span key={si} className="text-[9px] bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-400 font-caps font-bold">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-12 rounded-xl text-center border-primary/20 bg-primary/5 glow-red">
            <h2 className="font-display text-2xl text-white font-bold uppercase mb-6 tracking-widest">Join the Tactical Network</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10">Is your facility capable of Amber-grade telemetry and rapid trauma response? Apply for verification.</p>
            <button className="bg-primary text-white font-caps font-bold px-10 py-5 text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20">Initiate Onboarding</button>
          </div>
        </section>

        <MockDataNotice />
      </main>

      <PublicFooter />
    </div>
  );
}
