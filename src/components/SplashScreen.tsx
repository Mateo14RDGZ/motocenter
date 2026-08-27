'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

const VISIBLE_MS = 1500;

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(
      () => setVisible(false),
      reduceMotion ? 400 : VISIBLE_MS
    );
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = '';
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={
              reduceMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: [0.85, 1.04, 1] }
            }
            exit={{ opacity: 0, scale: 1.06 }}
            transition={{
              duration: reduceMotion ? 0.3 : 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <AppImage
              src="/assets/images/motocenter-logo.png"
              alt="Motocenter"
              width={340}
              height={210}
              className="w-[220px] sm:w-[260px] h-auto"
              priority
              quality={100}
              showLoadingBg={false}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
