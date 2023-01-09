import React from "react";

import styled from "styled-components";
import { FaRegWindowClose } from "react-icons/fa";

import HeaderButton from "./HeaderButton";
import { BUTTON_NAME, THEME } from "../libs/config/constants";

function CartHeader() {
  return (
    <HeaderContainer>
      <ExplainIcon />
      <HeaderTitle>이동현</HeaderTitle>
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
  border-bottom: 1px solid ${THEME.LINE};
  background-color: white;
  width: 25%;
  height: 14vh;
  z-index: 1;
`;

const HeaderTitle = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  background-color: ${THEME.WHITE};
`;

const ExplainIcon = styled(FaRegWindowClose)`
  position: absolute;
  top: 10%;
  left: 2%;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 50%;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${THEME.WHITE};
`;

export default CartHeader;
