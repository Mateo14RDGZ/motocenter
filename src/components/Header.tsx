'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { WA_LINK } from '@/config/business';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Repuestos', href: '#repuestos' },
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-card/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 min-w-0">
            <AppLogo
              size={36}
              className="flex-shrink-0"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
            <span
              className={`font-black text-lg tracking-tight uppercase transition-colors ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Motocenter
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                className={`text-sm font-600 transition-colors hover:text-primary ${
                  scrolled ? 'text-muted-foreground' : 'text-white/80 hover:text-white'
                }`}
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-700 rounded-full hover:bg-primary/90 active:scale-95 transition-[background-color,transform] duration-150 shadow-lg shadow-primary/30"
          >
            <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={16} variant="solid" />
            WhatsApp
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-[background-color,transform] duration-150 active:scale-90 ${
              scrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
            }`}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-foreground/90 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-16 left-0 right-0 bg-card border-b border-border p-6 transition-transform duration-300 ${
            menuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <nav className="flex flex-col gap-1 mb-6">
            {navLinks?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                onClick={handleLinkClick}
                className="flex items-center px-4 py-3.5 text-base font-600 text-foreground rounded-lg hover:bg-muted transition-colors"
              >
                {link?.label}
              </a>
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
        </div>
      </div>
    </>
  );
}
