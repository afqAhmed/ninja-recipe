import { useEffect, useState } from 'react'
import SingleRecipe from '../../components/SingleRecipe'

import { db } from '../../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'

function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  
  useEffect(() => {
    setIsPending(true)
    const colRef = collection(db, 'recipes') 
      onSnapshot(colRef, (snapshot) => {
        if(snapshot.empty){
          setError('No recipes to load')
          setIsPending(false)
        } else {
          let results = []
          snapshot.docs.forEach(doc => {
            results.push({id: doc.id, ...doc.data()})
          })
          setData(results)
          setIsPending(false)
        }
      })
  }, [])

  return (
    <div className='g-container justify-center'>
      <div className='g-container grid-cols-fit gap-20 mt-16'>
        { error && <div className='error'>{error}</div>}
        { isPending && <div className='loading'>Loading....</div>}
        { data && <SingleRecipe recipes={ data } /> }
      </div>
    </div>
  )
}

export default Home
