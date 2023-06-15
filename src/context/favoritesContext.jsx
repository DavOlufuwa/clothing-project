/* eslint-disable react/prop-types */
import { enqueueSnackbar } from "notistack";
import { createContext, useState } from "react";


const addFavorite = (favorites, productToFavorite = {}) => {

  const existingProduct = favorites.find((product) => product.id === productToFavorite.id)

  // if the product exists in the favorites array
  if(existingProduct){
    enqueueSnackbar(`${productToFavorite.name} already exists in favorites`, {variant: "info", autoHideDuration: 3000})
    return favorites;
  }

  enqueueSnackbar(`${productToFavorite.name} has been added to favorites`, {variant: "info", autoHideDuration: 2000})
  // if the product does not exist in the favorites array do this
  return [...favorites, productToFavorite];
}

const removeFavorite = (favorites, productToRemove) => {
  // find the product to remove
  enqueueSnackbar(`${productToRemove.name} has been removed from favorites`, {variant: "info", autoHideDuration: 2000})
  return favorites.filter((product) => product.id !== productToRemove.id)
}




export const FavoritesContext = createContext({
  favorites: [],
  setFavorites: () => null,
  addItemToFavorites: () => {},
  removeItemFromFavorites: () => {},
})

  


export const FavoritesProvider = ({ children }) => {
  
  const [favorites, setFavorites] = useState([]);
  
  const addItemToFavorites = (productToAdd) => {
    setFavorites(addFavorite(favorites, productToAdd));  
  }

  const removeItemFromFavorites = (productToRemove) => {
    setFavorites(removeFavorite(favorites, productToRemove));
  }

  const values = {
    favorites,
    setFavorites,
    addItemToFavorites,
    removeItemFromFavorites,
  }

  
  
  return (
    <FavoritesContext.Provider
      value={values}
    >
      {children}
    </FavoritesContext.Provider>
  )
}