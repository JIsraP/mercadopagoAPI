import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MercadoPago } from './MercadoPago'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MercadoPago />
    </BrowserRouter>
  </React.StrictMode>,
)