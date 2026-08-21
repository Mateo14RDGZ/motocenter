import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Unbounded } from 'next/font/google';
import '../styles/tailwind.css';
import { ADDRESS, WA_NUMBER } from '@/config/business';

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `Motocenter | Repuestos, accesorios y servicio para motos en ${ADDRESS.locality}`,
  description: `Motocenter en ${ADDRESS.locality}, ${ADDRESS.region}. Reparación de motos, repuestos, accesorios y servicio. Atención directa por WhatsApp.`,
  keywords: [
    'Motocenter Trinidad',
    'repuestos motos Trinidad',
    'taller motos Trinidad',
    'accesorios motos Trinidad Flores',
    'reparación motos Trinidad',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Motocenter — Todo para tu moto en Trinidad',
    description:
      'Reparación, repuestos, accesorios y mantenimiento para motos en Trinidad, Flores. Consultanos por WhatsApp.',
    type: 'website',
    locale: 'es_UY',
    url: siteUrl,
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Motocenter Trinidad - Repuestos y Taller de Motos',
      },
    ],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
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
    <html lang="es" className={`${plusJakartaSans.variable} ${unbounded.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Motocenter',
              description: `Reparación de motos, repuestos, accesorios y servicio integral para motos en ${ADDRESS.locality}, ${ADDRESS.region}, Uruguay.`,
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
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
