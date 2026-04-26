"use client";

import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="w-full py-8 md:py-12 border-t border-white/5 bg-slate-950 px-6 md:px-8">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-black text-slate-200 font-display">AMBER TACTICAL</div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-caps font-bold text-[10px] tracking-widest uppercase">
          <Link className="text-slate-500 hover:text-slate-300 transition-colors" href="#">Privacy Protocol</Link>
          <Link className="text-slate-500 hover:text-slate-300 transition-colors" href="#">Operational Terms</Link>
          <Link className="text-slate-500 hover:text-slate-300 transition-colors" href="#">Contact Command</Link>
        </div>
        <div className="font-caps font-bold text-[10px] tracking-widest uppercase text-slate-500 text-center md:text-right leading-relaxed">
          © 2026 AMBER TACTICAL. ELITE RESPONSE COORDINATION. <br className="hidden md:block"/>
          <span className="text-primary">SYSTEM STATUS: OPERATIONAL.</span>
        </div>
      </div>
    </footer>
  );
}
