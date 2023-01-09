import React from "react";
import styled from "styled-components";
import FooterButton from "./FooterButton";

function CartFooter() {
  return (
    <FooterContainer>
      <FooterButton name="다음" />
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 10vh;
  z-index: 1;
  background-color: white;
`;

export default CartFooter;
