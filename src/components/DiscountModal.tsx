import React from "react";

import styled from "styled-components";

import useStore from "../libs/store/useStore";
import { THEME } from "../libs/config/constants";
import { ModalProps } from "../types";

function DiscountModal({
  name,
  id,
  handleDiscountItem,
  closeModal,
}: ModalProps) {
  const setDeleteDiscount = useStore((state) => state.setDeleteDiscount);
  const items = useStore((state) => state.items);
  const itemsCounts = useStore((state) => state.itemsCounts);
  const selectionItems = useStore((state) => state.selectionItems);
  const handleCheck = (target: HTMLInputElement) => {
    const items = document.getElementsByName("items") as any;
    for (let i = 0; i < items.length; i++) {
      if (items[i] !== target) {
        items[i].checked = false;
        handleDiscountItem("");
      }
    }
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked) {
        handleDiscountItem(target.id);
      }
    }
  };
  const handleDelete = () => {
    setDeleteDiscount(id);
  };

  return (
    <ModalContainer>
      <Title>{name}</Title>
      {selectionItems && (
        <SelectionContainer>
          {selectionItems.map((item) => (
            <SelectionItemWrapper key={item}>
              <label htmlFor={item}>
                {items[item].name} * {itemsCounts[item]}
                <br /> {Math.floor(items[item].price * itemsCounts[item])}원
              </label>
              <input
                type="checkbox"
                name="items"
                id={item}
                onChange={(e) => handleCheck(e.target)}
              />
            </SelectionItemWrapper>
          ))}
        </SelectionContainer>
      )}
      <ButtonContainer>
        <ModalButton onClick={handleDelete}>삭제</ModalButton>
        <ModalButton onClick={closeModal}>확인</ModalButton>
      </ButtonContainer>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 43%;
  width: 15vw;
  height: 30vh;
  border: 1px solid ${THEME.BLACK};
  border-radius: 5px;
  background-color: ${THEME.WHITE};
  box-shadow: 0 17px 20px -18px rgba(0, 0, 0, 1);
`;

const Title = styled.h1`
  font-size: 1.2rem;
  text-align: center;
  border-bottom: 1px solid ${THEME.LINE};
`;

const SelectionContainer = styled.div`
  margin: 2px 0;
  height: 60%;
  overflow: auto;
`;

const SelectionItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 20px;
  }
  input,
  label {
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid ${THEME.LINE};
  width: 100%;
  height: 27%;
`;

const ModalButton = styled.button`
  width: 100%;
  height: 100%;
  border: 0.3px solid ${THEME.LINE};
  border-bottom: 1px solid ${THEME.BLACK};
  background-color: ${THEME.WHITE};
  cursor: pointer;
`;

export default DiscountModal;
