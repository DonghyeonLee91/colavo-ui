import React, { useEffect, useState } from "react";

import styled from "styled-components";

import useStore from "../libs/store/useStore";
import { CartDiscountProps } from "../types";
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
      <h3>{name}</h3>
      <p>{discountPrice}원</p>
      <p onClick={() => setIsOpen(true)}>수정</p>
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

const DiscountContainer = styled.div``;

export default CartDiscount;
