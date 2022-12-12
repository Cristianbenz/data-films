import axios from "axios";

const URI = 'https://api.themoviedb.org/3/'
const KEY = 'api_key=128f56cf896a7c28578efc0a98b0e4b6'

export default async function searchMovies(name: string) {
    const {data} = await axios(URI + `search/movie?query=${name.trim()}&` + KEY)
    return data.results

}