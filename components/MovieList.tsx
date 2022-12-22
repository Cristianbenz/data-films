import Card from "./Card";
import IMovie from "../types/movies";

function MovieList({
  movies,
  scrollable,
}: {
  movies: Array<IMovie>;
  scrollable?: boolean;
}) {
  return (
    <ul
      className={`flex flex-row h-max gap-4 py-1 ${!scrollable ? 'flex-wrap content-center p-2' : 'overflow-x-visible'} `}
    >
      {movies?.map((movie) => (
        <li key={movie.id}>
          <Card
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            overview={movie.overview}
          />
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
