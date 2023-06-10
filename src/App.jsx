import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./routes/Home/Home"
import Categories from "./routes/Categories/Categories"
import SignIn from "./routes/SignIn/SignIn"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home/>}>
      <Route index element={<Categories/>}/>
      <Route path="sign-in" element={<SignIn />}/>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
