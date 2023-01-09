import React from "react";

import styled from "styled-components";
import { FaRegWindowClose } from "react-icons/fa";

import HeaderButton from "./HeaderButton";
import { BUTTON_NAME } from "../libs/config/constants";

function CartHeader() {
  return (
    <HeaderContainer>
      <ExplainIcon />
      이동현
      <ButtonWrapper>
        <HeaderButton name={BUTTON_NAME.ITEM} />
        <HeaderButton name={BUTTON_NAME.DISCOUNT} />
      </ButtonWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 30%;
  height: 15vh;
  z-index: 1;
`;

const ExplainIcon = styled(FaRegWindowClose)`
  position: absolute;
  top: 30%;
  left: 2%;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ButtonWrapper = styled.div``;

export default CartHeader;
