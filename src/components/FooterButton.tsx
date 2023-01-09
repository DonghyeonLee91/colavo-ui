import React from "react";
import styled from "styled-components";

import { ButtonProps } from "../types";

function FooterButton({ name, onClick }: ButtonProps) {
  return <ButtonContainer onClick={onClick}>{name}</ButtonContainer>;
}

const ButtonContainer = styled.button`
  padding: 0.8rem 5rem;
  border: none;
  border-radius: 10px;
  font-size: 0.8rem;
  cursor: pointer;
`;

export default FooterButton;
