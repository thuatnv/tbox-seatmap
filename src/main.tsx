import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import SeatMap from './SeatMap';
import './index.css'

// export default {SeatMap};
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SeatMap
      viewType='section'
      wheeLable={true}

    />
  </React.StrictMode>,
)
