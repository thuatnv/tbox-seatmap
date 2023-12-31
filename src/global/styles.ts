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
    /* flex-direction: column; */
    gap: 1rem;
  }

  .dark-wrap {
    width: 100%;
    height: 100dvh;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: #fff;
    overflow: auto;
    padding: 0.5rem 0;

    .custom-border {
      border: 1px solid #2dc275;
      border-radius: 0.25rem;
      background-color: #a6a6b0;
    }

    .custom-btns {
      background-color: red;
    }
  }
`;

export default GlobalStyles;
