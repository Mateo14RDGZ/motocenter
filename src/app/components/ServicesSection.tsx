import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { buildWhatsAppLink } from '@/config/business';

const WA_LINK = buildWhatsAppLink('Hola Motocenter, quería consultar por un servicio...');

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 md:mb-14 reveal-on-scroll stagger-1">
          <span className="text-xs font-800 tracking-widest text-primary uppercase mb-3 block">
            Qué hacemos
          </span>
          <h2 className="section-title text-foreground max-w-xl">Servicio completo para tu moto</h2>
        </div>

        {/* BENTO GRID AUDIT:
            Array: [Reparación (tall), Mantenimiento, Repuestos, Accesorios (full)]
            Row 1: [col-1: Reparación rs-2] [col-2: Mantenimiento]
            Row 2: [col-1: FILLED Reparación] [col-2: Repuestos]
            Row 3: [col-1+2: Accesorios cs-2]
            Placed 4/4 ✓
           */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Card 1 — Reparación (tall, row-span-2) */}
          <div className="md:row-span-2 relative rounded-3xl overflow-hidden img-zoom service-card-tall bg-foreground card-hover reveal-on-scroll stagger-1">
            <AppImage
              src="https://images.unsplash.com/photo-1766170507513-ef249e0ca426"
              alt="Mecánico trabajando en un taller de motos pequeño y desordenado"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                  <Icon
                    name="WrenchScrewdriverIcon"
                    size={24}
                    variant="solid"
                    className="text-white"
                  />
                </div>
                <span className="text-xs font-700 text-white/50 uppercase tracking-widest">01</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-800 text-white tracking-tight mb-3">
                  Reparación de motos
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  Diagnóstico y reparación para diferentes tipos de motocicletas. Del problema a la
                  solución, sin vueltas.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-700 text-primary hover:text-white transition-colors group"
                >
                  Consultanos
                  <Icon
                    name="ArrowRightIcon"
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 — Mantenimiento */}
          <div className="relative rounded-3xl overflow-hidden img-zoom bg-muted card-hover reveal-on-scroll stagger-2 min-h-[220px] md:min-h-0">
            <AppImage
              src="https://images.unsplash.com/photo-1746014995710-cfb7596d8967"
              alt="Persona poniendo aceite a una motocicleta durante un service"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-50"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                <Icon name="Cog6ToothIcon" size={20} variant="solid" className="text-white" />
              </div>
              <div>
                <span className="text-xs font-700 text-white/50 uppercase tracking-widest block mb-1">
                  02
                </span>
                <h3 className="text-xl font-800 text-white tracking-tight mb-1">
                  Servicio y mantenimiento
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  Mantenimiento general para mantener la moto en condiciones.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 — Repuestos */}
          <div className="relative rounded-3xl overflow-hidden img-zoom bg-muted card-hover reveal-on-scroll stagger-3 min-h-[220px] md:min-h-0">
            <AppImage
              src="https://images.unsplash.com/photo-1765447650904-aeb3a8e17f2b"
              alt="Repuestos y piezas de moto en un taller desordenado, ambiente realista"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-50"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="w-10 h-10 rounded-xl bg-primary/80 backdrop-blur-sm flex items-center justify-center">
                <Icon name="CubeIcon" size={20} variant="solid" className="text-white" />
              </div>
              <div>
                <span className="text-xs font-700 text-white/50 uppercase tracking-widest block mb-1">
                  03
                </span>
                <h3 className="text-xl font-800 text-white tracking-tight mb-1">Repuestos</h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  Amplia variedad de repuestos para diferentes motos y necesidades.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 — Accesorios (full width) */}
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden img-zoom bg-muted card-hover reveal-on-scroll stagger-4 min-h-[200px]">
            <AppImage
              src="https://images.unsplash.com/photo-1623038868323-7d39ec58eefe"
              alt="Casco de moto simple apoyado sobre el asfalto"
              fill
              sizes="100vw"
              className="object-cover opacity-55"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 w-full">
                <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Icon name="ShoppingBagIcon" size={24} variant="solid" className="text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-700 text-white/50 uppercase tracking-widest block mb-1">
                    04
                  </span>
                  <h3 className="text-2xl font-800 text-white tracking-tight mb-1">Accesorios</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-md">
                    Accesorios y productos para el uso diario de la moto. Consultanos por
                    disponibilidad.
                  </p>
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-shrink-0 self-start md:self-center"
                >
                  <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={18} variant="solid" />
                  Consultanos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
