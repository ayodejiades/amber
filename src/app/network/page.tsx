"use client";

import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";
import { MockDataNotice } from "@/components/mock-data-notice";

export default function NetworkPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body selection:bg-primary/30">
      <PublicHeader />
      
      <main className="pt-32 min-h-screen">
        <section className="px-6 md:px-8 max-w-screen-xl mx-auto pb-24">
          <div className="mb-12">
            <span className="font-caps font-bold text-primary text-xs uppercase tracking-[0.3em] mb-4 block">Asset Status</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase mb-6">Tactical <br/><span className="text-primary">Coverage</span></h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
              Monitoring 142 active units across 8 primary response sectors in Lagos State.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 mb-24">
            <div className="lg:col-span-8">
              <div className="glass-panel relative aspect-video rounded-xl overflow-hidden border-primary/20 bg-slate-900 flex items-center justify-center">
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale contrast-125 mix-blend-luminosity"></div>
                
                {/* Mock Pings */}
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                <div className="absolute top-1/2 right-1/2 w-4 h-4 bg-tertiary rounded-full animate-ping"></div>

                <div className="absolute bottom-6 left-6 p-4 glass-card border-white/10">
                  <p className="text-[10px] font-caps font-bold text-slate-500 mb-1 uppercase tracking-widest">Active Incident</p>
                  <p className="text-xs font-mono text-primary font-bold uppercase">UNIT_042 • ETA 04:12</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="glass-panel p-6 rounded-lg border-white/5">
                <h3 className="font-caps font-bold text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-4">Sector Status</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white font-bold">Victoria Island</span>
                    <span className="text-[9px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded font-bold">OPTIMAL</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white font-bold">Ikoyi</span>
                    <span className="text-[9px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded font-bold">OPTIMAL</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white font-bold">Lekki Phase 1</span>
                    <span className="text-[9px] bg-secondary/10 text-secondary px-2 py-0.5 rounded font-bold">ELEVATED</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white font-bold">Ikeja</span>
                    <span className="text-[9px] bg-primary/10 text-primary px-2 py-0.5 rounded font-bold">HIGH LOAD</span>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border-white/5 bg-primary/5">
                <h3 className="font-caps font-bold text-[10px] text-primary uppercase tracking-[0.2em] mb-4">Response Stats</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <span className="block text-2xl font-display font-black text-white">08:14</span>
                    <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">Avg Response</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-display font-black text-primary">0%</span>
                    <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">Rejection Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MockDataNotice />
      </main>

      <PublicFooter />
    </div>
  );
}
