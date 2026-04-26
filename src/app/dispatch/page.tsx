"use client";

import { useState } from "react";

export default function DispatchCommandPage() {
  return (
    <div className="p-4 h-full flex flex-col lg:grid lg:grid-cols-12 gap-4 overflow-y-auto lg:overflow-hidden pb-8 lg:pb-4">
      {/* Left: Asset Monitor */}
      <section className="lg:col-span-3 flex flex-col gap-4 lg:h-full min-h-[400px] lg:min-h-0 order-2 lg:order-1">
        <div className="glass-panel p-6 rounded-lg flex flex-col h-full overflow-hidden">
          <div className="flex justify-between items-center mb-6 shrink-0">
            <h2 className="font-caps text-tertiary uppercase text-sm tracking-widest font-bold">Asset Monitor</h2>
            <span className="material-symbols-outlined text-tertiary">sensors</span>
          </div>
          <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-grow">
            {/* Fleet Cards */}
            <div className="p-4 border-l-2 border-primary bg-white/5 rounded-r">
              <div className="flex justify-between items-start mb-2">
                <span className="font-mono font-medium text-white text-sm">Amber 01</span>
                <span className="px-2 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded">EN ROUTE</span>
              </div>
              <p className="text-[10px] text-slate-400 font-caps mb-3 font-bold">DEST: VICTORIA ISLAND</p>
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[65%]"></div>
              </div>
            </div>
            
            <div className="p-4 border-l-2 border-tertiary bg-white/5 rounded-r">
              <div className="flex justify-between items-start mb-2">
                <span className="font-mono font-medium text-white text-sm">Amber 05</span>
                <span className="px-2 py-1 bg-tertiary/20 text-tertiary text-[10px] font-bold rounded">STANDBY</span>
              </div>
              <p className="text-[10px] text-slate-400 font-caps mb-3 font-bold">LOC: CENTRAL HUB 4</p>
              <div className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-tertiary heartbeat"></span>
                <span className="text-[10px] text-tertiary font-bold tracking-widest uppercase font-caps">Heartbeat Nominal</span>
              </div>
            </div>

            <div className="p-4 border-l-2 border-slate-600 bg-white/5 rounded-r opacity-60">
              <div className="flex justify-between items-start mb-2">
                <span className="font-mono font-medium text-white text-sm">Amber 09</span>
                <span className="px-2 py-1 bg-slate-600/20 text-slate-400 text-[10px] font-bold rounded">MAINTENANCE</span>
              </div>
              <p className="text-[10px] text-slate-400 font-caps font-bold uppercase tracking-widest">EST. RETURN: 0400 HRS</p>
            </div>

            <div className="p-4 border-l-2 border-secondary bg-white/5 rounded-r">
              <div className="flex justify-between items-start mb-2">
                <span className="font-mono font-medium text-white text-sm">Amber 12</span>
                <span className="px-2 py-1 bg-secondary/20 text-secondary text-[10px] font-bold rounded">EN ROUTE</span>
              </div>
              <p className="text-[10px] text-slate-400 font-caps mb-3 font-bold">DEST: LEKKI PHASE 1</p>
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[30%]"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-auto pt-4 shrink-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-3 rounded border border-white/5">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest font-caps">Active</p>
                <p className="text-xl font-mono text-white font-medium">14</p>
              </div>
              <div className="bg-surface-container-low p-3 rounded border border-white/5">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest font-caps">Available</p>
                <p className="text-xl font-mono text-tertiary font-medium">08</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Center: Real-Time Tactical Map */}
      <section className="lg:col-span-6 relative h-[400px] lg:h-full min-h-[400px] shrink-0 order-1 lg:order-2">
        <div className="absolute inset-0 rounded-xl overflow-hidden glass-panel border-primary/30 shadow-[0_0_40px_rgba(239,68,68,0.1)] flex flex-col">
          <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
            <img 
              alt="Tactical Map Base" 
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" 
            />
          </div>
          
          {/* Map UI Overlays */}
          <div className="absolute inset-0 pointer-events-none p-4 md:p-6 flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between shrink-0 gap-2 sm:gap-0">
              <div className="bg-black/60 backdrop-blur-md p-3 md:p-4 border-b border-r border-white/10 w-fit">
                <p className="text-[8px] md:text-[10px] text-secondary tracking-[0.2em] font-caps uppercase font-bold">Coordinates</p>
                <p className="font-mono font-medium text-white text-[10px] md:text-xs mt-1">6°27&apos;11&quot;N 3°23&apos;45&quot;E</p>
              </div>
              <div className="bg-black/60 backdrop-blur-md p-3 md:p-4 border-b border-l border-white/10 text-left sm:text-right w-fit self-end sm:self-auto">
                <p className="text-[8px] md:text-[10px] text-tertiary tracking-[0.2em] font-caps uppercase font-bold">Signal Strength</p>
                <p className="font-mono font-medium text-white text-[10px] md:text-xs mt-1">99.8% CRYPTO-LINK</p>
              </div>
            </div>
            
            {/* Glowing Nodes Mockup */}
            <div className="relative flex-grow">
              {/* Amber 01 Pin */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <div className="relative">
                  <div className="absolute inset-0 w-8 h-8 bg-primary/20 rounded-full blur-xl heartbeat"></div>
                  <div className="relative w-4 h-4 bg-primary rounded-full border-2 border-black flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute left-6 top-0 bg-black/80 backdrop-blur-md border border-primary/50 p-2 whitespace-nowrap">
                    <p className="text-[9px] text-primary font-bold uppercase tracking-widest font-caps">Amber 01</p>
                    <p className="text-[8px] text-white font-mono mt-0.5">SPD: 84 KM/H</p>
                  </div>
                </div>
              </div>
              
              {/* Incident Pin */}
              <div className="absolute bottom-1/4 right-1/3 pointer-events-auto">
                <div className="relative">
                  <div className="absolute inset-0 w-12 h-12 bg-primary/30 rounded-full blur-2xl heartbeat" style={{animationDuration: '0.6s'}}></div>
                  <div className="w-5 h-5 bg-primary rounded-full border-2 border-black flex items-center justify-center">
                    <span className="material-symbols-outlined text-[12px] text-white">warning</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto flex justify-center pb-2 shrink-0 pointer-events-auto">
              <div className="bg-black/80 backdrop-blur-xl border border-white/10 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-full flex flex-wrap justify-center gap-4 md:gap-8">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-[8px] md:text-[10px] text-white font-caps uppercase font-bold tracking-widest">Fleet</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  <span className="text-[8px] md:text-[10px] text-white font-caps uppercase font-bold tracking-widest">Medical Hubs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="text-[8px] md:text-[10px] text-white font-caps uppercase font-bold tracking-widest">Active Incidents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right: Live Alerts Feed */}
      <section className="lg:col-span-3 flex flex-col gap-4 lg:h-full min-h-[400px] lg:min-h-0 order-3 lg:order-3">
        <div className="glass-panel p-6 rounded-lg flex flex-col h-full overflow-hidden">
          <div className="flex justify-between items-center mb-6 shrink-0">
            <h2 className="font-caps text-primary uppercase text-sm tracking-widest font-bold">Live Alerts</h2>
            <span className="material-symbols-outlined text-primary heartbeat">wifi_tethering</span>
          </div>
          
          <div className="space-y-4 overflow-y-auto flex-grow custom-scrollbar">
            {/* Expanded Alert */}
            <div className="border border-primary/50 bg-primary/5 rounded p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <span className="text-[8px] font-mono font-medium text-primary tracking-widest">ID: #8821-X</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary text-sm">emergency</span>
                <span className="text-[11px] font-bold text-white uppercase tracking-wider font-caps">Cardiac Incident - VI</span>
              </div>
              <div className="bg-black/40 border border-white/5 p-3 rounded mb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] text-tertiary font-caps uppercase font-bold">AI Hospital Match</span>
                  <span className="text-[10px] font-mono font-medium text-tertiary">98% SCORE</span>
                </div>
                <p className="text-xs text-white font-bold mb-1">Reddington Victoria Island</p>
                <p className="text-[9px] text-slate-400">ICU Bed 04 Available | Cardiology Team On-Site</p>
              </div>
              <div className="flex gap-2">
                <button className="flex-grow bg-primary text-white text-[10px] font-bold py-2.5 rounded uppercase tracking-widest hover:glow-red transition-all font-caps shadow-lg shadow-primary/20">Dispatch Amber 01</button>
                <button className="p-2 border border-white/10 rounded text-slate-400 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-sm">more_vert</span>
                </button>
              </div>
            </div>

            {/* Minor Alerts */}
            <div className="border border-white/10 bg-white/5 rounded p-4 opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span className="text-[10px] font-bold text-white uppercase font-caps">Trauma - Lekki 1</span>
                </div>
                <span className="text-[9px] font-mono font-medium text-slate-500">2m ago</span>
              </div>
              <p className="text-[10px] text-slate-400 mb-2">Patient: VIP Member #0042</p>
              <div className="flex justify-between items-center">
                <span className="text-[9px] text-tertiary font-caps uppercase font-bold tracking-widest">Matching Hub...</span>
                <span className="material-symbols-outlined text-xs text-slate-500">chevron_right</span>
              </div>
            </div>

            <div className="border border-white/10 bg-white/5 rounded p-4 opacity-60">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                  <span className="text-[10px] font-bold text-white uppercase font-caps">Resolved - Hub 2</span>
                </div>
                <span className="text-[9px] font-mono font-medium text-slate-500">14m ago</span>
              </div>
              <p className="text-[10px] text-slate-500">Transfer complete to St. Nicholas</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visual Footer Accent */}
      <footer className="fixed bottom-0 md:left-64 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent z-50"></footer>
    </div>
  );
}
