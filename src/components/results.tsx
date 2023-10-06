import React from "react";

type Movie = Record<string, string | number>;
interface Props {
  results: Array<Movie>;
}

function Results({ results }: Props) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
}

export default Results;
