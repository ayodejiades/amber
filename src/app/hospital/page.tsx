"use client";

import { useState } from "react";

export default function HospitalOverviewPage() {
  const [bed1Confirmed, setBed1Confirmed] = useState(false);
  const [bed2Confirmed, setBed2Confirmed] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-6 md:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
        <div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-slate-900 mb-2">Facility Overview</h1>
          <p className="text-base md:text-lg text-slate-600">Live capacity and incoming transfers.</p>
        </div>
        <div className="flex gap-4 self-start sm:self-auto">
          <div className="bg-white border border-slate-200 px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-2 md:gap-3 rounded-lg shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-[10px] md:text-xs font-semibold text-slate-700">Live Updates</span>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 md:gap-8">
        {/* Section 1: Bed Capacity */}
        <section className="lg:col-span-8 flex flex-col gap-6">
          <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600">hotel</span> Live Bed Capacity
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {/* ICU Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 flex flex-col relative overflow-hidden shadow-sm">
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-1">ICU</h3>
                  <span className="text-[10px] md:text-xs font-semibold text-primary uppercase">Critical</span>
                </div>
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">monitor_heart</span>
              </div>
              <div className="flex items-baseline gap-2 mb-4 relative z-10">
                <span className="font-display text-4xl md:text-[56px] leading-none font-bold text-primary">94%</span>
                <span className="text-xs md:text-sm text-slate-500">45/48 Beds</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden relative z-10">
                <div className="bg-primary h-full w-[94%]"></div>
              </div>
            </div>

            {/* ER Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 flex flex-col relative overflow-hidden shadow-sm">
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-1">ER</h3>
                  <span className="text-[10px] md:text-xs font-semibold text-amber-500 uppercase">Elevated</span>
                </div>
                <span className="material-symbols-outlined text-amber-500 text-2xl md:text-3xl">emergency</span>
              </div>
              <div className="flex items-baseline gap-2 mb-4 relative z-10">
                <span className="font-display text-4xl md:text-[56px] leading-none font-bold text-amber-500">78%</span>
                <span className="text-xs md:text-sm text-slate-500">78/100 Beds</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden relative z-10">
                <div className="bg-amber-500 h-full w-[78%]"></div>
              </div>
            </div>

            {/* General Ward Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 flex flex-col relative overflow-hidden shadow-sm">
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-1">GEN</h3>
                  <span className="text-[10px] md:text-xs font-semibold text-emerald-600 uppercase">Stable</span>
                </div>
                <span className="material-symbols-outlined text-emerald-600 text-2xl md:text-3xl">bed</span>
              </div>
              <div className="flex items-baseline gap-2 mb-4 relative z-10">
                <span className="font-display text-4xl md:text-[56px] leading-none font-bold text-slate-900">62%</span>
                <span className="text-xs md:text-sm text-slate-500">186/300 Beds</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden relative z-10">
                <div className="bg-emerald-500 h-full w-[62%]"></div>
              </div>
            </div>
          </div>

          {/* Incoming Alerts */}
          <div className="mt-2 md:mt-4">
            <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4 md:mb-6">
              <span className="material-symbols-outlined text-primary">airport_shuttle</span> Incoming Transfers
            </h2>
            <div className="flex flex-col gap-4">
              {/* Transfer 1 - AMB-01 */}
              <div className={`bg-white p-4 rounded-2xl border shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 transition-all duration-500 ${
                bed1Confirmed 
                  ? "border-emerald-300 border-l-4 border-l-emerald-500" 
                  : "border-slate-200 border-l-4 border-l-primary"
              }`}>
                <div className="flex items-center gap-4 md:gap-6">
                  <div className={`flex flex-col items-center justify-center border w-14 h-14 md:w-16 md:h-16 rounded-xl shrink-0 transition-colors ${
                    bed1Confirmed ? "bg-emerald-50 border-emerald-200" : "bg-slate-50 border-slate-100"
                  }`}>
                    <span className="text-[10px] md:text-xs font-semibold text-slate-500">ETA</span>
                    <span className={`font-display text-xl md:text-2xl font-bold ${bed1Confirmed ? "text-emerald-600" : "text-primary"}`}>04<span className="text-[10px] md:text-sm font-normal">m</span></span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
                      <span className="bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded text-[8px] md:text-[10px] font-semibold uppercase">Level 1 Trauma</span>
                      <span className="font-display text-base md:text-lg font-bold text-slate-900">AMB-01</span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600">MVA, blunt force trauma. BP 80/50, HR 130.</p>
                    {bed1Confirmed && (
                      <p className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        ER Bed confirmed · Bay 4 reserved
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 md:gap-3 self-start sm:self-auto w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none bg-slate-50 border border-slate-200 text-slate-700 px-3 md:px-4 py-2 rounded-lg text-[10px] md:text-xs font-semibold hover:bg-slate-100 transition-colors text-center">
                    Details
                  </button>
                  {bed1Confirmed ? (
                    <div className="flex-1 sm:flex-none bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 md:px-6 py-2 rounded-lg text-[10px] md:text-xs font-semibold flex items-center justify-center gap-1 md:gap-2">
                      <span className="material-symbols-outlined text-xs md:text-sm">check_circle</span>
                      Bed Confirmed
                    </div>
                  ) : (
                    <button
                      onClick={() => setBed1Confirmed(true)}
                      className="flex-1 sm:flex-none bg-primary text-white px-4 md:px-6 py-2 rounded-lg text-[10px] md:text-xs font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-1 md:gap-2 shadow-md shadow-primary/20"
                    >
                      <span className="material-symbols-outlined text-xs md:text-sm">add_box</span>
                      Confirm Bed
                    </button>
                  )}
                </div>
              </div>

              {/* Transfer 2 - AMB-12 */}
              <div className={`bg-white p-4 rounded-2xl border shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 transition-all duration-500 ${
                bed2Confirmed 
                  ? "border-emerald-300 border-l-4 border-l-emerald-500" 
                  : "border-slate-200 border-l-4 border-l-amber-500"
              }`}>
                <div className="flex items-center gap-4 md:gap-6">
                  <div className={`flex flex-col items-center justify-center border w-14 h-14 md:w-16 md:h-16 rounded-xl shrink-0 transition-colors ${
                    bed2Confirmed ? "bg-emerald-50 border-emerald-200" : "bg-slate-50 border-slate-100"
                  }`}>
                    <span className="text-[10px] md:text-xs font-semibold text-slate-500">ETA</span>
                    <span className={`font-display text-xl md:text-2xl font-bold ${bed2Confirmed ? "text-emerald-600" : "text-amber-500"}`}>12<span className="text-[10px] md:text-sm font-normal">m</span></span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
                      <span className="bg-amber-100 text-amber-700 border border-amber-200 px-2 py-0.5 rounded text-[8px] md:text-[10px] font-semibold uppercase">Cardiac</span>
                      <span className="font-display text-base md:text-lg font-bold text-slate-900">AMB-12</span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600">Suspected STEMI. Vitals stable, awaiting cath lab.</p>
                    {bed2Confirmed && (
                      <p className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        Cath Lab confirmed · Dr. Webb notified
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 md:gap-3 self-start sm:self-auto w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none bg-slate-50 border border-slate-200 text-slate-700 px-3 md:px-4 py-2 rounded-lg text-[10px] md:text-xs font-semibold hover:bg-slate-100 transition-colors text-center">
                    Details
                  </button>
                  {bed2Confirmed ? (
                    <div className="flex-1 sm:flex-none bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 md:px-6 py-2 rounded-lg text-[10px] md:text-xs font-semibold flex items-center justify-center gap-1 md:gap-2">
                      <span className="material-symbols-outlined text-xs md:text-sm">check_circle</span>
                      Bed Confirmed
                    </div>
                  ) : (
                    <button
                      onClick={() => setBed2Confirmed(true)}
                      className="flex-1 sm:flex-none bg-primary text-white px-4 md:px-6 py-2 rounded-lg text-[10px] md:text-xs font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-1 md:gap-2 shadow-md shadow-primary/20"
                    >
                      <span className="material-symbols-outlined text-xs md:text-sm">add_box</span>
                      Confirm Bed
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: On-Site Specialists */}
        <section className="lg:col-span-4 flex flex-col lg:h-full mt-4 lg:mt-0">
          <div className="bg-white border border-slate-200 shadow-sm rounded-2xl flex flex-col lg:h-full overflow-hidden">
            <div className="p-5 md:p-6 border-b border-slate-100 bg-slate-50">
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600">groups</span> On-Site Specialists
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1">Currently on shift and available.</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar">
              <div className="bg-white p-3 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border border-slate-200 shrink-0">
                  <img alt="Dr. Ngozi Okafor" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-slate-900 truncate pr-2">Dr. Ngozi Okafor</h4>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0"></div>
                  </div>
                  <p className="text-[9px] md:text-[10px] font-semibold text-emerald-600 mt-1 uppercase">Trauma Surgeon</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border border-slate-200 shrink-0">
                  <img alt="Dr. Emeka Nwosu" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-slate-900 truncate pr-2">Dr. Emeka Nwosu</h4>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0"></div>
                  </div>
                  <p className="text-[9px] md:text-[10px] font-semibold text-emerald-600 mt-1 uppercase">Cardiologist</p>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center gap-4 opacity-60">
                <div className="w-10 h-10 rounded-full bg-white overflow-hidden border border-slate-200 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-slate-400">person</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-slate-900 truncate pr-2">Dr. Aisha Bello</h4>
                    <div className="w-2 h-2 rounded-full bg-amber-500 mt-1 shrink-0"></div>
                  </div>
                  <p className="text-[9px] md:text-[10px] font-semibold text-slate-500 mt-1 uppercase">Neurologist &bull; In Surgery</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-100 mt-auto bg-slate-50">
              <button className="w-full bg-white border border-slate-200 text-slate-700 py-3 rounded-lg text-xs font-semibold hover:bg-slate-100 transition-colors shadow-sm">
                View All Specialists
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
