import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { MovieListStyled, MovieListItem, MovieLink } from './MovieList.styled';

export default function MovieList({ movies }) {
  const location = useLocation();
  const stateData = {
    backLocation: location,
  };

  return (
    <MovieListStyled>
      {movies.map(movie => (
        <MovieListItem key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={stateData}>
            {movie.name}
          </MovieLink>
        </MovieListItem>
      ))}
    </MovieListStyled>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
