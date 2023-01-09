import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import useStore from "../libs/store/useStore";
import { CheckBox } from "../types";
import { DESCRIPTION, TITLE } from "../libs/config/constants";
import SelectionBody from "../components/SelectionBody";
import SelectionFooter from "../components/SelectionFooter";
import SelectionHeader from "../components/SelectionHeader";

function ItemSelectionPage() {
  const items = useStore((state) => state.items);
  const navigate = useNavigate();
  const setSelectionItems = useStore((state) => state.setSelectionItems);
  const [checkedArr, setCheckedArr] = useState<CheckBox>([]);
  const [isCompleted, setISCompleted] = useState(false);
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
      setSelectionItems(checkedArr);
      navigate("/");
    }
  }, [isCompleted]);

  return (
    <ItemSelectionContainer>
      <SelectionHeader title={TITLE.ITEM} />
      <SelectionBody data={items} onChange={handleChange} />
      <SelectionFooter onSubmit={handleSubmit} description={DESCRIPTION.ITEM} />
    </ItemSelectionContainer>
  );
}

const ItemSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default ItemSelectionPage;
