import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./Andrew/helpers/globalStyles";
import App from "./Andrew/components/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
