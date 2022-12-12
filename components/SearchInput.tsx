import Button from "./Button"
import searchMovies from '../services/searchMovies'
import React, { useState, FormEvent } from "react"
import { useRouter } from "next/router"
import Link from "next/link";

interface results {
	id: string;
	title: string;
	poster: string;
}

function SearchInput() {
	const [movies, setMovies] = useState<Array<results> | []>([])
	const router = useRouter()


	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		const key = evt.currentTarget.search.value
		if (!key.trim()) {
			return alert("Input cannot be empty")
		}
		router.push(`/search?title=${key}`)
	}

	const handleChange = async (evt: FormEvent<HTMLInputElement>) => {
		const key = evt.currentTarget.value
		try {
			const results = await searchMovies(key)
			return setMovies(results)
		} catch {
			return setMovies([])
		}

	}

	return (
		<div className="relative">
			<form className='flex gap-2' onSubmit={handleSubmit} >
				<input className='border-gray-300 border-solid border-2 rounded-lg p-1.5' type={'search'} name='search' onChange={handleChange} placeholder='Search by title' />
				<Button type='secondary' />
			</form>
			{Boolean(movies.length) && (
				<ul className="absolute top-10 left-0 w-96 h-96 overflow-y-scroll bg-gray-200 overflowy-y-scroll px-3 pt-1">
					{
						movies.map(el => (
							<li key={el.id}>
								<Link href={`/details/${el.id}`} >
									{el.title}
								</Link>
							</li>
						))
					}
				</ul>
			)}
		</div>
	)
}

export default SearchInput