import { createGlobalStyle } from "styled-components";
import "./assets/font.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }

  body {
    font: 16px "GmarketSansMedium";
  }
`;

export default GlobalStyle;
