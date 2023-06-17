
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './contexts/cartContext.jsx'
import { CategoriesProvider } from './contexts/categoriesContext.jsx'
import { FavoritesProvider } from './contexts/favoritesContext.jsx'
import { UserProvider } from './contexts/tuserContext.jsx'
import './index.scss'




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
