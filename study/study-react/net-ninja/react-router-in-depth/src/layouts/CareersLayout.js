import React from 'react'
import { Outlet } from 'react-router-dom'

const CareersLayout = () => {

  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?
      </p>

      <Outlet />
    </div>
  )
}

export default CareersLayout