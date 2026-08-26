import React from 'react';

import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/motion/Reveal';
import { WA_LINK, MAPS_LINK, ADDRESS, DISPLAY_PHONE } from '@/config/business';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-white/10">
      <Reveal
        y={16}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col items-center text-center"
      >
        {/* Brand */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <AppLogo size={40} className="opacity-90" />
          <div>
            <span className="font-display font-700 text-base uppercase tracking-tight text-secondary-foreground block">
              Motocenter
            </span>
            <span className="text-xs text-secondary-foreground/50">Trinidad, Flores</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-500 text-secondary-foreground/60 mb-6">
          <a href="#servicios" className="hover:text-secondary-foreground transition-colors">
            Servicios
          </a>
          <a href="#repuestos" className="hover:text-secondary-foreground transition-colors">
            Repuestos
          </a>
          <a href="#accesorios" className="hover:text-secondary-foreground transition-colors">
            Accesorios
          </a>
          <a href="#como-trabajamos" className="hover:text-secondary-foreground transition-colors">
            Cómo trabajamos
          </a>
          <a href="#horarios" className="hover:text-secondary-foreground transition-colors">
            Horarios
          </a>
          <a href="#ubicacion" className="hover:text-secondary-foreground transition-colors">
            Ubicación
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary-foreground transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Social / Contact */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 transition-[background-color,transform] duration-150"
            aria-label="WhatsApp"
          >
            <Icon
              name="ChatBubbleOvalLeftEllipsisIcon"
              size={18}
              variant="solid"
              className="text-secondary-foreground"
            />
          </a>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 transition-[background-color,transform] duration-150"
            aria-label="Google Maps"
          >
            <Icon
              name="MapPinIcon"
              size={18}
              variant="solid"
              className="text-secondary-foreground"
            />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/10 pt-5 flex flex-col items-center gap-2 text-xs text-secondary-foreground/40">
          <span>
            © {new Date().getFullYear()} Motocenter — {ADDRESS.full} · {DISPLAY_PHONE}
          </span>
          <a
            href="https://www.mateordgz.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline gap-2 text-secondary-foreground/50 hover:text-secondary-foreground/80 transition-colors"
          >
            <span className="text-[10px] font-600 uppercase tracking-[0.25em]">
              Desarrollado por
            </span>
            <span className="font-display italic font-800 text-lg tracking-tight normal-case">
              MR14
            </span>
          </a>
        </div>
      </Reveal>
    </footer>
  );
}
