import React from "react";

import styled from "styled-components";

import useStore from "../libs/store/useStore";
import { CartDiscountProps } from "../types";

function CartDiscount({ id, name, rate }: CartDiscountProps) {
  const totalPrice = useStore((state) => state.totalPrice);
  return (
    <DiscountContainer>
      <h3>{name}</h3>
      <p>{Math.floor(totalPrice * rate)}원</p>
    </DiscountContainer>
  );
}

const DiscountContainer = styled.div``;

export default CartDiscount;
