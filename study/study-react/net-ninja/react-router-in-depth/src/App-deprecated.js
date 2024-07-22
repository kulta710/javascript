import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

// pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          {/* The difference between Link and NavLink is class="active" */}
          {/* You choose to use NavLink you style to the 'active class' */}
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          {/* 'index' is same as path="/" */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route index element={<Home />} />

          {/* You can omit root character '/' */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;