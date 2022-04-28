import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../services/api';

export default function UseFetchCast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    API.getMovieCast(movieId).then(({ cast }) => {
      const castArr = cast.map(({ id, character, profile_path, name }) => ({
        id,
        character,
        profile_path,
        name,
      }));
      return setCast(castArr);
    });
  }, [movieId]);

  return cast;
}
