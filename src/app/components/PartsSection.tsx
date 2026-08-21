import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Reveal from '@/components/motion/Reveal';
import { StaggerGroup, StaggerItem } from '@/components/motion/StaggerGroup';
import { buildWhatsAppLink } from '@/config/business';

const WA_LINK = buildWhatsAppLink(
  'Hola Motocenter, quería consultar disponibilidad de repuestos/accesorios...'
);

interface Category {
  code: string;
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
    code: 'TX',
    icon: 'CogIcon',
    label: 'Transmisión',
    description: 'Cadenas, piñones, coronas y más',
    image: 'https://images.unsplash.com/photo-1525207106105-b340f7384b30',
    alt: 'Cadena y piñón de motocicleta en primer plano',
  },
  {
    code: 'FR',
    icon: 'StopCircleIcon',
    label: 'Frenos',
    description: 'Pastillas, discos y cables',
    image: 'https://images.unsplash.com/photo-1770400770192-05b8b1cdb8fb',
    alt: 'Disco de freno y pinza de motocicleta en primer plano',
  },
  {
    code: 'LZ',
    icon: 'LightBulbIcon',
    label: 'Luces',
    description: 'Faros, intermitentes y leds',
    image: 'https://images.unsplash.com/photo-1774133431278-32ee67540eed',
    alt: 'Faro delantero de motocicleta en primer plano',
  },
  {
    code: 'FL',
    icon: 'FunnelIcon',
    label: 'Filtros',
    description: 'Aire, aceite y combustible',
    image: 'https://images.unsplash.com/photo-1729232846706-3bd13709c5c7',
    alt: 'Filtro de aire de motocicleta en primer plano',
  },
  {
    code: 'AC',
    icon: 'BeakerIcon',
    label: 'Aceites',
    description: 'Lubricantes para motor y transmisión',
    image: 'https://images.unsplash.com/photo-1766933181278-16bf0bb27e13',
    alt: 'Envases de aceite para motor apoyados en el piso',
  },
  {
    code: 'EQ',
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
      <div className="absolute inset-0 mechanic-line opacity-30 pointer-events-none" />
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <Reveal>
            <span className="eyebrow text-primary mb-3 block">02 — Catálogo</span>
            <h2 className="section-title text-secondary-foreground max-w-lg">
              ¿Precisás algo para tu moto?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-sm md:text-right">
              Trabajamos con distintos tipos de repuestos y accesorios. Consultanos disponibilidad
              por WhatsApp.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10">
          {categories.map((cat) => (
            <StaggerItem key={cat.label}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden img-zoom card-hover cursor-pointer block"
                style={{ minHeight: '170px' }}
                aria-label={`Consultar por ${cat.label}`}
              >
                <AppImage
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
                <div className="absolute top-3 right-4">
                  <span className="spec-number text-xs text-paper/30">{cat.code}</span>
                </div>
                <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5">
                  <div className="w-9 h-9 rounded-xl bg-primary/85 flex items-center justify-center">
                    <Icon name={cat.icon} size={18} variant="solid" className="text-ink" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-display font-600 text-paper tracking-tight leading-tight mb-0.5">
                      {cat.label}
                    </h3>
                    <p className="text-paper/55 text-xs leading-snug hidden sm:block">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6">
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
        </Reveal>
      </div>
    </section>
  );
}
