import { useState, useEffect } from 'react'

function useFetch (url) {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()
    
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((response) => {
          console.log(response)
          
          if (!response.ok) {
            throw new Error('could not fetch the data for that resource')
          }

          return response.json()
        })
        .then((data) => {
          console.log(data)
          setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setIsPending(false)
            setError(err.message)
          }
        })
    }, 1000)

    return () => abortCont.abort()
  }, [url])

  return { data, isPending, error }
}

export default useFetch