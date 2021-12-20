import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'

function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:3001/recipes/' + id
  const { data: recipe, isPending, error } = useFetch(url)
  const { color } = useTheme()



  return (
    <div className='g-container'>
      { error && <div className='error'>{error}</div> }
      { isPending && <div className='loading'>Loading...</div> }
      {recipe && (
        <div className='container max-w-4xl mt-16 bg-violet-300 px-8 py-6 rounded-xl' style={{ backgroundColor: color, boxShadow: `1px 1px 4px ${color}`}}>
          <h2 className='text-3xl font-bold text-center mb-8'>{recipe.title}</h2>
          <p className='text-gray-500 text-center mt-0.5 text-xl'>{recipe.cookingTime} to make</p>
          <ul className='flex text-gray-500 text-xl justify-center'>
            { recipe.ingredients.map(ing => (
              <li className='px-1 mt-1' key='ing'>{ing}</li>
            ))  }
          </ul>
          <p className='text-gray-700 text-xl my-8'>{recipe.method}</p>
        </div>
      )}
    </div>
  )
}

export default Recipe
