'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { WA_LINK } from '@/config/business';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Repuestos', href: '#repuestos' },
  { label: 'Accesorios', href: '#accesorios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Ubicación', href: '#ubicacion' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-ink/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 min-w-0 group absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          >
            <AppLogo
              src="/assets/images/motocenter-logo-header.png"
              size={88}
              className="flex-shrink-0 transition-transform duration-200 group-active:scale-90"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-600 text-paper/70 hover:text-paper transition-colors group"
              >
                {link.label}
                <span className="absolute left-3.5 right-3.5 bottom-1 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-700 rounded-full hover:bg-[#ff7040] active:scale-95 transition-[background-color,transform] duration-150 shadow-lg shadow-primary/25"
          >
            <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={16} variant="solid" />
            WhatsApp
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-paper hover:bg-white/10 transition-[background-color,transform] duration-150 active:scale-90 ml-auto"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-ink/95 backdrop-blur-md"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="absolute top-24 left-0 right-0 bg-ink border-b border-white/10 p-6 max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav className="flex flex-col gap-1 mb-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center px-4 py-3.5 text-base font-600 text-paper rounded-lg hover:bg-white/5 transition-colors"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.25 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="btn-primary w-full justify-center"
              >
                <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={18} variant="solid" />
                Consultar por WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
