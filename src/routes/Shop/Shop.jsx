
import { Route, Routes } from 'react-router-dom';
import '../../styles/shop.styles.scss';
import CategoryList from '../CategoryList/CategoryList';


const Shop = () => {

  

  return (
    <Routes>
      <Route index element={<CategoryList />} />

    </Routes>
  )
}

export default Shop