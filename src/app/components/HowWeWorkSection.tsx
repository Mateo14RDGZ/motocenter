'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 78%', 'start 42%'],
  });

  const iconBg = useTransform(scrollYProgress, [0, 1], ['#ffffff', '#ff5a1f']);
  const iconColor = useTransform(scrollYProgress, [0, 1], ['#ff5a1f', '#ffffff']);
  const titleColor = useTransform(scrollYProgress, [0, 1], ['#6b6455', '#14161a']);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.45, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -16, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity: reduceMotion ? 1 : opacity, x: reduceMotion ? 0 : x }}
      className="relative flex items-start gap-5 sm:gap-6"
    >
      <motion.div
        style={{ backgroundColor: reduceMotion ? '#ff5a1f' : iconBg }}
        className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full border border-border shadow-sm flex items-center justify-center"
      >
        <motion.div style={{ color: reduceMotion ? '#ffffff' : iconColor }}>
          <Icon name={step.icon} size={22} />
        </motion.div>
      </motion.div>
      <div className="pt-1.5">
        <span className="spec-number text-xs text-primary block mb-1">{step.code}</span>
        <motion.h3
          style={{ color: reduceMotion ? '#14161a' : titleColor }}
          className="font-display font-600 text-lg md:text-xl tracking-tight mb-1.5"
        >
          {step.title}
        </motion.h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowWeWorkSection() {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 55%'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="como-trabajamos" className="py-20 md:py-24 bg-muted overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <RevealMask className="mb-12 md:mb-16 text-center">
          <span className="eyebrow text-primary mb-3 block">05 — Cómo trabajamos</span>
          <h2 className="section-title text-foreground">Así encaramos cada reparación</h2>
        </RevealMask>

        <div ref={timelineRef} className="relative">
          {/* Línea vertical que se va "dibujando" a medida que se scrollea */}
          <div
            className="hidden sm:block absolute left-6 top-2 bottom-2 w-px bg-border"
            aria-hidden="true"
          />
          <motion.div
            className="hidden sm:block absolute left-6 top-2 bottom-2 w-px bg-primary origin-top"
            style={{ scaleY: reduceMotion ? 1 : lineScale }}
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
