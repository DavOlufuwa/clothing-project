import { Outlet } from 'react-router-dom'
import Navigation from '../../components/Navigation'

const Home = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default Home