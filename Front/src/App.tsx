import { Route, Routes, BrowserRouter } from "react-router-dom"
import Cart from "./components/cart/Cart"
import Category from "./components/category/Category"
import Checkout from "./components/checkout/Checkout"
import Error from "./components/error/Error"
import Home from "./components/home/Home"
import EnterCode from "./components/login/enter_code/Enter_Code"
import Login from "./components/login/Login"
import SignUp from "./components/login/signup/SignUp"
import Products from "./components/products/Products"
import { AppContextProvider } from "./context/Context"

const App = () => {
  return (

    <AppContextProvider>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/category' element={<Category />} />
            <Route path='/error' element={<Error />} />
            <Route path='/products/:id' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/enterCode" element={<EnterCode />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App
