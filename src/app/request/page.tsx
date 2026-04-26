"use client";

import { useState, useEffect, useCallback } from "react";
import { AmberLogo } from "@/components/amber-logo";
import Link from "next/link";

type Stage = "request" | "matching" | "tracking" | "arrived";

const EMERGENCY_TYPES = [
  { icon: "car_crash", label: "Road Accident" },
  { icon: "cardiology", label: "Cardiac Emergency" },
  { icon: "personal_injury", label: "Trauma / Injury" },
  { icon: "pregnant_woman", label: "Maternity" },
  { icon: "thermostat", label: "Breathing Difficulty" },
  { icon: "more_horiz", label: "Other" },
];

export default function RequestPage() {
  const [stage, setStage] = useState<Stage>("request");
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [matchProgress, setMatchProgress] = useState(0);
  const [matchStep, setMatchStep] = useState(0);

  // Tracking state
  const [etaSeconds, setEtaSeconds] = useState(240); // 4 minutes
  const [distance, setDistance] = useState(2.4);
  const [speed, setSpeed] = useState(84);

  const MATCH_STEPS = [
    "Scanning nearby hospitals...",
    "Checking bed availability...",
    "Verifying specialist on duty...",
    "Routing nearest ambulance...",
    "Ambulance confirmed!",
  ];

  // Countdown timer for tracking stage
  useEffect(() => {
    if (stage !== "tracking") return;

    const interval = setInterval(() => {
      setEtaSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setStage("arrived");
          return 0;
        }
        return prev - 1;
      });

      setDistance((prev) => {
        const newDist = prev - 0.01;
        return newDist > 0 ? parseFloat(newDist.toFixed(2)) : 0;
      });

      // Vary speed slightly for realism
      setSpeed(() => {
        const base = 84;
        const jitter = Math.floor(Math.random() * 12) - 6;
        return base + jitter;
      });
    }, 250); // 4x faster: 4 min in-app ≈ 1 min real time

    return () => clearInterval(interval);
  }, [stage]);

  const formatEta = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return { mins, secs };
  }, []);

  const progressPercent = ((240 - etaSeconds) / 240) * 100;

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedType === null || !location) return;

    setStage("matching");
    setMatchProgress(0);
    setMatchStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setMatchStep(step);
      setMatchProgress((step / (MATCH_STEPS.length - 1)) * 100);
      if (step >= MATCH_STEPS.length - 1) {
        clearInterval(interval);
        setTimeout(() => {
          setEtaSeconds(240);
          setDistance(2.4);
          setSpeed(84);
          setStage("tracking");
        }, 1000);
      }
    }, 1200);
  };

  const handleLocateMe = () => {
    setLocation("Apapa Wharf, Lagos");
  };

  // Stage 1: Request Form
  if (stage === "request") {
    return (
      <div className="min-h-screen bg-slate-50 selection:bg-primary/30">
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <AmberLogo className="h-10 w-auto" />
          </Link>
          <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Sign In
          </Link>
        </header>

        <div className="max-w-lg mx-auto px-6 py-10">
          <div className="mb-8">
            <h1 className="font-display text-2xl font-bold text-slate-900 mb-2">Request an Ambulance</h1>
            <p className="text-sm text-slate-500">We&apos;ll find the nearest ambulance and match you with the right hospital.</p>
          </div>

          <form onSubmit={handleRequest} className="space-y-6">
            {/* Emergency Type */}
            <div className="space-y-3">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">What&apos;s the emergency?</label>
              <div className="grid grid-cols-2 gap-3">
                {EMERGENCY_TYPES.map((type, i) => (
                  <button
                    key={type.label}
                    type="button"
                    onClick={() => setSelectedType(i)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm font-medium transition-colors text-left ${selectedType === i
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                  >
                    <span className="material-symbols-outlined text-lg">{type.icon}</span>
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">location_on</span>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter address or landmark"
                  className="w-full bg-white border border-slate-200 rounded-xl px-12 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-slate-900 placeholder:text-slate-400"
                />
                <button
                  type="button"
                  onClick={handleLocateMe}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary text-xs font-semibold hover:underline flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">my_location</span>
                  Locate me
                </button>
              </div>
            </div>

            {/* Additional Details */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Additional details <span className="text-slate-400 font-normal">(optional)</span></label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Number of patients, visible injuries, conscious or not..."
                rows={3}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-slate-900 placeholder:text-slate-400 text-sm resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={selectedType === null || !location}
              className="w-full py-4 bg-primary text-white rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-xl">ambulance</span>
              Request Ambulance Now
            </button>
          </form>

          <p className="text-center mt-6 text-xs text-slate-400">
            For immediate life-threatening emergencies, also call <span className="font-semibold text-slate-600">112</span>
          </p>
        </div>
      </div>
    );
  }

  // Stage 2: Matching Animation
  if (stage === "matching") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 selection:bg-primary/30">
        <div className="max-w-sm w-full text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-primary text-4xl">search</span>
          </div>

          <h2 className="font-display text-xl font-bold text-slate-900 mb-2">Finding your ambulance</h2>
          <p className="text-sm text-slate-500 mb-10">This usually takes a few seconds.</p>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-slate-200 rounded-full mb-8 overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
              style={{ width: `${matchProgress}%` }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-4 text-left">
            {MATCH_STEPS.map((step, i) => (
              <div key={step} className={`flex items-center gap-3 text-sm transition-opacity duration-300 ${i <= matchStep ? "opacity-100" : "opacity-30"}`}>
                <span className={`material-symbols-outlined text-lg ${i < matchStep ? "text-emerald-500" : i === matchStep ? "text-primary" : "text-slate-300"}`}>
                  {i < matchStep ? "check_circle" : i === matchStep ? "pending" : "radio_button_unchecked"}
                </span>
                <span className={i <= matchStep ? "text-slate-900 font-medium" : "text-slate-400"}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Stage 4: Arrived
  if (stage === "arrived") {
    return (
      <div className="min-h-screen bg-slate-50 selection:bg-primary/30">
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <AmberLogo className="h-10 w-auto" />
          </Link>
          <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold">
            <span className="inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            Ambulance arrived
          </div>
        </header>

        <div className="max-w-lg mx-auto px-6 py-12 text-center">
          <div className="w-24 h-24 bg-emerald-50 border-2 border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-emerald-600 text-5xl">check</span>
          </div>

          <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">Your ambulance has arrived</h2>
          <p className="text-sm text-slate-500 mb-8">AMB-01 is at your location. The paramedic team is ready.</p>

          {/* Crew Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-4 text-left">
            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-600">person</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">Sgt. Tunde Bakare</p>
                <p className="text-xs text-slate-500">Lead Paramedic · AMB-01</p>
              </div>
              <a href="tel:+2341234567890" className="ml-auto w-10 h-10 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-emerald-600 text-lg">call</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">local_hospital</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">Blue Cross Hospital, Apapa</p>
                <p className="text-xs text-slate-500">ER Bed confirmed · Dr. Ngozi Okafor (Trauma)</p>
              </div>
            </div>
          </div>

          {/* Transfer info */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-left mb-6">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-emerald-600 text-lg mt-0.5">info</span>
              <div>
                <p className="text-sm font-semibold text-emerald-800 mb-1">Transfer in progress</p>
                <p className="text-xs text-emerald-700">You are being taken to Blue Cross Hospital, Apapa. The ER team has been notified and a bed is reserved for you.</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setStage("request");
              setSelectedType(null);
              setLocation("");
              setDetails("");
            }}
            className="text-sm font-medium text-slate-500 hover:text-primary transition-colors"
          >
            Back to home
          </button>
        </div>
      </div>
    );
  }

  // Stage 3: Live Tracking (Uber-style countdown)
  const eta = formatEta(etaSeconds);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/30">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <AmberLogo className="h-10 w-auto" />
        </Link>
        <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold">
          <span className="inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          Ambulance en route
        </div>
      </header>

      <div className="max-w-lg mx-auto px-6 py-8">
        {/* Map */}
        <div className="aspect-video bg-slate-200 rounded-2xl mb-6 relative overflow-hidden border border-slate-200">
          <img
            alt="Map"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
          <div className="absolute top-4 left-4 bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-sm">
            <span className="font-mono font-medium text-[10px] text-slate-700">Apapa Wharf, Lagos</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 border border-primary bg-primary/10 rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-primary text-3xl">ambulance</span>
            </div>
          </div>
        </div>

        {/* ETA Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg mb-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-slate-500 font-medium">Arriving in</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-display font-bold text-slate-900">{eta.mins}</span>
                <span className="text-lg text-slate-400 font-medium">min</span>
                <span className="text-4xl font-display font-bold text-slate-900 ml-1">{eta.secs.toString().padStart(2, "0")}</span>
                <span className="text-lg text-slate-400 font-medium">sec</span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono font-semibold text-slate-900">AMB-01</p>
              <p className="text-xs text-emerald-600 font-medium">En route to you</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-6">
            <div
              className="h-full bg-primary rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center border-t border-slate-100 pt-4">
            <div>
              <p className="text-xs text-slate-500">Speed</p>
              <p className="font-mono font-semibold text-slate-900">{speed} km/h</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Distance</p>
              <p className="font-mono font-semibold text-slate-900">{distance} km</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Unit</p>
              <p className="font-mono font-semibold text-slate-900">AMB-01</p>
            </div>
          </div>
        </div>

        {/* Crew + Hospital info */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-4">
          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-slate-600">person</span>
            </div>
            <div>
              <p className="font-semibold text-slate-900 text-sm">Sgt. Tunde Bakare</p>
              <p className="text-xs text-slate-500">Lead Paramedic · AMB-01</p>
            </div>
            <a href="tel:+2341234567890" className="ml-auto w-10 h-10 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-emerald-600 text-lg">call</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">local_hospital</span>
            </div>
            <div>
              <p className="font-semibold text-slate-900 text-sm">Blue Cross Hospital, Apapa</p>
              <p className="text-xs text-slate-500">ER Bed confirmed · Dr. Ngozi Okafor (Trauma)</p>
            </div>
          </div>
        </div>

        {/* Cancel */}
        <button
          onClick={() => {
            setStage("request");
            setSelectedType(null);
            setLocation("");
            setDetails("");
            setEtaSeconds(240);
          }}
          className="w-full py-3 text-sm font-medium text-slate-500 hover:text-primary transition-colors"
        >
          Cancel request
        </button>
      </div>
    </div>
  );
}
