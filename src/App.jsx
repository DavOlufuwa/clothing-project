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

  const theme = {
    success: {
      main: '#4caf50',
      dark: '#388e3c',
      light: '#c8e6c9',
      variant: '#333',
    },
    error: {
      main: '#f44336',
      dark: '#d32f2f',
      light: '#ef9a9a',
      variant: '#fff',
    },
    warning: {
      main: '#ff9800',
      dark: '#f57c00',
      light: '#ffe0b2',
      variant: '#333',
    },
    info: {
      main: '#2196f3',
      dark: '#1976d2',
      light: '#90caf9',
      variant: '#000',
    },
  };
    

  return (
    <SnackbarProvider
      maxSnack={2}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      style={{
        fontWeight : '200',
      }}
    >
      <RouterProvider router={router} />
    </SnackbarProvider>
  )
}

export default App
