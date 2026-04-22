"use client";

import { motion } from "framer-motion";
import { Activity, Shield, MapPin, Zap } from "lucide-react";

const STEPS = [
  {
    icon: <Activity className="w-6 h-6 text-accent" />,
    title: "Intelligent Intake",
    desc: "AI triages the patient's severity and specialist needs in seconds via voice or WhatsApp."
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    title: "Live Matching",
    desc: "Our engine scans the city for the nearest hospital with an open bed and the right specialist."
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    title: "Hospital Pre-Alert",
    desc: "Medical teams are alerted before the ambulance arrives, reducing triage time to zero."
  },
  {
    icon: <MapPin className="w-6 h-6 text-success" />,
    title: "Optimized Routing",
    desc: "Ambulances are routed using real-time traffic data to beat the Lagos 'Golden Hour'."
  }
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950">
      {/* Hero Section */}
      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-48">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(239,68,68,0.1)_0%,rgba(15,23,42,0)_100%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:gap-x-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
          >
            <div className="flex">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-400 ring-1 ring-white/10 hover:ring-white/20 transition-all bg-white/5">
                Empowering LASAMBUS & Private Facilities.{" "}
                <a href="#" className="font-semibold text-accent">
                  Our Mission <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className="mt-10 max-w-lg text-4xl font-display font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
              Saving Lives at the <span className="text-accent">Speed of Data</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Lagos's first AI-powered emergency coordination platform. We match patients to the right hospital, dispatch the nearest ambulance, and alert medical teams in real-time.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/login"
                className="rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all transform hover:-translate-y-1"
              >
                Launch Dispatch
              </a>
              <a href="#how-it-works" className="text-sm font-semibold leading-6 text-white group flex items-center gap-2">
                Learn how it works <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"
          >
            <div className="relative glass-light rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 blur-3xl rounded-full" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-semibold">Active Emergencies</h3>
                  <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                </div>
                <div className="space-y-4">
                  {[
                    { id: "01", status: "Matching...", color: "bg-amber-500" },
                    { id: "02", status: "En-route", color: "bg-success" },
                    { id: "03", status: "Pre-Alert", color: "bg-accent" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold font-mono">
                        {item.id}
                      </div>
                      <div className="flex-grow">
                        <div className="h-2 w-24 bg-slate-700 rounded-full mb-2" />
                        <div className="h-1.5 w-16 bg-slate-800 rounded-full" />
                      </div>
                      <div className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ${item.color}/20 text-${item.color.split('-')[1]}-400`}>
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 sm:py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">The Amber Ecosystem</h2>
            <p className="text-3xl sm:text-4xl font-display font-bold text-white">One platform, seamless coordination.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border-white/5 hover:border-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch Tagline */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-6xl font-display font-black text-white leading-tight">
            Every second counts. <br/>
            <span className="text-accent">Amber makes them matter.</span>
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-10 py-5 bg-white text-slate-950 rounded-2xl font-black text-xl hover:scale-105 transition-transform">
              Partner with Amber
            </button>
            <p className="text-slate-500 font-medium">Join 1,800+ private clinics saving lives.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
