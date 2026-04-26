"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body selection:bg-primary/30 selection:text-white">
      {/* TopNavBar */}
      <header className="fixed top-0 z-50 flex justify-between items-center w-full px-8 py-4 max-w-full bg-slate-950/60 backdrop-blur-xl border-b border-primary/10">
        <div className="text-2xl font-black tracking-widest text-white italic font-display">AMBER</div>
        <div className="hidden md:flex items-center gap-8 font-caps tracking-tight uppercase font-bold text-xs">
          <Link className="text-primary border-b-2 border-primary pb-1" href="/network">Network</Link>
          <Link className="text-slate-400 hover:text-white transition-colors" href="/about">Amber Way</Link>
          <Link className="text-slate-400 hover:text-white transition-colors" href="/partners">Hospital Partners</Link>
          <Link className="text-slate-400 hover:text-white transition-colors" href="/clients">Private Clients</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden lg:block text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest px-4 font-caps">
            Client Login
          </Link>
          <button className="bg-primary text-white font-caps tracking-tight uppercase font-bold text-xs px-6 py-3 rounded-sm hover:brightness-110 active:scale-95 transition-all duration-200 shadow-lg shadow-primary/20">
            Request Rapid Response
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-24 px-8 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <img 
              alt="Mission Control Center" 
              className="w-full h-full object-cover grayscale brightness-50" 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/20 to-slate-950"></div>
          </div>
          <div className="relative z-10 max-w-screen-xl mx-auto w-full">
            <h1 className="font-display text-5xl md:text-7xl leading-none mb-6 max-w-4xl gradient-text-white font-bold tracking-tighter">
              Security for the Most Vulnerable.<br/>
              Precision for the Best Hospitals.
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12 opacity-80 border-l-2 border-primary/50 pl-6">
              The world&apos;s first AI-coordinated A-Grade ambulance network. We eliminate rejection rates and specialist mismatches through real-time telemetry and tactical verification.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-primary text-white font-caps px-10 py-5 text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-primary/90 transition-colors active:scale-95 duration-200 font-bold">
                Initiate Protocol
              </button>
              <button className="border border-slate-700 text-slate-300 font-caps px-10 py-5 text-sm uppercase tracking-widest hover:bg-white/5 transition-all font-bold">
                View Network Map
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-12 right-12 hidden xl:block glass-card p-6 w-80">
            <div className="flex justify-between items-center mb-4">
              <span className="font-caps text-[10px] text-slate-400 uppercase tracking-widest font-bold">Active Fleet Telemetry</span>
              <span className="material-symbols-outlined text-secondary text-sm">sensors</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-1 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4"></div>
                </div>
                <span className="font-mono font-medium text-[10px] text-primary">UNIT_042: EN ROUTE</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/4"></div>
                </div>
                <span className="font-mono font-medium text-[10px] text-slate-500">UNIT_089: STANDBY</span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Grid (Amber Difference) */}
        <section className="py-24 px-8 bg-surface-container-low">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="font-display text-4xl text-white mb-4 uppercase tracking-tight font-semibold">The Amber Difference</h2>
              <div className="h-1 w-24 bg-primary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {/* The Broken System */}
              <div className="glass-card p-10 relative overflow-hidden group border-slate-800">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-primary text-6xl">dangerous</span>
                </div>
                <h3 className="font-display text-3xl text-slate-400 mb-8 uppercase font-medium">The Broken System</h3>
                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">error_outline</span>
                    <div>
                      <h4 className="font-caps font-bold text-white mb-1">Blind Referrals</h4>
                      <p className="text-sm text-slate-400">Dispatchers send patients to the nearest hospital without checking bed availability or specialist status.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">close</span>
                    <div>
                      <h4 className="font-caps font-bold text-white mb-1">44% Rejection Rate</h4>
                      <p className="text-sm text-slate-400">Nearly half of emergency transfers are rejected upon arrival, forcing hazardous secondary transits.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">timer_off</span>
                    <div>
                      <h4 className="font-caps font-bold text-white mb-1">Triage Chaos</h4>
                      <p className="text-sm text-slate-400">Hospitals receive zero telemetry before the ambulance doors open, losing critical minutes.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* The Amber Way */}
              <div className="glass-card p-10 relative overflow-hidden border-primary/30 bg-primary/5">
                <div className="absolute top-0 right-0 p-4">
                  <span className="material-symbols-outlined text-secondary text-6xl opacity-30">verified_user</span>
                </div>
                <h3 className="font-display text-3xl text-primary mb-8 uppercase font-medium">The Amber Way</h3>
                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1">psychology</span>
                    <div>
                      <h4 className="font-caps font-bold text-white mb-1">AI Matching</h4>
                      <p className="text-sm text-slate-300">Proprietary logic identifies the single best medical facility based on current specialist shifts and real-time load.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <div>
                      <h4 className="font-caps font-bold text-white mb-1">Human-Verified Beds</h4>
                      <p className="text-sm text-slate-300">Amber Command confirms bed availability with a live tactical coordinator before wheels turn.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1">notification_important</span>
                    <div>
                      <h4 className="font-caps font-bold text-white mb-1">Digital Pre-Alerts</h4>
                      <p className="text-sm text-slate-300">Full patient vitals are streamed directly to the ER surgeon&apos;s tablet 15 minutes prior to arrival.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tactical Explorer */}
        <section className="py-24 px-8 relative overflow-hidden">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <span className="font-caps font-bold text-primary text-xs uppercase tracking-widest mb-4 block">Amber Lab | Live Telemetry</span>
                <h2 className="font-display text-4xl mb-6 leading-tight uppercase text-white font-semibold">Tactical Intelligence Explorer</h2>
                <p className="text-on-surface-variant mb-8 text-lg">
                  Monitor your fleet and hospital network through our tactical HUD. Every patient transit is tracked with sub-second precision and biometric transparency.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-6 p-4 border-b border-white/5">
                    <span className="font-mono text-primary text-xl font-medium">01.</span>
                    <div>
                      <span className="font-caps font-bold text-white block">Real-time Hub Status</span>
                      <span className="text-xs text-slate-500">Live monitoring of ICU and trauma capacity across the network.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-4 border-b border-white/5">
                    <span className="font-mono text-primary text-xl font-medium">02.</span>
                    <div>
                      <span className="font-caps font-bold text-white block">Specialism Verification</span>
                      <span className="text-xs text-slate-500">Instant matching of patient pathology to available hospital equipment.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="glass-card relative p-1 bg-slate-950/80 rounded-lg overflow-hidden group border-primary/20">
                  <div className="reticle reticle-tl"></div><div className="reticle reticle-tr"></div>
                  <div className="reticle reticle-bl"></div><div className="reticle reticle-br"></div>
                  <div className="aspect-video relative rounded-sm overflow-hidden bg-slate-900 flex items-center justify-center">
                    <div className="absolute inset-0 bg-slate-800 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black"></div>
                    {/* Simulated Map Ping */}
                    <div className="relative">
                      <div className="w-16 h-16 border-2 border-primary/50 rounded-full animate-ping absolute -inset-0"></div>
                      <div className="w-16 h-16 border border-primary bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="material-symbols-outlined text-primary text-3xl">emergency</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 left-4 glass-card px-4 py-2">
                      <span className="font-mono font-medium text-[10px] text-primary">COORD: 51.5074° N, 0.1278° W</span>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4 glass-card p-4 flex justify-between items-center">
                      <div className="flex gap-8">
                        <div>
                          <span className="block font-caps font-bold text-[8px] text-slate-500 uppercase">Active Units</span>
                          <span className="font-mono font-medium text-white text-lg">142</span>
                        </div>
                        <div>
                          <span className="block font-caps font-bold text-[8px] text-slate-500 uppercase">Response Time</span>
                          <span className="font-mono font-medium text-primary text-lg">04:12</span>
                        </div>
                      </div>
                      <Link href="/dispatch" className="bg-primary/20 text-primary border border-primary/40 px-4 py-2 font-caps font-bold text-[10px] uppercase tracking-widest hover:bg-primary/30 transition-colors">
                        Enter Terminal
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-8 relative">
          <div className="max-w-screen-xl mx-auto glass-card p-16 text-center relative overflow-hidden border-primary/20 glow-red rounded-xl">
            <div className="absolute inset-0 z-0 opacity-10 bg-slate-900"></div>
            <div className="relative z-10">
              <h2 className="font-display font-semibold text-4xl mb-8 uppercase tracking-tighter text-white">Command the Outcome.</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
                Amber is only available to certified hospital networks and registered private clients. Secure your protocol today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white font-caps font-bold px-12 py-6 text-sm uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-95 duration-200">
                  Request Onboarding
                </button>
                <button className="glass-card text-white font-caps font-bold px-12 py-6 text-sm uppercase tracking-widest border-slate-700 hover:bg-white/5 transition-all">
                  Speak to an Operative
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-white/5 bg-slate-950 px-8">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-lg font-black text-slate-200 font-display">AMBER TACTICAL</div>
          <div className="flex flex-wrap justify-center gap-8 font-caps font-bold text-[10px] tracking-widest uppercase">
            <Link className="text-slate-500 hover:text-slate-300 transition-colors" href="#">Privacy Protocol</Link>
            <Link className="text-slate-500 hover:text-slate-300 transition-colors" href="#">Operational Terms</Link>
            <Link className="text-slate-500 hover:text-slate-300 transition-colors" href="#">Contact Command</Link>
          </div>
          <div className="font-caps font-bold text-[10px] tracking-widest uppercase text-slate-500 text-center md:text-right leading-relaxed">
            © 2026 AMBER TACTICAL. ELITE RESPONSE COORDINATION. <br/>
            <span className="text-primary">SYSTEM STATUS: OPERATIONAL.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
