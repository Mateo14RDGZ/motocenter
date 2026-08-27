import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/motion/Reveal';
import RevealMask from '@/components/motion/RevealMask';
import Magnetic from '@/components/motion/Magnetic';
import { StaggerGroup, StaggerItem } from '@/components/motion/StaggerGroup';
import { WA_LINK, ADDRESS } from '@/config/business';

const highlights = [
  { icon: 'WrenchScrewdriverIcon' as const, text: 'Diagnóstico y reparación' },
  { icon: 'Cog6ToothIcon' as const, text: 'Mantenimiento y service' },
  { icon: 'CubeIcon' as const, text: 'Repuestos para el arreglo' },
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
          <div className="lg:w-1/2">
            <RevealMask>
              <span className="eyebrow text-primary mb-3 block">05 — Sobre Motocenter</span>
              <h2 className="section-title text-foreground max-w-md mb-6">
                Diagnóstico, reparación y el repuesto que hace falta
              </h2>
            </RevealMask>
            <Reveal delay={0.1}>
              <p className="text-muted-foreground text-base leading-relaxed mb-5">
                Motocenter es el taller mecánico de motos de Trinidad. Diagnosticamos qué le pasa a
                tu moto, la reparamos y conseguimos el repuesto que haga falta para dejarla andando
                de nuevo.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Estamos en {ADDRESS.full}. Si tenés un problema con tu moto o querés hacer un
                service, escribinos y te damos una mano.
              </p>
              <Magnetic className="inline-block">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-dark">
                  <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={18} variant="solid" />
                  Escribinos
                </a>
              </Magnetic>
            </Reveal>
          </div>

          {/* Value Side */}
          <div className="lg:w-1/2 w-full">
            <StaggerGroup className="grid grid-cols-2 gap-3 mb-6">
              {highlights.map((h) => (
                <StaggerItem key={h.text}>
                  <div className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3.5 border border-border h-full">
                    <Icon name={h.icon} size={18} className="text-primary flex-shrink-0" />
                    <span className="text-sm font-600 text-foreground">{h.text}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <Reveal delay={0.2}>
              <div className="relative bg-ink border border-ink rounded-2xl p-5 md:p-6 overflow-hidden">
                <div className="absolute inset-0 mechanic-line opacity-20 pointer-events-none" />
                <h3 className="relative text-base font-display font-600 text-paper mb-2">
                  ¿No sabés qué repuesto es?
                </h3>
                <p className="relative text-paper/65 text-sm leading-relaxed">
                  No hace falta que sepas el nombre exacto de la pieza. Contanos qué le pasa a tu
                  moto —marca, modelo y el problema— y te orientamos por WhatsApp antes de que te
                  acerques al local.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
