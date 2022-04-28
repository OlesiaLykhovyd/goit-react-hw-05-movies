import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList/MovieList';
import * as API from '../services/api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.getTrending().then(({ results }) => {
      const arrayOfMovies = results.map(({ name, title, id }) => ({
        name: name ?? title,
        id,
      }));
      setMovies(arrayOfMovies);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
}
