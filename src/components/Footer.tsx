import React from 'react';

import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { WA_LINK, MAPS_LINK, ADDRESS, DISPLAY_PHONE } from '@/config/business';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Main row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <AppLogo size={36} className="opacity-90" />
            <div>
              <span className="font-display font-700 text-base uppercase tracking-tight text-secondary-foreground block">
                Motocenter
              </span>
              <span className="text-xs text-secondary-foreground/50">Trinidad, Flores</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-500 text-secondary-foreground/60">
            <a href="#servicios" className="hover:text-secondary-foreground transition-colors">
              Servicios
            </a>
            <a href="#repuestos" className="hover:text-secondary-foreground transition-colors">
              Repuestos
            </a>
            <a href="#accesorios" className="hover:text-secondary-foreground transition-colors">
              Accesorios
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
          <div className="flex items-center gap-3">
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
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary-foreground/40">
          <span>
            © {new Date().getFullYear()} Motocenter — {ADDRESS.full} · {DISPLAY_PHONE}
          </span>
          <span>
            Sitio desarrollado por{' '}
            <a
              href="https://www.mateordgz.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors underline underline-offset-2"
            >
              MR14
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
