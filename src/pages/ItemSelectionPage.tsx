import React, { useState } from "react";
import styled from "styled-components";

import useStore from "../libs/store/useStore";
import { CheckBox } from "../types";
import SelectionBody from "../components/SelectionBody";
import SelectionFooter from "../components/SelectionFooter";
import SelectionHeader from "../components/SelectionHeader";

function ItemSelectionPage() {
  const items = useStore((state) => state.items);
  const [checkedArr, setCheckedArr] = useState<CheckBox>([]);
  const handleChange = (checked: boolean, id: string) => {
    if (checked) {
      setCheckedArr([...checkedArr, id]);
    } else {
      setCheckedArr(checkedArr.filter((el) => el !== id));
    }
  };

  return (
    <ItemSelectionContainer>
      <SelectionHeader />
      <SelectionBody data={items} onChange={handleChange} />
      <SelectionFooter />
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
