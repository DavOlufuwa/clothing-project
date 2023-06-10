import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

const Home = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default Home