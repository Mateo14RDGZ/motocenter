'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import RevealMask from '@/components/motion/RevealMask';
import SlideIn from '@/components/motion/SlideIn';
import TiltCard from '@/components/motion/TiltCard';
import { buildWhatsAppLink } from '@/config/business';

const WA_LINK = buildWhatsAppLink('Hola Motocenter, quería consultar por un servicio...');

// TODO: reemplazar las imágenes (campo `image`) por fotos reales del taller
// cuando estén disponibles.
const services = [
  {
    code: '01',
    icon: 'WrenchScrewdriverIcon' as const,
    title: 'Reparación de motos',
    description:
      'Diagnóstico y reparación para diferentes tipos de motocicletas. Del problema a la solución, sin vueltas.',
    image: 'https://images.unsplash.com/photo-1766170507513-ef249e0ca426',
    alt: 'Mecánico trabajando en un taller de motos pequeño y desordenado',
  },
  {
    code: '02',
    icon: 'Cog6ToothIcon' as const,
    title: 'Servicio y mantenimiento',
    description: 'Mantenimiento general para mantener la moto en condiciones.',
    image: 'https://images.unsplash.com/photo-1746014995710-cfb7596d8967',
    alt: 'Persona poniendo aceite a una motocicleta durante un service',
  },
  {
    code: '03',
    icon: 'CubeIcon' as const,
    title: 'Repuestos',
    description: 'Amplia variedad de repuestos para diferentes motos y necesidades.',
    image: 'https://images.unsplash.com/photo-1765447650904-aeb3a8e17f2b',
    alt: 'Repuestos y piezas de moto en un taller desordenado, ambiente realista',
  },
  {
    code: '04',
    icon: 'ShoppingBagIcon' as const,
    title: 'Accesorios',
    description:
      'Accesorios y productos para el uso diario de la moto. Consultanos disponibilidad.',
    image: 'https://images.unsplash.com/photo-1623038868323-7d39ec58eefe',
    alt: 'Casco de moto simple apoyado sobre el asfalto',
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="servicios" className="py-20 md:py-24 bg-background overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <RevealMask className="mb-10 md:mb-14">
          <span className="eyebrow text-primary mb-3 block">01 — Qué hacemos</span>
          <h2 className="section-title text-foreground max-w-xl">Servicio completo para tu moto</h2>
        </RevealMask>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-8 lg:gap-4 items-stretch">
          {/* Selector list */}
          <div className="flex flex-col border-t border-border">
            {services.map((s, i) => (
              <SlideIn key={s.code} delay={i * 0.05}>
                <button
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`w-full group text-left flex items-center gap-4 md:gap-6 py-5 md:py-6 border-b border-border transition-colors ${
                    active === i ? 'bg-muted/60' : ''
                  }`}
                >
                  <span
                    className={`spec-number text-2xl md:text-3xl transition-colors flex-shrink-0 ${
                      active === i ? 'text-primary' : 'text-muted-foreground/40'
                    }`}
                  >
                    {s.code}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-display font-600 text-lg md:text-xl tracking-tight transition-colors ${
                        active === i ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {s.title}
                    </h3>
                    <AnimatePresence initial={false}>
                      {active === i && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="text-muted-foreground text-sm leading-relaxed mt-1.5 overflow-hidden lg:hidden"
                        >
                          {s.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <Icon
                    name="ArrowRightIcon"
                    size={18}
                    className={`flex-shrink-0 transition-all duration-200 ${
                      active === i
                        ? 'text-primary translate-x-0 opacity-100'
                        : 'text-transparent -translate-x-2 opacity-0'
                    }`}
                  />
                </button>
              </SlideIn>
            ))}

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 self-start"
            >
              <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={18} variant="solid" />
              Consultanos por WhatsApp
            </a>
          </div>

          {/* Image panel — desktop only, crossfades with the active row + tilt 3D */}
          <TiltCard
            max={4}
            className="hidden lg:block relative rounded-3xl overflow-hidden bg-ink min-h-[440px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.code}
                initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
                className="absolute inset-0"
              >
                <AppImage
                  src={current.image}
                  alt={current.alt}
                  fill
                  sizes="(max-width: 1024px) 0px, 45vw"
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="relative z-10 h-full min-h-[440px] flex flex-col justify-between p-8">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                <Icon name={current.icon} size={26} variant="solid" className="text-ink" />
              </div>
              <div>
                <h3 className="text-3xl font-display font-600 text-paper tracking-tight mb-3">
                  {current.title}
                </h3>
                <p className="text-paper/70 text-base leading-relaxed max-w-md">
                  {current.description}
                </p>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
