"use client";

import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";
import { AmberLogo } from "@/components/amber-logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body selection:bg-primary/30 selection:text-white">
      <PublicHeader />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-24 px-6 md:px-8 overflow-hidden bg-slate-50">
          <div className="absolute inset-0 z-0">
            <img
              alt="Nigerian ambulance network"
              className="w-full h-full object-cover object-center"
              src="/images/nigerian_ambulance_hero.png"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 backdrop-blur-[1px] z-0"></div>

          <div className="relative z-10 w-full -mt-16 pl-4 md:pl-16">
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight md:leading-none mb-6 max-w-4xl text-slate-900 font-bold tracking-tighter">
              Saving Lives at the<br />
              <span className="text-primary">Speed of Data.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
              Lagos&apos;s first AI-coordinated ambulance network. We match patients to hospitals with open beds and the right specialists, before the ambulance arrives.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link href="/request" className="bg-primary text-white px-8 md:px-10 py-4 rounded-full text-sm font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors w-full sm:w-auto text-center">
                Get Started
              </Link>
              <button className="bg-white border border-slate-200 text-slate-700 px-8 md:px-10 py-4 rounded-full text-sm font-semibold shadow-sm hover:bg-slate-50 transition-colors w-full sm:w-auto">
                View Network
              </button>
            </div>
          </div>

          <div className="absolute bottom-12 right-12 hidden xl:block bg-white p-6 w-80 rounded-xl shadow-xl border border-slate-200 z-10">
            <div className="flex justify-between items-center mb-5">
              <span className="text-xs font-semibold text-slate-600">Live Tracking</span>
              <span className="inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4"></div>
                </div>
                <span className="font-mono font-medium text-[10px] text-primary">AMB-01: En route</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-1/4"></div>
                </div>
                <span className="font-mono font-medium text-[10px] text-slate-500">AMB-05: Standby</span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Grid */}
        <section className="py-16 md:py-24 px-6 md:px-8 bg-white border-y border-slate-100">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-12 md:mb-20 text-center">
              <h2 className="font-display text-3xl md:text-4xl text-slate-900 mb-4 uppercase tracking-tight font-bold">Why Amber</h2>
              <div className="h-1 w-16 md:w-24 bg-primary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* The Broken System */}
              <div className="bg-slate-50 p-6 md:p-10 relative overflow-hidden group border border-slate-200 rounded-2xl shadow-sm">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] hidden sm:block">
                  <span className="material-symbols-outlined text-slate-900 text-8xl">dangerous</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-slate-400 mb-6 md:mb-8 uppercase font-bold">The Problem</h3>
                <ul className="space-y-6 md:space-y-8 relative z-10">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-slate-500 text-sm">error_outline</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Blind Referrals</h4>
                      <p className="text-sm text-slate-600">Dispatchers send patients to the nearest hospital without checking bed availability or specialist status.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-slate-500 text-sm">close</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">44% Rejection Rate</h4>
                      <p className="text-sm text-slate-600">Nearly half of emergency transfers are rejected on arrival, forcing risky secondary trips.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-slate-500 text-sm">timer_off</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">No Advance Notice</h4>
                      <p className="text-sm text-slate-600">Hospitals get zero patient information before the ambulance doors open, losing critical preparation time.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* The Amber Way */}
              <div className="bg-white p-6 md:p-10 relative overflow-hidden border border-primary/20 rounded-2xl shadow-xl shadow-primary/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
                <h3 className="font-display text-2xl md:text-3xl text-primary mb-6 md:mb-8 uppercase font-bold">How Amber Works</h3>
                <ul className="space-y-6 md:space-y-8 relative z-10">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-primary text-sm">psychology</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">AI Matching</h4>
                      <p className="text-sm text-slate-600">Our system finds the best hospital based on current specialist shifts and real-time capacity.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Confirmed Beds</h4>
                      <p className="text-sm text-slate-600">We confirm bed availability with the hospital before the ambulance leaves. No more rejections at the door.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-primary text-sm">notification_important</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Pre-Arrival Alerts</h4>
                      <p className="text-sm text-slate-600">Patient vitals are sent to the receiving doctor 15 minutes before arrival, so the team is ready.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Live Network Monitor */}
        <section className="py-16 md:py-24 px-6 md:px-8 relative overflow-hidden bg-slate-50">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <span className="font-semibold text-primary text-xs uppercase tracking-widest mb-4 block">Live Network</span>
                <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight uppercase text-slate-900 font-bold">Live Network Monitor</h2>
                <p className="text-slate-600 mb-8 text-base md:text-lg">
                  Track ambulances and hospital capacity across Lagos in real time. Every patient transfer is logged with full transparency.
                </p>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-4 md:gap-6 p-4 border-b border-slate-200">
                    <span className="font-mono text-primary text-xl font-medium">01.</span>
                    <div>
                      <span className="font-semibold text-slate-900 block">Hospital Capacity</span>
                      <span className="text-xs text-slate-500">Live monitoring of ICU and ER beds across the network.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-6 p-4 border-b border-slate-200">
                    <span className="font-mono text-primary text-xl font-medium">02.</span>
                    <div>
                      <span className="font-semibold text-slate-900 block">Specialist Availability</span>
                      <span className="text-xs text-slate-500">Instant matching of patient needs to on-duty hospital specialists.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-200">
                  <div className="aspect-video relative rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center min-h-[250px]">
                    <img
                      alt="Map View"
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>

                    {/* Map Ping */}
                    <div className="relative">
                      <div className="w-12 h-12 md:w-16 md:h-16 border border-primary bg-primary/10 rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">emergency</span>
                      </div>
                    </div>

                    <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white border border-slate-200 rounded-lg px-3 py-1.5 md:px-4 md:py-2 hidden sm:block shadow-sm">
                      <span className="font-mono font-medium text-[8px] md:text-[10px] text-slate-700">LAGOS: 6.45&deg; N, 3.40&deg; E</span>
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 bg-white border border-slate-200 rounded-xl p-3 md:p-4 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-lg">
                      <div className="flex gap-4 md:gap-8 w-full sm:w-auto justify-between sm:justify-start">
                        <div>
                          <span className="block text-[10px] font-medium text-slate-500">Ambulances</span>
                          <span className="font-mono font-medium text-slate-900 text-base md:text-lg">142</span>
                        </div>
                        <div>
                          <span className="block text-[10px] font-medium text-slate-500">Avg Response</span>
                          <span className="font-mono font-medium text-primary text-base md:text-lg">04:12</span>
                        </div>
                      </div>
                      <Link href="/dispatch" className="w-full sm:w-auto text-center bg-primary text-white rounded-full px-5 py-2 font-semibold text-xs hover:bg-primary/90 transition-colors">
                        Open Dashboard
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 px-6 md:px-8 relative bg-white">
          <div className="max-w-screen-xl mx-auto bg-slate-50 text-slate-900 p-8 md:p-16 text-center relative overflow-hidden rounded-3xl shadow-xl border border-slate-200">
            <div className="relative z-10">
              <AmberLogo className="h-28 md:h-32 w-auto mx-auto mb-8" />
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 md:mb-8 tracking-tight">Better outcomes, faster.</h2>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-8 md:mb-12">
                Amber is available to hospital networks and registered members across Lagos. Join the network today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white font-semibold px-8 md:px-12 py-4 rounded-full text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  Join Now
                </button>
                <button className="bg-white text-slate-700 font-semibold px-8 md:px-12 py-4 rounded-full text-sm border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
                  Talk to Our Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
