"use client";

import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";
import { MockDataNotice } from "@/components/mock-data-notice";

export default function AboutPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body selection:bg-primary/30">
      <PublicHeader />
      
      <main className="pt-32 min-h-screen">
        <section className="px-6 md:px-8 max-w-screen-xl mx-auto pb-24">
          <div className="mb-12">
            <span className="font-caps font-bold text-primary text-xs uppercase tracking-[0.3em] mb-4 block">Operation: The Amber Way</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase mb-6">Redefining the <br/><span className="text-primary">Golden Hour</span></h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
              In an emergency, every second isn&apos;t just time—it&apos;s a tactical decision. Amber was founded to eliminate the friction between a patient&apos;s distress and a hospital&apos;s recovery room.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="glass-panel p-8 rounded-lg border-primary/20">
              <h3 className="font-display text-xl text-white font-bold uppercase mb-4">Precision Intelligence</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Our AI doesn&apos;t just find the nearest hospital; it finds the *right* hospital. We analyze specialist shifts, bed telemetry, and equipment status in real-time.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-lg border-secondary/20">
              <h3 className="font-display text-xl text-white font-bold uppercase mb-4">Tactical Verification</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Every dispatch is backed by Amber Command. We verify bed availability before the ambulance even reaches the patient, ensuring zero rejection at the ER door.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-lg border-tertiary/20">
              <h3 className="font-display text-xl text-white font-bold uppercase mb-4">Digital Telemetry</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                While en route, patient vitals are streamed directly to the receiving surgeon. The hospital is ready before the patient arrives.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-xl border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <span className="material-symbols-outlined text-9xl">history_edu</span>
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-3xl text-white font-bold uppercase mb-8">The Protocol</h2>
              <div className="space-y-12">
                <div className="flex gap-8">
                  <span className="font-mono text-primary text-4xl font-bold">01</span>
                  <div>
                    <h4 className="font-caps font-bold text-white text-lg mb-2">Detection & Alert</h4>
                    <p className="text-slate-400 max-w-2xl">Signal received via secure client portal or tactical hotline. AI begins pathology assessment immediately.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <span className="font-mono text-primary text-4xl font-bold">02</span>
                  <div>
                    <h4 className="font-caps font-bold text-white text-lg mb-2">Matching & Dispatch</h4>
                    <p className="text-slate-400 max-w-2xl">System identifies the most qualified Tier-1 facility and dispatches the nearest elite mobile unit.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <span className="font-mono text-primary text-4xl font-bold">03</span>
                  <div>
                    <h4 className="font-caps font-bold text-white text-lg mb-2">Transit & Telemetry</h4>
                    <p className="text-slate-400 max-w-2xl">Constant biometric streaming to the hospital. Real-time traffic routing minimizes transit time.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <span className="font-mono text-primary text-4xl font-bold">04</span>
                  <div>
                    <h4 className="font-caps font-bold text-white text-lg mb-2">Handover & Resolution</h4>
                    <p className="text-slate-400 max-w-2xl">Verified surgical team meets the unit at the dock. Mission complete status logged.</p>
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
