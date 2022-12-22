import axios from "axios"
import Image from "next/image"
import IMovieDetails from "../../../types/movieDetails"
type props = {
  details: IMovieDetails
}

function Details({details}: props) {
  
  return (
    <main className={`w-full h-max bg-[url(https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg)] bg-cover rounded-xl `}>
      <section className="flex flex-col sm:flex-row gap-7 p-16 backdrop-blur-sm min-h-screen">
        <Image className="w-48 h-max" src={`https://image.tmdb.org/t/p/w300${details.poster_path}`} alt={`Poster of ${details.title}`} width={300} height={113} />
        <div className="flex flex-col">
          <h1 className="font-bold text-5xl underline pb-4">{details.title} </h1>
          <span className="text-lg">{details.release_date}</span>
          <ul className="flex gap-3">
            {
              details.genres.map(el => (
                <li key={el.id}>{el.name}</li>
              ))
            }
          </ul>
          <span className="font-bold text-2xl">⭐{Math.floor(details.vote_average)} / 10</span>
          <p className="py-4 text-xl">{details.overview}</p>
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps({params}: {params: {movie_id: string}}) {
  const URI = process.env.NEXT_PUBLIC_API_BASE_URI
  const KEY = process.env.NEXT_PUBLIC_API_BASE_KEY
  const { data } = await axios(URI + `/movie/${params.movie_id}?` + KEY)
  const info = {
    title: data.title,
    overview: data.overview,
    poster_path: data.poster_path,
    backdrop_path: data.backdrop_path,
    vote_average: data.vote_average,
    genres: data.genres,
    release_date: data.release_date
  }
  return {
    props: {
      details: info
    }
  }
}

export default Details