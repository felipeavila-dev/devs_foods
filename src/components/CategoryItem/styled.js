import styled from 'styled-components';

export const Container = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${ props => props.active === props.id ? "white" : "#b8cca9"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
`;

export const CategoryImage = styled.img`
  width: 53px;
  height: 53px;
`;