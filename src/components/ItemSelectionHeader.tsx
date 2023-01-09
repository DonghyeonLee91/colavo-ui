import React from "react";
import styled from "styled-components";
import { FaRegWindowClose } from "react-icons/fa";

function ItemSelectionHeader() {
  return (
    <HeaderContainer>
      <ExplainIcon />
      <h1>시술메뉴</h1>
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

export default ItemSelectionHeader;
