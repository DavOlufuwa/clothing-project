/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import '../styles/checkout-item.styles.scss';

const CheckoutItem = ({checkOutItem}) => {
  const {name, price, quantity, imageUrl} = checkOutItem 

  const {addItemToCart, removeItemFromCart, deleteItemFromCart} = useContext(CartContext)

  const totalPrice = price * quantity;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`}/> 
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(checkOutItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(checkOutItem)}>
          &#10095;
        </div>
      </span>
      <span className="price"> &#8358; {totalPrice}</span>
      <div className="remove-button" onClick={() => deleteItemFromCart(checkOutItem)}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem