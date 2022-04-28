// import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import * as API from '../services/api';
import MoviesByQuery from 'components/MoviesByQuery';

export default function Movies() {
  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchInput === '') {
      return;
    }
    API.getMovieByQuery(searchInput).then(({ results }) => {
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
  }, [searchInput]);

  const formSubmitHandler = data => {
    setSearchInput(data);
  };
  return (
    <>
      <SearchForm onSubmit={formSubmitHandler} />
      {/* <Route path={/movies?query={searchInput}}></Route> */}
      <MoviesByQuery movies={movies} />
      <Outlet />
    </>
  );
}
