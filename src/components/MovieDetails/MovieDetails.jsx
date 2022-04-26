import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';

export default function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    API.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title ?? movie.name}
          />
          <div>Vote average:</div>
          <div>{movie.vote_average}</div>
          <div>Overview:</div>
          <div>{movie.overview}</div>
          <div>Genres:</div>
          <div>{movie.genres.map(el => el.name).join(', ')}</div>
        </>
      )}
    </>
  );
}
