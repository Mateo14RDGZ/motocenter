'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';

/**
 * Revela el contenido con un barrido (clip-path) una sola vez al entrar en
 * pantalla (whileInView + viewport once). No vuelve a animar al scrollear
 * hacia arriba.
 */
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
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
