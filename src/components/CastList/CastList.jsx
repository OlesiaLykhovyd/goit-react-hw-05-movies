import {
  CastingList,
  CastListItem,
  ActorImage,
  ActorsInfo,
  ActorsInfoTitle,
} from './CastList.styled';

export default function CastList({ cast }) {
  return (
    <CastingList>
      {cast.map(({ id, character, name, profile_path }) => (
        <CastListItem key={id}>
          <ActorImage
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={character}
          />
          <ActorsInfo>
            <ActorsInfoTitle>Actors name:</ActorsInfoTitle>
            <p>{name}</p>
            <ActorsInfoTitle>Character: </ActorsInfoTitle>
            <p>{character}</p>
          </ActorsInfo>
        </CastListItem>
      ))}
    </CastingList>
  );
}
