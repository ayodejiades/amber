"use client";

import { useEffect, useState } from "react";
import { mockStore } from "@/lib/mock-store";

export type ActiveIncident = {
  id: string;
  type: string;
  location: string;
  eta: string;
  hospital: string;
  patient: string;
  telemetrySeed?: number;
  triageStatus?: string;
  patientProfile?: {
    bloodType: string;
    allergies: string[];
    history: string;
  };
};

export function useParamedicIncident() {
  const [activeIncident, setActiveIncident] = useState<ActiveIncident | null>(() => {
    if (!mockStore) return null;
    return (mockStore.getActiveIncident() as ActiveIncident | null) ?? null;
  });
  const [showNotification, setShowNotification] = useState(false);
  const [bedConfirmed, setBedConfirmed] = useState(false);
  const [bedDetails, setBedDetails] = useState("");

  useEffect(() => {
    if (!mockStore) return;

    const handleNewIncident = (e: Event) => {
      const customEvent = e as CustomEvent<ActiveIncident>;
      setActiveIncident(customEvent.detail);
      setShowNotification(true);
      setBedConfirmed(false);
      setBedDetails("");
    };

    const handleClearIncident = () => {
      setActiveIncident(null);
      setBedConfirmed(false);
      setBedDetails("");
    };

    const handleBedConfirmed = (e: Event) => {
      const customEvent = e as CustomEvent<{ bedDetails: string }>;
      setBedConfirmed(true);
      setBedDetails(customEvent.detail.bedDetails);
    };

    mockStore.addEventListener("new-incident", handleNewIncident);
    mockStore.addEventListener("clear-incident", handleClearIncident);
    mockStore.addEventListener("bed-confirmed", handleBedConfirmed);

    return () => {
      mockStore.removeEventListener("new-incident", handleNewIncident);
      mockStore.removeEventListener("clear-incident", handleClearIncident);
      mockStore.removeEventListener("bed-confirmed", handleBedConfirmed);
    };
  }, []);

  return {
    activeIncident,
    showNotification,
    setShowNotification,
    bedConfirmed,
    bedDetails,
  };
}
