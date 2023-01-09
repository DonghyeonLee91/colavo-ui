import React, { useState } from "react";
import styled from "styled-components";

import useStore from "../libs/store/useStore";
import { CheckBox } from "../types";
import SelectionBody from "../components/SelectionBody";
import SelectionFooter from "../components/SelectionFooter";
import SelectionHeader from "../components/SelectionHeader";

function DiscountSelectionPage() {
  const discounts = useStore((state) => state.discounts);
  const [checkedArr, setCheckedArr] = useState<CheckBox>([]);
  const handleChange = (checked: boolean, id: string) => {
    if (checked) {
      setCheckedArr([...checkedArr, id]);
    } else {
      setCheckedArr(checkedArr.filter((el) => el !== id));
    }
  };

  return (
    <DiscountSelectionContainer>
      <SelectionHeader />
      <SelectionBody data={discounts} onChange={handleChange} />
      <SelectionFooter />
    </DiscountSelectionContainer>
  );
}

const DiscountSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default DiscountSelectionPage;
