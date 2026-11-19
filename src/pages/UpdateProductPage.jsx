import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router'

function EditProduct() {
     const [formData, setFormData] = useState({
        title:'',
        description: '',
        category : '',
        price :'',
        quantity:''
        })
        const {productId} = useParams()
  async function loadProduct() {
         const response = await axios.get(`${import.meta.env.VITE_BACK_END_SERVER_URL}/products/${productId}`)
         setFormData(response.data)
    }
useEffect(()=>{loadProduct()},[])
function handleChange(event){
        setFormData({...formData, [event.target.name]:event.target.value})
    }
const navigate = useNavigate()
    async function handleSubmit(event) {
        event.preventDefault()
        console.log('form submitted')

        const updatedProduct = await axios.put(`${import.meta.env.VITE_BACK_END_SERVER_URL}/products/${productId}`,formData)
        navigate('/products')
    }

  return (
    <div>
      <h1>Edit Product</h1>
       <form onSubmit={handleSubmit}>
        <label htmlFor='title'>title: </label>
        <input
        type='text'
        name='title'
        id='title'
        value={formData.title}
        onChange={handleChange}/>

        <label>description:</label>
        <input  type='text'
        name='description'
        id='description'
        value={formData.description}
        onChange={handleChange}/>

        <label>category:</label>
        <input  type='text'
        name='category'
        id='category'
        value={formData.category}
        onChange={handleChange}/>

        <label>price:</label>
        <input  type='Number'
        name='price'
        id='price'
        value={formData.price}
        onChange={handleChange}/>

        <label>quantity:</label>
        <input  type='number'
        name='quantity'
        id='quantity'
        value={formData.quantity}
        onChange={handleChange}/>

        <button>Edit Product</button>
        </form>
    </div>
  )
}

export default EditProduct
