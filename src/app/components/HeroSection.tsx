'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Marquee from '@/components/motion/Marquee';
import SplitText from '@/components/motion/SplitText';
import Magnetic from '@/components/motion/Magnetic';
import GoogleRatingBadge from '@/components/GoogleRatingBadge';
import { WA_LINK } from '@/config/business';

const stats = [
  {
    icon: 'WrenchScrewdriverIcon' as const,
    label: 'Diagnóstico',
    value: 'Revisión antes de tocar nada',
  },
  { icon: 'Cog6ToothIcon' as const, label: 'Reparación', value: 'Mecánica general de motos' },
  { icon: 'CubeIcon' as const, label: 'Repuestos', value: 'Los que usamos en el taller' },
  { icon: 'UserGroupIcon' as const, label: 'Atención', value: 'Personalizada, cara a cara' },
];

const tickerItems = [
  'Diagnóstico',
  'Reparación',
  'Mantenimiento',
  'Repuestos',
  'Trinidad · Flores',
  'Service',
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col bg-ink overflow-hidden"
    >
      {/* Background image, cropped to the right two-thirds, con parallax al scrollear */}
      <motion.div
        className="absolute inset-y-0 right-0 w-full md:w-2/3 z-0"
        style={{ y: parallaxY }}
      >
        <AppImage
          src="https://images.unsplash.com/photo-1766170507513-ef249e0ca426"
          alt="Taller de motos pequeño y desordenado, con motos y repuestos, ambiente de barrio"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10 md:from-ink md:via-ink/50 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </motion.div>

      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center pt-32 md:pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-2xl">
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 rounded-full bg-white/5">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="eyebrow text-paper/80">Trinidad · Flores · Uruguay</span>
              </div>
              <GoogleRatingBadge className="px-3 py-1.5 border border-white/20 rounded-full bg-white/5 text-paper hover:bg-white/10 transition-colors" />
              <span className="stamp-badge font-scrawl text-primary text-base px-3.5 leading-none select-none">
                Taller de barrio
              </span>
            </motion.div>

            <SplitText text="Tu moto en" className="hero-title text-paper block" delay={0.1} />
            <SplitText
              text="buenas manos"
              className="hero-title text-primary block mb-4"
              delay={0.24}
            />
            {/* Trazo tipo cartel pintado a mano, acento "de barrio" */}
            <svg
              viewBox="0 0 160 16"
              className="w-32 md:w-40 h-4 text-primary/70 mb-5"
              aria-hidden="true"
            >
              <path
                d="M2 9 C 30 3, 60 13, 90 7 C 110 3, 135 11, 158 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            <motion.p
              className="text-lg md:text-xl text-paper/70 font-500 leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: easeOut }}
            >
              Taller mecánico de motos en Trinidad: diagnóstico, reparación y mantenimiento, con los
              repuestos que hacen falta para dejarla andando. Sin vueltas, como en el barrio.
              Consultanos por WhatsApp.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: easeOut }}
            >
              <Magnetic>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base"
                >
                  <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={20} variant="solid" />
                  Consultar por WhatsApp
                </a>
              </Magnetic>
              <a href="#servicios" className="btn-secondary text-base">
                Ver servicios
                <Icon name="ChevronDownIcon" size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 border-t border-white/10 bg-ink/60 backdrop-blur-sm text-paper/60 py-3">
        <Marquee items={tickerItems} />
      </div>

      {/* Stats strip */}
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-card rounded-t-2xl shadow-2xl px-4 py-4 md:px-8 md:py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-border">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 md:px-6 first:pl-0 last:pr-0">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name={stat.icon} size={20} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-600 uppercase tracking-wide leading-none mb-0.5">
                      {stat.label}
                    </p>
                    <p className="text-sm font-700 text-foreground leading-snug">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
