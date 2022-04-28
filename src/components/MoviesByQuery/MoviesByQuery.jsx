import { Link } from 'react-router-dom';

export default function MoviesByQuery({ movies }) {
  return (
    <ul>
      {movies.map(({ id, title, img, vote_average }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>
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
