import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    min-height: 100%;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    overflow: auto;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
`;

export default GlobalStyles;
