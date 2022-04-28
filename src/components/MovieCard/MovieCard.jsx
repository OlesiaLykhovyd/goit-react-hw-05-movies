export default function MovieCard({ data }) {
  const { img, title, vote_average, overview, genres, release_date } = data;

  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title} />
      <p>Vote average:</p>
      <p>{vote_average}</p>
      <p>Overview:</p>
      <p>{overview}</p>
      <p>Genres:</p>
      <p>{genres.map(el => el.name).join(', ')}</p>
      <p>Release date:</p>
      <p>{release_date}</p>
    </>
  );
}
