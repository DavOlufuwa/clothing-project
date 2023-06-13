import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import cartIcon from '../resources/shopping-bag.svg'
import '../styles/cart-icon.styles.scss'


const CartIcon = () => {

  const {isCartOpen, setIsCartOpen, totalQuantity} = useContext(CartContext)

  return (
    <div className='cart-icon-container'
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <img src={cartIcon} alt='cart icon' className='shopping-icon'/>
      <span className='item-count'>{totalQuantity}</span>

    </div>
  )
}

export default CartIcon