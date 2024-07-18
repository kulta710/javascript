import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {

  const { dispatch } = useContext(BookContext)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (event) => {
    
    event.preventDefault()

    dispatch({ type: 'ADD_BOOK', book: {title, author} })

    setTitle('')
    setAuthor('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} onChange={(event) => {setTitle(event.target.value)}} placeholder="book title" required />
      <input type="text" name="author" value={author} onChange={(event) => {setAuthor(event.target.value)}} placeholder="book author" required />
      <input type="submit" value="add book" />
    </form>
  )
}

export default BookForm