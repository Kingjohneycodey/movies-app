'use client'; // Enable client-side rendering

import { useEffect, useState } from 'react';

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    genre_ids: number[];
    vote_average: number;
  }
  

const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 27, name: 'Horror' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number>(28); // Default genre: Action

  const fetchMovies = async (genre: number) => {
    try {
      const response = await fetch(`/api/movies/${genre}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      setMovies(data.results); // Assuming the data has a "results" array
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies(selectedGenre); // Fetch movies whenever the selected genre changes
  }, [selectedGenre]);

  return (
    <div>
      <h1 className='text-3xl text-black'>Popular Movies</h1>
   
      <div className="overflow-x-scroll mb-4  w-[95%] mx-auto">
        <div className="flex space-x-4 min-w-max">
          {genres.map((genre) => (
            <button
              key={genre.id}
              className={`px-4 py-2 cursor-pointer rounded-full w-full ${selectedGenre === genre.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} whitespace-nowrap`}
              onClick={() => setSelectedGenre(genre.id)}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>


       {/* Movie Cards */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[95%] mx-auto">
        {movies.filter(movie => !selectedGenre || movie.genre_ids.includes(selectedGenre)).map(movie => (
          <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              <p className="text-gray-700">{movie.overview}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-yellow-500">{movie.vote_average} ★</span>
                <span className="text-gray-500">{new Date(movie.release_date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
