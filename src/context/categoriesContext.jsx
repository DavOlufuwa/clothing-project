/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utilities/firebase.js";


getCategoriesAndDocuments
export const CategoriesContext = createContext({
  // initialization with initial state
  categoriesMap: {},
  setCategoriesMap: () => null
});

export const CategoriesProvider = ({ children }) => {


  // actual values
  const [categoriesMap, setCategoriesMap] = useState({});
  // const [products, setProducts] = useState(SHOP_DATA);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
  }, [])


  const values = {
    categoriesMap,
    setCategoriesMap
  }

  return <CategoriesContext.Provider value={values}>{children}</CategoriesContext.Provider>
}