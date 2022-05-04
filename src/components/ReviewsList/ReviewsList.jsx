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
