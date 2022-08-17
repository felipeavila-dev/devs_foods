import styled from 'styled-components';

export const LinkArea = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${ props => props.active ? '#0B4D0B' : 'transparent' };
`;

export const LinkIcon = styled.img`
  width: 35px;
  height: 35px;
`;