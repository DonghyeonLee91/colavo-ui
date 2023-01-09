import React from "react";

import styled from "styled-components";

import { BUTTON_NAME } from "../libs/config/constants";
import FooterButton from "./FooterButton";

function CartFooter() {
  return (
    <FooterContainer>
      <FooterButton name={BUTTON_NAME.NEXT} />
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
