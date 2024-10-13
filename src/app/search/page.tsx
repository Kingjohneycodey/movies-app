"use client";

import Spinner from "@/components/ui/Spinner";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  genre_ids: number[];
  vote_average: number;
}

const SearchResultsPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to the search results page with the search term
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  useEffect(() => {
    if (query) {
      // Fetch search results from the API
      const fetchResults = async () => {
        setLoading(true);
        try {
          const response = await fetch(`/api/search?query=${query}`);
          const data = await response.json();
          setResults(data);

          setSearchTerm(query);
        } catch (error) {
          console.error("Error fetching movies:", error);
        } finally {
          setLoading(false); // Set loading to false after fetching is complete
        }
      };

      fetchResults();
    }
  }, [query]);

  return (
    <div className="mt-[100px] min-h-[70vh]">
      <form onSubmit={handleSearch} className="flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies..."
          className="border border-gray-300 rounded-md p-2  text-black"
        />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2 flex items-center"
        >
          <FaSearch/> &nbsp; Search
        </button>
      </form>

      <h1 className="text-center mt-5 mb-6">
         Search Results for: <b>{query}</b>
      </h1>

      {loading ? (
        <div className="text-center mt-4 text-black">
          <Spinner />
        </div>
      ) : results.length < 1 ? (
        <div className="text-center mt-4 text-gray-500">
          <p>No results found. Please try a different search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto">
          {results.map((movie) => (
            <Link href={`/movies/${movie.id}`} key={movie.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-red-600 mb-4">
                    {movie.title}
                  </h2>
                  <p className="text-gray-700">{movie.overview}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-yellow-500">
                      {movie.vote_average} ★
                    </span>
                    <span className="text-gray-500">
                      {new Date(movie.release_date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const SearchPage = () => {
    return (
      <Suspense fallback={<div>Loading search results...</div>}>
        <SearchResultsPage />
      </Suspense>
    );
  };
  
  export default SearchPage;
