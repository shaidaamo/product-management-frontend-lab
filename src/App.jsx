import React from 'react'
import { Route,Routes } from "react-router"
import Homepage from './pages/Homepage'
import CreateProduct from './pages/CreateProductPage'
import AllProduct from './pages/AllProductPage'
import ProductDetails from './pages/ProductDetailsPage'
import EditProduct from './pages/UpdateProductPage'
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/products/create' element={<CreateProduct/>}/>   
      <Route path='/products' element={<AllProduct/>}/> 
      <Route path='/products/:productId' element={<ProductDetails/>}/>
       <Route path='/products/:productId/edit' element={<EditProduct/>}/>
      </Routes>
    </div>
  )
}

export default App
