'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2';
}

/** Anima cada palabra por separado con un spring, en vez de fade+slide del bloque entero. */
export default function SplitText({ text, className, delay = 0, as = 'h1' }: SplitTextProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(' ');
  const MotionTag = as === 'h2' ? motion.h2 : motion.h1;

  if (reduceMotion) {
    const StaticTag = as;
    return <StaticTag className={className}>{text}</StaticTag>;
  }

  return (
    <MotionTag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top mr-[0.28em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', rotate: 4 }}
            animate={{ y: '0%', rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 220,
              damping: 24,
              delay: delay + i * 0.07,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
