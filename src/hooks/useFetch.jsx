import { useState, useEffect } from 'react'

export const useFetch = (url, method="GET") => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  const [options, setOptions] = useState(null)

  const postData = postData => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
  }

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async fetchOptions => {
      setIsPending(true)

      try {
        const res = await fetch(url, { ...fetchOptions, signal: controller.signal })
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const fetchedData = await res.json()
  
        setIsPending(false)
        setData(fetchedData)
        setError(null)
        
      } catch (err) {
        if(err.name === 'AbortError') {
          console.log('The fetch was aborted')
        } else {
          setError('Oops! Could not fetch the data.')
        }
      }
    }

    if(method === "GET") {
      fetchData()
    }

    if(method === "POST" && options) {
      fetchData(options)
    }  


    return () => controller.abort()
  }, [url, method, options])

  return  { data, isPending, error, postData }
}
