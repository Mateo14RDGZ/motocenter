import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { WA_LINK } from '@/config/business';

const stats = [
  {
    icon: 'WrenchScrewdriverIcon' as const,
    label: 'Taller',
    value: 'Diagnóstico y reparación',
  },
  {
    icon: 'CubeIcon' as const,
    label: 'Repuestos',
    value: 'Gran variedad disponible',
  },
  {
    icon: 'TruckIcon' as const,
    label: 'Delivery',
    value: 'Pedidos a domicilio',
  },
  {
    icon: 'UserGroupIcon' as const,
    label: 'Atención',
    value: 'Personalizada, cara a cara',
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image — TODO: reemplazar por foto real del taller o local de Motocenter */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1766170507513-ef249e0ca426"
          alt="Taller de motos pequeño y desordenado, con motos y repuestos, ambiente de barrio"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Scrim overlay — dark left-to-transparent for white text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      {/* Mechanic texture accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 mechanic-line pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-48 md:pb-52">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-white/25 rounded-full bg-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <span className="text-xs font-700 tracking-widest text-white uppercase">
              Trinidad · Flores · Uruguay
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-title text-white mb-4">
            Todo para
            <br />
            <span className="text-primary">tu moto</span>
            <br />
            en Trinidad
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 font-500 leading-relaxed mb-8 max-w-lg">
            Repuestos, accesorios, reparación y servicio integral para motos. Consultanos directo
            por WhatsApp.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={20} variant="solid" />
              Consultar por WhatsApp
            </a>
            <a href="#servicios" className="btn-secondary text-base">
              Ver servicios
              <Icon name="ChevronDownIcon" size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Stats Strip */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-0">
          <div className="bg-card rounded-t-2xl shadow-2xl border border-border border-b-0 px-4 py-4 md:px-8 md:py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-border">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 md:px-6 first:pl-0 last:pr-0">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name={stat.icon} size={20} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-600 uppercase tracking-wide leading-none mb-0.5">
                      {stat.label}
                    </p>
                    <p className="text-sm font-700 text-foreground leading-snug truncate">
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
