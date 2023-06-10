// import navigation styles
import { Link } from 'react-router-dom';
import CrownLogo from '../../resources/crown.svg';
import '../../styles/navigation.styles.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/" className='logo-container'>
        <div>
          <img src={CrownLogo} alt="logo" className='logo'/>
        </div>
      </Link>
      <div className="nav-links-container">
        <Link to="sign-in" className='nav-link'>
          Sign In
        </Link>
      </div> 
    </div>
  )
}

export default Navigation