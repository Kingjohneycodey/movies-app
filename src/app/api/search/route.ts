// /app/api/movies/search/route.ts
import { NextResponse } from 'next/server';

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yjk4ZTg1NTY2NmRiZDhmM2Q5MWM1OWZmMTMzNGI1MCIsIm5iZiI6MTcyODc1MDA2MS44Mjg5NzMsInN1YiI6IjY3MGFhMGFkYjE1ZDk3YjFhOTNjMTc1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d94rYHS86avsUkfxe8QBh1Q01b0th9xHVDHTlNi3i-0"


const searchMovies = async (query: string) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`, options
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data from TMDB');
  }

  const data = await res.json();
  return data.results;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ message: 'Query is required' }, { status: 400 });
  }

  try {
    const results = await searchMovies(query);
    return NextResponse.json(results);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
