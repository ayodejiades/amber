"use client";

import Link from "next/link";
import { useState } from "react";

export function PublicHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-full bg-slate-950/60 backdrop-blur-xl border-b border-primary/10">
        <Link href="/" className="text-xl md:text-2xl font-black tracking-widest text-white italic font-display">AMBER</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-caps tracking-tight uppercase font-bold text-xs">
          <Link className="text-slate-400 hover:text-white transition-colors" href="/network">Network</Link>
          <Link className="text-slate-400 hover:text-white transition-colors" href="/about">Amber Way</Link>
          <Link className="text-slate-400 hover:text-white transition-colors" href="/partners">Hospital Partners</Link>
          <Link className="text-slate-400 hover:text-white transition-colors" href="/clients">Private Clients</Link>
        </div>
        
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest px-4 font-caps">
            Client Login
          </Link>
          <button className="bg-primary text-white font-caps tracking-tight uppercase font-bold text-xs px-6 py-3 rounded-sm hover:brightness-110 active:scale-95 transition-all duration-200 shadow-lg shadow-primary/20">
            Request Rapid Response
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-slate-950/95 backdrop-blur-md p-6 flex flex-col gap-6 lg:hidden border-t border-primary/10 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-6 font-caps tracking-tight uppercase font-bold text-sm">
            <Link className="text-slate-400" href="/network" onClick={() => setIsMobileMenuOpen(false)}>Network</Link>
            <Link className="text-slate-400 hover:text-white transition-colors" href="/about" onClick={() => setIsMobileMenuOpen(false)}>Amber Way</Link>
            <Link className="text-slate-400 hover:text-white transition-colors" href="/partners" onClick={() => setIsMobileMenuOpen(false)}>Hospital Partners</Link>
            <Link className="text-slate-400 hover:text-white transition-colors" href="/clients" onClick={() => setIsMobileMenuOpen(false)}>Private Clients</Link>
          </nav>
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
            <Link href="/login" className="text-center text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest px-4 font-caps py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Client Login
            </Link>
            <button className="w-full bg-primary text-white font-caps tracking-tight uppercase font-bold text-xs px-6 py-4 rounded-sm hover:brightness-110 active:scale-95 transition-all duration-200 shadow-lg shadow-primary/20">
              Request Rapid Response
            </button>
          </div>
        </div>
      )}
    </>
  );
}
