import React from "react";
import Card from "./card";

type Movie = Record<string, string | number>;
interface Props {
  results: Array<Movie>;
}

function Results({ results }: Props) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-7xl mx-auto py-4">
      {results.map((result) => (
        <Card
          key={result.id}
          id={Number(result.id)}
          title={String(result.title || result.name)}
          overview={String(result.overview)}
          imgUrl={String(result.backdrop_path || result.poster_path)}
          releaseDate={String(result.release_date || result.first_air_date)}
          votesCount={Number(result.vote_count)}
        />
      ))}
    </div>
  );
}

export default Results;
