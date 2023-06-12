import { useState } from "react";
import FormInput from "./FormInput";
import {  createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../utilities/firebase";
import '../styles/sign-up-form.styles.scss';
import Button from "./Button";
// import { redirect } from "react-router-dom";
// import { UserContext } from "../context/UserContext";
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}



const SignUp = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);

  // const {setCurrentUser} = useContext(UserContext);

  // destructure form fields
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value})
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword){
      console.log("passwords do not match");
      return;
    }
    
    try {
      const {user} =  await createAuthUserWithEmailAndPassword(email, password)
      
      await createUserDocFromAuth(user, {displayName});

      resetFormFields();

    } catch (error) {
      if(error.code === "auth/email-already-in-use") {
        console.log("Cannot create user, email already in use");
      }
      else if(error.code === "auth/weak-password") {
        console.log("Password must be at least 6 characters");
      }
      console.error("Sorry there was an error", error.message)
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* display name, email, password, confirm password, all required */}
        
        <FormInput 
          label="Display Name"
          name="displayName"
          type="text"
          value={displayName}
          onChange={handleChange}
        />

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

        <FormInput 
          label="Confirm Password"
          name="confirmPassword"
          type="password" 
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp