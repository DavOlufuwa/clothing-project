
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/cartContext.jsx'
import { CategoriesProvider } from './context/categoriesContext.jsx'
import { FavoritesProvider } from './context/favoritesContext.jsx'
import { UserProvider } from './context/UserContext.jsx'
import './index.scss'

UserProvider


ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>  
    <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <FavoritesProvider>
                <App />
              </FavoritesProvider>
            </CartProvider>
          </CategoriesProvider>
    </UserProvider>
  </React.StrictMode>,
)
