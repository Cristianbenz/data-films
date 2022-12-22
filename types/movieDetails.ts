interface IGenre {
    id: number;
    name: string;
}

export default interface IMovieDetails {
    id: string;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    genres: Array<IGenre>;
    release_date: string
}