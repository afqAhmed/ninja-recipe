
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'


import { db } from '../../firebase/config'
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore'

function Recipe() {
  const { id } = useParams()
  const { color } = useTheme()

  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    const recipeRef = doc(db, 'recipes', id)

    getDoc(recipeRef)
      .then(doc => {
        if(doc.exists) {
          setIsPending(false)
          setRecipe(doc.data())
        } else {
          setIsPending(false)
          setError('Recipe not found!')
        }
      })
  }, [id])

  return (
    <div className='g-container'>
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='loading'>Loading...</div>}
      {recipe && (
        <div className='container max-w-4xl mt-16 bg-violet-300 px-8 py-6 rounded-xl' style={{ backgroundColor: color, boxShadow: `1px 1px 4px ${color}` }}>
          <h2 className='text-3xl font-bold text-center mb-8'>{recipe.title}</h2>
          <p className='text-gray-500 text-center mt-0.5 text-xl'>{recipe.cookingTime} to make</p>
          <ul className='flex text-gray-500 text-xl justify-center'>
            {recipe.ingredients.map((ing) => (
              <li className='px-1 mt-1' key='ing'>
                {ing}
              </li>
            ))}
          </ul>
          <p className='text-gray-700 text-xl my-8'>{recipe.method}</p>
        </div>
      )}
    </div>
  )
}

export default Recipe
