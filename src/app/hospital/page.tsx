"use client";

import { useState } from "react";

export default function HospitalOverviewPage() {
  return (
    <>
      {/* Page Header */}
      <div className="mb-6 md:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
        <div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-on-surface mb-2">Facility Overview</h1>
          <p className="font-body text-base md:text-lg text-on-surface-variant">Real-time capacity and incoming trauma logistics.</p>
        </div>
        <div className="flex gap-4 self-start sm:self-auto">
          <div className="glass-panel px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-2 md:gap-3 rounded tactical-corner">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="font-caps text-[10px] md:text-xs font-bold tracking-[0.1em] text-on-surface uppercase">DEFCON 3 STATUS</span>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 md:gap-8">
        {/* Section 1: Bed Capacity (Spans 8 cols) */}
        <section className="lg:col-span-8 flex flex-col gap-6">
          <h2 className="font-display text-xl md:text-2xl font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">hotel</span> Live Bed Capacity
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {/* ICU Card */}
            <div className="glass-panel rounded-lg p-5 md:p-6 tactical-corner flex flex-col relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-on-surface mb-1">ICU</h3>
                  <span className="font-caps text-[10px] md:text-xs font-bold tracking-[0.1em] text-primary uppercase">CRITICAL LOAD</span>
                </div>
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">monitor_heart</span>
              </div>
              <div className="flex items-baseline gap-2 mb-4 relative z-10">
                <span className="font-display text-4xl md:text-[56px] leading-none font-bold text-primary">94%</span>
                <span className="font-body text-xs md:text-sm text-on-surface-variant">45/48 Beds</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden relative z-10">
                <div className="bg-primary h-full w-[94%] relative">
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors"></div>
            </div>

            {/* ER Card */}
            <div className="glass-panel rounded-lg p-5 md:p-6 flex flex-col relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-on-surface mb-1">ER</h3>
                  <span className="font-caps text-[10px] md:text-xs font-bold tracking-[0.1em] text-secondary uppercase">ELEVATED</span>
                </div>
                <span className="material-symbols-outlined text-secondary text-2xl md:text-3xl">emergency</span>
              </div>
              <div className="flex items-baseline gap-2 mb-4 relative z-10">
                <span className="font-display text-4xl md:text-[56px] leading-none font-bold text-secondary">78%</span>
                <span className="font-body text-xs md:text-sm text-on-surface-variant">78/100 Beds</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden relative z-10">
                <div className="bg-secondary h-full w-[78%]"></div>
              </div>
            </div>

            {/* General Ward Card */}
            <div className="glass-panel rounded-lg p-5 md:p-6 flex flex-col relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-on-surface mb-1">GEN</h3>
                  <span className="font-caps text-[10px] md:text-xs font-bold tracking-[0.1em] text-tertiary uppercase">STABLE</span>
                </div>
                <span className="material-symbols-outlined text-tertiary text-2xl md:text-3xl">bed</span>
              </div>
              <div className="flex items-baseline gap-2 mb-4 relative z-10">
                <span className="font-display text-4xl md:text-[56px] leading-none font-bold text-on-surface">62%</span>
                <span className="font-body text-xs md:text-sm text-on-surface-variant">186/300 Beds</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden relative z-10">
                <div className="bg-tertiary h-full w-[62%]"></div>
              </div>
            </div>
          </div>

          {/* High Priority Incoming Alerts */}
          <div className="mt-2 md:mt-4">
            <h2 className="font-display text-xl md:text-2xl font-bold text-on-surface flex items-center gap-2 mb-4 md:mb-6">
              <span className="material-symbols-outlined text-primary">airport_shuttle</span> Incoming Amber Alerts
            </h2>
            <div className="flex flex-col gap-4">
              {/* Alert Item 1 */}
              <div className="glass-panel p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between border-l-4 border-l-primary bg-surface-container-low/40 gap-4 sm:gap-0">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="flex flex-col items-center justify-center bg-surface-container w-14 h-14 md:w-16 md:h-16 rounded shrink-0">
                    <span className="font-caps text-[10px] md:text-xs font-bold text-slate-400 uppercase">ETA</span>
                    <span className="font-display text-xl md:text-2xl font-bold text-primary">04<span className="text-[10px] md:text-sm font-normal">m</span></span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
                      <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-[8px] md:text-[10px] font-bold uppercase tracking-wider">Level 1 Trauma</span>
                      <span className="font-display text-base md:text-lg font-bold text-on-surface">Unit A-77</span>
                    </div>
                    <p className="font-body text-xs md:text-sm text-slate-400">MVA, blunt force trauma. BP 80/50, HR 130.</p>
                  </div>
                </div>
                <div className="flex gap-2 md:gap-3 self-start sm:self-auto w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none bg-slate-900 border border-secondary text-on-surface px-3 md:px-4 py-2 rounded font-caps text-[10px] md:text-xs font-bold hover:bg-surface-container transition-colors tracking-widest uppercase text-center">
                    Details
                  </button>
                  <button className="flex-1 sm:flex-none bg-primary text-white px-4 md:px-6 py-2 rounded font-caps text-[10px] md:text-xs font-bold hover:bg-primary/80 transition-colors flex items-center justify-center gap-1 md:gap-2 tracking-widest uppercase shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-xs md:text-sm">add_box</span>
                    Confirm Bed
                  </button>
                </div>
              </div>

              {/* Alert Item 2 */}
              <div className="glass-panel p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between border-l-4 border-l-secondary bg-surface-container-low/40 gap-4 sm:gap-0">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="flex flex-col items-center justify-center bg-surface-container w-14 h-14 md:w-16 md:h-16 rounded shrink-0">
                    <span className="font-caps text-[10px] md:text-xs font-bold text-slate-400 uppercase">ETA</span>
                    <span className="font-display text-xl md:text-2xl font-bold text-secondary">12<span className="text-[10px] md:text-sm font-normal">m</span></span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
                      <span className="bg-secondary/20 text-secondary px-2 py-0.5 rounded text-[8px] md:text-[10px] font-bold uppercase tracking-wider">Cardiac</span>
                      <span className="font-display text-base md:text-lg font-bold text-on-surface">Unit B-12</span>
                    </div>
                    <p className="font-body text-xs md:text-sm text-slate-400">Suspected STEMI. Vitals stable, awaiting cath lab.</p>
                  </div>
                </div>
                <div className="flex gap-2 md:gap-3 self-start sm:self-auto w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none bg-slate-900 border border-secondary text-on-surface px-3 md:px-4 py-2 rounded font-caps text-[10px] md:text-xs font-bold hover:bg-surface-container transition-colors tracking-widest uppercase text-center">
                    Details
                  </button>
                  <button className="flex-1 sm:flex-none bg-primary text-white px-4 md:px-6 py-2 rounded font-caps text-[10px] md:text-xs font-bold hover:bg-primary/80 transition-colors flex items-center justify-center gap-1 md:gap-2 tracking-widest uppercase shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-xs md:text-sm">add_box</span>
                    Confirm Bed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Live Specialist Feed (Spans 4 cols) */}
        <section className="lg:col-span-4 flex flex-col lg:h-full mt-4 lg:mt-0">
          <div className="glass-panel rounded-lg tactical-corner flex flex-col lg:h-full overflow-hidden">
            <div className="p-5 md:p-6 border-b border-white/5 bg-surface-container-low/50">
              <h2 className="font-display text-xl md:text-2xl font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">groups</span> On-Site Specialists
              </h2>
              <p className="font-body text-xs md:text-sm text-slate-400 mt-1">Currently clocked in and available.</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar">
              {/* Specialist 1 */}
              <div className="bg-surface-container/40 p-3 rounded border border-white/5 hover:border-secondary/30 transition-colors flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-white/10 shrink-0">
                  <img alt="Dr. Sarah Chen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="font-body font-bold text-on-surface truncate pr-2">Dr. Sarah Chen</h4>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0"></div>
                  </div>
                  <p className="font-caps text-[9px] md:text-[10px] font-bold tracking-widest text-secondary mt-1 uppercase truncate">TRAUMA SURGEON</p>
                </div>
              </div>

              {/* Specialist 2 */}
              <div className="bg-surface-container/40 p-3 rounded border border-white/5 hover:border-secondary/30 transition-colors flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-white/10 shrink-0">
                  <img alt="Dr. Marcus Webb" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="font-body font-bold text-on-surface truncate pr-2">Dr. Marcus Webb</h4>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0"></div>
                  </div>
                  <p className="font-caps text-[9px] md:text-[10px] font-bold tracking-widest text-secondary mt-1 uppercase truncate">CARDIOLOGIST</p>
                </div>
              </div>

              {/* Specialist 3 */}
              <div className="bg-surface-container/40 p-3 rounded border border-white/5 hover:border-secondary/30 transition-colors flex items-center gap-4 opacity-60">
                <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-white/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-slate-400">person</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="font-body font-bold text-on-surface truncate pr-2">Dr. Elena Rostova</h4>
                    <div className="w-2 h-2 rounded-full bg-secondary mt-1 shrink-0"></div>
                  </div>
                  <p className="font-caps text-[9px] md:text-[10px] font-bold tracking-widest text-slate-400 mt-1 uppercase truncate">NEUROLOGIST • IN SURGERY</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-white/5 mt-auto">
              <button className="w-full bg-transparent border border-outline text-on-surface py-3 rounded font-caps text-xs font-bold hover:bg-surface-container transition-colors tracking-widest uppercase">
                VIEW FULL ROSTER
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
