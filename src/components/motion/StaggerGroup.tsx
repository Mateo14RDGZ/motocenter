'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { staggerContainer, staggerItem, staggerItemTransition } from './Reveal';

export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-80px' }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerItem} transition={staggerItemTransition}>
      {children}
    </motion.div>
  );
}
