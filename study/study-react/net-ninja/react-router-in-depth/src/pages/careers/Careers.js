import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'

// loader function
export const careersLoader = async () => {

  const response = await fetch("http://localhost:4000/careers")

  return response.json()
}

const Careers = () => {

  const careers = useLoaderData()

  return (
    <div className="careers">
      {careers.map(career => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

export default Careers