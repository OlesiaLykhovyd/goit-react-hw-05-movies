import PropTypes from 'prop-types';
import { ReviewList, Author } from './ReviewsList.styled';

export default function ReviewsList({ reviews }) {
  return (
    <ReviewList>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <Author>Author: </Author>
          <span>{author}</span>
          <p>{content}</p>
        </li>
      ))}
    </ReviewList>
  );
}

ReviewList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
