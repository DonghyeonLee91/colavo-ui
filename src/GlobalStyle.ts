import { createGlobalStyle } from "styled-components";
import "./assets/font.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 16px "GmarketSansMedium";
    background-color: rgba(168, 163, 163, 0.2);
    list-style-type : none
  }
`;

export default GlobalStyle;
