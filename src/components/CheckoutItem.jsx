import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const CheckoutItem = ({checkOutItem}) => {
  const {name, price, quantity, imageUrl} = checkOutItem 

  const {increaseQuantity} = useContext(UserContext)

  const totalPrice = price * quantity;

  return (
    <div>
      <img src={imageUrl} alt={`${name}`}/>
      <div>
        <span > minus </span>
        <span>{quantity}</span>
        <span onClick={increaseQuantity}> plus </span>
      </div>
      <div>{totalPrice}</div>
      <button>remove</button>
    </div>
  )
}

export default CheckoutItem