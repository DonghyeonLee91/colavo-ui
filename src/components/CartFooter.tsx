import React from "react";

import styled from "styled-components";

import { BUTTON_NAME, CODE } from "../libs/config/constants";
import useStore from "../libs/store/useStore";
import FooterButton from "./FooterButton";

function CartFooter() {
  const totalPrice = useStore((state) => state.totalPrice);
  const exchangeRate = useStore((state) => state.exchangeRate);
  const currencyCode = useStore((state) => state.currencyCode);
  const discountItemsPriceList = useStore(
    (state) => state.discountItemsPriceList
  );
  const getTotalDiscountPrice =
    Object.keys(discountItemsPriceList).length &&
    Object.keys(discountItemsPriceList).reduce(
      (prev, current) => prev + parseInt(discountItemsPriceList[current]),
      0
    );
  console.log(getTotalDiscountPrice);
  return (
    <FooterContainer>
      {(() => {
        switch (currencyCode) {
          case CODE.KRW:
            return `합계: ${totalPrice - getTotalDiscountPrice}원`;
          case CODE.USD:
            return `Total: $${Math.floor(
              (totalPrice - getTotalDiscountPrice) / exchangeRate
            )}`;
          default:
            return `합계: ${totalPrice - getTotalDiscountPrice}원`;
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
