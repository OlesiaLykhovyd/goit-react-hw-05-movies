import PropTypes from 'prop-types';
import noImage from '../../images/no-image-available.png';
import {
  CastingList,
  CastListItem,
  ImageBox,
  ActorImage,
  ActorsInfo,
  ActorsInfoTitle,
} from './CastList.styled';

export default function CastList({ cast }) {
  return (
    <CastingList>
      {cast.map(({ id, character, name, profile_path }) => (
        <CastListItem key={id}>
          <ImageBox>
            <ActorImage
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : noImage
              }
              alt={character}
            />
          </ImageBox>
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

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};
