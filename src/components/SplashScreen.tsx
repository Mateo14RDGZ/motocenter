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
    const timer = setTimeout(() => setVisible(false), reduceMotion ? 400 : VISIBLE_MS);
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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink overflow-hidden"
          initial={false}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { clipPath: 'circle(0% at 50% 50%)' }
          }
          transition={{ duration: reduceMotion ? 0.3 : 0.65, ease: [0.76, 0, 0.24, 1] }}
          style={reduceMotion ? undefined : { clipPath: 'circle(150% at 50% 50%)' }}
          aria-hidden="true"
        >
          {/* Resplandor pulsante detrás del logo */}
          {!reduceMotion && (
            <motion.div
              className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full bg-primary/25 blur-3xl"
              animate={{ scale: [0.8, 1.15, 0.8], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}

          {/* Líneas de velocidad cruzando la pantalla */}
          {!reduceMotion &&
            [0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent"
                style={{ width: 140 + i * 50, top: `${36 + i * 12}%` }}
                initial={{ x: '-130%', opacity: 0 }}
                animate={{ x: '130%', opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  delay: i * 0.22,
                  ease: 'easeInOut',
                }}
              />
            ))}

          <div className="relative flex flex-col items-center gap-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.55, rotate: -14 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={
                reduceMotion
                  ? { duration: 0.3 }
                  : { type: 'spring', stiffness: 170, damping: 13, delay: 0.05 }
              }
            >
              <AppImage
                src="/assets/images/motocenter-logo.png"
                alt="Motocenter"
                width={340}
                height={210}
                className="w-[200px] sm:w-[240px] h-auto drop-shadow-[0_0_28px_rgba(220,38,38,0.35)]"
                priority
                quality={100}
                showLoadingBg={false}
              />
            </motion.div>

            {/* Puntos de carga */}
            {!reduceMotion && (
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ opacity: [0.25, 1, 0.25], y: [0, -6, 0] }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
