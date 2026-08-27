import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/motion/Reveal';
import RevealMask from '@/components/motion/RevealMask';
import ScaleIn from '@/components/motion/ScaleIn';
import Magnetic from '@/components/motion/Magnetic';
import GoogleRatingBadge from '@/components/GoogleRatingBadge';
import { WA_LINK, MAPS_LINK, MAPS_EMBED, ADDRESS, DISPLAY_PHONE } from '@/config/business';

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <RevealMask className="mb-10 md:mb-14">
          <span className="eyebrow text-primary mb-3 block">09 — Encontranos</span>
          <h2 className="section-title text-foreground">Dónde estamos</h2>
        </RevealMask>

        {/* Mapa grande con ficha flotante encima, tipo "tarjeta de ubicación" */}
        <ScaleIn>
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl h-[380px] md:h-[460px]">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Ubicación Motocenter — ${ADDRESS.full}`}
              aria-label="Mapa de ubicación de Motocenter en Trinidad, Uruguay"
              className="grayscale-[15%]"
            />

            {/* Ficha flotante: dirección, teléfono y acciones */}
            <div className="absolute left-4 right-4 bottom-4 md:left-6 md:bottom-6 md:right-auto md:w-[340px]">
              <Reveal delay={0.1} y={12}>
                <div className="relative bg-card/95 backdrop-blur-md border border-border rounded-2xl p-5 shadow-2xl">
                  <span className="font-scrawl text-primary text-xl absolute -top-6 left-4 -rotate-3 select-none hidden md:block">
                    Acá estamos ↓
                  </span>

                  <div className="flex items-start gap-3 mb-3">
                    <Icon
                      name="MapPinIcon"
                      size={20}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="font-800 text-foreground text-base leading-tight">
                        {ADDRESS.street}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {ADDRESS.locality}, Departamento de {ADDRESS.region}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                    <Icon name="PhoneIcon" size={20} className="text-primary flex-shrink-0" />
                    <div>
                      <p className="font-800 text-foreground text-sm leading-tight">
                        {DISPLAY_PHONE}
                      </p>
                      <p className="text-muted-foreground text-xs">WhatsApp y llamadas</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <a
                      href={MAPS_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-dark flex-1 justify-center !py-2.5 !px-3 text-sm !min-h-0"
                    >
                      <Icon name="MapPinIcon" size={16} />
                      Cómo llegar
                    </a>
                    <Magnetic className="flex-1">
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full justify-center !py-2.5 !px-3 text-sm !min-h-0"
                      >
                        <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={16} variant="solid" />
                        WhatsApp
                      </a>
                    </Magnetic>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </ScaleIn>

        <Reveal delay={0.15} className="flex justify-center mt-6">
          <GoogleRatingBadge className="text-foreground bg-card border border-border rounded-full px-3.5 py-2 shadow-sm" />
        </Reveal>
      </div>
    </section>
  );
}
