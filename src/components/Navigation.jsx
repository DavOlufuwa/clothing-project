// import navigation styles
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import CrownLogo from '../resources/crown.svg';
import '../styles/navigation.styles.scss';
import { signOutUser } from '../utilities/firebase';

const Navigation = () => {
  
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();

    setCurrentUser(null);
    
  }

  
  
  return (
    <div className="navigation">
      <Link to="/" className='logo-container'>
        <div>
          <img src={CrownLogo} alt="logo" className='logo'/>
        </div>
      </Link>
      <div className="nav-links-container">
        {
          currentUser ? (
            <span to="/" className='nav-link' onClick={signOutHandler}>
              Sign Out
            </span>
          ) :
          (
            <Link to="authentication" className='nav-link'>
              Sign In
            </Link>
          )
        }
        <Link to="recovery" className='nav-link'>
          Recover Password
        </Link>
      </div> 
    </div>
  )
}

export default Navigation