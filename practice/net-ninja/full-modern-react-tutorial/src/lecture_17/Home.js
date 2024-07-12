import { useState, useEffect } from 'react'
import BlogList from './BlogList'

function Home () {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setBlogs(data)
      })
      .catch(console.log)
  }, [])

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  )
}

export default Home