import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ movies }) {
  const location = useLocation();
  const stateData = {
    backLocation: location,
  };

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={stateData}>
            {movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
