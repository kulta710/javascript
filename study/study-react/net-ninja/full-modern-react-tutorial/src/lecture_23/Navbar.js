import { Link } from 'react-router-dom'

function Navbar () {

  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links"></div>
      {/* If we use anchor tag, a fresh request is made and sends to the server. That is better to make react control page. To do this, we should use Link from 'react-router-dom' */}
      {/* <a href="/">Home</a>
      <a href="/create">New Blog</a> */}
      {/* Response is much quicker */}
      <Link to="/">Home</Link>
      <Link to="/create">New Blog</Link>
    </nav>
  )
}

export default Navbar