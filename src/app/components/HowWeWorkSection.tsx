'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';
import RevealMask from '@/components/motion/RevealMask';

const steps = [
  {
    code: '01',
    icon: 'ChatBubbleOvalLeftEllipsisIcon' as const,
    title: 'Nos contás qué pasa',
    description:
      'Escribinos por WhatsApp con la marca, el modelo y el problema. No hace falta que sepas el nombre técnico de la pieza ni nada por el estilo.',
  },
  {
    code: '02',
    icon: 'WrenchScrewdriverIcon' as const,
    title: 'Diagnóstico antes de tocar nada',
    description:
      'Revisamos la moto y te explicamos qué tiene. Preferimos decirte primero qué encontramos antes de arrancar con la reparación.',
  },
  {
    code: '03',
    icon: 'CubeIcon' as const,
    title: 'Te confirmamos el repuesto',
    description:
      'Si hace falta una pieza, te decimos si la tenemos en el local o si hay que conseguirla, para que sepas con qué contás.',
  },
  {
    code: '04',
    icon: 'CheckCircleIcon' as const,
    title: 'Reparamos y te avisamos',
    description:
      'Hacemos el trabajo y te devolvemos la moto lista. Te contamos qué se hizo, sin vueltas.',
  },
];

function StoryStep({ step }: { step: (typeof steps)[number] }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0.45, x: -16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-start gap-5 sm:gap-6"
    >
      <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full border border-border shadow-sm flex items-center justify-center bg-primary">
        <div className="text-white">
          <Icon name={step.icon} size={22} />
        </div>
      </div>
      <div className="pt-1.5">
        <span className="spec-number text-xs text-primary block mb-1">{step.code}</span>
        <h3 className="font-display font-600 text-lg md:text-xl tracking-tight mb-1.5 text-foreground">
          {step.title}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowWeWorkSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="como-trabajamos" className="py-20 md:py-24 bg-muted overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <RevealMask className="mb-12 md:mb-16 text-center">
          <span className="eyebrow text-primary mb-3 block">06 — Cómo trabajamos</span>
          <h2 className="section-title text-foreground">Así encaramos cada reparación</h2>
        </RevealMask>

        <div className="relative">
          {/* Línea vertical que se "dibuja" una sola vez al entrar en pantalla */}
          <div
            className="hidden sm:block absolute left-6 top-2 bottom-2 w-px bg-border"
            aria-hidden="true"
          />
          <motion.div
            className="hidden sm:block absolute left-6 top-2 bottom-2 w-px bg-primary origin-top"
            initial={reduceMotion ? undefined : { scaleY: 0 }}
            whileInView={reduceMotion ? undefined : { scaleY: 1 }}
            viewport={{ once: true, margin: '0px 0px -20% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10 sm:gap-14">
            {steps.map((step) => (
              <StoryStep key={step.code} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
