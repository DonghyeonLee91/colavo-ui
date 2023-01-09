import React from "react";

import styled from "styled-components";

import { BUTTON_NAME, CODE, THEME } from "../libs/config/constants";
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

  return (
    <FooterContainer>
      {(() => {
        switch (currencyCode) {
          case CODE.KRW:
            return (
              <TotalPrice>
                합계: <p>{totalPrice - getTotalDiscountPrice}원</p>
              </TotalPrice>
            );
          case CODE.USD:
            return (
              <TotalPrice>
                Total:
                <p>
                  $
                  {Math.floor(
                    (totalPrice - getTotalDiscountPrice) / exchangeRate
                  )}
                </p>
              </TotalPrice>
            );
          default:
            return (
              <TotalPrice>
                합계: <p>{totalPrice - getTotalDiscountPrice}원</p>
              </TotalPrice>
            );
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
  width: 25%;
  height: 14vh;
  border-top: 1px solid ${THEME.LINE};
  background-color: ${THEME.WHITE};
`;

const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  font-size: 1rem;
  p {
    font-size: 1.5rem;
  }
`;

export default CartFooter;
