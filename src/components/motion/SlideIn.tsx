'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';

interface SlideInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right';
  distance?: number;
}

/** Entra deslizando desde un costado, una sola vez al aparecer en pantalla. */
export default function SlideIn({
  children,
  className,
  delay = 0,
  direction = 'left',
  distance = 28,
}: SlideInProps) {
  const reduceMotion = useReducedMotion();
  const x0 = direction === 'left' ? -distance : distance;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: x0 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
