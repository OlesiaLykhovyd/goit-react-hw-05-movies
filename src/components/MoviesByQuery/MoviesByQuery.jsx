import { useLocation } from 'react-router-dom';
import placeholder from '../../images/imdbnoimage.jpeg';
import {
  QueryList,
  QueryListItem,
  QueryImage,
  MovieLink,
  MovieInfo,
} from './MoviesByQuery.styled';

export default function MoviesByQuery({ movies }) {
  const location = useLocation();
  // console.log(location);

  const stateData = {
    backLocation: location,
  };

  return (
    <QueryList>
      {movies.map(({ id, title, img, vote_average }) => {
        return (
          <QueryListItem key={id}>
            <MovieLink to={`/movies/${id}`} state={stateData}>
              <QueryImage
                src={
                  img ? `https://image.tmdb.org/t/p/w500/${img}` : placeholder
                }
                alt={title}
              />
              <MovieInfo>
                <h3>{title}</h3>
                <p>Vote average: {vote_average}</p>
              </MovieInfo>
            </MovieLink>
          </QueryListItem>
        );
      })}
    </QueryList>
  );
}