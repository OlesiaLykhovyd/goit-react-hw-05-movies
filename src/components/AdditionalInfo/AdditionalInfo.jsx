import { NavigationLink } from './AdditionalInfo.styled';

export default function AdditionalInfo({ backLocation }) {
  return (
    <>
      <hr />
      <h4>Additional information</h4>
      <NavigationLink to={`cast`} state={{ backLocation }}>
        Cast
      </NavigationLink>
      <NavigationLink to={`reviews`} state={{ backLocation }}>
        Reviews
      </NavigationLink>
    </>
  );
}
