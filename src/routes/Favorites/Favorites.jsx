import { useContext } from "react";
import { FavoritesContext } from "../../context/favoritesContext";
import '../../styles/shop.styles.scss'
import FavoriteCard from "../../components/FavoriteCard";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";


const Favorites = () => {
  const navigate = useNavigate();

  const { favorites } = useContext(FavoritesContext);
  
  if (favorites.length === 0) return (
    <div className='checkout-container'>
      <div className='empty-cart'>
        YOU DO NOT HAVE ANY FAVORITES
      </div>
      <div>
        <Button onClick={() => navigate('/')}>Continue Shopping</Button>
      </div>
    </div>
  )


  return (
    <div className='favorites-container'>
      {
        favorites.map((fav) => (
          <FavoriteCard key={fav.id} favorite={fav} />
        ))
      }
    </div>
  )
}

export default Favorites