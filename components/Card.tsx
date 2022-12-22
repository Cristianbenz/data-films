import Image from "next/image";
import Link from "next/link";
import IMovie from "../types/movies";

function Card({ id, title, poster_path }: IMovie) {
  return (
    <div className="w-36 relative hover:scale-105 duration-300">
      <Link href={`/details/${id}`}>
        <Image
          className="w-48 h-full rounded-lg"
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={`cover of ${title}`}
          width={300}
          height={113}
        />
        <span className="absolute top-0 left-0 w-full h-full flex items-end p-2 bg-gradient-to-t from-black rounded-lg">
          <h3 className="break-word font-bold">{title}</h3>
        </span>
      </Link>
    </div>
  );
}

export default Card;
