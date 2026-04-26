/**
 * Amber AI Matching Engine
 * 
 * Logic to rank hospitals based on:
 * 1. Proximity (Distance & ETA)
 * 2. Capacity (Available ER/Specialty beds)
 * 3. Capability (Required Specialist match)
 */

export interface Hospital {
  id: string;
  name: string;
  location: { lat: number; lng: number };
  beds: {
    er: number;
    icu: number;
    total: number;
  };
  specialists: string[];
  lastUpdated: Date;
  avgWaitTime: number; // minutes
}

export interface PatientRequest {
  location: { lat: number; lng: number };
  requiredSpecialist?: string;
  severity: "critical" | "severe" | "moderate";
}

export interface MatchResult {
  hospital: Hospital;
  score: number; // 0 to 100
  eta: number; // minutes
  distance: number; // km
  reasons: string[];
}

/**
 * Haversine formula to calculate distance between two points in km
 */
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * The Core Matching Algorithm
 */
export function findOptimalHospital(
  patient: PatientRequest,
  hospitals: Hospital[]
): MatchResult[] {
  return hospitals.map(hospital => {
    let score = 0;
    const reasons: string[] = [];

    // 1. Proximity Score (30%)
    const distance = calculateDistance(
      patient.location.lat, 
      patient.location.lng, 
      hospital.location.lat, 
      hospital.location.lng
    );
    
    // Assume 30km/h average speed in Lagos traffic
    const eta = (distance / 30) * 60; 
    
    // Distance scoring: 100 points for < 2km, dropping to 0 at 20km
    const proximityScore = Math.max(0, 100 - (distance * 5));
    score += proximityScore * 0.3;
    reasons.push(`Proximity: ${distance.toFixed(1)}km (~${Math.round(eta)}m)`);

    // 2. Capacity Score (30%)
    // Base capacity score on ER beds
    const capacityScore = hospital.beds.er > 0 ? 100 : 0;
    score += capacityScore * 0.3;
    if (hospital.beds.er > 0) {
      reasons.push(`${hospital.beds.er} ER Beds Available`);
    } else {
      reasons.push("NO ER BEDS AVAILABLE");
    }

    // 3. Capability Score (40%)
    let capabilityScore = 0;
    if (!patient.requiredSpecialist) {
      capabilityScore = 100; // General emergency
    } else {
      const hasSpecialist = hospital.specialists.includes(patient.requiredSpecialist);
      capabilityScore = hasSpecialist ? 100 : 0;
      if (hasSpecialist) {
        reasons.push(`${patient.requiredSpecialist} Match`);
      } else {
        reasons.push(`Lacks ${patient.requiredSpecialist}`);
      }
    }
    score += capabilityScore * 0.4;

    // Weight Penalty for Stale Data (> 1 hour)
    const minutesSinceUpdate = (new Date().getTime() - hospital.lastUpdated.getTime()) / 60000;
    if (minutesSinceUpdate > 60) {
      score *= 0.8; 
      reasons.push("Warning: Stale data (>60m)");
    }

    return {
      hospital,
      score: Math.round(score),
      eta: Math.round(eta),
      distance: Number(distance.toFixed(1)),
      reasons
    };
  })
  .sort((a, b) => b.score - a.score);
}

// Mock Database for Testing
export const MOCK_HOSPITALS: Hospital[] = [
  {
    id: "h1",
    name: "LUTH (Idi-Araba)",
    location: { lat: 6.5167, lng: 3.3667 },
    beds: { er: 4, icu: 2, total: 150 },
    specialists: ["Neurologist (Stroke)", "Trauma Surgeon", "Pediatrician"],
    lastUpdated: new Date(),
    avgWaitTime: 12
  },
  {
    id: "h2",
    name: "Lagos Island Maternity",
    location: { lat: 6.4500, lng: 3.4000 },
    beds: { er: 2, icu: 1, total: 80 },
    specialists: ["Obstetrician", "Pediatrician"],
    lastUpdated: new Date(new Date().getTime() - 4000000), // ~66 mins ago
    avgWaitTime: 45
  },
  {
    id: "h3",
    name: "Blue Cross (Apapa)",
    location: { lat: 6.4333, lng: 3.4333 },
    beds: { er: 8, icu: 5, total: 60 },
    specialists: ["Cardiologist", "Trauma Surgeon", "Neurologist (Stroke)"],
    lastUpdated: new Date(),
    avgWaitTime: 5
  }
];
