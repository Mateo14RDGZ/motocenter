'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Entra con un "pop" de escala, no con fade+translate ni barrido. */
export default function ScaleIn({ children, className, delay = 0 }: ScaleInProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.85 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-40px', amount: 0.3 }}
      variants={variants}
      transition={{ type: 'spring', stiffness: 260, damping: 22, delay }}
    >
      {children}
    </motion.div>
  );
}
