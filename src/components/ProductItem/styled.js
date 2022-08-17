import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3); 
  padding: 15px;
  display: flex;
  align-items: center;
  color: #136713;
  cursor: pointer;

  &:hover {
    background-color: #cee5bc;
  }
`;

export const ProductPhotoArea = styled.div`
  width: 100px;
`;

export const ProductPhoto = styled.img`
  width: 100%;
`;

export const ProductInfoArea = styled.div`
  flex: 1;
  margin: 0px 10px;
`;

export const ProductButtonArea = styled.div``;

export const ProductName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const ProductPrice = styled.div`
  font-size: 14px;
`;

export const ProductIngredients = styled.div`
  font-size: 12px;
`;

export const ProductButton = styled.img`
  width: 15px;
`;
