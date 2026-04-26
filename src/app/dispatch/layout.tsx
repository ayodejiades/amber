"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AmberLogo } from "@/components/amber-logo";

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
      : "text-slate-500 hover:text-slate-900";
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-body selection:bg-primary/30 min-h-screen">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-16 bg-white border-b border-slate-200 shadow-sm">
        <div className="flex items-center gap-4 md:gap-6">
          <button 
            className="md:hidden text-slate-600 p-1"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <span className="material-symbols-outlined text-2xl">{isSidebarOpen ? 'menu_open' : 'menu'}</span>
          </button>
          <div className="flex items-center">
            <AmberLogo className="h-8 md:h-10 w-auto" />
          </div>
          <nav className="hidden lg:flex gap-6 items-center ml-4">
            <Link className="text-sm font-semibold text-primary border-b-2 border-primary pb-1" href="/dispatch">Overview</Link>
            <Link className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="/dispatch/fleet">Fleet</Link>
            <Link className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="/dispatch/analytics">Analytics</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden sm:flex flex-col items-end mr-2 md:mr-4">
            <span className="font-mono text-slate-600 text-sm font-bold">21:42 UTC</span>
          </div>
          <div className="hidden md:flex gap-4">
            <span className="material-symbols-outlined text-slate-400 hover:bg-slate-100 p-2 rounded transition-all cursor-pointer">shield</span>
            <span className="material-symbols-outlined text-slate-400 hover:bg-slate-100 p-2 rounded transition-all cursor-pointer">emergency_home</span>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined text-primary p-2 rounded cursor-pointer hover:bg-primary/5">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full heartbeat border border-white"></span>
          </div>
          <img 
            alt="Dispatcher" 
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-sm object-cover" 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" 
          />
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SideNavBar */}
      <aside className={`fixed left-0 top-16 h-[calc(100vh-64px)] w-64 z-40 flex flex-col bg-white border-r border-slate-200 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 bg-primary rounded-full"></div>
            <div>
              <h3 className="font-display text-sm font-bold text-slate-900">Dispatch</h3>
              <p className="text-xs text-slate-500 font-medium">Dashboard</p>
            </div>
          </div>
          
          <nav className="space-y-2">
            <Link href="/dispatch" onClick={() => setIsSidebarOpen(false)} className={`w-full flex items-center gap-4 px-4 py-3 text-sm font-medium transition-all rounded-lg ${isActive("/dispatch")}`}>
              <span className="material-symbols-outlined text-lg">grid_view</span> Overview
            </Link>
            <Link href="/dispatch/hospitals" onClick={() => setIsSidebarOpen(false)} className={`w-full flex items-center gap-4 px-4 py-3 text-sm font-medium transition-all rounded-lg ${isActive("/dispatch/hospitals")}`}>
              <span className="material-symbols-outlined text-lg">local_hospital</span> Hospitals
            </Link>
            <Link href="/dispatch/fleet" onClick={() => setIsSidebarOpen(false)} className={`w-full flex items-center gap-4 px-4 py-3 text-sm font-medium transition-all rounded-lg ${isActive("/dispatch/fleet")}`}>
              <span className="material-symbols-outlined text-lg">ambulance</span> Fleet
            </Link>
            <Link href="/dispatch/analytics" onClick={() => setIsSidebarOpen(false)} className={`w-full flex items-center gap-4 px-4 py-3 text-sm font-medium transition-all rounded-lg ${isActive("/dispatch/analytics")}`}>
              <span className="material-symbols-outlined text-lg">query_stats</span> Analytics
            </Link>
            <Link href="/dispatch/settings" onClick={() => setIsSidebarOpen(false)} className={`w-full flex items-center gap-4 px-4 py-3 text-sm font-medium transition-all rounded-lg ${isActive("/dispatch/settings")}`}>
              <span className="material-symbols-outlined text-lg">settings</span> Settings
            </Link>
          </nav>
        </div>
        
        <div className="mt-auto p-6 space-y-4">
          <Link href="/dispatch?newEmergency=true" onClick={() => setIsSidebarOpen(false)} className="w-full block text-center bg-primary hover:bg-primary/90 text-white font-semibold py-4 text-sm rounded-xl shadow-lg shadow-primary/20 transition-colors">
            New Emergency
          </Link>
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <button className="w-full flex items-center gap-4 px-4 text-slate-500 hover:text-slate-900 transition-colors text-xs font-medium">
              <span className="material-symbols-outlined text-sm">history</span> Logs
            </button>
            <button className="w-full flex items-center gap-4 px-4 text-slate-500 hover:text-slate-900 transition-colors text-xs font-medium">
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
