import { useContext } from "react";
import ProductCard from "../../components/ProductCard";
import { FavoritesContext } from "../../context/favoritesContext";
// import { ProductsContext } from "../../context/productsContext";
import '../../styles/shop.styles.scss'


const Favorites = () => {

  const { favorites } = useContext(FavoritesContext);
  
  return (
    <div className='products-container'>
      {
        favorites.map((favorite) => (
          <ProductCard key={favorite.id} product={favorite} />
        ))
      }
    </div>
  )
}

export default Favorites