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

  button {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
  }

  button:hover {
    cursor: pointer;
  }

  .App {
    flex-direction: column;
    gap: 1rem;
  }

  .dark-container {
    width: 100%;
    height: 100dvh;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
`;

export default GlobalStyles;
