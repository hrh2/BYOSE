import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/index.css'
import {InputProvider} from "./context/InputContext.jsx";
import {PopupProvider} from "./context/PopupContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <PopupProvider>
        <InputProvider>
            <App />
        </InputProvider>
      </PopupProvider>
  </React.StrictMode>,
)
