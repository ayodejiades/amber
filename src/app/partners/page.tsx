"use client";

import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";

export default function PartnersPage() {
  const partners = [
    { name: "Blue Cross Hospital", location: "Apapa", status: "Optimal", capacity: "88%", special: ["Cardiology", "Trauma", "ICU"] },
    { name: "St. Nicholas Hospital", location: "Lagos Island", status: "Elevated", capacity: "92%", special: ["Nephrology", "Surgery"] },
    { name: "First Cardiology", location: "Ikoyi", status: "Optimal", capacity: "74%", special: ["Cardiac Center", "Diagnostics"] },
    { name: "LUTH", location: "Surulere", status: "Critical", capacity: "98%", special: ["General Surgery", "Pediatrics"] },
    { name: "Evercare Hospital", location: "Lekki", status: "Optimal", capacity: "65%", special: ["Diagnostics", "Obstetrics"] },
    { name: "Lagoon Hospital", location: "Ikoyi", status: "Elevated", capacity: "82%", special: ["Emergency Care", "Diagnostics"] }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-body selection:bg-primary/30">
      <PublicHeader />

      <main className="pt-32 min-h-screen">
        <section className="px-6 md:px-8 max-w-screen-xl mx-auto pb-24">
          <div className="mb-12">
            <span className="font-semibold text-primary text-xs uppercase tracking-[0.3em] mb-4 block">Our Network</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter uppercase mb-6">Partner <span className="text-primary">Hospitals</span></h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
              We work with top-tier medical facilities across Lagos that meet our quality and response standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {partners.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-display text-xl text-slate-900 font-bold uppercase mb-1">{p.name}</h3>
                    <p className="text-[10px] text-slate-500 font-semibold tracking-widest">{p.location}</p>
                  </div>
                  <span className={`text-[8px] font-semibold px-2 py-1 rounded ${p.status === 'Optimal' ? 'bg-emerald-100 text-emerald-700' : p.status === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                    {p.status}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-[10px] font-semibold mb-2">
                    <span className="text-slate-500 uppercase tracking-widest">Load Capacity</span>
                    <span className="text-slate-900">{p.capacity}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${p.status === 'Critical' ? 'bg-primary' : 'bg-emerald-500'}`} style={{ width: p.capacity }}></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.special.map((s, si) => (
                    <span key={si} className="text-[9px] bg-slate-50 border border-slate-200 px-2 py-1 rounded text-slate-600 font-semibold">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 p-12 rounded-3xl text-center border border-primary/20">
            <h2 className="font-display text-2xl text-slate-900 font-bold uppercase mb-6 tracking-widest">Join the Amber Network</h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-10">Does your facility meet the standards for rapid emergency response? Apply to become a partner.</p>
            <button className="bg-primary text-white font-semibold px-10 py-4 rounded text-xs uppercase tracking-widest hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/20">Apply to Join</button>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
