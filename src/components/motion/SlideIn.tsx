'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface SlideInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right';
  distance?: number;
}

/** Entra deslizando desde un costado (no de abajo hacia arriba como Reveal). */
export default function SlideIn({
  children,
  className,
  delay = 0,
  direction = 'left',
  distance = 28,
}: SlideInProps) {
  const reduceMotion = useReducedMotion();
  const x = direction === 'left' ? -distance : distance;

  const variants: Variants = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : x },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-60px' }}
      variants={variants}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
