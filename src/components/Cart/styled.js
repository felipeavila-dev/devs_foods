import styled from 'styled-components';

export const CartArea = styled.div`
  background-color: #136713;
  border-radius: 10px 10px 0px 0px; 
  position: fixed;
  bottom: 0;
  right: 30px;
`;

export const CartHeader = styled.div`
  height: 50px;
  display: flex;
  width: 290px;
  align-items: center;
  cursor: pointer;
`;

export const CartIcon = styled.img`
  width: 23px;
  height: 23px;
  margin: 0 10px;
`;

export const CartText = styled.div`
  color: white;
  font-size: 17px;
`;

export const CartBody = styled.div`
  display: ${ props => props.show ? 'block' : 'none'};
  color: white;
`;

export const ProductsArea = styled.div``;

export const ProductItem = styled.div`
  display: flex;
  margin: 10px;
`;

export const ProductPhoto = styled.img`
  width: 62px;
  height: auto;
  border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
  flex: 1;
  margin: 0px 10px;
`;

export const ProductName = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const ProductPrice = styled.div`
  font-size: 13px;
`;

export const ProductQuantityArea = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductQtIcon = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

export const ProductQtText = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin: 0px 5px;
`