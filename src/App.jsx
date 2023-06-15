import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./routes/Home/Home"
import Categories from "./routes/Categories/Categories"
import Authentication from "./routes/Authentication/Authentication"
import Recovery from "./routes/Recovery/Recovery"
import Shop from "./routes/Shop/Shop"
import Checkout from "./routes/Checkout/Checkout"
import Favorites from "./routes/Favorites/Favorites"
import { SnackbarProvider } from "notistack"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home/>}>
      <Route index element={<Categories/>}/>
      <Route path="authentication" element={<Authentication />}/>
      <Route path="favorites" element={<Favorites />}/>
      <Route path="recovery" element={<Recovery />}/>
      <Route path="shop" element={<Shop />}/>
      <Route path="checkout" element={<Checkout />}/>
    </Route>
  )
)

const App = () => {

  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      style={{
        fontWeight : '300',
        color: 'black',
        letterSpacing: '1px',
        border: '1px solid black',
        borderRadius: '0',
        boxShadow: 'none',
      }}
    >
      <RouterProvider router={router} />
    </SnackbarProvider>
  )
}

export default App
