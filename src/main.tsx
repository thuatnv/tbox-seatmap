import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { SeatMapComponent } from './SeatMap/SeatMapComponent';
// import './index.css'

// export default {SeatMap};
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SeatMapComponent
      viewType='miniMap'
      wheeLable={true}

    />
  </React.StrictMode>,
)
