import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import '../styles/cart-dropdown.styles.scss';
import Button from './Button';


const CartDropdown = () => {
  const {isCartOpen} = useContext(CartContext)
  return (
    <div className='cart-dropdown-container' style={{display: isCartOpen ? 'block' : 'none'}}>
      <div className='cart-items'/>
      <Button>Go to checkout</Button>
    </div>
  )
}

export default CartDropdown