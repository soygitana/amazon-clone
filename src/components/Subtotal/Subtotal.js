import React from "react";
import { Wrapper, CheckoutButton } from "../Subtotal/Subtotal.styles";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <Wrapper>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong> {value}</strong>
            </p>
            <small>
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <CheckoutButton>Proceed to Checkout</CheckoutButton>
    </Wrapper>
  );
};

export default Subtotal;
