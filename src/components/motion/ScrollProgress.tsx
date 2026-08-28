'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/** Línea fina de progreso de scroll, fija arriba de toda la página. Se
 * mantiene oculta hasta que el splash inicial terminó de desaparecer del
 * todo (evento 'splash-done'), para que no se llegue a ver de fondo
 * mientras el splash todavía está en pantalla o cerrándose. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    const onSplashDone = () => setSplashDone(true);
    window.addEventListener('splash-done', onSplashDone);
    return () => window.removeEventListener('splash-done', onSplashDone);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-[3px] bg-primary origin-left z-[60] transition-opacity duration-300 ${
        splashDone ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ scaleX }}
    />
  );
}
