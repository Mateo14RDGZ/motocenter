import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/motion/Reveal';
import RevealMask from '@/components/motion/RevealMask';
import Magnetic from '@/components/motion/Magnetic';
import { WA_LINK, MAPS_LINK, MAPS_EMBED, ADDRESS, DISPLAY_PHONE } from '@/config/business';

export default function LocationSection() {
  return (
    <section id="ubicacion" className="relative bg-ink overflow-hidden">
      {/* Mapa a pantalla completa como fondo de toda la sección */}
      <div className="absolute inset-0 opacity-70">
        <iframe
          src={MAPS_EMBED}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Ubicación Motocenter — ${ADDRESS.full}`}
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 min-h-[560px] flex items-end">
        <div className="w-full max-w-md">
          <RevealMask>
            <span className="eyebrow text-primary mb-3 block">07 — Encontranos</span>
            <h2 className="section-title text-paper mb-6">Dónde estamos</h2>
          </RevealMask>

          <Reveal delay={0.1}>
            <div className="bg-paper/95 backdrop-blur-md rounded-3xl p-6 md:p-7 shadow-2xl">
              <div className="flex items-start gap-4 mb-4 pb-4 border-b border-border">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPinIcon" size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-800 text-ink text-base mb-0.5">{ADDRESS.street}</p>
                  <p className="text-muted-foreground text-sm">
                    {ADDRESS.locality}, Departamento de {ADDRESS.region}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="PhoneIcon" size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-800 text-ink text-base mb-0.5">{DISPLAY_PHONE}</p>
                  <p className="text-muted-foreground text-sm">WhatsApp y llamadas</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark flex-1 justify-center"
                >
                  <Icon name="MapPinIcon" size={18} />
                  Cómo llegar
                </a>
                <Magnetic className="flex-1">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={18} variant="solid" />
                    WhatsApp
                  </a>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
