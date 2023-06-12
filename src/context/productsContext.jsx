/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

import PRODUCTS from '../resources/shop-data.json';

export const ProductsContext = createContext({
  // initialization with initial state
  products: [],
  setProducts: () => null
});

export const ProductsProvider = ({ children }) => {

  // actual values
  const [products, setProducts] = useState(PRODUCTS);

  const values = {
    products,
    setProducts
  }

  return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>
}