import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 15px;
`;

export const Titulo = styled.h1``;

export const CategoryArea = styled.div`
  color: white;
  margin-top: 20px;
`;

export const CategoryList = styled.div`
  display: flex;
`;

export const ProductArea = styled.div`
  margin: 20px 0px;
`;


export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`;

export const ProductPaginationArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const ProductPaginationItem = styled.div`
  background-color: ${ props => props.active === props.current ? '#CCC' : 'white' };
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, .3);
  cursor: pointer;
  margin-right: 10px;
`;


