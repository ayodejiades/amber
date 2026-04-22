"use client";

import { motion } from "framer-motion";
import { Lock, Mail, Phone, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="glass rounded-3xl p-8 border-white/10 shadow-2xl relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 blur-3xl rounded-full" />
          
          <div className="text-center mb-8 relative">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-accent/30">
              <Lock className="text-accent w-8 h-8" />
            </div>
            <h1 className="text-3xl font-display font-bold text-white">Secure Access</h1>
            <p className="text-slate-400 mt-2 text-sm">Log in to the Amber Emergency Network</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Medical ID / Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                  type="email" 
                  placeholder="name@hospital.gov.ng"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-12 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-white placeholder:text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Security Key</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-12 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-white placeholder:text-slate-700"
                />
              </div>
            </div>

            <button className="w-full py-4 bg-accent hover:bg-accent/90 text-white rounded-2xl font-display font-bold text-lg shadow-xl shadow-accent/20 transition-all flex items-center justify-center gap-3 mt-6 group">
              Verify Credentials
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-xs uppercase tracking-[0.2em]"><span className="bg-slate-950 px-4 text-slate-600">Alternative Secure Access</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white hover:bg-white/10 transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white hover:bg-white/10 transition-all">
              <Phone className="w-4 h-4" />
              Phone OTP
            </button>
          </div>

          <p className="text-center mt-8 text-xs text-slate-500">
            For technical assistance, contact <span className="text-accent">MOH Support</span>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
