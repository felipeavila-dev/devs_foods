import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { CartArea, CartHeader, CartIcon, CartText, CartBody,
  ProductsArea, ProductItem, ProductPhoto, ProductInfoArea, ProductName,
  ProductPrice, ProductQuantityArea, ProductQtIcon, ProductQtText } from './styled';

export default () => {
  const products = useSelector(state => state.cart.products);
  const [show, setShow] = useState(false);
  const dispatch =useDispatch();

  const handleCartClick = () => {
    setShow(!show);
  }

  const handleProductChange = (key, type) => {
    dispatch({
      type: 'CHANGE_PRODUCT',
      payload: { key, type }
    });
  }

  return(
    <CartArea>
      <CartHeader onClick={ handleCartClick }>
        <CartIcon src="/assets/cart.png" />
        <CartText>Meu carrinho ({ products.length })</CartText>
      </CartHeader>
      <CartBody show={ show }>
        <ProductsArea>
          { products.map((item, index) => (
            <ProductItem key={ index }>
              <ProductPhoto src={ item.image } />
              <ProductInfoArea>
                <ProductName>{ item.name }</ProductName>
                <ProductPrice>R$ { (item.price).toFixed(2) }</ProductPrice>
              </ProductInfoArea>
              <ProductQuantityArea>
                <ProductQtIcon onClick={() => handleProductChange(index, '-')}> - </ProductQtIcon>
                <ProductQtText>{ item.quantity }</ProductQtText>
                <ProductQtIcon onClick={() => handleProductChange(index, '+')}> + </ProductQtIcon>
              </ProductQuantityArea>
            </ProductItem>
          ))}
        </ProductsArea>
      </CartBody>
    </CartArea>
  );
}