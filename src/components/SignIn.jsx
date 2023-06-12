import { useState } from "react";

import { createUserDocFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../utilities/firebase";
import Button from "./Button";
import FormInput from "./FormInput";



const defaultFormFields = {
  email: '',
  password: '',
}


const SignIn = () => {


  const [formFields, setFormFields] = useState(defaultFormFields);

  // destructure form fields
  const { email, password } = formFields;
  
  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields()

    }
    catch (error) {

      // refactor to switch statement
      switch(error.code){
        case "auth/user-not-found":
          console.log(`The account at ${email} does not exist, please create an account`);
          break;
        case "auth/wrong-password":
          console.log("Incorrect Password for Email");
          break;
        default:
          console.log("sorry, there was an error", error.message);
      }
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value})
  }


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

  // const logGoogleRedirectUser = async () => {
  //   const {user} = await signInWithGoogleRedirect() 
  //   console.log(user);
  // }

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit"  onClick={()=>{}}>Sign in</Button>

          <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign in</Button>
        </div>
      </form>
      {/* <button onClick={logGoogleRedirectUser}>Sign in with Redirect</button> */}
      
    </div>
  )
}

export default SignIn