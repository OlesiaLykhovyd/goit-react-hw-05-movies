import { useNavigate } from 'react-router-dom';
import { ButtonStyled } from './Button.styled';

export default function Button({ backLocation }) {
  const navigate = useNavigate();

  return (
    <ButtonStyled type="button" onClick={() => navigate(backLocation ?? '/')}>
      Go back
    </ButtonStyled>
  );
}
