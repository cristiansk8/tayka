import Script from 'next/script';
import { CartProvider } from 'components/cart/cart-context';
import TaykaNavbar from '@/components/custom/TaykaNavbar';
import { WelcomeToast } from 'components/welcome-toast';
import CalmZone from '@/components/custom/CalmZone';
import { PageProgress } from '@/components/ui/page-progress';
import { WebVitals } from '@/components/web-vitals';
import { getCart } from 'lib/shopify';
import type { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';
import { baseUrl } from 'lib/utils';
import { Nunito, Inter, Source_Sans_3 } from 'next/font/google';

// Typography System - Discovery Kids Professional
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['600'], // SemiBold for logo only
  variable: '--font-nunito',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // UI, headings, buttons, navigation
  variable: '--font-inter',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600'], // Body text, long descriptions
  variable: '--font-source',
  display: 'swap',
});

const siteName = 'Tayka';
const siteSlogan = 'Talleres PDF para el Desarrollo Infantil';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} | ${siteSlogan}`,
    template: `%s | ${siteName}`
  },
  description: 'Talleres descargables en PDF para padres, educadores y cuidadores. Actividades estructuradas para trabajar en casa con niños, incluyendo niños con autismo.',
  keywords: ['talleres pdf', 'desarrollo infantil', 'actividades para niños', 'educación en casa', 'autismo', 'padres', 'educadores', 'talleres descargables', 'pedagogía'],
  authors: [{ name: 'Tayka' }],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: baseUrl,
    siteName: siteName,
    title: `${siteName} | ${siteSlogan}`,
    description: 'Talleres descargables en PDF para padres, educadores y cuidadores. Actividades estructuradas para el desarrollo infantil.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | ${siteSlogan}`,
    description: 'Talleres PDF para el desarrollo infantil. Descarga inmediata.',
  },
  robots: {
    follow: true,
    index: true
  }
};

export const viewport = {
  themeColor: '#1F2A44' // Primary dark blue - Editorial Minimalism
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();

  return (
    <html lang="es" className={`${inter.variable} ${nunito.variable} ${sourceSans.variable}`}>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WKH2FLX6');
          `}
        </Script>
      </head>
      <body className="bg-neutral-50 text-black selection:bg-teal-300">
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WKH2FLX6"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        <CartProvider cartPromise={cart}>
          <WebVitals />
          <PageProgress />
          <TaykaNavbar />
          <main>
            {children}
            <Toaster closeButton />
            <WelcomeToast />
            <CalmZone />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
