import UseFetchCast from 'hooks/UseFetchCast';
import CastList from 'components/CastList';

export default function Cast() {
  const cast = UseFetchCast();

  return (
    <>
      {!cast ? <p>There is no cast to this movie</p> : <CastList cast={cast} />}
    </>
  );
}
