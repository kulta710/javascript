import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class BookList extends Component {
  // As we write this code, we can use context data using this.context
  static contextType = ThemeContext

  render() {
    const { isLightTheme, light, dark } = this.context
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
  }
}

export default BookList