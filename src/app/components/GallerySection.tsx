import AppImage from '@/components/ui/AppImage';

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
  return (
    <section id="galeria" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 md:mb-14 reveal-on-scroll stagger-1">
          <span className="text-xs font-800 tracking-widest text-primary uppercase mb-3 block">
            Galería
          </span>
          <h2 className="section-title text-foreground max-w-xl">
            Conocé el taller, las motos y los repuestos
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`group relative rounded-2xl overflow-hidden img-zoom card-hover reveal-on-scroll stagger-${(i % 4) + 1}`}
              style={{ minHeight: '180px' }}
            >
              <AppImage
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
              <span className="absolute bottom-3 left-3 text-xs font-700 text-white uppercase tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
