import Button from "./Button";
import searchMovies from "../services/searchMovies";
import React, { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface results {
  id: string;
  title: string;
  poster: string;
}

function SearchInput() {
  const [movies, setMovies] = useState<Array<results> | []>([]);
  const {push, pathname} = useRouter();

  useEffect(() => {
    setMovies([])
  }, [pathname])

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const input = evt.currentTarget.search;
    const key = input.value;
    if (!key.trim()) {
      return alert("Input cannot be empty");
    }
		input.value = ''
		setMovies([]);
    return push(`/search?title=${key}`)
  };

  const handleChange = async (evt: FormEvent<HTMLInputElement>) => {
    const key = evt.currentTarget.value;
    if (key.trim()) {
      const results = await searchMovies(key);
      return setMovies(results);
    } else {
      return setMovies([]);
    }
  };

  return (
    <div>
      
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            className="border-gray-300 border-solid border-2 rounded-lg p-1.5 w-full min-w-0"
            type={"search"}
            name="search"
            onChange={handleChange}
            placeholder="Search by title"
          />
          <Button variant="secondary">Search</Button>
        </form>
        {Boolean(movies.length) && (
          <div className="relative">
            <span className="fixed z-30 w-screen h-screen bg-primary/50 left-0" onClick={() => setMovies([])} />
              <ul className="absolute top-0 inset-x-0 w-max sm:left-0 sm:absolute z-50  sm:w-96 h-96 overflow-y-scroll bg-primary overflowy-y-scroll px-3 pt-1 rounded-sm">
                {movies.map((el) => (
                  <li key={el.id}>
                    <Link href={`/details/${el.id}`}>{el.title}</Link>
                  </li>
                ))}
              </ul>
          </div>
        )}
    </div>
  );
}

export default SearchInput;
