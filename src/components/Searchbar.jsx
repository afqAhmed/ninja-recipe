import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { createBrowserHistory } from 'history'


function Searchbar() {
  const [term, setTerm]= useState('')
  // const history = useHistory()
  let history = createBrowserHistory()



  const handleSubmit = (e) => {
    e.preventDefault()
    
    history.push(`/search?q=${term}`)
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor='searchBar' className='mr-2 text-xl'>Search:</label>
        <input 
          id='searchBar' 
          onChange={ e => setTerm(e.target.value) } 
          className='text-xl py-2 rounded text-black' 
          required />
      </form>
    </div>
  )
}

export default Searchbar