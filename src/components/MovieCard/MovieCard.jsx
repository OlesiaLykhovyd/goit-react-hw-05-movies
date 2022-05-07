import PropTypes from 'prop-types';
import noPoster from '../../images/imdbnoimage.jpeg';

import {
  MovieInfo,
  MovieImage,
  MovieDetails,
  MovieInfoTitle,
} from './MovieCard.styled';

export default function MovieCard({ data }) {
  const { img, title, vote_average, overview, genres, release_date } = data;

  return (
    <MovieDetails>
      <MovieImage
        src={img ? `https://image.tmdb.org/t/p/w500/${img}` : noPoster}
        alt={title}
      />
      <MovieInfo>
        <MovieInfoTitle>Vote average:</MovieInfoTitle>
        <p>{vote_average}</p>
        <MovieInfoTitle>Overview:</MovieInfoTitle>
        <p>{overview}</p>
        <MovieInfoTitle>Genres:</MovieInfoTitle>
        <p>{genres.map(el => el.name).join(', ')}</p>
        <MovieInfoTitle>Release date:</MovieInfoTitle>
        <p>{release_date}</p>
      </MovieInfo>
    </MovieDetails>
  );
}

MovieCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object.isRequired),
  }),
};
