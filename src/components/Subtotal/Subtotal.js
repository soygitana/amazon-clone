import React from "react";
import { Wrapper } from "../Subtotal/Subtotal.styles";
import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
  return (
    <Wrapper>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong>0</strong>
            </p>
            <small>
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </Wrapper>
  );
};

export default Subtotal;
