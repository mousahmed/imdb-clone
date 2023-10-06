import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

interface Props {
  id: number;
  title: string;
  overview: string;
  imgUrl: string;
  releaseDate: string;
  votesCount: number;
}

function Card({ id, title, overview, imgUrl, releaseDate, votesCount }: Props) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${imgUrl}`}
          alt={title}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="p-2 space-y-2">
          <p className="line-clamp-2 text-md">{overview}</p>
          <h2 className="truncate text-lg font-bold">{title}</h2>
          <span className="flex item space-x-2 text-sm justify-between">
            <p >{releaseDate}</p>
            <p className="flex items-center">
              <FiThumbsUp className="mr-2 h-5" />
              {votesCount}
            </p>
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Card;
