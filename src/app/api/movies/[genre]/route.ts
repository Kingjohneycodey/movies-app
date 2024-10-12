// app/api/movies/[genre]/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { genre: string } }) {
  const { genre } = params; // Get the dynamic genre from the URL
  const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yjk4ZTg1NTY2NmRiZDhmM2Q5MWM1OWZmMTMzNGI1MCIsIm5iZiI6MTcyODc1MDA2MS44Mjg5NzMsInN1YiI6IjY3MGFhMGFkYjE1ZDk3YjFhOTNjMTc1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d94rYHS86avsUkfxe8QBh1Q01b0th9xHVDHTlNi3i-0"

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`,
      options
    );

    // console.log(response)

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
