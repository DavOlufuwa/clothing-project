/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import '../../styles/categories.styles.scss';

const CategoryItem = ({title, imageUrl}) => {

  const navigate = useNavigate();

  return (
    <div className="category-home-container" onClick={() => navigate(`/shop/${title}`)}>
    <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}>
    </div>
    
    <div className="body">
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
  )
}

export default CategoryItem