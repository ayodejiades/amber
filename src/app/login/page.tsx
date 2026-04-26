"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AmberLogo } from "@/components/amber-logo";

const DEMO_ACCOUNTS = [
  { role: "Customer", email: "user@amber.ng", password: "amber2026", redirect: "/members" },
  { role: "Dispatcher", email: "dispatch@amber.ng", password: "amber2026", redirect: "/dispatch" },
  { role: "Hospital", email: "admin@bluecross.ng", password: "amber2026", redirect: "/hospital" },
  { role: "Paramedic", email: "crew@amber.ng", password: "amber2026", redirect: "/paramedic" },
];

export default function LoginPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState(0);
  const [email, setEmail] = useState(DEMO_ACCOUNTS[0].email);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRoleChange = (index: number) => {
    setSelectedRole(index);
    setEmail(DEMO_ACCOUNTS[index].email);
    setPassword("");
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const account = DEMO_ACCOUNTS[selectedRole];
    if (email === account.email && password === account.password) {
      setLoading(true);
      setTimeout(() => {
        router.push(account.redirect);
      }, 600);
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 selection:bg-primary/30">
      <div className="w-full max-w-md">
        <Link href="/" className="flex justify-center mb-8">
          <AmberLogo className="h-24 md:h-32 w-auto" />
        </Link>
        
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          <div className="text-center mb-6 relative">
            <h1 className="text-3xl font-display font-bold text-slate-900">Sign In</h1>
            <p className="text-slate-500 mt-2 text-sm">Log in to the Amber Emergency Network</p>
            <p className="mt-2 text-xs text-slate-500">
              New here?{" "}
              <Link href="/onboarding" className="font-semibold text-primary hover:underline">
                Create member account
              </Link>
            </p>
          </div>

          {/* Role Selector */}
          <div className="flex gap-2 mb-6 bg-slate-100 p-1 rounded-xl">
            {DEMO_ACCOUNTS.map((account, index) => (
              <button
                key={account.role}
                type="button"
                onClick={() => handleRoleChange(index)}
                className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedRole === index
                    ? "bg-white text-primary shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {account.role}
              </button>
            ))}
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-1">Email</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">mail</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@hospital.gov.ng"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-12 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-1">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">lock</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-12 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-sm text-primary bg-primary/5 border border-primary/10 rounded-xl px-4 py-3">
                <span className="material-symbols-outlined text-lg">error</span>
                {error}
              </div>
            )}

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 transition-colors flex items-center justify-center gap-3 mt-6 group disabled:opacity-70"
            >
              {loading ? "Signing in..." : "Sign In"}
              {!loading && <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
            <div className="relative flex justify-center text-xs uppercase tracking-wider font-medium"><span className="bg-white px-4 text-slate-400">Or sign in with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-slate-200 shadow-sm rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-slate-200 shadow-sm rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined text-lg">phone</span>
              Phone OTP
            </button>
          </div>

          <p className="text-center mt-8 text-xs text-slate-500">
            Need help? Contact <span className="text-primary hover:underline cursor-pointer">support</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
