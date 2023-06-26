import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import CheckoutItem from '../../components/CheckoutItem';
import PaymentForm from '../../components/PaymentForm';
import { CartContext } from '../../contexts/cartContext';
import '../../styles/checkout.styles.scss';


const Checkout = () => {

  const [modalOpen, setModalOpen] = useState(false);
  
  const navigate = useNavigate()
  
  const {cartItems, totalPrice} = useContext(CartContext);
  
  if (cartItems.length === 0) return (
      <div className='checkout-container'>
        <div className='empty-cart'>
          Your cart is empty
        </div>
        <div>
          <Button onClick={() => navigate('/')}>Continue Shopping</Button>
        </div>
      </div>
    )

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map((item)=>(
          <CheckoutItem key={item.id} checkOutItem={item}/>
        ))
    
      }
      <div className='checkout-footer'>
        <span className="total">Total: &#8358; {totalPrice}</span>
        <Button onClick={() => setModalOpen(true)}>Pay for Items</Button>      
      </div>
      <div className={`modal ${modalOpen && 'open'}`} >
        <PaymentForm modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      </div>
    </div>
  )
}

export default Checkout