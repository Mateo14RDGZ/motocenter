import React from 'react';
import Icon from '@/components/ui/AppIcon';
import { WA_LINK, MAPS_LINK, MAPS_EMBED, ADDRESS, DISPLAY_PHONE } from '@/config/business';

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Info Side */}
          <div className="lg:w-2/5 reveal-on-scroll stagger-1">
            <span className="text-xs font-800 tracking-widest text-primary uppercase mb-3 block">
              Encontranos
            </span>
            <h2 className="section-title text-foreground mb-6">Dónde estamos</h2>

            {/* Address card */}
            <div className="bg-card border border-border rounded-2xl p-5 mb-4 flex items-start gap-4 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="MapPinIcon" size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-800 text-foreground text-base mb-0.5">{ADDRESS.street}</p>
                <p className="text-muted-foreground text-sm">
                  {ADDRESS.locality}, Departamento de {ADDRESS.region}
                </p>
                <p className="text-muted-foreground text-sm">Uruguay · CP {ADDRESS.postalCode}</p>
              </div>
            </div>

            {/* Phone card */}
            <div className="bg-card border border-border rounded-2xl p-5 mb-6 flex items-center gap-4 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="PhoneIcon" size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-800 text-foreground text-base mb-0.5">{DISPLAY_PHONE}</p>
                <p className="text-muted-foreground text-sm">WhatsApp y llamadas</p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark flex-1 justify-center"
              >
                <Icon name="MapPinIcon" size={18} />
                Cómo llegar
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 justify-center"
              >
                <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={18} variant="solid" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:w-3/5 w-full reveal-on-scroll stagger-2">
            <div
              className="rounded-3xl overflow-hidden border border-border shadow-lg"
              style={{ height: '420px' }}
            >
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Ubicación Motocenter — ${ADDRESS.full}`}
                aria-label="Mapa de ubicación de Motocenter en Trinidad, Uruguay"
              />
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              {ADDRESS.full} — Abrí en Google Maps para navegación
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
