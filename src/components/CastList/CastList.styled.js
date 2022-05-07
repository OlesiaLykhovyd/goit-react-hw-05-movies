import styled from 'styled-components';

export const CastingList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: -5px;
`;

export const CastListItem = styled.li`
  max-width: 150px;
  border: 1px solid skyblue;
  border-radius: 5px;
  margin: 10px;
`;
export const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
`;
export const ActorImage = styled.img`
  max-width: 148px;
`;

export const ActorsInfo = styled.div`
  padding: 10px;
  font-size: 14px;
`;

export const ActorsInfoTitle = styled.p`
  font-weight: bold;
`;
