import { initializeApp } from "firebase/app";
// import googlesignin, redirectsignin, auth, googleauth
import {  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
// import firestore
import { getFirestore, doc, setDoc, getDoc, collection, writeBatch } from "firebase/firestore";
import { enqueueSnackbar } from "notistack";




const firebaseConfig = {
  apiKey: "AIzaSyDG5KNDBGBWCcdldff8Rgg-R4Xei7OSUYk",
  authDomain: "crownapp-897ae.firebaseapp.com",
  projectId: "crownapp-897ae",
  storageBucket: "crownapp-897ae.appspot.com",
  messagingSenderId: "2205414900",
  appId: "1:2205414900:web:1d971eaea9dbb1650075a1"
};

const app = initializeApp(firebaseConfig);

// google provider
const googleProvider = new GoogleAuthProvider();





googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

// creating a user document after google signin authentication
export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  // check if user doc/data already exists
  if (!userSnapShot.exists()) {
    // if not, create the document and set it from the user auth into the collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    }catch(error) {
      console.log('error creating the user', error.message);
    }
  }
  // if it does, return the user doc
  return userDocRef;
}

// function to create user doc from emaiil and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

// function to signout user with Signout function
export const signOutUser = async () => {
  await signOut(auth);

  enqueueSnackbar('You have been signed out', {
    variant: 'success',
  })
}

// a method that allows us to upload categories from the shop data into firestore collections
// collection allows use to connect to a collection
// collection key is the name of the collection we are referring to
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  // a transaction is a word that represents a successful unit of work to a database
  // a unit of work might be multiple sets of operations(numerous writes)
}







// function to observe signIn and signOut states
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);



// function to reset existing account password from email
// export const sendAuthPasswordResetEmail = async (email) => {
//   if (!email) return;
//   return await sendPasswordResetEmail(auth, email);
// }
