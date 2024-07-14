import { useState, useEffect } from 'react'
import BlogList from './BlogList'

function Home () {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // If we send request through 'http://localhost:8000/blogs' as json watch server is executing, error doesn't take place. But in case we send request through 'http://localhost:8000/blogss', error doesn't take place either although it sends an empty data array.
    // So, we should check response is ok, and if it is not, we have to throw an error and handle the error.
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then((response) => {
          console.log(response)
          
          if (!response.ok) {
            throw new Error('could not fetch the data for that resource')
          }

          return response.json()
        })
        .then((data) => {
          console.log(data)
          setBlogs(data)
          setIsPending(false)
          setError(null)
        })
        .catch(err => {
          setIsPending(false)
          setError(err.message)
        })
    }, 1000)
  }, [])

  return (
    <div className="home">
      {error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  )
}

export default Home