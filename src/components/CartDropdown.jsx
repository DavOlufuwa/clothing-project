import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import '../styles/cart-dropdown.styles.scss';
import Button from './Button';
import CartItem from './CartItem';


const CartDropdown = () => {
  const {isCartOpen, cartItems } = useContext(CartContext)
  
  return (
    <div className='cart-dropdown-container' style={{display: isCartOpen ? 'block' : 'none'}}>
      <div className='cart-items'>
        {
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item}/>
          ))
        }
      
      </div>
      <Link to='checkout'><Button>Go to checkout</Button></Link>
    </div>
  )
}

export default CartDropdown