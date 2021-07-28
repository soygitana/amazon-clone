import React from "react";
import {
    ProductItem,
    StyledInfo,
    Title,
    Price,
    Stars,
    AddButton
  } from "../Product/Product.styles";


const Product = () => {
  return (
<>
    <ProductItem>
<StyledInfo>
<Title>title</Title>
<Price>
    <small>$</small>
    <strong>price</strong>
    </Price>
<Stars>
    <p>⭐</p>
</Stars>



</StyledInfo>

<img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" alt=""/>

<AddButton>Add to Basket</AddButton>

    </ProductItem>
    </>
  );
};

export default Product;
