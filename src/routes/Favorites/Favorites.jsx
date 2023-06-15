import { useContext } from "react";
import { FavoritesContext } from "../../context/favoritesContext";
import '../../styles/shop.styles.scss'
import FavoriteCard from "../../components/FavoriteCard";


const Favorites = () => {

  const { favorites } = useContext(FavoritesContext);
  
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