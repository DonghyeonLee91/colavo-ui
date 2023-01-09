import React from "react";

import styled from "styled-components";

import { BUTTON_NAME, CODE } from "../libs/config/constants";
import useStore from "../libs/store/useStore";
import FooterButton from "./FooterButton";

function CartFooter() {
  const totalPrice = useStore((state) => state.totalPrice);
  const exchangeRate = useStore((state) => state.exchangeRate);
  const currencyCode = useStore((state) => state.currencyCode);

  return (
    <FooterContainer>
      {(() => {
        switch (currencyCode) {
          case CODE.KRW:
            return `합계: ${totalPrice}원`;
          case CODE.USD:
            return `Total: $${Math.floor(totalPrice / exchangeRate)}`;
          default:
            return `합계: ${totalPrice}원`;
        }
      })()}
      <FooterButton name={BUTTON_NAME.NEXT} />
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 10vh;
  z-index: 1;
  background-color: white;
`;

export default CartFooter;
