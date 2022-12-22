import Head from 'next/head'
import Link from 'next/link'
import Button from '../components/Button'
import CustomHead from '../components/CustomHead'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <CustomHead />
        <section className='flex flex-col lg:flex-row w-full h-screen justify-center items-center gap-20 sm:gap-48'>
          <h1 className='underline font-bold text-7xl text-center py-3'>DataFilms</h1>
          <div className='flex flex-col items-center'>
            <p className='text-5xl pb-20'>Get all the information about the popular, new releases and your favorites movies!</p>
            <Link className='w-max' href='/home'>
              <Button variant='primary' styles='text-3xl font-bold'>
                See all movies
              </Button>
            </Link>
          </div>
        </section>        
    </div>
  )
}
