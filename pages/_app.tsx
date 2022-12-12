import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import SearchInput from '../components/SearchInput'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className='p-5 flex justify-between'>
        <Link href={'/home'}>
          <span className='font-bold text-3xl w-max'>Logo</span>
        </Link>
        <SearchInput />
        <nav>
          <ul className='flex gap-3'>
            <li>Home</li>
            <li>Movies</li>
          </ul>
        </nav>
      </header>
      <main className='p-5'>
        <Component {...pageProps} />
      </main>
    </>
  )
}
