function Navbar () {

  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        {/* Style is given to an element by javascript object like below */}
        {/* <a href="/create" style={{
          color: 'white',
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>New Blog</a> */}
        <a href="/create">New Blog</a>
      </div>
    </nav>
  )
}

export default Navbar