import React from "react";
import { SelectionProps } from "../types";

function SelectionBody({ data, onChange }: SelectionProps) {
  return (
    <ul>
      {Object.entries(data).map((data: any) => {
        return (
          <li key={data[0]}>
            <input
              type="checkbox"
              id={data[0]}
              name={data[1].name}
              onChange={(e) => onChange(e.target.checked, e.target.id)}
              value={data[0]}
            />
            <label htmlFor={data[0]}>
              {data[1].name}
              {data[1].rate && <p> {Math.floor(data[1].rate * 100)}%</p>}
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default SelectionBody;
