import SingleRecipe from '../../components/SingleRecipe'
import { useFetch } from '../../hooks/useFetch'

function Home() {
  const url = 'http://localhost:3001/recipes'
  const { data: recipes, isPending, error } = useFetch(url)

  return (
    <div className='g-container justify-center'>
      { error && <div className='error'>{ error }</div> }
      { isPending && <div className='loading'>Loading...</div> }
      <div className='g-container grid-cols-fit gap-20 mt-16'> 
        { recipes && <SingleRecipe recipes={ recipes }/> } 
      </div>
    </div>
  )
}

export default Home
