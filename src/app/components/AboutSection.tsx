import Icon from '@/components/ui/AppIcon';
import { WA_LINK, ADDRESS } from '@/config/business';

const highlights = [
  { icon: 'WrenchScrewdriverIcon' as const, text: 'Taller y reparación' },
  { icon: 'CubeIcon' as const, text: 'Repuestos variados' },
  { icon: 'ShoppingBagIcon' as const, text: 'Accesorios disponibles' },
  { icon: 'TruckIcon' as const, text: 'Delivery incluido' },
  { icon: 'ChatBubbleOvalLeftEllipsisIcon' as const, text: 'Atención por WhatsApp' },
  { icon: 'MapPinIcon' as const, text: 'En el centro de Trinidad' },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Text Side */}
          <div className="lg:w-1/2 reveal-on-scroll stagger-1">
            <span className="text-xs font-800 tracking-widest text-primary uppercase mb-3 block">
              Sobre Motocenter
            </span>
            <h2 className="section-title text-foreground mb-6 max-w-md">
              Servicio, repuestos y soluciones para tu moto en Trinidad
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-5">
              Motocenter reúne taller, mantenimiento, repuestos y accesorios en un mismo lugar. La
              idea es simple: que no tengas que ir a tres comercios distintos para resolver un
              problema con tu moto.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Estamos en {ADDRESS.full}. Si precisás un repuesto, querés hacer un servicio o tenés
              algún problema con tu moto, escribinos y te damos una mano.
            </p>

            <div className="mt-2">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-dark">
                <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={18} variant="solid" />
                Escribinos
              </a>
            </div>
          </div>

          {/* Value Side */}
          <div className="lg:w-1/2 w-full reveal-on-scroll stagger-2">
            <div className="grid grid-cols-2 gap-3 mb-6">
              {highlights.map((h) => (
                <div
                  key={h.text}
                  className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3.5 border border-border"
                >
                  <Icon name={h.icon} size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm font-600 text-foreground">{h.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-2xl p-5 md:p-6">
              <h3 className="text-base font-800 text-foreground mb-2">
                ¿No sabés qué repuesto es?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No hace falta que sepas el nombre exacto de la pieza. Contanos qué le pasa a tu moto
                —marca, modelo y el problema— y te orientamos por WhatsApp antes de que te acerques
                al local.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
