import { createGlobalStyle } from "styled-components";
import "./assets/font.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 16px "GmarketSansMedium";
  }
`;

export default GlobalStyle;
