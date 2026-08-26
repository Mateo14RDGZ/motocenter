'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'span';
}

/**
 * Animación de entrada única, disparada por IntersectionObserver (whileInView
 * + viewport once). No vuelve a animar al scrollear hacia arriba y no recalcula
 * nada en cada frame de scroll, así el hilo principal queda libre.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  as = 'div',
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = as === 'span' ? motion.span : motion.div;

  if (reduceMotion) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
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
