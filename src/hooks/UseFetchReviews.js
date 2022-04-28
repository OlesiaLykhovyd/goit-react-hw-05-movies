import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../services/api';

export default function UseFetchReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.getMovieReviews(movieId).then(({ results }) => {
      const reviewsArr = results.map(({ id, author, content }) => ({
        id,
        author,
        content,
      }));
      setReviews(reviewsArr);
    });
  }, [movieId]);

  return reviews;
}
