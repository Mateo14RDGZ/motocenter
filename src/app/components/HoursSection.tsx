'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import RevealMask from '@/components/motion/RevealMask';
import ClockDial from '@/components/motion/ClockDial';
import { StaggerGroup, StaggerItem } from '@/components/motion/StaggerGroup';
import {
  SCHEDULE as schedule,
  WEEKDAY_OPEN_MIN,
  WEEKDAY_CLOSE_MIN,
  SATURDAY_OPEN_MIN,
  SATURDAY_CLOSE_MIN,
} from '@/config/business';

const URUGUAY_TIMEZONE = 'America/Montevideo';

// Hora/día actuales en Uruguay, sin importar la zona horaria del visitante
function getUruguayNow(): { day: number; hour: number; minute: number; timeNum: number } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: URUGUAY_TIMEZONE,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(new Date());

  const weekdayShort = parts.find((p) => p.type === 'weekday')?.value ?? 'Sun';
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? '0') % 24;
  const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? '0');

  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  return { day: weekdayMap[weekdayShort] ?? 0, hour, minute, timeNum: hour * 60 + minute };
}

function getBusinessStatus(day: number, timeNum: number): { isOpen: boolean; label: string } {
  if (day >= 1 && day <= 5) {
    if (timeNum >= WEEKDAY_OPEN_MIN && timeNum < WEEKDAY_CLOSE_MIN) {
      return { isOpen: true, label: 'Abierto ahora' };
    }
  }
  if (day === 6) {
    if (timeNum >= SATURDAY_OPEN_MIN && timeNum < SATURDAY_CLOSE_MIN) {
      return { isOpen: true, label: 'Abierto ahora' };
    }
  }
  return { isOpen: false, label: 'Cerrado ahora' };
}

const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

export default function HoursSection() {
  const [now, setNow] = useState({ day: 0, hour: 0, minute: 0, timeNum: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setNow(getUruguayNow());
    setReady(true);
  }, []);

  const status = getBusinessStatus(now.day, now.timeNum);

  return (
    <section id="horarios" className="py-20 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Header + Status */}
          <div className="lg:w-2/5">
            <RevealMask>
              <span className="eyebrow text-primary mb-3 block">07 — Horarios</span>
              <h2 className="section-title text-foreground mb-5">Cuando estamos abiertos</h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Pasá por el local o escribinos por WhatsApp. También hacemos delivery.
              </p>
            </RevealMask>

            {/* Live status con reloj radial */}
            <div className="flex items-center gap-4 bg-card border border-border rounded-2xl px-5 py-4 shadow-sm mb-6 w-fit">
              {ready && (
                <ClockDial hour={now.hour} minute={now.minute} isOpen={status.isOpen} size={64} />
              )}
              <div>
                <span
                  className={`text-sm font-700 block ${status.isOpen ? 'text-green-700' : 'text-red-700'}`}
                >
                  {status.label}
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  {ready
                    ? `${String(now.hour).padStart(2, '0')}:${String(now.minute).padStart(2, '0')} · ${dayNames[now.day]}`
                    : '—'}
                </span>
              </div>
            </div>

            {/* Delivery badge */}
            <div className="flex items-center gap-2 text-sm font-600 text-foreground bg-card border border-border rounded-xl px-4 py-3 w-fit">
              <Icon name="TruckIcon" size={18} className="text-primary" />
              Hacemos delivery de pedidos
            </div>
          </div>

          {/* Schedule Table */}
          <div className="lg:w-3/5 w-full pb-16 lg:pb-0">
            <StaggerGroup className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden">
              {schedule.map((item) => {
                const isToday = dayNames[now.day] === item.day;
                return (
                  <StaggerItem key={item.day}>
                    <div
                      className={`flex items-center justify-between px-5 md:px-7 py-4 md:py-5 border-b border-border last:border-b-0 transition-colors ${
                        isToday ? 'bg-primary/5' : 'hover:bg-muted/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-2 h-2 rounded-full flex-shrink-0 ${isToday ? 'bg-primary' : 'bg-transparent'}`}
                        />
                        <span
                          className={`text-sm md:text-base font-${isToday ? '800' : '600'} text-foreground`}
                        >
                          {item.day}
                          {isToday && (
                            <span className="ml-2 text-xs font-700 text-primary">(hoy)</span>
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-sm md:text-base font-mono font-600 ${item.open ? 'text-foreground' : 'text-muted-foreground'}`}
                        >
                          {item.hours}
                        </span>
                        {!item.open && <span className="closed-badge">Cerrado</span>}
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
