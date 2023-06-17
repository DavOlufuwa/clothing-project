import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../../components/ProductCard"
import { CategoriesContext } from "../../contexts/categoriesContext"
import "../../styles/category.styles.scss"



const Category = () => {
  
  const {category} = useParams()

  const {categoriesMap} = useContext( CategoriesContext )

  const [products, setProducts] = useState(categoriesMap[`${category}`])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])
  

  return (
    <>
      <h2>{category}</h2>
      <div className="category-container"> 
        {
          products &&
          products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default Category