/* eslint-disable react/prop-types */
import  { useContext } from 'react'
import Button from './Button'
import { CartContext } from '../context/cartContext';
import '../styles/favorite-card.styles.scss'

const FavoriteCard = ({favorite}) => {
  const {name, price, imageUrl} = favorite;
  
  const {addItemToCart} = useContext(CartContext);
  
  return (
    <div className='favorite-card-container'>
      <img src={imageUrl} alt={`${name}`}/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price"> &#8358; {price}</span>
      </div>
      <Button buttonType='inverted' onClick={addItemToCart(favorite)}>Add to Cart</Button>
    </div>
  )
}

export default FavoriteCard