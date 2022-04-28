export default function CastList({ cast }) {
  return (
    <ul>
      {cast.map(({ id, character, name, profile_path }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={character}
          />
          <p>Actors name: {name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}
