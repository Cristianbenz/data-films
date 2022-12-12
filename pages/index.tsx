import Head from 'next/head'
import Link from 'next/link'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='underline font-bold text-3xl text-center py-3'>DataFilms</h1>
        <p>Get all the information about the popular, lastest and your favorites movies!</p>
        <Link href='/home'>
          <Button type='primary'  />
        </Link>
      </main>
    </div>
  )
}
