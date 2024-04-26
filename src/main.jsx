import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TrilhasProvider } from './context/TrilhasContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrilhasProvider>
      <App />
    </TrilhasProvider>
  </React.StrictMode>,
)
