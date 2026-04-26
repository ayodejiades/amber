"use client";

import Link from "next/link";
import { AmberLogo } from "@/components/amber-logo";
import { useState } from "react";

export function PublicHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-full bg-white border-b border-slate-200">
        <Link href="/" className="flex items-center">
          <AmberLogo className="h-10 md:h-12 w-auto" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-600">
          <Link className="hover:text-primary transition-colors" href="/network">Network</Link>
          <Link className="hover:text-primary transition-colors" href="/about">About</Link>
          <Link className="hover:text-primary transition-colors" href="/partners">Hospitals</Link>
          <Link className="hover:text-primary transition-colors" href="/clients">Pricing</Link>
        </div>
        
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/login" className="text-slate-600 hover:text-primary transition-colors text-sm font-medium px-4">
            Sign In
          </Link>
          <Link href="/request" className="bg-primary text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors">
            Request Ambulance
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-slate-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-white p-6 flex flex-col gap-6 lg:hidden border-t border-slate-200">
          <nav className="flex flex-col gap-6 font-medium text-sm">
            <Link className="text-slate-600 hover:text-primary transition-colors" href="/network" onClick={() => setIsMobileMenuOpen(false)}>Network</Link>
            <Link className="text-slate-600 hover:text-primary transition-colors" href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link className="text-slate-600 hover:text-primary transition-colors" href="/partners" onClick={() => setIsMobileMenuOpen(false)}>Hospitals</Link>
            <Link className="text-slate-600 hover:text-primary transition-colors" href="/clients" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
          </nav>
          <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col gap-4">
            <Link href="/login" className="text-center text-slate-600 hover:text-primary transition-colors text-sm font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Sign In
            </Link>
            <Link href="/request" className="w-full text-center bg-primary text-white font-semibold text-sm px-6 py-4 rounded-full hover:bg-primary/90 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Request Ambulance
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
