import AppImage from '@/components/ui/AppImage';
import Reveal from '@/components/motion/Reveal';
import { StaggerGroup, StaggerItem } from '@/components/motion/StaggerGroup';

// TODO: reemplazar todas las imágenes de esta sección por fotos reales
// del local, el taller, las motos y los repuestos de Motocenter.
const galleryItems = [
  {
    label: 'Taller',
    image: 'https://images.unsplash.com/photo-1766170507513-ef249e0ca426',
    alt: 'Mecánico trabajando en un taller de motos pequeño y desordenado',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    label: 'Repuestos',
    image: 'https://images.unsplash.com/photo-1765447650904-aeb3a8e17f2b',
    alt: 'Repuestos y piezas de moto en un taller desordenado',
    span: '',
  },
  {
    label: 'Accesorios',
    image: 'https://images.unsplash.com/photo-1623038868323-7d39ec58eefe',
    alt: 'Casco de moto simple apoyado sobre el asfalto',
    span: '',
  },
  {
    label: 'Mantenimiento',
    image: 'https://images.unsplash.com/photo-1746014995710-cfb7596d8967',
    alt: 'Persona poniendo aceite a una motocicleta durante un service',
    span: '',
  },
  {
    label: 'Local',
    image: 'https://images.unsplash.com/photo-1723042292166-c2f16ddae337',
    alt: 'Interior de un taller de motos con motos estacionadas',
    span: 'md:col-span-2',
  },
  {
    label: 'Motos',
    image: 'https://images.unsplash.com/photo-1522850003946-16cb11d41a86',
    alt: 'Detalle de una motocicleta',
    span: '',
  },
];

export default function GallerySection() {
  return (
    <section id="galeria" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="mb-10 md:mb-14">
          <span className="eyebrow text-primary mb-3 block">04 — Galería</span>
          <h2 className="section-title text-foreground max-w-xl">
            Conocé el taller, las motos y los repuestos
          </h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 md:auto-rows-[180px] gap-3 md:gap-4">
          {galleryItems.map((item) => (
            <StaggerItem key={item.label} className={item.span}>
              <div
                className="group relative rounded-2xl overflow-hidden img-zoom card-hover h-full"
                style={{ minHeight: '160px' }}
              >
                <AppImage
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                <span className="absolute bottom-3 left-3 text-xs font-700 text-white uppercase tracking-wide">
                  {item.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
