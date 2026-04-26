"use client";

import Link from "next/link";
import { MapHUD } from "@/components/MapHUD";

const DEPENDENTS = [
  { initials: "ES", name: "Eleanor Sterling", meta: "Spouse - ID: #883-A2" },
  { initials: "JS", name: "James Sterling", meta: "Child - ID: #883-A3" },
];

const LOGS = [
  { time: "Oct 12, 2023 - 14:30", title: "Routine Telehealth Consult", detail: "Dr. Sarah Jenkins - General checkup" },
  { time: "Sep 04, 2023 - 09:15", title: "Prescription Refill Filled", detail: "Lisinopril 10mg - Delivered to primary residence" },
];

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_#fee2e2_0%,_#f8fafc_35%,_#f8fafc_100%)] text-[#1a1c1c]">
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-red-600">Concierge Medical</p>
            <div className="text-xl font-black tracking-tight">PROJECT AMBER</div>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <Link className="border-b-2 border-red-500 pb-1 text-sm font-bold" href="/members">
              Home
            </Link>
            <button className="text-sm font-medium text-slate-500 hover:text-slate-900">Medical Records</button>
            <button className="text-sm font-medium text-slate-500 hover:text-slate-900">Profile</button>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-slate-500 hover:text-slate-900">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-slate-500 hover:text-slate-900">
              <span className="material-symbols-outlined">contact_support</span>
            </button>
            <Link
              href="/request"
              className="hidden rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.14em] text-white shadow-[0_10px_25px_-10px_rgba(220,38,38,0.8)] md:block"
            >
              Emergency Dispatch
            </Link>
            <div className="h-10 w-10 rounded-full border border-red-200 bg-gradient-to-br from-white to-red-50" />
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-6 py-8">
        <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.35)] md:p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-100/70 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 right-12 h-56 w-56 rounded-full bg-sky-100/70 blur-2xl" />

          <div>
            <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Protection System Optimal
            </p>
            <h1 className="font-display text-4xl font-semibold md:text-5xl">Welcome back, Mr. Sterling</h1>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
              Your family coverage is active. Priority dispatch, direct hospital coordination, and physician
              continuity are standing by around the clock.
            </p>
            <p className="mt-3 text-sm font-medium text-slate-500">Last sync: 2 mins ago - Plan Tier: Platinum Family Shield</p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-4 text-white shadow-[0_18px_28px_-16px_rgba(220,38,38,0.95)] md:w-auto"
            >
              <span className="material-symbols-outlined text-2xl">emergency</span>
              <span className="font-display text-xl">Request Emergency Evac</span>
            </Link>
            <button className="rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Review Family Coverage
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_16px_35px_-28px_rgba(15,23,42,0.6)] md:col-span-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-2xl font-medium">Medical Passport</h2>
              <button className="text-xs font-bold uppercase tracking-[0.12em] text-red-600">View Full Dossier</button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg border border-red-100 bg-gradient-to-b from-red-50 to-white p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500">Blood Type</p>
                <p className="mt-1 font-display text-3xl">O-</p>
                <p className="mt-1 text-xs font-medium text-red-600">Universal Donor</p>
              </div>
              <div className="rounded-lg border border-red-100 bg-gradient-to-b from-red-50 to-white p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500">Allergies</p>
                <p className="mt-1 font-display text-xl">Penicillin</p>
                <span className="mt-2 inline-block rounded-full bg-red-100 px-2 py-1 text-[10px] font-bold uppercase text-red-700">
                  Severe
                </span>
              </div>
              <div className="col-span-2 rounded-lg border border-slate-200 bg-slate-50/70 p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500">Active Conditions</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>- Mild Hypertension</li>
                  <li>- Post-Op Knee Arthroscopy (6mo)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-lg border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">Primary Care Physician</p>
                <p className="text-sm font-medium">Dr. Sarah Jenkins, MD - Johns Hopkins</p>
              </div>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                <span className="material-symbols-outlined">call</span>
              </button>
            </div>
          </article>

          <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_16px_35px_-28px_rgba(15,23,42,0.6)] md:col-span-4">
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 p-4">
              <h2 className="font-display text-2xl font-medium">Asset Readiness</h2>
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">Live</span>
            </div>
            <div className="h-52">
              <MapHUD
                className="h-full"
                zoom={12}
                center={[6.50, 3.37]}
                markers={[
                  { id: "vip-alpha", lat: 6.50, lng: 3.37, type: "incident", label: "VIP Alpha" },
                  { id: "ground-icu", lat: 6.49, lng: 3.36, type: "ambulance", label: "Ground ICU" },
                  { id: "heli", lat: 6.52, lng: 3.39, type: "hospital", label: "Aero-Med Heli" },
                ]}
              />
            </div>
            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Ground ICU Unit</p>
                  <p className="text-xs text-slate-500">3.2 mi away</p>
                </div>
                <p className="rounded-full bg-red-50 px-2 py-1 font-mono text-sm font-bold text-red-700">8 mins</p>
              </div>
              <div className="h-px bg-slate-200" />
              <div className="flex items-center justify-between opacity-80">
                <div>
                  <p className="text-sm font-semibold">Aero-Med Heli</p>
                  <p className="text-xs text-slate-500">Teterboro Base</p>
                </div>
                <p className="font-mono text-sm font-bold">14 mins</p>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_16px_35px_-28px_rgba(15,23,42,0.6)] md:col-span-6">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-display text-2xl font-medium">Covered Dependents</h2>
              <button className="text-slate-500">
                <span className="material-symbols-outlined">manage_accounts</span>
              </button>
            </div>
            <div className="space-y-3">
              {DEPENDENTS.map((dependent) => (
                <button
                  key={dependent.name}
                  className="flex w-full items-center justify-between rounded-lg border border-slate-100 bg-slate-50/60 p-3 text-left transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-slate-100 text-xs font-bold">
                      {dependent.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{dependent.name}</p>
                      <p className="text-xs text-slate-500">{dependent.meta}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-500">chevron_right</span>
                </button>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_16px_35px_-28px_rgba(15,23,42,0.6)] md:col-span-6">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-display text-2xl font-medium">Recent Logs</h2>
              <button className="text-xs font-bold uppercase tracking-[0.12em] text-red-600">View All</button>
            </div>
            <div className="ml-2 border-l-2 border-slate-200 pl-5">
              {LOGS.map((log) => (
                <div key={log.time} className="relative mb-5 rounded-lg border border-slate-100 bg-slate-50/50 p-3">
                  <div className="absolute -left-[27px] top-1 h-3.5 w-3.5 rounded-full border-2 border-red-500 bg-white" />
                  <p className="text-xs text-slate-500">{log.time}</p>
                  <p className="text-sm font-semibold">{log.title}</p>
                  <p className="text-xs text-slate-500">{log.detail}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <div className="text-lg font-bold">PROJECT AMBER</div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
            <button>Privacy Policy</button>
            <button>Terms of Service</button>
            <button>HIPAA Compliance</button>
            <button>Patient Rights</button>
          </div>
          <p className="text-sm text-slate-500">2024 Aero-Med Concierge Medical</p>
        </div>
      </footer>
    </div>
  );
}
