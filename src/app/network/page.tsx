"use client";

import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";

export default function NetworkPage() {
  return (
    <div className="bg-slate-50 text-slate-900 font-body selection:bg-primary/30">
      <PublicHeader />

      <main className="pt-32 min-h-screen">
        <section className="px-6 md:px-8 max-w-screen-xl mx-auto pb-24">
          <div className="mb-12">
            <span className="font-semibold text-primary text-xs uppercase tracking-[0.3em] mb-4 block">Live Status</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter uppercase mb-6">Service <br /><span className="text-primary">Coverage</span></h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
              Monitoring 142 active ambulances across 8 response areas in Lagos State.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 mb-24">
            <div className="lg:col-span-8">
              <div className="bg-white relative aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-lg flex items-center justify-center">
                <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-multiply grayscale"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>

                {/* Map Pings */}
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                <div className="absolute top-1/2 right-1/2 w-4 h-4 bg-emerald-500 rounded-full animate-ping"></div>

                <div className="absolute bottom-6 left-6 p-4 bg-white/95 rounded-xl border border-slate-200 shadow-md">
                  <p className="text-[10px] font-semibold text-slate-500 mb-1 uppercase tracking-widest">Active Case</p>
                  <p className="text-xs font-mono text-primary font-bold uppercase">AMB-01 &bull; ETA 04:12</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-6">Area Status</h3>
                <div className="space-y-5">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                    <span className="text-sm text-slate-900 font-bold">Victoria Island</span>
                    <span className="text-[9px] bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-bold">OPTIMAL</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                    <span className="text-sm text-slate-900 font-bold">Ikoyi</span>
                    <span className="text-[9px] bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-bold">OPTIMAL</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                    <span className="text-sm text-slate-900 font-bold">Lekki Phase 1</span>
                    <span className="text-[9px] bg-amber-100 text-amber-700 px-2 py-1 rounded font-bold">ELEVATED</span>
                  </div>
                  <div className="flex justify-between items-center pb-1">
                    <span className="text-sm text-slate-900 font-bold">Ikeja</span>
                    <span className="text-[9px] bg-red-100 text-red-700 px-2 py-1 rounded font-bold">HIGH LOAD</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20 shadow-sm">
                <h3 className="font-semibold text-[10px] text-primary uppercase tracking-[0.2em] mb-6">Response Stats</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <span className="block text-3xl font-display font-black text-slate-900">08:14</span>
                    <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mt-1 block">Avg Response</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-display font-black text-primary">0%</span>
                    <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mt-1 block">Rejection Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
