import UseFetchCast from 'hooks/UseFetchCast';
import CastList from 'components/CastList';

export default function Cast() {
  const cast = UseFetchCast();

  return (
    <>
      {cast === null || cast.length === 0 ? (
        <p>There is no cast to this movie</p>
      ) : (
        <CastList cast={cast} />
      )}
    </>
  );
}
