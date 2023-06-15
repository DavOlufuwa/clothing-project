/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";
import '../styles/category-preview.styles.scss'
import Button from "./Button";


const CategoryPreview = ({title, products}) => {
  return (
    <div className="category-preview-container">
      <div className="preview-bar">
        <h2>
          <span className="title">{title.toUpperCase()}</span>
        </h2>
        <Button>See More</Button>
      </div>
      <div className="preview">
        {products.filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default CategoryPreview