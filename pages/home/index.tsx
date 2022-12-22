import axios from 'axios'
import IMovie from '../../types/movies'
import MovieList from '../../components/MovieList'
import CategoriesSection from '../../components/CategoriesSection'


function Home({ lastests, trending }: { lastests: Array<IMovie>, trending: Array<IMovie> }) {
  return (
    <div className='flex flex-column flex-wrap p-10 gap-24 min-h-max'>
      <CategoriesSection title={'New Releases'}>
        <MovieList movies={lastests} scrollable />
      </CategoriesSection>
      <CategoriesSection title={'Trends'}>
        <MovieList movies={trending} scrollable />
      </CategoriesSection>
    </div>
  )
}

export async function getStaticProps() {
  const URI = process.env.NEXT_PUBLIC_API_BASE_URI as string
  const KEY = process.env.NEXT_PUBLIC_API_BASE_KEY
  const urls = ['movie/now_playing', 'trending/movie/week']
  const [lastests, trending] = await Promise.all(urls.map(path => axios(URI + path + '?' + KEY)))
  return {
    props: {
      lastests: lastests.data.results,
      trending: trending.data.results,
    }
  }
}

export default Home