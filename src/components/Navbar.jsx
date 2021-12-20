import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import { useTheme } from '../hooks/useTheme'

function Navbar() {
  const { color } = useTheme()

  return (
    <div className='bg-violet-300 text-black' style={{ backgroundColor: color }}>
      <nav className='container py-4 grid md:grid-cols-2'>
        <div>
          <Link to='/'><h1 className='font-bold text-3xl'>Cooking Ninja</h1></Link>
        </div>
        <div className='flex place-content-evenly items-center'>
          <Searchbar />
          <Link
            to='/create'
            className='
            border border-black rounded px-2 py-2 text-xl 
            hover:bg-rose-500 hover:border-rose-600 hover:text-white transition'
          >Create Recipe</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
