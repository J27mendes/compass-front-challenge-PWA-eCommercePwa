import { Route, Routes, BrowserRouter } from "react-router-dom"
import Category from "./components/category/Category"
import Error from "./components/error/Error"
import Home from "./components/home/Home"
import Products from "./components/products/Products"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category' element={<Category />} />
        <Route path='/error' element={<Error />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
