import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MercadoPago } from './MercadoPago'
import { CartProvider } from './hooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <MercadoPago />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
)