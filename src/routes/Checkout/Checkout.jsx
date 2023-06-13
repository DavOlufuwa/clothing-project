import { useContext } from 'react'
import CheckoutItem from '../../components/CheckoutItem';
import { CartContext } from '../../context/cartContext'


const Checkout = () => {
  const {cartItems} = useContext(CartContext);
  
  return (
    <div>
      {
        cartItems.map((item)=>(
          <CheckoutItem key={item.id} checkOutItem={item}/>
        ))
      }      
    </div>
  )
}

export default Checkout