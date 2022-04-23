// import { Link, useRouteMatch } from 'react-router-dom';
// import { matchRoutes } from 'react-router-dom';

export default function MovieList({ movies }) {
  // const match = matchRoutes();
  // console.log(match);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          {movie.name}
          {/* <Link>{movie.name}</Link> */}
        </li>
      ))}
    </ul>
  );
}
