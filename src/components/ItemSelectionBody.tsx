import React, { useState } from "react";
import useStore from "../libs/store/useStore";
import { CheckBox } from "../types";

function ItemSelectionBody() {
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
    <ul>
      {Object.entries(items).map((item: any) => {
        return (
          <li key={item[0]}>
            <input
              type="checkbox"
              id={item[0]}
              name={item[1].name}
              onChange={(e) => handleChange(e.target.checked, e.target.id)}
              value={item[0]}
            />
            <label htmlFor={item[0]}>{item[1].name}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default ItemSelectionBody;
