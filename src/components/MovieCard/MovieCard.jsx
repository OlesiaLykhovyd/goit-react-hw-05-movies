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
      <MovieImage src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title} />
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
