import Blobs from '@/components/Blob';
import Header from '@/components/Header';
import '@/styles/globals.css'
import '@/styles/header.css'

export default function RootLayout({
  children,
}) {
  return (
    <html lang="es">
      <head />
      <body>
        <Header />
        <Blobs>
          <main className='px-6 py-8 min-h-screen'>{children}</main>
        </Blobs>
      </body>
    </html>
  );
}