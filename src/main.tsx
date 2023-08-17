import React from "react";
import ReactDOM from "react-dom/client";

import SampleApp from "components/SampleApp";
import GlobalStyles from "global/styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SampleApp />
    <GlobalStyles />
  </React.StrictMode>
);
