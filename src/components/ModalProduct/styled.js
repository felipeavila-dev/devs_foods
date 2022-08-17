import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const ProductArea = styled.div`
  display: flex;
`;

export const ProductButtons = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: end;
  align-items: center;
 `;

export const ProductPhoto = styled.img`
  width: 310px;
  border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

export const ProductDetails = styled.div`

`;

export const ProductQuantityArea = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

export const ProductName = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const ProductIngredients = styled.div`
  font-size: 14px;
`;

export const ProductButton = styled.button`
  border-radius: 5px;
  border: 0;
  background-color: #073C07;
  color: white;
  box-shadow: 2px 2px 0 rgba(0, 0, 0, .2);
  font-size: ${ props => props.small ? '13px' : '22px' };
  font-weight: bold;
  padding: ${ props => props.small ? '5px 10px' : '10px 20px'};
  margin-left: 10px;
`;

export const ProductQuantity = styled.div`
  display: flex;
  background-color: #073C07;
  align-items: center;
  padding: 0 5px;
  border-radius: 5px;
`;

export const ProductQtImage = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const ProductQtText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 0px 5px;
`;

export const ProductPrice = styled.div`
  font-size: 25px;
  font-weight:bold;
`;