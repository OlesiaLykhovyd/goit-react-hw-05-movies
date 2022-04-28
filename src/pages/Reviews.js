import UseFetchReviews from 'hooks/UseFetchReviews';
import ReviewsList from 'components/ReviewsList';

export default function Reviews() {
  const reviews = UseFetchReviews();

  return (
    <>
      {reviews.length === 0 ? (
        <p>We don`t have any reviews for this movie</p>
      ) : (
        <ReviewsList reviews={reviews} />
      )}
    </>
  );
}
