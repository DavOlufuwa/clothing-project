import { useContext } from 'react';
import '../../styles/shop.styles.scss';
import ProductCard from '../../components/ProductCard';
import { ProductsContext } from '../../context/productsContext';

const Shop = () => {

  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {
        products.map((product) => (
          <ProductCard key={  product.id} product={product} />
        ))
      }
    </div>
  )
}

export default Shop