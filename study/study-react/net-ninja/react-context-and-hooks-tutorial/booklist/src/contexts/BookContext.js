import React, { createContext, useReducer, useEffect } from 'react'

import { bookReducer } from '../reducers/bookReducer'

export const BookContext = createContext()

const BookContextProvider = (props) => {

  // The callback function of third parameter is going to run at initial rendering and initialize books whose value is returning value of the callback function.
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books')
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  return (
    <BookContext.Provider value={{books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider