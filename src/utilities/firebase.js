import { initializeApp } from "firebase/app";
// import googlesignin, redirectsignin, auth, googleauth
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
// import firestore
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDG5KNDBGBWCcdldff8Rgg-R4Xei7OSUYk",
  authDomain: "crownapp-897ae.firebaseapp.com",
  projectId: "crownapp-897ae",
  storageBucket: "crownapp-897ae.appspot.com",
  messagingSenderId: "2205414900",
  appId: "1:2205414900:web:1d971eaea9dbb1650075a1"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

// creating a user document after authentication
export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  // check if user doc/data already exists
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        // ...userAuth
      })
    }catch(error) {
      console.log('error creating the user', error.message);
    }
  }
  
  // if it does, return the user doc
  return userDocRef;
  // if not, create the document and set it from the user auth into the collection
}