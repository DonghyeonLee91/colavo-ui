import React, { useEffect, useState } from "react";

import styled from "styled-components";

import useStore from "../libs/store/useStore";
import { CartDiscountProps } from "../types";
import { THEME } from "../libs/config/constants";
import DiscountModal from "./DiscountModal";

function CartDiscount({ id, name, rate }: CartDiscountProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [discountItem, setDiscountItem] = useState("");
  const totalPrice = useStore((state) => state.totalPrice);
  const items = useStore((state) => state.items);
  const itemsCounts = useStore((state) => state.itemsCounts);
  const setDiscountItemsPriceList = useStore(
    (state) => state.setDiscountItemsPriceList
  );
  const discountPrice = !!discountItem
    ? Math.floor(items[discountItem].price * itemsCounts[discountItem] * rate)
    : Math.floor(totalPrice * rate);
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setDiscountItemsPriceList(id, discountPrice);
  }, [id, setDiscountItemsPriceList, discountPrice]);

  return (
    <DiscountContainer>
      <div>
        <h3>{name}</h3>
        <p>{discountPrice}원</p>
      </div>
      <Controller onClick={() => setIsOpen(true)}>수정</Controller>
      {isOpen && (
        <DiscountModal
          name={name}
          id={id}
          handleDiscountItem={setDiscountItem}
          closeModal={closeModal}
        />
      )}
    </DiscountContainer>
  );
}

const DiscountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  background-color: ${THEME.WHITE};
  h3,
  p {
    background-color: ${THEME.WHITE};
  }
`;

const Controller = styled.span`
  margin-right: 0.2rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default CartDiscount;
