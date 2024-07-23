import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

// loader
export const careerDetailsLoader = async ({ params }) => {
  
  // automatically put params object in loader function
  const { id } = params

  const response = await fetch("http://localhost:4000/careers/" + id)

  if (!response.ok) throw Error('Could not find that career')

  return response.json()
}

const CareerDetails = () => {

  // const { id } = useParams()

  const career = useLoaderData()

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: { career.salary }</p>
      <p>Location: { career.location }</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?
        </p>
      </div>
    </div>
  )
}

export default CareerDetails