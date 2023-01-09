import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import useStore from "../libs/store/useStore";
import { CheckBox } from "../types";
import { DESCRIPTION, TITLE, THEME } from "../libs/config/constants";
import SelectionBody from "../components/SelectionBody";
import SelectionFooter from "../components/SelectionFooter";
import SelectionHeader from "../components/SelectionHeader";

function DiscountSelectionPage() {
  const discounts = useStore((state) => state.discounts);
  const navigate = useNavigate();
  const [checkedArr, setCheckedArr] = useState<CheckBox>([]);
  const [isCompleted, setISCompleted] = useState(false);
  const setSelectionDiscounts = useStore(
    (state) => state.setSelectionDiscounts
  );
  const handleChange = (checked: boolean, id: string) => {
    if (checked) {
      setCheckedArr([...checkedArr, id]);
    } else {
      setCheckedArr(checkedArr.filter((el) => el !== id));
    }
  };
  const handleSubmit = () => {
    setISCompleted(true);
  };

  useEffect(() => {
    if (isCompleted) {
      setSelectionDiscounts(checkedArr);
      navigate("/");
    }
  }, [isCompleted]);

  return (
    <DiscountSelectionContainer>
      <SelectionHeader title={TITLE.DISCOUNT} />
      <SelectionBody data={discounts} onChange={handleChange} />
      <SelectionFooter
        onSubmit={handleSubmit}
        description={DESCRIPTION.DISCOUNT}
      />
    </DiscountSelectionContainer>
  );
}

const DiscountSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${THEME.BACKGROUND};
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
`;

export default DiscountSelectionPage;
