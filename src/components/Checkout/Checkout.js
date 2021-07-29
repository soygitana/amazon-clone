import React from "react";
import {
  Wrapper,
  Banner,
  CheckoutLeft,
  CheckoutRight,
  Basket,
  Title
} from "../Checkout/Checkout.styles";
import Subtotal from "../Subtotal/Subtotal";

const Checkout = () => {
  return (
    <Wrapper>
      <CheckoutLeft>
        {" "}
        <div>
          <Banner />
        </div>


<Basket>
<Title>Your shopping basket</Title>

{/* <BasketItem/>
<BasketItem/>
<BasketItem/>
<BasketItem/> */}

</Basket>


      </CheckoutLeft>

      <CheckoutRight>
      <Subtotal/>
      </CheckoutRight>
    </Wrapper>
  );
};

export default Checkout;
