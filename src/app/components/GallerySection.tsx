'use client';

import { useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import RevealMask from '@/components/motion/RevealMask';

// TODO: reemplazar todas las imágenes de esta sección por fotos reales
// del local, el taller, las motos y los repuestos de Motocenter.
const galleryItems = [
  {
    label: 'Taller',
    image: 'https://images.unsplash.com/photo-1766170507513-ef249e0ca426',
    alt: 'Mecánico trabajando en un taller de motos pequeño y desordenado',
  },
  {
    label: 'Repuestos',
    image: 'https://images.unsplash.com/photo-1765447650904-aeb3a8e17f2b',
    alt: 'Repuestos y piezas de moto en un taller desordenado',
  },
  {
    label: 'Accesorios',
    image: 'https://images.unsplash.com/photo-1623038868323-7d39ec58eefe',
    alt: 'Casco de moto simple apoyado sobre el asfalto',
  },
  {
    label: 'Mantenimiento',
    image: 'https://images.unsplash.com/photo-1746014995710-cfb7596d8967',
    alt: 'Persona poniendo aceite a una motocicleta durante un service',
  },
  {
    label: 'Local',
    image: 'https://images.unsplash.com/photo-1723042292166-c2f16ddae337',
    alt: 'Interior de un taller de motos con motos estacionadas',
  },
  {
    label: 'Motos',
    image: 'https://images.unsplash.com/photo-1522850003946-16cb11d41a86',
    alt: 'Detalle de una motocicleta',
  },
];

export default function GallerySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / galleryItems.length;
    setActive(Math.round(el.scrollLeft / cardWidth));
  };

  const scrollTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / galleryItems.length;
    el.scrollTo({ left: cardWidth * i, behavior: 'smooth' });
  };

  return (
    <section id="galeria" className="py-20 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-8 md:mb-10">
          <RevealMask>
            <span className="eyebrow text-primary mb-3 block">04 — Galería</span>
            <h2 className="section-title text-foreground max-w-xl">
              Conocé el taller, las motos y los repuestos
            </h2>
          </RevealMask>
          <span className="spec-number text-sm text-muted-foreground hidden sm:block flex-shrink-0 pb-1">
            {String(active + 1).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Filmstrip: scroll horizontal con snap, se arrastra con el dedo/mouse */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pl-4 pr-4 sm:pl-6 sm:pr-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {galleryItems.map((item) => (
          <div
            key={item.label}
            className="relative flex-shrink-0 snap-center rounded-2xl overflow-hidden w-[78vw] sm:w-[45vw] md:w-[32vw] lg:w-[28vw] aspect-[4/5]"
          >
            <AppImage
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 78vw, 30vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
            <span className="absolute bottom-4 left-4 text-sm font-700 text-white uppercase tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Progreso + puntos de navegación */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6">
        <div className="flex items-center gap-2">
          {galleryItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => scrollTo(i)}
              aria-label={`Ver ${item.label}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                active === i ? 'w-8 bg-primary' : 'w-3 bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
