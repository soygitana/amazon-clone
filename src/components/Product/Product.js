import React from "react";
import {
  ProductItem,
  StyledInfo,
  Title,
  Price,
  Stars,
  AddButton,
} from "../Product/Product.styles";

const Product = ({ id, title, image, price, rating }) => {
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
        <AddButton>Add to Basket</AddButton>
      </ProductItem>
    </>
  );
};

export default Product;
