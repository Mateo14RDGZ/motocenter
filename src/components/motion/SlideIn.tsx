'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface SlideInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right';
  distance?: number;
}

/** Entra deslizando desde un costado, atado a la posición del scroll (ver Reveal.tsx). */
export default function SlideIn({
  children,
  className,
  delay = 0,
  direction = 'left',
  distance = 28,
}: SlideInProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x0 = direction === 'left' ? -distance : distance;

  const start = 94 - delay * 20;
  const end = 60 - delay * 20;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${start}%`, `start ${end}%`],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : x0, 0]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ opacity, x }}>
      {children}
    </motion.div>
  );
}
