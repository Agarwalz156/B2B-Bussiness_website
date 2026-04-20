'use client';

import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Four Way Engineers | Industrial Fire Safety & Gas Pipeline Solutions',
  description: 'Four Way Engineers provides fire safety systems, gas pipeline engineering, AMC services, and industrial fabrication across Haridwar and North India.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
