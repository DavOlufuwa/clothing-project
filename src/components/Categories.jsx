import CategoryItem from './CategoryItem'
import categories from '../resources/categories.json'


const Categories = () => {
  return (
    <div className='categories-container'>
      {
        categories.map((category)=> (
          <CategoryItem key={category.id} {...category}/>
        ))
      }
    </div>
  )
}

export default Categories