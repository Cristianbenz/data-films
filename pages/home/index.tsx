import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'

type movies = Array<{
    "adult": boolean,
    "backdrop_path": string,
    "id": number,
    "title": string,
    "original_language": string,
    "original_title": string,
    "overview": string,
    "poster_path": string,
    "media_type": string,
    "genre_ids": Array<number>,
    "popularity": number,
    "release_date": string,
    "video": boolean,
    "vote_average": number,
    "vote_count": number
  }>


function Home({ trends }: { trends: movies }) {
  return (
    <section>
      <h2>Trendings</h2>
      <ul className='flex flex-row gap-4 flex-wrap w-full p-auto'>
        {
          trends?.map(movie => (
            <li className='w-36 flex-initial'>
              <Link href={`/details/${movie.id}`} >
                <Image className='w-36 h-auto rounded-lg' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`cover of ${movie.title}`} width={300} height={113} />
                <h3 className='break-word font-bold'>{movie.title}</h3>
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export async function getStaticProps() {
  const URI = process.env.API_BASE_URI as string
  const KEY = process.env.API_BASE_KEY
  const {data} = await axios(URI + '/trending/movie/week?' + KEY)

  return {
    props: {
      trends: data.results
    }
  }
}

export default Home