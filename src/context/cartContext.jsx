/* eslint-disable react/prop-types */
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

  // if the product does not exist in the array do this
  return [...cartItems, {...productToAdd, quantity: 1}]
}



export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  addItemToCart: () => {},
  totalQuantity: 0,
  increaseQuantity: () => {},

})

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0)
  
  
  

 
  
  useEffect(() => {
    const newTotalQuantity = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setTotalQuantity(newTotalQuantity)
  }, [cartItems])

  const increaseQuantity = (productToAdd) => {
    productToAdd.quantity += 1;
  }
  

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, isCartOpen, setIsCartOpen, addItemToCart , totalQuantity, increaseQuantity}}>{children}</CartContext.Provider>
  )
}