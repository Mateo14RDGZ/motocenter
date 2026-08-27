import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import RevealMask from '@/components/motion/RevealMask';
import ScaleIn from '@/components/motion/ScaleIn';
import { buildWhatsAppLink } from '@/config/business';

const WA_LINK = buildWhatsAppLink('Hola Motocenter, quería consultar por repuestos VINI...');

export default function BrandsSection() {
  return (
    <section id="marcas" className="py-20 md:py-24 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <RevealMask className="mb-10 md:mb-14">
          <span className="eyebrow text-primary mb-3 block">03 — Marcas</span>
          <h2 className="section-title text-foreground max-w-xl">
            Trabajamos con marcas de confianza
          </h2>
        </RevealMask>

        <ScaleIn>
          <div className="relative rounded-3xl overflow-hidden bg-ink border border-white/10 grain-texture">
            <div className="absolute inset-0 mechanic-line opacity-15 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-10 p-8 md:p-12">
              {/* Logo */}
              <div className="flex-shrink-0 w-full md:w-auto flex items-center justify-center bg-black/30 rounded-2xl p-6 md:p-8">
                <AppImage
                  src="/assets/images/brands/vini-logo.svg"
                  alt="VINI"
                  width={220}
                  height={108}
                  className="w-40 sm:w-48 h-auto"
                  unoptimized
                  showLoadingBg={false}
                />
              </div>

              {/* Copy */}
              <div className="flex-1">
                <span className="inline-flex items-center gap-1.5 text-primary text-xs font-700 uppercase tracking-wide mb-3">
                  <Icon name="CheckBadgeIcon" size={16} variant="solid" />
                  Marca principal
                </span>
                <h3 className="font-display font-600 text-2xl md:text-3xl text-paper tracking-tight mb-3">
                  Repuestos VINI
                </h3>
                <p className="text-paper/65 text-sm md:text-base leading-relaxed max-w-lg mb-6">
                  Trabajamos principalmente con repuestos VINI para las reparaciones del taller.
                  Calidad conocida y buena disponibilidad para que tu moto no esté mucho tiempo
                  parada. Sumamos más marcas a medida que las vamos incorporando.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-700 text-primary hover:text-paper transition-colors"
                >
                  Consultar disponibilidad VINI
                  <Icon name="ArrowRightIcon" size={14} />
                </a>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
