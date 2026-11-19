import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router'

function AllProduct() {
  const [ products ,setProducts] = useState([])
async function loadProducts() {
  const response = await axios.get(`${import.meta.env.VITE_BACK_END_SERVER_URL}/products`)
  setProducts(response.data)
}

useEffect(()=>{loadProducts()},[])

  return (
    <div>
      <h1>All Products</h1>
      {products.map((oneproduct)=>
      <div key={oneproduct._id}>
        <p>Product: {oneproduct.title}</p>
        
        <Link to={`/products/${oneproduct._id}`}>see Details</Link>
      </div>)}
    </div>
  )
}

export default AllProduct
