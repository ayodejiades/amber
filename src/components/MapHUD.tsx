"use client";

import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

interface MarkerDef {
  id: string;
  lat: number;
  lng: number;
  type: 'ambulance' | 'incident' | 'hospital';
  label?: string;
}

interface MapHUDProps {
  center?: [number, number]; // [lat, lng]
  zoom?: number;
  markers?: MarkerDef[];
  className?: string;
  simulateMovement?: boolean;
  showHeatmap?: boolean;
  autoFocusAmbulance?: boolean;
  autoFocusZoom?: number;
  followAmbulance?: boolean;
}

interface OffscreenIndicator {
  angle: number;
  distanceKm: number;
}

export interface MapHUDHandle {
  zoomIn: () => void;
  zoomOut: () => void;
  recenterToAmbulance: () => void;
}

export const MapHUD = forwardRef<MapHUDHandle, MapHUDProps>(function MapHUD({
  center = [6.5244, 3.3792],
  zoom = 13,
  markers = [],
  className = '',
  simulateMovement = false,
  showHeatmap = false,
  autoFocusAmbulance = true,
  autoFocusZoom = 15,
  followAmbulance = false,
}: MapHUDProps, ref) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markerRefs = useRef<Record<string, any>>({});
  const heatCircles = useRef<any[]>([]);
  const posRef = useRef<Record<string, [number, number]>>({});
  const hasAutoFocused = useRef(false);
  const [ready, setReady] = useState(false);
  const [offscreenIndicator, setOffscreenIndicator] = useState<OffscreenIndicator | null>(null);

  const getAmbulancePosition = () => {
    const ambulance = markers.find((m) => m.type === 'ambulance');
    if (!ambulance) return null;
    return (posRef.current[ambulance.id] ?? [ambulance.lat, ambulance.lng]) as [number, number];
  };

  useImperativeHandle(ref, () => ({
    zoomIn: () => {
      mapInstance.current?.zoomIn();
    },
    zoomOut: () => {
      mapInstance.current?.zoomOut();
    },
    recenterToAmbulance: () => {
      const map = mapInstance.current;
      if (!map) return;
      const position = getAmbulancePosition();
      if (!position) return;
      map.flyTo(position, map.getZoom(), { animate: true });
    },
  }), [markers]);

  // ── Bootstrap Leaflet ─────────────────────────────────────────────
  useEffect(() => {
    if (mapInstance.current || !containerRef.current) return;

    let L: any;

    import('leaflet').then((mod) => {
      L = mod.default;

      // Initialise positions
      markers.forEach((m) => { posRef.current[m.id] = [m.lat, m.lng]; });

      const map = L.map(containerRef.current!, {
        center,
        zoom,
        zoomControl: false,
        attributionControl: false,
      });
      mapInstance.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        crossOrigin: true,
      }).addTo(map);

      // Force layout recalc after container is fully painted
      requestAnimationFrame(() => {
        map.invalidateSize();
        setReady(true);
      });
    });

    return () => {
      mapInstance.current?.remove();
      mapInstance.current = null;
      markerRefs.current = {};
      heatCircles.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Sync Markers ─────────────────────────────────────────────────
  useEffect(() => {
    if (!ready || !mapInstance.current) return;

    import('leaflet').then((mod) => {
      const L = mod.default;
      const map = mapInstance.current;

      // Remove stale markers
      Object.keys(markerRefs.current).forEach((id) => {
        if (!markers.find((m) => m.id === id)) {
          markerRefs.current[id].remove();
          delete markerRefs.current[id];
        }
      });

      markers.forEach((marker) => {
        const pos: [number, number] = posRef.current[marker.id] ?? [marker.lat, marker.lng];

        const color =
          marker.type === 'incident' ? '#EF4444' :
          marker.type === 'hospital' ? '#10B981' :
          '#3B82F6';

        const icon_name =
          marker.type === 'incident' ? 'emergency' :
          marker.type === 'hospital' ? 'local_hospital' :
          'airport_shuttle';

        if (!markerRefs.current[marker.id]) {
          const icon = L.divIcon({
            className: 'custom-div-icon',
            html: `<span class="material-symbols-outlined" style="color:${color};font-size:30px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.25));display:block">${icon_name}</span>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
          });

          const m = L.marker(pos, { icon }).addTo(map);
          if (marker.label) m.bindTooltip(marker.label, { permanent: true, direction: 'top', offset: [0, -8] });
          markerRefs.current[marker.id] = m;
        } else {
          markerRefs.current[marker.id].setLatLng(pos);
        }
      });
    });
  }, [ready, markers]);

  // ── Movement Simulation ───────────────────────────────────────────
  useEffect(() => {
    if (!simulateMovement || !ready) return;

    const id = setInterval(() => {
      const ambulance = markers.find((m) => m.type === 'ambulance');
      const incident  = markers.find((m) => m.type === 'incident');
      if (!ambulance || !incident) return;

      const cur = posRef.current[ambulance.id] ?? [ambulance.lat, ambulance.lng];
      const [cLat, cLng] = cur;
      const step = 0.0002;
      const nLat = cLat + (incident.lat > cLat ? step : -step);
      const nLng = cLng + (incident.lng > cLng ? step : -step);

      const close =
        Math.abs(nLat - incident.lat) < 0.001 &&
        Math.abs(nLng - incident.lng) < 0.001;

      if (!close) {
        posRef.current[ambulance.id] = [nLat, nLng];
        markerRefs.current[ambulance.id]?.setLatLng([nLat, nLng]);
        if (followAmbulance && mapInstance.current) {
          mapInstance.current.panTo([nLat, nLng], { animate: true });
        }
      }
    }, 1500);

    return () => clearInterval(id);
  }, [simulateMovement, ready, markers, followAmbulance]);

  // ── Follow ambulance while enabled ────────────────────────────────
  useEffect(() => {
    if (!ready || !mapInstance.current || !followAmbulance) return;
    const map = mapInstance.current;
    const position = getAmbulancePosition();
    if (!position) return;
    map.panTo(position, { animate: true });
  }, [followAmbulance, ready, markers]);

  // ── Auto-focus ambulance on first ready render ───────────────────
  useEffect(() => {
    if (!ready || !mapInstance.current || !autoFocusAmbulance || hasAutoFocused.current) return;
    const ambulance = markers.find((m) => m.type === 'ambulance');
    if (!ambulance) return;

    const map = mapInstance.current;
    const position: [number, number] = posRef.current[ambulance.id] ?? [ambulance.lat, ambulance.lng];
    map.setView(position, autoFocusZoom, { animate: true });
    hasAutoFocused.current = true;
  }, [ready, markers, autoFocusAmbulance, autoFocusZoom]);

  // ── Off-screen incident directional indicator ────────────────────
  useEffect(() => {
    if (!ready || !mapInstance.current) return;

    const map = mapInstance.current;

    const toRadians = (value: number) => (value * Math.PI) / 180;
    const toDegrees = (value: number) => (value * 180) / Math.PI;

    const calculateDistanceKm = (a: [number, number], b: [number, number]) => {
      const [lat1, lng1] = a;
      const [lat2, lng2] = b;
      const earthRadiusKm = 6371;
      const dLat = toRadians(lat2 - lat1);
      const dLng = toRadians(lng2 - lng1);
      const haversine =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
          Math.sin(dLng / 2) * Math.sin(dLng / 2);
      const centralAngle = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
      return earthRadiusKm * centralAngle;
    };

    const calculateBearing = (from: [number, number], to: [number, number]) => {
      const [lat1, lng1] = from;
      const [lat2, lng2] = to;
      const dLng = toRadians(lng2 - lng1);
      const y = Math.sin(dLng) * Math.cos(toRadians(lat2));
      const x =
        Math.cos(toRadians(lat1)) * Math.sin(toRadians(lat2)) -
        Math.sin(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.cos(dLng);
      const bearing = toDegrees(Math.atan2(y, x));
      return (bearing + 360) % 360;
    };

    const updateIndicator = () => {
      const incident = markers.find((m) => m.type === 'incident');
      const ambulance = markers.find((m) => m.type === 'ambulance');
      if (!incident || !ambulance) {
        setOffscreenIndicator(null);
        return;
      }

      const incidentPos: [number, number] = [incident.lat, incident.lng];
      const ambulancePos: [number, number] =
        posRef.current[ambulance.id] ?? [ambulance.lat, ambulance.lng];

      const inView = map.getBounds().pad(-0.02).contains(incidentPos);
      if (inView) {
        setOffscreenIndicator(null);
        return;
      }

      setOffscreenIndicator({
        angle: calculateBearing(ambulancePos, incidentPos),
        distanceKm: calculateDistanceKm(ambulancePos, incidentPos),
      });
    };

    updateIndicator();
    map.on('move zoom', updateIndicator);

    return () => {
      map.off('move zoom', updateIndicator);
    };
  }, [ready, markers]);

  // ── Heatmap ───────────────────────────────────────────────────────
  useEffect(() => {
    if (!ready || !mapInstance.current) return;

    // Remove old circles
    heatCircles.current.forEach((c) => c.remove());
    heatCircles.current = [];

    if (!showHeatmap) return;

    import('leaflet').then((mod) => {
      const L = mod.default;
      const hotspots: [number, number][] = [
        [6.51, 3.37], [6.53, 3.39], [6.49, 3.35],
      ];
      heatCircles.current = hotspots.map((pos) =>
        L.circle(pos, {
          color: '#EF4444',
          fillColor: '#EF4444',
          fillOpacity: 0.18,
          radius: 800,
          weight: 0,
        }).addTo(mapInstance.current)
      );
    });
  }, [showHeatmap, ready]);

  return (
    <div className={`relative ${className} overflow-hidden bg-slate-200`}>
      {/* Leaflet mounts here — must have explicit width + height */}
      <div
        ref={containerRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />

      {/* Loading state */}
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 z-20 pointer-events-none">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest animate-pulse">
            Initializing Tactical Vector...
          </p>
        </div>
      )}

      {/* HUD badge */}
      <div className="absolute top-3 left-3 z-[1001] bg-white/80 backdrop-blur-md border border-slate-100 px-3 py-1.5 rounded-lg shadow-xl pointer-events-none">
        <p className="text-[10px] font-black text-slate-900 flex items-center gap-2 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live Fleet Vector
        </p>
      </div>

      {offscreenIndicator && (
        <div className="absolute bottom-4 left-1/2 z-[1002] -translate-x-1/2 rounded-full border border-red-200 bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur pointer-events-none">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-red-600"
              style={{ transform: `rotate(${offscreenIndicator.angle}deg)` }}
            >
              north
            </span>
            <p className="text-[10px] font-black uppercase tracking-widest text-red-700">
              Incident off-screen · {offscreenIndicator.distanceKm.toFixed(1)} km
            </p>
          </div>
        </div>
      )}
    </div>
  );
});
