import { useContext } from 'react';
import '../../styles/shop.styles.scss';
// import ProductCard from '../../components/ProductCard';
import { CategoriesContext } from '../../context/categoriesContext';
import CategoryPreview from '../../components/CategoryPreview';
// import { ProductsContext } from '../../context/productsContext';

const Shop = () => {

  // const { products } = useContext(ProductsContext);
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <div className='shop-container'>
    {      
      Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        )
      }) 
    }
     
    </div>
  )
}

export default Shop