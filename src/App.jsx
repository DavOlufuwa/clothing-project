import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./routes/Home/Home"
import Categories from "./routes/Categories/Categories"
import Authentication from "./routes/Authentication/Authentication"
import Recovery from "./routes/Recovery/Recovery"
import Shop from "./routes/Shop/Shop"
import Checkout from "./routes/Checkout/Checkout"
import { SnackbarProvider } from "notistack"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home/>}>
      <Route index element={<Categories/>}/>
      <Route path="authentication" element={<Authentication />}/>
      <Route path="recovery" element={<Recovery />}/>
      <Route path="shop" element={<Shop />}/>
      <Route path="checkout" element={<Checkout />}/>
    </Route>
  )
)

const App = () => {

  const snackbarVariantStyle = {
    success: { 
      backgroundColor: '#4caf50' 
    }, 
    error: { 
      backgroundColor: '#f44336' 
    }, 
    warning: { 
      backgroundColor: '#ff9800' 
    }, 
    info: { 
      backgroundColor: "#2196f5",
      fontWeight: 'lighter', 
      color:'#000000',
    } 
  };
  

  return (
    <SnackbarProvider
      maxSnack={2}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      preventDuplicate
      variant={snackbarVariantStyle}
    >
      <RouterProvider router={router} />
    </SnackbarProvider>
  )
}

export default App
