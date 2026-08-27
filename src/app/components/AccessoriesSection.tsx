'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';
import RevealMask from '@/components/motion/RevealMask';
import { buildWhatsAppLink } from '@/config/business';

type Group = 'Todos' | 'Estética' | 'Seguridad' | 'Comodidad' | 'Iluminación';

interface AccessoryItem {
  icon:
    | 'SwatchIcon'
    | 'ShieldCheckIcon'
    | 'ShoppingBagIcon'
    | 'HandRaisedIcon'
    | 'SparklesIcon'
    | 'ArchiveBoxIcon'
    | 'Square2StackIcon'
    | 'LockClosedIcon'
    | 'DevicePhoneMobileIcon'
    | 'AdjustmentsHorizontalIcon'
    | 'BeakerIcon'
    | 'CogIcon';
  label: string;
  group: Group;
}

const items: AccessoryItem[] = [
  { icon: 'SwatchIcon', label: 'Calcomanías y gráfica', group: 'Estética' },
  { icon: 'ShieldCheckIcon', label: 'Cascos', group: 'Seguridad' },
  { icon: 'ShoppingBagIcon', label: 'Indumentaria', group: 'Seguridad' },
  { icon: 'HandRaisedIcon', label: 'Espejos y manoplas', group: 'Comodidad' },
  { icon: 'SparklesIcon', label: 'Luces e iluminación', group: 'Iluminación' },
  { icon: 'ArchiveBoxIcon', label: 'Baúles y portaequipajes', group: 'Comodidad' },
  { icon: 'Square2StackIcon', label: 'Fundas y cobertores', group: 'Comodidad' },
  { icon: 'LockClosedIcon', label: 'Alarmas y seguridad', group: 'Seguridad' },
  { icon: 'DevicePhoneMobileIcon', label: 'Soportes para celular', group: 'Comodidad' },
  { icon: 'AdjustmentsHorizontalIcon', label: 'Accesorios de tablero', group: 'Estética' },
  { icon: 'BeakerIcon', label: 'Limpieza y cuidado', group: 'Comodidad' },
  { icon: 'CogIcon', label: 'Escapes y estética deportiva', group: 'Estética' },
];

const groups: Group[] = ['Todos', 'Estética', 'Seguridad', 'Comodidad', 'Iluminación'];

export default function AccessoriesSection() {
  const [filter, setFilter] = useState<Group>('Todos');
  const visible = filter === 'Todos' ? items : items.filter((i) => i.group === filter);

  return (
    <section id="accesorios" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-10">
          <RevealMask>
            <span className="eyebrow text-primary mb-3 block">04 — Accesorios</span>
            <h2 className="section-title text-foreground max-w-xl">De todo un poco para tu moto</h2>
          </RevealMask>
          <RevealMask delay={0.1}>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-sm md:text-right">
              Desde calcomanías hasta luces. Filtrá por tipo y consultanos disponibilidad por
              WhatsApp.
            </p>
          </RevealMask>
        </div>

        {/* Filtro por chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setFilter(g)}
              className={`relative px-4 py-2.5 min-h-[44px] flex items-center rounded-full text-sm font-600 transition-colors ${
                filter === g
                  ? 'text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {filter === g && (
                <motion.span
                  layoutId="accessory-filter-pill"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{g}</span>
            </button>
          ))}
        </div>

        {/* Grilla animada tipo catálogo, con FLIP al filtrar */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.a
                key={item.label}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                href={buildWhatsAppLink(
                  `Hola Motocenter, quería consultar por ${item.label.toLowerCase()}...`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-3 text-center bg-muted hover:bg-primary/10 border border-border rounded-2xl aspect-square p-4 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Icon
                    name={item.icon}
                    size={22}
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                  />
                </div>
                <span className="text-xs md:text-sm font-600 text-foreground leading-tight">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        <RevealMask delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-muted border border-border rounded-2xl p-5 md:p-6 mt-8">
            <div className="text-center sm:text-left">
              <p className="font-700 text-foreground text-base mb-1">
                Esto es una muestra, no todo el catálogo
              </p>
              <p className="text-muted-foreground text-sm">
                Tenemos más variedad en el local. Contanos qué buscás y te decimos si lo tenemos.
              </p>
            </div>
            <a
              href={buildWhatsAppLink(
                'Hola Motocenter, quería consultar qué accesorios tienen disponibles...'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-shrink-0"
            >
              <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={18} variant="solid" />
              Consultar por WhatsApp
            </a>
          </div>
        </RevealMask>
      </div>
    </section>
  );
}
