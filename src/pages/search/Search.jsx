import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import SingleRecipe from '../../components/SingleRecipe'


function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url =   'http://localhost:3001/recipes?q=' + query
  const { data, isPending, error } = useFetch(url)
  

  return (
    <div className='grid justify-center mt-16'>
      <h2 className='text-4xl text-gray-600 font-semibold text-center'>Recipes including "{query}"</h2>
      { error && <div className='error'>{ error }</div> }
      { isPending && <div className='loading'>Loading...</div>}
      { data && <SingleRecipe recipes={ data } /> }

    </div>
  )
}

export default Search
