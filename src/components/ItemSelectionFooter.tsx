import React from "react";
import styled from "styled-components";
import FooterButton from "./FooterButton";

function ItemSelectionFooter() {
  return (
    <FooterContainer>
      <h3>서비스를 선택하세요(여러개 선택 가능)</h3>
      <FooterButton name="완료" />
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 10vh;
  z-index: 1;
  background-color: white;
`;

export default ItemSelectionFooter;
