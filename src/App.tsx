import { Route, Routes, BrowserRouter } from "react-router-dom"
import Category from "./category/Category"
import Error from "./error/Error"
import Home from "./home/Home"
import Products from "./products/Products"

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
