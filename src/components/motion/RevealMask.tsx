'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

/**
 * Revela el contenido con un barrido (clip-path), atado a la posición del scroll
 * (ver Reveal.tsx) para que se vea en tiempo real tanto al bajar como al subir.
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
  const ref = useRef<HTMLDivElement>(null);

  const start = 95 - delay * 20;
  const end = 65 - delay * 20;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${start}%`, `start ${end}%`],
  });

  const clipPath = useTransform(scrollYProgress, [0, 1], ['inset(0 0 100% 0)', 'inset(0 0 0% 0)']);

  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <motion.div ref={ref} style={reduceMotion ? undefined : { clipPath }}>
        {children}
      </motion.div>
    </div>
  );
}
