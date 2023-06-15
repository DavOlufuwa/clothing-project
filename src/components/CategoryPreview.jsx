/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";
import '../styles/category-preview.styles.scss'
import Button from "./Button";
import { Link } from "react-router-dom";


const CategoryPreview = ({title, products}) => {
  

  return (
    <div className="category-preview-container">
      <div className="preview-bar">
        <h2>
          <span className="title">{title}</span>
        </h2>
        <Link
          to={`./${title}`}
        >
          <Button>
            See More
          </Button>
        </Link>
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