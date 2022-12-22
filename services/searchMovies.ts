import axios from "axios";

const URI = process.env.NEXT_PUBLIC_API_BASE_URI
const KEY = process.env.NEXT_PUBLIC_API_BASE_KEY

export default async function searchMovies(name: string) {
    const {data} = await axios(URI + `search/movie?query=${name.trim()}&include_adult=false&` + KEY)
    return data.results
}