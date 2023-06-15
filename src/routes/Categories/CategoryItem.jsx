/* eslint-disable react/prop-types */
import '../../styles/categories.styles.scss';

const CategoryItem = ({title, imageUrl}) => {
  return (
    <div className="category-home-container">
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