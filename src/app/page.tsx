import Results from "@/components/results";

const API_KEY = process.env.TMDB_API_KEY;

interface Props {
  searchParams?: {
    genre?: string;
  };
}

async function Home({ searchParams }: Props) {
  const genre = searchParams?.genre || "fetchTrending";

  const fetchMovies = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/movie/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 60 * 60 * 5 } },
  );

  if (!fetchMovies.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await fetchMovies.json();
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}

export default Home;
