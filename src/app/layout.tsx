import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Unbounded, Caveat } from 'next/font/google';
import '../styles/tailwind.css';
import SplashScreen from '@/components/SplashScreen';
import { ADDRESS, WA_NUMBER, MAPS_LAT, MAPS_LNG, MAPS_LINK } from '@/config/business';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-unbounded',
  display: 'swap',
});

// Fuente manuscrita para el toque "cartel de barrio" (sello, acentos, firma)
const caveat = Caveat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-caveat',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `Motocenter | Taller mecánico de motos en ${ADDRESS.locality}`,
  description: `Motocenter, taller mecánico de motos en ${ADDRESS.locality}, ${ADDRESS.region}. Diagnóstico, reparación, mantenimiento y repuestos. Atención directa por WhatsApp.`,
  keywords: [
    'Motocenter Trinidad',
    'taller de motos Trinidad',
    'mecánico de motos Trinidad',
    'reparación de motos Trinidad',
    'repuestos motos Trinidad Flores',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Motocenter — Taller mecánico de motos en Trinidad',
    description:
      'Diagnóstico, reparación, mantenimiento y repuestos para motos en Trinidad, Flores. Consultanos por WhatsApp.',
    type: 'website',
    locale: 'es_UY',
    url: siteUrl,
    images: [
      {
        url: '/assets/images/motocenter-logo.png',
        width: 1200,
        height: 630,
        alt: 'Motocenter Trinidad - Taller mecánico de motos',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${unbounded.variable} ${caveat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MotorcycleRepair',
              name: 'Motocenter',
              description: `Taller mecánico de motos en ${ADDRESS.locality}, ${ADDRESS.region}, Uruguay. Diagnóstico, reparación, mantenimiento y repuestos.`,
              address: {
                '@type': 'PostalAddress',
                streetAddress: ADDRESS.street,
                addressLocality: ADDRESS.locality,
                addressRegion: ADDRESS.region,
                postalCode: ADDRESS.postalCode,
                addressCountry: 'UY',
              },
              telephone: `+598${WA_NUMBER.slice(3)}`,
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
              hasMap: MAPS_LINK,
              geo: {
                '@type': 'GeoCoordinates',
                latitude: MAPS_LAT,
                longitude: MAPS_LNG,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '19:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '13:00',
                },
              ],
            }),
          }}
        />
      </head>
      <body className={plusJakartaSans.className}>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
