import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import Script from 'next/script';
import { personSchema, localBusinessSchema } from '@/lib/jsonld';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: 'Salah Ahmad | Dubai Luxury Real Estate Advisor',
  description:
    'Premier Dubai luxury real estate advisory. Exclusive access to villas, branded residences, and off-market opportunities. Tax-free freehold ownership, 6–9% rental yields, Golden Visa from AED 2M.',
  keywords: [
    'Dubai luxury real estate',
    'luxury villas Dubai',
    'branded residences Dubai',
    'Omniyat properties',
    'Emaar villas',
    'Ellington properties',
    'Meraas residences',
    'Palm Jumeirah property',
    'Dubai investment property',
    'Golden Visa property Dubai',
    'Nakheel villas',
    'Aldar properties',
    'Four Seasons branded residences',
    'off-plan Dubai',
    'HNWI real estate Dubai',
  ],
  authors: [{ name: 'Salah Ahmad' }],
  creator: 'Salah Ahmad — Unique Properties',
  publisher: 'Salah Ahmad',
  metadataBase: new URL('https://salahestates.ae'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Salah Ahmad | Dubai Luxury Real Estate',
    description:
      'Tax-free. Freehold. Double-digit appreciation. Exclusive advisory for ultra-prime Dubai properties.',
    url: 'https://salahestates.ae',
    siteName: 'Salah Private Estates',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Salah Ahmad — Dubai Luxury Real Estate Advisor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salah Ahmad | Dubai Luxury Real Estate',
    description: 'Exclusive advisory for ultra-prime Dubai villas and branded residences.',
    images: ['/images/og-image.jpg'],
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
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `}</Script>
          </>
        )}
      </body>
    </html>
  );
}
