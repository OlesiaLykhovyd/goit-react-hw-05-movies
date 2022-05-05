// import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import * as API from '../services/api';
import MoviesByQuery from 'components/MoviesByQuery';

import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  let [searchParams] = useSearchParams({});
  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    API.getMovieByQuery(query).then(({ results }) => {
      const moviesArr = results.map(
        ({ id, original_title, poster_path, backdrop_path, vote_average }) => ({
          id,
          title: original_title,
          img: poster_path ?? backdrop_path,
          vote_average,
        })
      );
      setMovies(moviesArr);
    });
  }, [query]);

  return (
    <>
      <SearchForm />
      {movies && <MoviesByQuery movies={movies} />}

      <Outlet />
    </>
  );
}
