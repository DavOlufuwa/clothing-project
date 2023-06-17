// import navigation styles
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import CrownLogo from '../resources/crown.svg';
import '../styles/navigation.styles.scss';
import { signOutUser } from '../utilities/firebase';
import CartDropdown from './CartDropdown';
import CartIcon from './CartIcon';


const Navigation = () => {
  
  const { currentUser} = useContext(UserContext);
  
  

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
            <span to="/" className='nav-link' onClick={signOutUser}>
              Sign Out
            </span>
          ) :
          (
            <Link to="authentication" className='nav-link'>
              Sign In
            </Link>
          )
        }
        <Link to="favorites" className='nav-link'>
          Favorites
        </Link>
        <Link to="shop" className='nav-link'>
          Shop
        </Link>
        <CartIcon/>
      </div> 
      <CartDropdown />
    </div>
  )
}

export default Navigation