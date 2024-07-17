import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

class BookList extends Component {

  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          return (
            <ThemeContext.Consumer>
              {(themeContext) => {
                const { isAuthenticated } = authContext
                const { isLightTheme, light, dark } = themeContext
                const theme = isLightTheme ? light : dark

                return (
                  <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
                    <ul>
                      <li style={{ background: theme.ui}}>The way of kings</li>
                      <li style={{ background: theme.ui}}>The name of the wind</li>
                      <li style={{ background: theme.ui}}>The final empire</li>
                    </ul>
                  </div>
                )
              }}
            </ThemeContext.Consumer>
          )
        }}
      </AuthContext.Consumer>
    )
  }
}

export default BookList