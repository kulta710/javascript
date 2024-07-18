import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
  
  const [isLightTheme, setIsLightTheme] = useState(true)

  const light = { syntax: '#555', ui: '#ddd', bg: '#eee' }
  const dark = { syntax: '#ddd', ui: '#333', bg: '#555' }

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme)
  }

  return (
    <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider