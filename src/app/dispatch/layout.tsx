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
    return pathname === path 
      ? "bg-primary/10 text-primary border-r-2 border-primary" 
      : "text-slate-500 hover:text-tertiary";
  };

  return (
    <div className="bg-surface-container-lowest text-on-background font-body selection:bg-primary/30 min-h-screen">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-16 bg-background/95 backdrop-blur-xl border-b-[0.5px] border-white/10 shadow-[0_2px_10px_rgba(239,68,68,0.05)]">
        <div className="flex items-center gap-4 md:gap-8">
          <button 
            className="md:hidden text-white p-1"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <span className="material-symbols-outlined text-2xl">{isSidebarOpen ? 'menu_open' : 'menu'}</span>
          </button>
          <span className="text-lg md:text-xl font-bold tracking-widest text-primary uppercase font-display">AMBER COMMAND</span>
          <nav className="hidden lg:flex gap-6 items-center">
            <Link className="font-display tracking-tight text-primary border-b-2 border-primary pb-1" href="/dispatch">Network</Link>
            <Link className="font-display tracking-tight text-slate-400 hover:text-white transition-colors" href="/dispatch/fleet">Assets</Link>
            <Link className="font-display tracking-tight text-slate-400 hover:text-white transition-colors" href="/dispatch/analytics">Logistics</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden sm:flex flex-col items-end mr-2 md:mr-4">
            <span className="font-mono text-tertiary text-[10px] tracking-widest uppercase font-bold">System Chronograph</span>
            <span className="font-mono text-white text-sm font-bold">21:42:08 UTC</span>
          </div>
          <div className="hidden md:flex gap-4">
            <span className="material-symbols-outlined text-slate-400 hover:bg-white/5 p-2 rounded transition-all cursor-pointer">security</span>
            <span className="material-symbols-outlined text-slate-400 hover:bg-white/5 p-2 rounded transition-all cursor-pointer">emergency_home</span>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined text-primary p-2 rounded cursor-pointer">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full heartbeat"></span>
          </div>
          <img 
            alt="Chief Dispatcher" 
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-primary/50 object-cover" 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" 
          />
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SideNavBar */}
      <aside className={`fixed left-0 top-16 h-[calc(100vh-64px)] w-64 z-40 flex flex-col bg-background border-r-[0.5px] border-white/10 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 bg-primary"></div>
            <div>
              <h3 className="font-display text-xs uppercase tracking-widest text-primary font-bold">OPERATIONS</h3>
              <p className="font-display text-[10px] text-secondary uppercase tracking-tighter font-bold">Tier 1 Secured</p>
            </div>
          </div>
          
          <nav className="space-y-2">
            <Link href="/dispatch" onClick={() => setIsSidebarOpen(false)} className={`w-full flex items-center gap-4 px-4 py-3 font-display text-xs uppercase tracking-widest transition-all font-bold ${isActive("/dispatch")}`}>
              <span className="material-symbols-outlined text-lg">grid_view</span> Command
            </Link>
            <Link href="/dispatch/hospitals" onClick={() => setIsSidebarOpen(false)} className={`w-full flex items-center gap-4 px-4 py-3 font-display text-xs uppercase tracking-widest transition-all font-bold ${isActive("/dispatch/hospitals")}`}>
              <span className="material-symbols-outlined text-lg">local_hospital</span> Hospitals
            </Link>
            <Link href="/dispatch/fleet" onClick={() => setIsSidebarOpen(false)} className={`w-full flex items-center gap-4 px-4 py-3 font-display text-xs uppercase tracking-widest transition-all font-bold ${isActive("/dispatch/fleet")}`}>
              <span className="material-symbols-outlined text-lg">ambulance</span> Fleet
            </Link>
            <Link href="/dispatch/analytics" onClick={() => setIsSidebarOpen(false)} className={`w-full flex items-center gap-4 px-4 py-3 font-display text-xs uppercase tracking-widest transition-all font-bold ${isActive("/dispatch/analytics")}`}>
              <span className="material-symbols-outlined text-lg">query_stats</span> Analytics
            </Link>
            <Link href="/dispatch/settings" onClick={() => setIsSidebarOpen(false)} className={`w-full flex items-center gap-4 px-4 py-3 font-display text-xs uppercase tracking-widest transition-all font-bold ${isActive("/dispatch/settings")}`}>
              <span className="material-symbols-outlined text-lg">settings</span> Settings
            </Link>
          </nav>
        </div>
        
        <div className="mt-auto p-6 space-y-4">
          <button className="w-full bg-primary text-white font-bold py-4 text-xs tracking-widest rounded shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-pulse uppercase font-caps">
            Emergency Trigger
          </button>
          <div className="pt-4 border-t border-white/10 space-y-2">
            <button className="w-full flex items-center gap-4 px-4 text-slate-500 hover:text-white transition-colors font-display text-[10px] uppercase font-bold">
              <span className="material-symbols-outlined text-sm">history_edu</span> Logs
            </button>
            <button className="w-full flex items-center gap-4 px-4 text-slate-500 hover:text-white transition-colors font-display text-[10px] uppercase font-bold">
              <span className="material-symbols-outlined text-sm">contact_support</span> Support
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 pt-16 h-screen flex flex-col overflow-hidden">
        {children}
      </main>
    </div>
  );
}
