'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

// La moto está dibujada inclinada dentro del PNG. Esta rotación corrige esa
// inclinación para que entre "nivelada" (horizontal); al llegar, se quita
// (rotate: 0) para que el frente se "levante" y vuelva a la pose original
// del arte, la misma con la que está dibujada en el logo final.
const LEVEL_ROTATION = 14;

// Suficientemente lejos como para arrancar más allá del borde izquierdo de
// la pantalla en cualquier dispositivo (el contenedor va centrado).
const START_X = -2200;

const T_ENTER = 1300; // la moto entra sola, lenta y horizontal, desde la izquierda
const T_LIFT = 420; // ya en posición, levanta el frente (vuelve a su pose original)
const T_REVEAL = 320; // de repente aparece el logo original completo, con golpe
const T_HOLD = 700; // se mantiene el logo armado

type Phase = 'enter' | 'lift' | 'reveal' | 'hold';

// Punto por defecto (centro) hasta que se mida la posición real del logo
const DEFAULT_TARGET = { x: 50, y: 50 };

// Tiempo máximo que se espera a que las imágenes terminen de decodificar
// antes de arrancar la secuencia igual (evita que quede colgada si algo
// falla al cargar).
const MAX_IMAGE_WAIT = 900;

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<Phase>('enter');
  const [target, setTarget] = useState(DEFAULT_TARGET);
  const [motoLoaded, setMotoLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
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

  // Antes de arrancar el timeline, esperamos a que las dos imágenes clave ya
  // estén decodificadas (o a un máximo de espera). Sin esto, en una carga
  // fría (caché vacía, red lenta) la secuencia arranca igual por reloj y la
  // moto o el logo final pueden aparecer recortados/en blanco a mitad de la
  // animación en vez de recién cuando ya están listos para pintarse.
  const imagesReady = reduceMotion || (motoLoaded && logoLoaded);

  useEffect(() => {
    if (imagesReady) return;
    const t = setTimeout(() => {
      setMotoLoaded(true);
      setLogoLoaded(true);
    }, MAX_IMAGE_WAIT);
    return () => clearTimeout(t);
  }, [imagesReady]);

  useEffect(() => {
    if (!imagesReady) return;
    document.body.style.overflow = 'hidden';

    if (reduceMotion) {
      const t = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(t);
    }

    const timers = [
      setTimeout(() => {
        setPhase('lift');
      }, T_ENTER),
      setTimeout(() => {
        setPhase('reveal');
      }, T_ENTER + T_LIFT),
      setTimeout(() => {
        setPhase('hold');
      }, T_ENTER + T_LIFT + T_REVEAL),
      setTimeout(() => {
        setVisible(false);
      }, T_ENTER + T_LIFT + T_REVEAL + T_HOLD),
    ];
    return () => {
      timers.forEach(clearTimeout);
    };
  }, [reduceMotion, imagesReady]);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = '';
    }
  }, [visible]);

  // La moto ya llegó (terminó de entrar): a partir de acá levanta el frente
  const hasArrived = phase !== 'enter';
  // El logo original ya está (o está por estar) visible
  const revealed = phase === 'reveal' || phase === 'hold';

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
              reduceMotion || phase !== 'reveal'
                ? { scale: 1, x: 0, rotate: 0 }
                : {
                    scale: [1, 1.16, 0.92, 1.05, 0.99, 1],
                    x: [0, -10, 7, -4, 2, 0],
                    rotate: [0, -1.5, 1.2, -0.5, 0],
                  }
            }
            transition={{ duration: 0.46, ease: 'easeOut' }}
          >
            {/* Destello de impacto: un anillo que estalla justo en el choque
                para que se note el golpe, sin tapar el logo. */}
            {!reduceMotion && phase === 'reveal' && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
                aria-hidden="true"
              >
                <motion.span
                  className="rounded-full border-2 border-primary/80"
                  style={{ width: '40%', height: '40%' }}
                  initial={{ scale: 0.5, opacity: 0.9 }}
                  animate={{ scale: 2.6, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </motion.div>
            )}

            <div className="relative w-[230px] sm:w-[290px] aspect-[1536/1019] flex items-center justify-center">
              {/* Pieza 1: la moto entra sola, lenta y horizontal. Al llegar
                  levanta el frente y recién ahí se desvanece para dar paso
                  al logo original completo (abajo), sin pisarse entre sí. */}
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
                    : !imagesReady
                      ? { x: START_X, opacity: 0, rotate: LEVEL_ROTATION }
                      : {
                          x: 0,
                          opacity: revealed ? 0 : 1,
                          rotate: hasArrived ? 0 : LEVEL_ROTATION,
                        }
                }
                transition={{
                  x: { duration: T_ENTER / 1000, ease: [0.22, 1, 0.36, 1] },
                  opacity: revealed
                    ? { duration: 0.16, ease: 'easeOut' }
                    : { duration: T_ENTER / 1000, ease: [0.22, 1, 0.36, 1] },
                  rotate: hasArrived
                    ? { duration: T_LIFT / 1000, ease: [0.33, 1, 0.68, 1] }
                    : { duration: T_ENTER / 1000, ease: [0.22, 1, 0.36, 1] },
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
                  onLoad={() => setMotoLoaded(true)}
                />
              </motion.div>

              {/* Logo original completo (moto + CENTER), tal cual el arte
                  final: aparece de repente, recién cuando la moto ya
                  levantó el frente. Se escala y desplaza (126.76% / -13.5%)
                  para que la moto, dentro del logo, quede exactamente al
                  mismo tamaño y posición con los que entró: el archivo
                  completo es más ancho porque incluye el texto, así que si
                  se mostrara "a caja completa" la moto se vería más chica
                  que antes del choque. Con este ajuste no cambia de tamaño
                  en ningún momento, en PC ni en mobile (son porcentajes
                  relativos al mismo contenedor). */}
              <motion.div
                className="absolute z-20"
                style={{ left: '-13.5%', top: '0%', width: '126.76%' }}
                initial={reduceMotion ? undefined : { scale: 0.82, opacity: 0 }}
                animate={
                  reduceMotion
                    ? undefined
                    : imagesReady && revealed
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.82, opacity: 0 }
                }
                transition={{ duration: T_REVEAL / 1000, ease: [0.34, 1.56, 0.64, 1] }}
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
                  onLoad={() => setLogoLoaded(true)}
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
