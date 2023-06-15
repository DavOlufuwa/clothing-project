/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// import SHOP_DATA from '../resources/shop-data.js';
import SHOP_DATA from '../resources/shop-data.json';

export const ProductsContext = createContext({
  // initialization with initial state
  products: [],
  setProducts: () => null
});

export const ProductsProvider = ({ children }) => {

  // actual values
  // const [products, setProducts] = useState([SHOP_DATA]);
  const [products, setProducts] = useState(SHOP_DATA);

  const values = {
    products,
    setProducts
  }

  return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>
}