"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AmberLogo } from "@/components/amber-logo";

export default function HospitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const isActive = (path: string) => {
    return pathname === path 
      ? "bg-primary text-white font-semibold shadow-md shadow-primary/20" 
      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100";
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-body antialiased min-h-screen overflow-x-hidden selection:bg-primary/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-6 h-16 bg-white border-b border-slate-200 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden text-slate-500 hover:text-slate-900 p-1"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <span className="material-symbols-outlined text-2xl">{isSidebarOpen ? 'menu_open' : 'menu'}</span>
          </button>
          <div className="flex items-center">
            <AmberLogo className="h-8 md:h-10 w-auto" />
          </div>
        </div>
        
        <div className="flex-1 flex justify-end mr-4 md:mr-6 hidden sm:flex">
          <div className="relative w-full max-w-xs lg:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input 
              className="w-full bg-slate-100 border-b-2 border-transparent focus:border-primary text-slate-900 pl-10 pr-4 py-1.5 focus:outline-none transition-colors text-sm rounded-t" 
              placeholder="Search patients, ambulances..." 
              type="text"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-1 md:gap-2">
          <button className="text-slate-500 hover:bg-primary/10 hover:text-primary transition-colors p-2 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-slate-500 hover:bg-primary/10 hover:text-primary transition-colors p-2 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">sensors</span>
          </button>
          <button className="text-slate-500 hover:bg-primary/10 hover:text-primary transition-colors p-2 rounded-full flex items-center justify-center hidden sm:flex">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
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
      <nav className={`fixed left-0 top-0 h-full w-64 z-40 pt-20 flex flex-col bg-white border-r border-slate-200 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="px-6 mb-8 flex flex-col gap-1">
          <h2 className="text-base font-bold text-slate-900 font-display">Hospital Portal</h2>
          <span className="text-xs text-primary font-semibold">Blue Cross Apapa</span>
        </div>
        
        <div className="flex flex-col gap-2 flex-1 px-4">
          <Link href="/hospital" onClick={() => setIsSidebarOpen(false)} className={`px-4 py-3 rounded-xl flex items-center gap-3 transition-colors text-sm font-medium ${isActive("/hospital")}`}>
            <span className="material-symbols-outlined">dashboard</span> Overview
          </Link>
          <Link href="/hospital/beds" onClick={() => setIsSidebarOpen(false)} className={`px-4 py-3 rounded-xl flex items-center gap-3 transition-colors text-sm font-medium ${isActive("/hospital/beds")}`}>
            <span className="material-symbols-outlined">bed</span> Beds
          </Link>
          <Link href="/hospital/specialists" onClick={() => setIsSidebarOpen(false)} className={`px-4 py-3 rounded-xl flex items-center gap-3 transition-colors text-sm font-medium ${isActive("/hospital/specialists")}`}>
            <span className="material-symbols-outlined">medical_services</span> Specialists
          </Link>
          <Link href="/hospital/logs" onClick={() => setIsSidebarOpen(false)} className={`px-4 py-3 rounded-xl flex items-center gap-3 transition-colors text-sm font-medium ${isActive("/hospital/logs")}`}>
            <span className="material-symbols-outlined">assignment</span> Activity Log
          </Link>
          <Link href="/hospital/settings" onClick={() => setIsSidebarOpen(false)} className={`px-4 py-3 rounded-xl flex items-center gap-3 transition-colors text-sm font-medium ${isActive("/hospital/settings")}`}>
            <span className="material-symbols-outlined">settings</span> Settings
          </Link>
        </div>
        
        <div className="p-4 mt-auto">
          <button className="w-full bg-slate-50 border border-slate-200 hover:border-primary/50 hover:bg-primary/5 text-primary py-3 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
            <span className="material-symbols-outlined">warning</span> Emergency Alert
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="md:ml-64 pt-20 md:pt-24 px-4 md:px-8 pb-12">
        <div className="max-w-[1440px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
