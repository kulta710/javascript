import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const CareersError = () => {

  const error = useRouteError()

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the homepage</Link>
    </div>
  )
}

export default CareersError