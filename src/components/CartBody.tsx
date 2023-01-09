import React from "react";

import styled from "styled-components";

import useStore from "../libs/store/useStore";

function CartBody() {
  const items = useStore((state) => state.items);
  const discounts = useStore((state) => state.discounts);
  const selectionItems = useStore((state) => state.selectionItems);
  const selectionDiscounts = useStore((state) => state.selectionDiscounts);
  return (
    <BodyContainer>
      {selectionItems && (
        <ul>
          {selectionItems.map((item) => (
            <li key={item}>
              {items[item]?.name}
              <br />
              {items[item]?.price}원
            </li>
          ))}
        </ul>
      )}
    </BodyContainer>
  );
}

const BodyContainer = styled.div`
  display: flex;
  width: 30%;
  height: 50%;
  background-color: white;
`;

export default CartBody;
