import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { 
  Container,
  ProductArea,
  ProductPhoto,
  ProductInfoArea,
  ProductDetails,
  ProductQuantityArea,
  ProductButtons,
  ProductName,
  ProductIngredients,
  ProductButton,
  ProductQuantity,
  ProductQtImage,
  ProductQtText,
  ProductPrice,

 } from './styled';

export default ({ data, setStatus }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    setQuantity(1);
  }, [data])

  const handleCancelButton = () => {
    setStatus(false);
  }

  const handleDecreaseQt = () => {
   if(quantity > 1) {
     setQuantity( quantity - 1);
   }
  }

  const handleIncreaseQt = () => {
    setQuantity(quantity + 1);
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: { data, quantity }
    });
    setStatus(false);
  }

  return(
    <Container>
      <ProductArea>
        <ProductPhoto src={ data.image }/>
        <ProductInfoArea>
          <ProductDetails>
            <ProductName>{ data.name }</ProductName>
            <ProductIngredients>{ data.ingredients }</ProductIngredients>
          </ProductDetails>
          <ProductQuantityArea>
            <ProductQuantity>
              <ProductQtImage src="/assets/minus.png" onClick={ handleDecreaseQt }/>
              <ProductQtText> { quantity } </ProductQtText>
              <ProductQtImage src="/assets/plus.png" onClick={ handleIncreaseQt } />
            </ProductQuantity>
            <ProductPrice> R$ { (data.price * quantity).toFixed(2) }</ProductPrice>
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>
      <ProductButtons>
        <ProductButton small={ true } onClick={ handleCancelButton }>Cancelar</ProductButton>
        <ProductButton onClick={ handleAddToCart }>Adicionar ao carrinho</ProductButton>
      </ProductButtons>
    </Container>
  );
}