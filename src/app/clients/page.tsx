"use client";

import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";
import { MockDataNotice } from "@/components/mock-data-notice";

export default function ClientsPage() {
  const tiers = [
    { 
      name: "Tactical", 
      price: "$299/mo", 
      features: ["24/7 Rapid Response", "Verified Bed Matching", "Ground Unit Access", "Basic Biometrics"],
      accent: "slate-500"
    },
    { 
      name: "Elite", 
      price: "$999/mo", 
      features: ["All Tactical Features", "Aero-Medical Support", "Personal Medical Officer", "Family Coverage (4)", "Priority Trauma Roster"],
      accent: "primary",
      popular: true
    },
    { 
      name: "Corporate", 
      price: "Custom", 
      features: ["Fleet Deployment", "On-Site Command Hub", "Employee Network Access", "Liability Shield Protocol", "API Logistics Link"],
      accent: "secondary"
    }
  ];

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body selection:bg-primary/30">
      <PublicHeader />
      
      <main className="pt-32 min-h-screen">
        <section className="px-6 md:px-8 max-w-screen-xl mx-auto pb-24">
          <div className="mb-12 text-center">
            <span className="font-caps font-bold text-primary text-xs uppercase tracking-[0.3em] mb-4 block">Secure Enrollment</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase mb-6">Client <span className="text-primary">Protocols</span></h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Premium medical response for individuals and corporations who refuse to gamble with the Golden Hour.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {tiers.map((t, i) => (
              <div key={i} className={`glass-panel p-10 rounded-xl flex flex-col relative overflow-hidden border-white/5 ${t.popular ? 'border-primary/40 glow-red ring-1 ring-primary/20' : ''}`}>
                {t.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-[8px] font-caps font-bold px-4 py-1 uppercase tracking-widest">
                    Recommended
                  </div>
                )}
                <div className="mb-10 text-center">
                  <h3 className="font-display text-2xl text-white font-bold uppercase mb-4 tracking-widest">{t.name}</h3>
                  <div className={`text-4xl font-display font-black ${t.accent === 'primary' ? 'text-primary' : t.accent === 'secondary' ? 'text-secondary' : 'text-slate-400'}`}>
                    {t.price}
                  </div>
                </div>
                
                <ul className="space-y-6 flex-1 mb-12">
                  {t.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-4 text-sm text-slate-400">
                      <span className={`material-symbols-outlined text-sm ${t.accent === 'primary' ? 'text-primary' : t.accent === 'secondary' ? 'text-secondary' : 'text-slate-500'}`}>check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-5 font-caps font-bold text-xs uppercase tracking-widest transition-all ${t.accent === 'primary' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
                  Initiate Protocol
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-slate-500 text-xs font-caps tracking-widest uppercase mb-4">Underwritten by Amber Tactical Security Group</p>
            <div className="flex justify-center gap-12 grayscale opacity-30">
              <span className="font-display text-2xl font-black italic">AXA</span>
              <span className="font-display text-2xl font-black italic">ALLIANZ</span>
              <span className="font-display text-2xl font-black italic">PRUDENTIAL</span>
            </div>
          </div>
        </section>

        <MockDataNotice />
      </main>

      <PublicFooter />
    </div>
  );
}
