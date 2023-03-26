import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>miKitchen Blog</title>
        <meta name="description" content="Blog de recetas de cocina saludables" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
      </main>
    </>
  )
}
