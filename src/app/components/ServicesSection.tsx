import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/motion/Reveal';
import { buildWhatsAppLink } from '@/config/business';

const WA_LINK = buildWhatsAppLink('Hola Motocenter, quería consultar por un servicio...');

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
          <Reveal>
            <span className="eyebrow text-primary mb-3 block">01 — Qué hacemos</span>
            <h2 className="section-title text-foreground max-w-xl">
              Servicio completo para tu moto
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-sm md:text-right">
              De la reparación al repuesto puntual, todo en un mismo lugar.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Card 1 — Reparación (tall, row-span-2) */}
          <Reveal delay={0.05} className="md:row-span-2">
            <div className="relative rounded-3xl overflow-hidden img-zoom service-card-tall bg-ink card-hover h-full">
              <AppImage
                src="https://images.unsplash.com/photo-1766170507513-ef249e0ca426"
                alt="Mecánico trabajando en un taller de motos pequeño y desordenado"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                    <Icon
                      name="WrenchScrewdriverIcon"
                      size={24}
                      variant="solid"
                      className="text-ink"
                    />
                  </div>
                  <span className="spec-number text-3xl text-paper/25">01</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-600 text-paper tracking-tight mb-3">
                    Reparación de motos
                  </h3>
                  <p className="text-paper/65 text-sm leading-relaxed mb-5">
                    Diagnóstico y reparación para diferentes tipos de motocicletas. Del problema a
                    la solución, sin vueltas.
                  </p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-700 text-primary hover:text-paper transition-colors group"
                  >
                    Consultanos
                    <Icon
                      name="ArrowRightIcon"
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2 — Mantenimiento */}
          <Reveal delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden img-zoom bg-muted card-hover min-h-[220px] md:min-h-0 h-full">
              <AppImage
                src="https://images.unsplash.com/photo-1746014995710-cfb7596d8967"
                alt="Persona poniendo aceite a una motocicleta durante un service"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="Cog6ToothIcon" size={20} variant="solid" className="text-paper" />
                  </div>
                  <span className="spec-number text-2xl text-paper/25">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-600 text-paper tracking-tight mb-1">
                    Servicio y mantenimiento
                  </h3>
                  <p className="text-paper/65 text-sm leading-relaxed">
                    Mantenimiento general para mantener la moto en condiciones.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 3 — Repuestos */}
          <Reveal delay={0.15}>
            <div className="relative rounded-3xl overflow-hidden img-zoom bg-muted card-hover min-h-[220px] md:min-h-0 h-full">
              <AppImage
                src="https://images.unsplash.com/photo-1765447650904-aeb3a8e17f2b"
                alt="Repuestos y piezas de moto en un taller desordenado, ambiente realista"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-primary/85 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="CubeIcon" size={20} variant="solid" className="text-ink" />
                  </div>
                  <span className="spec-number text-2xl text-paper/25">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-600 text-paper tracking-tight mb-1">
                    Repuestos
                  </h3>
                  <p className="text-paper/65 text-sm leading-relaxed">
                    Amplia variedad de repuestos para diferentes motos y necesidades.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 4 — Accesorios (full width) */}
          <Reveal delay={0.2} className="md:col-span-2">
            <div className="relative rounded-3xl overflow-hidden img-zoom bg-muted card-hover min-h-[200px]">
              <AppImage
                src="https://images.unsplash.com/photo-1623038868323-7d39ec58eefe"
                alt="Casco de moto simple apoyado sobre el asfalto"
                fill
                sizes="100vw"
                className="object-cover opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-transparent" />
              <div className="absolute inset-0 flex items-center p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 w-full">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Icon name="ShoppingBagIcon" size={24} variant="solid" className="text-paper" />
                  </div>
                  <div className="flex-1">
                    <span className="spec-number text-2xl text-paper/25 block mb-1">04</span>
                    <h3 className="text-2xl font-display font-600 text-paper tracking-tight mb-1">
                      Accesorios
                    </h3>
                    <p className="text-paper/70 text-sm leading-relaxed max-w-md">
                      Accesorios y productos para el uso diario de la moto. Consultanos por
                      disponibilidad.
                    </p>
                  </div>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-shrink-0 self-start md:self-center"
                  >
                    <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={18} variant="solid" />
                    Consultanos
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
