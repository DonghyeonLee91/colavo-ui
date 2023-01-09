import React from "react";

import styled from "styled-components";

import FooterButton from "./FooterButton";
import { SelectionFooterProps } from "../types";
import { BUTTON_NAME, THEME } from "../libs/config/constants";

function SelectionFooter({ onSubmit, description }: SelectionFooterProps) {
  return (
    <FooterContainer>
      <h3>{description}</h3>
      <FooterButton onClick={onSubmit} name={BUTTON_NAME.SUBMIT} />
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 10vh;
  z-index: 1;
  background-color: ${THEME.WHITE};
`;

export default SelectionFooter;
