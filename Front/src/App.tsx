import { Route, Routes, BrowserRouter } from "react-router-dom"
import Cart from "./components/cart/Cart"
import Category from "./components/category/Category"
import Checkout from "./components/checkout/Checkout"
import Error from "./components/error/Error"
import Home from "./components/home/Home"
import Products from "./components/products/Products"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/error' element={<Error />} />
          <Route path='/products/:id' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
