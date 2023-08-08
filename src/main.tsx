import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./Andrew/globalStyles";
import App from "./Andrew/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
