"use client";

import React, { useEffect, useState } from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, Tooltip } from 'recharts';

interface TelemetryChartProps {
  type: 'heart' | 'bp' | 'spo2';
  color?: string;
  className?: string;
  seed?: number;
}

export function TelemetryChart({ type, color = "#EF4444", className = "", seed = 0 }: TelemetryChartProps) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Initial data based on seed
    const initialData = Array.from({ length: 20 }).map((_, i) => {
      const randomValue = Math.abs(Math.sin((seed || 0) + i) * 10);
      return {
        value: getBaseValue(type) + (randomValue - 5),
        time: i
      };
    });
    setData(initialData);

    const interval = setInterval(() => {
      setData(prev => {
        const lastTime = prev[prev.length - 1].time;
        const randomValue = Math.abs(Math.sin((seed || 0) + lastTime + 1) * 10);
        const newValue = getBaseValue(type) + (randomValue - 5);
        const newData = [...prev.slice(1), { value: newValue, time: lastTime + 1 }];
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [type, seed]);

  function getBaseValue(t: string) {
    if (t === 'heart') return 88;
    if (t === 'bp') return 120;
    if (t === 'spo2') return 98;
    return 100;
  }

  return (
    <div className={`h-24 w-full ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={color} 
            strokeWidth={2} 
            dot={false} 
            isAnimationActive={false}
          />
          <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
          <XAxis hide dataKey="time" />
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-slate-900 border border-white/10 px-2 py-1 rounded text-[10px] text-white">
                    {Math.round(payload[0].value as number)}
                  </div>
                );
              }
              return null;
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
