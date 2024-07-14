import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Create () {
  const [ title, setTitle ] = useState('')
  const [ body, setBody ] = useState('')
  const [ author, setAuthor ] = useState('mario')
  const [ isPending, setIsPending ] = useState(false)
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()

    const blog = { title, body, author }

    setIsPending(true)

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      setIsPending(false)
      // When we want to go back previous component, use history.go(-1)
      // If you want forward, use history.go(1)
      // history.go(-1)

      // redirect to the homepage component
      history.push('/')
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>

        {!isPending && <button type="submit">Add Blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  )
}

export default Create