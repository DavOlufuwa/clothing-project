import { useState } from "react"
import Button from "./Button"
import FormInput from "./FormInput"

const ResetPassword = () => {

  const [recoveryEmail, setRecoveryEmail] = useState("")
  
 
  // function to check for email in firestore docs
  const handleSubmit = async (event) => {
    event.preventDefault()
    
    // try {
    //   await sendAuthPasswordResetEmail(recoveryEmail)

    // } catch (error) {
    //   console.error("Sorry there was an error", error.message)
    // }
  }


  return (
    <div>
      <h1>Reset Password</h1>
      <form>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={recoveryEmail}
          onChange={(e)=>setRecoveryEmail(e.target.value)}
        />
        <Button type="submit" onClick={handleSubmit} buttonType={"inverted"}>Confirm Email</Button>
      </form>
    </div>
    
  )
}

export default ResetPassword