import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { buildWhatsAppLink } from '@/config/business';

const WA_LINK = buildWhatsAppLink(
  'Hola Motocenter, quería consultar disponibilidad de repuestos/accesorios...'
);

interface Category {
  icon:
    | 'CogIcon'
    | 'StopCircleIcon'
    | 'LightBulbIcon'
    | 'FunnelIcon'
    | 'BeakerIcon'
    | 'ShieldCheckIcon';
  label: string;
  description: string;
  image: string;
  alt: string;
}

const categories: Category[] = [
  {
    icon: 'CogIcon',
    label: 'Transmisión',
    description: 'Cadenas, piñones, coronas y más',
    image: 'https://images.unsplash.com/photo-1525207106105-b340f7384b30',
    alt: 'Cadena y piñón de motocicleta en primer plano',
  },
  {
    icon: 'StopCircleIcon',
    label: 'Frenos',
    description: 'Pastillas, discos y cables',
    image: 'https://images.unsplash.com/photo-1770400770192-05b8b1cdb8fb',
    alt: 'Disco de freno y pinza de motocicleta en primer plano',
  },
  {
    icon: 'LightBulbIcon',
    label: 'Luces',
    description: 'Faros, intermitentes y leds',
    image: 'https://images.unsplash.com/photo-1774133431278-32ee67540eed',
    alt: 'Faro delantero de motocicleta en primer plano',
  },
  {
    icon: 'FunnelIcon',
    label: 'Filtros',
    description: 'Aire, aceite y combustible',
    image: 'https://images.unsplash.com/photo-1729232846706-3bd13709c5c7',
    alt: 'Filtro de aire de motocicleta en primer plano',
  },
  {
    icon: 'BeakerIcon',
    label: 'Aceites',
    description: 'Lubricantes para motor y transmisión',
    image: 'https://images.unsplash.com/photo-1766933181278-16bf0bb27e13',
    alt: 'Envases de aceite para motor apoyados en el piso',
  },
  {
    icon: 'ShieldCheckIcon',
    label: 'Accesorios',
    description: 'Equipamiento y protección',
    image: 'https://images.unsplash.com/photo-1623038868323-7d39ec58eefe',
    alt: 'Casco de moto simple apoyado sobre el asfalto',
  },
];

export default function PartsSection() {
  return (
    <section
      id="repuestos"
      className="py-20 md:py-24 bg-secondary text-secondary-foreground overflow-hidden relative"
    >
      {/* Mechanic line accent */}
      <div className="absolute inset-0 mechanic-line opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14 reveal-on-scroll stagger-1">
          <div>
            <span className="text-xs font-800 tracking-widest text-primary uppercase mb-3 block">
              Repuestos y accesorios
            </span>
            <h2 className="section-title text-secondary-foreground max-w-lg">
              ¿Precisás algo para tu moto?
            </h2>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed max-w-sm md:text-right">
            Trabajamos con distintos tipos de repuestos y accesorios. Consultanos disponibilidad por
            WhatsApp.
          </p>
        </div>

        {/* BENTO GRID AUDIT:
            6 cards: [Transmisión, Frenos, Luces, Filtros, Aceites, Accesorios]
            Row 1: [col-1: Transmisión] [col-2: Frenos] [col-3: Luces]
            Row 2: [col-1: Filtros] [col-2: Aceites] [col-3: Accesorios]
            Placed 6/6 ✓
           */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10">
          {categories.map((cat, i) => (
            <a
              key={cat.label}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl overflow-hidden img-zoom card-hover cursor-pointer reveal-on-scroll stagger-${i + 1}`}
              style={{ minHeight: '160px' }}
              aria-label={`Consultar por ${cat.label}`}
            >
              <AppImage
                src={cat.image}
                alt={cat.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5">
                <div className="w-9 h-9 rounded-xl bg-primary/80 flex items-center justify-center">
                  <Icon name={cat.icon} size={18} variant="solid" className="text-white" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-800 text-white tracking-tight leading-tight mb-0.5">
                    {cat.label}
                  </h3>
                  <p className="text-white/60 text-xs leading-snug hidden sm:block">
                    {cat.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 reveal-on-scroll stagger-4">
          <div className="text-center sm:text-left">
            <p className="font-700 text-secondary-foreground text-base mb-1">
              ¿No encontrás lo que buscás?
            </p>
            <p className="text-muted-foreground text-sm">
              Escribinos y te conseguimos lo que precisás.
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-shrink-0"
          >
            <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={18} variant="solid" />
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
