/* eslint-disable react/prop-types */
import { enqueueSnackbar } from "notistack";
import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // if the product exists in the cart array
  const existingProduct = cartItems.find((item)=> item.id === productToAdd.id)

  // YES! product already exists in the cart array
  if(existingProduct){
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id 
    ? {...cartItem, quantity: cartItem.quantity + 1}
    : cartItem
    )
  }
  enqueueSnackbar(`${productToAdd.name} has been added to the cart`, {variant: "info", autoHideDuration: 3000})


  // if the product does not exist in the array do this
  return [...cartItems, {...productToAdd, quantity: 1}]
}


const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

  // check if quantity is equal to 1, if it is remove that item from the cart
  if(existingCartItem.quantity === 1){
    enqueueSnackbar(`${cartItemToRemove.name} has been removed from the  cart`, {variant: "error", autoHideDuration: 3000})
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  // return back cartItems with matching cart item with reduced quantity
  return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id 
  ? {...cartItem, quantity: cartItem.quantity - 1}
  : cartItem
  )
}

const deleteCartItem = (cartItems, cartItemToRemove) => {
  enqueueSnackbar(`${cartItemToRemove.name} has been removed from the  cart`, {variant: "error", autoHideDuration: 3000})
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  addItemToCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  
})

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [favorites, setFavorites] = useState([])
    
  useEffect(() => {
    const newTotalQuantity = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setTotalQuantity(newTotalQuantity)

    
  }, [cartItems])
  
  useEffect(() => {

    const newTotalPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    setTotalPrice(newTotalPrice)
    
  }, [cartItems])


  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  }

  const deleteItemFromCart = (cartItemToRemove) => {
    setCartItems(deleteCartItem(cartItems, cartItemToRemove));
  }

  const values = { 
    cartItems, 
    setCartItems, 
    isCartOpen, 
    setIsCartOpen, 
    addItemToCart, 
    totalQuantity, 
    removeItemFromCart, 
    deleteItemFromCart, 
    totalPrice
  }

  return (
    <CartContext.Provider value={values}>{children}</CartContext.Provider>
  )
}