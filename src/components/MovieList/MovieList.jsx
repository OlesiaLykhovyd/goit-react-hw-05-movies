import { Link } from 'react-router-dom';

export default function MovieList({ movies }) {
  // const match = useMatch();
  // console.log(match);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.name}</Link>
        </li>
      ))}
    </ul>
  );
}
