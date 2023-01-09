import { useRouter } from "next/router"
import MovieList from "../../components/MovieList"
import searchMovies from "../../services/searchMovies"
import IMovie from "../../types/movies"

function Search({results}: {results: Array<IMovie>}) {
  const {query} = useRouter()
  const key = query.title
  return (
    <>
      <div>You are looking for: {key}</div>
      <MovieList movies={results}/>
    </>
  )
}

export async function getServerSideProps({query}: {query: {title:string}}) {
  const results = await searchMovies(query.title)
  return {
    props: {
      results
    }
  }
}

export default Search