import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const QueryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: -5px;
`;

export const QueryListItem = styled.li`
  max-width: 200px;
  border: 1px solid skyblue;
  border-radius: 5px;
  margin: 10px;
`;

export const QueryImage = styled.img`
  max-width: 200px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: skyblue;
  }
`;

export const MovieInfo = styled.div`
  padding: 10px;
  font-size: 16px;
`;

// export const ActorsInfoTitle = styled.p`
//   font-weight: bold;
// `;
