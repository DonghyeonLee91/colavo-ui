import React from "react";

import styled from "styled-components";

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
`;

export default CartPage;
