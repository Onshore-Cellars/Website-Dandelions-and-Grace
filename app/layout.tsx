import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dandelionsandgrace.com'),
  title: {
    default: 'Dandelions & Grace | Luxury Wedding Florist French Riviera',
    template: '%s | Dandelions & Grace',
  },
  description: 'Premier luxury wedding and event florist specializing in destination weddings, yacht floristry, and high-end events across the French Riviera including Cannes, Monaco, and Saint-Tropez.',
  keywords: [
    'luxury wedding florist',
    'French Riviera weddings',
    'Cannes wedding flowers',
    'Monaco wedding florist',
    'Saint-Tropez event florist',
    'destination wedding florist',
    'yacht floristry',
    'high-end event flowers',
  ],
  authors: [{ name: 'Dandelions & Grace' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Dandelions & Grace',
    title: 'Luxury Wedding Florist French Riviera',
    description: 'Premier luxury wedding and event florist specializing in destination weddings across the French Riviera.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dandelions & Grace | Luxury Wedding Florist',
    description: 'Premier luxury wedding and event florist in the French Riviera',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
