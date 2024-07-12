import { useState, useEffect } from 'react'
import BlogList from './BlogList'

function Home () {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const [name, setName] = useState('mario')

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)

    setBlogs(newBlogs)
  }

  // If we assign empty array [] as second parameter, useEffect() is ran only once at the rendering of beginning
  useEffect(() => {
    console.log('use effect ran')
    console.log(blogs)
    console.log(name)
  }, [name])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{ name }</p>
    </div>
  )
}

export default Home