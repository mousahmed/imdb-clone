import Results from "@/components/results";

const API_KEY = process.env.TMDB_API_KEY;

interface Props {
  params: { searchTerm: string };
}

async function SearchPage({ params }: Props) {
  const { searchTerm } = params;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`,
  );
  if (!res.ok) throw new Error("Failed to fetch");
  const movies = await res.json();
  const results = movies.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && results.length > 0 && <Results results={results} />}
    </div>
  );
}

export default SearchPage;
