import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import '../styles/cart-dropdown.styles.scss';
import Button from './Button';
import CartItem from './CartItem';
import { UserContext } from '../context/UserContext';
import { enqueueSnackbar } from 'notistack';


const CartDropdown = () => {

  const navigate = useNavigate();
  
  const {currentUser} = useContext(UserContext)

  const goToCheckOut = () => {
    // check if there is no User
    if(currentUser === null) {
      
      navigate("authentication");
      enqueueSnackbar("You must be logged in to checkout", {
        variant: "warning",
        autoHideDuration: 3000
      })
      setIsCartOpen(false)
    }
    else{
      navigate("checkout");
      setIsCartOpen(false)
    }
  }

  const {isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext)

  if (cartItems.length === 0) { return(
    <div className='cart-dropdown-container' style={{display: isCartOpen ? 'block' : 'none'}}>
      <div className='empty-cart'>
        Your cart is empty
      </div>
    </div>
    ) 
  }
  return (
    <div className='cart-dropdown-container' style={{display: isCartOpen ? 'block' : 'none'}}>
      <div className='cart-items'>
        {
          
          cartItems && cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item}/>
          ))
          
        }
      </div>
      <Button onClick={goToCheckOut}>Go to checkout</Button>
    </div>
  )
}

export default CartDropdown