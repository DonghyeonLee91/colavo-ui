import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { BUTTON_NAME, THEME } from "../libs/config/constants";
import { ButtonProps } from "../types";

function HeaderButton({ name }: ButtonProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (name === BUTTON_NAME.ITEM) {
      navigate("/items");
    }
    if (name === BUTTON_NAME.DISCOUNT) {
      navigate("/discounts");
    }
  };

  return (
    <ButtonContainer
      onClick={handleClick}
      theme={name === BUTTON_NAME.ITEM ? THEME.LGRAY : THEME.LPINK}
    >
      {name}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  padding: 1rem 3.5rem;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  background-color: ${({ theme }) => theme};
  cursor: pointer;
`;

export default HeaderButton;
