'use client';

import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function CountUp({
  to,
  className,
  duration = 1.1,
}: {
  to: number;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {value}
    </motion.span>
  );
}
