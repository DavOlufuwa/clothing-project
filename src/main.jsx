import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProductsProvider } from './context/productsContext.jsx'
import { UserProvider } from './context/UserContext.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>,
)
