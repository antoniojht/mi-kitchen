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
        <main className='px-14 py-8 min-h-screen'>{children}</main>
      </body>
    </html>
  );
}