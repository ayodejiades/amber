// Simple global event bus for demo purposes
// Allows Dispatch page to "send" an incident and Paramedic page to "listen"
import { audioEngine } from "./audio-engine";

type Incident = {
  id: string;
  type: string;
  location: string;
  eta: string;
  hospital: string;
  patient: string;
  priority?: 'high' | 'normal';
  telemetrySeed?: number;
  triageStatus?: string;
  patientProfile?: {
    bloodType: string;
    allergies: string[];
    history: string;
  };
};

type HospitalNotification = {
  id: string;
  incidentId: string;
  type: string;
  location: string;
  priority: 'priority' | 'alert';
  timestamp: string;
};

class MockStore extends EventTarget {
  private static instance: MockStore;
  
  private constructor() {
    super();
  }

  public static getInstance(): MockStore {
    if (!MockStore.instance) {
      MockStore.instance = new MockStore();
    }
    return MockStore.instance;
  }

  public dispatchIncident(incident: Incident) {
    const enriched: Incident = { 
      ...incident, 
      telemetrySeed: Math.random(),
      triageStatus: 'STABLE',
      patientProfile: {
        bloodType: 'O+',
        allergies: ['Penicillin'],
        history: 'Chronic hypertension, previous appendectomy'
      }
    };
    this.dispatchEvent(new CustomEvent('new-incident', { detail: enriched }));
    // Persist to localStorage
    localStorage.setItem('active-incident', JSON.stringify(enriched));
    
    // Audio Announcement
    if (audioEngine) {
      audioEngine.playPing(1200, 0.3);
      audioEngine.announce(`Emergency protocol initiated. ${incident.type} detected. Dispatching unit to ${incident.location}.`);
    }

    // Dispatch to hospital network
    this.broadcastToHospitals(enriched);
  }

  private broadcastToHospitals(incident: Incident) {
    if (audioEngine) {
      const ae = audioEngine; // Local ref to satisfy TS
      setTimeout(() => {
        ae.playPing(800, 0.2);
        ae.announce("Regional network broadcast complete. Nearby facilities notified.");
      }, 3000);
    }
    
    // Mock: Reddington and St. Nicholas are "nearby" (Priority)
    const hospitals = [
      { name: "Reddington VI", type: 'priority' },
      { name: "St. Nicholas", type: 'priority' },
      { name: "LUTH", type: 'alert' },
      { name: "Lagoon Ikoyi", type: 'alert' }
    ];

    hospitals.forEach(h => {
      const notification: HospitalNotification = {
        id: 'NOTIF-' + Math.random().toString(36).substr(2, 5),
        incidentId: incident.id,
        type: incident.type,
        location: incident.location,
        priority: h.type as 'priority' | 'alert',
        timestamp: new Date().toLocaleTimeString()
      };
      
      this.dispatchEvent(new CustomEvent(`hospital-notif`, { detail: notification }));
    });
  }

  public confirmBed(incidentId: string, bedDetails: string) {
    this.dispatchEvent(new CustomEvent('bed-confirmed', { 
      detail: { incidentId, bedDetails } 
    }));
    
    if (audioEngine) {
      audioEngine.playPing(1500, 0.1);
      audioEngine.announce(`Facility confirmed. ${bedDetails} reserved.`);
    }

    // Persist status
    const active = this.getActiveIncident();
    if (active && active.id === incidentId) {
      const updated = { ...active, hospitalStatus: 'bed-confirmed', bedDetails };
      localStorage.setItem('active-incident', JSON.stringify(updated));
    }
  }

  public updateTriage(incidentId: string, status: string) {
    this.dispatchEvent(new CustomEvent('triage-updated', { 
      detail: { incidentId, status } 
    }));
    
    if (audioEngine) {
      audioEngine.playPing(1000, 0.1);
      audioEngine.announce(`Triage update. Status changed to ${status}.`);
    }

    const active = this.getActiveIncident();
    if (active && active.id === incidentId) {
      const updated = { ...active, triageStatus: status };
      localStorage.setItem('active-incident', JSON.stringify(updated));
    }
  }

  public getActiveIncident(): Incident | null {
    if (typeof window === 'undefined') return null;
    const data = localStorage.getItem('active-incident');
    return data ? JSON.parse(data) : null;
  }

  public clearIncident() {
    localStorage.removeItem('active-incident');
    this.dispatchEvent(new CustomEvent('clear-incident'));
  }
}

export const mockStore = typeof window !== 'undefined' ? MockStore.getInstance() : null;
