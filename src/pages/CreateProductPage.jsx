import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

function CreateProduct() {
    const [formData, setFormData] = useState({
        title:'',
        description: '',
        category : '',
        price :'',
        quantity:''
    })

    const navigate = useNavigate()

    function handleChange(event){
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    async function handleSubmit(event) {
        event.preventDefault()
        console.log('form submitted')

        const createdPet = await axios.post(`${import.meta.env.VITE_BACK_END_SERVER_URL}/products`,formData)
        navigate('/products')
    }
  return (
    <div>
      <h1>Create Product</h1>
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

        <button>Create Product</button>
      </form>
    </div>
  )
}

export default CreateProduct
