'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Entra con un "pop" de escala, atado a la posición del scroll (ver Reveal.tsx). */
export default function ScaleIn({ children, className, delay = 0 }: ScaleInProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const start = 96 - delay * 20;
  const end = 62 - delay * 20;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${start}%`, `start ${end}%`],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 1 : 0.85, 1]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ opacity, scale }}>
      {children}
    </motion.div>
  );
}
