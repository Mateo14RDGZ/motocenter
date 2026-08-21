import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/motion/Reveal';
import { WA_LINK, ADDRESS, DISPLAY_PHONE } from '@/config/business';

export default function CtaSection() {
  return (
    <section className="py-20 md:py-24 bg-ink text-secondary-foreground relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 mechanic-line opacity-20 pointer-events-none" />
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <Reveal>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-white/20 rounded-full bg-white/8">
            <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <span className="eyebrow text-secondary-foreground/70">Atención directa</span>
          </div>

          <h2 className="section-title text-secondary-foreground mb-5 text-balance">
            ¿Necesitás un repuesto o tenés un problema con tu moto?
          </h2>
          <p className="text-secondary-foreground/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Escribinos y consultanos. Te respondemos rápido y sin vueltas.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8"
            >
              <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={20} variant="solid" />
              Hablar por WhatsApp
            </a>
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
