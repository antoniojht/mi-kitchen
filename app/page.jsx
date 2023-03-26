import Header from '@/components/Header'

export const metadata = {
  title: 'My Page Title',
};

export default async function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">Bienvenido a miKitchen!</h1>
    </>
  )
}
