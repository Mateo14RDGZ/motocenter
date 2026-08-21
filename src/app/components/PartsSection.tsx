'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';
import RevealMask from '@/components/motion/RevealMask';
import { buildWhatsAppLink } from '@/config/business';

const WA_LINK = buildWhatsAppLink(
  'Hola Motocenter, quería consultar por un repuesto para mi moto...'
);

interface Category {
  code: string;
  icon:
    | 'CogIcon'
    | 'StopCircleIcon'
    | 'LightBulbIcon'
    | 'FunnelIcon'
    | 'BeakerIcon'
    | 'ShieldCheckIcon';
  label: string;
  description: string;
}

const categories: Category[] = [
  {
    code: 'TX',
    icon: 'CogIcon',
    label: 'Transmisión',
    description: 'Cadenas, piñones, coronas y más.',
  },
  {
    code: 'FR',
    icon: 'StopCircleIcon',
    label: 'Frenos',
    description: 'Pastillas, discos y cables.',
  },
  {
    code: 'LZ',
    icon: 'LightBulbIcon',
    label: 'Luces',
    description: 'Faros, intermitentes y leds.',
  },
  {
    code: 'FL',
    icon: 'FunnelIcon',
    label: 'Filtros',
    description: 'Aire, aceite y combustible.',
  },
  {
    code: 'AC',
    icon: 'BeakerIcon',
    label: 'Aceites',
    description: 'Lubricantes para motor y transmisión.',
  },
  {
    code: 'EQ',
    icon: 'ShieldCheckIcon',
    label: 'Accesorios',
    description: 'Equipamiento y protección.',
  },
];

export default function PartsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="repuestos"
      className="py-20 md:py-24 bg-secondary text-secondary-foreground overflow-hidden relative"
    >
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <RevealMask>
            <span className="eyebrow text-primary mb-3 block">02 — El respaldo del taller</span>
            <h2 className="section-title text-secondary-foreground max-w-lg">
              Los repuestos que hacen falta para arreglarla
            </h2>
          </RevealMask>
          <RevealMask delay={0.1}>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-sm md:text-right">
              Repuestos y accesorios que conseguimos y usamos en cada reparación. Tocá una categoría
              para ver el detalle.
            </p>
          </RevealMask>
        </div>

        {/* Ficha técnica: lista con código de referencia, expandible */}
        <div className="border-t border-white/15">
          {categories.map((cat, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={cat.code} className="border-b border-white/15">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 md:gap-6 py-5 md:py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="spec-number text-sm md:text-base text-primary w-10 flex-shrink-0">
                    {cat.code}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name={cat.icon} size={18} className="text-primary" />
                  </div>
                  <h3 className="font-display font-600 text-lg md:text-2xl tracking-tight flex-1">
                    {cat.label}
                  </h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-shrink-0 text-primary"
                  >
                    <Icon name="PlusIcon" size={22} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-[3.75rem] md:pl-[4.75rem] flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                        <p className="text-muted-foreground text-sm md:text-base max-w-md">
                          {cat.description}
                        </p>
                        <a
                          href={buildWhatsAppLink(
                            `Hola Motocenter, quería consultar disponibilidad de ${cat.label.toLowerCase()}...`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-700 text-primary hover:text-paper transition-colors flex-shrink-0"
                        >
                          Consultar {cat.label.toLowerCase()}
                          <Icon name="ArrowRightIcon" size={14} />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <RevealMask delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 mt-10">
            <div className="text-center sm:text-left">
              <p className="font-700 text-secondary-foreground text-base mb-1">
                ¿No sabés si tenemos el repuesto que precisás?
              </p>
              <p className="text-muted-foreground text-sm">
                Contanos qué le pasa a tu moto y lo vemos en el taller.
              </p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-shrink-0"
            >
              <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={18} variant="solid" />
              Escribinos por WhatsApp
            </a>
          </div>
        </RevealMask>
      </div>
    </section>
  );
}
