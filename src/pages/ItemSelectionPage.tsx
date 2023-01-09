import React from "react";
import styled from "styled-components";

import ItemSelectionBody from "../components/ItemSelectionBody";
import ItemSelectionFooter from "../components/ItemSelectionFooter";
import ItemSelectionHeader from "../components/ItemSelectionHeader";

function ItemSelectionPage() {
  return (
    <ItemSelectionContainer>
      <ItemSelectionHeader />
      <ItemSelectionBody />
      <ItemSelectionFooter />
    </ItemSelectionContainer>
  );
}

const ItemSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default ItemSelectionPage;
