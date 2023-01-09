import React from "react";
import styled from "styled-components";

import { SelectionProps } from "../types";
import { THEME } from "../libs/config/constants";

function SelectionBody({ data, onChange }: SelectionProps) {
  return (
    <BodyContainer>
      {Object.entries(data).map((data: any) => {
        return (
          <ListContainer key={data[0]}>
            <label htmlFor={data[0]}>
              {data[1].name}
              {data[1].rate && <p> {Math.floor(data[1].rate * 100)}%</p>}
            </label>
            <input
              type="checkbox"
              id={data[0]}
              name={data[1].name}
              onChange={(e) => onChange(e.target.checked, e.target.id)}
              value={data[0]}
            />
          </ListContainer>
        );
      })}
    </BodyContainer>
  );
}

const BodyContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 50vh;
  overflow: auto;
  background-color: ${THEME.WHITE};
`;

const ListContainer = styled.li`
  margin: 2px 0;
  background-color: ${THEME.WHITE};
  input {
    width: 1rem;
    height: 1rem;
  }

  label {
    background-color: ${THEME.WHITE};
    font-size: 1.2rem;
  }
  p {
    background-color: ${THEME.WHITE};
  }
`;

export default SelectionBody;
