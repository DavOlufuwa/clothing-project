import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CheckoutItem = ({checkOutItem}) => {
  const {name, price, quantity, imageUrl} = checkOutItem 

  const {addItemToCart, removeItemFromCart, deleteItemFromCart} = useContext(CartContext)

  const totalPrice = price * quantity;

  return (
    <div>
      <img src={imageUrl} alt={`${name}`}/>
      <div>
        <span onClick={() => removeItemFromCart(checkOutItem)} > Decrement </span>
        <span>{quantity}</span>
        <span onClick={() => addItemToCart(checkOutItem)}> Increment </span>
      </div>
      <div>{totalPrice}</div>
      <button onClick={() => deleteItemFromCart(checkOutItem)}>remove</button>
    </div>
  )
}

export default CheckoutItem