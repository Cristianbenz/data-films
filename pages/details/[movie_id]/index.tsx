import axios from "axios"
import Image from "next/image"
type props = {
  details: {
    id: number
    title: string
    overview: string
    poster: string
  }
}

function Details({details}: props) {
  
  return (
    <main>
      <Image className="w-48 h-auto" src={`https://image.tmdb.org/t/p/w300${details.poster}`} alt={`Poster of ${details.title}`} width={300} height={113} />
      <h1>{details.title} </h1>
      <p>{details.overview}</p>
    </main>
  )
}

export async function getServerSideProps({params}: {params: {movie_id: string}}) {
  const URI = process.env.API_BASE_URI
  const KEY = process.env.API_BASE_KEY
  const { data } = await axios(URI + `/movie/${params.movie_id}?` + KEY)
  const info = {
    title: data.title,
    overview: data.overview,
    poster: data.poster_path
  }
  return {
    props: {
      details: info
    }
  }
}

export default Details