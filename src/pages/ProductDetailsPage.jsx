import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams,Link,useNavigate } from 'react-router'


function ProductDetails() {

    const [product, setProduct] = useState(null)
    const {productId} = useParams()
    async function loadProduct() {
         const response = await axios.get(`${import.meta.env.VITE_BACK_END_SERVER_URL}/products/${productId}`)
         setProduct(response.data)
    }
    const navigate = useNavigate()
    async function handleDelete() {
      await axios.delete(`${import.meta.env.VITE_BACK_END_SERVER_URL}/products/${productId}`)
        navigate('/products')
    }

useEffect(()=>{loadProduct()},[])

  return (
    <div>
        <h1>product details</h1>

        {product ? <>
        <p>title : {product.title}</p>
        <p>description : {product.description}</p>
        <p>category : {product.category}</p>
        <p>price : {product.price}</p>
        <p>quantity : {product.quantity}</p>

        <Link to={`/products/${productId}/edit`}>Edit</Link>
        <br />
         <button onClick={handleDelete}>delete</button>
        </>   : null}
       
    </div>
  )
}

export default ProductDetails
