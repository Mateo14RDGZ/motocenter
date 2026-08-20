'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import {
  SCHEDULE as schedule,
  WEEKDAY_OPEN_MIN,
  WEEKDAY_CLOSE_MIN,
  SATURDAY_OPEN_MIN,
  SATURDAY_CLOSE_MIN,
} from '@/config/business';

const URUGUAY_TIMEZONE = 'America/Montevideo';

// Hora/día actuales en Uruguay, sin importar la zona horaria del visitante
function getUruguayNow(): { day: number; timeNum: number } {
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

  return { day: weekdayMap[weekdayShort] ?? 0, timeNum: hour * 60 + minute };
}

function getBusinessStatus(): { isOpen: boolean; label: string } {
  const { day, timeNum } = getUruguayNow();

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
  const [status, setStatus] = useState({ isOpen: false, label: 'Cerrado ahora' });
  const [todayIndex, setTodayIndex] = useState(0);

  useEffect(() => {
    setStatus(getBusinessStatus());
    setTodayIndex(getUruguayNow().day);
  }, []);

  return (
    <section id="horarios" className="py-20 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Header + Status */}
          <div className="lg:w-2/5 reveal-on-scroll stagger-1">
            <span className="text-xs font-800 tracking-widest text-primary uppercase mb-3 block">
              Horarios
            </span>
            <h2 className="section-title text-foreground mb-5">Cuando estamos abiertos</h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Pasá por el local o escribinos por WhatsApp. También hacemos delivery.
            </p>

            {/* Live status */}
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-5 py-3.5 shadow-sm mb-6">
              <span
                className={`w-3 h-3 rounded-full flex-shrink-0 ${status.isOpen ? 'bg-green-500' : 'bg-red-500'}`}
              />
              <span
                className={`text-sm font-700 ${status.isOpen ? 'text-green-700' : 'text-red-700'}`}
              >
                {status.label}
              </span>
            </div>

            {/* Delivery badge */}
            <div className="flex items-center gap-2 text-sm font-600 text-foreground bg-card border border-border rounded-xl px-4 py-3 w-fit">
              <Icon name="TruckIcon" size={18} className="text-primary" />
              Hacemos delivery de pedidos
            </div>
          </div>

          {/* Schedule Table */}
          <div className="lg:w-3/5 w-full reveal-on-scroll stagger-2">
            <div className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden">
              {schedule.map((item) => {
                const isToday = dayNames[todayIndex] === item.day;
                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between px-5 md:px-7 py-4 md:py-5 border-b border-border last:border-b-0 transition-colors ${
                      isToday ? 'bg-primary/5' : 'hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      )}
                      {!isToday && (
                        <span className="w-2 h-2 rounded-full bg-transparent flex-shrink-0" />
                      )}
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
                        className={`text-sm md:text-base font-600 ${item.open ? 'text-foreground' : 'text-muted-foreground'}`}
                      >
                        {item.hours}
                      </span>
                      {!item.open && <span className="closed-badge">Cerrado</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
