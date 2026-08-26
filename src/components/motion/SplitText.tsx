'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2';
}

const wordVariants: Variants = {
  hidden: { y: '110%', rotate: 4 },
  visible: { y: '0%', rotate: 0 },
};

const wordTransition = { type: 'spring', stiffness: 220, damping: 24 } as const;

/**
 * Anima cada palabra por separado con un spring. Un solo IntersectionObserver en el
 * contenedor orquesta el stagger de las palabras (en vez de uno por palabra, que es
 * frágil ante layout shifts por carga de fuentes y puede dejar alguna palabra oculta).
 */
export default function SplitText({ text, className, delay = 0, as = 'h1' }: SplitTextProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(' ');
  const MotionTag = as === 'h2' ? motion.h2 : motion.h1;

  if (reduceMotion) {
    const StaticTag = as;
    return <StaticTag className={className}>{text}</StaticTag>;
  }

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: delay },
    },
  };

  return (
    <MotionTag
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top mr-[0.28em] last:mr-0">
          <motion.span className="inline-block" variants={wordVariants} transition={wordTransition}>
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
