// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  
import { ExhibitorProvider } from './contexts/ExhibitorContext';
import { StallProvider } from './contexts/StallContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExhibitorProvider>
      <StallProvider>
        <App />
      </StallProvider>
    </ExhibitorProvider>
  </React.StrictMode>
);