"use client";

import Link from "next/link";
import { AmberIcon } from "@/components/amber-icon";

export function PublicFooter() {
  return (
    <footer className="w-full py-8 md:py-12 border-t border-slate-200 bg-slate-50 px-6 md:px-8">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center">
          <AmberIcon className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs font-medium uppercase tracking-wider">
          <Link className="text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</Link>
          <Link className="text-slate-500 hover:text-primary transition-colors" href="#">Terms of Service</Link>
          <Link className="text-slate-500 hover:text-primary transition-colors" href="#">Contact Us</Link>
        </div>
        <div className="text-xs font-medium uppercase tracking-wider text-slate-500 text-center md:text-right">
          &copy; 2026 Omoluabi Verify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
