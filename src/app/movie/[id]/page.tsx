import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

const API_KEY = process.env.TMDB_API_KEY;

interface Props {
  params: { id: string };
}

async function getMovie(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
    { next: { revalidate: 60 * 60 * 5 } },
  );

  console.log(res.ok, movieId);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}

async function MoviePage({ params }: Props) {
  const movieId = params.id;
  const movie = await getMovie(movieId);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-7xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          className="rounded-lg"
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt={movie.title || movie.name}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview: </span>
            {movie.overview}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="text-lg mb-3 flex items-center space-x-2">
            <span className="font-semibold mr-1">Ratings:</span>
            {movie.vote_count}
            <FiThumbsUp className="mr-2 h-5" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
