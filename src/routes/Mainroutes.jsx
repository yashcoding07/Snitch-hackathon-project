import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Productdetails from '../pages/Productdetails'
import Signup from '../pages/Signup'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
      <Route path='/Products/Productdetails/:id' element={<Productdetails />}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
    </Routes>
  )
}

export default Mainroutes