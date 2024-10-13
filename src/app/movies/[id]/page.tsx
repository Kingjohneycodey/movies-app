"use client";
import Spinner from "@/components/ui/Spinner";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: string | null;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Ensure that the id is available
    // if (!id) return;

    async function fetchMovie() {
      try {
        const response = await fetch(`/api/movie/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch movie");
        }

        const data = await response.json();

        console.log(data);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie by ID:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [id]);

  return (
    <div>
      {movie ? (
        <div className="mt-[100px] bg-white text-black min-h-[70vh]">
          {/* <div className='w-[90%] mx-auto p-10'>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        </div> */}

          <div className="max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
              {/* Movie Poster */}
              <div className="col-span-1">
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg shadow-lg"
                  />
                ) : (
                  <div className="bg-gray-300 h-96 rounded-lg"></div>
                )}
              </div>

              {/* Movie Details */}
              <div className="col-span-2 space-y-4 mt-8 md:mt-0">
                {/* Title and Tagline */}
                <h1 className="text-4xl font-bold">{movie.title}</h1>
                {movie.tagline && (
                  <h2 className="text-xl italic text-gray-600">
                    &quot;{movie.tagline}&quot;
                  </h2>
                )}

                {/* Overview */}
                <p className="text-lg text-gray-800">{movie.overview}</p>

                {/* Genres */}
                <div>
                  <h3 className="text-xl font-semibold">Genres:</h3>
                  <ul className="flex space-x-2 mt-2">
                    {movie.genres.map((genre) => (
                      <li
                        key={genre.id}
                        className="px-3 py-1 bg-gray-200 rounded-full text-gray-800"
                      >
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Movie Info */}
                <div className="space-y-2">
                  <p>
                    <strong>Release Date:</strong>{" "}
                    {new Date(movie.release_date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Duration:</strong> {movie.runtime} min
                  </p>
                  <p>
                    <strong>Rating:</strong> {movie.vote_average}/10 (
                    {movie.vote_count} votes)
                  </p>
                </div>

                {/* Production Companies */}
                <div>
                  <h3 className="text-xl font-semibold">
                    Production Companies:
                  </h3>
                  <ul className="flex space-x-4 mt-2">
                    {movie.production_companies.map((company) => (
                      <li key={company.id}>
                        {company.logo_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                            alt={company.name}
                            className="h-10"
                          />
                        ) : (
                          <span>{company.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Homepage Link */}
                {movie.homepage && (
                  <a
                    href={movie.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
                  >
                    Visit Official Website
                  </a>
                )}

<div>
<Link
                    href="/"
                    className="bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-700 inline-flex items-center"
                  >
                    <BiArrowBack/> Back to Home
                  </Link>
</div>

              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center  min-h-[80vh]">
         
         <div>
         <Spinner />
         </div>
        </div>
      )}
    </div>
  );
};

export default SingleMovie;
