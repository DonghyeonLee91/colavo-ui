import React from "react";

import styled from "styled-components";

import useStore from "../libs/store/useStore";
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
      <h1>{name}</h1>
      {selectionItems && (
        <div>
          {selectionItems.map((item) => (
            <div key={item}>
              <input
                type="checkbox"
                name="items"
                id={item}
                onChange={(e) => handleCheck(e.target)}
              />
              <label htmlFor={item}>
                {items[item].name} * {itemsCounts[item]}
                <br /> {Math.floor(items[item].price * itemsCounts[item])}원
              </label>
            </div>
          ))}
        </div>
      )}
      <ButtonContainer>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={closeModal}>확인</button>
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
  margin: 0 auto;
  border: 1px solid #000000;
  background-color: rgba(168, 163, 163, 0.5);
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
`;

export default DiscountModal;
