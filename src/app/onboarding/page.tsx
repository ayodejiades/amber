"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OnboardingPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!fullName || !email || !phone || !password) {
      setError("Please complete all required fields.");
      return;
    }
    if (!agree) {
      setError("Please accept the terms to continue.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      router.push("/members");
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] md:flex">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-200 bg-slate-50 p-4 md:flex">
        <div className="mb-8 px-3">
          <h1 className="text-lg font-black uppercase tracking-tight">Project Amber</h1>
          <p className="text-sm text-slate-600">Amber Command</p>
        </div>
        <nav className="space-y-2 px-1 text-sm">
          <button className="flex w-full items-center gap-3 rounded-md bg-white px-3 py-3 font-semibold text-red-600 shadow-sm">
            <span className="material-symbols-outlined">group</span>
            Members
          </button>
          <button className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-slate-600 hover:bg-slate-100">
            <span className="material-symbols-outlined">local_hospital</span>
            Hospitals
          </button>
          <button className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-slate-600 hover:bg-slate-100">
            <span className="material-symbols-outlined">hub</span>
            Admin
          </button>
          <button className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-slate-600 hover:bg-slate-100">
            <span className="material-symbols-outlined">medical_services</span>
            Paramedics
          </button>
        </nav>
        <div className="mt-auto px-3 pb-2">
          <button className="w-full rounded-lg bg-primary py-3 text-sm font-bold text-white">
            New Dispatch
          </button>
        </div>
      </aside>

      <main className="flex-1">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3 md:px-8">
          <div>
            <p className="text-base font-semibold md:text-2xl">Member Onboarding</p>
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <button className="rounded-full p-2 hover:bg-slate-100">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="rounded-full p-2 hover:bg-slate-100">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <button className="rounded-full p-2 hover:bg-slate-100">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>

        <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-10">
          <section className="self-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-700">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              VIP Registration
            </div>
            <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight">
              Elite Protection for You and Your Family
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              Gain immediate access to rapid response fleet coverage and priority medical logistics.
              Project Amber ensures uncompromising care when seconds matter.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <h3 className="text-sm font-bold">Rapid Dispatch</h3>
                <p className="text-sm text-slate-600">Under 15-minute response times in active zones.</p>
              </article>
              <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <span className="material-symbols-outlined">monitor_heart</span>
                </div>
                <h3 className="text-sm font-bold">Clinical Precision</h3>
                <p className="text-sm text-slate-600">ICU-level care en route to designated facilities.</p>
              </article>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <h3 className="text-2xl font-bold">Begin Member Enrollment</h3>
            <p className="mt-1 text-sm text-slate-600">Create your account to access member emergency services.</p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Full Name</label>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none focus:border-slate-400"
                  placeholder="John Sterling"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none focus:border-slate-400"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Phone Number</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none focus:border-slate-400"
                  placeholder="+234 801 234 5678"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none focus:border-slate-400"
                  placeholder="Create a strong password"
                />
              </div>

              <label className="flex items-start gap-2 text-xs text-slate-600">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-0.5"
                />
                <span>I agree to Terms of Service, Privacy Policy, and HIPAA compliance terms.</span>
              </label>

              {error ? (
                <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-white disabled:opacity-70"
              >
                {submitting ? "Creating account..." : "Create Member Account"}
                {!submitting ? <span className="material-symbols-outlined text-base">arrow_forward</span> : null}
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-slate-600">
              Already registered?{" "}
              <Link href="/login" className="font-semibold text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
