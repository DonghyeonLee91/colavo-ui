import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

import { CartItemProps } from "../types";
import { THEME } from "../libs/config/constants";
import useStore from "../libs/store/useStore";

function CartItem({ id, name, price, count }: CartItemProps) {
  const [quantity, setQuantity] = useState(count);
  const SetItemsCounts = useStore((state) => state.setItemsCounts);
  const setDeleteItem = useStore((state) => state.setDeleteItem);
  const handleMinus = () => {
    if (quantity < 2) return;
    setQuantity(quantity - 1);
  };
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleDelete = () => setDeleteItem(id);

  useEffect(() => {
    SetItemsCounts(id, quantity);
  }, [quantity, id, SetItemsCounts]);

  return (
    <ItemContainer>
      <ItemDescription>
        <p>{name}</p>
        <p>{price * quantity}원</p>
      </ItemDescription>
      <ItemController>
        <MinusIcon onClick={handleMinus} />
        <span>{quantity}</span>
        <PlusIcon onClick={handlePlus} />
        <DeleteIcon onClick={handleDelete} />
      </ItemController>
    </ItemContainer>
  );
}

const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  background-color: ${THEME.WHITE};
`;

const ItemDescription = styled.div`
  background-color: ${THEME.WHITE};
  p {
    background-color: ${THEME.WHITE};
  }
`;

const ItemController = styled.div`
  display: flex;
  align-items: center;
  background-color: ${THEME.WHITE};
  span {
    font-size: 1.5rem;
    background-color: ${THEME.WHITE};
  }
`;

const MinusIcon = styled(AiOutlineMinusSquare)`
  font-size: 1.5rem;
  background-color: ${THEME.WHITE};
  cursor: pointer;
`;

const PlusIcon = styled(AiOutlinePlusSquare)`
  font-size: 1.5rem;
  background-color: ${THEME.WHITE};
  cursor: pointer;
`;

const DeleteIcon = styled(RiDeleteBin5Fill)`
  font-size: 1.5rem;
  background-color: ${THEME.WHITE};
  cursor: pointer;
`;

export default CartItem;
