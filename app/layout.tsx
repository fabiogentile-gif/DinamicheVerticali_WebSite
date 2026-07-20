import type { Metadata } from 'next';
import { Manrope, Barlow_Condensed } from 'next/font/google';

import './globals.css';
import NavBar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dinamichedverticali.it'),
  title: {
    default: 'Dinamiche Verticali',
    template: '%s | Dinamiche Verticali',
  },
  description: 'Formazione professionale per lavori in quota, funi e sicurezza sul lavoro.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${manrope.variable} ${barlow.variable}`}>
      <body className={`${manrope.className} min-h-screen bg-background text-foreground`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
