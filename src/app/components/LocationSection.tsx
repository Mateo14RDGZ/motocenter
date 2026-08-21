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
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Info Side */}
          <div className="lg:w-2/5 w-full">
            <RevealMask>
              <span className="eyebrow text-primary mb-3 block">08 — Encontranos</span>
              <h2 className="section-title text-foreground mb-4">Dónde estamos</h2>
              <GoogleRatingBadge className="text-foreground mb-6" />
            </RevealMask>

            <Reveal delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-5 mb-4 flex items-start gap-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="MapPinIcon" size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-800 text-foreground text-base mb-0.5">{ADDRESS.street}</p>
                  <p className="text-muted-foreground text-sm">
                    {ADDRESS.locality}, Departamento de {ADDRESS.region}
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-5 mb-6 flex items-center gap-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="PhoneIcon" size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-800 text-foreground text-base mb-0.5">{DISPLAY_PHONE}</p>
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
            </Reveal>
          </div>

          {/* Mapa chico */}
          <ScaleIn delay={0.15} className="lg:w-3/5 w-full">
            <div
              className="rounded-2xl overflow-hidden border border-border shadow-sm"
              style={{ height: '260px' }}
            >
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Ubicación Motocenter — ${ADDRESS.full}`}
                aria-label="Mapa de ubicación de Motocenter en Trinidad, Uruguay"
              />
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              {ADDRESS.full} — Abrí en Google Maps para navegación
            </p>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}
