import { useContext } from 'react'
import CheckoutItem from '../../components/CheckoutItem';
import { CartContext } from '../../context/cartContext'


const Checkout = () => {
  const {cartItems} = useContext(CartContext);
  
  return (
    <div>
      <h1>Checkout Page</h1>
      <div>
        {
          cartItems.map((item)=>(
            <CheckoutItem key={item.id} checkOutItem={item}/>
          ))
        }      
      </div>
    </div>
  )
}

export default Checkout