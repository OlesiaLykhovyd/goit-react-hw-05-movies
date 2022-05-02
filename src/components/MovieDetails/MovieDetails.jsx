import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';
import MovieCard from 'components/MovieCard';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backLocation = location?.state?.backLocation;

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
          <button
            type="button"
            onClick={() => navigate(backLocation?.pathname ?? '/')}
          >
            Go back
          </button>
          <div>
            <MovieCard data={movie} />

            <p>Additional information</p>
            <p>
              <Link to={`cast`} state={{ backLocation }}>
                Cast
              </Link>
            </p>
            <p>
              <Link to={`reviews`} state={{ backLocation }}>
                Reviews
              </Link>
            </p>
          </div>

          <Outlet />
        </>
      )}
    </>
  );
}
