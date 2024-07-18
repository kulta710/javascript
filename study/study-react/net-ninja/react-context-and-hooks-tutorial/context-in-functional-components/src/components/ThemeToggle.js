import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

const ThemeToggle = () =>  {

  const { toggleTheme } = useContext(ThemeContext)
  const { toggleAuth } = useContext(AuthContext)

  return (
    <>
      <button onClick={toggleTheme}>Toggle the theme</button>
      <button onClick={toggleAuth}>Toggle the auth</button>
    </>
  )
}

export default ThemeToggle