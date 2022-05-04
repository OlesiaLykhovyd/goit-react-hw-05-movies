import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieListStyled = styled.ul`
  list-style: none;
`;

export const MovieListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const MovieLink = styled(Link)`
  color: black;
  &:hover {
    color: skyblue;
  }
`;
