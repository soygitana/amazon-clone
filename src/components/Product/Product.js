import React from "react";
import { useStateValue } from "../../StateProvider";
import {
  ProductItem,
  StyledInfo,
  Title,
  Price,
  Stars,
  AddButton,
} from "../Product/Product.styles";

const Product = ({ id, title, image, price, rating }) => {

  const [{basket}, dispatch] = useStateValue();

const addToBasket = () => {
// dispatch the item into data layer
dispatch({
type: 'ADD_TO_BASKET',
item: {
id,
title,
image,
price,
rating
},
});
};

  return (
    <>
      <ProductItem>
        <StyledInfo>
          <Title>{title}</Title>
          <Price>
            <small>$</small>
            <strong>{price}</strong>
          </Price>
          <Stars>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </Stars>
        </StyledInfo>
        <img
          src={image}
          alt="image"
        />
        <AddButton onClick={addToBasket}>Add to Basket</AddButton>
      </ProductItem>
    </>
  );
};

export default Product;
