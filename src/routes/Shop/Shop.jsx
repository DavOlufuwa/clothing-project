
import { Route, Routes } from 'react-router-dom';
import '../../styles/shop.styles.scss';
import Category from '../Category/Category';
import CategoryList from '../CategoryList/CategoryList';


const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoryList />} />
      <Route path=":category" element={<Category /> } />
    </Routes>
  )
}

export default Shop