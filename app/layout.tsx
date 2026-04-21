import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Four Way Engineers | Industrial Fire Safety & Gas Pipeline Solutions',
  description: 'Four Way Engineers provides fire safety systems, gas pipeline engineering, AMC services, and industrial fabrication across Haridwar and North India.',
  keywords: 'fire safety systems, gas pipeline engineering, industrial fabrication, AMC services, Haridwar, North India, fire extinguishers, gas manifolds, ventilation systems',
  authors: [{ name: 'Four Way Engineers' }],
  creator: 'Four Way Engineers',
  publisher: 'Four Way Engineers',
  openGraph: {
    title: 'Four Way Engineers | Industrial Fire Safety & Gas Pipeline Solutions',
    description: 'Leading provider of fire safety systems, gas pipeline engineering, and industrial maintenance services in Haridwar and North India.',
    url: 'https://fourwayengineers.com',
    siteName: 'Four Way Engineers',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Four Way Engineers | Industrial Fire Safety & Gas Pipeline Solutions',
    description: 'Leading provider of fire safety systems, gas pipeline engineering, and industrial maintenance services in Haridwar and North India.',
    creator: '@fourwayengineers',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>
        <div className="min-h-screen bg-surface text-slate-900">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
