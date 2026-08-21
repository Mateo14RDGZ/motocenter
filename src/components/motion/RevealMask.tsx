'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

/** Revela el contenido con un barrido (clip-path), no con fade+translate. */
export default function RevealMask({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <motion.div
        initial={reduceMotion ? undefined : { clipPath: 'inset(0 0 100% 0)' }}
        whileInView={reduceMotion ? undefined : { clipPath: 'inset(0 0 0% 0)' }}
        viewport={{ once: false, margin: '-60px' }}
        transition={{ duration: 0.7, delay, ease: [0.65, 0, 0.35, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
