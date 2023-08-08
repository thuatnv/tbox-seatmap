<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { SeatMapComponent } from './SeatMap/SeatMapComponent';
// import './index.css'
=======
import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./Andrew/globalStyles";
import App from "./Andrew/App";
>>>>>>> c394f6d (feat: render type-safe raw implement of Seatmap)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<<<<<<< HEAD
    <SeatMapComponent
      viewType='miniMap'
      wheeLable={true}

    />
  </React.StrictMode>,
)
=======
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
>>>>>>> c394f6d (feat: render type-safe raw implement of Seatmap)
