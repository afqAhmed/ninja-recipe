import { useState, useRef } from 'react'
import {  useNavigate } from 'react-router-dom'

import { db } from '../../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const colRef = collection(db, 'recipes')
    const doc = ({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })

    try{
      await addDoc(colRef, doc)
      navigate('/')
    } catch(err) {
      console.log(err.message)
    }
  }

  const handleIngredient = (e) => {
    e.preventDefault()
    const ingrd = newIngredient.trim()
    if (ingrd && !ingredients.includes(ingrd)) {
      setIngredients(prev => [...prev, newIngredient])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  return (   
    <div className='g-container justify-center mt-8'>
      <h1 className='text-4xl text-gray-600 font-semibold mb-12 text-center'>Add a new recipe</h1>
      <form className='w-[500px]' >
        <div className='recipe'>
          <input onChange={(e) => setTitle(e.target.value) } value={ title } className='peer recipe-input' type='text' placeholder="Recipe Title"  required />
          <label className='recipe-label '>Recipe Title:</label>
        </div>

        <div className='recipe mt-6 grid-cols-4'>
          <input onChange={ e => setNewIngredient(e.target.value) } value={ newIngredient} className='peer recipe-input col-span-3 mr-2' type='text' ref={ ingredientInput } placeholder="Recipe ingredients:" required />
          <label className='recipe-label peer-placeholder-shown:top-6 peer-focus:-top-7'>Recipe ingredients</label>
          <button onClick={ handleIngredient } className='btn col-span-1'>Add</button>
          <p className='text-gray-500 text-sm py-2 col-span-4 flex'>Incredients: 
          { ingredients.map(item => <li key={item} className='list-none rounded-full px-2 mx-1 bg-gray-300'>
              {item}
            </li>)
          } </p>
        </div>

        <div className='recipe mt-6'>
          <input onChange={ e => setMethod(e.target.value) } value={ method } className='peer recipe-input' type='text' placeholder="Recipe method:" required />
          <label className='recipe-label'>Recipe method:</label>
        </div>
        <div className='recipe mt-6'>
          <input onChange={ e => setCookingTime(e.target.value) } value={ cookingTime } className='peer recipe-input' type='number' placeholder="Cooking time(minutes):" required />
          <label className='recipe-label'>Cooking time(minutes)</label>
        </div>
        <button type='submit' onClick={ handleSubmit } className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Create
