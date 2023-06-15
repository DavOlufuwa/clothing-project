/* eslint-disable react/prop-types */
import Button from './Button';
import '../styles/product-card.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import FavoriteIcon from './FavoriteIcon';

const ProductCard = ({product}) => {
  
  const {addItemToCart} = useContext(CartContext);
  const {name, price, imageUrl} = product;

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      <FavoriteIcon />
      <img src={imageUrl} alt={`${name}`}/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price"> &#8358; {price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>
    </div>
  )
}

export default ProductCard