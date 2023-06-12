import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./routes/Home/Home"
import Categories from "./routes/Categories/Categories"
import Authentication from "./routes/Authentication/Authentication"
import Recovery from "./routes/Recovery/Recovery"
import Shop from "./routes/Shop/Shop"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home/>}>
      <Route index element={<Categories/>}/>
      <Route path="authentication" element={<Authentication />}/>
      <Route path="recovery" element={<Recovery />}/>
      <Route path="shop" element={<Shop />}/>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
