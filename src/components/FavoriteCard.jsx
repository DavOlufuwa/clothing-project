/* eslint-disable react/prop-types */
import  { useContext } from 'react'
import Button from './Button'
import { CartContext } from '../contexts/cartContext';
import '../styles/favorite-card.styles.scss'
import FavoriteButton from './FavoriteButton';
import { FavoritesContext } from '../contexts/favoritesContext';

const FavoriteCard = ({favorite}) => {
  const {name, price, imageUrl,} = favorite;

  const {addItemToCart} = useContext(CartContext);
  const {removeItemFromFavorites} = useContext(FavoritesContext)

  return (
    <div className='favorite-card-container'>
      <FavoriteButton onClick={()=> removeItemFromFavorites(favorite)}>
        <span className='close'>&#10006;</span>
      </FavoriteButton>
      <img src={imageUrl} alt={`${name}`}/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price"> &#8358; {price}</span>
      </div>
      <Button buttonType='inverted' onClick={() => addItemToCart(favorite)}>Add to Cart</Button>
    </div>
  )
}

export default FavoriteCard