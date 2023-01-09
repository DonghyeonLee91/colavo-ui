import React from "react";

import { FaRegWindowClose } from "react-icons/fa";
import styled from "styled-components";

import { HeaderProps } from "../types";
import { THEME } from "../libs/config/constants";

function SelectionHeader({ title }: HeaderProps) {
  return (
    <HeaderContainer>
      <ExplainIcon />
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 0.1px solid ${THEME.LINE};
  background-color: white;
  width: 25%;
  height: 10vh;
  z-index: 1;
`;

const HeaderTitle = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  background-color: ${THEME.WHITE};
`;

const ExplainIcon = styled(FaRegWindowClose)`
  position: absolute;
  top: 30%;
  left: 2%;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default SelectionHeader;
