/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// import SHOP_DATA from '../resources/shop-data.js';
// import SHOP_DATA from '../resources/shop-data.json';
import { getCategoriesAndDocuments } from "../utilities/firebase.js";


getCategoriesAndDocuments
export const ProductsContext = createContext({
  // initialization with initial state
  products: [],
  setProducts: () => null
});

export const ProductsProvider = ({ children }) => {


  // actual values
  const [products, setProducts] = useState([]);
  // const [products, setProducts] = useState(SHOP_DATA);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      
      console.log(categoryMap);
    }

    getCategoriesMap();
  }, [])


  const values = {
    products,
    setProducts
  }

  return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>
}