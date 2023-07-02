import { Analytics } from '@vercel/analytics/react';
import { Suspense } from 'react';
import Blobs from '@/components/Blob';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import '@/styles/header.css';
import Loading from './loading';

export default function RootLayout({
  children,
}) {
  return (
    <html lang="es">
      <head />
      <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      <body>
        <Blobs>
          <Header />
          <Suspense fallback={<Loading />}>
            <main className="px-6 py-8 min-h-screen">{children}</main>
          </Suspense>
          <Footer />
        </Blobs>
        <Analytics />
      </body>
    </html>
  );
}
