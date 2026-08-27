import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/motion/Reveal';
import RevealMask from '@/components/motion/RevealMask';
import Magnetic from '@/components/motion/Magnetic';
import { WA_LINK, ADDRESS, DISPLAY_PHONE } from '@/config/business';

export default function CtaSection() {
  return (
    <section className="py-20 md:py-24 bg-ink text-secondary-foreground relative overflow-hidden">
      {/* Texto gigante de fondo en movimiento continuo */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <span
              key={copy}
              className="font-display font-800 uppercase text-[18vw] leading-none whitespace-nowrap px-6 text-transparent"
              style={{ WebkitTextStroke: '1.5px rgba(245,241,232,0.08)' }}
            >
              Motocenter Motocenter
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 mechanic-line opacity-20 pointer-events-none" />
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <Reveal>
          <span className="eyebrow text-primary mb-3 block">Atención directa</span>

          <RevealMask>
            <h2 className="section-title text-secondary-foreground mb-5 text-balance">
              ¿Tu moto necesita una mano?
            </h2>
          </RevealMask>
          <p className="text-secondary-foreground/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Escribinos y consultanos. Te respondemos rápido y sin vueltas.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Magnetic>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8"
              >
                <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={20} variant="solid" />
                Hablar por WhatsApp
              </a>
            </Magnetic>
            <a href="#ubicacion" className="btn-secondary text-base px-8">
              <Icon name="MapPinIcon" size={18} />
              Ver ubicación
            </a>
          </div>

          {/* Contact details strip */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-10 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-secondary-foreground/60 text-sm">
              <Icon name="MapPinIcon" size={16} className="text-primary" />
              {ADDRESS.full}
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/60 text-sm">
              <Icon name="PhoneIcon" size={16} className="text-primary" />
              {DISPLAY_PHONE}
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/60 text-sm">
              <Icon name="ClockIcon" size={16} className="text-primary" />
              Lun–Vie 9–19 · Sáb 9–13
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
