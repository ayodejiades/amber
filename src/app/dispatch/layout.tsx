"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DispatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur md:px-8">
        <div className="flex items-center gap-4 md:gap-8">
          <button 
            className="p-1 text-slate-600 md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <span className="material-symbols-outlined text-2xl">{isSidebarOpen ? "menu_open" : "menu"}</span>
          </button>
          <div>
            <p className="font-display text-base font-black tracking-[0.2em] text-red-600 md:text-lg">
              AMBER COMMAND
            </p>
          </div>
          <nav className="ml-2 hidden items-center gap-6 lg:flex">
            <Link className="text-sm font-semibold text-red-600" href="/dispatch">Network</Link>
            <Link className="text-sm font-medium text-slate-500 hover:text-slate-900" href="/dispatch/hospitals">Assets</Link>
            <Link className="text-sm font-medium text-slate-500 hover:text-slate-900" href="/dispatch/fleet">Fleet</Link>
            <Link className="text-sm font-medium text-slate-500 hover:text-slate-900" href="/dispatch/analytics">Logistics</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-3 md:gap-5">
          <div className="hidden flex-col items-end md:flex">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">System Chronograph</span>
            <span className="font-mono text-sm font-bold text-slate-900">21:42:08 UTC</span>
          </div>
          <div className="hidden gap-2 md:flex">
            <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"><span className="material-symbols-outlined">security</span></button>
            <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"><span className="material-symbols-outlined">emergency_home</span></button>
          </div>
          <div className="relative">
            <button className="rounded-lg p-2 text-red-600 hover:bg-red-50">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </div>
          <div className="h-9 w-9 rounded-full border border-red-200 bg-red-50 md:h-10 md:w-10" />
        </div>
      </header>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-slate-900/40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-16 z-40 flex h-[calc(100vh-64px)] w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1.5 bg-red-600" />
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.18em] text-red-600">Operations</h3>
              <p className="text-[10px] uppercase tracking-[0.14em] text-amber-700">Tier 1 secured</p>
            </div>
          </div>
          
          <nav className="space-y-2">
            <Link href="/dispatch" onClick={() => setIsSidebarOpen(false)} className={`flex w-full items-center gap-4 rounded-lg px-4 py-3 text-xs font-black uppercase tracking-[0.14em] ${isActive("/dispatch") ? "bg-red-50 text-red-600 border-r-2 border-red-600" : "text-slate-500 hover:text-slate-900"}`}>
              <span className="material-symbols-outlined text-lg">grid_view</span> Command
            </Link>
            <Link href="/dispatch/hospitals" onClick={() => setIsSidebarOpen(false)} className={`flex w-full items-center gap-4 rounded-lg px-4 py-3 text-xs font-black uppercase tracking-[0.14em] ${isActive("/dispatch/hospitals") ? "bg-red-50 text-red-600 border-r-2 border-red-600" : "text-slate-500 hover:text-slate-900"}`}>
              <span className="material-symbols-outlined text-lg">local_hospital</span> Hospitals
            </Link>
            <Link href="/dispatch/fleet" onClick={() => setIsSidebarOpen(false)} className={`flex w-full items-center gap-4 rounded-lg px-4 py-3 text-xs font-black uppercase tracking-[0.14em] ${isActive("/dispatch/fleet") ? "bg-red-50 text-red-600 border-r-2 border-red-600" : "text-slate-500 hover:text-slate-900"}`}>
              <span className="material-symbols-outlined text-lg">ambulance</span> Fleet
            </Link>
            <Link href="/dispatch/analytics" onClick={() => setIsSidebarOpen(false)} className={`flex w-full items-center gap-4 rounded-lg px-4 py-3 text-xs font-black uppercase tracking-[0.14em] ${isActive("/dispatch/analytics") ? "bg-red-50 text-red-600 border-r-2 border-red-600" : "text-slate-500 hover:text-slate-900"}`}>
              <span className="material-symbols-outlined text-lg">query_stats</span> Analytics
            </Link>
            <Link href="/dispatch/settings" onClick={() => setIsSidebarOpen(false)} className={`flex w-full items-center gap-4 rounded-lg px-4 py-3 text-xs font-black uppercase tracking-[0.14em] ${isActive("/dispatch/settings") ? "bg-red-50 text-red-600 border-r-2 border-red-600" : "text-slate-500 hover:text-slate-900"}`}>
              <span className="material-symbols-outlined text-lg">settings</span> Settings
            </Link>
          </nav>
        </div>
        
        <div className="mt-auto p-6 space-y-4">
          <Link href="/dispatch?newEmergency=true" onClick={() => setIsSidebarOpen(false)} className="block w-full rounded-lg bg-red-600 py-4 text-center text-xs font-black uppercase tracking-[0.16em] text-white shadow-[0_0_18px_rgba(239,68,68,0.35)]">
            Emergency Trigger
          </Link>
          <div className="space-y-2 border-t border-slate-200 pt-4">
            <button className="flex w-full items-center gap-4 px-4 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">
              <span className="material-symbols-outlined text-sm">history_edu</span> Logs
            </button>
            <button className="flex w-full items-center gap-4 px-4 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">
              <span className="material-symbols-outlined text-sm">contact_support</span> Support
            </button>
          </div>
        </div>
      </aside>

      <main className="pt-16 md:ml-64">
        <div className="h-[calc(100vh-64px)] overflow-auto p-4 md:p-6">{children}</div>
      </main>

      <footer className="fixed bottom-0 left-64 right-0 hidden h-1 bg-gradient-to-r from-transparent via-red-300 to-transparent md:block" />
    </div>
  );
}
