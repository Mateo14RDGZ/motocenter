'use client';

import { motion } from 'framer-motion';

interface ClockDialProps {
  hour: number;
  minute: number;
  isOpen: boolean;
  size?: number;
}

/** Reloj radial con la manecilla apuntando a la hora actual de Uruguay. */
export default function ClockDial({ hour, minute, isOpen, size = 96 }: ClockDialProps) {
  const angle = ((hour % 12) + minute / 60) * 30 - 90;

  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-border"
        />
        {Array.from({ length: 12 }).map((_, i) => {
          const tickAngle = (i * 30 * Math.PI) / 180;
          const x1 = 50 + 40 * Math.cos(tickAngle);
          const y1 = 50 + 40 * Math.sin(tickAngle);
          const x2 = 50 + 44 * Math.cos(tickAngle);
          const y2 = 50 + 44 * Math.sin(tickAngle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="2"
              className="text-muted-foreground/40"
            />
          );
        })}
        <motion.line
          x1="50"
          y1="50"
          x2={50 + 30 * Math.cos((angle * Math.PI) / 180)}
          y2={50 + 30 * Math.sin((angle * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className={isOpen ? 'text-primary' : 'text-muted-foreground'}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <circle cx="50" cy="50" r="3.5" fill="currentColor" className="text-foreground" />
      </svg>
      <span
        className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-background ${
          isOpen ? 'bg-green-500' : 'bg-red-500'
        }`}
      />
    </div>
  );
}
