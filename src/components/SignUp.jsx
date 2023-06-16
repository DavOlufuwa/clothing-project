import { useState } from "react";
import FormInput from "./FormInput";
import {  createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../utilities/firebase";
import '../styles/sign-up-form.styles.scss';
import Button from "./Button";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
// import { redirect } from "react-router-dom";
// import { UserContext } from "../context/UserContext";
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}



const SignUp = () => {

  // getting the URL path from router

  const navigate = useNavigate();

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
      
      enqueueSnackbar("Account created successfully", {
        variant: "success",
      })

      navigate(-1);

      
    } catch (error) {

      // run it as a switch case
      switch(error.code){
        case "auth/email-already-in-use":
          enqueueSnackbar("Sorry that email is already in use", {
            variant: "error",
            autoHideDuration: 5000
          })
          break;
        case "auth/weak-password":
          enqueueSnackbar("Password must be at least 6 characters", {
            variant: "error",
            autoHideDuration: 5000
          })
          break;
        default:
          enqueueSnackbar("sorry, there was an error creating your account", {
            variant: "error",
            autoHideDuration: 5000
          })
      }
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
          required
        />

        <FormInput 
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
        />        
        <FormInput 
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        />

        <FormInput 
          label="Confirm Password"
          name="confirmPassword"
          type="password" 
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp