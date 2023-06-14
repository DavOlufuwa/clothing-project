/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../utilities/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  loggedIn: false,
  setLoggedIn: () => null
});

export const UserProvider = ({ children }) => {

  
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const value = {
    currentUser,
    setCurrentUser,
    loggedIn,
    setLoggedIn
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {

      setCurrentUser(user);
    })
    return unsubscribe;
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}