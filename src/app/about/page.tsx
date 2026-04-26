"use client";

import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 text-slate-900 font-body selection:bg-primary/30">
      <PublicHeader />

      <main className="pt-32 min-h-screen">
        <section className="px-6 md:px-8 max-w-screen-xl mx-auto pb-24">
          <div className="mb-12">
            <span className="font-semibold text-primary text-xs uppercase tracking-[0.3em] mb-4 block">Our Mission</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter uppercase mb-6">Redefining the <br /><span className="text-primary">Golden Hour</span></h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
              In an emergency, every second counts. Amber was built to remove the gap between a patient in distress and the right hospital bed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-display text-xl text-slate-900 font-bold uppercase mb-4">Smart Matching</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our AI doesn&apos;t just find the nearest hospital &mdash; it finds the right one. We check specialist availability, bed status, and equipment in real time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-display text-xl text-slate-900 font-bold uppercase mb-4">Verified Availability</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every dispatch is confirmed. We verify bed availability before the ambulance reaches the patient, so there are no rejections at the ER door.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-display text-xl text-slate-900 font-bold uppercase mb-4">Live Patient Data</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                While en route, patient vitals are sent directly to the receiving doctor. The hospital is prepared before the patient arrives.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <span className="material-symbols-outlined text-9xl">history_edu</span>
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-3xl text-slate-900 font-bold uppercase mb-12">How It Works</h2>
              <div className="space-y-12">
                <div className="flex gap-8">
                  <span className="font-mono text-primary text-4xl font-bold">01</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg mb-2">Request & Alert</h4>
                    <p className="text-slate-600 max-w-2xl">Emergency request comes in through the app or hotline. Our system begins assessing the situation immediately.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <span className="font-mono text-primary text-4xl font-bold">02</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg mb-2">Match & Send</h4>
                    <p className="text-slate-600 max-w-2xl">The system identifies the best-fit hospital and sends the nearest available ambulance.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <span className="font-mono text-primary text-4xl font-bold">03</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg mb-2">En Route & Monitoring</h4>
                    <p className="text-slate-600 max-w-2xl">Patient vitals stream to the hospital in real time. Traffic-optimized routing keeps transit time minimal.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <span className="font-mono text-primary text-4xl font-bold">04</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg mb-2">Arrival & Handover</h4>
                    <p className="text-slate-600 max-w-2xl">The medical team is ready and waiting. Patient is handed over, transfer is logged.</p>
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
