'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimate, useReducedMotion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

// La moto está dibujada inclinada dentro del PNG. Esta rotación corrige esa
// inclinación para que entre "horizontal"; al llegar, se quita (rotate: 0)
// para volver a la pose original del arte.
const LEVEL_ROTATION = 14;

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let cancelled = false;

    async function sequence() {
      try {
        if (reduceMotion) {
          await new Promise((r) => setTimeout(r, 400));
        } else {
          await Promise.all([
            animate(
              '.splash-moto',
              { x: ['-90%', '0%'], rotate: LEVEL_ROTATION, opacity: [0, 1] },
              { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
            ),
            animate(
              '.splash-center',
              { scale: [0.3, 1], opacity: [0, 1] },
              { duration: 0.45, delay: 0.22, ease: [0.34, 1.56, 0.64, 1] }
            ),
          ]);

          await animate(
            '.splash-moto',
            { rotate: 0 },
            { duration: 0.26, ease: [0.16, 1, 0.3, 1] }
          );

          animate('.splash-flash', { opacity: [0, 0.5, 0] }, { duration: 0.35, ease: 'easeOut' });
          await animate(
            '.splash-lockup',
            { scale: [1, 1.08, 0.97, 1], x: [0, -7, 4, 0] },
            { duration: 0.4, ease: 'easeOut' }
          );

          await new Promise((r) => setTimeout(r, 500));
        }
      } catch {
        // si algo falla en la animación, igual mostramos el sitio
      }
      if (!cancelled) setVisible(false);
    }

    sequence();
    return () => {
      cancelled = true;
    };
  }, [reduceMotion, animate]);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = '';
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={scope}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink overflow-hidden"
          initial={false}
          exit={reduceMotion ? { opacity: 0 } : { clipPath: 'circle(0% at 50% 50%)' }}
          transition={{ duration: reduceMotion ? 0.3 : 0.65, ease: [0.76, 0, 0.24, 1] }}
          style={reduceMotion ? undefined : { clipPath: 'circle(150% at 50% 50%)' }}
          aria-hidden="true"
        >
          {/* Resplandor de fondo */}
          {!reduceMotion && (
            <motion.div
              className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-primary/20 blur-3xl"
              animate={{ scale: [0.85, 1.1, 0.85], opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}

          {/* Flash del impacto */}
          <div className="splash-flash absolute inset-0 bg-primary pointer-events-none opacity-0" />

          <div className="splash-lockup relative flex flex-col items-center">
            <div className="relative w-[230px] sm:w-[290px]">
              {/* Pieza 1: la moto */}
              <div
                className="splash-moto relative z-10"
                style={
                  reduceMotion
                    ? undefined
                    : { opacity: 0, transform: `translateX(-90%) rotate(${LEVEL_ROTATION}deg)` }
                }
              >
                <AppImage
                  src="/assets/images/splash/moto-piece.png"
                  alt=""
                  width={1507}
                  height={966}
                  className="w-full h-auto drop-shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                  priority
                  quality={100}
                  showLoadingBg={false}
                />
              </div>

              {/* Pieza 2: el texto CENTER */}
              <div
                className="splash-center relative z-0 -mt-[8%] w-[92%] mx-auto"
                style={reduceMotion ? undefined : { opacity: 0, transform: 'scale(0.3)' }}
              >
                <AppImage
                  src="/assets/images/splash/center-piece.png"
                  alt=""
                  width={1501}
                  height={494}
                  className="w-full h-auto"
                  priority
                  quality={100}
                  showLoadingBg={false}
                />
              </div>
            </div>
            <span className="sr-only">Motocenter</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
