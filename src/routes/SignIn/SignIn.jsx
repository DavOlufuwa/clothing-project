import {createUserDocFromAuth, signInWithGooglePopup,  } from "../../utilities/firebase"
import SignUp from "../SignUp/SignUp";



const SignIn = () => {

  // useEffect(() => {
  //   (
  //     async () => {
  //       const response = await getRedirectResult(auth);
  //       console.log(response);
  //       if(response) {
  //         const userDocRef = await createUserDocFromAuth(response.user);
  //       }
  //     }
      
  //   )()
  // }, [])


  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  }
  
  // const logGoogleRedirectUser = async () => {
  //   const {user} = await signInWithGoogleRedirect() 
  //   console.log(user);
  // }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      {/* <button onClick={logGoogleRedirectUser}>Sign in with Redirect</button> */}
      <SignUp />
    </div>
  )
}

export default SignIn