import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import PartsSection from '@/app/components/PartsSection';
import AboutSection from '@/app/components/AboutSection';
import GallerySection from '@/app/components/GallerySection';
import HoursSection from '@/app/components/HoursSection';
import LocationSection from '@/app/components/LocationSection';
import CtaSection from '@/app/components/CtaSection';
import FloatingWhatsApp from '@/app/components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <PartsSection />
      <AboutSection />
      <GallerySection />
      <HoursSection />
      <LocationSection />
      <CtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
