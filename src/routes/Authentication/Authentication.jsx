import SignIn from "../../components/SignIn"
import SignUp from "../../components/SignUp"
import '../../styles/authentication.styles.scss'


const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication


