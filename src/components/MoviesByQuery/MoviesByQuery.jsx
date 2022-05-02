import { Link, useLocation } from 'react-router-dom';

export default function MoviesByQuery({ movies }) {
  const location = useLocation();

  const stateData = {
    backLocation: location,
  };

  return (
    <ul>
      {movies.map(({ id, title, img, vote_average }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={stateData}>
              <h3>{title}</h3>
              <img
                width={100}
                src={`https://image.tmdb.org/t/p/w500/${img}`}
                alt={title}
              />
              <p>Vote average:</p>
              <p>{vote_average}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
