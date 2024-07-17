import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

class ThemeToggle extends Component {

  render () {
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          return (
            <ThemeContext.Consumer>
              {(themeContext) => {
                return (
                  <>
                    <button onClick={themeContext.toggleTheme}>Toggle the theme</button>
                    <button onClick={authContext.toggleAuth}>Toggle the auth</button>
                  </>
                )
              }}
            </ThemeContext.Consumer>
          )
        }}
      </AuthContext.Consumer>
    )
  }
}

export default ThemeToggle