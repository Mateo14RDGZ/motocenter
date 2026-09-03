'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'repuestos', label: 'Repuestos' },
  { id: 'accesorios', label: 'Accesorios' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'como-trabajamos', label: 'Cómo trabajamos' },
  { id: 'galeria', label: 'Galería' },
  { id: 'horarios', label: 'Horarios' },
  { id: 'ubicacion', label: 'Ubicación' },
];

/** Puntos de navegación lateral (scrollspy), solo desktop. */
export default function SectionDots() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setActive(closestIndex);
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      aria-label="Navegación por secciones"
      className={`hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {sections.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          aria-label={s.label}
          aria-current={active === i ? 'true' : undefined}
          className="group relative flex items-center justify-center w-4 h-4"
        >
          <span
            className={`rounded-full transition-all duration-300 ${
              active === i
                ? 'w-2.5 h-2.5 bg-primary'
                : 'w-1.5 h-1.5 bg-muted-foreground/40 group-hover:bg-muted-foreground/70'
            }`}
          />
          <span className="absolute right-6 whitespace-nowrap text-xs font-600 bg-ink text-paper px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {s.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
