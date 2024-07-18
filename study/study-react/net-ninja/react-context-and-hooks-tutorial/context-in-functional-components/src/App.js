import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeToggle from './components/ThemeToggle'

import ThemeContextProvider from './contexts/ThemeContext'
import AuthContextProvider from './contexts/AuthContext'
import BookContextProvider from './contexts/BookContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
            <BookContextProvider>
              <BookList />
            </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;