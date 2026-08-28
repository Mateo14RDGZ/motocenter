'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

// La moto está dibujada inclinada dentro del PNG. Esta rotación corrige esa
// inclinación para que entre "nivelada"; al chocar, se quita (rotate: 0)
// para volver a la pose original del arte.
const LEVEL_ROTATION = 14;

// Suficientemente lejos como para arrancar más allá del borde izquierdo de
// la pantalla en cualquier dispositivo (el contenedor va centrado).
const START_X = -2200;

const T_ENTER = 650; // la moto viaja sola desde la izquierda
const T_IMPACT = 320; // choque: la moto se endereza + aparece el texto + sacudida
const T_HOLD = 550; // se mantiene el logo armado

type Phase = 'enter' | 'impact' | 'hold';

// Punto por defecto (centro) hasta que se mida la posición real del logo
const DEFAULT_TARGET = { x: 50, y: 50 };

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<Phase>('enter');
  const [target, setTarget] = useState(DEFAULT_TARGET);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Apunta el cierre del splash a la posición real del logo en el header
    const el = document.getElementById('header-logo-anchor');
    if (el) {
      const rect = el.getBoundingClientRect();
      setTarget({
        x: ((rect.left + rect.width / 2) / window.innerWidth) * 100,
        y: ((rect.top + rect.height / 2) / window.innerHeight) * 100,
      });
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    if (reduceMotion) {
      const t = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(t);
    }

    const timers = [
      setTimeout(() => {
        setPhase('impact');
      }, T_ENTER),
      setTimeout(() => {
        setPhase('hold');
      }, T_ENTER + T_IMPACT),
      setTimeout(() => {
        setVisible(false);
      }, T_ENTER + T_IMPACT + T_HOLD),
    ];
    return () => {
      timers.forEach(clearTimeout);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = '';
    }
  }, [visible]);

  // La moto llegó y "chocó": a partir de acá se endereza y aparece el texto
  const hasArrived = phase !== 'enter';
  const impacting = phase === 'impact';

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink overflow-hidden"
          initial={false}
          animate={
            reduceMotion
              ? undefined
              : {
                  clipPath: `circle(150% at ${target.x}% ${target.y}%)`,
                  transition: { duration: 0 },
                }
          }
          exit={
            reduceMotion
              ? { opacity: 0, transition: { duration: 0.3 } }
              : {
                  clipPath: `circle(0% at ${target.x}% ${target.y}%)`,
                  transition: { duration: 1.1, ease: [0.65, 0, 0.35, 1] },
                }
          }
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

          <motion.div
            className="relative flex flex-col items-center"
            animate={
              reduceMotion || !impacting
                ? { scale: 1, x: 0 }
                : { scale: [1, 1.1, 0.96, 1], x: [0, -8, 5, 0] }
            }
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="relative w-[230px] sm:w-[290px] aspect-[1536/1019] flex items-center justify-center">
              {/* Pieza 1: la moto, viaja sola y choca. Al llegar se desvanece
                  para dar paso al logo original completo (abajo). */}
              <motion.div
                className="absolute inset-0 z-10"
                initial={
                  reduceMotion
                    ? undefined
                    : { x: START_X, opacity: 0, rotate: LEVEL_ROTATION }
                }
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        x: 0,
                        opacity: hasArrived ? 0 : 1,
                        rotate: hasArrived ? 0 : LEVEL_ROTATION,
                      }
                }
                transition={{
                  x: { duration: T_ENTER / 1000, ease: [0.16, 1, 0.3, 1] },
                  opacity: hasArrived
                    ? { duration: 0.15, ease: 'easeOut' }
                    : { duration: T_ENTER / 1000, ease: [0.16, 1, 0.3, 1] },
                  rotate: hasArrived
                    ? { duration: 0.18, ease: 'easeOut' }
                    : { duration: T_ENTER / 1000, ease: [0.16, 1, 0.3, 1] },
                }}
              >
                <AppImage
                  src="/assets/images/splash/moto-piece.png"
                  alt=""
                  width={1536}
                  height={1019}
                  className="w-full h-full"
                  priority
                  quality={100}
                  showLoadingBg={false}
                />
              </motion.div>

              {/* Logo original completo (moto + CENTER), tal cual el arte
                  final: aparece justo en el choque, con zoom + sacudida. Al
                  ser el archivo original, el resultado queda idéntico. */}
              <motion.div
                className="absolute inset-0 z-20 flex items-center justify-center"
                initial={reduceMotion ? undefined : { scale: 0.82, opacity: 0 }}
                animate={
                  reduceMotion
                    ? undefined
                    : hasArrived
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.82, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <AppImage
                  src="/assets/images/motocenter-logo.png"
                  alt=""
                  width={1606}
                  height={979}
                  className="w-full h-auto"
                  priority
                  quality={100}
                  showLoadingBg={false}
                />
              </motion.div>
            </div>
            <span className="sr-only">Motocenter</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
