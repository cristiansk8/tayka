import Script from 'next/script';
import { CartProvider } from 'components/cart/cart-context';
import TaykaNavbar from '@/components/custom/TaykaNavbar';
import { WelcomeToast } from 'components/welcome-toast';
import CalmZone from '@/components/custom/CalmZone';
import { PageProgress } from '@/components/ui/page-progress';
import { WebVitals } from '@/components/web-vitals';
import { GeistSans } from 'geist/font/sans';
import { getCart } from 'lib/shopify';
import type { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';
import { baseUrl } from 'lib/utils';
import localFont from 'next/font/local';

const belleza = localFont({
  src: '../fonts/Belleza-Regular.ttf',
  variable: '--font-belleza',
});

const moderat = localFont({
  src: '../fonts/Moderat-Black.ttf',
  variable: '--font-moderat',
});

const siteName = 'Tayka';
const siteSlogan = 'Games designed for unique minds';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} | ${siteSlogan}`,
    template: `%s | ${siteName}`
  },
  description: 'Tayka - Pedagogical games specially designed for children with autism. Unique and accessible learning experiences.',
  keywords: ['educational games', 'autism', 'pedagogy', 'children', 'learning', 'inclusion', 'accessibility'],
  authors: [{ name: 'Tayka' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: siteName,
    title: `${siteName} | ${siteSlogan}`,
    description: 'Pedagogical games specially designed for children with autism',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | ${siteSlogan}`,
    description: 'Pedagogical games specially designed for children with autism',
  },
  robots: {
    follow: true,
    index: true
  }
};

export const viewport = {
  themeColor: '#87CEEB' // Tayka blue
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();

  return (
    <html lang="es" className={`${GeistSans.variable} ${belleza.variable} ${moderat.variable}`}>
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
