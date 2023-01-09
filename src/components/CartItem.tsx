import React, { useEffect, useState } from "react";

import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

import { CartItemProps } from "../types";
import useStore from "../libs/store/useStore";

function CartItem({ id, name, price, count }: CartItemProps) {
  const [quantity, setQuantity] = useState(count);
  const SetItemsCounts = useStore((state) => state.setItemsCounts);

  const handleMinus = () => {
    if (quantity < 2) return;
    setQuantity(quantity - 1);
  };
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    SetItemsCounts(id, quantity);
  }, [quantity, id, SetItemsCounts]);

  return (
    <li>
      <div>
        <p>{name}</p>
        <p>{price * quantity}원</p>
      </div>
      <div>
        <AiOutlineMinusSquare onClick={handleMinus} />
        <span>{quantity}</span>
        <AiOutlinePlusSquare onClick={handlePlus} />
        <RiDeleteBin5Fill />
      </div>
    </li>
  );
}

export default CartItem;
