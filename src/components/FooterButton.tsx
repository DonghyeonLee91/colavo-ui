import React from "react";
import styled from "styled-components";

import { ButtonProps } from "../types";
import { THEME } from "../libs/config/constants";

function FooterButton({ name, onClick }: ButtonProps) {
  return <ButtonContainer onClick={onClick}>{name}</ButtonContainer>;
}

const ButtonContainer = styled.button`
  padding: 0.8rem 0.8rem;
  width: 100%;
  border: none;
  border-radius: 7px;
  font-size: 1.3rem;
  background-color: ${THEME.FOOTER_BUTTON};
  color: ${THEME.WHITE};
  cursor: pointer;
`;

export default FooterButton;
