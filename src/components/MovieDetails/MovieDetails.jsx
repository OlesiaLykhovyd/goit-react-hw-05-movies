import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';
import MovieCard from 'components/MovieCard';

export default function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    API.getMovieDetails(movieId).then(response => {
      const {
        poster_path,
        title,
        name,
        vote_average,
        overview,
        genres,
        backdrop_path,
        release_date,
      } = response;

      const movieDetails = {
        img: poster_path ?? backdrop_path,
        title: title ?? name,
        vote_average,
        overview,
        genres,
        release_date,
      };

      setMovie(movieDetails);
    });
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <MovieCard data={movie} />

          <p>Additional information</p>
          <p>
            <Link to={`cast`}>Cast</Link>
          </p>
          <p>
            <Link to={`reviews`}>Reviews</Link>
          </p>

          <Outlet />
        </>
      )}
    </>
  );
}
