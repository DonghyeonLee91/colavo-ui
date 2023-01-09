import React from "react";

import styled from "styled-components";

import { THEME } from "../libs/config/constants";
import CartBody from "../components/CartBody";
import CartHeader from "../components/CartHeader";
import CartFooter from "../components/CartFooter";

function CartPage() {
  return (
    <CartContainer>
      <CartHeader />
      <CartBody />
      <CartFooter />
    </CartContainer>
  );
}

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${THEME.BACKGROUND};
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
`;

export default CartPage;
