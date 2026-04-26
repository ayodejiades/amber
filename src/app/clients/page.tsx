"use client";

import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";

export default function ClientsPage() {
  const tiers = [
    {
      name: "Essentials",
      price: "$299/mo",
      features: ["24/7 Ambulance Access", "Verified Bed Matching", "Ground Ambulance", "Basic Health Monitoring"],
      accent: "slate-500"
    },
    {
      name: "Premium",
      price: "$999/mo",
      features: ["Everything in Essentials", "Air Ambulance Support", "Dedicated Medical Officer", "Family Coverage (4)", "Priority Hospital Access"],
      accent: "primary",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Multi-Ambulance Deployment", "On-Site Medical Station", "Employee Network Access", "Liability Coverage", "API Integration"],
      accent: "secondary"
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-body selection:bg-primary/30">
      <PublicHeader />

      <main className="pt-32 min-h-screen">
        <section className="px-6 md:px-8 max-w-screen-xl mx-auto pb-24">
          <div className="mb-12 text-center">
            <span className="font-semibold text-primary text-xs uppercase tracking-[0.3em] mb-4 block">Choose Your Plan</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter uppercase mb-6">Membership <span className="text-primary">Plans</span></h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Medical response plans for individuals and organizations who need reliable emergency coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {tiers.map((t, i) => (
              <div key={i} className={`bg-white p-10 rounded-3xl flex flex-col relative overflow-hidden border shadow-sm ${t.popular ? 'border-primary/50 shadow-xl shadow-primary/10 ring-2 ring-primary/20 z-10' : 'border-slate-200'}`}>
                {t.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-[8px] font-semibold px-4 py-1.5 uppercase tracking-widest rounded-bl-lg">
                    Recommended
                  </div>
                )}
                <div className="mb-10 text-center">
                  <h3 className="font-display text-2xl text-slate-900 font-bold uppercase mb-4 tracking-widest">{t.name}</h3>
                  <div className={`text-4xl font-display font-black ${t.accent === 'primary' ? 'text-primary' : t.accent === 'secondary' ? 'text-secondary' : 'text-slate-700'}`}>
                    {t.price}
                  </div>
                </div>

                <ul className="space-y-6 flex-1 mb-12">
                  {t.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-4 text-sm text-slate-600 font-medium">
                      <span className={`material-symbols-outlined text-sm ${t.accent === 'primary' ? 'text-primary' : t.accent === 'secondary' ? 'text-secondary' : 'text-slate-400'}`}>check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 font-semibold text-xs uppercase tracking-widest rounded-lg transition-all ${t.accent === 'primary' ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20' : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-slate-400 text-xs font-body tracking-widest uppercase mb-4">Backed by leading insurers</p>
            <div className="flex justify-center gap-12 grayscale opacity-40">
              <span className="font-display text-2xl font-black italic text-slate-900">AXA</span>
              <span className="font-display text-2xl font-black italic text-slate-900">ALLIANZ</span>
              <span className="font-display text-2xl font-black italic text-slate-900">PRUDENTIAL</span>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
