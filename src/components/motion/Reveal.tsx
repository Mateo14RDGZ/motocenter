'use client';

import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'span';
}

/**
 * Entrada/salida atada directamente a la posición del scroll (no a un
 * IntersectionObserver con whileInView). El navegador puede retrasar la entrega
 * de los eventos de intersección durante un scroll suave, lo que hacía que la
 * animación de salida arrancara recién cuando el elemento ya estaba fuera de
 * pantalla. Con scroll-linked el valor se recalcula en cada frame de scroll,
 * así que se ve en tiempo real subiendo y bajando, sin demora.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  as = 'div',
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | HTMLSpanElement>(null);

  const start = 92 - delay * 30;
  const end = 42 - delay * 30;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${start}%`, `start ${end}%`],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : y, 0]);

  const MotionTag = as === 'span' ? motion.span : motion.div;

  if (reduceMotion) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag ref={ref as never} className={className} style={{ opacity, y: translateY }}>
      {children}
    </MotionTag>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const staggerItemTransition = { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const };
