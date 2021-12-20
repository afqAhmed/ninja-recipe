import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'


function SingleRecipe({ recipes }) {
  const { color } = useContext(ThemeContext)

  if(recipes.length === 0) {
    return <div className='error'>Oops! No recipes found to load....</div>
  }
  return (
    <div className='container grid grid-cols-fit gap-20 mt-16'>
      { recipes.map(recipe => (
          <div 
            key={recipe.id} 
            className='bg-violet-300 px-6 py-8 shadow-lg shadow-violet-300/40 rounded-lg transition-all hover:rotate-3 hover:shadow-xl hover:shadow-violet-400/40'
            style={{ backgroundColor: color, boxShadow: `5px 5px 3px ${color}` }}
          >
            <h2 className='text-3xl font-bold'>{ recipe.title }</h2>
            <p className='text-gray-500 mt-0.5 mb-4'>{ recipe.cookingTime } to make</p>
            <p className='text-gray-700 mb-8'>{ recipe.method.substring(0, 100) }....</p>
            <div className='flex justify-center'>
              <Link to={`/recipes/${ recipe.id }`} className='bg-rose-500 text-gray-200 py-2 px-4 rounded-md text-lg shadow-lg shadow-pink-500/20 transition hover:bg-rose-600 hover:text-white hover:-translate-y-1'>Cook this</Link>
           </div>
          </div>
        ))}
    </div>
  )
}

export default SingleRecipe
