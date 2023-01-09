import React, { useEffect } from "react";

import styled from "styled-components";

import useStore from "../libs/store/useStore";
import CartDiscount from "./CartDiscount";
import CartItem from "./CartItem";

function CartBody() {
  const items = useStore((state) => state.items);
  const discounts = useStore((state) => state.discounts);
  const selectionItems = useStore((state) => state.selectionItems);
  const itemsCounts = useStore((state) => state.itemsCounts);
  const selectionDiscounts = useStore((state) => state.selectionDiscounts);
  const setTotalPrice = useStore((state) => state.setTotalPrice);
  const discountItemsPriceList = useStore(
    (state) => state.discountItemsPriceList
  );
  const getTotalPrice =
    selectionItems.length &&
    selectionItems.reduce(
      (prev, current) =>
        prev + parseInt(items[current].price) * itemsCounts[current],
      0
    );
  const getTotalDiscountPrice =
    Object.keys(discountItemsPriceList).length &&
    Object.keys(discountItemsPriceList).reduce(
      (prev, current) => prev + parseInt(discountItemsPriceList[current]),
      0
    );

  useEffect(() => {
    setTotalPrice(getTotalPrice - getTotalDiscountPrice);
  }, [
    selectionItems,
    itemsCounts,
    getTotalPrice,
    setTotalPrice,
    getTotalDiscountPrice,
  ]);

  return (
    <BodyContainer>
      {selectionItems && (
        <ul>
          {selectionItems.map((item) => (
            <CartItem
              key={item}
              id={item}
              name={items[item].name}
              price={items[item].price}
              count={items[item].count}
            />
          ))}
        </ul>
      )}
      {selectionDiscounts && (
        <ul>
          {selectionDiscounts.map((discount) => (
            <CartDiscount
              key={discount}
              id={discount}
              name={discounts[discount].name}
              rate={discounts[discount].rate}
            />
          ))}
        </ul>
      )}
    </BodyContainer>
  );
}

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 50%;
  background-color: white;
`;

export default CartBody;
