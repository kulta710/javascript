import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/training">Training</NavLink>
    </nav>
  )
}

export default Navbar